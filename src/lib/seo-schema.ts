import { z } from "zod";

// Schemas for the private SEO command center (backlinks + ranking snapshots).
// Mirrors the lead-schema.ts pattern: one zod schema, reused by the API route for
// server-side validation. DR is a free-text string so it can hold either a real
// Ahrefs number ("62") or a directional estimate ("Low-Mid", "55-65") until a
// backlink API is connected.

export const BACKLINK_STATUSES = [
  "Prospect", "Outreach", "Drafted", "Live", "Keep", "Watch", "Disavow", "Lost", "Rejected",
] as const;
export type BacklinkStatus = (typeof BACKLINK_STATUSES)[number];

// "prospect" = a link we're building (outreach pipeline). "inbound" = a link that
// already points at us (audit pipeline: Keep / Watch / Disavow / Lost).
export const BACKLINK_KINDS = ["prospect", "inbound"] as const;
export type BacklinkKind = (typeof BACKLINK_KINDS)[number];

export const ANCHOR_TYPES = ["Branded", "Naked URL", "Partial-match", "Exact-match", "Generic", "Other"] as const;
export const LINK_TYPES = ["dofollow", "nofollow", "unknown"] as const;
export const BACKLINK_CATEGORIES = ["guest", "citation", "community", "news", "haro", "directory", "other"] as const;

const optStr = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

export const BacklinkInputSchema = z.object({
  // Required, NO .default() — defaults on a base schema leak into BacklinkPatchSchema
  // (.partial() still injects them), which would reset these on a partial PATCH.
  kind: z.enum(BACKLINK_KINDS),
  status: z.enum(BACKLINK_STATUSES),
  site: z.string().trim().min(1, "Site name required").max(200),
  source_url: optStr(500),
  source_domain: optStr(255),
  target_url: optStr(500),
  anchor_text: optStr(300),
  anchor_type: z.enum(ANCHOR_TYPES).optional(),
  link_type: z.enum(LINK_TYPES).optional(),
  category: z.enum(BACKLINK_CATEGORIES).optional(),
  dr: optStr(20), // free text: "62" or "Low-Mid" (estimate) until Ahrefs is connected
  country: optStr(60),
  contact_email: optStr(160),
  notes: optStr(4000),
});
export type BacklinkInput = z.infer<typeof BacklinkInputSchema>;

// Patch schema for inline edits — every field optional.
export const BacklinkPatchSchema = BacklinkInputSchema.partial();
export type BacklinkPatch = z.infer<typeof BacklinkPatchSchema>;

// ---------- prices (admin-controlled, keyword-keyed) ----------
// One source of truth for the structured service prices. Edited in the admin Prices tab,
// then `scripts/gen-prices.cjs` bakes it into src/content/prices.generated.ts at build, so the
// /pricing tables AND the /pricing JSON-LD Offers (and any priceFor() use) can never drift.
export const PRICE_GROUPS = ["macbook", "imac", "mac-desktop", "iphone", "ipad"] as const;
export type PriceGroup = (typeof PRICE_GROUPS)[number];

export const PriceInputSchema = z.object({
  group: z.enum(PRICE_GROUPS),
  service: z.string().trim().min(1, "Service label required").max(200), // visible label = the "keyword"
  price: z.number().int().min(0).max(100000),
  timeline: z.string().trim().min(1).max(120),
  warranty: z.string().trim().min(1).max(120), // human, e.g. "15 days - 3 months"
  key: optStr(120),          // stable slug for priceFor(); auto-derived from service if blank
  schema_name: optStr(200),  // if set, this row is emitted into PRICING_SERVICES (JSON-LD)
  warranty_iso: optStr(20),  // ISO-8601 (P3M/P1Y/P15D) for the schema Offer
  url: optStr(200),          // site-relative service page for the schema @id
  notes: optStr(2000),
});
export type PriceInput = z.infer<typeof PriceInputSchema>;

export const PricePatchSchema = PriceInputSchema.partial();
export type PricePatch = z.infer<typeof PricePatchSchema>;

