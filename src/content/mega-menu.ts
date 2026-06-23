// Navigation data, header mega-menu + footer columns. Now edited in /admin/menus and baked by
// scripts/gen-menus.cjs → mega-menu.generated.ts; this file owns the TYPES and re-exports the data
// so NavBar (MEGA_MENU) and Footer (FOOTER_COLUMNS) keep importing from "@/content/mega-menu".
// Truth constraints still apply: single location, independent specialists (never "Apple Authorized").
// Internal hrefs are validated against src/lib/routes.generated.ts in the admin API before save.

export type MegaLink = { label: string; href: string };
export type MegaGroup = { heading: string; links: MegaLink[] };
// Two-level flyout: left panel = family list, right panel = sub-links for active family
export type MegaFamily = { label: string; href: string; links: MegaLink[] };
export type MegaPanel = {
  key: string;
  label: string;        // top-level nav label
  href: string;         // top-level link (hub page)
  viewAll?: string;     // label for the hub link at the foot of the dropdown
  links?: MegaLink[];   // simple single-column dropdown
  groups?: MegaGroup[]; // multi-column mega menu (flat columns)
  families?: MegaFamily[]; // two-level flyout: families → sub-links
};
export type FooterColumn = {
  key: string;
  heading: string;
  links: MegaLink[];    // a link label may contain the {REVIEW_COUNT} token (replaced in Footer)
};

export { MEGA_MENU, FOOTER_COLUMNS } from "./mega-menu.generated";
