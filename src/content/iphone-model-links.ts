// Ordered registry of iPhone MODEL repair pages (not service pages). Used to
// auto-render an "Other iPhone models we repair" cross-link grid on each model
// page, so sibling models link to each other instead of every model being a
// leaf with a single inbound link from the iPhone hub. Order is chronological by
// generation so the circular window links same/adjacent-generation models.

export type IphoneModelLink = { slug: string; label: string };

export const IPHONE_MODEL_LINKS: IphoneModelLink[] = [
  { slug: "/iphone-13-repair-dubai",          label: "iPhone 13" },
  { slug: "/iphone-13-mini-repair-dubai",     label: "iPhone 13 mini" },
  { slug: "/iphone-13-pro-repair-dubai",      label: "iPhone 13 Pro" },
  { slug: "/iphone-13-pro-max-repair-dubai",  label: "iPhone 13 Pro Max" },
  { slug: "/iphone-14-repair-dubai",          label: "iPhone 14" },
  { slug: "/iphone-14-plus-repair-dubai",     label: "iPhone 14 Plus" },
  { slug: "/iphone-14-pro-repair-dubai",      label: "iPhone 14 Pro" },
  { slug: "/iphone-14-pro-max-repair-dubai",  label: "iPhone 14 Pro Max" },
  { slug: "/iphone-15-repair-dubai",          label: "iPhone 15" },
  { slug: "/iphone-15-plus-repair-dubai",     label: "iPhone 15 Plus" },
  { slug: "/iphone-15-pro-repair-dubai",      label: "iPhone 15 Pro" },
  { slug: "/iphone-15-pro-max-repair-dubai",  label: "iPhone 15 Pro Max" },
  { slug: "/iphone-16-repair-dubai",          label: "iPhone 16" },
  { slug: "/iphone-16-plus-repair-dubai",     label: "iPhone 16 Plus" },
  { slug: "/iphone-16-pro-repair-dubai",      label: "iPhone 16 Pro" },
  { slug: "/iphone-16-pro-max-repair-dubai",  label: "iPhone 16 Pro Max" },
  { slug: "/iphone-16e-repair-dubai",         label: "iPhone 16e" },
  { slug: "/iphone-17-repair-dubai",          label: "iPhone 17" },
  { slug: "/iphone-17-pro-repair-dubai",      label: "iPhone 17 Pro" },
  { slug: "/iphone-17-pro-max-repair-dubai",  label: "iPhone 17 Pro Max" },
  { slug: "/iphone-17e-repair-dubai",         label: "iPhone 17e" },
  { slug: "/iphone-air-repair-dubai",         label: "iPhone Air" },
  { slug: "/iphone-se-3rd-gen-repair-dubai",  label: "iPhone SE (3rd gen)" },
];

// Circular window: the `count` models following `path` in the list (wrapping
// around). Returns [] when `path` is not an iPhone model page, so callers can
// render the grid only for model pages.
export function relatedIphoneModels(path: string, count = 6): IphoneModelLink[] {
  const idx = IPHONE_MODEL_LINKS.findIndex((m) => m.slug === path);
  if (idx === -1) return [];
  const out: IphoneModelLink[] = [];
  const n = IPHONE_MODEL_LINKS.length;
  for (let k = 1; k <= count && k < n; k++) out.push(IPHONE_MODEL_LINKS[(idx + k) % n]);
  return out;
}
