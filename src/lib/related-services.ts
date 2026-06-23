// Automated "Related repairs" resolver. Given a page path, returns the most relevant sibling
// SERVICE pages (same device family + related fault/topic) so every service & model page links
// out to relevant services without per-page hand-curation. Mirrors related-articles.ts.
//
// Source of truth: ROUTES (every static route) + ROUTE_META (a title/description for each).
// Fault detection is TOKEN-based (slug split on "-"), not substring, so e.g. the area page
// "macbook-repair-karama" is never mis-read as a "ram" (RAM-upgrade) service.
import { ROUTES } from "@/lib/routes.generated";
import { ROUTE_META } from "@/lib/route-meta.generated";
import { familyFromPath, topicsFromPath } from "@/lib/related-articles";
import type { RelatedItem } from "@/components/blocks/RelatedServices";

// Canonical fault → alias token-sequences. Order matters: more specific aliases first so
// "charging-port" wins over "port" and "fan-cleaning" over "cleaning". An alias matches when
// its tokens appear as a contiguous run inside the slug's token list.
const FAULTS: { fault: string; aliases: string[] }[] = [
  { fault: "charging-port", aliases: ["charging-port"] },
  { fault: "screen", aliases: ["screen"] },
  { fault: "battery", aliases: ["battery"] },
  { fault: "keyboard", aliases: ["keyboard"] },
  { fault: "trackpad", aliases: ["trackpad"] },
  { fault: "logic-board", aliases: ["logic-board"] },
  { fault: "gpu", aliases: ["gpu"] },
  { fault: "water-damage", aliases: ["water-damage"] },
  { fault: "data-recovery", aliases: ["data-recovery"] },
  { fault: "fan-cleaning", aliases: ["fan-cleaning"] },
  { fault: "overheating", aliases: ["overheating"] },
  { fault: "flexgate", aliases: ["flexgate"] },
  { fault: "hinge", aliases: ["hinge"] },
  { fault: "touch-bar", aliases: ["touch-bar"] },
  { fault: "touch-id", aliases: ["touch-id"] },
  { fault: "face-id", aliases: ["face-id"] },
  { fault: "back-glass", aliases: ["back-glass"] },
  { fault: "camera", aliases: ["camera"] },
  { fault: "microphone", aliases: ["microphone"] },
  { fault: "speaker", aliases: ["speaker"] },
  { fault: "wifi", aliases: ["wifi-bluetooth", "wifi", "bluetooth"] },
  { fault: "power-supply", aliases: ["power-supply"] },
  { fault: "power-button", aliases: ["power-button"] },
  { fault: "volume-button", aliases: ["volume-button"] },
  { fault: "home-button", aliases: ["home-button"] },
  { fault: "earpiece", aliases: ["earpiece"] },
  { fault: "vibration", aliases: ["vibration-motor", "vibration"] },
  { fault: "sim-tray", aliases: ["sim-tray"] },
  { fault: "nfc", aliases: ["nfc"] },
  { fault: "port", aliases: ["lightning-port", "usb-c-port", "headphone-jack", "smart-connector", "port-repair"] },
  { fault: "ssd", aliases: ["ssd-upgrade", "ssd"] },
  { fault: "ram", aliases: ["ram-upgrade", "ram"] },
  { fault: "not-turning-on", aliases: ["not-turning-on"] },
  { fault: "os-reinstall", aliases: ["os-reinstall", "macos-reinstall", "reinstall"] },
  { fault: "virus", aliases: ["virus-removal", "virus"] },
  { fault: "diagnostic", aliases: ["full-diagnostic", "diagnostic"] },
  { fault: "unlock", aliases: ["activation-lock", "icloud-unlock", "network-unlock", "unlock"] },
  { fault: "software", aliases: ["software-fix", "software-reset", "software"] },
  { fault: "performance", aliases: ["performance-tune", "performance"] },
  { fault: "migration", aliases: ["setup-data-migration", "data-migration", "migration"] },
  { fault: "backup", aliases: ["backup"] },
  { fault: "cleaning", aliases: ["cleaning-maintenance", "cleaning"] },
  { fault: "insurance", aliases: ["insurance"] },
  { fault: "amc", aliases: ["annual-maintenance", "maintenance-contract"] },
  { fault: "applecare", aliases: ["applecare"] },
  { fault: "display", aliases: ["apple-display"] },
  { fault: "pencil", aliases: ["pencil"] },
  { fault: "boot-camp", aliases: ["boot-camp"] },
  { fault: "safe-mode", aliases: ["safe-mode"] },
  { fault: "cost-calculator", aliases: ["cost-calculator"] },
  { fault: "onsite", aliases: ["onsite"] },
  { fault: "out-of-warranty", aliases: ["out-of-warranty"] },
];

