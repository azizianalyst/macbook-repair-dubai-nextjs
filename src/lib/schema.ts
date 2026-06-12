// JSON-LD generators. one helper per schema type.
// inject via <script type="application/ld+json">{JSON.stringify(...)}</script>

import { SITE } from "./seo";
import { NAP, PRICING } from "@/content/site";

export const ORG_ID = `${SITE.url}/#organization`;
export const BUSINESS_ID = `${SITE.url}/#localbusiness`;
export const WEBSITE_ID = `${SITE.url}/#website`;

// Entity-consolidation links. The Google Business Profile is named "Azizi Technologies" on
// Maps and the sister site azizitechnologies.ae ranks for overlapping queries — without an
// explicit sameAs bridge Google reads them as separate, competing entities and suppresses the
// head term. Declaring them sameAs (alongside alternateName "Azizi Technologies") tells Google
// it is ONE business. See SEO recovery plan, Cause 3.
const GBP_MAPS_URL = "https://maps.app.goo.gl/X5easM2GnxoZnqhU7";
const SISTER_SITE = "https://azizitechnologies.ae";

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "@id": BUSINESS_ID,
    name: SITE.name,
    alternateName: "Azizi Technologies",
    description:
      "Independent Apple repair specialist in Concord Tower, Dubai Media City since 2004 — MacBook, iMac, iPhone and iPad screen, battery, keyboard, water-damage and logic-board repair. Free door-to-door pickup & delivery across Dubai, free diagnosis, no-fix-no-charge, and a written warranty. Rated 5.0 from 215+ Google reviews.",
    image: [
      `${SITE.url}/images/brand/brand-storefront.jpg`,
      `${SITE.url}/images/brand/workshop-wide.jpg`,
      `${SITE.url}/images/brand/team-portrait.jpg`,
    ],
    logo: `${SITE.url}/logo-mrd.png`,
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: "info@macbook-repair-dubai.ae",
    priceRange: `AED ${PRICING.floor} - AED ${PRICING.ceiling.toLocaleString("en-US")}`,
    currenciesAccepted: "AED",
    paymentAccepted: ["Cash", "Credit Card", "Visa", "Mastercard", "American Express"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.0978143, longitude: 55.1561949 },
    hasMap: GBP_MAPS_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    // NOTE: AggregateRating NOT here by design — localBusiness() is used on every service/model
    // page and a sitewide rating would trigger review-snippet spam. Use localBusinessWithRating()
    // only on home and /reviews where the rating is visible on the page.
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    founder: { "@type": "Organization", name: "Azizi Technologies" },
    foundingDate: "2004-10-10",
    // Matches the emirates/cities the site has dedicated landing pages for (free pickup &
    // delivery). Trim any the business does not physically serve.
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Al Ain" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Umm Al Quwain" },
      { "@type": "City", name: "Khor Fakkan" },
      { "@type": "City", name: "Kalba" },
    ],
    knowsLanguage: ["en", "ar", "ur", "hi", "ru", "fr", "de"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE.phoneE164,
      url: "https://wa.me/971557413706",
      availableLanguage: ["en", "ar", "ru"],
      areaServed: { "@type": "City", name: "Dubai" },
    },
    // Starting prices — kept in lockstep with PRICING (the same figures the visible
    // price table + FAQ answers quote). Offers without a visible on-page price carry none.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Apple Repair Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Screen Repair" }, price: String(PRICING.screen.from), priceCurrency: "AED" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Battery Replacement" }, price: String(PRICING.battery.from), priceCurrency: "AED" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Water Damage Repair" }, price: String(PRICING.waterDamage.from), priceCurrency: "AED" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Screen Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "iMac Screen Repair" } },
      ],
    },
    sameAs: [NAP.facebook, NAP.instagram, NAP.youtube, GBP_MAPS_URL, SISTER_SITE],
  };
}

