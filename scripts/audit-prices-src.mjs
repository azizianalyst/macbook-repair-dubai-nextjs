// Fast heuristic: scan the VISIBLE source layers for leaked price figures after the
// hide-prices sweep. The site keeps prices in DATA (model JSON), the /pricing JSON-LD Offers
// (prices.generated.ts + schema), and the PRICING constant (numbers with no "AED" prefix) —
// those are intentionally retained and whitelisted. Anything that renders "AED <number>" to a
// visitor (views, non-admin blocks, prose content, generated meta/titles) is a leak.
//
// Authoritative check is audit-prices-rendered.mjs (crawls the built site); this is the quick
// pre-build gate.  Usage: node scripts/audit-prices-src.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SRC = join(ROOT, "src");

// Files/globs that legitimately still contain figures (data + schema + admin-only) or the
// backstop phrase itself. Matched as substring against the repo-relative path.
const WHITELIST = [
  "src/content/prices.generated.ts",
  "src/content/blog-taxonomy.generated.ts",
  "src/lib/seo-schema.ts",
  "src/lib/page-schema.ts",
  "src/lib/schema.ts",
  "src/lib/lead-schema.ts",
  "src/lib/price.ts",
  "src/proxy.ts",              // anti-scraper decoy: fake "AED 9,999" is served ONLY to blocked bots
  // --- SEO meta layer: prices KEPT here on purpose (backend/SERP only, never visible on the page) ---
  "src/lib/route-meta.generated.ts",
  "src/lib/page-meta-overrides.generated.ts",
  "src/lib/dynamic-meta.ts",
  "src/lib/page-meta.ts",     // meta-layer logic (comment references "from AED" as an example)
];
// decision replaces OUR figure with a quote CTA while keeping Apple's list price, because the
// whole point of the comparison is the delta. Only lines that name Apple as the source are
// exempt — an unattributed figure is still a leak.
// and still leaks our figure. So we remove only the Apple-attributed phrase (the attribution plus
// the figure that follows it) and test what remains. 8 real lines were being wrongly cleared.

const WHITELIST_RE = [
  /\.json$/,                 // model data JSON — pricing kept for logic/schema, never rendered
  /Admin\.tsx$/,             // /admin/* is noindex + auth-gated, never public
  /src\/app\/.*page\.tsx$/,   // app routes are thin wrappers: only inline metadata (SEO), no visible body
  /src\/app\/admin\//,
  /src\/app\/api\//,
  /src\/lib\/ai\//,           // AI SOP prompt text (internal; policy already flipped to no-price)
];

// A visible price figure: "AED 600", "AED 1,200", "AED 600–1,499", "from AED 350", plus
// interpolated/JSX forms that RENDER a figure: `AED ${m.pricing.screen}`, `AED {r.price}`,
// and "600 AED" / "Dhs 600" variants.
const PRICE_RE = /\bAED\s*(?:\d|\$?\{)|\d[\d,]*\s*AED\b|\d[\d,]*\s*[Dd]irhams?\b|\bDhs?\.?\s*\d/;
// Garble left behind by a bad strip (require the tell-tale space/artifact so natural prose like
// "we collect from, and …" is NOT flagged).
const GARBLE_RE = /(Price on request|Get price on WhatsApp)\s*\d|\bfrom\s+[.,]|\bfrom\s+AED\b(?!\s*\d)|\(\s*AED\s*\)\s*\d/;

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|json|mdx?)$/.test(e)) out.push(p);
  }
  return out;
}

// Apple's PUBLISHED price, attributed to Apple, is not our price — the comparison tables and
// "cheaper than Apple" answers depend on keeping it. But exemption has to be per-FIGURE, not
// per-line: "Apple charges AED 900; ours is AED 600" must keep AED 600 visible. Line-level
// stripping failed both ways (it cleared our figures, or re-flagged Apple's) until this was
// modelled as: for each figure, is the nearest preceding attribution closer than the nearest
// preceding "ours" marker?
const ATTRIB = /\(Apple list\)|Apple list price|Apple Store|at Apple\b|Apple lists?|Apple (?:typically )?charges|Apple's|per Apple's|AppleCare\+?|Genius Bar/gi;
// Deliberately only STRONG ownership markers. "from" and "starts at" were in this list and
// broke on "Apple lists from AED 4,999" — the weak word sat between the attribution and the
// figure and stole it back for us.
const OURS   = /\bour(?:s| workshop| price| quote)?\b|\bwe charge\b|\bwe fit\b|\bat our\b/gi;
const FIGURE = /AED\s?[\d,]+/gi;

