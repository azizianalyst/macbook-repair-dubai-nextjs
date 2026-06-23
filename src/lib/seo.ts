// seo helpers - title, meta, canonical
// keep boring and predictable. one source per page.

export const SITE = {
  name: "MacBook Repair Dubai",
  url: "https://macbook-repair-dubai.ae",
  phone: "+971 55 741 3706",
  phoneE164: "+971557413706",
  whatsapp: "https://wa.me/971557413706",
} as const;

type SeoInput = {
  title: string;            // page-specific, no brand
  description: string;      // 150-160 chars
  path: string;             // e.g. "/macbook-screen-repair-dubai"
  ogImage?: string;         // absolute or /path
  ogImageAlt?: string;      // alt text for the OG/Twitter image
  noindex?: boolean;
};

const TITLE_MAX = 60;
const DESC_MAX = 155;

// Trim a string to <= max chars at a word boundary. No trailing hyphen/space,
// no ellipsis added (keeps descriptions clean for SERP). Returns input unchanged
// when already within budget.
function clampWords(s: string, max: number): string {
  if (s.length <= max) return s;
  let cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 0) cut = cut.slice(0, lastSpace);
  // strip any dangling separator/whitespace left at the boundary
  return cut.replace(/[\s\---|:,;.]+$/, "").trim();
}

// Clamp a title to <= max chars while preserving the " | Brand" suffix when present.
// Prefers trimming the marketing clause before the separator rather than the brand.
function clampTitle(title: string, max: number): string {
  if (title.length <= max) return title;
  const sep = " | ";
  const idx = title.lastIndexOf(sep);
  if (idx > 0) {
    const head = title.slice(0, idx);
    const brand = title.slice(idx); // includes " | Brand"
    // Keep the brand suffix if it fits with at least a little room for the clause.
    if (brand.length < max - 3) {
      const headBudget = max - brand.length;
      const trimmedHead = clampWords(head, headBudget);
      if (trimmedHead) return trimmedHead + brand;
    }
  }
  // No usable separator (or brand too long): clamp the whole thing at a word boundary.
  return clampWords(title, max);
}

export function buildSeo(input: SeoInput) {
  // Append the brand only when (a) the title doesn't already contain it AND (b) the
  // branded result still fits in ~60 chars (Google truncates titles around there).
  // Prevents double-branding and stops the +23-char suffix from pushing titles past
  // the SERP cutoff. Most titles already end with "… Repair Dubai", so dropping the
  // explicit brand on long titles loses nothing.
  const branded = `${input.title} | ${SITE.name}`;
  const rawTitle = input.title.includes(SITE.name)
    ? input.title
    : branded.length <= TITLE_MAX
      ? branded
      : input.title;
  // Enforce the SERP title cap. Short titles pass through clampTitle unchanged.
  const title = clampTitle(rawTitle, TITLE_MAX);
  // Enforce the meta description cap. Short descriptions pass through unchanged.
  const description = clampWords(input.description, DESC_MAX);
  // Trailing-slash canonical form (matches next.config trailingSlash:true). Root -> "/".
  const canonical = SITE.url + (input.path === "/" ? "/" : input.path.replace(/\/$/, "") + "/");
  const ogImage = input.ogImage
    ? (input.ogImage.startsWith("http") ? input.ogImage : SITE.url + input.ogImage)
    : `${SITE.url}/og-default.jpg`;
  // Default the OG image alt to the (clamped) title - a sensible, descriptive value.
  const ogImageAlt = input.ogImageAlt || title;

  return { title, description, canonical, ogImage, ogImageAlt, noindex: !!input.noindex };
}

// --- SSR head capture ---
// During build-time SSR, useSeo() records buildSeo(args) here (synchronously, in render -
// useEffect does NOT run server-side). entry-server reads it so the prerender can stamp each
// page's REAL title/description/canonical instead of slug-derived guesses. No-op on the client.
let __ssrHead: ReturnType<typeof buildSeo> | null = null;
export function resetSsrHead() { __ssrHead = null; }
export function getSsrHead() { return __ssrHead; }
export function setSsrHead(seo: ReturnType<typeof buildSeo>) { __ssrHead = seo; }

// applies tags to <head> on the client. swap for SSR if migrating frameworks.
export function applySeo(seo: ReturnType<typeof buildSeo>) {
  if (typeof document === "undefined") return;
  document.title = seo.title;
  setMeta("description", seo.description);
  setLink("canonical", seo.canonical);
  setMeta("og:title", seo.title, "property");
  setMeta("og:description", seo.description, "property");
  setMeta("og:url", seo.canonical, "property");
  setMeta("og:image", seo.ogImage, "property");
  setMeta("og:image:alt", seo.ogImageAlt, "property");
  setMeta("og:type", "website", "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:image", seo.ogImage);
  setMeta("twitter:image:alt", seo.ogImageAlt);
  setMeta("robots", seo.noindex ? "noindex,nofollow" : "index,follow");
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
