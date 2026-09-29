/**
 * Downscale oversized source images in place.
 *
 * The site ships camera-resolution originals (up to 5504px) that are never
 * displayed above ~1760px, and only ever opened full-size in the PhotoSwipe
 * lightbox. Capping the long edge at MAX_WIDTH keeps lightbox quality while
 * removing the bulk of the transfer weight.
 *
 * Images already at or below MAX_WIDTH are skipped so they don't take a
 * needless generation of lossy re-encoding.
 *
 * Usage: node scripts/optimize-images.mjs [--dry]
 */
import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import path from "node:path";

const ROOT = new URL("../static/assets/img/", import.meta.url).pathname;
const MAX_WIDTH = 2560;
const QUALITY = 60;
const EFFORT = 6;
const EXT = /\.(avif|jpe?g|png|webp)$/i;
const DRY = process.argv.includes("--dry");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (EXT.test(e.name)) out.push(p);
  }
  return out;
}

const kb = (n) => (n / 1024).toFixed(0).padStart(6);

const files = await walk(ROOT);
let before = 0;
let after = 0;
let touched = 0;
let skipped = 0;

for (const file of files) {
  const original = (await stat(file)).size;
  const meta = await sharp(file).metadata();
  before += original;

  if (meta.width <= MAX_WIDTH) {
    after += original;
    skipped++;
    continue;
  }

  const tmp = `${file}.tmp`;
  const buf = await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .avif({ quality: QUALITY, effort: EFFORT })
    .toBuffer();

  if (DRY) {
    after += buf.length;
    touched++;
    console.log(
      `  ${kb(original)} -> ${kb(buf.length)} KB  ${path.relative(ROOT, file)}`
    );
    continue;
  }

  await sharp(buf).toFile(tmp);
  await rename(tmp, file).catch(async (err) => {
    await unlink(tmp).catch(() => {});
    throw err;
  });

  after += buf.length;
  touched++;
  console.log(
    `  ${kb(original)} -> ${kb(buf.length)} KB  ${path.relative(ROOT, file)}`
  );
}

console.log(
  `\n${DRY ? "[dry run] " : ""}${touched} resized, ${skipped} already <= ${MAX_WIDTH}px`
);
console.log(
  `total ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB` +
    `  (${(100 - (after / before) * 100).toFixed(0)}% smaller)`
);
