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
import { DATA_RECOVERY_AREAS } from "@/content/data-recovery-areas";
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

// Price-free by policy (hide-prices-whatsapp): titles/descriptions never carry AED figures.
function macbookMeta(m: ModelEntry): Meta {
  return {
    title: `${m.name} Repair Dubai - Request a Quote`,
    description: `${m.name} (${m.releaseYear}) repair Dubai. Screen, battery, keyboard and logic-board repair with free diagnosis and warranty up to 12 months. Message us on WhatsApp for today's price. Call 055 741 3706.`,
  };
}

function ipadMeta(m: ModelEntry): Meta {
  return {
    title: `${m.name} Repair Dubai - Request a Quote`,
    description: `${m.name} (${m.releaseYear}) repair Dubai. Screen, battery and charging-port repair with free diagnosis, free pickup and warranty up to 12 months. Message us on WhatsApp for today's price. Call 055 741 3706.`,
  };
}

function macDesktopMeta(m: ModelEntry): Meta {
  return {
    title: `${m.name} Repair Dubai - Request a Quote`,
    description: `${m.name} repair Dubai. Logic board${m.pricing.psu ? ", power supply" : ""}${m.pricing.port ? ", port" : ""}, SSD data recovery and thermal service with free diagnosis and warranty up to 12 months. Message us on WhatsApp for today's price. Call 055 741 3706.`,
  };
}

function imacMeta(m: ModelEntry): Meta {
  return {
    title: `${m.name} Repair Dubai - Request a Quote`,
    description: `${m.name} repair Dubai. Screen, logic board${m.pricing.powerSupply ? ", power supply" : ""} and SSD repair with free diagnosis and warranty up to 12 months. Message us on WhatsApp for today's price. Call 055 741 3706.`,
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
    description: `MacBook repair in ${a.area}: free pickup, same-day on most repairs, written warranty up to 12 months. Free diagnosis. Call 055 741 3706.`,
  };
}

for (const a of DATA_RECOVERY_AREAS) {
  MAP[`/mac-data-recovery-${a.slug}`] = {
    title: `Mac Data Recovery ${a.area} - Free Collection`,
    description: `Mac data recovery in ${a.area}: soldered-SSD, T2 and Apple-silicon recovery at board level. Free diagnosis, no recovery no fee. Call 055 741 3706.`,
  };
}

// Blog category hubs — mirrors src/views/BlogCategory.tsx (~L31) title/description.
// A post belongs to category c when c.types includes its `category` label.
for (const c of CATEGORIES) {
  const count = postsInCategory(c.slug).length;
  MAP[`/blog/${c.slug}`] = {
    title: `${c.name} - Apple Repair Blog Dubai`,
    description: `${c.blurb} Technician-written, quotes on WhatsApp. ${count} guides.`,
  };
}

// Bespoke gap pages whose authored copy lived only in the view (schema-only via useSeo)
// or was never written into route-meta.generated.ts. Clean, length-safe values.
MAP["/reviews"] = {
  title: "MacBook Repair Dubai Reviews - 232+ 5-Star Ratings",
  description: "Read 232+ verified five-star reviews of MacBook Repair Dubai. Since 2004, 40,000+ Apple repairs, free diagnosis and a warranty up to 12 months.",
};
MAP["/imac-screen-repair-dubai"] = {
  title: `iMac Screen Repair Dubai - 24" M-Series & 27" 5K`,
  description: `iMac screen repair Dubai. 24" M1/M3/M4 and 27" Intel 5K Retina. Adhesive removal, dust-free reseal, full calibration.`,
};
MAP["/ipod-touch-7-repair-dubai"] = {
  title: "iPod touch (7th gen) Repair Dubai - Battery & Screen",
  description: "iPod touch (7th gen) repair Dubai. Battery, screen, home button and charging port. Free pickup, free diagnostic, warranty up to 12 months.",
};

