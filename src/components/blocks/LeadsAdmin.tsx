"use client";
import { useEffect, useMemo, useState, useCallback } from "react";
import {
  Loader2, Lock, Search, MessageCircle, Phone, Mail, Download, LogOut, RefreshCw,
  X, Trash2, Clock, MapPin, FileText, ChevronLeft, ChevronRight,
} from "lucide-react";

const STATUSES = ["New", "Contacted", "Quoted", "Won", "Lost"] as const;
type Status = (typeof STATUSES)[number];
const STATUS_STYLE: Record<Status, { c: string; bg: string }> = {
  New:       { c: "#60a5fa", bg: "rgba(96,165,250,0.15)" },
  Contacted: { c: "#fbbf24", bg: "rgba(251,191,36,0.15)" },
  Quoted:    { c: "#c084fc", bg: "rgba(192,132,252,0.15)" },
  Won:       { c: "#34d399", bg: "rgba(52,211,153,0.15)" },
  Lost:      { c: "#94a3b8", bg: "rgba(148,163,184,0.15)" },
};

type Lead = {
  id: number; created_at: string; updated_at?: string | null; status: Status;
  device_type: string; model: string | null; issue: string; details: string | null;
  name: string; phone: string; email: string | null; preferred_contact: string;
  area: string | null; source_path: string | null; emailed: number; note_count?: number;
};
type Note = { id: number; created_at: string; kind: string; body: string };
type Stats = { total: number; byStatus: Record<string, number>; today: number; week: number; conversion: number };

const KEY_STORE = "mrd_admin_key";
const PAGE_SIZE = 20;
const waLink = (p: string) => `https://wa.me/${(p || "").replace(/[^0-9]/g, "")}`;
const fmt = (iso?: string | null) => {
  if (!iso) return "—";
  try { return new Date(iso).toLocaleString("en-AE", { timeZone: "Asia/Dubai", dateStyle: "medium", timeStyle: "short" }); }
  catch { return iso; }
};

function StatusBadge({ s }: { s: Status }) {
  const st = STATUS_STYLE[s] ?? STATUS_STYLE.New;
  return <span className="inline-block rounded-full px-2.5 py-0.5 text-[12px] font-semibold" style={{ color: st.c, backgroundColor: st.bg }}>{s}</span>;
}

function toCsv(rows: Lead[]): string {
  const cols: (keyof Lead)[] = ["id","created_at","status","device_type","model","issue","details","name","phone","email","preferred_contact","area","source_path","emailed"];
  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n");
}

