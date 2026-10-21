"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Loader2, Search, RefreshCw, ArrowLeft, Save, Info, RotateCcw, ExternalLink } from "lucide-react";
import SeoMetaBox, { type MetaBoxPost } from "@/components/blocks/SeoMetaBox";

type Override = {
  title?: string; description?: string; focusKeyword?: string; secondaryKeywords?: string[];
  ogTitle?: string; ogDescription?: string; ogImage?: string;
  twitterCard?: "summary_large_image" | "summary"; twitterTitle?: string; twitterDescription?: string; twitterImage?: string;
  noindex?: boolean; nofollow?: boolean; noarchive?: boolean; noimageindex?: boolean; nosnippet?: boolean;
  canonical?: string; redirect?: string; redirectType?: "301" | "302";
};
export type PageSeoRow = { path: string; title: string; description: string; liveTitle: string; liveDescription: string; overridden: boolean; pending: boolean; override: Override | null };
type Row = PageSeoRow;
const PAGE_SIZE = 25;

export default function PageSeoAdmin() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");
  const [onlyOver, setOnlyOver] = useState(false);
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState<Row | null>(null);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/pagemeta/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setRows(d.routes || []);
    } catch { setErr("Could not load page SEO."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  // Deep-link from "Edit SEO" links (e.g. /admin/pageseo?path=/blog/foo) — open that row once.
  const openedFromQuery = useRef(false);
  useEffect(() => {
    if (openedFromQuery.current || !rows.length) return;
    const p = new URLSearchParams(window.location.search).get("path");
    if (p) { const row = rows.find((r) => r.path === p); if (row) { setEditing(row); openedFromQuery.current = true; } }
  }, [rows]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let r = rows;
    if (onlyOver) r = r.filter((x) => x.overridden);
    if (needle) r = r.filter((x) => (x.path + " " + x.title).toLowerCase().includes(needle));
    return r;
  }, [rows, q, onlyOver]);

  useEffect(() => { setPage(1); }, [q, onlyOver]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (editing) return <PageSeoEditor row={editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} />;
  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  const overCount = rows.filter((r) => r.overridden).length;
  const pendingCount = rows.filter((r) => r.pending).length;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Pages SEO</h1>
        </div>
        <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>Full Rank Math–style SEO control for every page: <strong className="text-text">title, meta, focus-keyword score, social cards, robots, canonical &amp; redirects</strong>. Changes apply on the <strong className="text-text">next deploy</strong>.</span>
      </div>

      {err && <p className="mb-md rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-danger">{err}</p>}

      <div className="mb-md grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card label="Pages" value={rows.length} c="#e5e7eb" />
        <Card label="Customised" value={overCount} c="#34d399" />
        <Card label="Pending deploy" value={pendingCount} c="#fbbf24" />
        <Card label="Default" value={rows.length - overCount} c="#60a5fa" />
      </div>
      {pendingCount > 0 && (
        <p className="mb-md rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-2 text-[13px] text-[#fbbf24]">
          {pendingCount} change{pendingCount > 1 ? "s" : ""} saved but not yet live — they apply on the next deploy.
        </p>
      )}

      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] max-w-md flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by URL or title…"
            className="w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] pl-9 pr-3 py-2 text-[14px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        </div>
        <label className="inline-flex items-center gap-2 text-[13px] text-text-muted"><input type="checkbox" checked={onlyOver} onChange={(e) => setOnlyOver(e.target.checked)} /> Customised only</label>
        <span className="text-[13px] text-text-faint">{filtered.length} shown</span>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[820px] text-[13px]">
          <thead className="bg-bg-card text-text-muted">
            <tr className="text-left">{["Page", "Title", "Title len", ""].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr>
          </thead>
          <tbody>
            {pageRows.length === 0 && <tr><td colSpan={4} className="px-3 py-8 text-center text-text-faint">No pages match.</td></tr>}
            {pageRows.map((r) => (
              <tr key={r.path} onClick={() => setEditing(r)} className="cursor-pointer border-t border-border align-top hover:bg-bg-alt">
                <td className="px-3 py-2 text-text-muted whitespace-nowrap">{r.path}{r.overridden && <span className="ml-2 rounded bg-accent/10 px-1.5 py-0.5 text-[11px] text-accent">custom</span>}{r.pending && <span className="ml-1 rounded bg-[#fbbf24]/15 px-1.5 py-0.5 text-[11px] text-[#fbbf24]">pending</span>}</td>
                <td className="px-3 py-2 text-text">{r.title}</td>
                <td className="px-3 py-2 whitespace-nowrap" style={{ color: r.title.length > 60 ? "#f87171" : "var(--text-faint)" }}>{r.title.length}</td>
                <td className="px-2 py-2 text-right text-text-faint">edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-md flex items-center justify-between text-[13px] text-text-muted">
        <span>{filtered.length === 0 ? "0" : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, filtered.length)}`} of {filtered.length}</span>
        <div className="flex items-center gap-2">
          <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="rounded-md border border-border px-2.5 py-1.5 disabled:opacity-40">Prev</button>
          <span>Page {page}/{pageCount}</span>
          <button disabled={page >= pageCount} onClick={() => setPage((p) => p + 1)} className="rounded-md border border-border px-2.5 py-1.5 disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  );
}

// Reusable full SEO editor for a single route's pageMeta override (title/meta/keywords/score/AI/
// social/robots + Service price tab). Reused by the Categories editor for /blog/<slug> hubs.
export function PageSeoEditor({ row, onClose, onSaved, backLabel = "All pages" }: { row: Row; onClose: () => void; onSaved: () => void; backLabel?: string }) {
  const [d, setD] = useState<Override>(row.override ?? {});
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [pageHtml, setPageHtml] = useState("");
  const [fetchTick, setFetchTick] = useState(0);
  const [fetching, setFetching] = useState(false);
  // Live performance for this URL (rank/impressions) — the inspector's connective tissue.
  const [perf, setPerf] = useState<{ page: { position: number; impressions: number; clicks: number } | null; keywordPosition: number | null } | null>(null);
  useEffect(() => {
    let alive = true;
    fetch(`/api/admin/url-inspector/?path=${encodeURIComponent(row.path)}`, { cache: "no-store" })
      .then((r) => r.ok ? r.json() : null).then((j) => { if (alive && j?.ok) setPerf({ page: j.page, keywordPosition: j.keywordPosition }); }).catch(() => {});
    return () => { alive = false; };
  }, [row.path]);

  // Fetch the live page (same-origin) and extract its main content so the SEO score can analyse it.
  useEffect(() => {
    let alive = true;
    setFetching(true);
    (async () => {
      try {
        // Trailing slash avoids the 308 → canonical-https redirect (which fails on a local http dev server).
        const url = row.path.endsWith("/") ? row.path : row.path + "/";
        const res = await fetch(url, { cache: "no-store" });
        const text = await res.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        doc.querySelectorAll("script,style,noscript,header,footer,nav").forEach((n) => n.remove());
        const main = doc.querySelector("main") || doc.body;
        if (alive) setPageHtml(main?.innerHTML || "");
      } catch { /* score just runs on title/meta if the fetch fails */ }
      finally { if (alive) setFetching(false); }
    })();
    return () => { alive = false; };
  }, [row.path, fetchTick]);

  const set = (k: string, v: unknown) => setD((p) => ({ ...p, [k]: v }));

  // The meta box uses post.seoTitle/seoDescription; map them to the page store's title/description.
  const post: MetaBoxPost = {
    title: row.liveTitle, excerpt: row.liveDescription,
    seoTitle: d.title || "", seoDescription: d.description || "", focusKeyword: d.focusKeyword || "", secondaryKeywords: d.secondaryKeywords || [],
    ogTitle: d.ogTitle, ogDescription: d.ogDescription, ogImage: d.ogImage,
    twitterCard: d.twitterCard, twitterTitle: d.twitterTitle, twitterDescription: d.twitterDescription, twitterImage: d.twitterImage,
    noindex: d.noindex, nofollow: d.nofollow, noarchive: d.noarchive, noimageindex: d.noimageindex, nosnippet: d.nosnippet,
    canonical: d.canonical, redirect: d.redirect, redirectType: d.redirectType,
  };
  // Translate the meta box's seoTitle/seoDescription keys back to the page store's title/description.
  const setForBox = (k: string, v: unknown) => set(k === "seoTitle" ? "title" : k === "seoDescription" ? "description" : k, v);

  async function save(body: Override | Record<string, never>) {
    setBusy(true); setErr("");
    try {
      const res = await fetch("/api/admin/pagemeta/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ path: row.path, ...body }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (!res.ok) { setErr("Save failed."); return; }
      onSaved();
    } catch { setErr("Could not reach the server."); }
    finally { setBusy(false); }
  }

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-md flex flex-wrap items-center justify-between gap-sm">
        <button onClick={onClose} className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> {backLabel}</button>
        <div className="flex items-center gap-2">
          <a href={row.path} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-text-muted hover:text-text"><ExternalLink size={14} /> View</a>
          <button onClick={() => setFetchTick(t => t + 1)} disabled={fetching} title="Re-fetch page content and refresh score" className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-text-muted hover:text-text disabled:opacity-50"><RefreshCw size={14} className={fetching ? "animate-spin" : ""} /> Sync</button>
          {row.overridden && <button onClick={() => save({})} disabled={busy} className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-text-muted hover:text-text disabled:opacity-50"><RotateCcw size={14} /> Reset</button>}
          <button onClick={() => save(d)} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save</button>
        </div>
      </div>
      <h2 className="m-0 mb-2 break-all text-[18px] text-text">{row.path}</h2>
      {/* Performance strip — live rank/impressions for THIS URL (GSC), so the inspector connects SEO + rank in one place. */}
      <div className="mb-md grid grid-cols-3 gap-2">
        <PerfStat label="Keyword rank" value={perf?.keywordPosition != null ? perf.keywordPosition : (perf ? "—" : "…")} hint="avg position for this URL's focus keyword" />
        <PerfStat label="Page avg position" value={perf?.page ? perf.page.position : (perf ? "—" : "…")} hint="GSC average position for this page" />
        <PerfStat label="Impressions (90d)" value={perf?.page ? perf.page.impressions.toLocaleString() : (perf ? "—" : "…")} hint="GSC impressions, last 90 days" />
      </div>
      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}
      {row.pending && <p className="mb-md rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-2 text-[12px] text-[#fbbf24]">Saved — live on next deploy. Currently live: “{row.liveTitle}”.</p>}

      <SeoMetaBox
        post={post} set={setForBox} previewHtml={pageHtml} urlPath={row.path} showSchemaTab={false} showBreadcrumb={false} showServiceTab
        contentType="page"
        optimizeFields={{ seoTitle: d.title || row.liveTitle, seoDescription: d.description || row.liveDescription, focusKeyword: d.focusKeyword, secondaryKeywords: d.secondaryKeywords, ogTitle: d.ogTitle, ogDescription: d.ogDescription }}
        onAiApply={(selFields) => setD((p) => {
          const n: Override = { ...p };
          for (const [k, v] of Object.entries(selFields)) {
            if (k === "seoTitle") n.title = v as string;
            else if (k === "seoDescription") n.description = v as string;
            else if (k === "focusKeyword" || k === "ogTitle" || k === "ogDescription" || k === "secondaryKeywords") (n as Record<string, unknown>)[k] = v;
          }
          return n;
        })}
      />
    </div>
  );
}

function PerfStat({ label, value, hint }: { label: string; value: React.ReactNode; hint: string }) {
  return (
    <div className="rounded-md border border-border bg-bg-alt px-3 py-2" title={hint}>
      <p className="m-0 text-[11px] uppercase tracking-wide text-text-faint">{label}</p>
      <p className="m-0 mt-0.5 text-[20px] font-bold text-text">{value}</p>
    </div>
  );
}

function Card({ label, value, c }: { label: string; value: number; c: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
      <p className="m-0 text-[12px] uppercase tracking-wide text-text-faint">{label}</p>
      <p className="m-0 mt-1 text-[26px] font-bold" style={{ color: c }}>{value}</p>
    </div>
  );
}
