"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, ArrowLeft, RefreshCw, Search, ExternalLink, Info, Check } from "lucide-react";

type Row = {
  path: string; type: string; keyword: string; secondaryKeywords?: string[]; hasKeyword: boolean;
  kind: "post" | "page"; postId?: number; score?: number; scoreColor?: "good" | "warn" | "bad";
  priceId: number | null; price: number | null; timeline: string | null; warranty: string | null;
};
const PAGE_SIZE = 30;
const TYPES = ["Service", "Page", "Post", "Category", "Tag", "Area", "City", "Blog"];

export default function KeywordMapAdmin() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");
  const [typeF, setTypeF] = useState("all");
  const [missingOnly, setMissingOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [saving, setSaving] = useState<string>("");
  const [saved, setSaved] = useState<string>("");

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/keyword-map/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setRows(d.rows || []);
    } catch { setErr("Could not load the keyword map."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase();
    return rows.filter((r) => {
      if (typeF !== "all" && r.type !== typeF) return false;
      if (missingOnly && r.hasKeyword) return false;
      if (n && !(r.path + " " + r.keyword).toLowerCase().includes(n)) return false;
      return true;
    });
  }, [rows, q, typeF, missingOnly]);

  useEffect(() => { setPage(1); }, [q, typeF, missingOnly]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  async function saveKeyword(r: Row, keyword: string) {
    if (keyword === r.keyword) return;
    setSaving(r.path); setSaved("");
    setRows((prev) => prev.map((x) => x.path === r.path ? { ...x, keyword, hasKeyword: !!keyword.trim() } : x));
    try {
      const res = await fetch("/api/admin/keyword-map/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ path: r.path, keyword, kind: r.kind, postId: r.postId }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (res.ok) { setSaved(r.path); setTimeout(() => setSaved(""), 1200); }
    } finally { setSaving(""); }
  }

  // Inline-edit the linked price row (single-source — same Prices store the Prices page uses).
  async function savePrice(r: Row, field: "price" | "timeline" | "warranty", raw: string) {
    if (r.priceId == null) return;
    const value: string | number = field === "price" ? Number(raw) || 0 : raw.trim();
    if (String(r[field] ?? "") === String(value)) return;
    setSaving(r.path); setSaved("");
    setRows((prev) => prev.map((x) => x.path === r.path ? { ...x, [field]: value } : x));
    try {
      const res = await fetch(`/api/admin/prices/${r.priceId}/`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ [field]: value }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (res.ok) { setSaved(r.path); setTimeout(() => setSaved(""), 1200); } else { setErr("Price save failed — refresh."); }
    } finally { setSaving(""); }
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  const withKw = rows.filter((r) => r.hasKeyword).length;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Keyword Map</h1>
        </div>
        <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span><strong className="text-text">Master table — every URL in one place.</strong> Target keywords are pulled in automatically; set or correct any <strong className="text-text">keyword</strong>, <strong className="text-text">price</strong>, <strong className="text-text">timeline</strong> or <strong className="text-text">warranty</strong> inline (type → Enter). Keywords save to that page/post; prices sync to the <a href="/admin/prices" className="text-accent hover:underline">Prices</a> store. Use <em>Missing keyword only</em> to find gaps. Applies on the next deploy.</span>
      </div>
      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}

      <div className="mb-md grid grid-cols-3 gap-3">
        <Card label="URLs" value={rows.length} c="#e5e7eb" />
        <Card label="With keyword" value={withKw} c="#34d399" />
        <Card label="Missing" value={rows.length - withKw} c="#fbbf24" />
      </div>

      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="relative min-w-[200px] max-w-sm flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search URL or keyword…" className="w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] pl-9 pr-3 py-2 text-[14px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        </div>
        <select value={typeF} onChange={(e) => setTypeF(e.target.value)} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-2.5 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="all">All types</option>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <label className="inline-flex items-center gap-2 text-[13px] text-text-muted"><input type="checkbox" checked={missingOnly} onChange={(e) => setMissingOnly(e.target.checked)} /> Missing keyword only</label>
        <span className="text-[13px] text-text-faint">{filtered.length} shown</span>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[820px] text-[13px]">
          <thead className="bg-bg-card text-text-muted">
            <tr className="text-left">{["SEO", "URL", "Type", "Target keyword", "Price", "Timeline", "Warranty", ""].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr>
          </thead>
          <tbody>
            {pageRows.length === 0 && <tr><td colSpan={8} className="px-3 py-8 text-center text-text-faint">No URLs match.</td></tr>}
            {pageRows.map((r) => {
              const c = r.scoreColor === "good" ? "#34d399" : r.scoreColor === "warn" ? "#fbbf24" : "#f87171";
              return (
              <tr key={r.path} className="border-t border-border align-middle hover:bg-bg-alt">
                <td className="px-3 py-2"><a href={`/admin/pageseo/?path=${encodeURIComponent(r.path)}`} title="Quick SEO setup score — click for the full editor" className="inline-flex h-7 w-9 items-center justify-center rounded text-[12px] font-bold" style={{ color: c, background: `${c}1f` }}>{r.score ?? 0}</a></td>
                <td className="px-3 py-2 whitespace-nowrap"><a href={r.path} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-text-muted hover:text-text">{r.path}<ExternalLink size={11} className="opacity-50" /></a></td>
                <td className="px-3 py-2 whitespace-nowrap"><span className="rounded bg-bg-alt px-1.5 py-0.5 text-[11px] text-text-faint">{r.type}</span></td>
                <td className="px-3 py-2 min-w-[240px]">
                  <div className="flex items-center gap-1">
                    <input
                      defaultValue={r.keyword}
                      onBlur={(e) => saveKeyword(r, e.target.value.trim())}
                      onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }}
                      placeholder="set target keyword…"
                      className={`w-full rounded border bg-bg px-2 py-1 text-[13px] text-text placeholder:text-text-faint focus:outline-none ${r.hasKeyword ? "border-border focus:border-accent" : "border-[#fbbf24]/50 focus:border-accent"}`}
                    />
                    {saving === r.path && <Loader2 size={13} className="animate-spin text-text-faint" />}
                    {saved === r.path && <Check size={14} className="text-whatsapp" />}
                  </div>
                </td>
                <td className="px-2 py-1.5 whitespace-nowrap">
                  {r.priceId != null ? (
                    <div className="flex items-center gap-1"><span className="text-text-faint">AED</span>
                      <input type="number" defaultValue={r.price ?? 0} onBlur={(e) => savePrice(r, "price", e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }}
                        className="w-20 rounded border border-border bg-bg px-2 py-1 text-[13px] font-semibold text-accent focus:border-accent focus:outline-none" />
                    </div>
                  ) : <span className="text-text-faint">—</span>}
                </td>
                <td className="px-2 py-1.5 whitespace-nowrap">
                  {r.priceId != null ? (
                    <input defaultValue={r.timeline ?? ""} onBlur={(e) => savePrice(r, "timeline", e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }}
                      className="w-28 rounded border border-border bg-bg px-2 py-1 text-[13px] text-text-muted focus:border-accent focus:outline-none" />
                  ) : <span className="text-text-faint">—</span>}
                </td>
                <td className="px-2 py-1.5 whitespace-nowrap">
                  {r.priceId != null ? (
                    <input defaultValue={r.warranty ?? ""} onBlur={(e) => savePrice(r, "warranty", e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }}
                      className="w-32 rounded border border-border bg-bg px-2 py-1 text-[13px] text-text-muted focus:border-accent focus:outline-none" />
                  ) : <span className="text-text-faint">—</span>}
                </td>
                <td className="px-2 py-2 text-right whitespace-nowrap"><a href={`/admin/pageseo/?path=${encodeURIComponent(r.path)}`} className="text-[12px] text-accent hover:underline">SEO</a></td>
              </tr>
            );})}
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

function Card({ label, value, c }: { label: string; value: number; c: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
      <p className="m-0 text-[12px] uppercase tracking-wide text-text-faint">{label}</p>
      <p className="m-0 mt-1 text-[26px] font-bold" style={{ color: c }}>{value}</p>
    </div>
  );
}
