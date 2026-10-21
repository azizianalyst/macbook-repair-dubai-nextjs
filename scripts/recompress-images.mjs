// Recompress oversized image variants in public/images, in place.
//
// Why: the variant pipelines (scripts/topic-images, scripts/home-images) encode
// at fixed quality (avif q48 / webp q70); detailed or alpha-heavy art can still
// land at 300K-1MB per file, which is what users feel as "images load slower
// than the page". This pass re-encodes only the outliers at a tighter quality,
// keeps EXIF/XMP (Google Images attribution + Dubai geo signals) and alpha,
// and only replaces a file when the result is >=10% smaller.
//
// Usage: node scripts/recompress-images.mjs [--dry]
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = "public/images";
const DRY = process.argv.includes("--dry");
const KB = 1024;

// size threshold (bytes) -> encoder options, per filename category.
// Quality steps are small (q48->q42 avif, q70->q60 webp): invisible on the
// blueprint line-art and workshop photos, but 30-60% smaller files.
const RULES = [
  { test: /-desktop\.avif$/, over: 200 * KB, enc: (s) => s.avif({ quality: 42, effort: 6 }) },
  { test: /-tablet\.avif$/,  over: 90 * KB,  enc: (s) => s.avif({ quality: 44, effort: 6 }) },
  { test: /-mobile\.avif$/,  over: 35 * KB,  enc: (s) => s.avif({ quality: 46, effort: 6 }) },
  { test: /-desktop\.webp$/, over: 350 * KB, enc: (s) => s.webp({ quality: 60, effort: 6 }) },
  { test: /-tablet\.webp$/,  over: 150 * KB, enc: (s) => s.webp({ quality: 62, effort: 6 }) },
  { test: /-mobile\.webp$/,  over: 60 * KB,  enc: (s) => s.webp({ quality: 64, effort: 6 }) },
  // Master JPG = legacy-browser fallback + right-click/save target. Cap at
  // 1920w (no upscale) since nothing renders it larger than the desktop slot.
  {
    test: /\.jpe?g$/,
    skip: /-(mobile|tablet|desktop)\./,
    over: 450 * KB,
    enc: (s) => s.resize({ width: 1920, withoutEnlargement: true }).jpeg({ quality: 72, mozjpeg: true }),
  },
];

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const work = [];
for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (![".avif", ".webp", ".jpg", ".jpeg"].includes(ext)) continue;
  const rule = RULES.find((r) => r.test.test(file) && !(r.skip && r.skip.test(file)));
  if (!rule) continue;
  const { size } = await stat(file);
  if (size > rule.over) work.push({ file, size, rule });
}

console.log(`${work.length} oversized files to recompress${DRY ? " (dry run)" : ""}`);
let saved = 0, replaced = 0, kept = 0, failed = 0;

async function one({ file, size, rule }) {
  try {
    const input = await readFile(file);
    // keepMetadata: EXIF + XMP attribution must survive the re-encode.
    const out = await rule.enc(sharp(input).keepMetadata()).toBuffer();
    if (out.length < size * 0.9) {
      if (!DRY) await writeFile(file, out);
      saved += size - out.length;
      replaced++;
      console.log(`  ${file}: ${(size / KB).toFixed(0)}K -> ${(out.length / KB).toFixed(0)}K`);
    } else {
      kept++; // already near-optimal at this quality; not worth the swap
    }
  } catch (err) {
    failed++;
    console.error(`  FAIL ${file}: ${err.message}`);
  }
}

// modest concurrency: avif encode at effort 6 is CPU-heavy
const QUEUE = [...work];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    for (let job = QUEUE.shift(); job; job = QUEUE.shift()) await one(job);
  })
);

console.log(
  `done: ${replaced} replaced, ${kept} kept (savings <10%), ${failed} failed, ` +
  `${(saved / KB / 1024).toFixed(1)} MB saved${DRY ? " (dry run — nothing written)" : ""}`
);
