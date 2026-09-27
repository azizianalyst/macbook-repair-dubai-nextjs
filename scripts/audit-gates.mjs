#!/usr/bin/env node
// Regression gates for the defect classes found in the 2026-09-23 expert audit.
// Each gate exists because the bug it catches ALREADY shipped once and was invisible
// to every other check we had. Run against a fresh `next build`.
//
//   node scripts/audit-gates.mjs            # all gates
//   node scripts/audit-gates.mjs --json     # machine-readable, for CI
//
// Exit 0 = clean. Non-zero = a regression. Wire into CI next to the build.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BUILD = path.join(ROOT, ".next/server/app");
const JSON_OUT = process.argv.includes("--json");
const results = [];
const gate = (name, failures, detail) =>
  results.push({ name, pass: failures.length === 0, failures, detail });

function pages() {
  const out = [];
  (function walk(d) {
    for (const e of readdirSync(d)) {
      const p = path.join(d, e);
      if (statSync(p).isDirectory()) walk(p);
      else if (e.endsWith(".html")) {
        let url = "/" + path.relative(BUILD, p).replace(/\.html$/, "");
        if (url === "/index") url = "/";
        if (!url.startsWith("/admin") && !url.startsWith("/_")) out.push({ url, file: p });
      }
    }
  })(BUILD);
  return out;
}

if (!existsSync(BUILD)) {
  console.error("No build found at .next/server/app — run `npm run build` first.");
  process.exit(2);
}
const ALL = pages();

// ---------------------------------------------------------------------------
// 1. Every referenced image must exist. Twenty-five image files were referenced
//    but absent; 13 of them only via template literals, which a naive grep misses.
// ---------------------------------------------------------------------------
{
  const srcFiles = [];
  (function walk(d) {
    for (const e of readdirSync(d)) {
      const p = path.join(d, e);
      if (statSync(p).isDirectory()) walk(p);
      else if (/\.(ts|tsx)$/.test(e)) srcFiles.push(p);
    }
  })(path.join(ROOT, "src"));

  const missing = new Set();
  const DIRS = { DEVICE: "/images/devices", SVC: "/images/services", REAL: "/images/real/lab" };
  for (const f of srcFiles) {
    const s = readFileSync(f, "utf8");
    for (const m of s.matchAll(/"(\/images\/[A-Za-z0-9/._-]+\.(?:jpg|png|webp|avif))"/g)) {
      if (!existsSync(path.join(ROOT, "public", m[1]))) missing.add(`${m[1]}  (${path.relative(ROOT, f)})`);
    }
    for (const m of s.matchAll(/\$\{(DEVICE|SVC|REAL)\}(\/[A-Za-z0-9._-]+\.(?:jpg|png))/g)) {
      const rel = DIRS[m[1]] + m[2];
      if (!existsSync(path.join(ROOT, "public", rel))) missing.add(`${rel}  (${path.relative(ROOT, f)})`);
    }
  }
  gate("every referenced image file exists", [...missing],
       "a missing file 404s the whole <picture>, leaving a blank hero");
}

// ---------------------------------------------------------------------------
// 2. No self-serving review markup. aggregateRating/Review about your own
//    business on your own site is Google's review-snippet spam category.
// ---------------------------------------------------------------------------
{
  const bad = ALL.filter(({ file }) => {
    const h = readFileSync(file, "utf8");
    return /"aggregateRating"/.test(h) || /"@type"\s*:\s*"Review"/.test(h);
  }).map((p) => p.url);
  gate("no self-serving aggregateRating / Review markup", bad,
       "ineligible for rich results and a manual-action risk");
}

// ---------------------------------------------------------------------------
// 3. No dangling JSON-LD @id references. A node that points at an @id never
//    defined on the page leaves the entity graph broken.
// ---------------------------------------------------------------------------
{
  const bad = [];
  for (const { url, file } of ALL) {
    const h = readFileSync(file, "utf8");
    const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    const ids = new Set(), refs = new Set();
    for (const b of blocks) {
      for (const m of b.matchAll(/"@id":"([^"]+)"/g)) refs.add(m[1]);
      try {
        const d = JSON.parse(b);
        for (const n of Array.isArray(d) ? d : [d]) if (n && n["@id"] && n["@type"]) ids.add(n["@id"]);
      } catch { /* gate 4 reports malformed JSON */ }
    }
    for (const r of refs) {
      if (r.startsWith("https://macbook-repair-dubai.ae/#") && !ids.has(r)) bad.push(`${url} -> ${r}`);
    }
  }
  gate("no dangling JSON-LD @id references", bad.slice(0, 40),
       `${bad.length} total`);
}

// ---------------------------------------------------------------------------
// 4. All JSON-LD parses.
// ---------------------------------------------------------------------------
{
  const bad = [];
  for (const { url, file } of ALL) {
    for (const m of readFileSync(file, "utf8").matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1]); } catch { bad.push(url); break; }
    }
  }
  gate("all JSON-LD blocks parse", bad, "malformed JSON-LD is silently dropped by Google");
}

