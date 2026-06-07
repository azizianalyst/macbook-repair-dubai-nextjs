// Server component: renders route-appropriate JSON-LD into the STATIC HTML.
// Rendered from each route's page.tsx (a server component) BEFORE the client view, so the
// schema is present in the prerendered HTML that Google indexes. Returns nothing for routes
// that supply their own schema in-view (home, /reviews) or that are not service pages.
import { schemaForPath } from "@/lib/page-schema";

export function PageSchema({ path }: { path: string }) {
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
