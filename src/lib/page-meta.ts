import type { Metadata } from "next";
import { ROUTE_META } from "./route-meta.generated";
import { dynamicMeta, metaOverride } from "./dynamic-meta";
import { imageForRoute } from "./page-images";

const SITE_NAME = "MacBook Repair Dubai";
const SITE_URL = "https://macbook-repair-dubai.ae";

const ACRONYMS: Record<string, string> = {
  macbook: "MacBook", iphone: "iPhone", ipad: "iPad", imac: "iMac", macos: "macOS",
  ios: "iOS", ipados: "iPadOS", apple: "Apple", airpods: "AirPods", appletv: "Apple TV",
  homepod: "HomePod", dubai: "Dubai", icloud: "iCloud", ssd: "SSD", ram: "RAM", gpu: "GPU",
  cpu: "CPU", nfc: "NFC", wifi: "Wi-Fi", usb: "USB", hdmi: "HDMI", anc: "ANC", se: "SE",
  pro: "Pro", air: "Air", mini: "mini", max: "Max", plus: "Plus", ultra: "Ultra",
  m1: "M1", m2: "M2", m3: "M3", m4: "M4", m5: "M5", vs: "vs",
  jbr: "JBR", jlt: "JLT", difc: "DIFC",
};

// SERP hygiene applied to every route's final meta, regardless of source:
//  - titles never carry the workshop phone number and stay <= 60 chars (SERP truncation)
//  - descriptions stay <= 160 chars
const PHONE_IN_TITLE = /\s*[|\-–·]\s*(?:Call\s+)?0?5?5\s*741\s*3706\.?\s*$/i;
function cleanTitle(t: string): string {
  let s = t.replace(PHONE_IN_TITLE, "").trim();
  if (s.length > 60) {
    const cut = s.lastIndexOf(" ", 60);
    s = (cut > 0 ? s.slice(0, cut) : s.slice(0, 60)).trim();
    // Don't leave a dangling separator or weak connector word (e.g. "… from AED").
    // Weak words are stripped only as WHOLE trailing words (\s+ guard), so we never
    // chew the suffix of a real word (e.g. "Island" -> "Isl").
    let prev: string;
    do {
      prev = s;
      s = s.replace(/\s+(?:from|AED|with|and|or|the|a)$/i, "").trim();
      s = s.replace(/[\s|·–\-&]+$/, "").trim();
    } while (s !== prev);
  }
  return s;
}
function cleanDescription(d: string): string {
  if (d.length <= 160) return d;
  return d.slice(0, 157).replace(/\s+\S*$/, "").trim() + "…";
}

function titleCase(s: string): string {
  return s.split("-").map((w) => ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function deriveMeta(path: string): { title: string; description: string } {
  if (path === "/" || path === "") {
    return {
      title: `${SITE_NAME} | Certified Apple Technicians in UAE`,
      description:
        "Expert MacBook repair in Dubai since 2004. Screen, battery, keyboard & water-damage fixes for Intel to M5 Macs. Same-day service, 12-month warranty.",
    };
  }
  const segments = path.replace(/^\/+|\/+$/g, "").split("/");
  const isBlog = segments[0] === "blog";
  const slug = segments[segments.length - 1];
  const pretty = titleCase(slug);
  if (isBlog && segments.length > 1) {
    return {
      title: `${pretty} | ${SITE_NAME} Blog`,
      description: `${pretty}. Expert guide from MacBook Repair Dubai - Apple repair specialists since 2004.`,
    };
  }
  const isRepair = /repair|replacement|fix|recovery|upgrade|diagnostic/i.test(pretty);
  const desc = isRepair
    ? `${pretty} by experienced Apple specialists in Dubai. Free diagnosis, same-day service, 12-month warranty. Call 055 741 3706.`
    : `${pretty} - MacBook Repair Dubai. Apple service specialist since 2004. Free diagnosis. Same-day service.`;
  // Avoid "…Repair Dubai | MacBook Repair Dubai" — both pretty and SITE_NAME end in "Repair Dubai".
  const title = /repair dubai$/i.test(pretty) ? `${pretty} | Apple Specialists` : `${pretty} | ${SITE_NAME}`;
  return { title, description: desc.length > 160 ? desc.slice(0, 157) + "…" : desc };
}

// Per-route Next Metadata: exact extracted title/description where available, else derived.
export function metaForPath(path: string): Metadata {
  const fallback = deriveMeta(path);
  // Precedence: intentional override > authored (route-meta.generated) > data-driven model/location meta > slug-derived fallback.
  const entry = metaOverride(path) ?? ROUTE_META[path] ?? dynamicMeta(path) ?? undefined;
  const title = cleanTitle(entry?.title ?? fallback.title);
  const description = cleanDescription(entry?.description ?? fallback.description);
  const url = SITE_URL + (path === "/" ? "" : path);
  // Blog posts are articles, not "website" — gives social/AI the right entity type.
  const isBlogPost = path.startsWith("/blog/") && path !== "/blog";
  // Per-page OG image: the route's topic infographic when one exists (services,
  // money pages, locations, blog/guides), else the site-wide default card.
  const topic = imageForRoute(path);
  const ogImage = topic ? SITE_URL + topic.src : `${SITE_URL}/og-default.jpg`;
  const ogImages = topic
    ? [{ url: ogImage, width: 1600, height: 1200, alt: topic.alt }]
    : [{ url: ogImage, width: 1200, height: 630, alt: title }];
  const openGraph: Metadata["openGraph"] = isBlogPost
    ? { title, description, url, type: "article", authors: [SITE_NAME], siteName: SITE_NAME, locale: "en_AE", images: ogImages }
    : { title, description, url, type: "website", siteName: SITE_NAME, locale: "en_AE", images: ogImages };
  return {
    title,
    description,
    // types: page-level alternates shallow-override the root layout's, so the RSS
    // autodiscovery link must ride along here or it never renders.
    alternates: {
      canonical: url,
      types: { "application/rss+xml": [{ url: "/rss.xml", title: `${SITE_NAME} — Blog` }] },
    },
    // Allow full snippets + large image thumbnails (richer SERP + AI Overview eligibility).
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph,
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}
