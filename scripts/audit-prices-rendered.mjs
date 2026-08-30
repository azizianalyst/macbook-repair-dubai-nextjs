// Authoritative price-leak gate: crawl the RUNNING site and check what a visitor actually sees.
// Unlike the source heuristic, this catches interpolated/runtime figures and confirms the real
// rendered output. JSON-LD (<script type="application/ld+json">) and the Next hydration payload
// (<script>self.__next_f…) are intentionally EXCLUDED — schema prices are kept by design and are
// never visible to a human. We check the visible HTML (all <script>/<style> stripped).
//
// Usage:
//   1) build + start the site:  npm run build && (npx next start -p 4123 &)
//   2) node scripts/audit-prices-rendered.mjs [baseUrl] [routesFile]
//        baseUrl     default http://localhost:4123
//        routesFile  newline-separated route list; default = built-in high-risk sample
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const BASE = process.argv[2] || "http://localhost:4123";
const ROOT = join(import.meta.dirname, "..");

// Visible price figure (same broadened detector as the source audit, minus the code-only forms).
const PRICE_RE = /\bAED\s*\d|\d[\d,]*\s*AED\b|\d[\d,]*\s*[Dd]irhams?\b|\bDhs?\.?\s*\d/g;

// High-risk + representative sample (cost/pricing pages, hubs, one of each template family,
// blog cost posts, home). Override by passing a routes file listing every route for a full sweep.
const SAMPLE = [
  "/", "/mac-repair-cost-dubai/", "/pricing/", "/imac-repair-cost-dubai/",
  "/macbook-repair-dubai/", "/mac-repair-dubai/", "/iphone-repair-dubai/", "/ipad-repair-dubai/",
  "/macbook-screen-repair-dubai/", "/macbook-battery-replacement-dubai/", "/macbook-logic-board-repair-dubai/",
  "/macbook-air-m2-repair-dubai/", "/macbook-air-m2-screen-repair-dubai/", "/macbook-pro-m3-repair-dubai/",
  "/macbook-pro-m4-screen-repair-dubai/", "/imac-m3-repair-dubai/", "/mac-mini-m2-repair-dubai/",
  "/mac-studio-m1-repair-dubai/", "/mac-pro-intel-repair-dubai/",
  "/iphone-15-pro-repair-dubai/", "/iphone-screen-repair-dubai/", "/ipad-screen-repair-dubai/",
  "/apple-watch-repair-dubai/", "/macbook-repair-near-me/", "/best-macbook-repair-shop-dubai/",
  "/same-day-macbook-repair-dubai/", "/corporate-macbook-repair-dubai/", "/apple-repair-dubai/",
  "/blog/macbook-air-screen-repair-cost-dubai/", "/blog/macbook-pro-m5-screen-repair-cost-dubai/",
  "/blog/iphone-battery-replacement-cost-dubai/", "/blog/imac-screen-repair-cost-dubai/",
  "/macbook-air-m2-repair-dubai", // also hit a non-trailing form
];

const routesFile = process.argv[3];
let routes = SAMPLE;
if (routesFile && existsSync(routesFile)) {
  routes = readFileSync(routesFile, "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
}

function stripScripts(html) {
  return html
    // <head> holds the SEO meta layer (<title>, meta description, OG/Twitter) — prices are KEPT
    // there on purpose for ranking, and are never visible on the page body. Exclude it entirely.
    .replace(/<head\b[^>]*>[\s\S]*?<\/head>/i, " ")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " "); // drop tags; keep visible text nodes only
}

// src/proxy.ts rate-limits to 60 req/min per IP and 429s the rest, but exempts search-engine
// and AI-crawler UAs. Without this the gate reads throttle responses instead of pages and
// "passes" because 429 bodies contain no prices.
const CRAWLER_UA = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

const leaks = [];
let checked = 0, errors = 0;
for (const route of routes) {
  const url = BASE.replace(/\/$/, "") + route;
  try {
    const res = await fetch(url, { redirect: "follow", headers: { "user-agent": CRAWLER_UA } });
    const html = await res.text();
    if (res.status >= 400) { errors++; console.log(`  ! ${res.status} ${route}`); continue; }
    const visible = stripScripts(html);
    const found = [...new Set(visible.match(PRICE_RE) || [])];
    if (found.length) leaks.push({ route, found });
    checked++;
  } catch (e) {
    errors++;
    console.log(`  ! fetch failed ${route}: ${e.message}`);
  }
}

console.log(`\nChecked ${checked} routes (${errors} errors) against ${BASE}`);
// A route that could not be fetched was not audited. Passing here would let an unreachable
// server — or a rate-limited crawl — report a clean bill of health for pages nobody read.
if (errors) {
  console.log(`✗ FAIL — ${errors} route(s) could not be checked; the run is inconclusive.`);
  console.log("  Is the server up, and is the crawler UA exempt from the proxy rate limiter?");
  process.exit(1);
}
if (leaks.length === 0) {
  console.log("✓ PASS — no visible price figures in rendered output (JSON-LD schema excluded by design).");
  process.exit(0);
}
console.log(`✗ FAIL — visible prices on ${leaks.length} route(s):`);
for (const l of leaks) console.log(`  ${l.route}  →  ${l.found.slice(0, 8).join("  ·  ")}`);
process.exit(1);
