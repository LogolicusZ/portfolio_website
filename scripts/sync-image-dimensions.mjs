/**
 * Rewrite hardcoded image width/height to match the files on disk.
 *
 * Gallery pages and posts carry literal pixel dimensions used for
 * aspect-ratio reservation (CLS) and for PhotoSwipe's data-pswp-width /
 * data-pswp-height. Resizing the sources invalidates all of them, which would
 * leave the lightbox upscaling past a photo's real resolution.
 *
 * Handles both object literals ({ src, alt, width, height }) and <img> tags.
 *
 * Usage: node scripts/sync-image-dimensions.mjs [--dry]
 */
import sharp from "sharp";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = new URL("../src/", import.meta.url).pathname;
const STATIC = new URL("../static/", import.meta.url).pathname;
const DRY = process.argv.includes("--dry");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(svelte|md|ts)$/.test(e.name)) out.push(p);
  }
  return out;
}

const dims = new Map();
async function dimsFor(assetPath) {
  if (dims.has(assetPath)) return dims.get(assetPath);
  // SVGs are resolution-independent; sharp reports a rasterized size, so
  // leave their declared dimensions alone.
  if (/\.svg$/i.test(assetPath)) {
    dims.set(assetPath, null);
    return null;
  }
  let v = null;
  try {
    const m = await sharp(path.join(STATIC, assetPath.replace(/^\//, ""))).metadata();
    v = { width: m.width, height: m.height };
  } catch {
    v = null;
  }
  dims.set(assetPath, v);
  return v;
}

let changed = 0;
let files = 0;

for (const file of await walk(SRC)) {
  const before = await readFile(file, "utf8");
  let after = before;

  // object literals: { ... src: '/assets/...', ... width: N, height: M ... }
  const objects = [...before.matchAll(/\{[^{}]*?src:\s*['"](\/assets\/[^'"]+)['"][^{}]*?\}/g)];
  for (const m of objects) {
    const d = await dimsFor(m[1]);
    if (!d) continue;
    const updated = m[0]
      .replace(/width:\s*\d+/, `width: ${d.width}`)
      .replace(/height:\s*\d+/, `height: ${d.height}`);
    if (updated !== m[0]) {
      after = after.replace(m[0], updated);
      changed++;
    }
  }

  // YAML frontmatter banners: path/alt/width/height (posts use `path:`, not `src:`)
  const yaml = [...after.matchAll(
    /path:\s*["'](\/assets\/[^"']+)["']([\s\S]{0,200}?width:\s*)(\d+)([\s\S]{0,120}?height:\s*)(\d+)/g
  )];
  for (const m of yaml) {
    const d = await dimsFor(m[1]);
    if (!d) continue;
    const updated = `path: "${m[1]}"${m[2]}${d.width}${m[4]}${d.height}`;
    if (updated !== m[0]) {
      after = after.replace(m[0], updated);
      changed++;
    }
  }

  // <img ...> tags carrying explicit width/height
  const tags = [...after.matchAll(/<img\b[^>]*?>/gs)];
  for (const m of tags) {
    const srcMatch = m[0].match(/src=["'](\/assets\/[^"']+)["']/);
    if (!srcMatch) continue;
    const d = await dimsFor(srcMatch[1]);
    if (!d) continue;
    const updated = m[0]
      .replace(/width=["']\d+["']/, `width="${d.width}"`)
      .replace(/height=["']\d+["']/, `height="${d.height}"`);
    if (updated !== m[0]) {
      after = after.replace(m[0], updated);
      changed++;
    }
  }

  if (after !== before) {
    files++;
    console.log(`  ${path.relative(SRC, file)}`);
    if (!DRY) await writeFile(file, after);
  }
}

console.log(`\n${DRY ? "[dry run] " : ""}${changed} dimension pair(s) updated across ${files} file(s)`);
