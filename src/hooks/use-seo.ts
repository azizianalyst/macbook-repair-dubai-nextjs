// hook - inject JSON-LD + LCP preload on mount (cleaned up on unmount).
// NOTE (Next.js migration): <title>/<meta>/canonical are now owned by the App Router
// Metadata API (see src/lib/page-meta.ts + each route's `export const metadata`). This
// hook no longer touches them — it only injects structured data + the LCP preload link.
import { useEffect } from "react";
import { buildSeo } from "@/lib/seo";

type SeoArgs = Parameters<typeof buildSeo>[0] & {
  preloadImage?: {
    href: string;
    type?: "image/avif" | "image/webp" | "image/jpeg" | "image/png";
    imagesrcset?: string;
    imagesizes?: string;
  };
};

export function useSeo(args: SeoArgs, schemas: unknown[] = []) {
  useEffect(() => {
    const nodes: HTMLElement[] = [];

    // LCP preload - must be in <head>, before paint.
    if (args.preloadImage) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = args.preloadImage.href;
      if (args.preloadImage.type) link.type = args.preloadImage.type;
      if (args.preloadImage.imagesrcset) link.setAttribute("imagesrcset", args.preloadImage.imagesrcset);
      if (args.preloadImage.imagesizes) link.setAttribute("imagesizes", args.preloadImage.imagesizes);
      link.setAttribute("fetchpriority", "high");
      link.dataset.seoInject = "1";
      document.head.appendChild(link);
      nodes.push(link);
    }

    // JSON-LD blocks. <PageSchema> (server) already ships the Organization, LocalBusiness,
    // WebSite and Service nodes, and FAQAccordion/BreadcrumbTrail ship FAQPage/BreadcrumbList,
    // in the static HTML. Injecting them again here gave the rendered DOM two copies of each
    // (t34). Skip any node whose @id or @type the page already carries; inject only the rest.
    const seen = existingSchema();
    schemas.forEach((s) => {
      if (!s || typeof s !== "object") return;
      const node = { ...(s as Record<string, unknown>) };
      const id = typeof node["@id"] === "string" ? (node["@id"] as string) : "";
      if ((id && seen.ids.has(id)) || typesOf(node).some((t) => seen.types.has(t))) return;
      // The WebPage name came from the template's own title prop, which drifted from the
      // route's metadata title. document.title is the title the page actually ships.
      if (typesOf(node).includes("WebPage") && document.title) node.name = document.title;
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.dataset.seoInject = "1";
      el.textContent = JSON.stringify(node);
      document.head.appendChild(el);
      nodes.push(el);
    });

    return () => { nodes.forEach((n) => n.remove()); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args.path]);
}

function typesOf(node: Record<string, unknown>): string[] {
  const t = node["@type"];
  return Array.isArray(t) ? t.filter((x): x is string => typeof x === "string") : typeof t === "string" ? [t] : [];
}

// @ids and @types of the JSON-LD already in the document that this hook did not inject.
function existingSchema() {
  const ids = new Set<string>();
  const types = new Set<string>();
  const visit = (n: unknown) => {
    if (!n || typeof n !== "object") return;
    if (Array.isArray(n)) { n.forEach(visit); return; }
    const o = n as Record<string, unknown>;
    if (typeof o["@id"] === "string") ids.add(o["@id"] as string);
    typesOf(o).forEach((t) => types.add(t));
    if (Array.isArray(o["@graph"])) (o["@graph"] as unknown[]).forEach(visit);
  };
  document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]:not([data-seo-inject])').forEach((el) => {
    try { visit(JSON.parse(el.textContent || "")); } catch { /* not JSON: ignore */ }
  });
  return { ids, types };
}

// Build a preloadImage spec from a hero image base path like
// "/images/devices/iphone-15.jpg". Returns undefined when image is missing
// or has no generated AVIF variants.
export function preloadFromHero(image: string | undefined) {
  if (!image) return undefined;
  const m = image.match(/^(.*)\.(jpe?g|png)$/i);
  if (!m) return undefined;
  const base = m[1];
  return {
    href: `${base}-tablet.avif`,
    type: "image/avif" as const,
    imagesrcset: `${base}-mobile.avif 360w, ${base}-tablet.avif 800w, ${base}-desktop.avif 1600w`,
    imagesizes: "(max-width: 414px) 360px, (max-width: 1068px) 800px, 640px",
  };
}
