"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Loader2, Search, RefreshCw, Download, Upload, Plus, X, Trash2, ExternalLink, Save, ArrowLeft, ShieldAlert,
} from "lucide-react";

// ---- types mirror seo-store StoredBacklink ----
const STATUSES = ["Prospect", "Outreach", "Drafted", "Live", "Keep", "Watch", "Disavow", "Lost", "Rejected"] as const;
type Status = (typeof STATUSES)[number];
const KINDS = ["prospect", "inbound"] as const;
const ANCHOR_TYPES = ["", "Branded", "Naked URL", "Partial-match", "Exact-match", "Generic", "Other"];
const LINK_TYPES = ["", "dofollow", "nofollow", "unknown"];
const CATEGORIES = ["", "guest", "citation", "community", "news", "haro", "directory", "other"];

const STATUS_STYLE: Record<Status, { c: string; bg: string }> = {
  Prospect: { c: "#60a5fa", bg: "rgba(96,165,250,0.15)" },
  Outreach: { c: "#fbbf24", bg: "rgba(251,191,36,0.15)" },
  Drafted:  { c: "#c084fc", bg: "rgba(192,132,252,0.15)" },
  Live:     { c: "#34d399", bg: "rgba(52,211,153,0.15)" },
  Keep:     { c: "#34d399", bg: "rgba(52,211,153,0.15)" },
  Watch:    { c: "#fbbf24", bg: "rgba(251,191,36,0.15)" },
  Disavow:  { c: "#f87171", bg: "rgba(248,113,113,0.15)" },
  Lost:     { c: "#94a3b8", bg: "rgba(148,163,184,0.15)" },
  Rejected: { c: "#94a3b8", bg: "rgba(148,163,184,0.15)" },
};

type Backlink = {
  id: number; created_at: string; updated_at: string; first_seen: string; last_checked: string | null;
  kind: "prospect" | "inbound"; status: Status; site: string;
  source_url?: string; source_domain?: string; target_url?: string;
  anchor_text?: string; anchor_type?: string; link_type?: string; category?: string;
  dr?: string; country?: string; contact_email?: string; notes?: string;
};
type Stats = { total: number; prospects: number; inbound: number; live: number; disavow: number; byStatus: Record<string, number> };

const PAGE_SIZE = 25;

function StatusBadge({ s }: { s: Status }) {
  const st = STATUS_STYLE[s] ?? STATUS_STYLE.Prospect;
  return <span className="inline-block rounded-full px-2.5 py-0.5 text-[12px] font-semibold" style={{ color: st.c, backgroundColor: st.bg }}>{s}</span>;
}

// minimal CSV parser (handles quoted fields + commas)
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

const HEADER_MAP: Record<string, keyof Backlink> = {
  site: "site", "target site / blog": "site", "top linking sites": "site", domain: "source_domain", "source domain": "source_domain",
  "site url": "source_url", "source url": "source_url", url: "source_url", "linking page": "source_url", "linking pages": "source_url",
  "target page": "target_url", "our target page (link to)": "target_url", "target url": "target_url", "linked page": "target_url",
  "anchor text": "anchor_text", "anchor text used": "anchor_text", "linking text": "anchor_text", "top linking text": "anchor_text",
  "anchor type": "anchor_type", "dr / da": "dr", dr: "dr", "est. dr": "dr", da: "dr",
  country: "country", "contact email": "contact_email", email: "contact_email", notes: "notes", niche: "category",
};

