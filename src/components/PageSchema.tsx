// Server component: renders route-appropriate JSON-LD into the STATIC HTML.
// Rendered from each route's page.tsx (a server component) BEFORE the client view, so the
// schema is present in the prerendered HTML that Google indexes. Returns nothing for routes
// that supply their own schema in-view (home, /reviews) or that are not service pages.
import { preload } from "react-dom";
import { schemaForPath } from "@/lib/page-schema";
import { isServicePath } from "@/lib/related-services";
import { imageForService, imageForSlug } from "@/lib/page-images";
import { HERO_PRELOAD_ROUTES } from "@/lib/hero-preload.generated";

// LCP preload for the hero image on service pages (SubServicePageTemplate). It must be emitted
// here, in a server component — react-dom preload() called from the client Hero never reaches the
// prerendered <head>, so the browser discovered the hero ~3s late (LCP load-delay). Scope is
// isServicePath(): exactly the fault/service pages that render a Hero image, using the SAME
// resolution the template does (imageForService ?? imageForSlug). Mirrors Hero's variantPaths +
// sizes so the preload matches the candidate the <picture> actually selects.
const HERO_SIZES = "(max-width: 414px) 360px, (max-width: 1068px) 800px, 640px";
function heroPreload(path: string) {
  // isServicePath() is broader than "rendered by SubServicePageTemplate": 40 service
  // routes use bespoke views that show their topic infographic instead, so preloading
  // the Hero candidate there fetched a ~200KB AVIF at high priority that the page never
  // rendered - it competed with the real LCP image and produced the browser's
  // "preloaded but not used" warning. HERO_PRELOAD_ROUTES is generated from the views
  // themselves, so the preload can no longer drift from what is displayed.
  // (audit 2026-09-23)
  if (!isServicePath(path) || !HERO_PRELOAD_ROUTES.has(path)) return;
  const img = imageForService(path) ?? imageForSlug(path);
  const m = img?.match(/^(.*)\.(jpe?g|png)$/i);
  if (!m) return;
  const base = m[1];
  preload(img!, {
    as: "image",
    type: "image/avif",
    imageSrcSet: `${base}-mobile.avif 360w, ${base}-tablet.avif 800w, ${base}-desktop.avif 1600w`,
    imageSizes: HERO_SIZES,
    fetchPriority: "high",
  });
}

export function PageSchema({ path }: { path: string }) {
  heroPreload(path);
  const nodes = schemaForPath(path);
  if (!nodes.length) return null;
  return (
    <>
      {nodes.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}

export default PageSchema;