// Use ONLY on pages where the aggregate rating is visible (home, /reviews).
// Nesting the rating inside LocalBusiness is required for Google to associate them
// as a rich-result eligible entity. localBusiness() omits it intentionally so that
// pages which embed localBusiness() without a visible rating don't emit misleading markup.
export function localBusinessWithRating(ratingValue: number, reviewCount: number) {
  return {
    ...localBusiness(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(ratingValue),
      reviewCount: String(reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// Parse an ISO-8601 duration ("P1Y", "P6M", "P15D") into a WarrantyPromise.
// Falls back to 12 months if the string doesn't parse.
function warrantyPromise(iso: string) {
  const m = iso.match(/^P(\d+)([DWMY])$/i);
  if (!m) return { "@type": "WarrantyPromise", durationOfWarranty: { "@type": "QuantitativeValue", value: 12, unitCode: "MON" } };
  const unitCode = { D: "DAY", W: "WEE", M: "MON", Y: "ANN" }[m[2].toUpperCase()] ?? "DAY";
  return {
    "@type": "WarrantyPromise",
    durationOfWarranty: { "@type": "QuantitativeValue", value: Number(m[1]), unitCode },
  };
}

export function service(opts: {
  name: string;
  price: number;
  priceMax?: number;
  description?: string;
  url?: string;
  warranty?: string;     // ISO-8601, e.g. "P1Y" · "P6M" · "P15D"
  timeline?: string;     // human readable
  serviceType?: string;
  category?: string;
}) {
  const url = opts.url;
  const offers = opts.priceMax
    ? {
        "@type": "AggregateOffer",
        url,
        priceCurrency: "AED",
        lowPrice: String(opts.price),
        highPrice: String(opts.priceMax),
        availability: "https://schema.org/InStock",
      }
    : {
        "@type": "Offer",
        url,
        priceCurrency: "AED",
        price: String(opts.price),
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: String(opts.price),
          priceCurrency: "AED",
          valueAddedTaxIncluded: true,
          description: opts.timeline ? `Starting price. Turnaround: ${opts.timeline}.` : "Starting price.",
        },
        warranty: opts.warranty ? warrantyPromise(opts.warranty) : undefined,
      };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url ? `${url}#service` : undefined,
    serviceType: opts.serviceType ?? opts.name,
    name: opts.name,
    description: opts.description,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: "Dubai",
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    },
    url,
    category: opts.category ?? "Computer Repair Service",
    termsOfService: `${SITE.url}/warranty`,
    offers,
  };
}
// individual Review entries - for /reviews page
export function reviewSchema(r: {
  author: string;
  datePublished?: string;   // ISO if known
  rating: number;
  body: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": BUSINESS_ID },
    author: { "@type": "Person", name: r.author },
    datePublished: r.datePublished,
    reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5", worstRating: "1" },
    reviewBody: r.body,
  };
}

export function aggregateRating(opts: { value: number; count: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: { "@id": BUSINESS_ID },
    ratingValue: String(opts.value),
    reviewCount: String(opts.count),
    bestRating: "5",
    worstRating: "1",
  };
}

export function faqPage(qa: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbs(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: SITE.url + t.path,
    })),
  };
}

// Licensable ImageObject - drives the "Licensable" badge in Google Images and
// states our reuse terms (free embed WITH a dofollow link credit - see
// /image-usage-license). Permanently attributes every topic image to us.
export function licensedImage(opts: { src: string; alt: string; pagePath: string; geo?: boolean; width?: number; height?: number }) {
  const imageUrl = SITE.url + opts.src;
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${imageUrl}#image`,
    contentUrl: imageUrl,
    url: imageUrl,
    name: opts.alt,
    description: opts.alt,
    // Local-SEO geo anchor: ties the image to the Dubai Media City workshop.
    ...(opts.geo ? {
      contentLocation: {
        "@type": "Place",
        name: "MacBook Repair Dubai - Concord Tower, Dubai Media City",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Concord Tower, Dubai Media City",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
    } : {}),
    width: { "@type": "QuantitativeValue", value: opts.width ?? 1600, unitText: "px" },
    height: { "@type": "QuantitativeValue", value: opts.height ?? 1200, unitText: "px" },
    license: `${SITE.url}/image-usage-license`,
    acquireLicensePage: `${SITE.url}/image-usage-license`,
    creditText: "MacBook Repair Dubai (macbook-repair-dubai.ae)",
    creator: { "@id": ORG_ID },
    copyrightNotice: `© ${NAP.name} - Azizi Technologies, Dubai`,
    copyrightHolder: { "@id": ORG_ID },
    representativeOfPage: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": SITE.url + opts.pagePath },
    inLanguage: "en-AE",
  };
}

