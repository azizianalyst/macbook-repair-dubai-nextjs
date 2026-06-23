// Full live-site crawler: starts at /, follows every internal link,
// checks every page, image, and asset for non-200 responses.
// Usage: node scripts/crawl-site.mjs
const SITE = "https://macbook-repair-dubai.ae";
const UA = { "user-agent": "site-crawler-local-audit" };

const queue = ["/"];
const seen = new Set(queue);
const problems = []; // {url, status, foundOn}
const checkedAssets = new Set();
let pages = 0, assets = 0;

const norm = (href, base) => {
  try {
    const u = new URL(href, SITE + base);
    if (u.origin !== SITE) return null;
    return (u.pathname.replace(/\/$/, "") || "/") + (u.search || "");
  } catch { return null; }
};

async function head(path, foundOn, kind) {
  const res = await fetch(SITE + path, { method: "GET", redirect: "manual", headers: UA });
  if (res.status >= 400) problems.push({ url: path, status: res.status, foundOn, kind });
  else if (res.status >= 300) {
    const loc = res.headers.get("location");
    problems.push({ url: path, status: `${res.status} → ${loc}`, foundOn, kind: kind + " (redirected link — update href)" });
  }
  res.body?.cancel?.();
}

async function crawlPage(path) {
  // Use redirect:"follow" so trailing-slash 308s are transparently followed
  // and we crawl the real page. Only non-2xx responses after following count as errors.
  const res = await fetch(SITE + path, { redirect: "follow", headers: UA });
  if (res.status !== 200) {
    problems.push({ url: path, status: res.status, foundOn: "(crawl)", kind: "page" });
    return;
  }
  pages++;
  const html = await res.text();
  const links = [...html.matchAll(/<a[^>]+href="([^"#]+)"/g)].map((m) => m[1]);
  const imgs = [
    ...[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/<source[^>]+srcset="([^"\s]+)/g)].map((m) => m[1]),
  ];
  for (const href of links) {
    const p = norm(href, path);
    if (!p) continue;
    if (p.startsWith("/api/") || p.startsWith("/admin")) continue;
    if (/\.(jpg|png|webp|avif|svg|pdf|xml|txt|ico)(\?|$)/.test(p)) {
      if (!checkedAssets.has(p)) { checkedAssets.add(p); assets++; await head(p, path, "linked file"); }
    } else if (!seen.has(p)) { seen.add(p); queue.push(p); }
    else continue;
  }
  for (const src of imgs) {
    const p = norm(src.split(" ")[0], path);
    if (!p || p.startsWith("/_next/image")) continue;
    if (!checkedAssets.has(p)) { checkedAssets.add(p); assets++; await head(p, path, "image"); }
  }
}

// Workers poll the queue until it has been empty for 3 consecutive ticks.
// This avoids the race where workers exit before the first page finishes
// enqueuing its discovered links.
let activeWorkers = 0;
let done = false;
const workers = Array.from({ length: 12 }, async () => {
  activeWorkers++;
  while (!done) {
    const p = queue.shift();
    if (p !== undefined) {
      await crawlPage(p).catch((e) => problems.push({ url: p, status: "FETCH FAIL " + e.message, foundOn: "(crawl)", kind: "page" }));
    } else {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  activeWorkers--;
});
let idle = 0;
while (idle < 3) {
  await new Promise((r) => setTimeout(r, 1000));
  if (queue.length === 0) idle++; else idle = 0;
}
done = true;
await Promise.all(workers);

console.log(`Crawled ${pages} pages, checked ${assets} assets, ${seen.size} URLs discovered.`);

// orphan detection: codebase routes never reached by following links
const { readdirSync, statSync } = await import("node:fs");
const { join } = await import("node:path");
const routes = new Set();
(function walk(dir, prefix) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, prefix + "/" + name);
    else if (name === "page.tsx") routes.add(prefix === "" ? "/" : prefix);
  }
})("src/app", "");
const SKIP = new Set(["/admin/leads", "/landing-template-demo"]);
const orphans = [...routes].filter((r) => !seen.has(r) && !SKIP.has(r));
if (orphans.length) {
  console.log(`\n${orphans.length} orphan page(s) — no internal link reaches them:`);
  for (const o of orphans) console.log("  " + o);
}
if (!problems.length) console.log("No 404s or errors found ✓");
else {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(`  [${p.status}] ${p.kind}: ${p.url}\n      found on: ${p.foundOn}`);
}
process.exit(problems.length ? 1 : 0);
