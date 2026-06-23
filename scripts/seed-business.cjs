// One-off: seed the admin business store (data/seo.json → .business, or $SEO_DB) from the values
// currently in src/content/site.ts. Values UNCHANGED — just moves them under admin control.
// Idempotent: if the store already has a business object, it does nothing.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const STORE = process.env.SEO_DB || path.join(ROOT, "data", "seo.json");

const SEED = {
  name: "MacBook Repair Dubai",
  phoneDisplay: "055 741 3706",
  phoneE164: "+971557413706",
  email: "info@macbook-repair-dubai.ae",
  street: "Office #45, 10th Floor, Concord Tower",
  area: "Al Sufouh, Dubai Media City",
  city: "Dubai",
  country: "United Arab Emirates",
  facebook: "https://www.facebook.com/macbookrepairdubai.ae/",
  instagram: "https://www.instagram.com/azizitechnologies/",
  youtube: "https://www.youtube.com/@AziziTechnologies",
  founded: "10 October 2004",
  yearsInBusiness: 21,
  reviewCount: 215,
  reviewAverage: 5.0,
  contentReviewed: "June 2026",
  hours: [
    { day: "Monday", open: "9 am - 10 pm" },
    { day: "Tuesday", open: "9 am - 10 pm" },
    { day: "Wednesday", open: "9 am - 10 pm" },
    { day: "Thursday", open: "9 am - 10 pm" },
    { day: "Friday", open: "9 am - 10 pm" },
    { day: "Saturday", open: "9 am - 10 pm" },
    { day: "Sunday", open: "Closed" },
  ],
};

let db = { backlinks: [], snapshots: [], prices: [], business: null };
if (fs.existsSync(STORE)) {
  try { db = JSON.parse(fs.readFileSync(STORE, "utf8")) || db; } catch {}
}
if (db.business) {
  console.log("[seed-business] store already has a business object — leaving as-is.");
  process.exit(0);
}
db.business = SEED;
fs.mkdirSync(path.dirname(STORE), { recursive: true });
fs.writeFileSync(STORE, JSON.stringify(db, null, 2));
console.log(`[seed-business] seeded business info -> ${STORE}`);
