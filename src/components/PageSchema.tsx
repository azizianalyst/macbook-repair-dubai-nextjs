// Server component: renders route-appropriate JSON-LD into the STATIC HTML.
// Rendered from each route's page.tsx (a server component) BEFORE the client view, so the
// schema is present in the prerendered HTML that Google indexes. Returns nothing for routes
// that supply their own schema in-view (home, /reviews) or that are not service pages.
import { preload } from "react-dom";
import { schemaForPath } from "@/lib/page-schema";
import { isServicePath } from "@/lib/related-services";
import { imageForService, imageForSlug } from "@/lib/page-images";

// LCP preload for the hero image on service pages (SubServicePageTemplate). It must be emitted
// here, in a server component — react-dom preload() called from the client Hero never reaches the
// prerendered <head>, so the browser discovered the hero ~3s late (LCP load-delay). Scope is
// isServicePath(): exactly the fault/service pages that render a Hero image, using the SAME
// resolution the template does (imageForService ?? imageForSlug). Mirrors Hero's variantPaths +
// sizes so the preload matches the candidate the <picture> actually selects.
const HERO_SIZES = "(max-width: 414px) 360px, (max-width: 1068px) 800px, 640px";
function heroPreload(path: string) {
  if (!isServicePath(path)) return;
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
