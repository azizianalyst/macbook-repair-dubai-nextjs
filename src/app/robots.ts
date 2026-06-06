import type { MetadataRoute } from "next";

const SITE = "https://macbook-repair-dubai.ae";

// Automated robots.txt — served at /robots.txt. Mirrors the old policy:
// allow everything except /api, explicitly welcome AI crawlers, and point to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-Web", "PerplexityBot"], allow: "/" },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
