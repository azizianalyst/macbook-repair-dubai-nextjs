"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, Search, RefreshCw, Plus, X, Trash2, Save, ArrowLeft, Info } from "lucide-react";

const SERVICES = ["MacBook", "iMac", "iPhone", "iPad", "Water Damage", "Battery", "Screen", "Keyboard"] as const;
const LANGUAGES = ["English", "Russian", "German", "French", "Turkish", "Arabic"] as const;
type Service = (typeof SERVICES)[number];
type Language = (typeof LANGUAGES)[number];

type Review = {
  id: number; name: string; date: string; rating: number; text: string;
  language: Language; services: Service[];
};

const PAGE_SIZE = 25;

export default function ReviewsAdmin() {
  const [rows, setRows] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");
  const [serviceFilter, setServiceFilter] = useState<"All" | Service>("All");
  const [langFilter, setLangFilter] = useState<"All" | Language>("All");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState<Review | null>(null);
  const [draft, setDraft] = useState<Partial<Review>>({});
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/reviews/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setRows(d.reviews || []);
    } catch { setErr("Could not load reviews."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let r = rows;
    if (serviceFilter !== "All") r = r.filter((x) => x.services?.includes(serviceFilter));
    if (langFilter !== "All") r = r.filter((x) => x.language === langFilter);
    if (needle) r = r.filter((x) => (x.name + " " + x.text).toLowerCase().includes(needle));
    return r;
  }, [rows, serviceFilter, langFilter, q]);

  useEffect(() => { setPage(1); }, [serviceFilter, langFilter, q]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function openNew() { setDraft({ rating: 5, language: "English", services: [], date: "1 week ago" }); setEditing({ id: 0 } as Review); }
  function openEdit(r: Review) { setDraft({ ...r }); setEditing(r); }
  function close() { setEditing(null); setDraft({}); }
  function toggleService(s: Service) {
    const cur = draft.services || [];
    setDraft({ ...draft, services: cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s] });
  }

  async function save() {
    if (!editing) return;
    if (!draft.name?.trim() || !draft.text?.trim()) { setErr("Name and review text are required."); return; }
    const payload = { ...draft, rating: Number(draft.rating) || 5 };
    setBusy(true);
    try {
      const res = await fetch(editing.id === 0 ? "/api/admin/reviews/" : `/api/admin/reviews/${editing.id}/`,
        { method: editing.id === 0 ? "POST" : "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (!res.ok) { const d = await res.json().catch(() => ({})); setErr(d.errors ? Object.values(d.errors).join("; ") : "Save failed."); return; }
      close(); await load();
    } finally { setBusy(false); }
  }
  async function remove(id: number) {
    if (!confirm("Delete this review?")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/reviews/${id}/`, { method: "DELETE" });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      close(); await load();
    } finally { setBusy(false); }
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Reviews <span className="text-[15px] font-normal text-text-faint">({rows.length})</span></h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={openNew} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-white"><Plus size={14} /> Add</button>
          <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
        </div>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>These are the testimonials shown across the site. Edits apply on the <strong className="text-text">next deploy</strong>. (The headline review count + rating live in <strong className="text-text">Business info</strong>.)</span>
      </div>

      {err && <p className="mb-md rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-danger">{err}</p>}

      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1 max-w-md">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name or text…"
            className="w-full rounded-md border border-border bg-bg-card pl-9 pr-3 py-2 text-[14px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        </div>
        <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value as typeof serviceFilter)} className="rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="All">All services</option>{SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={langFilter} onChange={(e) => setLangFilter(e.target.value as typeof langFilter)} className="rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="All">All languages</option>{LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
        <span className="text-[13px] text-text-faint">{filtered.length} shown</span>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[820px] text-[13px]">
          <thead className="bg-bg-card text-text-muted">
            <tr className="text-left">{["Name", "Date", "Rating", "Services", "Review"].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr>
          </thead>
          <tbody>
            {pageRows.length === 0 && <tr><td colSpan={5} className="px-3 py-8 text-center text-text-faint">No reviews match.</td></tr>}
            {pageRows.map((r) => (
              <tr key={r.id} onClick={() => openEdit(r)} className="cursor-pointer border-t border-border align-top hover:bg-bg-alt">
                <td className="px-3 py-2 text-text whitespace-nowrap">{r.name}</td>
                <td className="px-3 py-2 text-text-faint whitespace-nowrap">{r.date}</td>
                <td className="px-3 py-2 whitespace-nowrap" style={{ color: "#fbbf24" }}>{"★".repeat(r.rating)}</td>
                <td className="px-3 py-2 text-text-muted whitespace-nowrap">{(r.services || []).join(", ") || "—"}</td>
                <td className="px-3 py-2 text-text-muted">{r.text.length > 90 ? r.text.slice(0, 90) + "…" : r.text}</td>
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

      {editing && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <aside className="relative h-full w-full max-w-md overflow-y-auto border-l border-border bg-bg-card p-lg shadow-2xl">
            <div className="mb-md flex items-start justify-between">
              <h2 className="m-0 text-[20px] text-text">{editing.id === 0 ? "Add review" : draft.name || "Edit"}</h2>
              <button onClick={close} className="rounded-md p-1.5 text-text-muted hover:bg-bg-alt"><X size={18} /></button>
            </div>
            <div className="grid gap-3">
              <Field label="Reviewer name *"><input value={draft.name || ""} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className={inp} /></Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Date (verbatim)"><input value={draft.date || ""} onChange={(e) => setDraft({ ...draft, date: e.target.value })} className={inp} placeholder="2 weeks ago" /></Field>
                <Field label="Rating"><select value={draft.rating ?? 5} onChange={(e) => setDraft({ ...draft, rating: Number(e.target.value) })} className={inp}>{[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} ★</option>)}</select></Field>
              </div>
              <Field label="Language"><select value={draft.language || "English"} onChange={(e) => setDraft({ ...draft, language: e.target.value as Language })} className={inp}>{LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}</select></Field>
              <Field label="Services mentioned">
                <div className="flex flex-wrap gap-1.5">
                  {SERVICES.map((s) => {
                    const on = (draft.services || []).includes(s);
                    return <button key={s} type="button" onClick={() => toggleService(s)} className="rounded-full border px-3 py-1 text-[12px]"
                      style={on ? { borderColor: "#0A7A40", background: "rgba(10,122,64,0.12)", color: "#0A7A40" } : { borderColor: "var(--border)", color: "var(--text-muted)" }}>{s}</button>;
                  })}
                </div>
              </Field>
              <Field label="Review text *"><textarea value={draft.text || ""} onChange={(e) => setDraft({ ...draft, text: e.target.value })} rows={5} className={inp} /></Field>
            </div>
            <div className="mt-lg flex items-center justify-between">
              <button onClick={save} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50"><Save size={14} /> {editing.id === 0 ? "Create" : "Save"}</button>
              {editing.id !== 0 && <button onClick={() => remove(editing.id)} disabled={busy} className="inline-flex items-center gap-1.5 text-[13px] text-danger hover:underline disabled:opacity-50"><Trash2 size={14} /> Delete</button>}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

const inp = "w-full rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1 block text-[12px] text-text-faint">{label}</span>{children}</label>;
}