export default function LeadsAdmin() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);

  const [statusFilter, setStatusFilter] = useState<"All" | Status>("All");
  const [deviceFilter, setDeviceFilter] = useState<string>("All");
  const [q, setQ] = useState("");
  const [sortDesc, setSortDesc] = useState(true);
  const [page, setPage] = useState(1);

  const [selected, setSelected] = useState<number | null>(null);
  const [detail, setDetail] = useState<{ lead: Lead; notes: Note[] } | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [busy, setBusy] = useState(false);

  const authedFetch = useCallback(
    (path: string, opts: RequestInit = {}) =>
      fetch(path, { ...opts, cache: "no-store", headers: { ...(opts.headers || {}), Authorization: `Bearer ${key}`, "Content-Type": "application/json" } }),
    [key],
  );

  const loadList = useCallback(async (k: string) => {
    setStatus("loading"); setErrMsg("");
    try {
      const res = await fetch("/api/leads", { headers: { Authorization: `Bearer ${k}` }, cache: "no-store" });
      if (res.status === 401) { setErrMsg("Wrong key (or ADMIN_KEY not set on the server)."); setStatus("error"); return; }
      const data = await res.json();
      setLeads(data.leads || []); setStats(data.stats || null);
      setAuthed(true); setStatus("idle");
      sessionStorage.setItem(KEY_STORE, k);
    } catch { setErrMsg("Could not reach the server."); setStatus("error"); }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem(KEY_STORE);
    if (saved) { setKey(saved); loadList(saved); }
  }, [loadList]);

  function logout() { sessionStorage.removeItem(KEY_STORE); setAuthed(false); setKey(""); setLeads([]); setStats(null); setSelected(null); setDetail(null); }

  const refresh = useCallback(async () => { if (key) await loadList(key); }, [key, loadList]);

  // detail drawer
  useEffect(() => {
    if (selected == null) { setDetail(null); return; }
    setDetailLoading(true);
    authedFetch(`/api/leads/${selected}`).then((r) => r.json()).then((d) => {
      if (d.ok) setDetail({ lead: d.lead, notes: d.notes }); else setSelected(null);
    }).finally(() => setDetailLoading(false));
  }, [selected, authedFetch]);

  async function changeStatus(id: number, s: Status) {
    setBusy(true);
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status: s } : l)));
    setDetail((d) => (d && d.lead.id === id ? { ...d, lead: { ...d.lead, status: s } } : d));
    try {
      await authedFetch(`/api/leads/${id}`, { method: "PATCH", body: JSON.stringify({ status: s }) });
      await refresh();
      if (selected === id) {
        const d = await authedFetch(`/api/leads/${id}`).then((r) => r.json());
        if (d.ok) setDetail({ lead: d.lead, notes: d.notes });
      }
    } finally { setBusy(false); }
  }

  async function submitNote() {
    if (!selected || !noteText.trim()) return;
    setBusy(true);
    try {
      const d = await authedFetch(`/api/leads/${selected}/notes`, { method: "POST", body: JSON.stringify({ body: noteText.trim() }) }).then((r) => r.json());
      if (d.ok) { setDetail((cur) => (cur ? { ...cur, notes: [...cur.notes, d.note] } : cur)); setNoteText(""); }
    } finally { setBusy(false); }
  }

  async function removeLead(id: number) {
    if (!confirm("Delete this lead permanently?")) return;
    setBusy(true);
    try {
      await authedFetch(`/api/leads/${id}`, { method: "DELETE" });
      setLeads((ls) => ls.filter((l) => l.id !== id));
      setSelected(null);
      await refresh();
    } finally { setBusy(false); }
  }

  const deviceTypes = useMemo(() => ["All", ...Array.from(new Set(leads.map((l) => l.device_type).filter(Boolean)))], [leads]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let rows = leads;
    if (statusFilter !== "All") rows = rows.filter((l) => l.status === statusFilter);
    if (deviceFilter !== "All") rows = rows.filter((l) => l.device_type === deviceFilter);
    if (needle) rows = rows.filter((l) => [l.name, l.phone, l.email, l.device_type, l.model, l.issue, l.details, l.area, l.source_path].some((v) => (v || "").toLowerCase().includes(needle)));
    return [...rows].sort((a, b) => (sortDesc ? b.id - a.id : a.id - b.id));
  }, [leads, statusFilter, deviceFilter, q, sortDesc]);

  useEffect(() => { setPage(1); }, [statusFilter, deviceFilter, q]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function exportCsv() {
    const blob = new Blob([toCsv(filtered)], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(a.href);
  }

  // ── Login ──
  if (!authed) {
    return (
      <div className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-xl">
        <div className="mb-md flex items-center gap-2 text-on-primary"><Lock size={18} className="text-accent-bright" /> <h1 className="m-0 text-[20px]">Leads admin</h1></div>
        <p className="mb-lg text-[14px] text-on-primary-muted">Enter your admin key to manage submissions.</p>
        <form onSubmit={(e) => { e.preventDefault(); loadList(key); }} className="grid gap-sm">
          <input type="password" value={key} onChange={(e) => setKey(e.target.value)} autoFocus placeholder="Admin key"
            className="rounded-md bg-white/[0.04] border border-white/10 px-3 py-2.5 text-on-primary placeholder:text-on-primary-faint focus:border-accent-bright focus:outline-none" />
          <button type="submit" disabled={status === "loading" || !key}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 font-semibold text-on-primary disabled:opacity-50">
            {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />} Unlock
          </button>
          {status === "error" && <p className="text-[13px] text-danger">{errMsg}</p>}
        </form>
      </div>
    );
  }

  const statCards = [
    { label: "Total", value: stats?.total ?? 0, c: "#e5e7eb" },
    { label: "Today", value: stats?.today ?? 0, c: "#34d399" },
    { label: "This week", value: stats?.week ?? 0, c: "#60a5fa" },
    { label: "Conversion", value: `${stats?.conversion ?? 0}%`, c: "#fbbf24" },
  ];

  return (
    <div className="mx-auto max-w-content">
      {/* header */}
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <h1 className="m-0 text-[24px] text-on-primary">Lead management</h1>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={refresh} className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-3 py-2 text-[13px] text-on-primary-muted hover:text-on-primary"><RefreshCw size={14} /> Refresh</button>
          <button onClick={exportCsv} className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-3 py-2 text-[13px] text-on-primary-muted hover:text-on-primary"><Download size={14} /> Export CSV</button>
          <button onClick={logout} className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-3 py-2 text-[13px] text-on-primary-muted hover:text-on-primary"><LogOut size={14} /> Lock</button>
        </div>
      </div>

      {/* stats */}
      <div className="mb-md grid grid-cols-2 gap-3 sm:grid-cols-4">
        {statCards.map((s) => (
          <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-md">
            <p className="m-0 text-[12px] uppercase tracking-wide text-on-primary-faint">{s.label}</p>
            <p className="m-0 mt-1 text-[26px] font-bold" style={{ color: s.c }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* status pipeline pills */}
      <div className="mb-md flex flex-wrap gap-2">
        <button onClick={() => setStatusFilter("All")} className="rounded-full border px-3 py-1.5 text-[13px]"
          style={statusFilter === "All" ? { borderColor: "#fff3", background: "rgba(255,255,255,0.08)", color: "#fff" } : { borderColor: "#ffffff1f", color: "#9aa3ad" }}>
          All <span className="opacity-70">({stats?.total ?? 0})</span>
        </button>
        {STATUSES.map((s) => {
          const st = STATUS_STYLE[s]; const active = statusFilter === s;
          return (
            <button key={s} onClick={() => setStatusFilter(s)} className="rounded-full border px-3 py-1.5 text-[13px] font-medium"
              style={{ color: st.c, borderColor: active ? st.c : "#ffffff1f", background: active ? st.bg : "transparent" }}>
              {s} <span className="opacity-70">({stats?.byStatus?.[s] ?? 0})</span>
            </button>
          );
        })}
      </div>

      {/* search + device filter + sort */}
      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-primary-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, phone, device, issue…"
            className="w-full rounded-md bg-white/[0.04] border border-white/10 pl-9 pr-3 py-2 text-[14px] text-on-primary placeholder:text-on-primary-faint focus:border-accent-bright focus:outline-none" />
        </div>
        <select value={deviceFilter} onChange={(e) => setDeviceFilter(e.target.value)}
          className="rounded-md bg-white/[0.04] border border-white/10 px-3 py-2 text-[13px] text-on-primary focus:border-accent-bright focus:outline-none">
          {deviceTypes.map((d) => <option key={d} value={d} className="bg-bg-card">{d === "All" ? "All devices" : d}</option>)}
        </select>
        <button onClick={() => setSortDesc((s) => !s)} className="rounded-md border border-white/12 bg-white/[0.04] px-3 py-2 text-[13px] text-on-primary-muted hover:text-on-primary whitespace-nowrap">{sortDesc ? "Newest first" : "Oldest first"}</button>
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-md border border-white/10">
        <table className="w-full min-w-[860px] text-[13px]">
          <thead className="bg-white/[0.04] text-on-primary-muted">
            <tr className="text-left">
              {["Date","Status","Device","Issue","Name","Phone","Area","Notes","Contact"].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 && <tr><td colSpan={9} className="px-3 py-8 text-center text-on-primary-faint">No leads match.</td></tr>}
            {pageRows.map((l) => (
              <tr key={l.id} onClick={() => setSelected(l.id)} className="cursor-pointer border-t border-white/8 align-top hover:bg-white/[0.03]">
                <td className="px-3 py-2 whitespace-nowrap text-on-primary-faint">{fmt(l.created_at)}</td>
                <td className="px-3 py-2"><StatusBadge s={l.status} /></td>
                <td className="px-3 py-2 text-on-primary">{l.device_type}{l.model ? <span className="block text-on-primary-faint">{l.model}</span> : null}</td>
                <td className="px-3 py-2 text-on-primary">{l.issue}</td>
                <td className="px-3 py-2 text-on-primary whitespace-nowrap">{l.name}</td>
                <td className="px-3 py-2 text-on-primary whitespace-nowrap">{l.phone}</td>
                <td className="px-3 py-2 text-on-primary-muted whitespace-nowrap">{l.area || "—"}</td>
                <td className="px-3 py-2 text-on-primary-faint">{l.note_count ? `${l.note_count}` : "—"}</td>
                <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                  <div className="flex gap-1.5">
                    <a href={waLink(l.phone)} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-whatsapp/15 text-whatsapp hover:bg-whatsapp/25"><MessageCircle size={14} /></a>
                    <a href={`tel:${l.phone}`} title="Call" className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.06] text-on-primary-muted hover:text-on-primary"><Phone size={14} /></a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="mt-md flex items-center justify-between text-[13px] text-on-primary-muted">
        <span>{filtered.length === 0 ? "0" : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, filtered.length)}`} of {filtered.length}</span>
        <div className="flex items-center gap-2">
          <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="inline-flex items-center gap-1 rounded-md border border-white/12 px-2.5 py-1.5 disabled:opacity-40"><ChevronLeft size={14} /> Prev</button>
          <span>Page {page}/{pageCount}</span>
          <button disabled={page >= pageCount} onClick={() => setPage((p) => p + 1)} className="inline-flex items-center gap-1 rounded-md border border-white/12 px-2.5 py-1.5 disabled:opacity-40">Next <ChevronRight size={14} /></button>
        </div>
      </div>

      {/* detail drawer */}
      {selected != null && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelected(null)} />
          <aside className="relative h-full w-full max-w-md overflow-y-auto border-l border-white/10 bg-bg-card p-lg shadow-2xl">
            <div className="mb-md flex items-start justify-between">
              <div>
                <h2 className="m-0 text-[20px] text-on-primary">{detail?.lead.name ?? "…"}</h2>
                {detail && <div className="mt-1"><StatusBadge s={detail.lead.status} /></div>}
              </div>
              <button onClick={() => setSelected(null)} className="rounded-md p-1.5 text-on-primary-muted hover:bg-white/10"><X size={18} /></button>
            </div>

            {detailLoading || !detail ? (
              <div className="flex h-40 items-center justify-center text-on-primary-faint"><Loader2 className="animate-spin" /></div>
            ) : (
              <>
                {/* quick actions */}
                <div className="mb-md flex flex-wrap gap-2">
                  <a href={waLink(detail.lead.phone)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-on-primary"><MessageCircle size={14} /> WhatsApp</a>
                  <a href={`tel:${detail.lead.phone}`} className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-3 py-2 text-[13px] text-on-primary"><Phone size={14} /> Call</a>
                  {detail.lead.email && <a href={`mailto:${detail.lead.email}`} className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-3 py-2 text-[13px] text-on-primary"><Mail size={14} /> Email</a>}
                </div>

                {/* status changer */}
                <div className="mb-md">
                  <p className="mb-1.5 text-[12px] uppercase tracking-wide text-on-primary-faint">Status</p>
                  <div className="flex flex-wrap gap-1.5">
                    {STATUSES.map((s) => {
                      const st = STATUS_STYLE[s]; const active = detail.lead.status === s;
                      return <button key={s} disabled={busy} onClick={() => changeStatus(detail.lead.id, s)} className="rounded-full border px-3 py-1 text-[12px] font-medium disabled:opacity-50"
                        style={{ color: st.c, borderColor: active ? st.c : "#ffffff1f", background: active ? st.bg : "transparent" }}>{s}</button>;
                    })}
                  </div>
                </div>

                {/* details */}
                <dl className="mb-md rounded-md border border-white/10 bg-white/[0.03] p-md text-[13px]">
                  {[
                    ["Device", `${detail.lead.device_type}${detail.lead.model ? " · " + detail.lead.model : ""}`],
                    ["Issue", detail.lead.issue],
                    ["Details", detail.lead.details || "—"],
                    ["Phone", detail.lead.phone],
                    ["Email", detail.lead.email || "—"],
                    ["Prefers", detail.lead.preferred_contact],
                    ["Area", detail.lead.area || "—"],
                    ["Source", detail.lead.source_path || "—"],
                    ["Received", fmt(detail.lead.created_at)],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3 border-b border-white/5 py-1.5 last:border-0">
                      <dt className="w-20 shrink-0 text-on-primary-faint">{k}</dt><dd className="m-0 text-on-primary break-words">{v}</dd>
                    </div>
                  ))}
                </dl>

                {/* timeline + notes */}
                <p className="mb-1.5 flex items-center gap-1.5 text-[12px] uppercase tracking-wide text-on-primary-faint"><FileText size={13} /> Timeline</p>
                <div className="mb-sm space-y-2">
                  {detail.notes.length === 0 && <p className="text-[13px] text-on-primary-faint">No notes yet.</p>}
                  {detail.notes.map((n) => (
                    <div key={n.id} className="rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-[13px]">
                      <div className="flex items-center gap-1.5 text-[11px] text-on-primary-faint"><Clock size={11} /> {fmt(n.created_at)}{n.kind === "status" && <span className="ml-1 rounded bg-white/10 px-1.5 py-0.5">status</span>}</div>
                      <p className="m-0 mt-0.5 text-on-primary">{n.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-sm flex gap-2">
                  <input value={noteText} onChange={(e) => setNoteText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && submitNote()} placeholder="Add a note…"
                    className="flex-1 rounded-md bg-white/[0.04] border border-white/10 px-3 py-2 text-[13px] text-on-primary placeholder:text-on-primary-faint focus:border-accent-bright focus:outline-none" />
                  <button onClick={submitNote} disabled={busy || !noteText.trim()} className="rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-on-primary disabled:opacity-50">Add</button>
                </div>

                <button onClick={() => removeLead(detail.lead.id)} disabled={busy} className="mt-lg inline-flex items-center gap-1.5 text-[13px] text-danger hover:underline disabled:opacity-50"><Trash2 size={14} /> Delete lead</button>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
