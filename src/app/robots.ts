import type { MetadataRoute } from "next";

const SITE = "https://macbook-repair-dubai.ae";

// Automated robots.txt — served at /robots.txt. Policy:
// allow everything except /api & /admin, explicitly welcome search + AI crawlers,
// block SEO/backlink competitive-analysis crawlers, and point to the sitemap.
// NOTE: robots.txt is advisory — compliant bots obey it, but some scrapers ignore
// it. For hard enforcement, block these user-agents at the Hostinger firewall/WAF.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-Web", "PerplexityBot"], allow: "/" },
      // SEO / backlink / competitive-analysis crawlers — denied entirely so
      // competitors can't profile our keywords, backlinks or content. Does NOT
      // affect Google, Bing or the AI crawlers above (rankings are unaffected).
      {
        userAgent: [
          "AhrefsBot", "AhrefsSiteAudit",
          "SemrushBot", "SemrushBot-SA", "SplitSignalBot",
          "MJ12bot",
          "DotBot", "rogerbot",
          "BLEXBot",
          "DataForSeoBot",
          "Barkrowler",
          "SerpstatBot",
          "spbot", "SeobilityBot",
          "MegaIndex.ru", "LinkpadBot", "BacklinkCrawler",
          "Majestic-12", "MJ12Bot",
          "SiteCheckerBotCrawler", "ZoominfoBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