// ---------- screen repair prices (per-model, admin-controlled) ----------
// Single source of truth for per-device screen repair prices.
// Edited in /admin/screen-prices, then gen-screen-prices.cjs bakes them into
// src/content/screen-pricing.ts at build — blog cost-guides AND service-page tables both
// import from that generated file, so they can never drift from each other.
export const SCREEN_DEVICES = ["iphone", "ipad", "macbook"] as const;
export type ScreenDevice = (typeof SCREEN_DEVICES)[number];

export const ScreenPriceInputSchema = z.object({
  device: z.enum(SCREEN_DEVICES),
  model: z.string().trim().min(1, "Model name required").max(200),
  price: z.number().int().min(0).max(100000),            // our price in AED
  apple_price: z.number().int().min(0).max(100000),      // Apple Store / AASP comparison
  note: z.string().trim().max(300),                       // panel tech note shown in table
  sort_order: z.number().int().min(0).max(9999),
});
export type ScreenPriceInput = z.infer<typeof ScreenPriceInputSchema>;
export const ScreenPricePatchSchema = ScreenPriceInputSchema.partial();
export type ScreenPricePatch = z.infer<typeof ScreenPricePatchSchema>;

// ---------- page SEO overrides (admin-controlled titles + meta descriptions) ----------
// Sparse: only paths the owner has customised. Baked into page-meta-overrides.generated.ts at build
// (scripts/gen-pagemeta.cjs); dynamic-meta.ts metaOverride() reads it (highest precedence).
export const PageMetaInputSchema = z.object({
  path: z.string().trim().min(1).max(300),
  title: optStr(120),
  description: optStr(320),
  // Rank Math–style meta box on pages (no schemaType/breadcrumb — those need per-component wiring;
  // everything here flows through metaForPath / proxy.ts and applies to any route automatically).
  focusKeyword: optStr(120),
  secondaryKeywords: z.array(z.string().trim().min(1).max(120)).max(4).optional(),
  ogTitle: optStr(200),
  ogDescription: optStr(320),
  ogImage: optStr(300),
  twitterCard: z.enum(["summary_large_image", "summary"]).optional(),
  twitterTitle: optStr(200),
  twitterDescription: optStr(320),
  twitterImage: optStr(300),
  noindex: z.boolean().optional(),
  nofollow: z.boolean().optional(),
  noarchive: z.boolean().optional(),
  noimageindex: z.boolean().optional(),
  nosnippet: z.boolean().optional(),
  canonical: optStr(300),
  redirect: optStr(300),
  redirectType: z.enum(["301", "302"]).optional(),
});
export type PageMetaInput = z.infer<typeof PageMetaInputSchema>;

// True when a page-meta override carries nothing meaningful (used to remove it from the store).
export function isEmptyPageMeta(m: PageMetaInput): boolean {
  const s = (v?: string) => !v || !v.trim();
  return s(m.title) && s(m.description) && s(m.focusKeyword) && !(m.secondaryKeywords && m.secondaryKeywords.length) &&
    s(m.ogTitle) && s(m.ogDescription) &&
    s(m.ogImage) && s(m.twitterTitle) && s(m.twitterDescription) && s(m.twitterImage) && s(m.canonical) &&
    s(m.redirect) && !m.twitterCard && !m.noindex && !m.nofollow && !m.noarchive && !m.noimageindex && !m.nosnippet;
}

// ---------- reviews / testimonials (admin-controlled) ----------
// Source of truth for the verbatim Google reviews. Edited in the admin Reviews tab, baked into
// src/content/reviews.ts at build (scripts/gen-reviews.cjs) — consumed by find-reviews.ts + schema.
export const REVIEW_LANGUAGES = ["English", "Russian", "German", "French", "Turkish", "Arabic"] as const;
export const REVIEW_SERVICES = ["MacBook", "iMac", "iPhone", "iPad", "Water Damage", "Battery", "Screen", "Keyboard"] as const;

