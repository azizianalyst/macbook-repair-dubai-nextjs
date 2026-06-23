// One-off: seed data/seo.json (.taxonomy) with the CURRENT blog categories (7 hubs) + tags (5) so the
// admin starts populated. Idempotent. NOTE: adds "Data study" to the repair-costs hub's types so the
// previously-uncategorised /blog/apple-repair-cost-dubai now files under Repair Costs.
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const STORE = process.env.SEO_DB || path.join(ROOT, "data", "seo.json");

let db = {};
try { db = JSON.parse(fs.readFileSync(STORE, "utf8")); } catch {}
if (db.taxonomy && typeof db.taxonomy === "object") { console.log("[seed-categories] taxonomy already present; skipping"); process.exit(0); }

db.taxonomy = {
  categories: [
    { slug: "repair-costs", name: "Repair Costs", eyebrow: "AED pricing · 2026", blurb: "What every Apple repair actually costs in Dubai - real AED prices.", intro: "Honest, technician-written repair cost guides for every Apple device in Dubai. Screen, battery, water damage, logic board and back glass - each with current April 2026 AED pricing, model-by-model tables, and a side-by-side against Apple Store quotes. No call-for-price games: we publish the numbers so you can budget before you book. Every figure here is what our Dubai Media City workshop charges, backed by a warranty of up to 12 months and our no-fix-no-charge promise.", types: ["Cost guide", "Cost comparison", "Data study"] },
    { slug: "fixes", name: "Fixes & Troubleshooting", eyebrow: "DIY first · then us", blurb: "Step-by-step fixes for MacBook, iPhone, iMac and Mac problems.", intro: "Before you pay anyone, try these. Our technicians wrote every troubleshooting guide here from real Dubai workshop cases - won't-turn-on, black screen, won't-charge, overheating, water spills, loud fans and more. Each one walks the same diagnostic order we use in-house, tells you honestly which fixes you can do yourself, and flags the exact symptoms that mean it is hardware and worth bringing in. Free diagnosis if it comes to that, with same-day turnaround on most repairs.", types: ["Problem solving", "Emergency", "Repair guide"] },
    { slug: "buying-guides", name: "Buying Guides", eyebrow: "New, used & compared", blurb: "Which Mac or iPhone to buy - by budget, job and model.", intro: "Choosing your next Apple device in Dubai? These guides compare every current Mac and iPhone by price, performance and who they are actually for - students, developers, creatives, businesses and families. New vs refurbished, Air vs Pro, M4 vs M5, iMac vs Mini vs Studio: we lay out the trade-offs in plain language with UAE pricing, then tell you what we would buy. Written by technicians who repair these machines daily, so the durability and resale advice is real.", types: ["Buying guide", "Comparison"] },
    { slug: "sell-trade-in", name: "Sell & Trade-In", eyebrow: "Get max value", blurb: "Sell or trade your old Apple device for the most money in Dubai.", intro: "Getting rid of an old iPhone, MacBook or Mac? These guides show you exactly what your device is worth in Dubai right now, the safest way to sell it, and how the options stack up - Dubizzle for the highest price, us for instant cash, Apple Trade-In for convenience. We cover real April 2026 resale values, how to wipe your device safely before handing it over, and the scams to watch for in the UAE second-hand market.", types: ["Resale guide"] },
    { slug: "care-maintenance", name: "Care & Maintenance", eyebrow: "Make it last", blurb: "Keep your Apple device fast, cool and healthy in Dubai's climate.", intro: "A well-kept Mac lasts a decade; a neglected one dies in three years. These guides cover the upkeep that matters in Dubai specifically - protecting against 50C summer heat, dust-clogged fans, battery health, backups, and the everyday how-tos every owner should know. Practical, seasonal and written by the team that sees what heat and neglect actually do to Apple hardware in the UAE.", types: ["Care guide", "Seasonal", "How-to"] },
    { slug: "apple-news", name: "Apple News & Tech", eyebrow: "What's new, explained", blurb: "New chips, new models and what they mean for repair and buying.", intro: "Apple ships fast - new chips, new models, discontinued lines. These explainers cut through the launch hype and tell you what actually changed and whether it matters for you: the M5 chip, Apple Intelligence support, the iPhone Air and Fold, the discontinued Mac Pro, and how Apple Silicon changed repair forever. Written from a repair-and-buying angle, not a spec sheet, so you know what each change costs you down the line.", types: ["Industry", "Apple news", "Technical"] },
    { slug: "why-us", name: "How We Work", eyebrow: "Trust & transparency", blurb: "Our pricing, warranty, parts policy and what makes us different.", intro: "Twenty-one years repairing Apple devices in Dubai, and we put it all in writing. These guides explain exactly how we work - how we calculate quotes, what no-fix-no-charge really means, our warranty of up to 12 months, the difference between genuine and quality-alternative parts, and how free pickup and delivery works across Dubai. Plus honest advice on choosing any repair shop, including the red flags to refuse. Transparency is the whole point.", types: ["Trust", "Honest guide", "Service", "Local"] },
  ],
  tags: [
    { slug: "macbook", name: "MacBook" },
    { slug: "iphone", name: "iPhone" },
    { slug: "ipad", name: "iPad" },
    { slug: "imac", name: "iMac" },
    { slug: "mac", name: "Mac (Mini · Studio · Pro)" },
  ],
};
fs.mkdirSync(path.dirname(STORE), { recursive: true });
fs.writeFileSync(STORE, JSON.stringify(db));
console.log("[seed-categories] seeded 7 categories + 5 tags");
