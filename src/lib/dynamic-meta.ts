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
    description: `${m.name} (${m.releaseYear}) repair Dubai. Screen AED ${p.screen}, battery AED ${p.battery}, keyboard AED ${p.keyboard}. 90-day warranty.`,
  };
}

function ipadMeta(m: ModelEntry): Meta {
  const p = m.pricing;
  const startingPrice = Math.min(p.battery!, p.port!);
  return {
    title: `${m.name} Repair Dubai - From AED ${startingPrice}`,
    description: `${m.name} (${m.releaseYear}) repair Dubai. Screen AED ${p.screen}, battery AED ${p.battery}, port AED ${p.port}. 90-day warranty. Free pickup.`,
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
    description: `${m.name} repair Dubai. Logic board AED ${p.logicBoard}${p.psu ? `, PSU AED ${p.psu}` : ""}${p.port ? `, port AED ${p.port}` : ""}. 90-day warranty.`,
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
    description: `${m.name} repair Dubai. Screen AED ${p.screen}, logic board AED ${p.logicBoard}${p.powerSupply ? `, PSU AED ${p.powerSupply}` : ""}. 90-day warranty.`,
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
    description: `MacBook repair in ${c.city} via ${collectVerb} to our Dubai Media City workshop - ${c.turnaround}, 90-day written warranty. No branch needed. Call 055 741 3706.`,
  };
}

for (const a of AREAS) {
  MAP[`/macbook-repair-${a.slug}`] = {
    title: `MacBook Repair ${a.area} - Free Pickup & Delivery`,
    description: `MacBook repair in ${a.area} with free pickup & same-day delivery from our Concord Tower workshop. 90-day warranty. Call 055 741 3706.`,
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
  title: "MacBook Repair Dubai Reviews - 215+ 5-Star Ratings",
  description: "Read 215+ verified five-star reviews of MacBook Repair Dubai. 21 years, 40,000+ Apple repairs, free diagnosis and a 90-day warranty on every job.",
};
MAP["/imac-screen-repair-dubai"] = {
  title: `iMac Screen Repair Dubai - 24" M-Series & 27" 5K`,
  description: `iMac screen repair Dubai. 24" M1/M2/M3/M4 and 27" Intel 5K Retina. Adhesive removal, dust-free reseal, full calibration. From AED 800.`,
};
MAP["/ipod-touch-7-repair-dubai"] = {
  title: "iPod touch (7th gen) Repair Dubai - Battery & Screen",
  description: "iPod touch (7th gen) repair Dubai. Battery, screen, home button and charging port. Free pickup, free diagnostic, 90-day warranty.",
};

// Intentional OVERRIDES that must beat an existing route-meta.generated.ts entry
// (e.g. an entry that has a title but no description, or an over-long title).
const OVERRIDE: Record<string, Meta> = {
  // route-meta has a title-only, 84-char entry for this; add a description + trim.
  "/imac-logic-board-repair-dubai": {
    title: "iMac Logic Board Repair Dubai - Component-Level",
    description: `iMac logic board repair Dubai. Component-level rework on 27" Intel and 24" M-series: power delivery, GPU, T2, SoC limits. From AED 1,000.`,
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
