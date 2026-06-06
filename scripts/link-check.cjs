// Internal-link integrity: collect every internal href across all pages, then verify
// each unique target resolves (200). Reports broken internal links + where they appear.
const fs = require("fs"), path = require("path");
const BASE = process.env.BASE || "http://localhost:3006";
const APP = path.join(__dirname, "..", "src", "app");

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
const linkToPages = {}; // target -> Set(source pages)

async function collect(p) {
  try {
    const html = await (await fetch(BASE + p)).text();
    const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
    for (let h of hrefs) {
      if (h.startsWith("//") || h.startsWith("/_next") || h.startsWith("/api")) continue;
      if (/\.(png|jpg|jpeg|webp|avif|svg|ico|xml|txt|webmanifest|js|css)$/i.test(h)) continue;
      h = norm(h);
      (linkToPages[h] ||= new Set()).add(p);
    }
  } catch {}
}

async function status(u) {
  try { return (await fetch(BASE + u, { redirect: "manual" })).status; } catch { return 0; }
}

(async () => {
  const CONC = 12;
  for (let i = 0; i < pages.length; i += CONC) await Promise.all(pages.slice(i, i + CONC).map(collect));
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
})();
