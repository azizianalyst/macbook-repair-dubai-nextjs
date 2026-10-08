// Internal-link integrity: collect every internal href across all pages, then verify
// each unique target resolves (200). Reports broken internal links + where they appear.
//
// Target: the LOCAL production build at http://localhost:3006 (the `macbook-repair-dubai-prod`
// entry in .claude/launch.json). Start it first:
//   npm run build && npm run start -- -p 3006
// If nothing answers on BASE the script exits 2 with instructions. It never falls back to live.
//
// Live opt-in: BASE=https://macbook-repair-dubai.ae npm run check:links
// Any non-loopback BASE is crawled sequentially, at most one request every 2 s (CLAUDE.md
// crawl rule), so a full live pass takes ~45 min. On live the gate also reports
// /cdn-cgi/l/email-protection/, a link Cloudflare injects (not fixable in code).
const fs = require("fs"), path = require("path");
const BASE = (process.env.BASE || "http://localhost:3006").replace(/\/+$/, "");
const APP = path.join(__dirname, "..", "src", "app");
let fetched = 0, failed = 0; // crawl-reachability counters — guard against a silent false pass

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

function routes(dir, base = "") {
  let r = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) r = r.concat(routes(path.join(dir, e.name), base + "/" + e.name));
    else if (e.name === "page.tsx") r.push(base || "/");
  }
  return r;
}
const pages = [...new Set(routes(APP))].sort();

// Canonical form for comparison: page paths carry a trailing slash (trailingSlash:true),
// files (with an extension) and the root do not. Checking the slash form avoids false 308s.
const norm = (h) => {
  h = h.split("#")[0].split("?")[0];
  if (!h || h === "/") return "/";
  if (/\.[a-z0-9]+$/i.test(h)) return h;
  return h.replace(/\/+$/, "") + "/";
};
const linkToPages = {}; // target -> Set(source pages)

async function collect(p) {
  try {
    const html = await (await politeFetch(BASE + p)).text();
    fetched++;
    const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
    for (let h of hrefs) {
      if (h.startsWith("//") || h.startsWith("/_next") || h.startsWith("/api")) continue;
      if (/\.(png|jpg|jpeg|webp|avif|svg|ico|xml|txt|webmanifest|js|css)$/i.test(h)) continue;
      h = norm(h);
      (linkToPages[h] ||= new Set()).add(p);
    }
  } catch { failed++; }
}

async function status(u) {
  // Retry transient failures so a crawl-time timeout isn't reported as a broken link (status 0).
  for (let attempt = 0; attempt < 3; attempt++) {
    try { return (await politeFetch(BASE + u, { redirect: "manual" })).status; }
    catch { await sleep(300); }
  }
  return 0;
}

// Preflight: one request to BASE. Connection refused / timeout = no server, so stop here with
// instructions rather than crawl nothing (or, worse, quietly crawl the live site).
async function preflight() {
  try {
    await politeFetch(BASE + "/", { redirect: "manual", signal: AbortSignal.timeout(10000) });
  } catch (e) {
    console.error("=== INTERNAL LINK CHECK ===");
    console.error(`ERROR: nothing answered at ${BASE} (${(e.cause && e.cause.code) || e.name || e.message}).`);
    if (IS_LOCAL) {
      console.error("This gate crawls the local production build. Start it, then re-run:");
      console.error("  npm run build                 # only if .next is missing or stale");
      console.error("  npm run start -- -p 3006      # or preview_start \"macbook-repair-dubai-prod\"");
      console.error("  npm run check:internal");
      console.error("Live opt-in (sequential, 1 request / 2 s): BASE=https://macbook-repair-dubai.ae npm run check:links");
    }
    process.exit(2);
  }
}

(async () => {
  await preflight();
  if (!IS_LOCAL) console.log(`Remote BASE ${BASE}: sequential, ${REMOTE_GAP_MS / 1000} s between requests (~${Math.ceil(pages.length * 2 * REMOTE_GAP_MS / 60000)} min).`);
  for (let i = 0; i < pages.length; i += CONC) await Promise.all(pages.slice(i, i + CONC).map(collect));

  // Reachability guard: if we couldn't fetch the pages (server died mid-run / wrong BASE), the
  // crawl found nothing to validate. Fail loudly instead of printing a misleading "0 broken".
  if (fetched === 0 || Object.keys(linkToPages).length === 0) {
    console.error("=== INTERNAL LINK CHECK ===");
    console.error(`ERROR: crawled 0 reachable pages at ${BASE} (fetched=${fetched}, failed=${failed}).`);
    console.error("Is the local production build up? npm run start -- -p 3006");
    process.exit(1);
  }

  const targets = Object.keys(linkToPages).sort();
  const results = [];
  for (let i = 0; i < targets.length; i += CONC) {
    results.push(...await Promise.all(targets.slice(i, i + CONC).map(async (t) => ({ t, s: await status(t) }))));
  }
  const broken = results.filter((r) => r.s !== 200);
  console.log("=== INTERNAL LINK CHECK ===");
  console.log("base: " + BASE);
  console.log("pages crawled: " + pages.length);
  console.log("unique internal link targets: " + targets.length);
  console.log("broken (non-200): " + broken.length);
  broken.forEach((b) => {
    const srcs = [...linkToPages[b.t]].slice(0, 5);
    console.log("  [" + b.s + "] " + b.t + "  ← from: " + srcs.join(", ") + (linkToPages[b.t].size > 5 ? " …(+" + (linkToPages[b.t].size - 5) + ")" : ""));
  });
  if (broken.length) process.exit(1);
})();
