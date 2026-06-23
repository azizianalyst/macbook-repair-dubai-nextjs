// Check every GSC top-page URL against the live site.
// Classifies: 200 (live), 301/308 → target, 404/410 (LOST), other.
import { readFileSync } from "node:fs";

const SITE = "https://macbook-repair-dubai.ae";
const urls = readFileSync("scripts/gsc-urls.txt", "utf8")
  .split("\n").map((s) => s.trim()).filter(Boolean);

const results = [];

const checkOne = async (path) => {
  // strip #fragment — server never sees it; record separately
  const frag = path.includes("#");
  const clean = path.split("#")[0] || "/";
  try {
    // first hop: manual, to capture the redirect target
    const r1 = await fetch(SITE + clean, {
      redirect: "manual",
      headers: { "user-agent": "gsc-url-check" },
    });
    let finalStatus = r1.status;
    let target = null;
    if ([301, 302, 307, 308].includes(r1.status)) {
      const loc = r1.headers.get("location");
      target = loc ? new URL(loc, SITE).pathname + (new URL(loc, SITE).search) : "(no location)";
      // follow to see where it ultimately lands
      try {
        const rf = await fetch(SITE + clean, {
          redirect: "follow",
          headers: { "user-agent": "gsc-url-check" },
        });
        finalStatus = rf.status;
      } catch { /* ignore */ }
    }
    results.push({ path, frag, status: r1.status, target, finalStatus });
  } catch (e) {
    results.push({ path, frag, status: "ERR", target: String(e.message), finalStatus: "ERR" });
  }
};

// pool of 8
const q = [...urls];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (q.length) await checkOne(q.shift());
}));

// keep input order
results.sort((a, b) => urls.indexOf(a.path) - urls.indexOf(b.path));

const live = results.filter((r) => r.status === 200);
const redir = results.filter((r) => [301, 302, 307, 308].includes(r.status));
const lost = results.filter((r) => [404, 410].includes(r.status));
const other = results.filter((r) =>
  r.status !== 200 && ![301, 302, 307, 308, 404, 410].includes(r.status));

const redirBad = redir.filter((r) => r.finalStatus !== 200);

console.log(`\n===== ${results.length} GSC URLs checked against ${SITE} =====`);
console.log(`  200 live        : ${live.length}`);
console.log(`  301/302 redirect: ${redir.length}  (of which land on non-200: ${redirBad.length})`);
console.log(`  404/410 LOST    : ${lost.length}`);
console.log(`  other/error     : ${other.length}`);

if (lost.length) {
  console.log(`\n----- 404 / 410  LOST PAGES (getting impressions, now dead) -----`);
  for (const r of lost) console.log(`  ${String(r.status).padEnd(4)} ${r.path}`);
}
if (redirBad.length) {
  console.log(`\n----- REDIRECTS THAT DO NOT LAND ON 200 -----`);
  for (const r of redirBad) console.log(`  ${r.status} → ${r.target}  [final ${r.finalStatus}]  (${r.path})`);
}
if (other.length) {
  console.log(`\n----- OTHER / ERROR -----`);
  for (const r of other) console.log(`  ${String(r.status).padEnd(6)} ${r.path}  ${r.target || ""}`);
}

console.log(`\n----- ALL REDIRECTS (301/302) → target -----`);
for (const r of redir) {
  const flag = r.finalStatus === 200 ? "ok" : `!! final ${r.finalStatus}`;
  console.log(`  ${r.status} ${r.path}\n        → ${r.target}  [${flag}]`);
}

// machine-readable dump
import { writeFileSync } from "node:fs";
writeFileSync("scripts/gsc-url-results.json", JSON.stringify(results, null, 2));
console.log(`\nFull results → scripts/gsc-url-results.json`);
