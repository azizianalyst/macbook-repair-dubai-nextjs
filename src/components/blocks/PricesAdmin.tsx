"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, Search, RefreshCw, Plus, X, Trash2, Save, ArrowLeft, Info, Download, Upload, Pencil, ExternalLink, Sparkles, Check, ImageOff } from "lucide-react";

const GROUPS = ["macbook", "imac", "mac-desktop", "iphone", "ipad"] as const;
type Group = (typeof GROUPS)[number];
const GROUP_LABEL: Record<Group, string> = {
  macbook: "MacBook", imac: "iMac", "mac-desktop": "Mac mini / Studio / Pro", iphone: "iPhone", ipad: "iPad",
};

type Price = {
  id: number; created_at: string; updated_at: string;
  group: Group; service: string; price: number; timeline: string; warranty: string;
  key?: string; schema_name?: string; warranty_iso?: string; url?: string; notes?: string;
};

// Unified master row: every site URL + its target keyword + SEO score + linked price (from keyword-map).
type UrlRow = {
  path: string; type: string; keyword: string; secondaryKeywords: string[]; hasKeyword: boolean;
  kind: "post" | "page"; postId?: number; score: number; scoreColor: "good" | "warn" | "bad";
  image: string; imageAlt: string; imageSet: boolean;
  priceId: number | null; price: number | null; timeline: string | null; warranty: string | null;
};

const TYPES = ["Service", "Page", "Post", "Category", "Tag", "Area", "City", "Blog"];
const slugToWords = (path: string) => path.replace(/^\/+|\/+$/g, "").split("/").pop()!.replace(/-/g, " ").trim();
const CSV_COLS: (keyof Price)[] = ["id", "group", "service", "price", "timeline", "warranty", "schema_name", "warranty_iso", "url"];