// Intentional OVERRIDES that must beat an existing route-meta.generated.ts entry
// (e.g. an entry that has a title but no description, or an over-long title).
const OVERRIDE: Record<string, Meta> = {
  // MacBook Neo spokes (13-inch, A18 Pro, on sale 11 March 2026). These mirror each
  // view's seoTitle/seoDescription exactly (src/views/MacBookNeo*.tsx) — keep them paired.
  "/macbook-neo-a18-repair-dubai": {
    title: "MacBook Neo A18 Pro Repair Dubai - Board & Liquid Damage",
    description: "MacBook Neo A18 Pro logic board repair in Dubai: no power, liquid damage, charging faults and data recovery. Free diagnosis. WhatsApp 055 741 3706.",
  },
  "/macbook-neo-screen-repair-dubai": {
    title: "MacBook Neo Screen Repair Dubai - 13-inch Display",
    description: "MacBook Neo screen repair in Dubai: cracked, lines, dead areas or no picture. Free diagnosis, AppleCare+ checked first, 90-day warranty. WhatsApp us.",
  },
  "/macbook-neo-battery-replacement-dubai": {
    title: "MacBook Neo Battery Replacement Dubai - Free Health Check",
    description: "MacBook Neo battery replacement in Dubai: free battery health check, warranty status first, 3-month warranty with 80% guarantee. WhatsApp 055 741 3706.",
  },
  "/macbook-neo-keyboard-repair-dubai": {
    title: "MacBook Neo Keyboard Repair Dubai - Stuck Keys & Spills",
    description: "MacBook Neo keyboard repair in Dubai: stuck or missing keys, spills and full keyboard replacement. Free diagnosis, warranty checked first. WhatsApp us.",
  },
  // Pro-specific service spokes under the generic screen/battery pages.
  "/macbook-pro-screen-repair-dubai": {
    title: "MacBook Pro Screen Repair Dubai — Free Diagnosis",
    description: "MacBook Pro screen repair in Dubai: Liquid Retina XDR mini-LED, ProMotion and Flexgate faults. Same-day, genuine or tested panels, 90-day warranty.",
  },
  "/macbook-pro-battery-replacement-dubai": {
    title: "MacBook Pro Battery Replacement Dubai",
    description: "MacBook Pro battery replacement in Dubai for 14 and 16-inch, Intel and M1-M5, including swollen cells. Same-day, 3-month warranty. Get a free quote.",
  },
  "/macbook-air-battery-replacement-dubai": {
    title: "MacBook Air Battery Replacement Dubai — Same-Day Service",
    description: "MacBook Air battery replacement Dubai for Intel and M1–M5 models. BMS re-pair included on Apple silicon. Same-day 2-hour service. Free diagnosis.",
  },
  "/macbook-air-keyboard-repair-dubai": {
    title: "MacBook Air Keyboard Repair Dubai — Free Diagnosis",
    description: "MacBook Air keyboard repair in Dubai: Intel butterfly and M-series Magic Keyboard, single keys, backlight, Touch ID. Same-day. Get a free quote.",
  },
  // High-intent symptom pages — urgent searches, high conversion.
  "/macbook-not-turning-on-dubai": {
    title: "MacBook Not Turning On Dubai? Dead Mac Fixed Same Day",
    description: "MacBook not turning on in Dubai? Free diagnosis. Dead battery, logic board fuse, liquid damage, DC-in board. All Mac models. Same-day. Call 055 741 3706.",
  },
  "/macbook-water-damage-repair-dubai": {
    title: "MacBook Water Damage Repair Dubai — Act Fast, Save Your Mac",
    description: "MacBook water damage repair Dubai. Spilled coffee, water or juice on MacBook Air or Pro? Act within 24 hours. Free diagnosis. Call 055 741 3706.",
  },
  "/macbook-wont-charge-dubai": {
    title: "MacBook Not Charging Dubai? MagSafe & USB-C Fix Same Day",
    description: "MacBook not charging in Dubai? MagSafe 3, USB-C port, DC-in board, dead battery. All Air and Pro models. Free diagnosis. Call 055 741 3706.",
  },
  "/macbook-overheating-shutting-down-dubai": {
    title: "MacBook Overheating & Shutting Down Dubai — Fix Same Day",
    description: "MacBook overheating or shutting down in Dubai? Thermal paste, fan failure, dust, M-chip throttling. All models. Free diagnosis. Call 055 741 3706.",
  },
  "/macbook-kernel-panic-dubai": {
    title: "MacBook Kernel Panic Dubai — Random Restart Fix Same Day",
    description: "MacBook kernel panic in Dubai? Random restarts, crash logs, grey screen. Software, SSD, RAM or logic board. Free diagnosis. Call 055 741 3706.",
  },
  "/mac-data-recovery-dubai": {
    title: "Mac Data Recovery Dubai — SSD, Deleted Files, Won't Boot",
    description: "Mac data recovery Dubai. Won't boot, SSD failure, accidental delete, water damage, formatted drive. Apple Silicon and Intel. Free assessment.",
  },
  // CTR improvements: pages with high impressions but below-benchmark click rates.
  "/blog/do-macbooks-last-over-a-decade": {
    title: "How Long Do MacBooks Last? Most Reach 7–10 Years (2026)",
    description: "Most MacBooks last 7–10 years — some push 12+. What shortens lifespan, what extends it, and the repair-vs-replace tipping point explained year by year.",
  },
  "/blog/how-to-erase-all-data-on-my-mac-before-giving-it-away": {
    title: "Erase Mac Before Selling — Don't Skip These Steps (2026)",
    description: "Erase your Mac safely before selling: sign out of iCloud and Find My first, then Erase All Content and Settings, or the buyer gets locked out.",
  },
  "/blog/how-to-clean-a-macbook-screen": {
    title: "How to Clean a MacBook Screen Without Damaging It (2026)",
    description: "Clean your MacBook screen without streaks or coating damage: the cloth and technique Apple recommends, plus the mistakes that leave permanent marks.",
  },
  "/blog/how-to-recover-macbook-password": {
    title: "Forgot MacBook Password? 6 Ways to Get Back In (2026)",
    description: "Recover a forgotten MacBook password with your hint, Apple ID, the Recovery Mode resetpassword tool or FileVault key. Step by step for all macOS versions.",
  },
  "/blog/macbook-battery-replacement-cost-2026": {
    title: "MacBook Battery Replacement Cost Dubai 2026: Air & Pro",
    description: "MacBook battery replacement cost in Dubai 2026 for Air and Pro: what sets the price, Apple Store vs independent repair, and when it is time to replace.",
  },
  "/blog/should-i-buy-refurbished-macbook-dubai": {
    title: "Refurbished MacBook Dubai: Worth It? (2026 Honest Guide)",
    description: "Should I buy refurbished MacBook Dubai in 2026? The savings, the risks, what to check before paying, and how to avoid a bad refurb. Honest advice.",
  },
  "/blog/ipad-battery-replacement-cost-dubai": {
    title: "iPad Battery Replacement Cost Dubai 2026 — All Models",
    description: "iPad battery replacement cost in Dubai for every model in 2026: what sets the price, the signs you need a new battery, turnaround and warranty.",
  },
  "/the-caps-lock-key-is-not-responding-after-restarting-my-macbook": {
    title: "Caps Lock Not Working on MacBook? Here Are 7 Fixes (2026)",
    description: "MacBook Caps Lock not responding after a restart? It is usually the hold delay, Slow Keys or a remapped key, not broken hardware. Every fix, in order.",
  },
  "/the-server-gave-an-error-during-download-403-forbidden": {
    title: "Fix 'Server Gave an Error During Download' on Mac (403)",
    description: "403 Forbidden when downloading on a Mac means the server refused the request, not a fault in your Mac. Check the clock, Apple ID, VPN and DNS cache.",
  },
  // route-meta has a title-only, 84-char entry for this; add a description + trim.
  "/imac-logic-board-repair-dubai": {
    title: "iMac Logic Board Repair Dubai - Component-Level",
    description: "iMac logic board repair in Dubai at component level, not a board swap. 15-day warranty, extendable to 6 months. Free diagnosis - call 055 741 3706.",
  },
  // Restored Q&A guide pages (previously redirected, now real pages).
  "/blog/why-does-my-macbook-air-m4-heat-up-so-quickly": {
    title: "Why Does My MacBook Air M4 Heat Up So Quickly? 2026 Fixes",
    description: "MacBook Air M4 has no fan — heat during heavy tasks is expected. Here's what's normal, what's a problem, and how to keep it running cool.",
  },
  "/iphone-16-pro-max-screen-flickering": {
    title: "iPhone 16 Pro Max Screen Flickering? Here's Every Fix",
    description: "iPhone 16 Pro Max screen flickering: the software fixes to try first and the hardware faults that need a repair. Free diagnosis in Dubai - call us.",
  },
  "/iphone-16-shocks-while-charging": {
    title: "iPhone 16 Shocking You While Charging? Causes & Safe Fixes",
    description: "iPhone 16 giving a shock while charging? Usually a charger or grounding issue, sometimes the port. What to check and when to stop. Free check in Dubai.",
  },
  "/iphone-motherboard-repair-dubai": {
    title: "Can an iPhone Motherboard Be Repaired? Yes — Here's How",
    description: "iPhone logic board repair in Dubai at component level: power faults, Face ID, audio and no-boot. Free diagnosis - get a quote on WhatsApp.",
  },
  "/blog/what-causes-color-distortion-on-macbook-screens": {
    title: "What Causes Color Distortion on MacBook Screens? Fix Guide",
    description: "MacBook screen colour distortion (tints, washed-out or oversaturated colour) is usually Night Shift, True Tone or a wrong colour profile. Every fix.",
  },
  "/white-or-grey-horizontal-lines-appearing-on-macbook-screen": {
    title: "White or Grey Horizontal Lines on MacBook Screen (Fix)",
    description: "Horizontal lines on a MacBook screen point to a loose display cable, Flexgate on 2016–2019 MacBook Pro, or a GPU fault. How to diagnose and fix it.",
  },
  "/iphone-16-pro-battery-capacity": {
    title: "iPhone 16 Pro Battery Capacity, Life & Replacement Cost",
    description: "iPhone 16 Pro battery capacity explained - real-world hours, health percentage and when a replacement is worth it. Free battery check in Dubai.",
  },
  "/blog/how-to-take-a-screenshot-on-a-macbook": {
    title: "How to Take a Screenshot on a MacBook (All 3 Shortcuts)",
    description: "Shift-Cmd-3 for the full screen, Shift-Cmd-4 for a selection, Shift-Cmd-5 for every option. Where screenshots save, and fixes when they stop working.",
  },
  "/blog/macbook-battery-health-check-guide": {
    title: "MacBook Battery Health Check: 3 Ways in 30 Seconds (2026)",
    description: "MacBook battery health check, three ways to see your battery condition in under a minute, what the numbers mean, and when to replace it in 2026.",
  },
  "/blog/how-to-choose-the-best-apple-laptop-for-gaming": {
    title: "Best MacBook for Gaming 2026: Air vs Pro vs Max",
    description: "Which MacBook suits gaming in 2026: Air vs Pro vs Max GPU tiers, how much RAM you need, thermals, and how to run games natively or in the cloud.",
  },
  "/sources-to-purchase-a-refurbished-macbook": {
    title: "Where to Buy a Refurbished MacBook: 5 Sources Ranked (2026)",
    description: "Apple Certified Refurbished is the safest source; independent shops beat Dubizzle on warranty. Every source ranked by risk, value and warranty.",
  },
  "/blog/why-is-my-ipad-not-charging": {
    title: "iPad Not Charging? 8 Fixes That Actually Work (2026)",
    description: "iPad not charging is usually the cable, port debris or the adapter, not a dead battery. The fixes in order, from swapping the cable to a battery check.",
  },
  "/migrating-data-from-old-macbook-to-new-macbook-without-icloud": {
    title: "Migrate MacBook Data Without iCloud: 3 Methods That Work",
    description: "Move everything from your old MacBook to a new one without iCloud: Migration Assistant over a cable, a Time Machine restore, or a manual copy.",
  },
  // MacBook Pro L6 chip×screen pages
  "/macbook-pro-m1-screen-repair-dubai": {
    title: "MacBook Pro M1 Screen Repair Dubai",
    description: "MacBook Pro M1 Pro/Max screen repair Dubai. Liquid Retina XDR mini-LED 14-inch and 16-inch, 120Hz ProMotion. Same-day diagnosis. 3-month warranty. Call 055 741 3706.",
  },
  "/macbook-pro-m2-screen-repair-dubai": {
    title: "MacBook Pro M2 Screen Repair Dubai",
    description: "MacBook Pro M2 Pro/Max screen repair Dubai. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion, nano-texture glass available. Same-day diagnosis. Call 055 741 3706.",
  },
  "/macbook-pro-m3-screen-repair-dubai": {
    title: "MacBook Pro M3 Screen Repair Dubai",
    description: "MacBook Pro M3 Pro/Max screen repair Dubai. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion. Space Black available. Same-day diagnosis. Call 055 741 3706.",
  },
  "/macbook-pro-m4-screen-repair-dubai": {
    title: "MacBook Pro M4 Screen Repair Dubai",
    description: "MacBook Pro M4 Pro/Max screen repair Dubai. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion, Thunderbolt 5. 1-2 day turnaround. Call 055 741 3706.",
  },
  "/macbook-pro-m5-screen-repair-dubai": {
    title: "MacBook Pro M5 Screen Repair Dubai — Liquid Retina XDR",
    description: "MacBook Pro M5 screen repair Dubai: 14-inch and 16-inch Liquid Retina XDR mini-LED displays. Free diagnosis, 2–3 day turnaround. Call 055 741 3706.",
  },
  // MacBook Pro L6 chip×battery pages
  "/macbook-pro-m1-battery-replacement-dubai": {
    title: "MacBook Pro M1 Battery Replacement Dubai",
    description: "MacBook Pro M1 Pro/Max battery replacement Dubai. 69.6 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. Call 055 741 3706.",
  },
  "/macbook-pro-m2-battery-replacement-dubai": {
    title: "MacBook Pro M2 Battery Replacement Dubai",
    description: "MacBook Pro M2 Pro/Max battery replacement Dubai. 69.6 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. Call 055 741 3706.",
  },
  "/macbook-pro-m3-battery-replacement-dubai": {
    title: "MacBook Pro M3 Battery Replacement Dubai",
    description: "MacBook Pro M3 Pro/Max battery replacement Dubai. 70 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. Call 055 741 3706.",
  },
  "/macbook-pro-m4-battery-replacement-dubai": {
    title: "MacBook Pro M4 Battery Replacement Dubai",
    description: "MacBook Pro M4 Pro/Max battery replacement Dubai. 72.4 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included, Thunderbolt 5. 1-2 day turnaround. Call 055 741 3706.",
  },
  "/macbook-pro-m5-battery-replacement-dubai": {
    title: "MacBook Pro M5 Battery Replacement Dubai — Free Diagnosis",
    description: "MacBook Pro M5, M5 Pro and M5 Max battery replacement in Dubai. BMS re-pair included. Check Apple warranty first. Free diagnosis, quote on WhatsApp.",
  },
  // iMac chip-generation hub pages
  "/imac-intel-repair-dubai": {
    title: "iMac Intel Repair Dubai — 21.5-inch & 27-inch 5K 2017–2020",
    description: "iMac Intel repair Dubai. 21.5-inch Retina 4K (2017–2019), 27-inch 5K Retina (2017–2020), iMac Pro 27-inch (2017). Screen, logic board, PSU, GPU, SSD upgrade. Call 055 741 3706.",
  },
  "/imac-m1-repair-dubai": {
    title: "iMac M1 Repair Dubai — 24-inch 2021 A2438/A2439",
    description: "iMac M1 repair Dubai. 24-inch 7-colour iMac with M1 chip (2021), model A2438/A2439. Screen, logic board, USB hub board, speaker repair. Free diagnosis. Call 055 741 3706.",
  },
  "/imac-m3-repair-dubai": {
    title: "iMac M3 Repair Dubai — 24-inch 2023 Retina 4.5K",
    description: "iMac M3 repair Dubai. 24-inch 4.5K Retina iMac with M3 chip (late 2023). Screen, logic board, USB hub board, speaker repair. Check AppleCare+ before booking. Call 055 741 3706.",
  },
  "/imac-m4-repair-dubai": {
    title: "iMac M4 Repair Dubai — 24-inch 2024 Retina 4.5K",
    description: "iMac M4 repair Dubai. 24-inch 4.5K Retina iMac with M4 chip (late 2024), nano-texture glass option. Free diagnosis. Almost certainly under Apple warranty — check first. Screen. Call 055 741 3706.",
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
