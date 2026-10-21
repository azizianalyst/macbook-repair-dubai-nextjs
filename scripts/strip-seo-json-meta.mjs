// Strip price figures from data/seo.json pageMeta (title/description/OG/Twitter meta strings)
// for the request-a-quote switch. These become page-meta-overrides.generated.ts (SERP titles +
// descriptions, highest-precedence meta), so they must carry NO figure.
//
// Prices here are formulaic sentence fragments ("From AED 350.", "Screen from AED 179, battery
// from AED 250", " — From AED 179 |"). We remove the price phrase + its connective punctuation
// and tidy the result, keeping the noun ("screen", "battery") so the copy stays natural.
//
//   node scripts/strip-seo-json-meta.mjs --dry   # report before/after + flag garble, NO write
//   node scripts/strip-seo-json-meta.mjs         # apply in place
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DRY = process.argv.includes("--dry");
const FILE = join(import.meta.dirname, "..", "data", "seo.json");
const META_FIELDS = ["title", "description", "ogTitle", "ogDescription", "twitterTitle", "twitterDescription"];

// A price amount: 350, 1,200, 600–1,499, 2,000+, optionally repeated as a range.
const AMT = String.raw`AED\s*[\d,]+\+?(?:\s*[–-]\s*(?:AED\s*)?[\d,]+\+?)?`;

function stripPrices(s) {
  let t = s;
  // 1) "… — From AED 179 | …" / "… · from AED 350" : drop the whole delimited price segment.
  t = t.replace(new RegExp(String.raw`\s*[·|—–\-]\s*(?:[Ff]rom\s+)?${AMT}`, "g"), "");
  // 2) "screen from AED 600," / "From AED 350." : drop "from AED N" (keep any leading noun),
  //    swallowing a trailing period/comma so we don't leave " ." or " ,".
  t = t.replace(new RegExp(String.raw`\s*[Ff]rom\s+${AMT}\s*[.,]?`, "g"), (m) => (/[.,]\s*$/.test(m) ? ". " : " "));
  // 3) bare "AED 350." / "AED 179–1,499" anywhere left.
  t = t.replace(new RegExp(String.raw`\s*${AMT}\s*[.,]?`, "g"), (m) => (/[.,]\s*$/.test(m) ? ". " : " "));
  // --- tidy ---
  t = t
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,|·])/g, "$1")
    .replace(/([.,])\1+/g, "$1")
    .replace(/,\s*\./g, ".")
    .replace(/\(\s*\)/g, "")
    .replace(/\s*[|·—–-]\s*$/g, "")
    .replace(/[,\s]+$/g, (m) => (/\.\s*$/.test(m) ? "." : ""))
    .replace(/\bfrom\s*[.,]/gi, ".")
    .trim();
  // ensure it ends on real punctuation if it originally did
  if (/[.!?]$/.test(s.trim()) && !/[.!?]$/.test(t)) t += ".";
  return t.replace(/\s{2,}/g, " ").replace(/\s+([.,])/g, "$1").trim();
}

const data = JSON.parse(readFileSync(FILE, "utf8"));
const pm = Array.isArray(data.pageMeta) ? data.pageMeta : [];
let changed = 0;
const flags = [];
const samples = [];
for (const m of pm) {
  for (const f of META_FIELDS) {
    if (typeof m[f] !== "string" || !/AED\s*\d/.test(m[f])) continue;
    const before = m[f];
    const after = stripPrices(before);
    if (samples.length < 12) samples.push({ path: m.path, f, before, after });
    // garble guard
    if (/AED\s*\d/.test(after) || /\bfrom\s*[.,]|,\s*,|\s,|from\s*$|,\s*$/i.test(after) || after.length < 8) {
      flags.push({ path: m.path, f, before, after });
    }
    if (!DRY) m[f] = after;
    changed++;
  }
}

console.log(`pageMeta entries: ${pm.length} | meta strings with prices: ${changed}`);
console.log(`\n=== SAMPLE before/after ===`);
for (const s of samples) console.log(`\n[${s.path}] .${s.f}\n  -  ${s.before}\n  +  ${s.after}`);
console.log(`\n=== GARBLE FLAGS: ${flags.length} ===`);
for (const g of flags.slice(0, 40)) console.log(`  [${g.path}] .${g.f}\n     + ${g.after}`);

if (DRY) {
  console.log(`\n(dry run — nothing written)`);
} else {
  writeFileSync(FILE, JSON.stringify(data, null, 2) + "\n");
  console.log(`\n✓ wrote ${FILE}`);
}
