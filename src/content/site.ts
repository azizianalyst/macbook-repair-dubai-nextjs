// canonical site data. The business facts (NAP / reviews / hours / freshness) are now edited in the
// admin Business tab and baked in by scripts/gen-business.cjs → business.generated.ts. We import and
// re-export them here so every existing `@/content/site` import keeps working unchanged.
import {
  NAP as GEN_NAP, REVIEW_COUNT as GEN_REVIEW_COUNT, REVIEW_AVERAGE as GEN_REVIEW_AVERAGE,
  CONTENT_REVIEWED as GEN_CONTENT_REVIEWED, HOURS as GEN_HOURS,
} from "./business.generated";
import { SITE_SETTINGS } from "./settings.generated";

export const NAP = GEN_NAP;
export const REVIEW_COUNT = GEN_REVIEW_COUNT;
export const REVIEW_AVERAGE = GEN_REVIEW_AVERAGE;

// Visible "content reviewed" freshness signal (AEO lever), now edited in the admin Business tab.
export const CONTENT_REVIEWED = GEN_CONTENT_REVIEWED;

// ISO date used as lastmod in all sitemaps for non-blog routes, now edited in /admin/settings
// (settings.generated.ts). Only changes when content changes, so it stays a real freshness signal.
export const SITEMAP_LAST_UPDATED = SITE_SETTINGS.sitemapLastmod;

// Opening hours, now edited in the admin Business tab (see business.generated.ts).
export const HOURS = GEN_HOURS;

// Canonical repair pricing (AED, VAT-inclusive). Single source of truth, the home
// FAQ answers, the visible price table, and the JSON-LD OfferCatalog must all agree
// with these figures. Update here first, then sweep copy that quotes them.
export const PRICING = {
  floor: 150,        // cheapest itemized repair: single key cap (FAQ #1)
  ceiling: 3500,     // top of the range across all services
  screen: { from: 600, to: 1200 },      // Air 13"/Pro 13" 600 · Pro 14" 800 · Pro 16" 1,200
  battery: { from: 450, to: 600 },      // Air 450 · Pro 13" 500 · Pro 14"/16" 600
  keyboard: { from: 150, to: 700 },     // key cap 150 · Magic Keyboard 350 · butterfly top case 700
  logicBoard: { from: 299, to: 2999 },  // component-level board repair (floor = simplest single-IC fix)
  ssdUpgrade: { from: 599, to: 1499 },  // HDD→SSD incl. drive + installation
  waterDamage: { from: 299, to: 2499 },
  software: { from: 199, to: 499 },     // OS install, virus removal
} as const;

// Canonical warranty tiers. The warranty is NOT flat, it depends on the repair.
// Single source of truth: visible copy, the /warranty page table, and every
// JSON-LD WarrantyPromise (warranty: WARRANTY.*.iso) must agree with these.
//   • hardware  → up to 12 months  (screen, keyboard, trackpad, ports, Touch Bar, hinge, fan, speaker, SSD/RAM)
//   • battery   → 3 months + 80% capacity guarantee (MacBook & iPhone)
//   • short     → 15 days  (software / macOS reinstall / virus removal, diagnostics & no-fix,
//                           data recovery, and logic-board + liquid-damage repairs)
// Headline phrasing leads with the ceiling ("up to 12 months"), never "flat"/"every repair".
export const WARRANTY = {
  hardware: { iso: "P1Y", label: "12 months" },
  battery: { iso: "P3M", label: "3 months" },
  short: { iso: "P15D", label: "15 days" },
  headline: "up to 12 months",
  headlineLong: "a written warranty of up to 12 months, depending on the repair",
} as const;

// The page templates carry a numeric `warrantyDays` per page. These helpers snap that
// number to the canonical tiers for display + JSON-LD, so copy and schema never diverge:
//   365 → 12-month (hardware) · 90 → 3-month (battery) · 15 → short (software/board/liquid/data) · 0 → unlock (no parts warranty)
export function warrantyLabel(days: number): string {
  if (days >= 365) return "12-month";
  if (days >= 90) return "3-month";
  if (days > 0) return `${days}-day`;
  return "";
}
// Sentence fragment, e.g. "a 12-month written warranty"; unlock services (0) carry none.
export function warrantyClause(days: number): string {
  const l = warrantyLabel(days);
  return l ? `a ${l} written warranty` : "free pickup and a written quote";
}
// ISO-8601 duration for the JSON-LD WarrantyPromise; undefined = omit (unlock services).
export function warrantyIso(days: number): string | undefined {
  if (days <= 0) return undefined;
  if (days >= 365) return "P1Y";
  if (days >= 90) return "P3M";
  return `P${days}D`;
}
// Infer the warranty tier (in days) from a service NAME, so auto-derived copy
// (QuickAnswer) lands on the right tier without each caller passing it. Mirrors the
// per-page classification: battery=90, screens=90, keyboard=15,
// software/board/liquid/data/diagnostics=15, unlock=0, everything else (hardware)=365.
export function warrantyDaysForService(name: string): number {
  const n = name.toLowerCase();
  if (/icloud|network unlock|activation lock|sim unlock/.test(n)) return 0;
  if (/batter/.test(n)) return 90;
  if (/screen|display|digiti[sz]er/.test(n)) return 90;   // screens (all devices): 3-month warranty
  if (/keyboard|key cap/.test(n)) return 15;              // keyboard replacement: 15-day warranty
  if (/water|liquid|logic board|\bgpu\b|graphics|data recovery|backup|reinstall|virus|software|diagnostic|safe mode|boot ?camp|performance|not turning on|won.?t turn on|overheat|thermal|fan clean|cleaning|maintenance|unlock/.test(n)) return 15;
  return 365;
}

export const DEVICE_FAMILIES = [
  { label: "MacBook",     href: "/mac-repair-dubai" },
  { label: "iMac",        href: "/imac-repair-dubai" },
  { label: "Mac mini",    href: "/mac-mini-repair-dubai" },
  { label: "iPhone",      href: "/iphone-repair-dubai" },
  { label: "iPad",        href: "/ipad-repair-dubai" },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/apple-repair-dubai" },
  { label: "Devices",  href: "/apple-repair-dubai" },
  { label: "Reviews",  href: "/reviews" },
  { label: "Blog",     href: "/blog" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
] as const;

export const USPS = [
  { label: "Free diagnosis",              icon: "Search" },
  { label: "No fix, no charge",           icon: "ShieldCheck" },
  { label: "30-min appointment repair",   icon: "Clock" },
  { label: "Up to 12-month warranty",     icon: "BadgeCheck" },
  { label: "Free pickup in Dubai",        icon: "Truck" },
  { label: "Free loaner MacBook",         icon: "Laptop" },
  { label: "Since 2004",                  icon: "Award" },
  { label: `${REVIEW_COUNT}+ five-star reviews`, icon: "Star" },
] as const;

// Workshop technician roster, single source of truth for BOTH the About-page team
// section AND the server-rendered Person JSON-LD (E-E-A-T: named, experienced techs).
// Consumed by src/views/About.tsx (display) and src/lib/page-schema.ts (schema), so the
// visible roster and the structured data can never drift. Keep names/years accurate.
export const TEAM = [
  { name: "Shafiq", years: 15, specialisation: "Lead technician · screens, batteries, water damage" },
  { name: "Usman",  years: 11, specialisation: "Board-level repair · M-series logic boards" },
  { name: "Ali",    years: 14, specialisation: "Data recovery · iMac and Mac mini" },
  { name: "Hamza",  years: 7,  specialisation: "iPhone, iPad" },
] as const;