export default function BacklinksAdmin() {
  const [rows, setRows] = useState<Backlink[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [kindFilter, setKindFilter] = useState<"All" | "prospect" | "inbound">("All");
  const [statusFilter, setStatusFilter] = useState<"All" | Status>("All");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const [editing, setEditing] = useState<Backlink | null>(null);
  const [draft, setDraft] = useState<Partial<Backlink>>({});
  const [busy, setBusy] = useState(false);
  const [showImport, setShowImport] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/backlinks/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setRows(d.backlinks || []); setStats(d.stats || null);
    } catch { setErr("Could not load backlinks."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let r = rows;
    if (kindFilter !== "All") r = r.filter((b) => b.kind === kindFilter);
    if (statusFilter !== "All") r = r.filter((b) => b.status === statusFilter);
    if (needle) r = r.filter((b) => [b.site, b.source_url, b.source_domain, b.target_url, b.anchor_text, b.category, b.country, b.notes].some((v) => (v || "").toLowerCase().includes(needle)));
    return r;
  }, [rows, kindFilter, statusFilter, q]);

  useEffect(() => { setPage(1); }, [kindFilter, statusFilter, q]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function openNew() { setDraft({ kind: "prospect", status: "Prospect" }); setEditing({ id: 0 } as Backlink); }
  function openEdit(b: Backlink) { setDraft({ ...b }); setEditing(b); }
  function closeDrawer() { setEditing(null); setDraft({}); }

  async function save() {
    if (!editing) return;
    if (!draft.site || !draft.site.trim()) { setErr("Site name is required."); return; }
    setBusy(true);
    try {
      if (editing.id === 0) {
        const res = await fetch("/api/admin/backlinks/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(draft) });
        if (res.status === 401) return void (window.location.href = "/admin/login");
      } else {
        const res = await fetch(`/api/admin/backlinks/${editing.id}/`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(draft) });
        if (res.status === 401) return void (window.location.href = "/admin/login");
      }
      closeDrawer(); await load();
    } finally { setBusy(false); }
  }

  async function remove(id: number) {
    if (!confirm("Delete this backlink row?")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/backlinks/${id}/`, { method: "DELETE" });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      closeDrawer(); await load();
    } finally { setBusy(false); }
  }

  function exportDisavow() {
    const domains = Array.from(new Set(rows.filter((b) => b.status === "Disavow").map((b) => b.source_domain || b.site).filter(Boolean)));
    const body = ["# Disavow file — macbook-repair-dubai.ae", `# Generated ${new Date().toISOString().slice(0, 10)}`, ...domains.map((d) => `domain:${d}`)].join("\n");
    downloadText(body, "disavow.txt");
  }
  function exportCsv() {
    const cols: (keyof Backlink)[] = ["id", "kind", "status", "site", "source_domain", "source_url", "target_url", "anchor_text", "anchor_type", "link_type", "dr", "category", "country", "contact_email", "notes", "first_seen"];
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [cols.join(","), ...filtered.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n");
    downloadText(csv, `backlinks-${new Date().toISOString().slice(0, 10)}.csv`);
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  const cards = [
    { label: "Total", value: stats?.total ?? 0, c: "#e5e7eb" },
    { label: "Prospects", value: stats?.prospects ?? 0, c: "#60a5fa" },
    { label: "Inbound", value: stats?.inbound ?? 0, c: "#c084fc" },
    { label: "Live / Keep", value: stats?.live ?? 0, c: "#34d399" },
    { label: "To disavow", value: stats?.disavow ?? 0, c: "#f87171" },
  ];

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Backlinks</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={openNew} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-white"><Plus size={14} /> Add</button>
          <button onClick={() => setShowImport(true)} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><Upload size={14} /> Import CSV</button>
          <button onClick={exportDisavow} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><ShieldAlert size={14} /> disavow.txt</button>
          <button onClick={exportCsv} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><Download size={14} /> CSV</button>
          <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
        </div>
      </div>

      {err && <p className="mb-md rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-danger">{err}</p>}

      <div className="mb-md grid grid-cols-2 gap-3 sm:grid-cols-5">
        {cards.map((s) => (
          <div key={s.label} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
            <p className="m-0 text-[12px] uppercase tracking-wide text-text-faint">{s.label}</p>
            <p className="m-0 mt-1 text-[26px] font-bold" style={{ color: s.c }}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search site, anchor, target, notes…"
            className="w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] pl-9 pr-3 py-2 text-[14px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        </div>
        <select value={kindFilter} onChange={(e) => setKindFilter(e.target.value as typeof kindFilter)} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="All">All kinds</option><option value="prospect">Prospects</option><option value="inbound">Inbound</option>
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="All">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s} ({stats?.byStatus?.[s] ?? 0})</option>)}
        </select>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[900px] text-[13px]">
          <thead className="bg-bg-card text-text-muted">
            <tr className="text-left">{["Site", "Status", "Kind", "Target page", "Anchor", "DR", "Category", "Country"].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr>
          </thead>
          <tbody>
            {pageRows.length === 0 && <tr><td colSpan={8} className="px-3 py-8 text-center text-text-faint">No backlinks match.</td></tr>}
            {pageRows.map((b) => (
              <tr key={b.id} onClick={() => openEdit(b)} className="cursor-pointer border-t border-border align-top hover:bg-bg-alt">
                <td className="px-3 py-2 text-text">{b.site}{b.source_domain ? <span className="block text-text-faint">{b.source_domain}</span> : null}</td>
                <td className="px-3 py-2"><StatusBadge s={b.status} /></td>
                <td className="px-3 py-2 text-text-muted">{b.kind}</td>
                <td className="px-3 py-2 text-text-muted">{shortPath(b.target_url)}</td>
                <td className="px-3 py-2 text-text-muted">{b.anchor_text || "—"}{b.anchor_type ? <span className="block text-text-faint">{b.anchor_type}</span> : null}</td>
                <td className="px-3 py-2 text-text-muted whitespace-nowrap">{b.dr || "—"}</td>
                <td className="px-3 py-2 text-text-muted">{b.category || "—"}</td>
                <td className="px-3 py-2 text-text-muted whitespace-nowrap">{b.country || "—"}</td>
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

      {editing && <EditDrawer editing={editing} draft={draft} setDraft={setDraft} onClose={closeDrawer} onSave={save} onDelete={remove} busy={busy} />}
      {showImport && <ImportDialog onClose={() => setShowImport(false)} onDone={async () => { setShowImport(false); await load(); }} />}
    </div>
  );
}

function EditDrawer({ editing, draft, setDraft, onClose, onSave, onDelete, busy }: {
  editing: Backlink; draft: Partial<Backlink>; setDraft: (d: Partial<Backlink>) => void;
  onClose: () => void; onSave: () => void; onDelete: (id: number) => void; busy: boolean;
}) {
  const set = (k: keyof Backlink, v: string) => setDraft({ ...draft, [k]: v });
  const isNew = editing.id === 0;
  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <aside className="relative h-full w-full max-w-md overflow-y-auto border-l border-border bg-bg-card p-lg shadow-2xl">
        <div className="mb-md flex items-start justify-between">
          <h2 className="m-0 text-[20px] text-text">{isNew ? "Add backlink" : draft.site || "Edit"}</h2>
          <button onClick={onClose} className="rounded-md p-1.5 text-text-muted hover:bg-bg-alt"><X size={18} /></button>
        </div>

        <div className="mb-md">
          <p className="mb-1.5 text-[12px] uppercase tracking-wide text-text-faint">Status</p>
          <div className="flex flex-wrap gap-1.5">
            {STATUSES.map((s) => {
              const st = STATUS_STYLE[s]; const active = (draft.status ?? "Prospect") === s;
              return <button key={s} onClick={() => set("status", s)} className="rounded-full border px-3 py-1 text-[12px] font-medium"
                style={{ color: st.c, borderColor: active ? st.c : "#ffffff1f", background: active ? st.bg : "transparent" }}>{s}</button>;
            })}
          </div>
        </div>

        <div className="grid gap-3">
          <Field label="Site / blog name *"><input value={draft.site || ""} onChange={(e) => set("site", e.target.value)} className={inp} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Kind"><select value={draft.kind || "prospect"} onChange={(e) => set("kind", e.target.value)} className={inp}>{KINDS.map((k) => <option key={k} value={k}>{k}</option>)}</select></Field>
            <Field label="Category"><select value={draft.category || ""} onChange={(e) => set("category", e.target.value)} className={inp}>{CATEGORIES.map((c) => <option key={c} value={c}>{c || "—"}</option>)}</select></Field>
          </div>
          <Field label="Source URL (the page linking to us)"><input value={draft.source_url || ""} onChange={(e) => set("source_url", e.target.value)} className={inp} placeholder="https://…" /></Field>
          <Field label="Our target page"><input value={draft.target_url || ""} onChange={(e) => set("target_url", e.target.value)} className={inp} placeholder="https://macbook-repair-dubai.ae/…" /></Field>
          <Field label="Anchor text"><input value={draft.anchor_text || ""} onChange={(e) => set("anchor_text", e.target.value)} className={inp} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Anchor type"><select value={draft.anchor_type || ""} onChange={(e) => set("anchor_type", e.target.value)} className={inp}>{ANCHOR_TYPES.map((a) => <option key={a} value={a}>{a || "—"}</option>)}</select></Field>
            <Field label="Link type"><select value={draft.link_type || ""} onChange={(e) => set("link_type", e.target.value)} className={inp}>{LINK_TYPES.map((a) => <option key={a} value={a}>{a || "—"}</option>)}</select></Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="DR (or estimate)"><input value={draft.dr || ""} onChange={(e) => set("dr", e.target.value)} className={inp} placeholder="62 or Low-Mid" /></Field>
            <Field label="Country"><input value={draft.country || ""} onChange={(e) => set("country", e.target.value)} className={inp} /></Field>
          </div>
          <Field label="Contact email"><input value={draft.contact_email || ""} onChange={(e) => set("contact_email", e.target.value)} className={inp} /></Field>
          <Field label="Notes"><textarea value={draft.notes || ""} onChange={(e) => set("notes", e.target.value)} rows={3} className={inp} /></Field>
        </div>

        <div className="mt-lg flex items-center justify-between">
          <button onClick={onSave} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50"><Save size={14} /> {isNew ? "Create" : "Save"}</button>
          {draft.source_url && <a href={draft.source_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ExternalLink size={14} /> Open</a>}
          {!isNew && <button onClick={() => onDelete(editing.id)} disabled={busy} className="inline-flex items-center gap-1.5 text-[13px] text-danger hover:underline disabled:opacity-50"><Trash2 size={14} /> Delete</button>}
        </div>
      </aside>
    </div>
  );
}

function ImportDialog({ onClose, onDone }: { onClose: () => void; onDone: () => void }) {
  const [text, setText] = useState("");
  const [kind, setKind] = useState<"inbound" | "prospect">("inbound");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  async function run() {
    setBusy(true); setMsg("");
    try {
      const rows = parseCsv(text);
      if (rows.length < 2) { setMsg("Need a header row + at least one data row."); setBusy(false); return; }
      const headers = rows[0].map((h) => h.trim().toLowerCase());
      const items: Record<string, string>[] = rows.slice(1).map((r) => {
        const o: Record<string, string> = {};
        headers.forEach((h, i) => { const f = HEADER_MAP[h]; if (f) o[f] = (r[i] || "").trim(); });
        o.kind = kind;
        o.status = kind === "inbound" ? "Watch" : "Prospect";
        return o;
      }).filter((o) => o.site || o.source_url || o.source_domain);
      // ensure a site name
      for (const o of items) if (!o.site) o.site = o.source_domain || (o.source_url || "").replace(/^https?:\/\//, "").split("/")[0] || "unknown";
      const res = await fetch("/api/admin/backlinks/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const d = await res.json();
      setMsg(`Imported ${d.added}${d.skipped ? `, skipped ${d.skipped}` : ""}.`);
      setTimeout(onDone, 800);
    } catch { setMsg("Import failed — check the CSV."); }
    finally { setBusy(false); }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg shadow-2xl">
        <div className="mb-md flex items-center justify-between"><h2 className="m-0 text-[18px] text-text">Import CSV</h2><button onClick={onClose} className="rounded-md p-1.5 text-text-muted hover:bg-bg-alt"><X size={18} /></button></div>
        <p className="mb-sm text-[13px] text-text-muted">Paste CSV with a header row. Recognised columns: site, source url, target page, anchor text, dr, country, contact email, notes. (Works with the GSC Links export and the workbook tabs.)</p>
        <div className="mb-sm flex items-center gap-2 text-[13px]">
          <span className="text-text-faint">Import as</span>
          <select value={kind} onChange={(e) => setKind(e.target.value as typeof kind)} className={inp + " max-w-[160px]"}><option value="inbound">Inbound (audit)</option><option value="prospect">Prospect</option></select>
        </div>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={8} placeholder="site,source url,target page,anchor text&#10;Example Blog,https://example.com/post,https://macbook-repair-dubai.ae/,MacBook repair Dubai" className={inp + " font-mono text-[12px]"} />
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
function shortPath(url?: string) { if (!url) return "—"; try { return new URL(url).pathname; } catch { return url; } }
function downloadText(body: string, filename: string) {
  const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename; a.click(); URL.revokeObjectURL(a.href);
}