const ANCHOR_FAULTS = new Set(["screen", "battery", "logic-board", "data-recovery", "diagnostic"]);

// Family hub used to backfill when a family has < limit services. NB: there is no
// /macbook-repair-dubai route — it 301s to "/" — so MacBook falls back to the all-Apple hub
// (a real 200 page); in practice MacBook has 30+ services so this backfill never fires.
const FAMILY_HUB: Record<string, string> = {
  macbook: "/apple-repair-dubai",
  iphone: "/iphone-repair-dubai",
  ipad: "/ipad-repair-dubai",
  imac: "/imac-repair-dubai",
  mac: "/mac-repair-dubai",
  general: "/apple-repair-dubai",
};

function tokens(path: string): string[] {
  return path.replace(/^\/+/, "").split("-");
}

// Is `seq` a contiguous sub-array of `toks`?
function hasRun(toks: string[], seq: string[]): boolean {
  if (seq.length === 1) return toks.includes(seq[0]);
  for (let i = 0; i + seq.length <= toks.length; i++) {
    if (seq.every((t, j) => toks[i + j] === t)) return true;
  }
  return false;
}

/** The canonical fault a service path addresses, or null if it isn't a service page. */
export function faultFromPath(path: string): string | null {
  const toks = tokens(path);
  for (const { fault, aliases } of FAULTS) {
    for (const a of aliases) if (hasRun(toks, a.split("-"))) return fault;
  }
  return null;
}

/** A service/fault page (excludes blog, admin, hubs, model & area pages — they carry no fault token). */
export function isServicePath(path: string): boolean {
  if (path.startsWith("/blog") || path.startsWith("/admin") || path === "/") return false;
  return faultFromPath(path) !== null;
}

type ServiceEntry = { path: string; family: string; fault: string; topics: string[] };

const SERVICE_INDEX: ServiceEntry[] = ROUTES.filter(isServicePath).map((path) => ({
  path,
  family: familyFromPath(path),
  fault: faultFromPath(path)!,
  topics: topicsFromPath(path),
}));

// Coverage ring: same-family SERVICE paths in a stable order (ROUTES is alphabetical). A service at
// index i links index i+1, so following the cycle every service receives ≥1 inbound contextual link
// instead of a popularity-skewed long tail. Model pages (no fault token) aren't in the ring, so as
// coverage SOURCES they rotate by hash and donate a bonus link to a service — measured to lift the
// service tail more than routing them into a separate model ring would (which only shifted the tail
// onto the services). Legacy model pages stay thin by design; their proper fix is hub completeness.
const FAMILY_SERVICES: Record<string, string[]> = {};
for (const s of SERVICE_INDEX) (FAMILY_SERVICES[s.family] ||= []).push(s.path);

// Small deterministic hash so the order of equal-scored services is stable but varies per page
// (avoids every page surfacing the identical three anchors).
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h >>> 0;
}

function shortLabel(path: string): string {
  const title = ROUTE_META[path]?.title;
  if (title) return title.split(/\s+[-–—|]\s+/)[0].replace(/\s+Dubai$/i, "").trim();
  return path.replace(/^\/+/, "").replace(/-/g, " ").replace(/\bdubai\b/i, "").trim();
}