/** true when every AED figure on the line is attributed to Apple rather than to us. */
function allFiguresAreApple(line) {
  const lastBefore = (re, idx) => {
    let last = -1, m; re.lastIndex = 0;
    while ((m = re.exec(line)) && m.index < idx) last = m.index;
    return last;
  };
  let any = false, m;
  FIGURE.lastIndex = 0;
  while ((m = FIGURE.exec(line))) {
    any = true;
    const a = lastBefore(new RegExp(ATTRIB.source, "gi"), m.index);
    const o = lastBefore(new RegExp(OURS.source, "gi"), m.index);
    // Look ahead for a trailing attribution ("AED 1,449 (Apple list)") — but stop at the first
    // ours-marker or comparison word, or "AED 500 at our workshop, versus AED 899 at Apple"
    // would let our figure borrow Apple's attribution.
    let trailing = line.slice(m.index, m.index + 60);
    const stop = trailing.search(/\bour\b|\bours\b|\bwe\b|\bversus\b|\bvs\.?\b|\bhere\b/i);
    if (stop > 0) trailing = trailing.slice(0, stop);
    const attributedAfter = /\((?:Apple list|Apple list price|Genius Bar)[^)]*\)|\bat (?:the )?Apple\b/i.test(trailing);
    if (!attributedAfter && !(a >= 0 && a > o)) return false;   // this figure is ours
  }
  return any;
}

const leaks = [];
for (const file of walk(SRC)) {
  const rel = relative(ROOT, file);
  if (WHITELIST.includes(rel) || WHITELIST_RE.some((re) => re.test(rel))) continue;
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (allFiguresAreApple(line)) return;      // every figure here is Apple's, attributed
    if (PRICE_RE.test(line) || GARBLE_RE.test(line)) {
      leaks.push({ rel, n: i + 1, text: line.trim().slice(0, 140) });
    }
  });
}

// ── Structured-data prices (schema) ────────────────────────────────────────────
// These do NOT appear in the text scan above: `price: 500` has no "AED" next to it, so PRICE_RE
// cannot see it. They matter more than visible copy, because they are what Google reads for
// rich results — and the rendered gate misses them too, since it fetches raw HTML while this
// schema is injected client-side by useSeo. On 2026-08-31 a raw-HTML scan reported "0 structured
// prices" while the JS-rendered page carried "price":"500"; Googlebot renders JS and saw it.
// Checked here, at the source, where neither blind spot applies.
const SCHEMA_CALL = /(?:serviceSchema|service)\(\{(?:[^{}]|\{[^{}]*\})*?\}\)/gs;
const SCHEMA_PRICE = /^[ \t]*price(?:Max)?\s*:/m;
const schemaLeaks = [];
for (const file of walk(SRC)) {
  const rel = relative(ROOT, file);
  if (WHITELIST.includes(rel) || WHITELIST_RE.some((re) => re.test(rel))) continue;
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(SCHEMA_CALL)) {
    if (SCHEMA_PRICE.test(m[0])) {
      const n = src.slice(0, m.index).split("\n").length;
      schemaLeaks.push({ rel, n });
    }
  }
}
if (schemaLeaks.length) {
  console.log(`✗ FAIL — ${schemaLeaks.length} schema call(s) publish a price to rich results:`);
  for (const l of schemaLeaks.slice(0, 20)) console.log(`  ${l.rel}:${l.n}`);
  if (schemaLeaks.length > 20) console.log(`  … +${schemaLeaks.length - 20} more`);
  console.log("  Fix: drop the `price:` field — service() emits a priceless Offer when it is omitted.");
  process.exit(1);
}

if (leaks.length === 0) {
  console.log("✓ PASS — no visible price figures found in the source layer.");
  process.exit(0);
}
const byFile = {};
for (const l of leaks) (byFile[l.rel] ??= []).push(l);
console.log(`✗ FAIL — ${leaks.length} price leak(s) across ${Object.keys(byFile).length} file(s):\n`);
for (const [f, ls] of Object.entries(byFile)) {
  console.log(`  ${f}  (${ls.length})`);
  for (const l of ls.slice(0, 4)) console.log(`    ${l.n}: ${l.text}`);
  if (ls.length > 4) console.log(`    … +${ls.length - 4} more`);
}
process.exit(1);
