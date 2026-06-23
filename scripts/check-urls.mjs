// URL health check: old-site redirects vs codebase routes vs live site.
// Usage: node scripts/check-urls.mjs [--live]   (--live also HTTP-checks every URL)
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://macbook-repair-dubai.ae";
const LIVE = process.argv.includes("--live");

// 1. codebase routes from src/app/**/page.tsx
const routes = new Set();
(function walk(dir, prefix) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, prefix + "/" + name);
    else if (name === "page.tsx") routes.add(prefix === "" ? "/" : prefix);
  }
})("src/app", "");

// 2. old-site redirect map
const redirectsSrc = readFileSync("redirects.generated.ts", "utf8");
const redirects = JSON.parse(
  redirectsSrc.slice(redirectsSrc.indexOf("= [") + 2, redirectsSrc.lastIndexOf("]") + 1)
);

let fail = 0;
const bad = (msg) => { fail++; console.log("  ✗ " + msg); };

// 0. Source-link convention: lowercase, https, non-www, and slash-FREE <Link> hrefs.
// Rendered URLs carry a trailing slash (next.config trailingSlash:true), but Next appends
// that automatically, so source `to=`/`href=` links stay slash-free — that's still the rule.
console.log("\n[0] URL form consistency in source code");
let formBad = 0;
(function scan(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) { scan(full); continue; }
    if (!/\.(tsx?|txt|xml|json)$/.test(name)) continue;
    const src = readFileSync(full, "utf8");
    for (const [line, text] of src.split("\n").entries()) {
      // Only <Link to="…"> stays slash-free (Next's trailingSlash adds the slash at render).
      // Raw <a href="/x/"> anchors are NOT normalised by Next, so they MUST carry the slash —
      // don't flag those.
      if (/\bto=["']\/[a-z0-9/.-]+\/["']/.test(text) && !text.includes(".xml"))
        { formBad++; bad(`trailing-slash <Link to>: ${full}:${line + 1}`); }
      if (/http:\/\/macbook|www\.macbook-repair-dubai/.test(text))
        { formBad++; bad(`www or http:// URL in ${full}:${line + 1}`); }
      // NOTE: absolute page URLs now CARRY a trailing slash (trailingSlash:true is canonical),
      // so the old "no trailing slash on absolute URLs" rule was retired — it false-flagged
      // correct canonical/schema URLs. Canonical/sitemap/redirect URL form is verified at
      // runtime instead (npm run check:urls:live).
    }
  }
})("src");
for (const r of [...routes]) if (/[A-Z]/.test(r)) { formBad++; bad(`uppercase route: ${r}`); }
if (!formBad) console.log("  ✓ source links lowercase, slash-free, https, non-www");

// 3. every redirect destination must be a real route (or another redirect source)
console.log(`\n[1] ${redirects.length} legacy redirects → destination exists in codebase`);
const sources = new Set(redirects.map((r) => r.source));
// Destinations carry a trailing slash (trailingSlash:true); routes/sources are stored
// slash-free, so normalise before comparing.
const noSlash = (p) => p.replace(/\/$/, "") || "/";
for (const r of redirects) {
  const dest = noSlash(r.destination);
  if (!routes.has(dest) && !sources.has(dest))
    bad(`${r.source} → ${r.destination} (destination has no page.tsx)`);
}
for (const r of redirects) {
  if (routes.has(r.source))
    bad(`${r.source} is BOTH a redirect source and a live page`);
}
if (!fail) console.log("  ✓ all destinations resolve, no source/page collisions");

// 4. live sitemap vs codebase routes
// Routes that are intentionally noindex and should never appear in the sitemap.
// Admin/management routes are excluded wholesale via the prefix check below.
const NOINDEX = new Set([
  "/landing-template-demo",
  "/cookies",
  "/blog/tag/imac", "/blog/tag/ipad", "/blog/tag/iphone", "/blog/tag/mac", "/blog/tag/macbook",
]);
const isNoindex = (p) => NOINDEX.has(p) || p.startsWith("/admin");
console.log(`\n[2] live sitemap ↔ codebase routes (${routes.size} routes)`);
const childSitemaps = [...(await (await fetch(`${SITE}/sitemap.xml`)).text())
  .matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const sitemapUrls = new Set();
for (const sm of childSitemaps.filter((u) => !u.includes("images"))) {
  for (const [, loc] of (await (await fetch(sm)).text()).matchAll(/<loc>([^<]+)<\/loc>/g))
    sitemapUrls.add(new URL(loc).pathname.replace(/\/$/, "") || "/");
}
const before = fail;
for (const p of routes)
  if (!sitemapUrls.has(p) && !isNoindex(p) && !/\[/.test(p)) bad(`route not in sitemap: ${p}`);
for (const p of sitemapUrls)
  if (!routes.has(p)) bad(`sitemap URL has no page.tsx: ${p}`);
if (fail === before)
  console.log(`  ✓ sitemap (${sitemapUrls.size} URLs) matches codebase exactly (admin/demo excluded)`);

// 5. optional live HTTP checks
if (LIVE) {
  const check = async (path, expect, expectLoc, retries = 2) => {
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const res = await fetch(SITE + path, { redirect: "manual", headers: { "user-agent": "url-check" } });
        if (res.status !== expect) return bad(`${path} → ${res.status} (want ${expect})`);
        if (expectLoc) {
          const loc = new URL(res.headers.get("location"), SITE).pathname;
          if (loc !== expectLoc) return bad(`${path} 301 → ${loc} (want ${expectLoc})`);
        }
        return;
      } catch (e) {
        if (attempt === retries) return bad(`${path} → fetch error: ${e.message}`);
        await new Promise(r => setTimeout(r, 500 * (attempt + 1)));
      }
    }
  };
  const pool = async (items, fn, n = 5) => {
    const q = [...items];
    await Promise.all(Array.from({ length: n }, async () => {
      while (q.length) await fn(q.shift());
    }));
  };
  // trailingSlash:true — request the slash form Google has indexed; the legacy rule fires a
  // single 301 straight to the slashed destination (no extra slash-normalisation hop).
  console.log(`\n[3] live: ${redirects.length} old URLs 301 to the right place`);
  let b = fail;
  await pool(redirects, (r) => check(r.source + "/", 301, r.destination));
  if (fail === b) console.log("  ✓ all legacy URLs 301 correctly");
  console.log(`\n[4] live: ${routes.size} current routes return 200`);
  b = fail;
  await pool([...routes].filter((p) => !p.startsWith("/admin") && !/\[/.test(p)), (p) => check(p === "/" ? "/" : p + "/", 200));
  if (fail === b) console.log("  ✓ all routes live with 200");
}

console.log(fail ? `\n${fail} problem(s) found` : "\nAll checks passed ✓");
process.exit(fail ? 1 : 0);