function shortDesc(path: string, label: string): string {
  const d = ROUTE_META[path]?.description;
  if (d) {
    const first = d.split(/(?<=[.!?])\s/)[0];
    return first.length > 130 ? first.slice(0, 127).trimEnd() + "…" : first;
  }
  return `${label} in Dubai. Free diagnosis, written quote, warranty up to 12 months.`;
}

function toItem(path: string): RelatedItem {
  const label = shortLabel(path);
  return { label, href: path, description: shortDesc(path, label) };
}

/**
 * The next same-family service in the fixed FAMILY_SERVICES ring, excluding `path` and anything
 * in `exclude`. A service at ring index i resolves to i+1, so as every service emits this link
 * the whole family forms a ring — guaranteeing each service receives ≥1 inbound contextual link
 * even when other pages use hand-curated related arrays. Model/area pages (not in the cycle) rotate
 * by hash as a bonus coverage link. Returns null for general-family or single-service families.
 */
export function coverageSibling(path: string, exclude: string[] = []): RelatedItem | null {
  const ring = FAMILY_SERVICES[familyFromPath(path)] ?? [];
  if (ring.length < 2) return null;
  const skip = new Set([path, ...exclude]);
  const idx = ring.indexOf(path);
  const start = idx >= 0 ? idx + 1 : hash(path) % ring.length;
  for (let k = 0; k < ring.length; k++) {
    const cand = ring[(start + k) % ring.length];
    if (!skip.has(cand) && ROUTE_META[cand]) return toItem(cand);
  }
  return null;
}

/**
 * Append the coverage sibling to a related list, keeping the strongest (limit-1) items. Lets
 * hand-curated related arrays still emit one cycle link so the long tail of thinly-linked services
 * gets lifted, without changing the 3-card layout. No-op when coverage is already present.
 */
export function withCoverage(items: RelatedItem[], path: string, limit = 3): RelatedItem[] {
  const base = items.slice(0, limit);
  if (base.some((i) => coverageSibling(path)?.href === i.href)) return base;
  const cov = coverageSibling(path, base.map((i) => i.href));
  if (!cov) return base;
  return [...items.slice(0, limit - 1), cov];
}

/**
 * Return up to `limit` relevant sibling service pages for a given page path.
 * Family-scoped: cross-family candidates are penalised (-4) so an iPhone page never surfaces a
 * MacBook service. Always fills to `limit` by backfilling the family hub, so the block is never empty.
 */
