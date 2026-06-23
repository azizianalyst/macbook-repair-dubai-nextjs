"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, ArrowLeft, Save, Plus, X, Search, ExternalLink, RotateCcw, Info } from "lucide-react";

type Faq = { q: string; a: string };
type Item = Record<string, unknown> & { slug: string; path: string; faqs?: Faq[]; overridden?: boolean };

// Fields shown in the editor per kind (key → label). Structural fields (landmarks/travel/etc.) stay in code.
const AREA_FIELDS: [string, string][] = [["area", "Area name"], ["short", "Short name"], ["driveTime", "Drive time"], ["pickupWindow", "Pickup window"], ["metroNote", "Metro / transport note"], ["landmarkLine", "Hero landmark line"]];
const CITY_FIELDS: [string, string][] = [["city", "City name"], ["short", "Short name"], ["distance", "Distance"], ["collectionWindow", "Collection window"], ["turnaround", "Turnaround"], ["landmarkLine", "Hero landmark line"]];
const AREA_PROSE: [string, string][] = [["intro", "Intro (80–120 words)"], ["whyChoose", "Why choose us"], ["pickupNote", "How pickup works"]];
const CITY_PROSE: [string, string][] = [["intro", "Intro (80–120 words)"], ["whyChoose", "Why choose us"], ["collectionNote", "How collection works"]];

export default function LocationsAdmin() {
  const [areas, setAreas] = useState<Item[]>([]);
  const [cities, setCities] = useState<Item[]>([]);
  const [tab, setTab] = useState<"area" | "city">("area");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState<Item | null>(null);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/locations/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setAreas(d.areas || []); setCities(d.cities || []);
    } catch { setErr("Could not load locations."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const list = tab === "area" ? areas : cities;
  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase();
    return n ? list.filter((x) => JSON.stringify(x).toLowerCase().includes(n)) : list;
  }, [list, q]);

  if (editing) return <Editor kind={tab} item={editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} />;
  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex items-center gap-3">
        <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
        <h1 className="m-0 text-[24px] text-text">Locations</h1>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>Edit the <strong className="text-text">copy &amp; FAQs</strong> on your {areas.length} Dubai-area and {cities.length} UAE-city landing pages. Structural bits (landmarks, travel tables) stay in code. Applies on the <strong className="text-text">next deploy</strong>.</span>
      </div>
      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}

      <div className="mb-md flex items-center gap-1 border-b border-border">
        <button onClick={() => setTab("area")} className={`border-b-2 px-3 py-2 text-[13px] ${tab === "area" ? "border-accent font-semibold text-text" : "border-transparent text-text-muted hover:text-text"}`}>Areas ({areas.length})</button>
        <button onClick={() => setTab("city")} className={`border-b-2 px-3 py-2 text-[13px] ${tab === "city" ? "border-accent font-semibold text-text" : "border-transparent text-text-muted hover:text-text"}`}>Cities ({cities.length})</button>
      </div>

      <div className="relative mb-md max-w-md">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] pl-9 pr-3 py-2 text-[14px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((it) => (
          <button key={it.slug} onClick={() => setEditing(it)} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-3 text-left hover:border-accent">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-text">{String(it[tab === "area" ? "area" : "city"])}</span>
              {it.overridden && <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[11px] text-accent">edited</span>}
            </div>
            <span className="text-[11px] text-text-faint">{it.path}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Editor({ kind, item, onClose, onSaved }: { kind: "area" | "city"; item: Item; onClose: () => void; onSaved: () => void }) {
  const [d, setD] = useState<Item>({ ...item, faqs: (item.faqs as Faq[]) || [] });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const fields = kind === "area" ? AREA_FIELDS : CITY_FIELDS;
  const prose = kind === "area" ? AREA_PROSE : CITY_PROSE;
  const set = (k: string, v: unknown) => setD((p) => ({ ...p, [k]: v }));
  const faqs = (d.faqs as Faq[]) || [];
  const setFaq = (i: number, k: keyof Faq, v: string) => set("faqs", faqs.map((f, j) => j === i ? { ...f, [k]: v } : f));

  async function save(reset = false) {
    setBusy(true); setErr("");
    const keys = [...fields, ...prose].map(([k]) => k);
    const override: Record<string, unknown> = { slug: d.slug };
    if (!reset) { for (const k of keys) override[k] = d[k] || ""; override.faqs = faqs; }
    try {
      const res = await fetch("/api/admin/locations/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, override }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (!res.ok) { setErr("Save failed."); return; }
      onSaved();
    } catch { setErr("Could not reach the server."); }
    finally { setBusy(false); }
  }

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-md flex flex-wrap items-center justify-between gap-sm">
        <button onClick={onClose} className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> All locations</button>
        <div className="flex items-center gap-2">
          <a href={String(d.path)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-text-muted hover:text-text"><ExternalLink size={14} /> View</a>
          {item.overridden && <button onClick={() => save(true)} disabled={busy} className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-text-muted hover:text-text disabled:opacity-50"><RotateCcw size={14} /> Reset</button>}
          <button onClick={() => save(false)} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save</button>
        </div>
      </div>
      <h2 className="m-0 mb-md text-[18px] text-text">{String(d[kind === "area" ? "area" : "city"])} <span className="text-[13px] text-text-faint">{d.path}</span></h2>
      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}

      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map(([k, label]) => (
          <label key={k} className="block"><span className="mb-1 block text-[12px] text-text-faint">{label}</span>
            <input value={String(d[k] || "")} onChange={(e) => set(k, e.target.value)} className={inp} /></label>
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {prose.map(([k, label]) => (
          <label key={k} className="block"><span className="mb-1 block text-[12px] text-text-faint">{label}</span>
            <textarea value={String(d[k] || "")} onChange={(e) => set(k, e.target.value)} rows={4} className={inp} /></label>
        ))}
      </div>

      <div className="mt-md rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="m-0 text-[14px] text-text">FAQs ({faqs.length})</h3>
          <button onClick={() => set("faqs", [...faqs, { q: "", a: "" }])} className="inline-flex items-center gap-1 text-[12px] text-accent hover:underline"><Plus size={13} /> Add</button>
        </div>
        <div className="flex flex-col gap-2">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-md border border-border p-2">
              <div className="mb-1 flex items-center gap-2">
                <input value={f.q} onChange={(e) => setFaq(i, "q", e.target.value)} placeholder="Question" className={inp} />
                <button onClick={() => set("faqs", faqs.filter((_, j) => j !== i))} className="text-text-faint hover:text-danger"><X size={15} /></button>
              </div>
              <textarea value={f.a} onChange={(e) => setFaq(i, "a", e.target.value)} placeholder="Answer" rows={2} className={inp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const inp = "w-full rounded-md border border-border bg-bg px-2 py-1.5 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