export const ReviewInputSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(120),
  date: z.string().trim().min(1).max(40), // verbatim Google label, e.g. "2 weeks ago" / "27 Jul 2021"
  rating: z.number().int().min(1).max(5),
  text: z.string().trim().min(1).max(2000),
  language: z.enum(REVIEW_LANGUAGES),
  services: z.array(z.enum(REVIEW_SERVICES)),
});
export type ReviewInput = z.infer<typeof ReviewInputSchema>;
export const ReviewPatchSchema = ReviewInputSchema.partial();
export type ReviewPatch = z.infer<typeof ReviewPatchSchema>;

// ---------- site settings (admin-controlled global config) ----------
// Single global object (mirrors business). Safe, high-value levers only — NOT the brand name (that's
// in Business / NAP) and NOT permalink structure (would orphan indexed URLs). Baked by
// scripts/gen-settings.cjs → src/content/settings.generated.ts. NEVER-WIPE generator (empty store
// must not blank the site). The site-wide noindex is an emergency kill-switch.
export const SiteSettingsSchema = z.object({
  tagline: optStr(160),                                              // org slogan / default tagline
  sitemapLastmod: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/),    // replaces SITEMAP_LAST_UPDATED
  timezone: z.string().trim().max(60),                              // e.g. Asia/Dubai (scheduling/display)
  siteNoindex: z.boolean().optional(),                              // emergency: deindex the whole site
  homepageNoindex: z.boolean().optional(),
});
export type SiteSettings = z.infer<typeof SiteSettingsSchema>;

// ---------- location overrides (admin-editable copy for area + city pages) ----------
// SPARSE OVERRIDE pattern (like page-meta): the structural data (slug, landmarks, travel rows,
// districts, topServices, reviewIndexes) stays in areas.ts/cities.ts; the admin overlays the editable
// PROSE + FAQs per slug. Baked by scripts/gen-locations.cjs → areas-overrides + cities-overrides
// generated maps that areas.ts/cities.ts merge over their base configs. Slug is the (locked) key.
const LocFaqSchema = z.object({ q: z.string().trim().min(1).max(300), a: z.string().trim().min(1).max(2000) });
export const AreaOverrideSchema = z.object({
  slug: z.string().trim().min(1).max(80),
  area: optStr(120), short: optStr(60), driveTime: optStr(60), metroNote: optStr(400),
  pickupWindow: optStr(120), landmarkLine: optStr(400),
  intro: optStr(2000), whyChoose: optStr(2000), pickupNote: optStr(2000),
  faqs: z.array(LocFaqSchema).max(15).optional(),
});
export type AreaOverride = z.infer<typeof AreaOverrideSchema>;
export const CityOverrideSchema = z.object({
  slug: z.string().trim().min(1).max(80),
  city: optStr(120), short: optStr(60), distance: optStr(120), collectionWindow: optStr(120),
  turnaround: optStr(120), landmarkLine: optStr(400),
  intro: optStr(2000), whyChoose: optStr(2000), collectionNote: optStr(2000),
  faqs: z.array(LocFaqSchema).max(15).optional(),
});
export type CityOverride = z.infer<typeof CityOverrideSchema>;
// True when an override carries nothing but its slug (→ remove it).
export function isEmptyLocOverride(o: Record<string, unknown>): boolean {
  return !Object.entries(o).some(([k, v]) => k !== "slug" && (Array.isArray(v) ? v.length > 0 : typeof v === "string" ? v.trim() !== "" : !!v));
}

// ---------- blog taxonomy (admin-controlled categories + tags) ----------
// Mirrors BlogCategory in blog-posts.ts. SLUGS ARE LOCKED (each hub is a hardcoded route folder under
// src/app/blog/<slug> + src/app/blog/tag/<slug>) — the API rejects any add/remove/rename of a slug so
// the hub routes can't break. Editable: category copy + the `types[]` mapping, and tag display names.
// Baked by scripts/gen-categories.cjs → src/content/blog-taxonomy.generated.ts (NEVER-WIPE + guard).
export const BlogCategoryDefSchema = z.object({
  slug: z.string().trim().min(1).max(60),
  name: z.string().trim().min(1).max(80),
  eyebrow: z.string().trim().max(80),
  blurb: z.string().trim().max(300),
  intro: z.string().trim().max(2000),
  types: z.array(z.string().trim().min(1).max(60)).min(1).max(12),
});
export type BlogCategoryDef = z.infer<typeof BlogCategoryDefSchema>;
export const BlogTagDefSchema = z.object({ slug: z.string().trim().min(1).max(40), name: z.string().trim().min(1).max(80) });
export type BlogTagDef = z.infer<typeof BlogTagDefSchema>;
export const BlogTaxonomySchema = z.object({
  categories: z.array(BlogCategoryDefSchema).max(20),
  tags: z.array(BlogTagDefSchema).max(20),
});
export type BlogTaxonomy = z.infer<typeof BlogTaxonomySchema>;