export function relatedServices({ path, limit = 3 }: { path: string; limit?: number }): RelatedItem[] {
  const curFamily = familyFromPath(path);
  const curTopics = topicsFromPath(path);
  const curFault = faultFromPath(path);

  const scored = SERVICE_INDEX
    .filter((s) => s.path !== path)
    .map((s) => {
      let score = 0;
      if (curFamily !== "general" && s.family === curFamily) score += 5;
      else if (s.family === "general") score += 1;
      else score -= 4; // different specific family — hard guard
      for (const t of s.topics) if (curTopics.includes(t)) score += 2;
      if (curFault && s.fault === curFault) score += 3;
      if (ANCHOR_FAULTS.has(s.fault)) score += 1;
      return { s, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || hash(path + a.s.path) - hash(path + b.s.path));

  const out: RelatedItem[] = [];
  const picked = new Set<string>([path]);
  const take = (p: string) => { if (!picked.has(p) && ROUTE_META[p]) { out.push(toItem(p)); picked.add(p); } };

  // (a) Strongest matches keep the block relevant — reserve the last slot for coverage.
  for (const x of scored) { if (out.length >= limit - 1) break; take(x.s.path); }

  // (b) Coverage slot: the next same-family service in the fixed cycle (see coverageSibling).
  const cov = coverageSibling(path, [...picked]);
  if (cov) take(cov.href);

  // (c) Fill remaining from the scored list, then the family hub so the section always fills.
  for (const x of scored) { if (out.length >= limit) break; take(x.s.path); }
  if (out.length < limit) {
    const hub = FAMILY_HUB[curFamily] ?? FAMILY_HUB.general;
    if (hub !== path && ROUTE_META[hub]) take(hub);
  }
  return out.slice(0, limit);
}

// Conversion/money pages grouped by intent. Used by conversionSiblings() so the bespoke money
// pages (which use no shared template and so get no auto "Related repairs") still cross-link to
// their natural siblings — the sell/trade trident was otherwise nearly unlinked.
const CONVERSION_THEMES: string[][] = [
  ["/sell-macbook-dubai", "/sell-faulty-macbook-dubai", "/trade-in-macbook-dubai"],
  ["/applecare-macbook-repair-dubai", "/out-of-warranty-apple-repair-dubai", "/annual-maintenance-contract-dubai", "/macbook-insurance-dubai", "/apple-repair-programs-dubai"],
  ["/onsite-macbook-repair-dubai", "/macbook-repair-near-me"],
];

/** Sibling conversion pages for a money page — same intent group first, then other groups. */
export function conversionSiblings(path: string, limit = 3): RelatedItem[] {
  const own = CONVERSION_THEMES.find((g) => g.includes(path)) ?? [];
  const ordered = [...own.filter((p) => p !== path), ...CONVERSION_THEMES.flat().filter((p) => !own.includes(p))];
  const out: RelatedItem[] = [];
  for (const p of ordered) { if (out.length >= limit) break; if (p !== path && ROUTE_META[p]) out.push(toItem(p)); }
  return out;
}

// ── Conversion funnel ───────────────────────────────────────────────────────
// Content pages (blog posts, how-to guides) used to keep their link equity inside the content
// silo — 0% of blog contextual links reached a high-intent conversion page. relatedConversion()
// returns the single most relevant money page for a content path so every post funnels one link
// to the commercial side. Device-specific pages (sell/trade-in/insurance are MacBook-only) are
// never mis-routed onto an iPhone/iPad post; AppleCare / out-of-warranty / AMC are device-agnostic.
const MAC_FAMILIES = new Set(["macbook", "mac", "general"]);

export function relatedConversion(path: string): RelatedItem | null {
  const fam = familyFromPath(path);
  const p = path.toLowerCase();
  const topics = topicsFromPath(path);
  const macish = MAC_FAMILIES.has(fam);
  const item = (href: string) => (href !== path && ROUTE_META[href] ? toItem(href) : null);

  // 1. Keyword/topic-specific routing — the most on-topic conversion page wins.
  if (p.includes("boot-camp") || p.includes("windows")) return macish ? item("/boot-camp-windows-macbook-dubai") : null;
  if (p.includes("insurance")) return macish ? item("/macbook-insurance-dubai") : null;
  if (p.includes("applecare")) return item("/applecare-macbook-repair-dubai");
  if (topics.includes("sell")) return macish ? item(p.includes("trade") ? "/trade-in-macbook-dubai" : "/sell-macbook-dubai") : null;
  if (p.includes("out-of-warranty") || p.includes("warranty")) return item("/out-of-warranty-apple-repair-dubai");
  if (p.includes("maintenance") || p.includes("amc") || p.includes("contract")) return item("/annual-maintenance-contract-dubai");

  // 2. Universal fallback — these apply to any Apple device; rotate by path hash so inbound
  //    spreads across conversion pages instead of piling onto one.
  const universal = macish
    ? ["/applecare-macbook-repair-dubai", "/out-of-warranty-apple-repair-dubai", "/annual-maintenance-contract-dubai"]
    : ["/out-of-warranty-apple-repair-dubai", "/annual-maintenance-contract-dubai"];
  return item(universal[hash(path) % universal.length]);
}
