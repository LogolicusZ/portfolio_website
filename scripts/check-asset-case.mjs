/**
 * Verify every /assets/... reference in src/ matches a git-tracked file
 * exactly, including case.
 *
 * macOS is case-insensitive, so a reference to `favicon.svg` happily resolves
 * to a tracked `Favicon.svg` locally and the build passes. The Linux CI runner
 * checks out the real name, 404s, and aborts prerendering. This catches that
 * before it reaches CI.
 *
 * Usage: node scripts/check-asset-case.mjs
 */
import { execSync } from "node:child_process";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const tracked = new Set(
  execSync("git ls-files static", { cwd: ROOT, encoding: "utf8" }).split("\n").filter(Boolean)
);
const byLower = new Map([...tracked].map((p) => [p.toLowerCase(), p]));

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(svelte|md|ts|js|html)$/.test(e.name)) out.push(p);
  }
  return out;
}

const refs = new Set();
for (const file of await walk(path.join(ROOT, "src"))) {
  const s = await readFile(file, "utf8");
  for (const m of s.matchAll(/["'(](\/assets\/[^"'\s)]+\.[a-zA-Z0-9]{2,5})/g)) refs.add(m[1]);
}

const problems = [];
for (const ref of [...refs].sort()) {
  const want = `static${ref}`;
  if (tracked.has(want)) continue;
  problems.push([ref, byLower.get(want.toLowerCase())]);
}

if (problems.length === 0) {
  console.log(`${refs.size} asset references OK (exact case match against the git index)`);
  process.exit(0);
}

for (const [ref, actual] of problems) {
  console.error(
    actual ? `CASE MISMATCH  ${ref}\n               git has /${actual.slice("static".length)}` : `MISSING        ${ref}`
  );
}
console.error(`\n${problems.length} problem(s) — these will 404 on a case-sensitive host.`);
process.exit(1);
