// Authoritative price-leak gate: crawl the RUNNING site and check what a visitor actually sees.
// Unlike the source heuristic, this catches interpolated/runtime figures and confirms the real
// rendered output. Checks FOUR surfaces and names the one a leak sits on: visible body, the
// <head> meta layer, JSON-LD, and Next's hydration payload. Nothing is excluded — the policy is
// OUR prices stripped everywhere including SERP and schema, except the D17 invoice typical prices; Apple's attributed figures
// and third-party facility fees are allowed (owner decisions, 2026-08/09).
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

// Two figure classes are policy-ALLOWED and must not fail the gate (mirrors the source gate):
//  1. Apple's attributed prices - the owner's decision keeps Apple's figure in comparison
//     tables and "Apple charges AED N" sentences; ours became the CTA.
//  2. Concord Tower's parking/valet rates - the tower's fees, not ours; facility word before
//     the figure or a rate suffix (/hour, /day, flat).
// Everything else - OUR prices - still fails. Exemption is per-figure on a +/-90-char window,
// with an ours-marker override so "our price AED 600 (vs Apple ...)" is still caught.
const ATTRIB = /\(Apple list\)|Apple list price|Apple Store|at Apple\b|Apple lists?|Apple (?:typically )?charges|Apple['\u2019]s|per Apple['\u2019]s|AppleCare\+?|Genius Bar/i;
const OURS = /\\bour(?:s| workshop| price| quote)?\\b|\\bwe (?:charge|fit|repair|replace|fix|quote|estimate|do it|service)\\b|\\bat our\\b|MacBook Repair Dubai (?:charges|quotes|estimates|replaces|provides)/i;
function isAllowedFigure(text, idx, len) {
  const before = text.slice(Math.max(0, idx - 140), idx); // 140: an attribution can sit a whole list-item behind the figure
  const after  = text.slice(idx + len, idx + len + 40);
  // Facility fee: facility word before, or rate suffix directly after.
  const facBefore = /parking|valet|EV charging/i.test(text.slice(Math.max(0, idx - 40), idx));
  // PRICE_RE can match just "AED 2" of "AED 25/day", leaving "5/day" in `after` -
  // allow the remaining digits before the rate suffix or the 25/day cap slips through.
  const rateAfter = /^[\d,]*\s*(?:\/|per\s*)(?:hour|day)|^[\d,]*\s*flat\b/i.test(after);
  if (facBefore || rateAfter) return true;
  // Apple attribution near the figure, without a nearer ours-marker before it.
  const attribNear = ATTRIB.test(before) || ATTRIB.test(after);
  if (!attribNear) return false;
  const oursMatch = [...before.matchAll(new RegExp(OURS.source, "gi"))].pop();
  const attribMatch = [...before.matchAll(new RegExp(ATTRIB.source, "gi"))].pop();
  if (oursMatch && (!attribMatch || oursMatch.index > attribMatch.index)) return false;
  return true;
}
// 3. Our invoice-based typical prices (owner decision D17; one price per model since 2026-10-21).
//    Allowed ONLY as "AED <n>" where n is a published row's median, only in the visible body and
//    hydration payload, never in titles or meta. Any other figure of ours still fails.
const APPROVED = JSON.parse(readFileSync(join(ROOT, "src/content/repair-prices.json"), "utf8")).rows;
const MEDIANS = new Set(APPROVED.map((r) => r.median));
const num = (t) => Number(t.replace(/,/g, ""));
const PRICE_AT = /^AED\s*([\d,]+)(?![\d,]*\s*[–-]\s*\d)/;
function isApprovedPrice(text, idx) {
  const m = text.slice(idx, idx + 20).match(PRICE_AT);
  return !!m && MEDIANS.has(num(m[1]));
}
function realHits(text, surface) {
  const out = [];
  for (const m of text.matchAll(PRICE_RE)) {
    if (surface !== "meta" && isApprovedPrice(text, m.index)) continue;
    // "A2337   AED 1,129": an Apple model number in the cell before an approved price reads as
    // "<n> AED". Skip it only when the digits follow "A" and the AED opens an approved price.
    const aed = m[0].search(/AED/);
    if (surface !== "meta" && aed > 0 && text[m.index - 1] === "A" && isApprovedPrice(text, m.index + aed)) continue;
    if (!isAllowedFigure(text, m.index, m[0].length)) out.push(m[0]);
  }
  return [...new Set(out)];
}

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

