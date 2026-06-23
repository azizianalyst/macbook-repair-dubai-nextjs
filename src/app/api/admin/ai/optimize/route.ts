import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-auth";
import { readSecret } from "@/lib/seo-store";
import { analyzeSeo } from "@/lib/seo-analysis";
import { renderMarkdown } from "@/lib/markdown";
import { buildOptimizePrompt, violatesRules, type OptimizeType } from "@/lib/ai/seo-sops";

// Owner-only AI SEO optimizer. Sends the page + focus keyword + SOP checklist to Claude and returns a
// PROPOSAL (old→new) plus before/after scores. It NEVER writes anything — the editor applies the
// proposal into the form and the existing save routes persist on the owner's explicit Save.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };
const MODEL = process.env.AI_SEO_MODEL || "claude-opus-4-8";

const BodySchema = z.object({
  type: z.enum(["post", "page", "category"]),
  focusKeyword: z.string().optional(),
  secondaryKeywords: z.array(z.string()).optional(),
  fields: z.record(z.string(), z.unknown()),
  html: z.string().default(""),
  slug: z.string().optional(),
  scope: z.array(z.string()).optional(),
});

const str = (v: unknown) => (typeof v === "string" ? v : "");

// Extract a JSON object from the model text (tolerant of stray fences/prose).
function parseJson(text: string): Record<string, unknown> | null {
  let t = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a >= 0 && b > a) t = t.slice(a, b + 1);
  try { return JSON.parse(t); } catch { return null; }
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  // Env var wins; otherwise use the key connected via the dashboard (Site Settings → Connect Claude AI).
  const apiKey = process.env.ANTHROPIC_API_KEY || (await readSecret("anthropicApiKey"));
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "AI not connected — paste your Anthropic API key in Site Settings → Connect Claude AI." }, { status: 503, headers: NOINDEX });
  }
  const parsed = BodySchema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "invalid request" }, { status: 400, headers: NOINDEX });
  const input = parsed.data;
  const type = input.type as OptimizeType;
  const fields = input.fields;

  const before = analyzeSeo({
    focusKeyword: input.focusKeyword, secondaryKeywords: input.secondaryKeywords,
    seoTitle: str(fields.seoTitle), metaDescription: str(fields.seoDescription), slug: input.slug, html: input.html,
  });

  const { system, user } = buildOptimizePrompt({ type, focusKeyword: input.focusKeyword, secondaryKeywords: input.secondaryKeywords, fields, html: input.html, slug: input.slug, failing: before.tests, scope: input.scope });

  let raw = "";
  let tokensUsed = 0;
  try {
    const client = new Anthropic({ apiKey });
    const msg = await client.messages.create({
      model: MODEL,
      max_tokens: 8000,
      system,
      messages: [{ role: "user", content: user }],
    });
    raw = msg.content.map((b) => (b.type === "text" ? b.text : "")).join("");
    tokensUsed = (msg.usage?.input_tokens || 0) + (msg.usage?.output_tokens || 0);
  } catch (err) {
    const m = err instanceof Error ? err.message : "AI request failed";
    return NextResponse.json({ ok: false, error: `AI request failed: ${m.slice(0, 200)}` }, { status: 502, headers: NOINDEX });
  }

  const proposal = parseJson(raw);
  if (!proposal) return NextResponse.json({ ok: false, error: "AI returned an unreadable response — try again." }, { status: 502, headers: NOINDEX });

  // Guardrail: strip any field that violates the hard business rules; never trust the model.
  const notes: string[] = [];
  for (const k of Object.keys(proposal)) {
    const v = proposal[k];
    if (typeof v === "string" && violatesRules(v)) { delete proposal[k]; notes.push(`Removed "${k}" (broke a brand/price rule).`); }
    if (Array.isArray(v)) {
      proposal[k] = v.filter((item) => {
        const blob = typeof item === "string" ? item : JSON.stringify(item);
        if (violatesRules(blob)) { notes.push(`Dropped an item in "${k}" (brand/price rule).`); return false; }
        return true;
      });
    }
  }
  // Clamp lengths the schema can't (keep titles/descriptions in range).
  if (typeof proposal.seoTitle === "string") proposal.seoTitle = (proposal.seoTitle as string).slice(0, 70);
  if (typeof proposal.seoDescription === "string") proposal.seoDescription = (proposal.seoDescription as string).slice(0, 175);

  // After-score: apply proposed values over current; re-render body for posts.
  const merged = (k: string) => (proposal[k] != null && proposal[k] !== "" ? proposal[k] : fields[k]);
  const afterHtml = type === "post" && typeof proposal.body === "string" && proposal.body.trim() ? renderMarkdown(proposal.body) : input.html;
  const after = analyzeSeo({
    focusKeyword: str(merged("focusKeyword")) || input.focusKeyword,
    secondaryKeywords: (Array.isArray(proposal.secondaryKeywords) ? proposal.secondaryKeywords as string[] : input.secondaryKeywords),
    seoTitle: str(merged("seoTitle")), metaDescription: str(merged("seoDescription")),
    slug: input.slug, html: afterHtml,
  });

  return NextResponse.json({ ok: true, before, after, proposal, tokensUsed, model: MODEL, notes }, { headers: NOINDEX });
}
