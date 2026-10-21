"use client";
import { useCallback, useEffect, useState } from "react";
import { Loader2, Plus, Trash2, Save, Pencil, X, RefreshCw, Info, Download, Upload } from "lucide-react";

const DEVICES = ["iphone", "ipad", "macbook"] as const;
type Device = (typeof DEVICES)[number];
const DEVICE_LABEL: Record<Device, string> = { iphone: "iPhone", ipad: "iPad", macbook: "MacBook" };

type ScreenPrice = {
  id: number;
  device: Device;
  model: string;
  price: number;
  apple_price: number;
  note: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

const EMPTY: Omit<ScreenPrice, "id" | "created_at" | "updated_at"> = {
  device: "macbook", model: "", price: 0, apple_price: 0, note: "", sort_order: 0,
};

export default function ScreenPricesAdmin({ embedded }: { embedded?: boolean } = {}) {
  const [prices, setPrices] = useState<ScreenPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [tab, setTab] = useState<Device>("macbook");
  const [editing, setEditing] = useState<ScreenPrice | null>(null);
  const [draft, setDraft] = useState<Partial<ScreenPrice>>({});
  const [adding, setAdding] = useState(false);
  const [newRow, setNewRow] = useState({ ...EMPTY, device: "macbook" as Device });
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const r = await fetch("/api/admin/screen-prices/", { cache: "no-store" });
      if (r.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await r.json();
      setPrices(d.prices || []);
    } catch { setErr("Could not load."); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const rows = prices.filter((p) => p.device === tab).sort((a, b) => a.sort_order - b.sort_order || a.id - b.id);

  // ---- CSV bulk edit (export all → edit in Excel → import; matched by id) ----
  const CSV_COLS = ["id", "device", "model", "price", "apple_price", "note", "sort_order"] as const;
  function exportCsv() {
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const body = [CSV_COLS.join(","), ...prices.map((r) => CSV_COLS.map((c) => esc((r as Record<string, unknown>)[c])).join(","))].join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([body], { type: "text/csv;charset=utf-8" }));
    a.download = `screen-prices-${new Date().toISOString().slice(0, 10)}.csv`; a.click(); URL.revokeObjectURL(a.href);
  }
  async function importCsv(file: File) {
    setBusy(true); setErr("");
    try {
      const text = await file.text();
      const lines = text.split(/\r?\n/).filter((l) => l.trim());
      const head = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/^"|"$/g, ""));
      const idx = (n: string) => head.indexOf(n);
      const cell = (cols: string[], n: string) => { const i = idx(n); return i >= 0 ? (cols[i] || "").replace(/^"|"$/g, "").replace(/""/g, '"').trim() : ""; };
      const items = lines.slice(1).map((line) => {
        const cols = line.match(/("([^"]|"")*"|[^,]*)(,|$)/g)?.map((c) => c.replace(/,$/, "")) || [];
        const o: Record<string, unknown> = {
          device: cell(cols, "device"), model: cell(cols, "model"),
          price: Number(cell(cols, "price")) || 0, apple_price: Number(cell(cols, "apple_price")) || 0,
          note: cell(cols, "note"), sort_order: Number(cell(cols, "sort_order")) || 0,
        };
        const id = cell(cols, "id"); if (id) o.id = Number(id);
        return o;
      }).filter((o) => o.model && DEVICES.includes(o.device as Device));
      const r = await fetch("/api/admin/screen-prices/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items }) });
      if (r.status === 401) return void (window.location.href = "/admin/login");
      if (r.ok) { setSaved(true); setTimeout(() => setSaved(false), 2000); await load(); } else setErr("Import failed — check columns.");
    } catch { setErr("Import failed — check the CSV."); }
    finally { setBusy(false); }
  }

  async function saveEdit() {
    if (!editing) return;
    setBusy(true);
    const r = await fetch(`/api/admin/screen-prices/${editing.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });
    setBusy(false);
    if (r.ok) { setSaved(true); setTimeout(() => setSaved(false), 2000); setEditing(null); load(); }
    else setErr("Save failed.");
  }

  async function addRow() {
    setBusy(true);
    const r = await fetch("/api/admin/screen-prices/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newRow, device: tab }),
    });
    setBusy(false);
    if (r.ok) { setAdding(false); setNewRow({ ...EMPTY, device: tab }); load(); }
    else setErr("Add failed.");
  }

  async function deleteRow(id: number) {
    if (!confirm("Delete this price row?")) return;
    await fetch(`/api/admin/screen-prices/${id}`, { method: "DELETE" });
    load();
  }

  const fmtAED = (n: number) => `AED ${n.toLocaleString()}`;

  return (
    <div className={embedded ? "space-y-6" : "space-y-6 p-4 md:p-8 max-w-5xl mx-auto"}>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          {!embedded && <h1 className="text-2xl font-bold">Screen Prices</h1>}
          <p className="text-sm text-text-muted mt-1">
            Per-model screen prices (with Apple comparison). Edit here → rebuild → blog cost-guides &amp; service pages update automatically.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={exportCsv} className="flex items-center gap-2 text-sm px-3 py-1.5 rounded border border-border hover:bg-surface"><Download className="w-3.5 h-3.5" /> Export CSV</button>
          <label className="flex cursor-pointer items-center gap-2 text-sm px-3 py-1.5 rounded border border-border hover:bg-surface">
            <Upload className="w-3.5 h-3.5" /> Import CSV
            <input type="file" accept=".csv,text/csv" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) importCsv(f); e.target.value = ""; }} />
          </label>
          <button onClick={load} className="flex items-center gap-2 text-sm px-3 py-1.5 rounded border border-border hover:bg-surface"><RefreshCw className="w-3.5 h-3.5" /> Refresh</button>
        </div>
      </div>

      {err && (
        <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-sm">{err}</div>
      )}

      <div className="flex items-center gap-1 border-b border-border">
        {DEVICES.map((d) => (
          <button
            key={d}
            onClick={() => { setTab(d); setEditing(null); setAdding(false); }}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${tab === d ? "border-accent text-accent" : "border-transparent text-text-muted hover:text-text"}`}
          >
            {DEVICE_LABEL[d]}
            <span className="ml-1.5 text-xs opacity-60">({prices.filter((p) => p.device === d).length})</span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-text-muted"><Loader2 className="w-4 h-4 animate-spin" /> Loading…</div>
      ) : (
        <>
          <div className="rounded-lg border border-border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-surface text-text-muted text-xs uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-2 text-left">Order</th>
                  <th className="px-4 py-2 text-left">Model</th>
                  <th className="px-4 py-2 text-right">Our Price</th>
                  <th className="px-4 py-2 text-right">Apple Price</th>
                  <th className="px-4 py-2 text-left">Note</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((row) =>
                  editing?.id === row.id ? (
                    <tr key={row.id} className="bg-blue-50/50">
                      <td className="px-4 py-2">
                        <input type="number" value={draft.sort_order ?? row.sort_order} onChange={(e) => setDraft((d) => ({ ...d, sort_order: Number(e.target.value) }))}
                          className="w-16 border border-border rounded px-2 py-1 text-sm" />
                      </td>
                      <td className="px-4 py-2">
                        <input value={draft.model ?? row.model} onChange={(e) => setDraft((d) => ({ ...d, model: e.target.value }))}
                          className="w-full border border-border rounded px-2 py-1 text-sm" />
                      </td>
                      <td className="px-4 py-2">
                        <input type="number" value={draft.price ?? row.price} onChange={(e) => setDraft((d) => ({ ...d, price: Number(e.target.value) }))}
                          className="w-24 border border-border rounded px-2 py-1 text-sm text-right" />
                      </td>
                      <td className="px-4 py-2">
                        <input type="number" value={draft.apple_price ?? row.apple_price} onChange={(e) => setDraft((d) => ({ ...d, apple_price: Number(e.target.value) }))}
                          className="w-24 border border-border rounded px-2 py-1 text-sm text-right" />
                      </td>
                      <td className="px-4 py-2">
                        <input value={draft.note ?? row.note} onChange={(e) => setDraft((d) => ({ ...d, note: e.target.value }))}
                          className="w-full border border-border rounded px-2 py-1 text-sm" />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-1">
                          <button onClick={saveEdit} disabled={busy} className="p-1.5 rounded bg-accent text-white hover:bg-accent/90 disabled:opacity-50">
                            {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                          </button>
                          <button onClick={() => setEditing(null)} className="p-1.5 rounded border border-border hover:bg-surface">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <tr key={row.id} className="hover:bg-surface/50">
                      <td className="px-4 py-2 text-text-muted">{row.sort_order}</td>
                      <td className="px-4 py-2 font-medium">{row.model}</td>
                      <td className="px-4 py-2 text-right font-mono text-green-700">{fmtAED(row.price)}</td>
                      <td className="px-4 py-2 text-right font-mono text-text-muted">{fmtAED(row.apple_price)}</td>
                      <td className="px-4 py-2 text-text-muted text-xs">{row.note}</td>
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-1">
                          <button onClick={() => { setEditing(row); setDraft({}); }} className="p-1.5 rounded border border-border hover:bg-surface">
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => deleteRow(row.id)} className="p-1.5 rounded border border-border hover:bg-red-50 hover:border-red-300 hover:text-red-600">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}

                {adding && (
                  <tr className="bg-green-50/50">
                    <td className="px-4 py-2">
                      <input type="number" value={newRow.sort_order} onChange={(e) => setNewRow((r) => ({ ...r, sort_order: Number(e.target.value) }))}
                        className="w-16 border border-border rounded px-2 py-1 text-sm" placeholder="Order" />
                    </td>
                    <td className="px-4 py-2">
                      <input value={newRow.model} onChange={(e) => setNewRow((r) => ({ ...r, model: e.target.value }))}
                        className="w-full border border-border rounded px-2 py-1 text-sm" placeholder="Model name" autoFocus />
                    </td>
                    <td className="px-4 py-2">
                      <input type="number" value={newRow.price} onChange={(e) => setNewRow((r) => ({ ...r, price: Number(e.target.value) }))}
                        className="w-24 border border-border rounded px-2 py-1 text-sm text-right" placeholder="AED" />
                    </td>
                    <td className="px-4 py-2">
                      <input type="number" value={newRow.apple_price} onChange={(e) => setNewRow((r) => ({ ...r, apple_price: Number(e.target.value) }))}
                        className="w-24 border border-border rounded px-2 py-1 text-sm text-right" placeholder="AED" />
                    </td>
                    <td className="px-4 py-2">
                      <input value={newRow.note} onChange={(e) => setNewRow((r) => ({ ...r, note: e.target.value }))}
                        className="w-full border border-border rounded px-2 py-1 text-sm" placeholder="Panel tech note" />
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-1">
                        <button onClick={addRow} disabled={busy || !newRow.model} className="p-1.5 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-50">
                          {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                        </button>
                        <button onClick={() => setAdding(false)} className="p-1.5 rounded border border-border hover:bg-surface">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <button
              onClick={() => { setAdding(true); setEditing(null); setNewRow({ ...EMPTY, device: tab }); }}
              className="flex items-center gap-2 px-4 py-2 rounded bg-accent text-white text-sm hover:bg-accent/90"
            >
              <Plus className="w-4 h-4" /> Add {DEVICE_LABEL[tab]} model
            </button>

            {saved && (
              <span className="text-sm text-green-600 font-medium">Saved ✓</span>
            )}

            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Info className="w-4 h-4 shrink-0" />
              <span>Changes apply at next build. Run <code className="bg-surface px-1 rounded text-xs">npm run build</code> to regenerate the blog &amp; service pages.</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
