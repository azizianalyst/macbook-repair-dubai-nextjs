// Server-side JSON-LD selector for route pages.
//
// Returns the schema nodes to render as <script type="application/ld+json"> in the STATIC
// HTML for a given route (via <PageSchema/> in each page.tsx). This is what fixes the audit
// finding that ~340 inner repair/service pages shipped ZERO Service schema: their schema was
// injected client-side through useSeo/useEffect and never reached the prerendered HTML Google
// indexes.
//
// Scope is deliberately conservative:
//   • "/" and "/reviews" render their own (richer) schema in-view  -> [] here.
//   • blog / admin / demo / informational (how-to, vs, guides, calculators, near-me) -> [].
//   • clear repair/service/model/area pages -> a Service node (NO price Offer, so there is
//     zero risk of a price mismatch vs the visible page price; adding accurate per-page
//     Offers is a safe follow-up once a verified price-per-route map exists).
import { SITE } from "./seo";
import { licensedImage, organization, localBusiness, person, place, service, pageUrl } from "./schema";
import { imageForRoute } from "./page-images";
import { BUSINESS_ID } from "./schema";
import { TEAM } from "@/content/site";
import { PRICING_SERVICES } from "@/content/pricing-services";
import { AREAS } from "@/content/areas";

// Dubai area landing pages (NOT the multi-emirate city pages): slug -> config. Used to
// attach a per-area Place node anchoring the page to a Dubai neighbourhood near the
// workshop. City pages (Abu Dhabi, Sharjah, …) intentionally get NO Place node — the
// business geo is in Dubai and a Dubai-geo Place on another emirate would be wrong.
const AREA_BY_SLUG = new Map(AREAS.map((a) => [a.slug, a]));

// Trade-in / sell / buy-back routes. These high-value commercial pages don't match SERVICE_RE
// (no repair keyword), so they previously shipped only an image node — leaving the best-ranking
// commercial cluster (the "apple trade in uae" head term) with NO Organization/LocalBusiness
// entity and no Service offering in static HTML. They get the entity nodes + a buy-back/trade-in
// Service node below (FAQPage + BreadcrumbList already render server-side in-view).
const CONVERSION_ROUTES = new Set([
  "/sell-macbook-dubai",
  "/sell-faulty-macbook-dubai",
  "/trade-in-macbook-dubai",
]);

