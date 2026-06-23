"use client";
import { useEffect, useCallback, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, FileText, DollarSign, BarChart3, TrendingUp, AlertCircle, CheckCircle2, Target, Loader2 } from "lucide-react";
import PricesAdmin from "@/components/blocks/PricesAdmin";
import KeywordTrackerDashboard from "@/components/blocks/KeywordTrackerDashboard";

const TABS = [
  { id: "keywords", label: "Keywords & Pages", Icon: FileText, description: "Every URL — set target keywords, review SEO scores, check featured images inline" },
  { id: "tracker", label: "Rank Tracker", Icon: BarChart3, description: "Track specific keywords over time with real GSC position data and discover new opportunities" },
] as const;
type TabId = (typeof TABS)[number]["id"];

type KwSummary = { total: number; withKeyword: number; priced: number; noImage: number; avgScore: number };
type TrackerSummary = { total: number; ranked: number; avgPosition: number | null; improved: number; top3: number; top10: number };

export default function KeywordHub() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab: TabId = (searchParams.get("tab") as TabId) || "keywords";

  const [kw, setKw] = useState<KwSummary | null>(null);
  const [tr, setTr] = useState<TrackerSummary | null>(null);
  const [loading, setLoading] = useState(true);

  const loadSummary = useCallback(async () => {
    setLoading(true);
    try {
      const [km, tk] = await Promise.all([
        fetch("/api/admin/keyword-map/", { cache: "no-store" }).then((r) => r.json()).catch(() => null),
        fetch("/api/admin/keyword-tracker/", { cache: "no-store" }).then((r) => r.json()).catch(() => null),
      ]);
      if (km?.rows) {
        const rows = km.rows as { hasKeyword: boolean; priceId: number | null; imageSet: boolean; score: number }[];
        setKw({
          total: rows.length,
          withKeyword: rows.filter((r) => r.hasKeyword).length,
          priced: rows.filter((r) => r.priceId != null).length,
          noImage: rows.filter((r) => !r.imageSet).length,
          avgScore: rows.length ? Math.round(rows.reduce((a, r) => a + r.score, 0) / rows.length) : 0,
        });
      }
      if (tk?.summary) setTr(tk.summary);
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { loadSummary(); }, [loadSummary]);

  function setTab(id: TabId) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", id);
    router.replace(`/admin/keywords?${params.toString()}`);
  }

  const activeTab = TABS.find((t) => t.id === tab) ?? TABS[0];

  return (
    <div className="mx-auto max-w-content">
      {/* Header */}
      <div className="mb-lg flex flex-wrap items-center gap-3">
        <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
        <h1 className="m-0 text-[24px] text-text">SEO Command — Keywords, Prices &amp; Rankings</h1>
      </div>

      {/* Combined summary report */}
      <div className="mb-lg rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
        <p className="m-0 mb-3 text-[12px] font-semibold uppercase tracking-wide text-text-faint">Overview</p>
        {loading ? (
          <div className="flex items-center gap-2 text-[13px] text-text-faint"><Loader2 size={14} className="animate-spin" /> Loading summary…</div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <SumCard label="Avg SEO Score" value={kw?.avgScore ?? "—"} color={kw ? (kw.avgScore >= 81 ? "#16a34a" : kw.avgScore >= 51 ? "#f59e0b" : "#ef4444") : "#94a3b8"} Icon={Target} />
            <SumCard label="Keywords Set" value={kw ? `${kw.withKeyword}/${kw.total}` : "—"} color={kw && kw.withKeyword === kw.total ? "#16a34a" : "#f59e0b"} Icon={FileText} />
            <SumCard label="Priced Pages" value={kw ? `${kw.priced}/${kw.total}` : "—"} color="#0ea5e9" Icon={DollarSign} />
            <SumCard label="No Image" value={kw?.noImage ?? "—"} color={kw?.noImage ? "#ef4444" : "#16a34a"} Icon={kw?.noImage ? AlertCircle : CheckCircle2} />
            <SumCard label="Avg Position" value={tr?.avgPosition ?? "—"} color="#8b5cf6" Icon={BarChart3} />
            <SumCard label="Top 10 Keywords" value={tr?.top10 ?? "—"} color="#16a34a" Icon={TrendingUp} />
          </div>
        )}

        {/* Quick health flags */}
        {!loading && kw && (
          <div className="mt-3 flex flex-wrap gap-2 border-t border-border pt-3">
            {kw.withKeyword < kw.total && (
              <button onClick={() => setTab("keywords")} className="inline-flex items-center gap-1.5 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-2.5 py-1 text-[12px] text-[#f59e0b] hover:bg-[#f59e0b]/20">
                <AlertCircle size={11} /> {kw.total - kw.withKeyword} pages missing keyword
              </button>
            )}
            {kw.noImage > 0 && (
              <button onClick={() => setTab("keywords")} className="inline-flex items-center gap-1.5 rounded-full border border-[#ef4444]/40 bg-[#ef4444]/10 px-2.5 py-1 text-[12px] text-[#ef4444] hover:bg-[#ef4444]/20">
                <AlertCircle size={11} /> {kw.noImage} pages no featured image
              </button>
            )}
            {tr && tr.improved > 0 && (
              <button onClick={() => setTab("tracker")} className="inline-flex items-center gap-1.5 rounded-full border border-[#16a34a]/40 bg-[#16a34a]/10 px-2.5 py-1 text-[12px] text-[#16a34a] hover:bg-[#16a34a]/20">
                <TrendingUp size={11} /> {tr.improved} keywords moved up
              </button>
            )}
            {kw.withKeyword === kw.total && !kw.noImage && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#16a34a]/40 bg-[#16a34a]/10 px-2.5 py-1 text-[12px] text-[#16a34a]">
                <CheckCircle2 size={11} /> All pages have keywords and images
              </span>
            )}
          </div>
        )}
      </div>

      {/* Tab bar */}
      <div className="mb-lg border-b border-border">
        <nav className="-mb-px flex gap-0.5">
          {TABS.map(({ id, label, Icon }) => {
            const isActive = id === tab;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`inline-flex items-center gap-2 border-b-2 px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-text-muted hover:border-border hover:text-text"
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            );
          })}
        </nav>
      </div>

      <p className="mb-md text-[13px] text-text-faint">{activeTab.description}</p>

      {/* Tab content — keywords uses the unified URL table; prices moved to the dedicated Prices hub. */}
      {tab === "keywords" && <PricesAdmin embedded />}
      {tab === "tracker" && <KeywordTrackerDashboard embedded />}
    </div>
  );
}

function SumCard({ label, value, color, Icon }: { label: string; value: React.ReactNode; color: string; Icon: React.ElementType }) {
  return (
    <div className="rounded-md border border-border bg-bg p-3 text-center">
      <p className="m-0 mb-1 flex items-center justify-center gap-1 text-[11px] uppercase tracking-wide text-text-faint"><Icon size={12} style={{ color }} /> {label}</p>
      <p className="m-0 text-[22px] font-bold" style={{ color }}>{value}</p>
    </div>
  );
}
