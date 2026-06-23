"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, RefreshCw, Plus, Trash2, ExternalLink, Heart, Star, ArrowLeft, Search, BarChart3, TrendingUp, Award, Trophy, Medal, Sparkles, CheckCircle2 } from "lucide-react";

type Row = {
  keyword: string; addedAt: string;
  latest: number | null; best: number | null; first: number | null; change: number | null;
  impressions: number; clicks: number; url: string | null;
};
type Summary = { total: number; ranked: number; avgPosition: number | null; improved: number; top3: number; top10: number; top30: number; top100: number };
type Resp = { ok: boolean; configured?: boolean; source?: string; error?: string; summary?: Summary; rows?: Row[] };
type DiscoverRow = { keyword: string; impressions: number; clicks: number; position: number };

export default function KeywordTrackerDashboard({ embedded }: { embedded?: boolean }) {
  const [data, setData] = useState<Resp | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [q, setQ] = useState("");
  const [add, setAdd] = useState("");
  const [err, setErr] = useState("");
  const [discovering, setDiscovering] = useState(false);
  const [discoverRows, setDiscoverRows] = useState<DiscoverRow[] | null>(null);
  const [discoverErr, setDiscoverErr] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [addingSelected, setAddingSelected] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/keyword-tracker/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d: Resp = await res.json();
      setData(d);
      if (!d.ok && d.error) setErr(d.error);
    } catch { setErr("Could not load the tracker."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  async function addKeywords() {
    const list = add.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
    if (!list.length) return;
    setBusy(true);
    try {
      const res = await fetch("/api/admin/keyword-tracker/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ keywords: list }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (res.ok) { setAdd(""); await load(); }
    } finally { setBusy(false); }
  }
  async function discover() {
    setDiscovering(true); setDiscoverErr(""); setDiscoverRows(null); setSelected(new Set());
    try {
      const res = await fetch("/api/admin/keyword-tracker/discover/?limit=100", { cache: "no-store" });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const d = await res.json();
      if (!d.ok) setDiscoverErr(d.error || "Failed to discover keywords.");
      else setDiscoverRows(d.rows ?? []);
    } catch { setDiscoverErr("Could not fetch keyword suggestions."); }
    finally { setDiscovering(false); }
  }

  function toggleSelect(kw: string) {
    setSelected((prev) => { const s = new Set(prev); s.has(kw) ? s.delete(kw) : s.add(kw); return s; });
  }
  function selectAll() {
    if (!discoverRows) return;
    setSelected(selected.size === discoverRows.length ? new Set() : new Set(discoverRows.map((r) => r.keyword)));
  }

  async function addSelected() {
    if (!selected.size) return;
    setAddingSelected(true);
    try {
      const res = await fetch("/api/admin/keyword-tracker/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ keywords: [...selected] }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (res.ok) {
        // Remove added from discover list
        setDiscoverRows((prev) => prev?.filter((r) => !selected.has(r.keyword)) ?? null);
        setSelected(new Set());
        await load();
      }
    } finally { setAddingSelected(false); }
  }

  async function addKeywordDirect(keyword: string) {
    await fetch("/api/admin/keyword-tracker/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ keywords: [keyword] }) });
    setDiscoverRows((prev) => prev?.filter((r) => r.keyword !== keyword) ?? null);
    setSelected((prev) => { const s = new Set(prev); s.delete(keyword); return s; });
    load();
  }

  async function remove(keyword: string) {
    if (!confirm(`Stop tracking "${keyword}"?`)) return;
    const res = await fetch(`/api/admin/keyword-tracker/?keyword=${encodeURIComponent(keyword)}`, { method: "DELETE" });
    if (res.ok) load();
  }

  const rows = useMemo(() => {
    const rs = data?.rows ?? [];
    const n = q.trim().toLowerCase();
    const f = n ? rs.filter((r) => r.keyword.toLowerCase().includes(n)) : rs;
    // ranked first (by position asc), then unranked
    return f.slice().sort((a, b) => (a.latest == null ? 1 : b.latest == null ? -1 : a.latest - b.latest));
  }, [data, q]);

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;
  const s = data?.summary;

  return (
    <div className="mx-auto max-w-content">
      {!embedded && (
        <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
          <div className="flex items-center gap-3">
            <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
            <h1 className="m-0 text-[24px] text-text">Keyword Tracker</h1>
          </div>
          <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
        </div>
      )}
      {embedded && (
        <div className="mb-md flex justify-end">
          <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
        </div>
      )}

      {data && !data.configured && (
        <p className="mb-md rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-2 text-[13px] text-[#fbbf24]">Google Search Console isn&apos;t connected — positions show from the latest stored snapshot only. Connect GSC for live data.</p>
      )}
      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}

      {/* Summary cards */}
      <p className="m-0 mb-2 text-center text-[15px] font-semibold uppercase tracking-wide text-text-faint">Summary</p>
      <div className="mb-lg grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        <Card icon={<BarChart3 size={14} />} label="Avg Position" value={s?.avgPosition ?? "—"} sub={`${s?.ranked ?? 0} ranking`} big />
        <Card icon={<TrendingUp size={14} />} label="Improved" value={`${s?.improved ?? 0}/${s?.total ?? 0}`} />
        <Card icon={<Heart size={14} />} label="Top 3" value={`${s?.top3 ?? 0}/${s?.total ?? 0}`} good />
        <Card icon={<Award size={14} />} label="Top 10" value={`${s?.top10 ?? 0}/${s?.total ?? 0}`} good />
        <Card icon={<Trophy size={14} />} label="Top 30" value={`${s?.top30 ?? 0}/${s?.total ?? 0}`} good />
        <Card icon={<Medal size={14} />} label="Top 100" value={`${s?.top100 ?? 0}/${s?.total ?? 0}`} good />
      </div>

      {/* Add + search */}
      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="flex flex-1 min-w-[260px] items-center gap-2">
          <input value={add} onChange={(e) => setAdd(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") addKeywords(); }}
            placeholder="Add keyword(s) — comma or newline separated…" className="flex-1 rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
          <button onClick={addKeywords} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} Add</button>
        </div>
        <div className="relative min-w-[200px] max-w-xs flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search keywords…" className="w-full rounded-md border border-border bg-bg-card pl-9 pr-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        </div>
      </div>

      {/* Discover panel */}
      <div className="mb-md rounded-md border border-border bg-bg-card">
        <div className="flex items-center justify-between gap-3 px-3 py-2">
          <div>
            <p className="m-0 text-[13px] font-semibold text-text">Discover New Keywords</p>
            <p className="m-0 text-[12px] text-text-faint">Top queries people are already searching that you&apos;re not tracking yet (from Google Search Console)</p>
          </div>
          <button onClick={discover} disabled={discovering} className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-[13px] font-semibold text-white disabled:opacity-50">
            {discovering ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />} Discover
          </button>
        </div>
        {discoverErr && <p className="mx-3 mb-2 rounded border border-danger/40 bg-danger/10 px-3 py-1.5 text-[13px] text-danger">{discoverErr}</p>}
        {discoverRows !== null && (
          <div className="border-t border-border">
            {discoverRows.length === 0 ? (
              <p className="px-3 py-4 text-center text-[13px] text-text-faint">All top GSC queries are already tracked — nice work!</p>
            ) : (
              <>
                <div className="flex items-center gap-2 px-3 py-2">
                  <button onClick={selectAll} className="text-[12px] text-accent hover:underline">
                    {selected.size === discoverRows.length ? "Deselect all" : `Select all (${discoverRows.length})`}
                  </button>
                  {selected.size > 0 && (
                    <button onClick={addSelected} disabled={addingSelected} className="inline-flex items-center gap-1 rounded bg-whatsapp px-2.5 py-1 text-[12px] font-semibold text-white disabled:opacity-50">
                      {addingSelected ? <Loader2 size={12} className="animate-spin" /> : <CheckCircle2 size={12} />} Add {selected.size} selected
                    </button>
                  )}
                </div>
                <div className="max-h-[340px] overflow-y-auto">
                  <table className="w-full text-[13px]">
                    <thead className="sticky top-0 bg-bg-card text-text-muted">
                      <tr className="text-left">
                        <th className="px-3 py-1.5 w-8"></th>
                        <th className="px-3 py-1.5 font-semibold">Keyword</th>
                        <th className="px-3 py-1.5 font-semibold">Impr.</th>
                        <th className="px-3 py-1.5 font-semibold">Clicks</th>
                        <th className="px-3 py-1.5 font-semibold">Position</th>
                        <th className="px-3 py-1.5 w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {discoverRows.map((r) => (
                        <tr key={r.keyword} onClick={() => toggleSelect(r.keyword)} className={`cursor-pointer border-t border-border hover:bg-bg-alt/60 ${selected.has(r.keyword) ? "bg-accent/5" : ""}`}>
                          <td className="px-3 py-1.5">
                            <div className={`h-4 w-4 rounded border ${selected.has(r.keyword) ? "border-accent bg-accent" : "border-border"} flex items-center justify-center`}>
                              {selected.has(r.keyword) && <span className="text-white text-[10px] leading-none">✓</span>}
                            </div>
                          </td>
                          <td className="px-3 py-1.5 text-text">{r.keyword}</td>
                          <td className="px-3 py-1.5 text-text-muted">{r.impressions.toLocaleString()}</td>
                          <td className="px-3 py-1.5 text-text-muted">{r.clicks.toLocaleString()}</td>
                          <td className="px-3 py-1.5"><Pos v={r.position} /></td>
                          <td className="px-3 py-1.5 text-right">
                            <button onClick={(e) => { e.stopPropagation(); addKeywordDirect(r.keyword); }} className="rounded px-2 py-0.5 text-[11px] text-accent hover:bg-accent/10" title="Track this keyword">+ Track</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[820px] text-[13px]">
          <thead className="bg-bg-card text-text-muted">
            <tr className="text-left">
              {["Keyword", "Change", "Latest", "Best", "First", "Impr.", "URL Found", ""].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && <tr><td colSpan={8} className="px-3 py-10 text-center text-text-faint">No keywords tracked yet — add some above (e.g. your money keywords).</td></tr>}
            {rows.map((r) => <TrackRow key={r.keyword} r={r} onRemove={() => remove(r.keyword)} />)}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[12px] text-text-faint">Position = Google Search Console average position over the last 90 days (free, real data — not a live SERP scrape). Best/First/Change come from saved snapshots; take snapshots over time on the <a href="/admin/rankings" className="text-accent hover:underline">Rankings</a> page to build history. Search volume isn&apos;t available from GSC.</p>
    </div>
  );
}

function Pos({ v }: { v: number | null }) {
  if (v == null) return <span className="text-danger">N/A</span>;
  const color = v <= 3 ? "#16a34a" : v <= 10 ? "#16a34a" : v <= 30 ? "#0ea5e9" : "#64748b";
  return <span className="inline-flex items-center gap-1 font-semibold" style={{ color }}>{v}{v <= 3 && <Star size={12} className="fill-current" />}</span>;
}

function TrackRow({ r, onRemove }: { r: Row; onRemove: () => void }) {
  return (
    <tr className="border-t border-border align-middle hover:bg-bg-alt/60">
      <td className="px-3 py-2 text-text">{r.keyword}</td>
      <td className="px-3 py-2">
        {r.change == null || r.change === 0 ? <span className="text-text-faint">0</span>
          : r.change > 0 ? <span className="inline-flex items-center gap-1 text-whatsapp"><Heart size={13} className="fill-current" /> +{r.change}</span>
          : <span className="text-danger">{r.change}</span>}
      </td>
      <td className="px-3 py-2"><Pos v={r.latest} /></td>
      <td className="px-3 py-2 text-text-muted">{r.best ?? <span className="text-danger">N/A</span>}</td>
      <td className="px-3 py-2 text-text-muted">{r.first ?? <span className="text-danger">N/A</span>}</td>
      <td className="px-3 py-2 text-text-muted">{r.impressions ? r.impressions.toLocaleString() : "—"}</td>
      <td className="px-3 py-2 whitespace-nowrap">
        {r.url ? <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-text-muted hover:text-accent" title={r.url}><span className="max-w-[200px] truncate">{r.url}</span><ExternalLink size={11} className="shrink-0 opacity-50" /></a> : <span className="text-text-faint">NOT FOUND</span>}
      </td>
      <td className="px-2 py-2 text-right"><button onClick={onRemove} className="rounded p-1 text-text-faint hover:text-danger" title="Stop tracking"><Trash2 size={13} /></button></td>
    </tr>
  );
}

function Card({ icon, label, value, sub, big, good }: { icon: React.ReactNode; label: string; value: React.ReactNode; sub?: string; big?: boolean; good?: boolean }) {
  return (
    <div className="rounded-md border border-border bg-bg-card p-md text-center">
      <p className="m-0 flex items-center justify-center gap-1.5 text-[12px] uppercase tracking-wide text-text-faint">{icon} {label}</p>
      <p className={`m-0 mt-1 font-bold ${big ? "text-[30px]" : "text-[26px]"} ${good ? "text-whatsapp" : "text-text"}`}>{value}</p>
      {sub && <p className="m-0 text-[11px] text-text-faint">{sub}</p>}
    </div>
  );
}
