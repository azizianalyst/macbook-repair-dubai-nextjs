// Cluster internal-link audit. Crawls the running dev server, extracts ONLY contextual
// (in-content) links — those inside <main id="main"> and before <footer>, i.e. excluding the
// global nav/mega-menu/footer chrome — builds a directed link graph, classifies every route
// into a topical cluster, and reports per-cluster link-equity metrics, including the columns
// the existing cluster table omits: orphans/min in-links, out-links, → revenue-page funnel %,
// inbound source-cluster diversity, and click depth from the homepage.
//
// Run: node scripts/cluster-audit.cjs   (needs `npm run dev` up; BASE defaults to :3000)
const fs = require("fs"), path = require("path");
const BASE = process.env.BASE || "http://localhost:3000";
const SRC = path.join(__dirname, "..", "src");

const norm = (h) => (h.split("#")[0].split("?")[0].replace(/\/+$/, "") || "/");

// ---- routes ----
const routesSrc = fs.readFileSync(path.join(SRC, "lib", "routes.generated.ts"), "utf8");
let ROUTES = [...new Set([...routesSrc.matchAll(/"(\/[^"]*)"/g)].map((m) => norm(m[1])))]
  .filter((p) => !p.startsWith("/admin") && !p.startsWith("/api") && p !== "/landing-template-demo" && p !== "/image-usage-license");

// ---- area routes ----
const areasSrc = fs.readFileSync(path.join(SRC, "content", "areas.ts"), "utf8");
const AREA_ROUTES = new Set([...areasSrc.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => "/macbook-repair-" + m[1]));

// ---- fixed sets ----
const MONEY = new Set(["/sell-macbook-dubai", "/sell-faulty-macbook-dubai", "/trade-in-macbook-dubai",
  "/applecare-macbook-repair-dubai", "/annual-maintenance-contract-dubai", "/macbook-insurance-dubai",
  "/out-of-warranty-apple-repair-dubai", "/boot-camp-windows-macbook-dubai", "/macbook-repair-near-me",
  "/onsite-macbook-repair-dubai", "/apple-repair-programs-dubai", "/warranty"]);
const CORPORATE = new Set(["/about", "/contact", "/cookies", "/privacy", "/terms", "/reviews", "/pricing"]);
const GUIDE_ROOTS = new Set(["/macbook-guides", "/do-macbooks-last-over-a-decade",
  "/top-10-common-macbook-problems-and-how-to-fix-them"]);

const HUB = { // family hub per cluster (for "→ family hub %")
  Blog: "/blog", Guides: "/macbook-guides", Areas: "/", MacBook: "/", iPhone: "/iphone-repair-dubai",
  iPad: "/ipad-repair-dubai", iMac: "/imac-repair-dubai", "Mac desktop": "/apple-repair-dubai",
  Commercial: "/", Corporate: "/", Home: "/",
};
// "revenue" supergroup = pages whose job is to convert / rank for money queries.
const REVENUE = new Set(["MacBook", "iPhone", "iPad", "iMac", "Mac desktop", "Areas", "Commercial"]);

function clusterOf(p) {
  if (p === "/") return "Home";
  if (p === "/blog" || p.startsWith("/blog/")) return "Blog";
  if (GUIDE_ROOTS.has(p) || /^\/how-(to|do|can)-/.test(p)) return "Guides";
  if (AREA_ROUTES.has(p)) return "Areas";
  if (MONEY.has(p)) return "Commercial";
  if (CORPORATE.has(p)) return "Corporate";
  if (p.startsWith("/iphone-")) return "iPhone";
  if (p.startsWith("/ipad-")) return "iPad";
  if (p.startsWith("/imac-")) return "iMac";
  if (/^\/mac-(mini|studio|pro|desktop)/.test(p)) return "Mac desktop";
  if (p.startsWith("/ipod-")) return "Mac desktop"; // few legacy; park here
  if (p.startsWith("/macbook-") || p.startsWith("/mac-") || p.startsWith("/macos-") ||
      p.startsWith("/apple-")) return "MacBook";
  return "Other";
}

const CLUSTER = {}; ROUTES.forEach((p) => (CLUSTER[p] = clusterOf(p)));
const ROUTESET = new Set(ROUTES);

// ---- crawl: contextual links only (inside <main id="main"> … before <footer>) ----
const out = {}; // source -> Set(target) unique contextual targets (excluding self)
let done = 0;
async function collect(p) {
  out[p] = new Set();
  try {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), 30000);
    const html = await (await fetch(BASE + p, { signal: ac.signal })).text();
    clearTimeout(to);
    const mi = html.indexOf('id="main"');
    if (mi === -1) return;
    const fi = html.indexOf("<footer", mi);
    const main = html.slice(mi, fi === -1 ? html.length : fi);
    for (const m of main.matchAll(/href="(\/[^"]*)"/g)) {
      let h = m[1];
      if (h.startsWith("//") || h.startsWith("/_next") || h.startsWith("/api")) continue;
      if (/\.(png|jpg|jpeg|webp|avif|svg|ico|xml|txt|webmanifest|js|css|pdf)$/i.test(h)) continue;
      h = norm(h);
      if (h !== p && ROUTESET.has(h)) out[p].add(h);
    }
  } catch (e) { process.stderr.write("\n  fetch fail " + p + ": " + (e.name || e) + "\n"); }
  if (++done % 20 === 0 || done === ROUTES.length) process.stderr.write("\r  crawled " + done + "/" + ROUTES.length);
}

