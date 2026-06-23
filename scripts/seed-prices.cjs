// One-off: seed the admin price store (data/seo.json → .prices, or $SEO_DB) from the prices that
// are currently on the site (src/views/Pricing.tsx visible tables + src/content/pricing-services.ts
// schema list). Values are UNCHANGED — this just moves them under admin control. Idempotent: if the
// store already has prices, it does nothing.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const STORE = process.env.SEO_DB || path.join(ROOT, "data", "seo.json");
const NOW = new Date().toISOString();
const slug = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 120);

// [group, service, price, timeline, warranty, schema_name?, warranty_iso?, url?]
const SEED = [
  // MacBook
  ["macbook", "Screen replacement (Air & Pro 13/14/15/16)", 600, "Same day · 1-2 days", "15 days - 3 months", "MacBook Screen Repair Dubai", "P3M", "/macbook-screen-repair-dubai"],
  ["macbook", "Battery replacement", 590, "Same day · 2 hours", "3 months", "MacBook Battery Replacement Dubai", "P3M", "/macbook-battery-replacement-dubai"],
  ["macbook", "Keyboard replacement (full deck)", 460, "1-2 days", "15 days", "MacBook Keyboard Replacement Dubai", "P15D", "/macbook-keyboard-repair-dubai"],
  ["macbook", "Trackpad replacement", 350, "Same day", "12 months", "MacBook Trackpad Repair Dubai", "P1Y"],
  ["macbook", "USB-C / Thunderbolt port repair", 350, "1-2 days", "12 months", "MacBook USB-C Port Repair Dubai", "P1Y"],
  ["macbook", "Touch Bar replacement (2016-2019)", 600, "1-2 days", "12 months", "MacBook Touch Bar Replacement", "P1Y"],
  ["macbook", "Logic board repair (component-level)", 299, "2-5 days", "15 days", "MacBook Logic Board Repair Dubai", "P15D", "/macbook-logic-board-repair-dubai"],
  ["macbook", "Water / liquid damage recovery", 299, "3-5 days", "15 days", "MacBook Water Damage Repair Dubai", "P15D", "/macbook-water-damage-repair-dubai"],
  ["macbook", "Data recovery from dead MacBook", 299, "1-7 days", "Data integrity guaranteed", "MacBook Data Recovery Dubai", "P15D", "/macbook-data-recovery-dubai"],
  ["macbook", "SSD / NVMe upgrade (labour, + drive cost)", 600, "Same day", "12 months + part warranty", "MacBook SSD Upgrade Dubai", "P1Y"],
  ["macbook", "RAM upgrade (Intel models only)", 400, "Same day", "12 months + part warranty"],
  ["macbook", "Overheating / thermal repaste & clean", 300, "Same day · 2 hours", "12 months"],
  ["macbook", "Hinge repair", 300, "1-2 days", "12 months", "MacBook Hinge Repair Dubai", "P1Y"],
  ["macbook", "Speaker replacement", 400, "1-2 days", "12 months"],
  ["macbook", "FaceTime camera replacement", 200, "1-2 days", "12 months"],
  // iMac
  ["imac", "iMac 21.5\" / 24\" / 27\" screen replacement", 800, "2-4 days", "15 days - 3 months", "iMac Screen Repair Dubai", "P3M", "/imac-screen-repair-dubai"],
  ["imac", "Logic board repair", 1000, "3-5 days", "15 days", "iMac Logic Board Repair Dubai", "P15D"],
  ["imac", "SSD upgrade (Fusion → SSD)", 700, "1-2 days", "12 months + part warranty", "iMac SSD Upgrade Dubai", "P1Y"],
  ["imac", "Power supply replacement", 400, "1-2 days", "12 months"],
  ["imac", "Fan / overheating repair", 250, "Same day", "12 months"],
  ["imac", "macOS install / clean reinstall", 300, "Same day · 3 hours", "30 days", "macOS Install / Reinstall Dubai", "P15D"],
  // Mac mini / Studio / Pro
  ["mac-desktop", "Mac mini logic board repair", 299, "2-4 days", "15 days"],
  ["mac-desktop", "Mac mini SSD upgrade", 910, "Same day", "12 months + part warranty"],
  ["mac-desktop", "Mac Studio diagnostics & repair", 1040, "2-5 days", "12 months", "Mac Studio Repair Dubai", "P1Y"],
  ["mac-desktop", "Mac Pro power supply replacement", 1560, "3-5 days", "12 months"],
  ["mac-desktop", "Mac Pro GPU module repair", 1200, "3-5 days", "12 months"],
  // iPhone
  ["iphone", "iPhone screen replacement (6 → 14)", 179, "40 minutes", "15 days - 3 months", "iPhone Screen Repair Dubai", "P3M", "/iphone-screen-repair-dubai"],
  ["iphone", "iPhone screen replacement (15 / 15 Pro)", 1040, "Same day", "15 days - 3 months"],
  ["iphone", "iPhone battery replacement", 250, "30 minutes", "3 months", "iPhone Battery Replacement Dubai", "P3M"],
  ["iphone", "iPhone back glass replacement", 350, "1 day", "12 months"],
  ["iphone", "iPhone charging port repair", 149, "Same day", "12 months"],
  ["iphone", "iPhone water damage recovery", 179, "2-3 days", "15 days"],
  // iPad
  ["ipad", "iPad screen / digitiser (mini / Air / 9-10)", 139, "1 day", "15 days - 3 months", "iPad Screen Repair Dubai", "P3M", "/ipad-screen-repair-dubai"],
  ["ipad", "iPad Pro 11\" screen + LCD", 1170, "1-2 days", "3 months"],
  ["ipad", "iPad Pro 12.9\" screen + LCD", 1560, "1-2 days", "3 months"],
  ["ipad", "iPad battery replacement", 350, "1 day", "3 months"],
  ["ipad", "iPad charging port repair", 300, "Same day", "12 months"],
];

let db = { backlinks: [], snapshots: [], prices: [] };
if (fs.existsSync(STORE)) {
  try { db = JSON.parse(fs.readFileSync(STORE, "utf8")) || db; } catch {}
}
db.backlinks = db.backlinks || [];
db.snapshots = db.snapshots || [];
db.prices = db.prices || [];

if (db.prices.length) {
  console.log(`[seed-prices] store already has ${db.prices.length} prices — leaving as-is.`);
  process.exit(0);
}

let id = 1;
db.prices = SEED.map(([group, service, price, timeline, warranty, schema_name, warranty_iso, url]) => {
  const row = { id: id++, group, service, price, timeline, warranty, key: slug(service), created_at: NOW, updated_at: NOW };
  if (schema_name) row.schema_name = schema_name;
  if (warranty_iso) row.warranty_iso = warranty_iso;
  if (url) row.url = url;
  return row;
});

fs.mkdirSync(path.dirname(STORE), { recursive: true });
fs.writeFileSync(STORE, JSON.stringify(db, null, 2));
const schemaCount = db.prices.filter((p) => p.schema_name).length;
console.log(`[seed-prices] seeded ${db.prices.length} prices (${schemaCount} with JSON-LD) -> ${STORE}`);
