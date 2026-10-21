import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Internal hrefs in the site's canonical trailing-slash form (next.config trailingSlash:true).
// Next <Link> adds the slash itself, but plain <a href={…}> does not, and every slash-less
// internal link costs a 308 hop (Semrush flagged 123; the build had 384 on 71 pages).
// Leaves external, protocol, hash-only, file (/x.txt) and /api links untouched.
export function withSlash<T extends string | undefined | null>(href: T): T {
  if (typeof href !== "string" || !href.startsWith("/") || href.startsWith("//")) return href;
  const cut = href.search(/[?#]/);
  const path = cut === -1 ? href : href.slice(0, cut);
  const rest = cut === -1 ? "" : href.slice(cut);
  if (path === "/" || path.endsWith("/") || path.startsWith("/api/") || /\.[a-z0-9]{2,5}$/i.test(path)) return href;
  return `${path}/${rest}` as T;
}
