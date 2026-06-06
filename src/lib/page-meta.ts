import type { Metadata } from "next";
import { ROUTE_META } from "./route-meta.generated";

const SITE_NAME = "MacBook Repair Dubai";
const SITE_URL = "https://macbook-repair-dubai.ae";

const ACRONYMS: Record<string, string> = {
  macbook: "MacBook", iphone: "iPhone", ipad: "iPad", imac: "iMac", macos: "macOS",
  ios: "iOS", ipados: "iPadOS", apple: "Apple", airpods: "AirPods", appletv: "Apple TV",
  homepod: "HomePod", dubai: "Dubai", icloud: "iCloud", ssd: "SSD", ram: "RAM", gpu: "GPU",
  cpu: "CPU", nfc: "NFC", wifi: "Wi-Fi", usb: "USB", hdmi: "HDMI", anc: "ANC", se: "SE",
  pro: "Pro", air: "Air", mini: "mini", max: "Max", plus: "Plus", ultra: "Ultra",
  m1: "M1", m2: "M2", m3: "M3", m4: "M4", m5: "M5", vs: "vs",
};

function titleCase(s: string): string {
  return s.split("-").map((w) => ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function deriveMeta(path: string): { title: string; description: string } {
  if (path === "/" || path === "") {
    return {
      title: `${SITE_NAME} | Certified Apple Technicians in UAE`,
      description:
        "Get expert MacBook repair Dubai. Screen, battery, keyboard & water damage services for M1, M2, M3 & M4 models. Fast & trusted Apple repair.",
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
    ? `${pretty} by experienced Apple specialists in Dubai. Free diagnosis, same-day service, 90-day warranty. Call 055 741 3706.`
    : `${pretty} - MacBook Repair Dubai. Apple service specialist since 2004. Free diagnosis. Same-day service.`;
  return { title: `${pretty} | ${SITE_NAME}`, description: desc.length > 160 ? desc.slice(0, 157) + "…" : desc };
}

// Per-route Next Metadata: exact extracted title/description where available, else derived.
export function metaForPath(path: string): Metadata {
  const fallback = deriveMeta(path);
  const entry = ROUTE_META[path];
  const title = entry?.title ?? fallback.title;
  const description = entry?.description ?? fallback.description;
  const url = SITE_URL + (path === "/" ? "" : path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: SITE_NAME, locale: "en_AE" },
    twitter: { card: "summary_large_image", title, description },
  };
}