// minimal CSV parser (handles quoted fields + commas/newlines inside quotes)
function parseCsv(text: string): string[][] {
  const rows: string[][] = []; let row: string[] = []; let cur = ""; let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
      else cur += ch;
    } else if (ch === '"') q = true;
    else if (ch === ",") { row.push(cur); cur = ""; }
    else if (ch === "\n" || ch === "\r") { if (ch === "\r" && text[i + 1] === "\n") i++; row.push(cur); rows.push(row); row = []; cur = ""; }
    else cur += ch;
  }
  if (cur !== "" || row.length) { row.push(cur); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

export default function PricesAdmin({ embedded, pricesFocus }: { embedded?: boolean; pricesFocus?: boolean }) {
  const [prices, setPrices] = useState<Price[]>([]);   // raw price rows (for CSV export + drawer)
  const [rows, setRows] = useState<UrlRow[]>([]);       // every URL (the unified table)
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");
  const [typeF, setTypeF] = useState("all");
  const [sort, setSort] = useState<"score-asc" | "score-desc" | "url">(pricesFocus ? "url" : "score-asc");
  const [needsWork, setNeedsWork] = useState(false);
  const [editing, setEditing] = useState<Price | null>(null);
  const [draft, setDraft] = useState<Partial<Price>>({});
  const [busy, setBusy] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [savingPath, setSavingPath] = useState("");
  const [savedPath, setSavedPath] = useState("");

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const pr = await fetch("/api/admin/prices/", { cache: "no-store" });
      if (pr.status === 401) { window.location.href = "/admin/login"; return; }
      const pd = await pr.json();
      setPrices(pd.prices || []);
      const mr = await fetch("/api/admin/keyword-map/", { cache: "no-store" });
      if (mr.ok) { const md = await mr.json(); setRows(md.rows || []); }
    } catch { setErr("Could not load."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const out = rows.filter((r) => {
      if (typeF !== "all" && r.type !== typeF) return false;
      if (needsWork && r.score >= 51) return false;
      if (needle && ![r.path, r.keyword].some((v) => (v || "").toLowerCase().includes(needle))) return false;
      return true;
    });
    if (sort === "score-asc") out.sort((a, b) => a.score - b.score || a.path.localeCompare(b.path));
    else if (sort === "score-desc") out.sort((a, b) => b.score - a.score || a.path.localeCompare(b.path));
    else out.sort((a, b) => a.path.localeCompare(b.path));
    return out;
  }, [rows, q, typeF, sort, needsWork]);

  function flash(path: string) { setSavedPath(path); setTimeout(() => setSavedPath(""), 1200); }

  // Target keyword → saves to the post (admin posts) or the page-meta override (everything else).
  async function saveKeyword(r: UrlRow, keyword: string) {
    if (keyword.trim() === r.keyword) return;
    setSavingPath(r.path);
    setRows((prev) => prev.map((x) => x.path === r.path ? { ...x, keyword: keyword.trim(), hasKeyword: !!keyword.trim() } : x));
    try {
      const res = await fetch("/api/admin/keyword-map/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ path: r.path, keyword: keyword.trim(), kind: r.kind, postId: r.postId }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (res.ok) flash(r.path); else setErr("Keyword save failed — refresh.");
    } finally { setSavingPath(""); }
  }
  // Price / timeline / warranty → saves to the Prices store (single source).
  async function savePrice(r: UrlRow, field: "price" | "timeline" | "warranty", raw: string) {
    if (r.priceId == null) return;
    const value: string | number = field === "price" ? Number(raw) || 0 : raw.trim();
    if (String(r[field] ?? "") === String(value)) return;
    setSavingPath(r.path);
    setRows((prev) => prev.map((x) => x.path === r.path ? { ...x, [field]: value } : x));
    setPrices((prev) => prev.map((x) => x.id === r.priceId ? { ...x, [field]: value } : x));
    try {
      const res = await fetch(`/api/admin/prices/${r.priceId}/`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ [field]: value }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (res.ok) flash(r.path); else setErr("Price save failed — refresh.");
    } finally { setSavingPath(""); }
  }

  // Drawer: full edit (schema fields + delete) for an existing priced row.
  function openEditByPriceId(priceId: number) { const p = prices.find((x) => x.id === priceId); if (p) { setDraft({ ...p }); setEditing(p); } }
  // Drawer: add a price pre-linked to a URL (group guessed from slug).
  function addPriceForUrl(r: UrlRow) {
    const g: Group = r.path.includes("/imac") ? "imac" : r.path.includes("/iphone") ? "iphone" : r.path.includes("/ipad") ? "ipad" : r.path.match(/\/mac-(mini|studio|pro)/) ? "mac-desktop" : "macbook";
    setDraft({ group: g, service: r.keyword || slugToWords(r.path), url: r.path, price: 0, timeline: "Same day", warranty: "12 months" });
    setEditing({ id: 0 } as Price);
  }
  function openNew() { setDraft({ group: "macbook", price: 0, timeline: "Same day", warranty: "12 months" }); setEditing({ id: 0 } as Price); }
  function close() { setEditing(null); setDraft({}); }
  async function save() {
    if (!editing) return;
    if (!draft.service?.trim()) { setErr("Service label is required."); return; }
    const payload = { ...draft, price: Number(draft.price) || 0 };
    setBusy(true);
    try {
      const res = await fetch(editing.id === 0 ? "/api/admin/prices/" : `/api/admin/prices/${editing.id}/`,
        { method: editing.id === 0 ? "POST" : "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (!res.ok) { const d = await res.json().catch(() => ({})); setErr(d.errors ? Object.values(d.errors).join("; ") : "Save failed."); return; }
      close(); await load();
    } finally { setBusy(false); }
  }
  async function remove(id: number) {
    if (!confirm("Delete this price row?")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/prices/${id}/`, { method: "DELETE" });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      close(); await load();
    } finally { setBusy(false); }
  }

  // Bulk: fill a starter keyword (from the URL slug) for every URL still missing one.
  async function seedKeywords() {
    if (!confirm("Fill a starter target keyword (from the URL) for every page that has none? It never overwrites keywords you've already set.")) return;
    setSeeding(true);
    try {
      const res = await fetch("/api/admin/keyword-map/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "seed-keywords" }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const d = await res.json().catch(() => ({}));
      if (res.ok) { setErr(""); await load(); } else setErr(d.error || "Seed failed.");
    } finally { setSeeding(false); }
  }

  function exportCsv() {
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const body = [CSV_COLS.join(","), ...prices.map((r) => CSV_COLS.map((c) => esc(r[c])).join(","))].join("\n");
    const blob = new Blob([body], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `prices-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(a.href);
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  const withKw = rows.filter((r) => r.hasKeyword).length;
  const priced = rows.filter((r) => r.priceId != null).length;
  const noImage = rows.filter((r) => !r.imageSet).length;

  return (
    <div className="mx-auto max-w-content">
      {!embedded && (
        <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
          <div className="flex items-center gap-3">
            <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
            <h1 className="m-0 text-[24px] text-text">Prices &amp; Keywords</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={seedKeywords} disabled={seeding} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text disabled:opacity-50">{seeding ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />} Fill missing keywords</button>
            <button onClick={openNew} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-white"><Plus size={14} /> Add price</button>
            <button onClick={exportCsv} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><Download size={14} /> Export CSV</button>
            <button onClick={() => setShowImport(true)} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><Upload size={14} /> Import CSV</button>
            <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
          </div>
        </div>
      )}
      {embedded && (
        <div className="mb-md flex flex-wrap items-center justify-end gap-2">
          <button onClick={seedKeywords} disabled={seeding} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text disabled:opacity-50">{seeding ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />} Fill missing keywords</button>
          <button onClick={openNew} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-white"><Plus size={14} /> Add price</button>
          <button onClick={exportCsv} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><Download size={14} /> Export CSV</button>
          <button onClick={() => setShowImport(true)} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><Upload size={14} /> Import CSV</button>
          <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
        </div>
      )}

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span><strong className="text-text">Every URL in one table.</strong> Set/correct each page's <strong className="text-text">target keyword</strong> and, where it applies, <strong className="text-text">price · timeline · warranty</strong> inline (type → Enter). The <strong className="text-text">SEO</strong> badge is a quick setup score (title/meta/keyword/URL) — open a page&apos;s editor for the full content score. URLs with no price show <em>Add price</em>. Changes go live on the <strong className="text-text">next deploy</strong>.</span>
      </div>

      {err && <p className="mb-md rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-danger">{err}</p>}

      <div className="mb-md grid grid-cols-2 gap-3 sm:grid-cols-5">
        <Card label="URLs" value={rows.length} c="#e5e7eb" />
        <Card label="With keyword" value={withKw} c="#34d399" />
        <Card label="Missing keyword" value={rows.length - withKw} c="#fbbf24" />
        <Card label="Priced" value={priced} c="#60a5fa" />
        <Card label="No image" value={noImage} c="#f87171" />
      </div>

      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search URL or keyword…"
            className="w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] pl-9 pr-3 py-2 text-[14px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        </div>
        <select value={typeF} onChange={(e) => setTypeF(e.target.value)} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-2.5 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="all">All types</option>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-2.5 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="url">Sort: URL (A–Z)</option>
          <option value="score-asc">Sort: SEO score (low → high)</option>
          <option value="score-desc">Sort: SEO score (high → low)</option>
        </select>
        <label className="inline-flex items-center gap-2 text-[13px] text-text-muted"><input type="checkbox" checked={needsWork} onChange={(e) => setNeedsWork(e.target.checked)} /> Needs work (&lt;51)</label>
        <span className="text-[13px] text-text-faint">{filtered.length} URLs</span>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[920px] text-[13px]">
          <thead className="bg-bg-card text-text-muted">
            <tr className="text-left">
              <th className="px-3 py-2 font-semibold whitespace-nowrap">SEO</th>
              <th className="px-3 py-2 font-semibold whitespace-nowrap">Image</th>
              <th className="px-3 py-2 font-semibold whitespace-nowrap">URL</th>
              <th className="px-3 py-2 font-semibold whitespace-nowrap">Type</th>
              <th className="px-3 py-2 font-semibold whitespace-nowrap">Target keyword</th>
              <th className="px-3 py-2 font-semibold whitespace-nowrap">Price (AED)</th>
              <th className="px-3 py-2 font-semibold whitespace-nowrap">Timeline</th>
              <th className="px-3 py-2 font-semibold whitespace-nowrap">Warranty</th>
              <th className="px-2 py-2 font-semibold whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && <tr><td colSpan={9} className="px-3 py-8 text-center text-text-faint">No URLs match.</td></tr>}
            {filtered.map((r) => (
              <tr key={r.path} className="border-t border-border align-middle hover:bg-bg-alt/60">
                <td className="px-3 py-1.5"><ScoreBadge score={r.score} color={r.scoreColor} path={r.path} /></td>
                <td className="px-2 py-1.5"><FeaturedImage row={r} /></td>
                <td className="px-3 py-1.5 whitespace-nowrap">
                  <a href={r.path} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-text-muted hover:text-accent" title={r.path}><span className="max-w-[220px] truncate">{r.path}</span><ExternalLink size={11} className="shrink-0 opacity-50" /></a>
                </td>
                <td className="px-3 py-1.5 whitespace-nowrap"><span className="rounded bg-bg-alt px-1.5 py-0.5 text-[11px] text-text-faint">{r.type}</span></td>
                <td className="px-2 py-1.5 min-w-[230px]">
                  <div className="flex items-center gap-1">
                    <input defaultValue={r.keyword} placeholder="set target keyword…"
                      onBlur={(e) => saveKeyword(r, e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }}
                      className={`w-full rounded border bg-bg px-2 py-1 text-[13px] text-text placeholder:text-text-faint focus:outline-none focus:border-accent ${r.hasKeyword ? "border-border" : "border-[#fbbf24]/50"}`} />
                    {r.secondaryKeywords.length > 0 && <span className="shrink-0 rounded bg-accent/12 px-1.5 py-0.5 text-[11px] text-accent" title={r.secondaryKeywords.join(", ")}>+{r.secondaryKeywords.length}</span>}
                    {savingPath === r.path && <Loader2 size={13} className="shrink-0 animate-spin text-text-faint" />}
                    {savedPath === r.path && <Check size={14} className="shrink-0 text-whatsapp" />}
                  </div>
                </td>
                {r.priceId != null ? (
                  <>
                    <td className="px-2 py-1.5 whitespace-nowrap"><div className="flex items-center gap-1"><span className="text-text-faint">AED</span>
                      <input type="number" defaultValue={r.price ?? 0} onBlur={(e) => savePrice(r, "price", e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }} className="w-20 rounded border border-border bg-bg px-2 py-1 text-[13px] font-semibold text-accent focus:border-accent focus:outline-none" /></div></td>
                    <td className="px-2 py-1.5 whitespace-nowrap"><input defaultValue={r.timeline ?? ""} onBlur={(e) => savePrice(r, "timeline", e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }} className="w-28 rounded border border-border bg-bg px-2 py-1 text-[13px] text-text-muted focus:border-accent focus:outline-none" /></td>
                    <td className="px-2 py-1.5 whitespace-nowrap"><input defaultValue={r.warranty ?? ""} onBlur={(e) => savePrice(r, "warranty", e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }} className="w-32 rounded border border-border bg-bg px-2 py-1 text-[13px] text-text-muted focus:border-accent focus:outline-none" /></td>
                    <td className="px-2 py-1.5 text-right"><button onClick={() => openEditByPriceId(r.priceId!)} className="rounded p-1 text-text-faint hover:text-text" title="Edit all price fields (schema, warranty ISO…) or delete"><Pencil size={13} /></button></td>
                  </>
                ) : (
                  <td colSpan={4} className="px-3 py-1.5">
                    <button onClick={() => addPriceForUrl(r)} className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[12px] text-text-faint hover:border-accent hover:text-accent"><Plus size={12} /> Add price</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <aside className="relative h-full w-full max-w-md overflow-y-auto border-l border-border bg-bg-card p-lg shadow-2xl">
            <div className="mb-md flex items-start justify-between">
              <h2 className="m-0 text-[20px] text-text">{editing.id === 0 ? "Add price" : draft.service || "Edit"}</h2>
              <button onClick={close} className="rounded-md p-1.5 text-text-muted hover:bg-bg-alt"><X size={18} /></button>
            </div>
            <div className="grid gap-3">
              <Field label="Group"><select value={draft.group || "macbook"} onChange={(e) => setDraft({ ...draft, group: e.target.value as Group })} className={inp}>{GROUPS.map((g) => <option key={g} value={g}>{GROUP_LABEL[g]}</option>)}</select></Field>
              <Field label="Service label (the keyword shown on /pricing) *"><input value={draft.service || ""} onChange={(e) => setDraft({ ...draft, service: e.target.value })} className={inp} /></Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Price (AED)"><input type="number" value={draft.price ?? ""} onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })} className={inp} /></Field>
                <Field label="Timeline"><input value={draft.timeline || ""} onChange={(e) => setDraft({ ...draft, timeline: e.target.value })} className={inp} placeholder="Same day" /></Field>
              </div>
              <Field label="Warranty (shown on page)"><input value={draft.warranty || ""} onChange={(e) => setDraft({ ...draft, warranty: e.target.value })} className={inp} placeholder="15 days - 3 months" /></Field>
              <div className="mt-1 rounded-md border border-border bg-bg-alt p-3">
                <p className="m-0 mb-2 text-[12px] uppercase tracking-wide text-text-faint">JSON-LD (optional) — fill to include in Google structured data</p>
                <div className="grid gap-3">
                  <Field label="Schema name"><input value={draft.schema_name || ""} onChange={(e) => setDraft({ ...draft, schema_name: e.target.value })} className={inp} placeholder="MacBook Screen Repair Dubai" /></Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Warranty (ISO)"><input value={draft.warranty_iso || ""} onChange={(e) => setDraft({ ...draft, warranty_iso: e.target.value })} className={inp} placeholder="P3M" /></Field>
                    <Field label="Service page URL"><input value={draft.url || ""} onChange={(e) => setDraft({ ...draft, url: e.target.value })} className={inp} placeholder="/macbook-screen-repair-dubai" /></Field>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-lg flex items-center justify-between">
              <button onClick={save} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50"><Save size={14} /> {editing.id === 0 ? "Create" : "Save"}</button>
              {editing.id !== 0 && <button onClick={() => remove(editing.id)} disabled={busy} className="inline-flex items-center gap-1.5 text-[13px] text-danger hover:underline disabled:opacity-50"><Trash2 size={14} /> Delete</button>}
            </div>
          </aside>
        </div>
      )}

      {showImport && <ImportDialog onClose={() => setShowImport(false)} onDone={async () => { setShowImport(false); await load(); }} />}
    </div>
  );
}

// Featured (social/Google) image per URL — thumbnail when set, a "set" prompt when missing.
// Links to the page's SEO editor (Social tab) where the OG/featured image is chosen.
function FeaturedImage({ row }: { row: UrlRow }) {
  const href = `/admin/pageseo/?path=${encodeURIComponent(row.path)}`;
  if (row.imageSet) {
    return (
      <a href={href} title={`Featured image: ${row.image}${row.imageAlt ? `\nAlt: ${row.imageAlt}` : ""}`} className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={row.image} alt={row.imageAlt || "featured"} loading="lazy" className="h-9 w-14 rounded border border-border object-cover" />
      </a>
    );
  }
  return <a href={href} title="No featured image set for this page" className="inline-flex h-9 w-14 items-center justify-center rounded border border-dashed border-[#fbbf24]/50 text-[10px] text-[#fbbf24]"><ImageOff size={13} /></a>;
}

function ScoreBadge({ score, color, path }: { score: number; color: "good" | "warn" | "bad"; path: string }) {
  const c = color === "good" ? "#34d399" : color === "warn" ? "#fbbf24" : "#f87171";
  return (
    <a href={`/admin/pageseo/?path=${encodeURIComponent(path)}`} title="Quick SEO setup score — click for the full editor"
      className="inline-flex h-7 w-9 items-center justify-center rounded text-[12px] font-bold" style={{ color: c, background: `${c}1f` }}>
      {score}
    </a>
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

function ImportDialog({ onClose, onDone }: { onClose: () => void; onDone: () => void }) {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (!f) return;
    const r = new FileReader(); r.onload = () => setText(String(r.result || "")); r.readAsText(f);
  }
  async function run() {
    setBusy(true); setMsg("");
    try {
      const rows = parseCsv(text);
      if (rows.length < 2) { setMsg("Need a header row + at least one data row."); setBusy(false); return; }
      const headers = rows[0].map((h) => h.trim().toLowerCase());
      const idx = (name: string) => headers.indexOf(name);
      const get = (r: string[], name: string) => { const i = idx(name); return i >= 0 ? (r[i] || "").trim() : ""; };
      const items = rows.slice(1).map((r) => {
        const o: Record<string, unknown> = {
          group: get(r, "group"), service: get(r, "service"), price: Number(get(r, "price")),
          timeline: get(r, "timeline"), warranty: get(r, "warranty"),
        };
        const id = get(r, "id"); if (id) o.id = Number(id);
        for (const f of ["schema_name", "warranty_iso", "url"]) { const v = get(r, f); if (v) o[f] = v; }
        return o;
      }).filter((o) => o.service);
      const res = await fetch("/api/admin/prices/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const d = await res.json();
      setMsg(`Updated ${d.updated ?? 0}, added ${d.added ?? 0}${d.skipped ? `, skipped ${d.skipped} (missing required columns)` : ""}.`);
      setTimeout(onDone, 1200);
    } catch { setMsg("Import failed — check the CSV columns."); }
    finally { setBusy(false); }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg shadow-2xl">
        <div className="mb-md flex items-center justify-between"><h2 className="m-0 text-[18px] text-text">Import prices (CSV)</h2><button onClick={onClose} className="rounded-md p-1.5 text-text-muted hover:bg-bg-alt"><X size={18} /></button></div>
        <p className="mb-sm text-[13px] text-text-muted">Best flow: click <strong className="text-text">Export CSV</strong> first, edit the <code>price</code> column in Excel, save as CSV, then upload it here. Rows are matched by <code>id</code> (existing rows update; new rows are added). Required columns: group, service, price, timeline, warranty.</p>
        <input type="file" accept=".csv,text/csv" onChange={onFile} className="mb-sm block w-full text-[13px] text-text-muted" />
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={7} placeholder="…or paste CSV here" className={inp + " font-mono text-[12px]"} />
        {msg && <p className="mt-sm text-[13px] text-text-muted">{msg}</p>}
        <div className="mt-md flex justify-end gap-2">
          <button onClick={onClose} className="rounded-md border border-border px-4 py-2 text-[13px] text-text-muted">Cancel</button>
          <button onClick={run} disabled={busy || !text.trim()} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />} Import</button>
        </div>
      </div>
    </div>
  );
}

const inp = "w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1 block text-[12px] text-text-faint">{label}</span>{children}</label>;
}
