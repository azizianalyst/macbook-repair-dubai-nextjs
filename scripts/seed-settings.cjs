// One-off: seed data/seo.json (.settings) with the current site defaults so the admin starts
// populated and values are unchanged. Idempotent: skips if settings already exist.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const STORE = process.env.SEO_DB || path.join(ROOT, "data", "seo.json");

let db = {};
try { db = JSON.parse(fs.readFileSync(STORE, "utf8")); } catch {}
if (db.settings && typeof db.settings === "object") { console.log("[seed-settings] settings already present; skipping"); process.exit(0); }

db.settings = {
  tagline: "Independent Apple Repair Specialists",
  sitemapLastmod: "2026-06-18",
  timezone: "Asia/Dubai",
  siteNoindex: false,
  homepageNoindex: false,
};
fs.mkdirSync(path.dirname(STORE), { recursive: true });
fs.writeFileSync(STORE, JSON.stringify(db));
console.log("[seed-settings] seeded site settings");
