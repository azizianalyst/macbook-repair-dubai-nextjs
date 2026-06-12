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
import { licensedImage } from "./schema";
import { imageForRoute } from "./page-images";
import { BUSINESS_ID } from "./schema";

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
const INFORMATIONAL = /(how-to-|-vs-|guide|near-me|where-|calculator|^\/about|^\/contact|^\/team|^\/pricing|^\/warranty|^\/faqs?$|^\/sitemap)/;
// A repair/service/model/area page that should advertise a Service.
const SERVICE_RE = /(repair|replacement|replace|recovery|diagnostic|removal|cleaning|reinstall|restoration|water-damage|logic-board|screen|battery|keyboard|charging|trackpad|hinge|ssd|ram|fan|virus|overheat|flexgate|backlight|unlock|data-recovery|upgrade)/;

export function schemaForPath(path: string): unknown[] {
  if (!path || path === "/") return [];
  // Licensable ImageObject for every route with a topic infographic - drives
  // Google Images attribution + the "Licensable" badge (license terms at
  // /image-usage-license). Additive: emitted alongside any other node.
  const img = imageForRoute(path);
  const imageNodes = img ? [licensedImage({ src: img.src, alt: img.alt, pagePath: path })] : [];
  if (SELF_OR_NON_SERVICE.test(path)) return imageNodes;
  if (INFORMATIONAL.test(path)) return imageNodes;
  if (!SERVICE_RE.test(path)) return imageNodes;

  const seg = path.replace(/^\/+|\/+$/g, "").split("/");
  const name = titleCase(seg[seg.length - 1]);
  const url = SITE.url + path;

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
    termsOfService: `${SITE.url}/warranty`,
  };

  return [serviceNode, ...imageNodes];
}
