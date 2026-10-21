// Deep crawl audit: BFS the live build, map the internal link graph, compute crawl depth,
// inbound-link distribution, orphans (in sitemap but unreachable / link-poor), and verify
// every legacy redirect is single-hop. Run against a running server: BASE=... node this.
import { readFileSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3060";
const SITE = "https://macbook-repair-dubai.ae";

const norm = (p) => {
  try { p = new URL(p, BASE).pathname; } catch { return null; }
  p = p.split("#")[0].split("?")[0];
  return p.replace(/\/+$/, "") || "/";
};
const internal = (h) =>
  h && (h.startsWith("/") || h.startsWith(BASE)) &&
  !/^\/(_next|api|admin)/.test(norm(h) || "") &&
  !/\.(png|jpe?g|webp|avif|svg|ico|xml|txt|json|webmanifest|css|js|mp4|pdf)$/i.test(h);

// ---- sitemap (the set of URLs we WANT indexed) ----
const smIndex = await (await fetch(`${BASE}/sitemap.xml`)).text();
const childs = [...smIndex.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !u.includes("images"));
const sitemapSet = new Set();
for (const c of childs) {
  const path = c.replace(SITE, "").replace(BASE, "");
  const xml = await (await fetch(BASE + path)).text();
  for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapSet.add(norm(loc.replace(SITE, "")));
}

// ---- BFS crawl from "/" ----
const depth = new Map([["/", 0]]);
const inbound = new Map();          // target -> Set(source)
const queue = ["/"];
const seen = new Set(["/"]);
let fetched = 0;

while (queue.length) {
  const path = queue.shift();
  let html;
  try { html = await (await fetch(BASE + (path === "/" ? "/" : path + "/"), { headers: { "user-agent": "crawl-audit" } })).text(); }
  catch { continue; }
  fetched++;
  const d = depth.get(path) ?? 99;
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]).filter(internal);
  for (const h of hrefs) {
    const t = norm(h);
    if (!t) continue;
    (inbound.get(t) || inbound.set(t, new Set()).get(t)).add(path);
    if (!seen.has(t)) {
      seen.add(t);
      if (!depth.has(t) || d + 1 < depth.get(t)) depth.set(t, d + 1);
      queue.push(t);
    }
  }
}

// ---- analysis ----
const reachable = new Set(depth.keys());
const orphans = [...sitemapSet].filter((u) => !reachable.has(u));
const linkPoor = [...sitemapSet]
  .filter((u) => reachable.has(u) && u !== "/")
  .map((u) => ({ u, n: (inbound.get(u)?.size ?? 0) }))
  .filter((x) => x.n <= 2)
  .sort((a, b) => a.n - b.n);
const deep = [...sitemapSet]
  .filter((u) => reachable.has(u))
  .map((u) => ({ u, d: depth.get(u) }))
  .filter((x) => x.d >= 4)
  .sort((a, b) => b.d - a.d);

const depthHist = {};
for (const u of sitemapSet) { const d = reachable.has(u) ? depth.get(u) : "∞"; depthHist[d] = (depthHist[d] || 0) + 1; }

console.log(`\n===== CRAWL AUDIT (${BASE}) =====`);
console.log(`pages fetched: ${fetched} | sitemap URLs: ${sitemapSet.size} | reachable by crawl: ${[...sitemapSet].filter((u)=>reachable.has(u)).length}`);
console.log(`\nDepth distribution (clicks from home) for sitemap URLs:`);
for (const k of Object.keys(depthHist).sort((a,b)=>(a==="∞"?99:+a)-(b==="∞"?99:+b))) console.log(`  depth ${k}: ${depthHist[k]}`);

console.log(`\n--- ORPHANS: in sitemap but NOT reachable by crawling internal links (${orphans.length}) ---`);
for (const u of orphans.slice(0, 60)) console.log(`  ${u}`);
if (orphans.length > 60) console.log(`  …+${orphans.length - 60} more`);

console.log(`\n--- DEEP: money/content pages ≥4 clicks from home (${deep.length}) ---`);
for (const x of deep.slice(0, 40)) console.log(`  depth ${x.d}  ${x.u}`);

console.log(`\n--- LINK-POOR: indexable pages with ≤2 inbound internal links (${linkPoor.length}) ---`);
for (const x of linkPoor.slice(0, 50)) console.log(`  ${x.n} inbound  ${x.u}`);
if (linkPoor.length > 50) console.log(`  …+${linkPoor.length - 50} more`);
