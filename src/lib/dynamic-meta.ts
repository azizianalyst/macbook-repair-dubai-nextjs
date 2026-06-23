// Runtime <head> meta for DATA-DRIVEN routes whose title/description are computed
// inside their view template (from JSON / content modules) and therefore never made
// it into route-meta.generated.ts (the old extract-meta.cjs only captured STATIC
// `seoTitle` literals, and its source repo is gone).
//
// Each builder below mirrors, byte-for-byte, the seoTitle/seoDescription its template
// renders, so the indexed <head> stays identical to the on-page H1 context and the
// JSON-LD. If you ever change a formula in one of the referenced templates, change it
// here too (these are the paired source of truth):
//   - MacBook  -> src/components/blocks/MacBookModelPage.tsx     (seoTitle/seoDescription ~L256)
//   - iPad     -> src/components/blocks/IpadModelPage.tsx        (~L230)
//   - Mac desk -> src/components/blocks/MacDesktopModelPage.tsx  (~L282)
//   - iMac     -> src/components/blocks/IMacModelPage.tsx        (~L278)
//   - City     -> src/components/blocks/CityPageTemplate.tsx     (~L35)
//   - Area     -> src/components/blocks/AreaPageTemplate.tsx     (~L30)
import airModels from "@/content/macbook-air-models.json";
import proModels from "@/content/macbook-pro-models.json";
import ipadModels from "@/content/ipad-models.json";
import desktopModels from "@/content/mac-desktop-models.json";
import imacModels from "@/content/imac-models.json";
import { CITIES } from "@/content/cities";
import { AREAS } from "@/content/areas";
import { CATEGORIES, postsInCategory } from "@/content/blog-posts";
import { META_OVERRIDES, type PageMetaOverride } from "./page-meta-overrides.generated";

type Meta = { title: string; description: string };

// Loose model shape: pricing keys vary per family and several are optional.
type ModelEntry = {
  slug: string;
  name: string;
  releaseYear?: number;
  pricing: Record<string, number | undefined>;
};

const MACBOOK = [...(airModels as ModelEntry[]), ...(proModels as ModelEntry[])];
const IPAD = ipadModels as ModelEntry[];
const MAC_DESKTOP = desktopModels as ModelEntry[];
const IMAC = imacModels as ModelEntry[];

function macbookMeta(m: ModelEntry): Meta {
  const p = m.pricing;
  const startingPrice = Math.min(p.battery!, p.port!, p.fanCleaning || 9999);
  return {
    title: `${m.name} Repair Dubai - From AED ${startingPrice}`,
    description: `${m.name} (${m.releaseYear}) repair Dubai. Screen AED ${p.screen}, battery AED ${p.battery}, keyboard AED ${p.keyboard}. warranty up to 12 months.`,
  };
}

function ipadMeta(m: ModelEntry): Meta {
  const p = m.pricing;
  const startingPrice = Math.min(p.battery!, p.port!);
  return {
    title: `${m.name} Repair Dubai - From AED ${startingPrice}`,
    description: `${m.name} (${m.releaseYear}) repair Dubai. Screen AED ${p.screen}, battery AED ${p.battery}, port AED ${p.port}. warranty up to 12 months. Free pickup.`,
  };
}

function macDesktopMeta(m: ModelEntry): Meta {
  const p = m.pricing;
  const candidates = [p.fanCleaning, p.thermalPaste, p.port, p.psu].filter(
    (v): v is number => typeof v === "number" && v > 0,
  );
  const startingPrice = candidates.length ? Math.min(...candidates) : p.logicBoard!;
  return {
    title: `${m.name} Repair Dubai - From AED ${startingPrice}`,
    description: `${m.name} repair Dubai. Logic board AED ${p.logicBoard}${p.psu ? `, PSU AED ${p.psu}` : ""}${p.port ? `, port AED ${p.port}` : ""}. warranty up to 12 months.`,
  };
}

function imacMeta(m: ModelEntry): Meta {
  const p = m.pricing;
  const candidates = [p.powerSupply, p.ramUpgrade, p.fanCleaning, p.thermalPaste].filter(
    (v): v is number => typeof v === "number" && v > 0,
  );
  const startingPrice = candidates.length ? Math.min(...candidates) : p.screen!;
  return {
    title: `${m.name} Repair Dubai - From AED ${startingPrice}`,
    description: `${m.name} repair Dubai. Screen AED ${p.screen}, logic board AED ${p.logicBoard}${p.powerSupply ? `, PSU AED ${p.powerSupply}` : ""}. warranty up to 12 months.`,
  };
}

