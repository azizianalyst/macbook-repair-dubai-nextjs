"use client";
import { useState } from "react";
import { X, Sparkles, RefreshCw, Check, AlertTriangle } from "lucide-react";

type Faq = { q: string; a: string };
type Proposal = Record<string, unknown> & { body?: string; faqs?: Faq[]; bodySuggestions?: string[] };
type Result = { before: { score: number; color: string }; after: { score: number; color: string }; proposal: Proposal; tokensUsed: number; model: string; notes?: string[] };

const COLOR: Record<string, string> = { good: "#34d399", warn: "#fbbf24", bad: "#f87171" };
const FIELD_LABELS: Record<string, string> = {
  seoTitle: "SEO title", seoDescription: "Meta description", focusKeyword: "Focus keyword", excerpt: "Excerpt",
  quickAnswer: "Quick answer", ogTitle: "OG title", ogDescription: "OG description",
  name: "Category name", eyebrow: "Eyebrow", blurb: "Blurb", intro: "Intro",
};
const TEXT_FIELDS = Object.keys(FIELD_LABELS);

export default function AiOptimizeModal({
  result, current, busy, onApply, onRegenerate, onClose,
}: {
  result: Result;
  current: Record<string, unknown>;
  busy: boolean;
  onApply: (sel: Record<string, unknown>) => void;
  onRegenerate: () => void;
  onClose: () => void;
}) {
  const p = result.proposal;
  // Which proposed fields exist (non-empty), excluding the read-only suggestions list.
  const changed = TEXT_FIELDS.filter((k) => typeof p[k] === "string" && (p[k] as string).trim() && p[k] !== current[k]);
  const hasBody = typeof p.body === "string" && p.body.trim() && p.body !== current.body;
  const hasFaqs = Array.isArray(p.faqs) && p.faqs.length > 0;
  const suggestions = Array.isArray(p.bodySuggestions) ? p.bodySuggestions : [];

  const allKeys = [...changed, ...(hasBody ? ["body"] : []), ...(hasFaqs ? ["faqs"] : [])];
  const [sel, setSel] = useState<Set<string>>(new Set(allKeys));
  const toggle = (k: string) => setSel((s) => { const n = new Set(s); n.has(k) ? n.delete(k) : n.add(k); return n; });

  const cost = (result.tokensUsed / 1_000_000 * 15).toFixed(3); // rough Opus blended est.
  const nothing = allKeys.length === 0 && suggestions.length === 0;

  function apply() {
    const out: Record<string, unknown> = {};
    for (const k of sel) out[k] = p[k];
    onApply(out);
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-border bg-bg shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h3 className="m-0 flex items-center gap-1.5 text-[15px] font-semibold text-text"><Sparkles size={16} className="text-accent" /> AI optimization</h3>
          <button onClick={onClose} className="rounded-md p-1 text-text-muted hover:bg-bg-alt"><X size={18} /></button>
        </div>

        <div className="flex items-center gap-3 border-b border-border bg-bg-alt px-4 py-3">
          <span className="text-[13px] text-text-muted">Projected score</span>
          <span className="text-[15px] font-bold" style={{ color: COLOR[result.before.color] }}>{result.before.score}</span>
          <span className="text-text-faint">→</span>
          <span className="text-[18px] font-bold" style={{ color: COLOR[result.after.color] }}>{result.after.score}</span>
          <span className="ml-auto text-[11px] text-text-faint">{result.tokensUsed.toLocaleString()} tokens · ~${cost}</span>
        </div>

        <div className="overflow-y-auto p-4">
          {result.notes && result.notes.length > 0 && (
            <p className="m-0 mb-3 flex items-start gap-1.5 rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-2 text-[12px] text-[#fbbf24]"><AlertTriangle size={13} className="mt-0.5" /> {result.notes.join(" ")}</p>
          )}
          {nothing && <p className="m-0 text-[13px] text-text-muted">No changes proposed — this content already looks well-optimized. Try setting a focus keyword first.</p>}

          <p className="m-0 mb-2 text-[12px] text-text-faint">Tick what to apply. Nothing is saved until you Apply, then Save the post/page yourself.</p>
          <div className="flex flex-col gap-2">
            {changed.map((k) => (
              <label key={k} className="flex cursor-pointer items-start gap-2 rounded-md border border-border p-2">
                <input type="checkbox" checked={sel.has(k)} onChange={() => toggle(k)} className="mt-1" />
                <span className="min-w-0 flex-1">
                  <span className="text-[12px] font-semibold text-text">{FIELD_LABELS[k]}</span>
                  <span className="mt-0.5 block text-[12px] text-text-faint line-through">{String(current[k] || "(empty)").slice(0, 160)}</span>
                  <span className="mt-0.5 block text-[13px] text-text">{String(p[k]).slice(0, 200)}</span>
                </span>
              </label>
            ))}

            {hasBody && (
              <label className="flex cursor-pointer items-start gap-2 rounded-md border border-border p-2">
                <input type="checkbox" checked={sel.has("body")} onChange={() => toggle("body")} className="mt-1" />
                <span className="min-w-0 flex-1">
                  <span className="text-[12px] font-semibold text-text">Body (rewritten markdown)</span>
                  <span className="mt-1 block max-h-40 overflow-y-auto whitespace-pre-wrap rounded bg-bg-alt p-2 font-mono text-[11px] text-text-muted">{String(p.body).slice(0, 1200)}{String(p.body).length > 1200 ? "…" : ""}</span>
                </span>
              </label>
            )}

            {hasFaqs && (
              <label className="flex cursor-pointer items-start gap-2 rounded-md border border-border p-2">
                <input type="checkbox" checked={sel.has("faqs")} onChange={() => toggle("faqs")} className="mt-1" />
                <span className="min-w-0 flex-1">
                  <span className="text-[12px] font-semibold text-text">FAQs ({(p.faqs as Faq[]).length} proposed)</span>
                  {(p.faqs as Faq[]).map((f, i) => <span key={i} className="mt-1 block text-[12px] text-text-muted"><strong className="text-text">{f.q}</strong> — {f.a.slice(0, 120)}</span>)}
                </span>
              </label>
            )}
          </div>

          {suggestions.length > 0 && (
            <div className="mt-3 rounded-md border border-border bg-bg-card p-3">
              <p className="m-0 mb-1 text-[12px] font-semibold text-text">Suggestions for the page body (edit the page yourself):</p>
              <ul className="m-0 list-disc pl-5 text-[12px] text-text-muted">{suggestions.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
          <span className="text-[11px] text-text-faint">{result.model} · AI-assisted — review before publishing</span>
          <div className="flex items-center gap-2">
            <button onClick={onRegenerate} disabled={busy} className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-text-muted hover:text-text disabled:opacity-50"><RefreshCw size={14} /> Regenerate</button>
            <button onClick={apply} disabled={busy || sel.size === 0} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50"><Check size={14} /> Apply selected</button>
          </div>
        </div>
      </div>
    </div>
  );
}
