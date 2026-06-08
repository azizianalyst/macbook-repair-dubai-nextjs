// JSON-LD generators. one helper per schema type.
// inject via <script type="application/ld+json">{JSON.stringify(...)}</script>

import { SITE } from "./seo";

export const ORG_ID = `${SITE.url}/#organization`;
export const BUSINESS_ID = `${SITE.url}/#localbusiness`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "@id": BUSINESS_ID,
    name: SITE.name,
    alternateName: "Azizi Technologies",
    image: [
      `${SITE.url}/images/brand/brand-storefront.jpg`,
      `${SITE.url}/images/brand/workshop-wide.jpg`,
      `${SITE.url}/images/brand/team-portrait.jpg`,
    ],
    logo: `${SITE.url}/logo-mrd.png`,
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: "info@macbook-repair-dubai.ae",
    priceRange: "AED 60 - AED 4,550",
    currenciesAccepted: "AED",
    paymentAccepted: ["Cash", "Credit Card", "Visa", "Mastercard", "American Express"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office #45, 10th Floor, Concord Tower, Al Sufouh",
      addressLocality: "Dubai Media City",
      addressRegion: "Dubai",
      addressCountry: { "@type": "Country", name: "AE" },
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.0978143, longitude: 55.1561949 },
    hasMap: "https://maps.app.goo.gl/X5easM2GnxoZnqhU7",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    // NOTE: AggregateRating intentionally NOT here - it would render on every page that uses
    // localBusiness(). It is scoped to home + /reviews via the prerender (and the aggregateRating()
    // helper) to avoid sitewide review-snippet spam.
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    founder: { "@type": "Organization", name: "Azizi Technologies" },
    foundingDate: "2004-10-10",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Abu Dhabi" },
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Apple Repair Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Screen Repair" }, price: "780", priceCurrency: "AED" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Battery Replacement" }, price: "590", priceCurrency: "AED" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "iPhone Screen Repair" }, price: "460", priceCurrency: "AED" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "MacBook Water Damage Repair" }, price: "910", priceCurrency: "AED" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "iMac Screen Repair" }, price: "1040", priceCurrency: "AED" },
      ],
    },
    sameAs: [
      "https://www.facebook.com/macbookrepairdubai.ae/",
      "https://www.instagram.com/azizitechnologies/",
      "https://www.youtube.com/@AziziTechnologies",
    ],
  };
}

export function service(opts: {
  name: string;
  price: number;
  priceMax?: number;
  description?: string;
  url?: string;
  warranty?: string;     // "P90D"
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
        warranty: opts.warranty
          ? { "@type": "WarrantyPromise", durationOfWarranty: { "@type": "QuantitativeValue", value: 90, unitCode: "DAY" } }
          : undefined,
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
    publisher: { "@type": "Organization", name: "Google" },
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
      streetAddress: "Office #45, 10th Floor, Concord Tower, Al Sufouh",
      addressLocality: "Dubai Media City",
      addressRegion: "Dubai",
      addressCountry: { "@type": "Country", name: "AE" },
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
    sameAs: [
      "https://www.facebook.com/macbookrepairdubai.ae/",
      "https://www.instagram.com/azizitechnologies/",
      "https://www.youtube.com/@AziziTechnologies",
    ],
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
export function pageWithSpeakable(opts: { url: string; name?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    name: opts.name,
    url: opts.url,
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