// Build the path -> meta map once at module load.
const MAP: Record<string, Meta> = {};
for (const m of MACBOOK) MAP[`/${m.slug}`] = macbookMeta(m);
for (const m of IPAD) MAP[`/${m.slug}`] = ipadMeta(m);
for (const m of MAC_DESKTOP) MAP[`/${m.slug}`] = macDesktopMeta(m);
for (const m of IMAC) MAP[`/${m.slug}`] = imacMeta(m);

for (const c of CITIES) {
  const collectVerb = c.collectionModel === "pickup" ? "free door-to-door pickup" : "free courier collection";
  MAP[`/macbook-repair-${c.slug}`] = {
    title: `MacBook Repair ${c.city} - Free Collection & Delivery`,
    description: `MacBook repair in ${c.city} via ${collectVerb} to our Dubai Media City workshop - ${c.turnaround}, written warranty up to 12 months. No branch needed. Call 055 741 3706.`,
  };
}

for (const a of AREAS) {
  MAP[`/macbook-repair-${a.slug}`] = {
    title: `MacBook Repair ${a.area} - Free Pickup & Delivery`,
    description: `MacBook repair in ${a.area} with free pickup & same-day delivery from our Concord Tower workshop. warranty up to 12 months. Call 055 741 3706.`,
  };
}

// Blog category hubs — mirrors src/views/BlogCategory.tsx (~L31) title/description.
// A post belongs to category c when c.types includes its `category` label.
for (const c of CATEGORIES) {
  const count = postsInCategory(c.slug).length;
  MAP[`/blog/${c.slug}`] = {
    title: `${c.name} - Apple Repair Blog Dubai`,
    description: `${c.blurb} Technician-written, with 2026 AED pricing. ${count} guides.`,
  };
}

// Bespoke gap pages whose authored copy lived only in the view (schema-only via useSeo)
// or was never written into route-meta.generated.ts. Clean, length-safe values.
MAP["/reviews"] = {
  title: "MacBook Repair Dubai Reviews - 216+ 5-Star Ratings",
  description: "Read 216+ verified five-star reviews of MacBook Repair Dubai. 21 years, 40,000+ Apple repairs, free diagnosis and a warranty up to 12 months.",
};
MAP["/imac-screen-repair-dubai"] = {
  title: `iMac Screen Repair Dubai - 24" M-Series & 27" 5K`,
  description: `iMac screen repair Dubai. 24" M1/M3/M4 and 27" Intel 5K Retina. Adhesive removal, dust-free reseal, full calibration. From AED 800.`,
};
MAP["/ipod-touch-7-repair-dubai"] = {
  title: "iPod touch (7th gen) Repair Dubai - Battery & Screen",
  description: "iPod touch (7th gen) repair Dubai. Battery, screen, home button and charging port. Free pickup, free diagnostic, warranty up to 12 months.",
};

