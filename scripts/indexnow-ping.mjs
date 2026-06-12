// Submit all site URLs to IndexNow (Bing, Seznam, Yandex — Bing's index also feeds
// ChatGPT search and Copilot). Run after every deploy: node scripts/indexnow-ping.mjs
const SITE = "https://macbook-repair-dubai.ae";
const KEY = "9a3ffe1a761b0467d18026cfe8fdf418"; // must match public/<KEY>.txt

// collect all indexable URLs from the live sitemap index
const sm = await (await fetch(`${SITE}/sitemap.xml`)).text();
const kids = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !u.includes("images"));
const urls = new Set();
for (const k of kids)
  for (const [, loc] of (await (await fetch(k)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(loc);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: [...urls],
  }),
});
console.log(`IndexNow: submitted ${urls.size} URLs → HTTP ${res.status} ${res.statusText}`);
if (!res.ok && res.status !== 202) process.exit(1);