// Four surfaces, checked separately so a leak reports WHERE it lives and the fix is targeted.
// The original checked only the visible body and excluded <head> and every <script>, on the
// grounds that meta and schema prices were kept deliberately. That is no longer the policy —
// prices are now stripped everywhere, including SERP — so those exclusions were hiding
// 92 routes of JSON-LD and 4 routes whose price sits in the hydration payload.
// Rendered text carries HTML entities; "Apple&#x27;s parts channel" must read as
// "Apple's" or the attribution regex misses it and flags Apple's own figure as ours.
function decodeEntities(t) {
  return t
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#x2019;|&rsquo;/g, "\u2019")
    .replace(/&nbsp;/g, " ");
}

function surfaces(html) {
  const head = (html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i) || [""])[0];
  return {
    // Visible text: tags become spaces, so a React-split price (AED <!-- -->600) still reads
    // as "AED  600" here and is caught by PRICE_RE.
    body: decodeEntities(html
      .replace(/<head\b[^>]*>[\s\S]*?<\/head>/i, " ")
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")),
    // <title>, meta description, OG/Twitter — including og:image:alt.
    meta: decodeEntities([...head.matchAll(/<title>([^<]*)<\/title>|content="([^"]*)"/gi)]
      .map((m) => m[1] || m[2] || "").join(" | ")),
    // Offer/priceRange nodes.
    schema: [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
      .map((m) => m[1]).join("\n"),
    // Next's flight payload. A price here repaints into the DOM after hydration even when the
    // server HTML is clean, so masking the body alone is not enough.
    hydration: [...html.matchAll(/<script[^>]*>(self\.__next_f[\s\S]*?)<\/script>/gi)]
      .map((m) => m[1]).join("\n"),
  };
}

// A partial mask leaves "Request a quote7" — catch it rather than shipping garbled copy.
const GARBLE_RE = /Request a quote\s*\d/gi;

// Structured prices in JSON-LD carry no adjacent currency, so PRICE_RE cannot see them:
// /pricing serialises Offers as "price":"600" with "priceCurrency":"AED" as a separate field.
// Without this the page would report PASS once the visible tables are stripped while still
// publishing 38 priced Offers to Google.
const SCHEMA_PRICE_RE = /"(?:price|lowPrice|highPrice|priceRange)"\s*:\s*"?[\d.,]+"?/gi;

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
    const s = surfaces(html);
    const per = {};
    for (const [name, text] of Object.entries(s)) {
      const hits = realHits(text, name);
      if (hits.length) per[name] = hits;
    }
    const structured = [...new Set(s.schema.match(SCHEMA_PRICE_RE) || [])];
    // D17 Offers: a "price" is allowed only when it is an approved median AND that figure is
    // visible in the body, so schema never publishes a number the visitor can't see.
    for (let i = structured.length - 1; i >= 0; i--) {
      const m = structured[i].match(/^"price"\s*:\s*"?([\d.]+)/);
      if (m && MEDIANS.has(Number(m[1])) && s.body.includes(`AED ${Number(m[1]).toLocaleString("en-US")}`)) structured.splice(i, 1);
    }
    if (structured.length) per.schemaPrice = structured;
    const garble = [...new Set(s.body.match(GARBLE_RE) || [])];
    if (garble.length) per.garble = garble;
    if (Object.keys(per).length) leaks.push({ route, per });
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
  console.log("✓ PASS — no prices in body, meta, JSON-LD or hydration payload, and no garble.");
  process.exit(0);
}
console.log(`✗ FAIL — prices on ${leaks.length} route(s):`);
const tally = {};
for (const l of leaks) for (const k of Object.keys(l.per)) tally[k] = (tally[k] || 0) + 1;
console.log("  by surface: " + Object.entries(tally).map(([k, n]) => `${k}=${n}`).join(" · "));
for (const l of leaks.slice(0, 40)) {
  const bits = Object.entries(l.per).map(([k, v]) => `${k}: ${v.slice(0, 4).join(" ")}`);
  console.log(`  ${l.route}\n      ${bits.join("\n      ")}`);
}
if (leaks.length > 40) console.log(`  … +${leaks.length - 40} more routes`);
process.exit(1);