// ---------- navigation menus (admin-controlled header + footer) ----------
// Header = mega-menu panels (mirror MegaPanel/MegaLink in mega-menu.ts); footer = link columns.
// Baked by scripts/gen-menus.cjs → mega-menu.generated.ts (NEVER-WIPE: a blank menu must not break
// the site). The API validates internal hrefs against the build's ROUTES (a bad href = broken nav).
const MenuLinkSchema = z.object({ label: z.string().trim().min(1).max(80), href: z.string().trim().min(1).max(300) });
const MegaPanelSchema = z.object({
  key: z.string().trim().min(1).max(40),
  label: z.string().trim().min(1).max(60),
  href: z.string().trim().min(1).max(300),
  viewAll: optStr(80),
  links: z.array(MenuLinkSchema).max(12).optional(),
});
const FooterColumnSchema = z.object({
  key: z.string().trim().min(1).max(40),
  heading: z.string().trim().min(1).max(60),
  links: z.array(MenuLinkSchema).max(20),
});
export const MenusSchema = z.object({
  header: z.array(MegaPanelSchema).max(10),
  footer: z.array(FooterColumnSchema).max(6),
});
export type Menus = z.infer<typeof MenusSchema>;

// ---------- business info (admin-controlled NAP / reviews / hours) ----------
// One source of truth for the business facts. Edited in the admin Business tab, baked into
// src/content/business.generated.ts at build (scripts/gen-business.cjs), which site.ts re-exports
// (NAP / REVIEW_COUNT / REVIEW_AVERAGE / HOURS / CONTENT_REVIEWED) so it propagates everywhere.
export const HoursRowSchema = z.object({ day: z.string().trim().max(20), open: z.string().trim().max(60) });

export const BusinessInfoSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phoneDisplay: z.string().trim().min(1).max(40),
  phoneE164: z.string().trim().min(1).max(40),
  email: optStr(160),
  street: z.string().trim().max(160),
  area: z.string().trim().max(160),
  city: z.string().trim().max(80),
  country: z.string().trim().max(80),
  facebook: optStr(200),
  instagram: optStr(200),
  youtube: optStr(200),
  founded: optStr(60),
  yearsInBusiness: z.number().int().min(0).max(200),
  reviewCount: z.number().int().min(0).max(1000000),
  reviewAverage: z.number().min(0).max(5),
  contentReviewed: optStr(40),
  hours: z.array(HoursRowSchema).max(7),
});
export type BusinessInfo = z.infer<typeof BusinessInfoSchema>;

// ---------- blog posts (admin-authored, markdown) ----------
// NEW posts written from /admin/blog in markdown. Stored here, rendered at build by
// scripts/gen-blog.cjs into src/content/posts.generated.ts (markdown -> HTML), then served by the
// /blog/[slug] dynamic route through the existing BlogPostTemplate. The 85 hand-built TSX posts are
// untouched (their static folders take routing precedence over [slug]). Published posts also join
// the POSTS registry, so the blog index + sitemap + RSS pick them up automatically.
export const BLOG_STATUSES = ["draft", "published", "scheduled"] as const;
export type BlogStatus = (typeof BLOG_STATUSES)[number];