// ---------------------------------------------------------------------------
// 5. og:image must not be AVIF. Facebook, LinkedIn, WhatsApp and X cannot
//    render it, so the share card silently breaks.
// ---------------------------------------------------------------------------
{
  const bad = ALL.filter(({ file }) =>
    /property="og:image" content="[^"]*\.avif"/.test(readFileSync(file, "utf8"))).map((p) => p.url);
  gate("no AVIF og:image", bad, "AVIF share cards do not render on major platforms");
}

// ---------------------------------------------------------------------------
// 6. No redirect chains: a destination must never also be a source.
// ---------------------------------------------------------------------------
{
  const bad = [];
  const read = (f) => (existsSync(f) ? readFileSync(f, "utf8") : "");
  const blob = read(path.join(ROOT, "redirects.generated.ts")) + read(path.join(ROOT, "next.config.ts"));
  const sources = new Set(), dests = new Map();
  for (const m of blob.matchAll(/"?source"?\s*:\s*"([^"]+)"[\s\S]{0,120}?"?destination"?\s*:\s*"([^"]+)"/g)) {
    sources.add(m[1].replace(/\/$/, ""));
    dests.set(m[1], m[2]);
  }
  for (const [src, dest] of dests) {
    // Skip route PATTERNS (":slug", ":path*") and the bare root: a wildcard source is
    // not a literal URL, and "/" is the prefix of every wildcard, so both produce
    // false chains.
    if (src.includes(":") || dest.includes(":")) continue;
    const d = dest.replace(/\/$/, "").split("?")[0];
    if (!d || d === "/") continue;
    if (sources.has(d) && d !== src.replace(/\/$/, "")) bad.push(`${src} -> ${dest} (itself a redirect source)`);
  }
  gate("no redirect chains", bad, "each extra hop wastes crawl budget and leaks equity");
}

// ---------------------------------------------------------------------------
// 7. Tenure must never be hardcoded — it silently expires on each anniversary.
// ---------------------------------------------------------------------------
{
  const bad = [];
  (function walk(d) {
    for (const e of readdirSync(d)) {
      const p = path.join(d, e);
      if (statSync(p).isDirectory()) walk(p);
      else if (/\.(ts|tsx)$/.test(e)) {
        const s = readFileSync(p, "utf8");
        for (const line of s.split("\n")) {
          if (!/\b\d\d years of experience|(?<![-–]\s?)\b2\d years\b(?! old| of (rated|write))/.test(line)) continue;
          // A link whose label happens to be the blog post's title is not a claim.
          if (/why-21-years-experience-matters|why 21 years experience matters/i.test(line)) continue;
          if (/^\s*(\/\/|\*|\/\*)/.test(line)) continue;
          // The dated 2026 article about tenure; its body is written as of its publish date.
          if (p.endsWith("Blog21YearsExperience.tsx")) continue;
          bad.push(`${path.relative(ROOT, p)}: "${line.trim().slice(0, 90)}"`);
        }
      }
    }
  })(path.join(ROOT, "src"));
  gate("tenure is derived, never hardcoded", bad,
       "use NAP.yearsInBusiness, which is computed from the founding date");
}

// ---------------------------------------------------------------------------
// 8. Images must carry alt text and explicit dimensions.
// ---------------------------------------------------------------------------
{
  const bad = [];
  for (const { url, file } of ALL) {
    for (const m of readFileSync(file, "utf8").matchAll(/<img\b[^>]*>/g)) {
      const t = m[0];
      if (!/\ssrc="\/images\//.test(t)) continue;
      if (!/\salt="/.test(t)) bad.push(`${url}: <img> without alt`);
      else if (!(/\swidth="/.test(t) && /\sheight="/.test(t))) bad.push(`${url}: <img> without width/height`);
    }
  }
  gate("images have alt text and dimensions", [...new Set(bad)].slice(0, 20), "CLS and a11y");
}

// ---------------------------------------------------------------------------
const failed = results.filter((r) => !r.pass);
if (JSON_OUT) {
  console.log(JSON.stringify({ ok: failed.length === 0, results }, null, 2));
} else {
  for (const r of results) {
    console.log(`${r.pass ? "\x1b[32m PASS\x1b[0m" : "\x1b[31m FAIL\x1b[0m"}  ${r.name}`);
    if (!r.pass) {
      if (r.detail) console.log(`\x1b[2m        ${r.detail}\x1b[0m`);
      for (const f of r.failures.slice(0, 15)) console.log(`        · ${f}`);
      if (r.failures.length > 15) console.log(`        · …+${r.failures.length - 15} more`);
    }
  }
  console.log(failed.length === 0
    ? `\n\x1b[32mAll ${results.length} gates passed.\x1b[0m`
    : `\n\x1b[31m${failed.length} of ${results.length} gates FAILED.\x1b[0m`);
}
process.exit(failed.length === 0 ? 0 : 1);
