// Critical review crawler: hits every route on the running server and flags anomalies.
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
const list = [...new Set(routes(APP))].sort();

const ERR = /Application error|client-side exception|__next_error__|This page could not be found|Internal Server Error|TypeError:|ReferenceError:/i;
function pick(html, re) { const m = html.match(re); return m ? m[1] : null; }

async function check(p) {
  const url = BASE + p;
  try {
    const res = await fetch(url, { redirect: "manual" });
    const html = await res.text();
    const title = pick(html, /<title[^>]*>([^<]*)<\/title>/i);
    const h1count = (html.match(/<h1\b/gi) || []).length;
    const h1 = pick(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
    const h1text = h1 ? h1.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";
    const desc = pick(html, /<meta name="description" content="([^"]*)"/i);
    const issues = [];
    if (res.status !== 200) issues.push("status=" + res.status);
    if (!title) issues.push("no-title");
    if (h1count === 0) issues.push("no-h1");
    if (h1count > 1) issues.push("multiple-h1(" + h1count + ")");
    if (h1count && !h1text) issues.push("empty-h1");
    if (!desc) issues.push("no-meta-desc");
    if (ERR.test(html)) issues.push("ERROR-MARKER");
    if (html.length < 8000) issues.push("thin(" + html.length + "b)");
    return { p, status: res.status, title, h1text, bytes: html.length, issues };
  } catch (e) {
    return { p, status: 0, title: null, h1text: "", bytes: 0, issues: ["FETCH-FAIL:" + e.message] };
  }
}

(async () => {
  const out = [];
  const CONC = 12;
  for (let i = 0; i < list.length; i += CONC) {
    out.push(...await Promise.all(list.slice(i, i + CONC).map(check)));
  }
  const bad = out.filter((r) => r.issues.length);
  // duplicate titles
  const byTitle = {};
  out.forEach((r) => { if (r.title) (byTitle[r.title] ||= []).push(r.p); });
  const dupes = Object.entries(byTitle).filter(([, ps]) => ps.length > 1);

  fs.writeFileSync("/tmp/crawl-report.json", JSON.stringify({ out, bad, dupes }, null, 2));
  console.log("=== CRAWL REVIEW: " + list.length + " routes ===");
  console.log("200 OK: " + out.filter((r) => r.status === 200).length);
  console.log("with issues: " + bad.length);
  console.log("\n--- ISSUES (status / h1 / title / errors / thin) ---");
  bad.slice(0, 60).forEach((r) => console.log("  [" + r.issues.join(", ") + "]  " + r.p + (r.title ? "  «" + r.title.slice(0, 40) + "»" : "")));
  console.log("\n--- DUPLICATE TITLES: " + dupes.length + " groups ---");
  dupes.slice(0, 20).forEach(([t, ps]) => console.log("  «" + t.slice(0, 50) + "» ×" + ps.length + " -> " + ps.slice(0, 4).join(", ")));
})();