// Suggested "Type" prefixes (the part before " · "); category is free text "Type · Subtopic"
// so it routes to the matching /blog hub exactly like the existing posts.
export const BLOG_CATEGORY_TYPES = [
  "Cost guide", "Problem solving", "Buying guide", "Care guide", "Apple news",
  "Data study", "Honest guide", "Service", "Comparison",
] as const;

const FaqSchema = z.object({ q: z.string().trim().min(1).max(300), a: z.string().trim().min(1).max(2000) });
const RelatedLinkSchema = z.object({
  label: z.string().trim().min(1).max(120),
  href: z.string().trim().min(1).max(300),
  description: optStr(200),
});

export const BlogPostInputSchema = z.object({
  // kebab slug WITHOUT the /blog/ prefix (added at render). Must not collide with a hand-built post.
  slug: z.string().trim().min(1, "Slug required").max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Lowercase letters, numbers and single hyphens only"),
  title: z.string().trim().min(1, "Title required").max(160),
  excerpt: z.string().trim().min(1, "Excerpt required").max(400), // listing card + hook + meta fallback
  category: z.string().trim().min(1, "Category required").max(120), // "Type · Subtopic"
  focusKeyword: optStr(120), // Rank Math–style PRIMARY keyword: drives the on-page SEO score; not rendered
  secondaryKeywords: z.array(z.string().trim().min(1).max(120)).max(4).optional(), // up to 4 secondary keywords
  author: z.string().trim().min(1, "Author required").max(120),
  authorRole: optStr(120),
  quickAnswer: optStr(400),  // ≤40-word AI-citation answer box; falls back to excerpt
  body: z.string().trim().min(1, "Body required").max(60000), // markdown
  heroImage: optStr(300),    // site-relative image path; falls back to keyword-routed topic image
  heroAlt: optStr(300),
  seoTitle: optStr(120),
  seoDescription: optStr(320),
  faqs: z.array(FaqSchema).max(15).optional(),
  relatedLinks: z.array(RelatedLinkSchema).max(6).optional(),
  // --- Rank Math–style meta box: Schema tab ---
  schemaType: z.enum(["Article", "BlogPosting", "NewsArticle", "None"]).optional(),
  // --- Social tab (OG + Twitter overrides; blank = derive from SEO title/description/hero) ---
  ogTitle: optStr(200),
  ogDescription: optStr(320),
  ogImage: optStr(300),
  twitterCard: z.enum(["summary_large_image", "summary"]).optional(),
  twitterTitle: optStr(200),
  twitterDescription: optStr(320),
  twitterImage: optStr(300),
  // --- Advanced tab: robots meta + canonical + breadcrumb + redirect ---
  noindex: z.boolean().optional(),
  nofollow: z.boolean().optional(),
  noarchive: z.boolean().optional(),
  noimageindex: z.boolean().optional(),
  nosnippet: z.boolean().optional(),
  canonical: optStr(300),
  breadcrumbTitle: optStr(160),
  redirect: optStr(300),        // if set, /blog/<slug> 301/302s here (via proxy.ts)
  redirectType: z.enum(["301", "302"]).optional(),
  status: z.enum(BLOG_STATUSES),
  scheduledFor: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")), // go-live date for status=scheduled
  datePublished: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD"),
  dateModified: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")),
  minutes: z.number().int().min(1).max(120).optional(), // auto-computed from word count if omitted
});
export type BlogPostInput = z.infer<typeof BlogPostInputSchema>;

export const BlogPostPatchSchema = BlogPostInputSchema.partial();
export type BlogPostPatch = z.infer<typeof BlogPostPatchSchema>;

// One row of a GSC searchAnalytics result (query- or page-keyed).
export const GscRowSchema = z.object({
  key: z.string(),
  clicks: z.number(),
  impressions: z.number(),
  ctr: z.number(),
  position: z.number(),
});
export type GscRow = z.infer<typeof GscRowSchema>;

export const RankingSnapshotInputSchema = z.object({
  range_start: z.string(),
  range_end: z.string(),
  queries: z.array(GscRowSchema),
  pages: z.array(GscRowSchema),
});
export type RankingSnapshotInput = z.infer<typeof RankingSnapshotInputSchema>;
