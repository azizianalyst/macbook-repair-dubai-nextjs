import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes.generated";

const SITE = "https://macbook-repair-dubai.ae";

// Automated sitemap at /sitemap.xml — regenerated from the actual route list on every
// build (routes.generated.ts is refreshed by the `prebuild`/`predev` script). A single
// sitemap is valid + recommended below 50,000 URLs (we have ~349). `changeFrequency`
// and `priority` are categorised by URL shape so it reads like the old segmented sitemap.
const SERVICE_KW = /(screen|battery|keyboard|logic|water|trackpad|charging|speaker|camera|microphone|hinge|gpu|ssd|ram|fan|data|virus|overheat|touch|power|safe|backup|flexgate|cleaning|thermal|wifi|bluetooth|display|recovery|unlock|diagnostic|reinstall|maintenance)/;
const isBlog = (p: string) => p.startsWith("/blog");
const isArea = (p: string) =>
  /^\/macbook-repair-[a-z0-9-]+$/.test(p) && !SERVICE_KW.test(p) && !/(calculator|near-me|cost|where)/.test(p);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((p) => {
    const isHome = p === "/";
    const depth = isHome ? 0 : p.split("/").filter(Boolean).length;
    return {
      url: SITE + (isHome ? "" : p),
      lastModified,
      changeFrequency: isHome ? "daily" : isBlog(p) ? "weekly" : isArea(p) ? "monthly" : "monthly",
      priority: isHome ? 1 : depth <= 1 ? 0.8 : 0.6,
    };
  });
}
