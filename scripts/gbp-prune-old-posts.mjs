#!/usr/bin/env node
/**
 * Bulk-prune old Google Business Profile posts via the admin API.
 *
 * The owner panel has no bulk delete — each post is menu → Delete → confirm, and on a
 * profile with hundreds of posts the panel is too slow to script reliably. This does the
 * same job through the GBP API in one pass.
 *
 * Requires the GBP OAuth connection to be live (data/gbp.json present). Check with:
 *   curl -s -H "Authorization: Bearer $ADMIN_KEY" localhost:3000/api/admin/gbp/status
 *
 * Usage:
 *   node scripts/gbp-prune-old-posts.mjs                 # dry run, 365-day cutoff
 *   node scripts/gbp-prune-old-posts.mjs --days 365      # dry run, explicit cutoff
 *   node scripts/gbp-prune-old-posts.mjs --apply         # actually delete
 *
 * Dry run by default on purpose: deletion is irreversible.
 */
import fs from "node:fs";

const arg = (flag, fallback) => {
  const i = process.argv.indexOf(flag);
  return i === -1 ? fallback : process.argv[i + 1];
};
const APPLY = process.argv.includes("--apply");
const DAYS = Number(arg("--days", 365));
const BASE = arg("--base", "http://localhost:3000");

// ADMIN_KEY from the environment, else parsed out of .env.local.
function adminKey() {
  if (process.env.ADMIN_KEY) return process.env.ADMIN_KEY;
  try {
    const line = fs.readFileSync(".env.local", "utf8")
      .split("\n").find((l) => l.startsWith("ADMIN_KEY="));
    if (line) return line.slice("ADMIN_KEY=".length).trim().replace(/^["']|["']$/g, "");
  } catch { /* fall through */ }
  return null;
}

const KEY = adminKey();
if (!KEY) {
  console.error("ADMIN_KEY not found (env or .env.local). Aborting.");
  process.exit(1);
}
const H = { Authorization: `Bearer ${KEY}` };

const fail = (msg) => { console.error(msg); process.exit(1); };

// 1 — confirm the OAuth connection is actually live before touching anything.
const status = await fetch(`${BASE}/api/admin/gbp/status`, { headers: H })
  .then((r) => r.json())
  .catch(() => fail(`Cannot reach ${BASE}. Is 'npm run dev' running?`));
if (!status?.connected && !status?.ok) {
  fail("GBP not connected. Connect at /admin/gbp (or restore data/gbp.json) first.");
}

// 2 — enumerate the full archive (listPosts pages through internally).
const res = await fetch(`${BASE}/api/admin/gbp/posts`, { headers: H }).then((r) => r.json());
if (!res.ok) fail(`listPosts failed: ${res.error}`);
const posts = res.posts || [];

const cutoff = Date.now() - DAYS * 86400_000;
const idOf = (p) => (p.name || "").split("/localPosts/")[1] || "";
const when = (p) => new Date(p.createTime || p.updateTime || 0).getTime();

const old = posts.filter((p) => when(p) < cutoff && idOf(p));
const keep = posts.filter((p) => when(p) >= cutoff);

console.log(`Total posts:   ${posts.length}`);
console.log(`Older than ${DAYS}d: ${old.length}  ← delete`);
console.log(`Newer:         ${keep.length}  ← keep\n`);

for (const p of old.slice(0, 5)) {
  console.log(`  - ${new Date(when(p)).toISOString().slice(0, 10)}  ${(p.summary || "").replace(/\s+/g, " ").slice(0, 60)}`);
}
if (old.length > 5) console.log(`  … and ${old.length - 5} more\n`);

if (!APPLY) {
  console.log("DRY RUN — nothing deleted. Re-run with --apply to execute.");
  process.exit(0);
}

// 3 — delete, sequentially, so a mid-run failure leaves a clear stopping point.
let ok = 0, bad = 0;
for (const [i, p] of old.entries()) {
  const id = idOf(p);
  const r = await fetch(`${BASE}/api/admin/gbp/posts/${id}`, { method: "DELETE", headers: H })
    .then((x) => x.json())
    .catch((e) => ({ ok: false, error: String(e) }));
  if (r.ok) { ok++; } else { bad++; console.error(`  FAIL ${id}: ${r.error}`); }
  if ((i + 1) % 10 === 0) console.log(`  ${i + 1}/${old.length}…`);
  await new Promise((r) => setTimeout(r, 250)); // stay well under any rate limit
}
console.log(`\nDeleted ${ok}, failed ${bad}, kept ${keep.length}.`);
