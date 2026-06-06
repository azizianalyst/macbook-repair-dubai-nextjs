"use client";
// Ergonomic wrapper around useSeo so pages can write <SEOHead .../> instead of
// calling the hook directly. Renders null - useSeo is a side-effect hook that
// stamps <head> tags + JSON-LD (and records SSR head during build-time render).
//
// 100% compatible with the existing useSeo signature: props map straight onto
// buildSeo's SeoInput (title, description, path, ogImage, ogImageAlt, noindex)
// plus the optional preloadImage spec and the schemas array.
import { useSeo } from "@/hooks/use-seo";

type PreloadImage = {
  href: string;
  type?: "image/avif" | "image/webp" | "image/jpeg" | "image/png";
  imagesrcset?: string;
  imagesizes?: string;
};

type SEOHeadProps = {
  title: string;
  description: string;
  /** Path-only canonical, e.g. "/macbook-screen-repair-dubai". Either prop works. */
  path?: string;
  /** Alias for `path`. If a full URL is passed, only the pathname is used. */
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  /** "noindex" (or a string containing it) sets noindex,nofollow. Or pass noindex directly. */
  robots?: string;
  noindex?: boolean;
  preloadImage?: PreloadImage;
  schemas?: unknown[];
};

// Reduce a path-or-URL into a leading-slash path useSeo/buildSeo expects.
function toPath(value: string): string {
  if (/^https?:\/\//i.test(value)) {
    try {
      const u = new URL(value);
      return u.pathname || "/";
    } catch {
      return value;
    }
  }
  return value.startsWith("/") ? value : `/${value}`;
}

export function SEOHead({
  title,
  description,
  path,
  canonical,
  ogImage,
  ogImageAlt,
  robots,
  noindex,
  preloadImage,
  schemas = [],
}: SEOHeadProps) {
  const resolvedPath = toPath(path ?? canonical ?? "/");
  const isNoindex = noindex ?? (robots ? /noindex/i.test(robots) : false);

  useSeo(
    {
      title,
      description,
      path: resolvedPath,
      ogImage,
      ogImageAlt,
      noindex: isNoindex,
      preloadImage,
    },
    schemas,
  );

  return null;
}

export default SEOHead;
