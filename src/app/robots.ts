import type { MetadataRoute } from "next";
import { SITE_SETTINGS } from "@/content/settings.generated";

const SITE = "https://macbook-repair-dubai.ae";

// Automated robots.txt — served at /robots.txt. Policy:
// allow everything except /api & /admin, explicitly welcome search + AI crawlers,
// block SEO/backlink competitive-analysis crawlers, and point to the sitemap.
// NOTE: robots.txt is advisory — compliant bots obey it, but some scrapers ignore
// it. For hard enforcement, block these user-agents at the Hostinger firewall/WAF.
export default function robots(): MetadataRoute.Robots {
  // Emergency kill-switch (admin Site Settings): deindex the whole site.
  if (SITE_SETTINGS.siteNoindex) {
    return { rules: [{ userAgent: "*", disallow: "/" }], sitemap: `${SITE}/sitemap.xml`, host: SITE };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
      // AI search / answer engines — explicitly welcomed so we stay eligible for citations in
      // ChatGPT, Claude, Perplexity, Gemini, Copilot, Apple Intelligence & AI Overviews. The "*"
      // rule already allows them; naming them is unambiguous AEO signalling. (Ref: seo-aeo-geo.)
      // AI search / answer engines — explicitly welcomed so we stay eligible for citations in
      // ChatGPT, Claude, Perplexity, Gemini, Copilot, Apple Intelligence & AI Overviews.
      {
        userAgent: [
          "GPTBot", "OAI-SearchBot", "ChatGPT-User",
          "ClaudeBot", "Claude-Web", "Claude-SearchBot", "Claude-User",
          "PerplexityBot", "Perplexity-User",
          "Google-Extended",
          "Bingbot",
          "Applebot", "Applebot-Extended",
          "Amazonbot",
          "Meta-ExternalAgent",
          "DuckAssistBot",
          "YouBot",
        ],
        allow: "/",
      },
      // SEO / backlink / competitive-analysis crawlers — denied entirely so
      // competitors can't profile our keywords, backlinks or content. Does NOT
      // affect Google, Bing or the AI crawlers above (rankings are unaffected).
      {
        userAgent: [
          // Ahrefs
          "AhrefsBot", "AhrefsSiteAudit",
          // Semrush
          "SemrushBot", "SemrushBot-SA", "SemrushBot-CT", "SplitSignalBot",
          // Moz
          "DotBot", "rogerbot",
          // Majestic
          "MJ12bot", "MJ12Bot", "Majestic-12",
          // BLEXBot / LinkResearchTools
          "BLEXBot",
          // DataForSEO
          "DataForSeoBot",
          // Serpstat
          "SerpstatBot",
          // SE Ranking / Seobility
          "spbot", "SeobilityBot",
          // Barkrowler (Babbar)
          "Barkrowler",
          // Backlink crawlers
          "MegaIndex.ru", "LinkpadBot", "BacklinkCrawler",
          // Misc competitive intelligence
          "SiteCheckerBotCrawler", "ZoominfoBot",
          // Screaming Frog (desktop audit tool)
          "Screaming Frog SEO Spider",
          // Sitebulb
          "Sitebulb",
          // ContentKing
          "ContentKing",
          // CognitiveSEO
          "cognitiveseo",
          // Netcraft
          "NetcraftSurveyAgent",
          // PetalBot (Huawei — indexes for competitor tools)
          "PetalBot",
          // Exabot
          "Exabot",
          // GrapeshotCrawler (Oracle)
          "GrapeshotCrawler",
          // Generic scrapers
          "python-requests", "python-urllib", "Go-http-client",
          "scrapy", "curl", "wget",
          "Scrapy", "libwww-perl",
          // Headless browser scrapers
          "PhantomJS", "HeadlessChrome",
          // ByteDance AI training + commercial data extraction — blocked (competitive risk,
          // not public AI citation channels). CCBot / cohere-ai / magpie-crawler are
          // intentionally NOT listed here — we want them to index us for AI training data.
          "Bytespider",     // ByteDance / TikTok AI training (not a citation channel for us)
          "Diffbot",        // commercial data extraction service
          // Website cloner tools — used to mirror/copy entire sites
          "HTTrack", "WebCopier", "SiteSnagger", "TeleportPro", "WebReaper",
          "SiteRipper", "PageDownloader",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
