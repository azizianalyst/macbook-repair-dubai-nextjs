// Invoice-based repair price ranges (owner decision D17, 2026-10-19).
// repair-prices.json is written by scripts/pos/publish.py from the POS invoice aggregates
// (docs/prices-from-pos-2026-10-19.md). The site shows ONE price per row: the median of taxed invoices,
// incl. VAT (owner, 2026-10-21). min/max (25th-75th percentile) stay in the data for reference only.
// Never type a price into a page. PAGE_ROWS decides which rows a page shows, and the same map
// drives the Offer schema in page-schema.ts, so the visible range and the JSON-LD can't drift.
import data from "./repair-prices.json";

export type RepairPriceRow = {
  id: string;
  repair: string;
  model: string;
  /** Apple model numbers (A-numbers) the row covers; empty = any MacBook. */
  modelNumbers: string[];
  min: number;
  max: number;
  median: number;
  invoices: number;
};

export const REPAIR_PRICES = data as {
  source: string;
  decision: string;
  window: { from: string; to: string };
  rows: RepairPriceRow[];
};

const AIR_SCREEN = ["screen-a2337", "screen-a2681", "screen-a3113"];
const PRO_SCREEN = ["screen-a2159", "screen-pro13-intel-other", "screen-a2338", "screen-a2442", "screen-pro14-other", "screen-a2991", "screen-a2141"];
const PRO_BATTERY = ["battery-a1989", "battery-pro13-intel-other", "battery-pro15-intel", "battery-a2141"];

// Path (no trailing slash) -> row ids. A page shows only rows inside its own model scope; a model
// with too few invoices for an honest range (e.g. Air M4, 16-inch M4 Pro) shows none and is quoted.
const PAGE_ROWS: Record<string, string[]> = {
  "/pricing": REPAIR_PRICES.rows.map((r) => r.id),
  "/macbook-screen-repair-dubai": [...AIR_SCREEN, ...PRO_SCREEN],
  "/macbook-pro-screen-repair-dubai": PRO_SCREEN,
  "/macbook-air-screen-replacement-dubai": AIR_SCREEN,
  "/macbook-air-m1-screen-repair-dubai": ["screen-a2337"],
  "/macbook-air-m2-screen-repair-dubai": ["screen-a2681"],
  "/macbook-air-m3-screen-repair-dubai": ["screen-a3113"],
  "/macbook-pro-m1-screen-repair-dubai": ["screen-a2442"],
  "/macbook-pro-m2-screen-repair-dubai": ["screen-pro14-other"],
  "/macbook-pro-m3-screen-repair-dubai": ["screen-pro14-other", "screen-a2991"],
  "/macbook-pro-m4-screen-repair-dubai": ["screen-pro14-other"],
  "/macbook-battery-replacement-dubai": ["battery-air-intel", ...PRO_BATTERY],
  "/macbook-pro-battery-replacement-dubai": PRO_BATTERY,
  "/macbook-air-battery-replacement-dubai": ["battery-air-intel"],
  "/macbook-air-intel-battery-replacement-dubai": ["battery-air-intel"],
  "/macbook-logic-board-repair-dubai": ["board-any"],
  "/macbook-water-damage-repair-dubai": ["liquid-any"],
  "/macbook-trackpad-repair-dubai": ["trackpad-any"],
};

const BY_ID = new Map(REPAIR_PRICES.rows.map((r) => [r.id, r]));

export function repairPricesForPath(path: string): RepairPriceRow[] {
  const key = path.replace(/\/+$/, "") || "/";
  return (PAGE_ROWS[key] ?? []).map((id) => {
    const row = BY_ID.get(id);
    if (!row) throw new Error(`repair-prices: unknown row ${id} for ${key}`);
    return row;
  });
}

export const pricedPaths = (): string[] => Object.keys(PAGE_ROWS);

// "1,011–1,191": the only way a range is written on the site.
export const aed = (n: number) => n.toLocaleString("en-US");
// "AED 1,129": the only way an invoice price is written on the site.
export const typicalPrice = (r: RepairPriceRow) => `AED ${aed(r.median)}`;

// "13 Sep 2025 to 12 Sep 2026"
const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
export const PRICE_WINDOW = `${fmtDate(REPAIR_PRICES.window.from)} to ${fmtDate(REPAIR_PRICES.window.to)}`;

// Match an existing table row label ('MacBook Air 13" M1 (2020–2023)', "MacBook Pro 16-inch M3 Max")
// to this page's one invoice row, so the price goes into that row instead of a second table.
// Size must agree, and chips must overlap when both name one; anything ambiguous returns undefined.
const sizeOf = (label: string) => label.match(/(\d{2})(?:-inch|"|″)/)?.[1] ?? (/\bAir\b/.test(label) ? "13" : undefined);
function chipsOf(label: string): Set<string> {
  if (/intel/i.test(label)) return new Set(["intel"]);
  const nums = [...label.matchAll(/\bM(\d)\b/g)].map((m) => Number(m[1]));
  const range = label.match(/\bM(\d)\b[^,)]*?\bto M(\d)\b/);
  if (range) for (let n = Number(range[1]); n <= Number(range[2]); n++) nums.push(n);
  return new Set(nums.map((n) => `M${n}`));
}
export function priceForModelLabel(path: string, label: string): RepairPriceRow | undefined {
  const size = sizeOf(label);
  const chips = chipsOf(label);
  const hits = repairPricesForPath(path).filter((r) => {
    if (!r.modelNumbers.length) return false;
    if (size && sizeOf(r.model) !== size) return false;
    const rc = chipsOf(r.model);
    return !chips.size || !rc.size || [...chips].some((c) => rc.has(c));
  });
  return hits.length === 1 ? hits[0] : undefined;
}
