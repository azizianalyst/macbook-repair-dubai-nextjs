// Orphan check: every static route must be linked from at least one OTHER page, so "every page
// is connected" is verifiable. This is the inverse of link-check.cjs (which verifies that link
// TARGETS resolve 200). Crawls all pages, collects internal hrefs (ignoring self-links), then
// flags routes that nothing links to. Exit code 1 when orphans exist, so it can gate a QA pass.
//
// Target: the LOCAL production build at http://localhost:3006 (the `macbook-repair-dubai-prod`
// entry in .claude/launch.json). Start it first:
//   npm run build && npm run start -- -p 3006
// If nothing answers on BASE the script exits 2 with instructions. It never falls back to live.
// Live opt-in: BASE=https://macbook-repair-dubai.ae npm run check:orphans. Any non-loopback
// BASE is crawled sequentially, at most one request every 2 s (CLAUDE.md crawl rule).
const fs = require("fs"), path = require("path");
const BASE = (process.env.BASE || "http://localhost:3006").replace(/\/+$/, "");
const APP = path.join(__dirname, "..", "src", "app");

// Politeness: loopback hosts get 12 parallel requests; anything else is treated as live.
let HOST;
try { HOST = new URL(BASE).hostname; } catch { console.error(`ERROR: BASE is not a valid URL: ${BASE}`); process.exit(2); }
const IS_LOCAL = ["localhost", "127.0.0.1", "[::1]", "::1"].includes(HOST) || HOST.endsWith(".localhost");
const CONC = IS_LOCAL ? 12 : 1;
const REMOTE_GAP_MS = 2000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let nextSlot = 0; // earliest start time for the next remote request (reserved synchronously)
async function politeFetch(url, opts) {
  if (IS_LOCAL) return fetch(url, opts);
  const now = Date.now(), at = Math.max(now, nextSlot);
  nextSlot = at + REMOTE_GAP_MS;
  if (at > now) await sleep(at - now);
  // Count the gap from the response too, so connect/latency time can't squeeze two requests
  // under 2 s apart at the server.
  try { return await fetch(url, opts); }
  finally { nextSlot = Math.max(nextSlot, Date.now() + REMOTE_GAP_MS); }
}

// Intentionally-unlinked routes (reachable by design / direct entry), not orphans.
// /image-usage-license is referenced only as the JSON-LD image `license` URL (see schema.ts),
// not from nav — being un-linked from <a> tags is correct.
const ALLOW = new Set(["/", "/admin/leads", "/landing-template-demo", "/image-usage-license"]);

function routes(dir, base = "") {
  let r = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) r = r.concat(routes(path.join(dir, e.name), base + "/" + e.name));
    else if (e.name === "page.tsx") r.push(base || "/");
  }
  return r;
}
const pages = [...new Set(routes(APP))].sort().filter((p) => !p.includes("[")); // dynamic-route patterns are not fetchable URLs
const norm = (h) => h.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
const linked = new Set(); // every path that is the target of an internal link from another page

// Fail-open bug (2026-08-31 audit): the bare catch swallowed every fetch failure, so a dead
// server - or a 429 storm from the old rate limiter - reported "609 orphans" instead of
// erroring. Same defect class as audit-prices-rendered.mjs had. Now every unreadable page is
// counted and the run aborts as inconclusive rather than lying.
let fetchErrors = 0;
async function collect(p) {
  try {
    const res = await politeFetch(BASE + p, { headers: { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" } });
    if (res.status >= 400) { fetchErrors++; console.log("  ! " + res.status + " " + p); return; }
    const html = await res.text();
    const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
    for (let h of hrefs) {
      if (h.startsWith("//") || h.startsWith("/_next") || h.startsWith("/api")) continue;
      if (/\.(png|jpg|jpeg|webp|avif|svg|ico|xml|txt|webmanifest|js|css)$/i.test(h)) continue;
      h = norm(h);
      if (h !== norm(p)) linked.add(h); // ignore self-links
    }
  } catch (e) { fetchErrors++; console.log("  ! ERR " + p + " " + e.message); }
}

// Preflight: one request to BASE. Connection refused / timeout = no server, so stop here with
// instructions rather than report every page as unreadable (or quietly crawl the live site).
async function preflight() {
  try {
    await politeFetch(BASE + "/", { redirect: "manual", signal: AbortSignal.timeout(10000) });
  } catch (e) {
    console.error("=== ORPHAN PAGE CHECK ===");
    console.error(`ERROR: nothing answered at ${BASE} (${(e.cause && e.cause.code) || e.name || e.message}).`);
    if (IS_LOCAL) {
      console.error("This gate crawls the local production build. Start it, then re-run:");
      console.error("  npm run build                 # only if .next is missing or stale");
      console.error("  npm run start -- -p 3006      # or preview_start \"macbook-repair-dubai-prod\"");
      console.error("  npm run check:internal");
    }
    process.exit(2);
  }
}

(async () => {
  await preflight();
  if (!IS_LOCAL) console.log(`Remote BASE ${BASE}: sequential, ${REMOTE_GAP_MS / 1000} s between requests (~${Math.ceil(pages.length * REMOTE_GAP_MS / 60000)} min).`);
  for (let i = 0; i < pages.length; i += CONC) await Promise.all(pages.slice(i, i + CONC).map(collect));
  console.log("=== ORPHAN PAGE CHECK ===");
  if (fetchErrors > 0) {
    console.log(`INCONCLUSIVE - ${fetchErrors}/${pages.length} pages could not be fetched.`);
    console.log("Is the server up, and is the crawler UA allowed through?");
    process.exit(1);
  }
  // /admin/* is the local-only console (404 in production, noindex, reachable by URL only)
  // and *-template-demo pages are noindex scaffolding - neither is meant to be linked, so
  // neither is an orphan. Without this, every clean run cried wolf with 24 findings.
  const intentionallyUnlinked = (p) => p === "/admin" || p.startsWith("/admin/") || /-template-demo$/.test(norm(p));
  const orphans = pages.filter((p) => !ALLOW.has(norm(p)) && !intentionallyUnlinked(p) && !linked.has(norm(p)));
  console.log("base: " + BASE);
  console.log("pages: " + pages.length);
  console.log("inbound-linked targets: " + linked.size);
  console.log("orphans (no inbound internal link): " + orphans.length);
  orphans.forEach((o) => console.log("  ⚠ " + o));
  process.exit(orphans.length ? 1 : 0);
})();
