/**
 * Give every image in a post the same click-to-zoom behaviour as the Gallery
 * and Projects pages.
 *
 * Wraps each <img> in an anchor carrying data-pswp-width/height, which is what
 * the post body's PhotoSwipe instance looks for. Also fills in or corrects the
 * img's own width/height from the file on disk, so space is reserved before
 * the image loads.
 *
 * Images that are already wrapped are left alone, so this is safe to re-run.
 *
 * Usage: node scripts/wrap-post-images.mjs [--dry]
 */
import sharp from "sharp";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const POSTS = new URL("../src/lib/posts/", import.meta.url).pathname;
const STATIC = new URL("../static/", import.meta.url).pathname;
const DRY = process.argv.includes("--dry");

const cache = new Map();

async function dimsFor(src) {
  if (cache.has(src)) return cache.get(src);
  let v = null;
  try {
    const m = await sharp(path.join(STATIC, src.replace(/^\//, ""))).metadata();
    v = { w: m.width, h: m.height };
  } catch {
    v = null;
  }
  cache.set(src, v);
  return v;
}

const totals = { wrapped: 0, dims: 0, skipped: 0 };

for (const name of (await readdir(POSTS)).filter((f) => f.endsWith(".md"))) {
  const file = path.join(POSTS, name);
  const before = await readFile(file, "utf8");

  // Park already-wrapped images so they are never processed twice.
  const parked = [];
  let s = before.replace(/<a\b[^>]*data-pswp-width[^>]*>[\s\S]*?<\/a>/g, (m) => {
    parked.push(m);
    return `@@PSWP${parked.length - 1}@@`;
  });

  let wrapped = 0;
  let fixed = 0;

  for (const m of [...s.matchAll(/<img\b[^>]*?\/>/gs)]) {
    const tag = m[0];
    const src = tag.match(/src="([^"]+)"/)?.[1];

    if (!src || !src.startsWith("/assets/")) {
      totals.skipped++;
      continue;
    }

    const d = await dimsFor(src);
    if (!d) {
      totals.skipped++;
      continue;
    }

    let next = tag;
    if (/width="\d+"/.test(next)) {
      const corrected = next
        .replace(/width="\d+"/, `width="${d.w}"`)
        .replace(/height="\d+"/, `height="${d.h}"`);
      if (corrected !== next) fixed++;
      next = corrected;
    } else {
      next = next.replace(/<img\b/, `<img width="${d.w}" height="${d.h}"`);
      fixed++;
    }

    s = s.replace(
      tag,
      `<a href="${src}" data-pswp-width="${d.w}" data-pswp-height="${d.h}" class="block cursor-zoom-in">${next}</a>`,
    );
    wrapped++;
  }

  s = s.replace(/@@PSWP(\d+)@@/g, (_, i) => parked[Number(i)]);

  totals.wrapped += wrapped;
  totals.dims += fixed;

  if (s !== before) {
    console.log(`  ${name.padEnd(20)} wrapped ${String(wrapped).padStart(2)}, dims ${fixed}`);
    if (!DRY) await writeFile(file, s);
  }
}

console.log(
  `\n${DRY ? "[dry run] " : ""}${totals.wrapped} image(s) wrapped, ` +
    `${totals.dims} dimension(s) set/corrected, ${totals.skipped} skipped`,
);
