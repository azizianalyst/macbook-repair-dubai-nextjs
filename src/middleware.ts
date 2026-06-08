import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Hostinger's CDN otherwise caches HTML for a year (s-maxage=31536000) and never purges on
// redeploy → stale HTML keeps pointing at hashed /_next asset URLs the new build deleted →
// 404 CSS/JS → unstyled pages. Forcing HTML to revalidate makes the CDN re-check origin on
// each request, so a redeploy is picked up immediately. Hashed assets stay immutably cached
// (the matcher below excludes them).
export function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  return res;
}

export const config = {
  // HTML routes only — exclude /_next static + image optimizer, the metadata files, the API,
  // and any path ending in a file extension (assets).
  matcher: ["/((?!_next/static|_next/image|api/|favicon.ico|robots.txt|sitemap.xml|.*\\.[\\w]+$).*)"],
};
