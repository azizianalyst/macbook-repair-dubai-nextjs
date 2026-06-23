// Orphan check: every static route must be linked from at least one OTHER page, so "every page
// is connected" is verifiable. This is the inverse of link-check.cjs (which verifies that link
// TARGETS resolve 200). Crawls all pages, collects internal hrefs (ignoring self-links), then
// flags routes that nothing links to. Needs the site running (npm run dev) — like check:urls.
// Exit code 1 when orphans exist, so it can gate a manual QA pass.
const fs = require("fs"), path = require("path");
const BASE = process.env.BASE || "http://localhost:3006";
const APP = path.join(__dirname, "..", "src", "app");

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
const pages = [...new Set(routes(APP))].sort();
const norm = (h) => h.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
const linked = new Set(); // every path that is the target of an internal link from another page

async function collect(p) {
  try {
    const html = await (await fetch(BASE + p)).text();
    const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
    for (let h of hrefs) {
      if (h.startsWith("//") || h.startsWith("/_next") || h.startsWith("/api")) continue;
      if (/\.(png|jpg|jpeg|webp|avif|svg|ico|xml|txt|webmanifest|js|css)$/i.test(h)) continue;
      h = norm(h);
      if (h !== norm(p)) linked.add(h); // ignore self-links
    }
  } catch {}
}

(async () => {
  const CONC = 12;
  for (let i = 0; i < pages.length; i += CONC) await Promise.all(pages.slice(i, i + CONC).map(collect));
  const orphans = pages.filter((p) => !ALLOW.has(norm(p)) && !linked.has(norm(p)));
  console.log("=== ORPHAN PAGE CHECK ===");
  console.log("pages: " + pages.length);
  console.log("inbound-linked targets: " + linked.size);
  console.log("orphans (no inbound internal link): " + orphans.length);
  orphans.forEach((o) => console.log("  ⚠ " + o));
  process.exit(orphans.length ? 1 : 0);
})();