export function videoObject(opts: {
  name: string;
  description: string;
  contentUrl: string;   // site-relative, e.g. /videos/foo.mp4
  thumbnailUrl: string; // site-relative poster jpg
  uploadDate: string;   // ISO date
  duration: string;     // ISO 8601, e.g. "PT8S"
  pagePath?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${SITE.url}${opts.contentUrl}#video`,
    name: opts.name,
    description: opts.description,
    contentUrl: SITE.url + opts.contentUrl,
    thumbnailUrl: SITE.url + opts.thumbnailUrl,
    uploadDate: opts.uploadDate,
    duration: opts.duration,
    creator: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    copyrightNotice: `© ${NAP.name} - Azizi Technologies, Dubai`,
    copyrightHolder: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": SITE.url + (opts.pagePath ?? "/") },
    inLanguage: "en-AE",
  };
}

export function article(opts: {
  title: string;
  path: string;
  description: string;
  author: string;
  datePublished: string;  // ISO
  dateModified: string;   // ISO
  image?: string;
}) {
  const url = SITE.url + opts.path;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: opts.title,
    description: opts.description,
    image: opts.image ? [opts.image] : undefined,
    author: {
      "@type": "Person",
      name: opts.author,
      worksFor: { "@id": ORG_ID },
    },
    publisher: { "@id": ORG_ID },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-AE",
  };
}

export function howTo(opts: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string; // ISO 8601 duration eg "PT45M"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    totalTime: opts.totalTime,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function person(opts: {
  name: string;
  jobTitle: string;
  image?: string;
  yearsExperience?: number;
  slug?: string;
  knowsAbout?: string[];
  /** Professional certifications, e.g. "Apple Certified Mac Technician (ACMT)". */
  credentials?: string[];
}) {
  const slug = opts.slug ?? slugify(opts.name);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/team/${slug}#person`,
    name: opts.name,
    jobTitle: opts.jobTitle,
    image: opts.image,
    worksFor: { "@id": ORG_ID },
    knowsAbout: opts.knowsAbout,
    hasCredential: opts.credentials?.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: c,
      recognizedBy: { "@type": "Organization", name: "Apple" },
    })),
    description: opts.yearsExperience
      ? `${opts.yearsExperience} years repairing Apple devices.`
      : undefined,
  };
}

// Place node for area landing pages. Describes the served area as a schema.org Place,
// reusing the business PostalAddress + central Dubai geo as fallback when no per-area geo exists.
// containedInPlace = Dubai, UAE so the area is correctly nested under the city/country.
export function place(opts: {
  areaName: string;
  geo?: { lat: number; lng: number };
  description?: string;
}) {
  const lat = opts.geo?.lat ?? 25.09781;
  const lng = opts.geo?.lng ?? 55.15619;
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: opts.areaName,
    description: opts.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
    containedInPlace: {
      "@type": "City",
      name: "Dubai",
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    },
  };
}

export function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: "Azizi Technologies",
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo-mrd.png`,
      width: 600,
      height: 60,
    },
    sameAs: [NAP.facebook, NAP.instagram, NAP.youtube, GBP_MAPS_URL, SISTER_SITE],
  };
}

// WebSite entity node. Provides WEBSITE_ID so WebPage.isPartOf / speakable refs resolve into a
// connected graph. No SearchAction — the site has no on-site search, so a sitelinks searchbox
// would be invalid markup.
export function webSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-AE",
  };
}

export function itemList(opts: { name: string; items: Array<{ name: string; url: string; description?: string }> }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: SITE.url + it.url,
      description: it.description,
    })),
  };
}

export function webPage(opts: {
  title: string;
  description: string;
  path: string;
  dateModified: string;       // ISO
  datePublished?: string;     // ISO
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.title,
    description: opts.description,
    url: SITE.url + opts.path,
    inLanguage: opts.inLanguage ?? "en-AE",
    dateModified: opts.dateModified,
    isPartOf: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

// SpeakableSpecification - tells voice assistants / AI Overviews which DOM nodes
// hold the most quotable content. Referenced from WebPage via `speakable`.
export function speakable(xpaths?: string[]) {
  return {
    "@type": "SpeakableSpecification",
    xpath: xpaths ?? [
      "/html/body//section[contains(@class,'quick-answer')]",
      "/html/body//section[contains(@class,'quick-answer')]//*[@itemprop='text']",
    ],
  };
}

// Convenience: WebPage node that points to the quick-answer block as speakable.
export function pageWithSpeakable(opts: { url: string; name?: string; dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    name: opts.name,
    url: opts.url,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    publisher: { "@id": ORG_ID },
    speakable: speakable(),
  };
}

// helper to render
export function jsonLd(data: unknown): string {
  return JSON.stringify(data);
}
