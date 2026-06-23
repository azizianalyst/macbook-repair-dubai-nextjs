// SOP prompt for the AI SEO optimizer. The checklist mirrors src/lib/seo-analysis.ts (the same tests
// the score panel runs) so Claude optimizes exactly what we measure. The HARD RULES encode the
// business's non-negotiables (independent — never "Apple Authorized", AED prices, Dubai geo, etc.).
import type { SeoTest } from "@/lib/seo-analysis";

export type OptimizeType = "post" | "page" | "category";

export type OptimizeInput = {
  type: OptimizeType;
  focusKeyword?: string;
  secondaryKeywords?: string[];
  fields: Record<string, unknown>; // current editable values (seoTitle, seoDescription, body, excerpt, quickAnswer, faqs, ogTitle, ogDescription, name, eyebrow, blurb, intro …)
  html: string;                    // rendered post HTML / live page HTML / hub copy
  slug?: string;
  failing?: SeoTest[];             // current failing/warning checks (so the model targets them)
  scope?: string[];                // optional single-test ids for a surgical "Fix"
};

const CHECKLIST = `SEO CHECKLIST (optimise the content to PASS every applicable item — these are exactly what the score measures):
BASIC SEO
- Focus keyword in the SEO title
- Focus keyword in the meta description
- Focus keyword in the URL slug
- Focus keyword within the first ~120 characters of the body
- Focus keyword appears in the body
- Content length 600–1000+ words (longer is better, never padded)
ADDITIONAL
- Focus keyword in at least one H2/H3 subheading
- Focus keyword in at least one image alt text
- Keyword density 0.75–2.5% (NEVER keyword-stuff)
- URL slug ≤ 75 characters
- At least one internal link to a relevant service/area page (e.g. /macbook-screen-repair-dubai)
- At least one external link to a reputable source (e.g. Apple support)
TITLE READABILITY
- SEO title ≤ 60 characters
- Focus keyword at the START of the title
- Title contains a number
- Title contains a power word (e.g. fast, expert, same-day, trusted, guaranteed, affordable, best, proven)
CONTENT READABILITY
- At least 4 subheadings (H2–H6)
- No paragraph longer than ~120 words
- Uses media (suggest descriptive alt text; never invent image files)`;

const HARD_RULES = `HARD BUSINESS RULES (NON-NEGOTIABLE — violating any of these is forbidden):
- We are an INDEPENDENT Apple repair specialist. NEVER write "Apple Authorized", "Authorised Service Center", or imply any Apple partnership/affiliation.
- All prices in UAE Dirhams with thousands separators, e.g. "AED 1,050". Never another currency.
- Geography: Dubai, UAE (workshop in Concord Tower, Dubai Media City). Brand: "MacBook Repair Dubai" (Azizi Technologies).
- NEVER invent facts: prices, chip/model years, device eras, warranty terms. Battery warranty is 3 months. Do not fabricate numbers or claims.
- Tone: clear, factual, helpful — no hype, no false urgency, no fake scarcity.`;

const OUTPUT_CONTRACT = `OUTPUT: respond with ONLY a single JSON object (no markdown, no code fences, no commentary). Use this shape; set a field to null to leave it UNCHANGED. Only fill fields relevant to the content type.
{
  "seoTitle": string|null,            // ≤60 chars, keyword at start, include a number + power word
  "seoDescription": string|null,      // ≤160 chars, includes the focus keyword
  "focusKeyword": string|null,        // PRIMARY keyword — suggest one if empty, else echo it
  "secondaryKeywords": string[]|null, // up to 4 related secondary keywords to also target (or null)
  "excerpt": string|null,             // posts: 1–2 sentence summary
  "quickAnswer": string|null,         // posts: ≤40 words, answer-first (for AI Overviews)
  "body": string|null,                // POSTS ONLY: full improved MARKDOWN body. PAGES/CATEGORIES: null
  "ogTitle": string|null,             // only if currently blank
  "ogDescription": string|null,       // only if currently blank
  "faqs": [{"q":string,"a":string}]|null,   // posts: 2–3 helpful Q&A derived from the content
  "name": string|null, "eyebrow": string|null, "blurb": string|null, "intro": string|null,  // CATEGORIES ONLY
  "bodySuggestions": [string]|null    // PAGES ONLY: concrete edits the owner should make to the page body by hand
}`;

export function buildOptimizePrompt(input: OptimizeInput): { system: string; user: string } {
  const perType =
    input.type === "post"
      ? `CONTENT TYPE: blog post (markdown). You MAY rewrite the body markdown to satisfy the checklist (keep all facts accurate, keep existing internal links, improve structure with ## subheadings). Propose 2–3 FAQs.`
      : input.type === "page"
        ? `CONTENT TYPE: service/landing PAGE with a hand-built (non-editable) body. Do NOT return "body". Optimise title/meta/focusKeyword/og only, and return "bodySuggestions": concrete, specific edits the owner should make to the page text by hand (reference the focus keyword + the exact place to add it).`
        : `CONTENT TYPE: blog category hub. Optimise "name", "eyebrow", "blurb", "intro" only. Do NOT return "body". The intro is an SEO paragraph for the hub.`;

  const system = [
    `You are an expert on-page SEO editor for an independent Apple-repair business in Dubai. Improve the given content to rank for its focus keyword while staying 100% truthful and on-brand.`,
    HARD_RULES, CHECKLIST, perType, OUTPUT_CONTRACT,
  ].join("\n\n");

  const failing = (input.failing || []).filter((t) => t.status !== "good").map((t) => `- ${t.label}${t.note ? ` (${t.note})` : ""}`).join("\n");
  const scopeNote = input.scope && input.scope.length ? `\nFIX ONLY these checks (leave everything else unchanged / null): ${input.scope.join(", ")}` : "";
  const html = (input.html || "").slice(0, 7000); // cap tokens

  const user = [
    `FOCUS KEYWORD: ${input.focusKeyword || "(none set — suggest the best one for this content)"}`,
    `URL SLUG: ${input.slug || "(n/a)"}`,
    `CURRENT FIELDS (JSON):\n${JSON.stringify(input.fields, null, 2).slice(0, 6000)}`,
    failing ? `CURRENTLY FAILING/WEAK CHECKS:\n${failing}` : "",
    `CURRENT RENDERED CONTENT (for context):\n${html}`,
    scopeNote,
    `Return the JSON object now.`,
  ].filter(Boolean).join("\n\n");

  return { system, user };
}

// Forbidden patterns — server-side guardrail (never trust the model output).
export const FORBIDDEN = [
  /apple\s*authoriz|apple\s*authoris|authorised\s*service\s*cent|authorized\s*service\s*cent/i,
  /\b(USD|EUR|GBP|\$|€|£|₹|INR|SAR|PKR)\s?\d/i,
  /official\s+apple\s+(partner|reseller|store)/i,
];
export function violatesRules(text: string): boolean {
  return typeof text === "string" && FORBIDDEN.some((re) => re.test(text));
}
