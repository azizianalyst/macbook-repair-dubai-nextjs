"use client";
import { useMemo, useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, ChevronDown, Sparkles, Loader2 } from "lucide-react";
import { analyzeSeo, type SeoInput, type TestStatus, type TestGroup } from "@/lib/seo-analysis";
import AiOptimizeModal from "@/components/blocks/AiOptimizeModal";

const COLOR: Record<TestStatus, string> = { good: "#34d399", warn: "#fbbf24", bad: "#f87171" };
const ICON = { good: CheckCircle2, warn: AlertTriangle, bad: XCircle };
const GROUPS: TestGroup[] = ["Basic SEO", "Additional", "Title Readability", "Content Readability"];

// Rank Math–style on-page SEO panel: focus keyword + live 0–100 score + grouped checklist.
// When contentType + onApply are supplied, it also shows the "Optimize with AI" button + per-issue Fix.
export default function SeoAnalysisPanel({
  input, focusKeyword, onFocusKeyword, secondaryKeywords = [], onSecondaryKeywords, contentType, optimizeFields, onApply,
}: {
  input: SeoInput;
  focusKeyword: string;
  onFocusKeyword: (v: string) => void;
  secondaryKeywords?: string[];
  onSecondaryKeywords?: (v: string[]) => void;
  contentType?: "post" | "page" | "category";
  optimizeFields?: Record<string, unknown>;
  onApply?: (sel: Record<string, unknown>) => void;
}) {
  const result = useMemo(() => analyzeSeo({ ...input, focusKeyword, secondaryKeywords }), [input, focusKeyword, secondaryKeywords]);
  const [secInput, setSecInput] = useState("");
  const addSec = (v: string) => { const t = v.trim(); if (t && secondaryKeywords.length < 4 && !secondaryKeywords.includes(t)) onSecondaryKeywords?.([...secondaryKeywords, t]); setSecInput(""); };
  const [open, setOpen] = useState(true);
  const label = result.color === "good" ? "Good" : result.color === "warn" ? "Needs work" : "Poor";
  const counts = result.tests.reduce((a, t) => { a[t.status]++; return a; }, { good: 0, warn: 0, bad: 0 } as Record<TestStatus, number>);

  const aiEnabled = !!(contentType && onApply);
  const [aiBusy, setAiBusy] = useState(false);
  const [aiErr, setAiErr] = useState("");
  const [aiResult, setAiResult] = useState<Record<string, unknown> | null>(null);
  const [scope, setScope] = useState<string[] | undefined>(undefined);

  async function runOptimize(s?: string[]) {
    if (!aiEnabled) return;
    setAiBusy(true); setAiErr(""); setScope(s);
    try {
      const res = await fetch("/api/admin/ai/optimize/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: contentType, focusKeyword, secondaryKeywords, fields: optimizeFields || {}, html: input.html || "", slug: input.slug, scope: s }),
      });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const j = await res.json().catch(() => ({}));
      if (!res.ok || !j.ok) { setAiErr(j.error || "AI optimization failed."); return; }
      setAiResult(j);
    } catch { setAiErr("Could not reach the server."); }
    finally { setAiBusy(false); }
  }

  return (
    <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0">
          <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--border)" strokeWidth="3" />
            <circle cx="18" cy="18" r="15.5" fill="none" stroke={COLOR[result.color]} strokeWidth="3"
              strokeDasharray={`${(result.score / 100) * 97.4} 97.4`} strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[18px] font-bold leading-none" style={{ color: COLOR[result.color] }}>{result.score}</span>
            <span className="text-[8px] uppercase tracking-wide text-text-faint">/ 100</span>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="m-0 text-[14px] font-semibold text-text">SEO score: <span style={{ color: COLOR[result.color] }}>{label}</span></p>
          <p className="m-0 mt-0.5 text-[12px] text-text-muted">
            <span style={{ color: COLOR.good }}>{counts.good} good</span> · <span style={{ color: COLOR.warn }}>{counts.warn} ok</span> · <span style={{ color: COLOR.bad }}>{counts.bad} to fix</span>
          </p>
        </div>
        {aiEnabled && (
          <button onClick={() => runOptimize()} disabled={aiBusy} title="Improve this page's SEO with Claude" className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-2 text-[12px] font-semibold text-accent hover:bg-accent/25 disabled:opacity-50">
            {aiBusy && !scope ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />} Optimize with AI
          </button>
        )}
        <button onClick={() => setOpen((o) => !o)} className="rounded-md p-1.5 text-text-muted hover:bg-bg-alt" aria-label="Toggle checklist">
          <ChevronDown size={18} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
        </button>
      </div>

      {aiErr && <p className="m-0 mt-2 rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[12px] text-danger">{aiErr}</p>}

      <label className="mt-md block">
        <span className="mb-1 block text-[12px] text-text-faint">Focus keyword <span className="text-text-faint">— the phrase you want this to rank for</span></span>
        <input value={focusKeyword} onChange={(e) => onFocusKeyword(e.target.value)} placeholder="e.g. macbook battery replacement dubai"
          className="w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
      </label>
      {!result.hasKeyword && <p className="m-0 mt-1 text-[12px] text-[#fbbf24]">Set a focus keyword to unlock the full analysis.</p>}

      {/* Secondary keywords (up to 4) — Rank Math style. Checked in subheadings/content/alt. */}
      {onSecondaryKeywords && (
        <div className="mt-2">
          <span className="mb-1 block text-[12px] text-text-faint">Secondary keywords <span className="text-text-faint">— up to 4 more this URL should rank for</span></span>
          <div className="flex flex-wrap items-center gap-1.5">
            {secondaryKeywords.map((k, i) => (
              <span key={i} className="inline-flex items-center gap-1 rounded-full bg-accent/12 px-2 py-0.5 text-[12px] text-accent">
                {k}<button onClick={() => onSecondaryKeywords(secondaryKeywords.filter((_, j) => j !== i))} className="text-accent/70 hover:text-accent">×</button>
              </span>
            ))}
            {secondaryKeywords.length < 4 && (
              <input value={secInput} onChange={(e) => setSecInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSec(secInput); } }}
                onBlur={() => addSec(secInput)} placeholder="add keyword + Enter"
                className="min-w-[160px] flex-1 rounded-md border border-border bg-bg px-2 py-1 text-[12px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
            )}
          </div>
        </div>
      )}

      {open && (
        <div className="mt-md flex flex-col gap-3">
          {GROUPS.map((g) => {
            const tests = result.tests.filter((t) => t.group === g);
            if (!tests.length) return null;
            return (
              <div key={g}>
                <p className="m-0 mb-1 text-[11px] font-semibold uppercase tracking-wide text-text-faint">{g}</p>
                <ul className="m-0 flex list-none flex-col gap-1 p-0">
                  {tests.map((t) => {
                    const Icon = ICON[t.status];
                    return (
                      <li key={t.id} className="flex items-start gap-2 text-[13px]">
                        <Icon size={15} style={{ color: COLOR[t.status] }} className="mt-0.5 shrink-0" />
                        <span className="flex-1 text-text-muted">{t.label}{t.note && <span className="text-text-faint"> — {t.note}</span>}</span>
                        {aiEnabled && t.status !== "good" && (
                          <button onClick={() => runOptimize([t.id])} disabled={aiBusy} className="shrink-0 text-[11px] text-accent hover:underline disabled:opacity-50">Fix</button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {aiResult && (
        <AiOptimizeModal
          result={aiResult as never}
          current={optimizeFields || {}}
          busy={aiBusy}
          onApply={(selFields) => { onApply?.(selFields); setAiResult(null); }}
          onRegenerate={() => runOptimize(scope)}
          onClose={() => setAiResult(null)}
        />
      )}
    </div>
  );
}
