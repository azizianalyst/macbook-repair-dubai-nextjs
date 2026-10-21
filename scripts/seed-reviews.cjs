// One-off: seed the admin Reviews store (data/seo.json → .reviews, or $SEO_DB) from the CURRENT
// src/content/reviews.ts (the 212 Google reviews). Values UNCHANGED. Idempotent: if the store
// already has reviews, it does nothing. After this, the store is the source of truth and
// scripts/gen-reviews.cjs regenerates reviews.ts.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const STORE = process.env.SEO_DB || path.join(ROOT, "data", "seo.json");
const SRC = path.join(ROOT, "src", "content", "reviews.ts");

const file = fs.readFileSync(SRC, "utf8");
const m = file.match(/REVIEWS:\s*TaggedReview\[\]\s*=\s*(\[[\s\S]*?\]);\s*\n\s*export function pickReviews/);
if (!m) { console.error("[seed-reviews] could not locate the REVIEWS array in reviews.ts"); process.exit(1); }

let arr;
try { arr = eval(m[1]); } // one-off local script; the array literal is plain JS
catch (e) { console.error("[seed-reviews] failed to parse REVIEWS:", e.message); process.exit(1); }
if (!Array.isArray(arr) || !arr.length) { console.error("[seed-reviews] no reviews parsed"); process.exit(1); }

let db = { backlinks: [], snapshots: [], prices: [], business: null, reviews: [] };
if (fs.existsSync(STORE)) { try { db = JSON.parse(fs.readFileSync(STORE, "utf8")) || db; } catch {} }
db.reviews = db.reviews || [];
if (db.reviews.length) { console.log(`[seed-reviews] store already has ${db.reviews.length} reviews — leaving as-is.`); process.exit(0); }

let id = 1;
db.reviews = arr.map((r) => ({
  id: id++, name: r.name, date: r.date, rating: r.rating, text: r.text,
  language: r.language, services: Array.isArray(r.services) ? r.services : [],
}));
fs.mkdirSync(path.dirname(STORE), { recursive: true });
fs.writeFileSync(STORE, JSON.stringify(db, null, 2));
console.log(`[seed-reviews] seeded ${db.reviews.length} reviews -> ${STORE}`);
