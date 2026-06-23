"use client";
import { useEffect, useState, useCallback } from "react";
import { Tag, Plus, Save, Loader2, ExternalLink } from "lucide-react";

// Per-URL pricing, linked SINGLE-SOURCE to the Prices module (data/seo.json .prices).
// Shown inside the SEO meta box for service URLs. Reads/writes prices whose `url` === this page's
// path, so price/timeline/warranty are edited in the same place as the page's keywords + meta —
// never duplicated. The Prices admin and the live Offer/Service schema stay the single source.
const PRICE_GROUPS = ["macbook", "imac", "mac-desktop", "iphone", "ipad"] as const;

type Price = {
  id: number; group: string; service: string; price: number;
  timeline: string; warranty: string; url?: string; schema_name?: string;
};

const inp = "w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";

export default function ServicePanel({ urlPath }: { urlPath?: string }) {
  const path = (urlPath || "").replace(/\/+$/, "") || "/";
  const [rows, setRows] = useState<Price[]>([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch("/api/admin/prices/", { credentials: "include" });
      const j = await r.json();
      const all: Price[] = j?.prices || [];
      const norm = (u?: string) => (u || "").replace(/\/+$/, "") || "/";
      setRows(all.filter((p) => norm(p.url) === path));
    } catch { setMsg("Could not load prices."); }
    setLoading(false);
  }, [path]);

  useEffect(() => { load(); }, [load]);

  if (path === "/" || !urlPath) {
    return <p className="m-0 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">Pricing is set per service URL — open a specific service page to link a price.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="m-0 text-[12px] text-text-muted">Prices linked to <code className="text-text">{path}</code> — edits sync to the <a href="/admin/prices" className="text-accent hover:underline">Prices module</a> &amp; the live Offer schema.</p>
        <a href="/admin/prices" className="inline-flex items-center gap-1 text-[12px] text-text-faint hover:text-text">Prices <ExternalLink size={12} /></a>
      </div>

      {loading ? (
        <p className="m-0 flex items-center gap-2 text-[13px] text-text-muted"><Loader2 size={14} className="animate-spin" /> Loading…</p>
      ) : (
        <>
          {rows.length === 0 && <p className="m-0 rounded-md border border-dashed border-border px-3 py-2 text-[13px] text-text-faint">No price is linked to this URL yet. Add one below.</p>}
          {rows.map((row) => <PriceRow key={row.id} row={row} onSaved={(m) => { setMsg(m); load(); }} />)}
          <AddRow path={path} onAdded={(m) => { setMsg(m); load(); }} />
          {msg && <p className="m-0 text-[12px] text-accent">{msg}</p>}
        </>
      )}
    </div>
  );
}

function PriceRow({ row, onSaved }: { row: Price; onSaved: (m: string) => void }) {
  const [price, setPrice] = useState(String(row.price));
  const [timeline, setTimeline] = useState(row.timeline);
  const [warranty, setWarranty] = useState(row.warranty);
  const [busy, setBusy] = useState(false);
  const dirty = price !== String(row.price) || timeline !== row.timeline || warranty !== row.warranty;

  const save = async () => {
    setBusy(true);
    try {
      const r = await fetch(`/api/admin/prices/${row.id}/`, {
        method: "PATCH", credentials: "include", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: Number(price) || 0, timeline: timeline.trim(), warranty: warranty.trim() }),
      });
      onSaved(r.ok ? `Saved "${row.service}".` : "Save failed.");
    } catch { onSaved("Save failed."); }
    setBusy(false);
  };

  return (
    <div className="rounded-md border border-border bg-bg-alt p-3">
      <p className="m-0 mb-2 flex items-center gap-1.5 text-[13px] font-semibold text-text"><Tag size={13} className="text-accent" /> {row.service} <span className="text-[11px] font-normal text-text-faint">· {row.group}</span></p>
      <div className="grid grid-cols-3 gap-2">
        <label className="block"><span className="mb-1 block text-[11px] text-text-faint">Price (AED)</span><input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className={inp} /></label>
        <label className="block"><span className="mb-1 block text-[11px] text-text-faint">Timeline</span><input value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inp} placeholder="e.g. 1–2 days" /></label>
        <label className="block"><span className="mb-1 block text-[11px] text-text-faint">Warranty</span><input value={warranty} onChange={(e) => setWarranty(e.target.value)} className={inp} placeholder="e.g. 3 months" /></label>
      </div>
      <div className="mt-2 flex justify-end">
        <button onClick={save} disabled={!dirty || busy} className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-40">
          {busy ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />} Save
        </button>
      </div>
    </div>
  );
}

function AddRow({ path, onAdded }: { path: string; onAdded: (m: string) => void }) {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<string>("macbook");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [timeline, setTimeline] = useState("");
  const [warranty, setWarranty] = useState("");
  const [busy, setBusy] = useState(false);

  const add = async () => {
    if (!service.trim() || !timeline.trim() || !warranty.trim()) { onAdded("Fill service, timeline & warranty."); return; }
    setBusy(true);
    try {
      const r = await fetch("/api/admin/prices/", {
        method: "POST", credentials: "include", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ group, service: service.trim(), price: Number(price) || 0, timeline: timeline.trim(), warranty: warranty.trim(), url: path }),
      });
      if (r.ok) { onAdded(`Added "${service.trim()}".`); setOpen(false); setService(""); setPrice(""); setTimeline(""); setWarranty(""); }
      else { const j = await r.json().catch(() => ({})); onAdded(j?.errors ? "Check the fields." : "Add failed."); }
    } catch { onAdded("Add failed."); }
    setBusy(false);
  };

  if (!open) return <button onClick={() => setOpen(true)} className="inline-flex items-center gap-1.5 self-start rounded-md border border-border px-3 py-1.5 text-[12px] text-text hover:border-accent"><Plus size={13} /> Add price for this URL</button>;

  return (
    <div className="rounded-md border border-accent/40 bg-bg-alt p-3">
      <p className="m-0 mb-2 text-[12px] font-semibold text-text">New price linked to {path}</p>
      <div className="grid grid-cols-2 gap-2">
        <label className="block"><span className="mb-1 block text-[11px] text-text-faint">Device group</span>
          <select value={group} onChange={(e) => setGroup(e.target.value)} className={inp}>{PRICE_GROUPS.map((g) => <option key={g} value={g}>{g}</option>)}</select>
        </label>
        <label className="block"><span className="mb-1 block text-[11px] text-text-faint">Service label</span><input value={service} onChange={(e) => setService(e.target.value)} className={inp} placeholder="e.g. MacBook Pro screen replacement" /></label>
        <label className="block"><span className="mb-1 block text-[11px] text-text-faint">Price (AED)</span><input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className={inp} /></label>
        <label className="block"><span className="mb-1 block text-[11px] text-text-faint">Timeline</span><input value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inp} placeholder="e.g. 1–2 days" /></label>
        <label className="block col-span-2"><span className="mb-1 block text-[11px] text-text-faint">Warranty</span><input value={warranty} onChange={(e) => setWarranty(e.target.value)} className={inp} placeholder="e.g. 3 months" /></label>
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button onClick={() => setOpen(false)} className="rounded-md border border-border px-3 py-1.5 text-[12px] text-text-muted">Cancel</button>
        <button onClick={add} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-40">
          {busy ? <Loader2 size={13} className="animate-spin" /> : <Plus size={13} />} Add price
        </button>
      </div>
    </div>
  );
}
