"use client";
import { useCallback, useEffect, useState } from "react";
import { Loader2, ArrowLeft, Save, Plus, X, ChevronUp, ChevronDown, Info } from "lucide-react";

type Link = { label: string; href: string };
type Panel = { key: string; label: string; href: string; viewAll?: string; links?: Link[] };
type Column = { key: string; heading: string; links: Link[] };
type Menus = { header: Panel[]; footer: Column[] };

const move = <T,>(arr: T[], i: number, dir: -1 | 1): T[] => {
  const j = i + dir; if (j < 0 || j >= arr.length) return arr;
  const next = arr.slice(); [next[i], next[j]] = [next[j], next[i]]; return next;
};
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "item";

export default function MenusAdmin() {
  const [m, setM] = useState<Menus>({ header: [], footer: [] });
  const [routes, setRoutes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [tab, setTab] = useState<"header" | "footer">("header");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/menus/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const j = await res.json();
      if (j.menus) setM({ header: j.menus.header || [], footer: j.menus.footer || [] });
      setRoutes(j.routes || []);
    } catch { setErr("Could not load menus."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const setHeader = (header: Panel[]) => setM((p) => ({ ...p, header }));
  const setFooter = (footer: Column[]) => setM((p) => ({ ...p, footer }));
  const patchPanel = (i: number, patch: Partial<Panel>) => setHeader(m.header.map((p, j) => j === i ? { ...p, ...patch } : p));
  const patchCol = (i: number, patch: Partial<Column>) => setFooter(m.footer.map((c, j) => j === i ? { ...c, ...patch } : c));

  async function save() {
    setBusy(true); setErr(""); setMsg("");
    try {
      const res = await fetch("/api/admin/menus/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(m) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const j = await res.json().catch(() => ({}));
      if (!res.ok) { setErr(j.error || "Save failed."); return; }
      setMsg("Saved. Nav updates on the next deploy.");
    } catch { setErr("Could not reach the server."); }
    finally { setBusy(false); }
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="mx-auto max-w-content">
      <datalist id="route-list">{routes.map((r) => <option key={r} value={r} />)}</datalist>

      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Menus</h1>
        </div>
        <button onClick={save} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save</button>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>Edit the <strong className="text-text">header menu</strong> and <strong className="text-text">footer columns</strong>. Internal links must point to a real page (autocomplete from the list). A footer label may use <code className="text-text">{"{REVIEW_COUNT}"}</code>. Applies on the <strong className="text-text">next deploy</strong>.</span>
      </div>

      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}
      {msg && <p className="mb-md rounded-md border border-whatsapp/40 bg-whatsapp/10 px-3 py-2 text-[13px] text-whatsapp">{msg}</p>}

      <div className="mb-md flex items-center gap-1 border-b border-border">
        {(["header", "footer"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`border-b-2 px-3 py-2 text-[13px] capitalize ${tab === t ? "border-accent font-semibold text-text" : "border-transparent text-text-muted hover:text-text"}`}>{t} menu</button>
        ))}
      </div>

      {tab === "header" && (
        <div className="flex flex-col gap-3">
          {m.header.map((p, i) => (
            <div key={i} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
              <div className="mb-2 flex items-center gap-2">
                <input value={p.label} onChange={(e) => patchPanel(i, { label: e.target.value })} placeholder="Menu label" className={inp + " font-semibold"} />
                <div className="flex shrink-0 items-center gap-1">
                  <IconBtn onClick={() => setHeader(move(m.header, i, -1))}><ChevronUp size={15} /></IconBtn>
                  <IconBtn onClick={() => setHeader(move(m.header, i, 1))}><ChevronDown size={15} /></IconBtn>
                  <IconBtn onClick={() => setHeader(m.header.filter((_, j) => j !== i))} danger><X size={15} /></IconBtn>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <HrefInput value={p.href} onChange={(v) => patchPanel(i, { href: v })} placeholder="Top link /href" />
                <input value={p.viewAll || ""} onChange={(e) => patchPanel(i, { viewAll: e.target.value })} placeholder="“View all” label (optional)" className={inp} />
              </div>
              <LinkRows links={p.links || []} onChange={(links) => patchPanel(i, { links })} />
            </div>
          ))}
          <button onClick={() => setHeader([...m.header, { key: slug("panel" + (m.header.length + 1)), label: "New menu", href: "/", links: [] }])} className="inline-flex w-fit items-center gap-1 rounded-md border border-dashed border-border px-3 py-2 text-[13px] text-text-muted hover:text-text"><Plus size={14} /> Add menu</button>
        </div>
      )}

      {tab === "footer" && (
        <div className="flex flex-col gap-3">
          {m.footer.map((c, i) => (
            <div key={i} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
              <div className="mb-2 flex items-center gap-2">
                <input value={c.heading} onChange={(e) => patchCol(i, { heading: e.target.value })} placeholder="Column heading" className={inp + " font-semibold"} />
                <div className="flex shrink-0 items-center gap-1">
                  <IconBtn onClick={() => setFooter(move(m.footer, i, -1))}><ChevronUp size={15} /></IconBtn>
                  <IconBtn onClick={() => setFooter(move(m.footer, i, 1))}><ChevronDown size={15} /></IconBtn>
                  <IconBtn onClick={() => setFooter(m.footer.filter((_, j) => j !== i))} danger><X size={15} /></IconBtn>
                </div>
              </div>
              <LinkRows links={c.links} onChange={(links) => patchCol(i, { links })} />
            </div>
          ))}
          <button onClick={() => setFooter([...m.footer, { key: slug("col" + (m.footer.length + 1)), heading: "New column", links: [] }])} className="inline-flex w-fit items-center gap-1 rounded-md border border-dashed border-border px-3 py-2 text-[13px] text-text-muted hover:text-text"><Plus size={14} /> Add column</button>
        </div>
      )}
    </div>
  );
}

function LinkRows({ links, onChange }: { links: Link[]; onChange: (l: Link[]) => void }) {
  const patch = (i: number, p: Partial<Link>) => onChange(links.map((l, j) => j === i ? { ...l, ...p } : l));
  return (
    <div className="mt-2 flex flex-col gap-1.5 border-t border-border pt-2">
      {links.map((l, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <input value={l.label} onChange={(e) => patch(i, { label: e.target.value })} placeholder="Link text" className={inp} />
          <HrefInput value={l.href} onChange={(v) => patch(i, { href: v })} placeholder="/href" />
          <IconBtn onClick={() => onChange(move(links, i, -1))}><ChevronUp size={14} /></IconBtn>
          <IconBtn onClick={() => onChange(move(links, i, 1))}><ChevronDown size={14} /></IconBtn>
          <IconBtn onClick={() => onChange(links.filter((_, j) => j !== i))} danger><X size={14} /></IconBtn>
        </div>
      ))}
      <button onClick={() => onChange([...links, { label: "", href: "" }])} className="inline-flex w-fit items-center gap-1 text-[12px] text-accent hover:underline"><Plus size={13} /> Add link</button>
    </div>
  );
}

function HrefInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return <input list="route-list" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={inp + " font-mono text-[12px]"} />;
}

function IconBtn({ onClick, children, danger }: { onClick: () => void; children: React.ReactNode; danger?: boolean }) {
  return <button onClick={onClick} className={`shrink-0 rounded border border-border p-1.5 ${danger ? "text-text-faint hover:text-danger" : "text-text-muted hover:text-text"}`}>{children}</button>;
}

const inp = "w-full rounded-md border border-border bg-bg px-2 py-1.5 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
