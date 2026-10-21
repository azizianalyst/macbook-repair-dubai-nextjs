// One-off: seed data/seo.json (.menus) with the CURRENT header mega-menu + footer columns so the
// admin starts populated and the nav is unchanged. Idempotent: skips if menus already exist.
// The footer "reviews" link uses the {REVIEW_COUNT} token, replaced at render in Footer.tsx.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const STORE = process.env.SEO_DB || path.join(ROOT, "data", "seo.json");

let db = {};
try { db = JSON.parse(fs.readFileSync(STORE, "utf8")); } catch {}
if (db.menus && typeof db.menus === "object") { console.log("[seed-menus] menus already present; skipping"); process.exit(0); }

db.menus = {
  header: [
    { key: "mac-repair", label: "Mac Repair", href: "/mac-repair-dubai", viewAll: "All Mac repairs", links: [
      { label: "MacBook Pro Repair", href: "/macbook-pro-repair-dubai" },
      { label: "MacBook Air Repair", href: "/macbook-air-repair-dubai" },
      { label: "Screen Repair", href: "/macbook-screen-repair-dubai" },
      { label: "Battery Replacement", href: "/macbook-battery-replacement-dubai" },
      { label: "iMac Repair", href: "/imac-repair-dubai" },
      { label: "Data Recovery", href: "/mac-data-recovery-dubai" },
    ] },
    { key: "iphone-ipad", label: "iPhone & iPad", href: "/apple-repair-dubai", viewAll: "All Apple repairs", links: [
      { label: "iPhone Repair", href: "/iphone-repair-dubai" },
      { label: "iPhone Screen Repair", href: "/iphone-screen-repair-dubai" },
      { label: "iPhone Battery", href: "/iphone-battery-replacement-dubai" },
      { label: "iPad Repair", href: "/ipad-repair-dubai" },
      { label: "iPad Screen Repair", href: "/ipad-screen-repair-dubai" },
    ] },
    { key: "locations", label: "Locations", href: "/macbook-repair-near-me", viewAll: "All areas & UAE", links: [
      { label: "Dubai Marina", href: "/macbook-repair-dubai-marina" },
      { label: "Downtown Dubai", href: "/macbook-repair-downtown-dubai" },
      { label: "Business Bay", href: "/macbook-repair-business-bay" },
      { label: "JLT", href: "/macbook-repair-jlt" },
      { label: "On-site Repair", href: "/onsite-macbook-repair-dubai" },
    ] },
    { key: "pricing", label: "Pricing", href: "/pricing", viewAll: "Full price list", links: [
      { label: "Repair Cost Calculator", href: "/macbook-repair-cost-calculator-dubai" },
      { label: "Warranty - up to 12 months", href: "/warranty" },
      { label: "AppleCare Repair", href: "/applecare-macbook-repair-dubai" },
      { label: "Out-of-Warranty Repair", href: "/out-of-warranty-apple-repair-dubai" },
      { label: "Apple Store vs Independent", href: "/where-to-repair-macbook-dubai" },
    ] },
    { key: "guides", label: "Guides", href: "/blog", viewAll: "All guides", links: [
      { label: "Repair Costs", href: "/blog/repair-costs" },
      { label: "Fixes & Troubleshooting", href: "/blog/fixes" },
      { label: "Buying Guides", href: "/blog/buying-guides" },
      { label: "MacBook Won't Turn On", href: "/blog/macbook-not-turning-on-fix-guide" },
      { label: "Water Spill First Aid", href: "/blog/water-damage-macbook-immediate-action" },
    ] },
    { key: "contact", label: "Contact", href: "/contact" },
  ],
  footer: [
    { key: "popular", heading: "Popular repairs", links: [
      { label: "MacBook Repair", href: "/mac-repair-dubai" },
      { label: "iPhone Repair", href: "/iphone-repair-dubai" },
      { label: "iPad Repair", href: "/ipad-repair-dubai" },
      { label: "MacBook Screen Repair", href: "/macbook-screen-repair-dubai" },
      { label: "iPhone Screen Repair", href: "/iphone-screen-repair-dubai" },
      { label: "Battery Replacement", href: "/macbook-battery-replacement-dubai" },
      { label: "Logic Board Repair", href: "/macbook-logic-board-repair-dubai" },
      { label: "Data Recovery", href: "/mac-data-recovery-dubai" },
    ] },
    { key: "company", heading: "Company", links: [
      { label: "About us - since 2004", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Warranty - up to 12 months", href: "/warranty" },
      { label: "{REVIEW_COUNT}+ Google reviews", href: "/reviews" },
      { label: "Guides & how-tos", href: "/blog" },
      { label: "Apple Service Center Dubai", href: "/apple-service-center-dubai" },
      { label: "Contact & free pickup", href: "/contact" },
    ] },
    { key: "locations", heading: "Top locations", links: [
      { label: "Dubai Marina", href: "/macbook-repair-dubai-marina" },
      { label: "Downtown Dubai", href: "/macbook-repair-downtown-dubai" },
      { label: "Business Bay", href: "/macbook-repair-business-bay" },
      { label: "JLT", href: "/macbook-repair-jlt" },
      { label: "Sharjah", href: "/macbook-repair-sharjah" },
      { label: "Abu Dhabi", href: "/macbook-repair-abu-dhabi" },
    ] },
  ],
};
fs.mkdirSync(path.dirname(STORE), { recursive: true });
fs.writeFileSync(STORE, JSON.stringify(db));
console.log("[seed-menus] seeded header + footer menus");