const ACRONYMS: Record<string, string> = {
  macbook: "MacBook", iphone: "iPhone", ipad: "iPad", imac: "iMac", macos: "macOS",
  ios: "iOS", apple: "Apple", airpods: "AirPods", dubai: "Dubai", icloud: "iCloud",
  ssd: "SSD", ram: "RAM", gpu: "GPU", cpu: "CPU", usb: "USB", hdmi: "HDMI", se: "SE",
  pro: "Pro", air: "Air", mini: "mini", max: "Max", plus: "Plus", ultra: "Ultra",
  m1: "M1", m2: "M2", m3: "M3", m4: "M4", m5: "M5",
};

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((w) => ACRONYMS[w.toLowerCase()] ?? (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

// Pages that render their own schema in-view, or are not a Service offering.
const SELF_OR_NON_SERVICE = /^\/(reviews$|admin|landing-template-demo|blog)/;
// Informational / commercial-intent pages that are not a single repair Service.
// near-me pages are commercial/transactional (high conversion intent) — exclude from informational so they get entity + Service schema.
const INFORMATIONAL = /(how-to-|-vs-|guide|where-|calculator|^\/about|^\/contact|^\/team|^\/pricing|^\/warranty|^\/faqs?$|^\/sitemap)/;
// A repair/service/model/area page that should advertise a Service.
const SERVICE_RE = /(repair|replacement|replace|recovery|diagnostic|removal|cleaning|reinstall|restoration|water-damage|logic-board|screen|battery|keyboard|charging|trackpad|hinge|ssd|ram|fan|virus|overheat|flexgate|backlight|unlock|data-recovery|upgrade)/;

export function schemaForPath(path: string): unknown[] {
  if (!path || path === "/") return [];
  // Licensable ImageObject for every route with a topic infographic - drives
  // Google Images attribution + the "Licensable" badge (license terms at
  // /image-usage-license). Additive: emitted alongside any other node.
  const img = imageForRoute(path);
  const imageNodes = img ? [licensedImage({ src: img.src, alt: img.alt, pagePath: path })] : [];

  // Entity hub + NAP pages. These carry the canonical Organization + LocalBusiness nodes
  // (and, for About, the credentialed technician Person nodes) in the STATIC HTML — the
  // entity/E-E-A-T signals crawlers and AI engines consolidate on. Previously these were
  // injected client-side via useSeo and never reached the prerendered HTML. localBusiness()
  // here carries NO aggregateRating by design (home/reviews use localBusinessWithRating).
  if (path === "/about") {
    return [
      organization(),
      localBusiness(),
      ...TEAM.map((t) => person({ name: t.name, jobTitle: t.specialisation, yearsExperience: t.years })),
      ...imageNodes,
    ];
  }
  if (path === "/contact") {
    return [organization(), localBusiness(), ...imageNodes];
  }

  // Pricing page: the full priced-service Offer graph + the business entity. Prices come
  // from PRICING_SERVICES, which mirrors the visible price tables, so the Offers match the
  // on-page prices (no rich-result mismatch). FAQPage + BreadcrumbList are already
  // server-rendered by <FAQAccordion injectSchema> / <BreadcrumbTrail> in the view.
  if (path === "/pricing") {
    return [
      localBusiness(),
      ...PRICING_SERVICES.map((s) =>
        service({
          name: s.name,
          price: s.price,
          timeline: s.timeline,
          warranty: s.warranty,
          url: s.url ? pageUrl(s.url) : undefined,
        }),
      ),
      ...imageNodes,
    ];
  }

  // Trade-in / sell / buy-back pages: emit the entity nodes + a Service node so the
  // "apple trade in uae" cluster resolves the Azizi Technologies ↔ MacBook Repair Dubai
  // entity and advertises an explicit offering. No price Offer — valuations are quoted per
  // device, so a fixed price would be wrong (same no-Offer rationale as the repair Service node).
  if (CONVERSION_ROUTES.has(path)) {
    const url = pageUrl(path);
    const isTradeIn = path.includes("trade-in");
    const tradeService = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      serviceType: isTradeIn ? "Electronics Trade-In" : "Used Electronics Buy-Back",
      name: isTradeIn ? "Apple Device Trade-In Dubai" : "Apple Device Buy-Back Dubai",
      provider: { "@type": "LocalBusiness", "@id": BUSINESS_ID, name: SITE.name },
      areaServed: {
        "@type": "City",
        name: "Dubai",
        containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
      },
      url,
      category: isTradeIn ? "Electronics Trade-In Service" : "Used Electronics Dealer",
    };
    return [organization(), localBusiness(), tradeService, ...imageNodes];
  }

  if (SELF_OR_NON_SERVICE.test(path)) return imageNodes;
  if (INFORMATIONAL.test(path)) return imageNodes;
  if (!SERVICE_RE.test(path)) return imageNodes;

  const seg = path.replace(/^\/+|\/+$/g, "").split("/");
  const name = titleCase(seg[seg.length - 1]);
  const url = pageUrl(path);

  const serviceNode = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: name,
    name,
    provider: { "@type": "LocalBusiness", "@id": BUSINESS_ID, name: SITE.name },
    areaServed: {
      "@type": "City",
      name: "Dubai",
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    },
    url,
    category: "Computer Repair Service",
    termsOfService: pageUrl("/warranty"),
  };

  // Dubai area landing pages: add a Place node anchoring the served neighbourhood to the
  // workshop geo (local-SEO geo signal for "near me" / area queries). Server-rendered here
  // so it ships in static HTML; the AreaPageTemplate no longer injects it client-side.
  const areaSlug = path.startsWith("/macbook-repair-") ? path.slice("/macbook-repair-".length) : "";
  const area = areaSlug ? AREA_BY_SLUG.get(areaSlug) : undefined;
  const placeNodes = area
    ? [place({
        areaName: area.area,
        description: `MacBook repair service area covering ${area.area}, Dubai — free pickup and delivery from our Concord Tower workshop in Dubai Media City (${area.driveTime} away).`,
      })]
    : [];

  // Entity definition on every money page: previously these Service nodes pointed their
  // provider @id at BUSINESS_ID (#localbusiness) but the Organization/LocalBusiness nodes
  // that DEFINE that @id only shipped on 5 hub pages — leaving ~235 service/model/area pages
  // with a dangling provider reference (a repair Service attributed to an undefined business).
  // Prepending organization() + localBusiness() (the no-rating variant) resolves the @id in
  // static HTML on every page, consolidating the Azizi Technologies ↔ MacBook Repair Dubai
  // entity sitewide — the core fix for the post-migration entity fragmentation.
  return [organization(), localBusiness(), serviceNode, ...placeNodes, ...imageNodes];
}