(async () => {
  const CONC = 10;
  for (let i = 0; i < ROUTES.length; i += CONC) await Promise.all(ROUTES.slice(i, i + CONC).map(collect));
  process.stderr.write("\n");

  // edges + indegree
  const indeg = {}; ROUTES.forEach((p) => (indeg[p] = new Set()));
  const edges = []; // [src,tgt]
  for (const s of ROUTES) for (const t of out[s]) { if (indeg[t]) indeg[t].add(s); edges.push([s, t]); }

  // BFS click-depth from "/" over contextual graph
  const depth = { "/": 0 }; const q = ["/"];
  while (q.length) { const u = q.shift(); for (const v of out[u] || []) if (depth[v] === undefined) { depth[v] = depth[u] + 1; q.push(v); } }

  const clusters = [...new Set(ROUTES.map((p) => CLUSTER[p]))];
  const rows = clusters.map((c) => {
    const pages = ROUTES.filter((p) => CLUSTER[p] === c);
    const n = pages.length;
    const inCounts = pages.map((p) => indeg[p].size).sort((a, b) => a - b);
    const inTotal = inCounts.reduce((a, b) => a + b, 0);
    const orphans = pages.filter((p) => indeg[p].size === 0);
    const med = inCounts.length ? inCounts[Math.floor((inCounts.length - 1) / 2)] : 0;
    // outbound edges from this cluster
    const oEdges = pages.flatMap((p) => [...out[p]].map((t) => ({ p, t, tc: CLUSTER[t] })));
    const oTotal = oEdges.length;
    const intra = oEdges.filter((e) => e.tc === c).length;
    const toRevenue = oEdges.filter((e) => REVENUE.has(e.tc)).length;
    const toMoney = oEdges.filter((e) => MONEY.has(e.t)).length;
    // pages linking to their family hub
    const hub = HUB[c];
    const toHub = pages.filter((p) => out[p].has(hub)).length;
    // inbound source-cluster diversity
    const srcClusters = new Set(pages.flatMap((p) => [...indeg[p]].map((s) => CLUSTER[s])));
    const depths = pages.map((p) => depth[p]).filter((d) => d !== undefined);
    const unreachable = n - depths.length;
    return {
      c, n,
      inPg: inTotal / n, inMin: inCounts[0] ?? 0, inMed: med, orphans: orphans.length, orphanList: orphans,
      outPg: oTotal / n,
      intraPct: oTotal ? intra / oTotal : 0,
      hubPct: toHub / n,
      revPct: oTotal ? toRevenue / oTotal : 0,
      moneyPct: oTotal ? toMoney / oTotal : 0,
      srcDiversity: srcClusters.size,
      maxDepth: depths.length ? Math.max(...depths) : null,
      unreachable,
    };
  }).sort((a, b) => b.n - a.n);

  const pct = (x) => (x * 100).toFixed(0) + "%";
  const f1 = (x) => x.toFixed(1);
  console.log("\n=== CLUSTER LINK-EQUITY AUDIT (contextual / in-content links only) ===");
  console.log("crawled " + ROUTES.length + " routes from " + BASE + "\n");
  const H = ["Cluster", "Pg", "in/pg", "min", "med", "orph", "out/pg", "intra%", "→hub%", "→rev%", "→money%", "srcClu", "maxDepth"];
  console.log(H.join("\t"));
  for (const r of rows) console.log([r.c, r.n, f1(r.inPg), r.inMin, r.inMed, r.orphans, f1(r.outPg),
    pct(r.intraPct), pct(r.hubPct), pct(r.revPct), pct(r.moneyPct), r.srcDiversity,
    (r.maxDepth ?? "—") + (r.unreachable ? " (!" + r.unreachable + ")" : "")].join("\t"));

  // orphans detail
  console.log("\n=== ORPHANS (0 inbound contextual links) ===");
  for (const r of rows) if (r.orphans) console.log("  [" + r.c + "] " + r.orphanList.join(", "));
  // unreachable detail
  const unr = ROUTES.filter((p) => depth[p] === undefined);
  console.log("\nunreachable from / via contextual links: " + unr.length);
  if (unr.length) console.log("  " + unr.slice(0, 40).join(", ") + (unr.length > 40 ? " …(+" + (unr.length - 40) + ")" : ""));

  // money/conversion pages: inbound contextual links + which clusters link in
  console.log("\n=== CONVERSION / MONEY PAGES — inbound contextual links ===");
  [...MONEY].filter((m) => ROUTESET.has(m)).map((m) => ({ m, deg: indeg[m].size,
    from: [...new Set([...indeg[m]].map((s) => CLUSTER[s]))].join(",") }))
    .sort((a, b) => a.deg - b.deg)
    .forEach((x) => console.log("  " + String(x.deg).padStart(3) + "  " + x.m + "   ← " + (x.from || "(none)")));

  // Mac desktop hub wiring detail
  console.log("\n=== Mac desktop: who links to /apple-repair-dubai / sub-hubs? ===");
  ["/apple-repair-dubai", "/mac-mini-repair-dubai", "/mac-studio-repair-dubai", "/mac-pro-repair-dubai"]
    .forEach((h) => console.log("  " + String(indeg[h] ? indeg[h].size : 0).padStart(3) + " inbound  " + h));

  // thinnest pages (indeg <= 2), the long tail hidden by the average
  console.log("\n=== THIN PAGES (≤2 inbound contextual links) by cluster ===");
  for (const r of rows) {
    const thin = ROUTES.filter((p) => CLUSTER[p] === r.c && indeg[p].size <= 2);
    if (thin.length) console.log("  [" + r.c + "] " + thin.length + ": " +
      thin.map((p) => p + "(" + indeg[p].size + ")").slice(0, 8).join(", ") + (thin.length > 8 ? " …" : ""));
  }

  fs.writeFileSync(path.join(__dirname, "..", ".audit", "cluster-audit.json"),
    JSON.stringify({ rows: rows.map(({ orphanList, ...r }) => r), generatedFrom: BASE, totalRoutes: ROUTES.length }, null, 2));
  console.log("\nJSON → .audit/cluster-audit.json");
})();