// Intentional OVERRIDES that must beat an existing route-meta.generated.ts entry
// (e.g. an entry that has a title but no description, or an over-long title).
const OVERRIDE: Record<string, Meta> = {
  // MacBook Neo A18 Pro spokes (March 2026 student MacBook).
  "/macbook-neo-a18-repair-dubai": {
    title: "MacBook Neo A18 Pro Repair Dubai - First A-Chip MacBook 2026",
    description: "MacBook Neo A18 Pro repair Dubai (March 2026). Apple's $599 student MacBook with the A18 Pro chip from iPhone 16 Pro. Screen AED 650, battery AED 450. Free diagnosis. Warranty up to 12 months. Call 055 741 3706.",
  },
  "/macbook-neo-screen-repair-dubai": {
    title: "MacBook Neo Screen Repair Dubai - 12.9-inch Liquid Retina from AED 650",
    description: "MacBook Neo screen repair Dubai from AED 650. 12.9-inch Liquid Retina display, A18 Pro (2026). Cracked glass, dead pixels, backlight failure. Free diagnosis. 3-month warranty. Call 055 741 3706.",
  },
  "/macbook-neo-battery-replacement-dubai": {
    title: "MacBook Neo Battery Replacement Dubai - From AED 450",
    description: "MacBook Neo battery replacement Dubai from AED 450. A18 Pro MacBook (March 2026), 18-hour rated life. BMS re-pair included. Check AppleCare+ before booking. Free diagnosis. Call 055 741 3706.",
  },
  "/macbook-neo-keyboard-repair-dubai": {
    title: "MacBook Neo Keyboard Repair Dubai - Magic Keyboard + Touch ID from AED 300",
    description: "MacBook Neo keyboard repair Dubai from AED 300. Magic Keyboard with Touch ID (A18 Pro model, 2026). Individual key cap replacement or top-case. Check AppleCare+ first. Call 055 741 3706.",
  },
  // Pro-specific service spokes under the generic screen/battery pages.
  "/macbook-air-screen-repair-dubai": {
    title: "MacBook Air Screen Repair Dubai — From AED 450",
    description: "MacBook Air screen repair Dubai from AED 450. M1–M4 Liquid Retina, Intel IPS, True Tone, same-day. Genuine Apple panels, warranty up to 3 months. Call 055 741 3706.",
  },
  "/macbook-pro-screen-repair-dubai": {
    title: "MacBook Pro Screen Repair Dubai — From AED 600",
    description: "MacBook Pro screen repair Dubai from AED 600. Liquid Retina XDR mini-LED, ProMotion, Flexgate and M5 OLED panels. Same-day, genuine, 3-month warranty.",
  },
  "/macbook-pro-battery-replacement-dubai": {
    title: "MacBook Pro Battery Replacement Dubai — From AED 500",
    description: "MacBook Pro battery replacement Dubai from AED 500. 14-inch and 16-inch 100Wh, Intel and M1-M5, swelling. Same-day 2-hour service, 3-month warranty.",
  },
  "/macbook-air-battery-replacement-dubai": {
    title: "MacBook Air Battery Replacement Dubai — From AED 450",
    description: "MacBook Air battery replacement Dubai from AED 450. Intel 49.9 Wh, M1/M2/M3 52.6–66.5 Wh, BMS re-pair included for Apple Silicon. Same-day 2-hour service. Call 055 741 3706.",
  },
  "/macbook-air-keyboard-repair-dubai": {
    title: "MacBook Air Keyboard Repair Dubai — From AED 300",
    description: "MacBook Air keyboard repair Dubai from AED 300. Intel butterfly and M1–M4 Magic Keyboard. Individual key caps, sticky keys, backlight, Touch ID. Same-day 2-hour service. Call 055 741 3706.",
  },
  // High-intent symptom pages — urgent searches, high conversion.
  "/macbook-not-turning-on-dubai": {
    title: "MacBook Not Turning On Dubai? Dead Mac Fixed Same Day",
    description: "MacBook not turning on in Dubai? Free diagnosis. Dead battery, logic board fuse, liquid damage, DC-in board. All Mac models. Same-day from AED 200. Call 055 741 3706.",
  },
  "/macbook-water-damage-repair-dubai": {
    title: "MacBook Water Damage Repair Dubai — Act Fast, Save Your Mac",
    description: "MacBook water damage repair Dubai. Spilled coffee, water or juice on MacBook Air or Pro? Act within 24 hours. Free diagnosis. From AED 400. Call 055 741 3706.",
  },
  "/macbook-wont-charge-dubai": {
    title: "MacBook Not Charging Dubai? MagSafe & USB-C Fix Same Day",
    description: "MacBook not charging in Dubai? MagSafe 3, USB-C port, DC-in board, dead battery. All Air and Pro models. Free diagnosis. From AED 200. Call 055 741 3706.",
  },
  "/macbook-overheating-shutting-down-dubai": {
    title: "MacBook Overheating & Shutting Down Dubai — Fix Same Day",
    description: "MacBook overheating or shutting down in Dubai? Thermal paste, fan failure, dust, M-chip throttling. All models. Free diagnosis. From AED 150. Call 055 741 3706.",
  },
  "/macbook-kernel-panic-dubai": {
    title: "MacBook Kernel Panic Dubai — Random Restart Fix Same Day",
    description: "MacBook kernel panic in Dubai? Random restarts, crash logs, grey screen. Software, SSD, RAM or logic board. Free diagnosis. From AED 200. Call 055 741 3706.",
  },
  "/mac-data-recovery-dubai": {
    title: "Mac Data Recovery Dubai — SSD, Deleted Files, Won't Boot",
    description: "Mac data recovery Dubai. Won't boot, SSD failure, accidental delete, water damage, formatted drive. Apple Silicon and Intel. Free assessment. From AED 500. Call 055 741 3706.",
  },
  // CTR improvements: pages with high impressions but below-benchmark click rates.
  "/do-macbooks-last-over-a-decade": {
    title: "How Long Do MacBooks Last? Most Reach 7–10 Years",
    description: "Most MacBooks last 7–10 years — some push 12+. What shortens lifespan, what extends it, and the repair-vs-replace tipping point explained year by year.",
  },
  "/how-to-erase-all-data-on-my-mac-before-giving-it-away": {
    title: "Erase Mac Before Selling — Don't Skip These Steps (2026)",
    description: "Erase your Mac safely before selling: sign out of iCloud and Find My first, then Erase All Content and Settings. Skipping iCloud locks the buyer out permanently.",
  },
  "/how-to-clean-a-macbook-screen": {
    title: "How to Clean a MacBook Screen (Without Damaging It)",
    description: "Clean your MacBook screen without streaks or coating damage. The exact cloth and technique Apple recommends — plus the common mistakes that cause permanent marks.",
  },
  "/how-to-recover-macbook-password": {
    title: "Forgot MacBook Password? 4 Ways to Get Back In (2026)",
    description: "Recover a forgotten MacBook login password via Apple ID, Recovery Mode resetpassword tool, your hint, or FileVault key. Step-by-step for all macOS versions.",
  },
  "/blog/macbook-battery-replacement-cost-2026": {
    title: "MacBook Battery Replacement Cost Dubai 2026: Air & Pro",
    description: "MacBook battery replacement Dubai 2026: AED 450 (Air) to AED 700 (16-inch Pro). Same-day, labour included, 3-month warranty. vs Apple Store prices.",
  },
  "/blog/should-i-buy-refurbished-macbook-dubai": {
    title: "Refurbished MacBook Dubai: Worth It? (2026 Honest Guide)",
    description: "Save 30–40% on a refurbished MacBook in Dubai — but only from the right source. Apple Certified vs independent refurbs vs Dubizzle: risks and what to check.",
  },
  "/blog/ipad-battery-replacement-cost-dubai": {
    title: "iPad Battery Replacement Cost Dubai 2026 — All Models",
    description: "iPad battery replacement Dubai 2026: AED 300–550 depending on model. Same-day service, 3-month warranty. When to replace and how to check your battery health.",
  },
  "/the-caps-lock-key-is-not-responding-after-restarting-my-macbook": {
    title: "Caps Lock Not Working on MacBook? Here Are 7 Fixes",
    description: "MacBook Caps Lock won't respond after a restart? Usually the built-in hold delay, Slow Keys, or a remapped key — not broken hardware. Every fix, in order.",
  },
  "/the-server-gave-an-error-during-download-403-forbidden": {
    title: "Fix 'Server Gave an Error During Download' on Mac (403)",
    description: "Seeing 403 Forbidden when downloading on your Mac? It's the server blocking the request, not your Mac. Fix it in 2 minutes: check your clock, Apple ID, VPN and DNS cache.",
  },
  // route-meta has a title-only, 84-char entry for this; add a description + trim.
  "/imac-logic-board-repair-dubai": {
    title: "iMac Logic Board Repair Dubai - Component-Level",
    description: `iMac logic board repair Dubai. Component-level rework on 27" Intel and 24" M-series: power delivery, GPU, T2, SoC limits. From AED 1,000.`,
  },
  // Restored Q&A guide pages (previously redirected, now real pages).
  "/why-does-my-macbook-air-m4-heat-up-so-quickly": {
    title: "Why Does My MacBook Air M4 Heat Up So Quickly?",
    description: "MacBook Air M4 has no fan — heat during heavy tasks is expected. Here's what's normal, what's a problem, and how to keep it running cool.",
  },
  "/iphone-16-pro-max-screen-flickering": {
    title: "iPhone 16 Pro Max Screen Flickering? Here's Every Fix",
    description: "iPhone 16 Pro Max screen flickering is usually a software or ProMotion glitch, not a broken display. Step-by-step fixes before booking a repair.",
  },
  "/iphone-16-shocks-while-charging": {
    title: "iPhone Shocking You While Charging? Causes and Safe Fixes",
    description: "A tingle or mild shock when charging your iPhone is almost always a charger grounding issue, not a phone fault. Here's what causes it and how to fix it.",
  },
  "/can-iphone-motherboard-be-repaired": {
    title: "Can an iPhone Motherboard Be Repaired? Yes — Here's How",
    description: "Yes, iPhone logic boards can be repaired at the component level. Micro-soldering fixes power issues, Face ID, audio, and GPU faults. Dubai pricing included.",
  },
  "/what-causes-color-distortion-on-macbook-screens": {
    title: "What Causes Color Distortion on MacBook Screens? Fix Guide",
    description: "MacBook screen colour distortion — tints, washed-out, oversaturated — is usually Night Shift, True Tone, or a wrong colour profile. Full diagnosis and fixes.",
  },
  "/white-or-grey-horizontal-lines-appearing-on-macbook-screen": {
    title: "White or Grey Horizontal Lines on MacBook Screen (Fix)",
    description: "Horizontal lines on a MacBook screen point to a loose display cable, Flexgate on 2016–2019 MacBook Pro, or a GPU fault. Diagnosis guide and Dubai repair cost.",
  },
  "/iphone-16-pro-battery-capacity": {
    title: "iPhone 16 Pro Battery Capacity, Life & Replacement Cost",
    description: "iPhone 16 Pro has a 3,582 mAh battery rated for 27 hrs video. What affects battery life, when to replace, and Dubai replacement cost (AED 350).",
  },
  "/how-to-take-a-screenshot-on-a-macbook": {
    title: "How to Take a Screenshot on a MacBook (All 3 Shortcuts)",
    description: "Shift-Cmd-3 = full screen. Shift-Cmd-4 = drag a selection. Shift-Cmd-5 = every option. Where screenshots save, how to copy to clipboard, and fixes when it stops working.",
  },
  "/blog/macbook-battery-health-check-guide": {
    title: "MacBook Battery Health Check: 3 Ways in 30 Seconds (2026)",
    description: "Check MacBook battery health: System Settings → Battery → Battery Health. Or Option-click the battery icon. Cycle-count limits per model, what 80% means, when to replace.",
  },
  "/how-to-choose-the-best-apple-laptop-for-gaming": {
    title: "Best MacBook for Gaming 2026: M4 Air vs Pro vs Max",
    description: "M4 MacBook Air handles most games well. M4 Pro handles everything. M4 Max is overkill unless you edit too. GPU tiers, RAM needs, thermals, and which titles run natively in 2026.",
  },
  "/sources-to-purchase-a-refurbished-macbook": {
    title: "Where to Buy a Refurbished MacBook: 5 Sources Ranked",
    description: "Apple Certified Refurbished is the safest. Independent shops beat Dubizzle for warranty. Dubizzle works if you know what to check. All sources ranked by risk, value, and warranty.",
  },
  "/why-is-my-ipad-not-charging": {
    title: "iPad Not Charging? 8 Fixes That Actually Work (2026)",
    description: "iPad not charging is usually a cable, port debris, or adapter fault — not a dead battery. Fixes in order: swap cable, clean port, force restart, different adapter, check battery health.",
  },
  "/migrating-data-from-old-macbook-to-new-macbook-without-icloud": {
    title: "Migrate MacBook Data Without iCloud: 3 Methods That Work",
    description: "Move everything from old MacBook to new without iCloud: Migration Assistant over cable (fastest, keeps settings), Time Machine restore, or manual folder copy. All macOS versions.",
  },
  // MacBook Pro L6 chip×screen pages
  "/macbook-pro-m1-screen-repair-dubai": {
    title: "MacBook Pro M1 Screen Repair Dubai — From AED 1,000",
    description: "MacBook Pro M1 Pro/Max screen repair Dubai from AED 1,000. Liquid Retina XDR mini-LED 14-inch and 16-inch, 120Hz ProMotion. Same-day diagnosis. 3-month warranty. Call 055 741 3706.",
  },
  "/macbook-pro-m2-screen-repair-dubai": {
    title: "MacBook Pro M2 Screen Repair Dubai — From AED 1,000",
    description: "MacBook Pro M2 Pro/Max screen repair Dubai from AED 1,000. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion, nano-texture glass available. Same-day diagnosis. Call 055 741 3706.",
  },
  "/macbook-pro-m3-screen-repair-dubai": {
    title: "MacBook Pro M3 Screen Repair Dubai — From AED 1,000",
    description: "MacBook Pro M3 Pro/Max screen repair Dubai from AED 1,000. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion. Space Black available. Same-day diagnosis. Call 055 741 3706.",
  },
  "/macbook-pro-m4-screen-repair-dubai": {
    title: "MacBook Pro M4 Screen Repair Dubai — From AED 1,100",
    description: "MacBook Pro M4 Pro/Max screen repair Dubai from AED 1,100. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion, Thunderbolt 5. 1-2 day turnaround. Call 055 741 3706.",
  },
  "/macbook-pro-m5-screen-repair-dubai": {
    title: "MacBook Pro M5 Screen Repair Dubai — OLED Display Specialist",
    description: "MacBook Pro M5 OLED screen repair Dubai. First OLED MacBook Pro — 14-inch and 16-inch tandem OLED. Free diagnosis. 2-3 day turnaround. Call 055 741 3706.",
  },
  // MacBook Pro L6 chip×battery pages
  "/macbook-pro-m1-battery-replacement-dubai": {
    title: "MacBook Pro M1 Battery Replacement Dubai — From AED 500",
    description: "MacBook Pro M1 Pro/Max battery replacement Dubai from AED 500. 69.6 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. Call 055 741 3706.",
  },
  "/macbook-pro-m2-battery-replacement-dubai": {
    title: "MacBook Pro M2 Battery Replacement Dubai — From AED 500",
    description: "MacBook Pro M2 Pro/Max battery replacement Dubai from AED 500. 69.6 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. Call 055 741 3706.",
  },
  "/macbook-pro-m3-battery-replacement-dubai": {
    title: "MacBook Pro M3 Battery Replacement Dubai — From AED 500",
    description: "MacBook Pro M3 Pro/Max battery replacement Dubai from AED 500. 70 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. Call 055 741 3706.",
  },
  "/macbook-pro-m4-battery-replacement-dubai": {
    title: "MacBook Pro M4 Battery Replacement Dubai — From AED 550",
    description: "MacBook Pro M4 Pro/Max battery replacement Dubai from AED 550. 72.4 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included, Thunderbolt 5. 1-2 day turnaround. Call 055 741 3706.",
  },
  "/macbook-pro-m5-battery-replacement-dubai": {
    title: "MacBook Pro M5 Battery Replacement Dubai — From AED 600",
    description: "MacBook Pro M5 Pro/Max battery replacement Dubai from AED 600. BMS re-pair included. OLED display model (2025). Check Apple warranty first. Free diagnosis. Call 055 741 3706.",
  },
  // iMac chip-generation hub pages
  "/imac-intel-repair-dubai": {
    title: "iMac Intel Repair Dubai — 21.5-inch & 27-inch 5K 2017–2020",
    description: "iMac Intel repair Dubai. 21.5-inch Retina 4K (2017–2019), 27-inch 5K Retina (2017–2020), iMac Pro 27-inch (2017). Screen, logic board, PSU, GPU, SSD upgrade. From AED 300. Call 055 741 3706.",
  },
  "/imac-m1-repair-dubai": {
    title: "iMac M1 Repair Dubai — 24-inch 2021 A2438/A2439",
    description: "iMac M1 repair Dubai. 24-inch 7-colour iMac with M1 chip (2021), model A2438/A2439. Screen, logic board, USB hub board, speaker repair from AED 800. Free diagnosis. Call 055 741 3706.",
  },
  "/imac-m3-repair-dubai": {
    title: "iMac M3 Repair Dubai — 24-inch 2023 Retina 4.5K",
    description: "iMac M3 repair Dubai. 24-inch 4.5K Retina iMac with M3 chip (late 2023). Screen, logic board, USB hub board, speaker repair from AED 800. Check AppleCare+ before booking. Call 055 741 3706.",
  },
  "/imac-m4-repair-dubai": {
    title: "iMac M4 Repair Dubai — 24-inch 2024 Retina 4.5K",
    description: "iMac M4 repair Dubai. 24-inch 4.5K Retina iMac with M4 chip (late 2024), nano-texture glass option. Free diagnosis. Almost certainly under Apple warranty — check first. Screen from AED 850. Call 055 741 3706.",
  },
};

/** Computed title/description for a data-driven route, or null if not one. */
export function dynamicMeta(path: string): Meta | null {
  return MAP[path] ?? null;
}

/** Authored override that takes precedence over route-meta.generated.ts. */
export function metaOverride(path: string): Meta | null {
  return OVERRIDE[path] ?? null;
}

// Admin-controlled per-field overrides (edited in /admin/pageseo, baked by gen-pagemeta.cjs).
// Applied LAST in metaForPath so a custom title can leave the authored description intact.
export function adminMetaOverride(path: string): PageMetaOverride | null {
  return META_OVERRIDES[path] ?? null;
}
