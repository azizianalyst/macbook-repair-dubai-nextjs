// Internal-link integrity: collect every internal href across all pages, then verify
// each unique target resolves (200). Reports broken internal links + where they appear.
const fs = require("fs"), path = require("path");
// Default to the live site so `npm run check:links` is meaningful out of the box.
// Override with BASE=http://localhost:3006 to check a local `next start` build pre-deploy.
const BASE = process.env.BASE || "https://macbook-repair-dubai.ae";
const APP = path.join(__dirname, "..", "src", "app");
let fetched = 0, failed = 0; // crawl-reachability counters — guard against a silent false pass

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
    const html = await (await fetch(BASE + p)).text();
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
    try { return (await fetch(BASE + u, { redirect: "manual" })).status; }
    catch { await new Promise((r) => setTimeout(r, 300)); }
  }
  return 0;
}

(async () => {
  const CONC = 12;
  for (let i = 0; i < pages.length; i += CONC) await Promise.all(pages.slice(i, i + CONC).map(collect));

  // Reachability guard: if we couldn't fetch the pages (server down / wrong BASE), the
  // crawl found nothing to validate. Fail loudly instead of printing a misleading "0 broken".
  if (fetched === 0 || Object.keys(linkToPages).length === 0) {
    console.error("=== INTERNAL LINK CHECK ===");
    console.error(`ERROR: crawled 0 reachable pages at ${BASE} (fetched=${fetched}, failed=${failed}).`);
    console.error("Start the site (`npm run start` on :3006) or set BASE, e.g.:");
    console.error("  BASE=https://macbook-repair-dubai.ae npm run check:links");
    process.exit(1);
  }

  const targets = Object.keys(linkToPages).sort();
  const results = [];
  for (let i = 0; i < targets.length; i += CONC) {
    results.push(...await Promise.all(targets.slice(i, i + CONC).map(async (t) => ({ t, s: await status(t) }))));
  }
  const broken = results.filter((r) => r.s !== 200);
  console.log("=== INTERNAL LINK CHECK ===");
  console.log("pages crawled: " + pages.length);
  console.log("unique internal link targets: " + targets.length);
  console.log("broken (non-200): " + broken.length);
  broken.forEach((b) => {
    const srcs = [...linkToPages[b.t]].slice(0, 5);
    console.log("  [" + b.s + "] " + b.t + "  ← from: " + srcs.join(", ") + (linkToPages[b.t].size > 5 ? " …(+" + (linkToPages[b.t].size - 5) + ")" : ""));
  });
  if (broken.length) process.exit(1);
})();
