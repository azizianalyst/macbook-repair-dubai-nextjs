"use client";
import { useCallback, useEffect, useState } from "react";
import { Loader2, ArrowLeft, Save, Info, AlertTriangle, Sparkles, CheckCircle2, Link2Off } from "lucide-react";

type Settings = {
  tagline: string; sitemapLastmod: string; timezone: string;
  siteNoindex?: boolean; homepageNoindex?: boolean;
};
const DEFAULTS: Settings = { tagline: "", sitemapLastmod: "2026-06-18", timezone: "Asia/Dubai", siteNoindex: false, homepageNoindex: false };

export default function SettingsAdmin() {
  const [d, setD] = useState<Settings>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const j = await res.json();
      if (j.settings) setD({ ...DEFAULTS, ...j.settings });
    } catch { setErr("Could not load settings."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const set = <K extends keyof Settings>(k: K, v: Settings[K]) => setD((p) => ({ ...p, [k]: v }));

  // --- Connect Claude AI (Anthropic key via dashboard) ---
  type AiStatus = { configured: boolean; source: string | null; masked: string; envLocked: boolean };
  const [ai, setAi] = useState<AiStatus | null>(null);
  const [aiKey, setAiKey] = useState("");
  const [aiBusy, setAiBusy] = useState(false);
  const [aiMsg, setAiMsg] = useState("");
  const loadAi = useCallback(async () => {
    try { const r = await fetch("/api/admin/ai/key/", { cache: "no-store" }); if (r.ok) setAi(await r.json()); } catch {}
  }, []);
  useEffect(() => { loadAi(); }, [loadAi]);
  async function connectAi() {
    setAiBusy(true); setAiMsg("");
    try {
      const r = await fetch("/api/admin/ai/key/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ apiKey: aiKey.trim() }) });
      if (r.status === 401) return void (window.location.href = "/admin/login");
      const j = await r.json().catch(() => ({}));
      if (!r.ok) { setAiMsg(j.error || "Could not save the key."); return; }
      setAiKey(""); setAiMsg("Connected ✓ AI optimization is now live."); loadAi();
    } catch { setAiMsg("Could not reach the server."); }
    finally { setAiBusy(false); }
  }
  async function disconnectAi() {
    if (!confirm("Disconnect Claude AI? The Optimize button will stop working until you reconnect.")) return;
    setAiBusy(true); setAiMsg("");
    try { await fetch("/api/admin/ai/key/", { method: "DELETE" }); setAiMsg("Disconnected."); loadAi(); }
    finally { setAiBusy(false); }
  }

  async function save() {
    setBusy(true); setErr(""); setMsg("");
    try {
      const res = await fetch("/api/admin/settings/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (!res.ok) { setErr("Save failed — check the fields."); return; }
      setMsg("Saved. Applies on the next deploy.");
    } catch { setErr("Could not reach the server."); }
    finally { setBusy(false); }
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex items-center gap-3">
        <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
        <h1 className="m-0 text-[24px] text-text">Site Settings</h1>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>Global site config. Your <strong className="text-text">business name, phone, address &amp; hours</strong> live under <a href="/admin/business" className="text-accent hover:underline">Business / NAP</a>. Changes here apply on the <strong className="text-text">next deploy</strong>.</span>
      </div>

      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}
      {msg && <p className="mb-md rounded-md border border-whatsapp/40 bg-whatsapp/10 px-3 py-2 text-[13px] text-whatsapp">{msg}</p>}

      <div className="max-w-xl rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
        <div className="flex flex-col gap-4">
          <Field label="Tagline" hint="Short slogan — used in Organization schema">
            <input value={d.tagline} onChange={(e) => set("tagline", e.target.value)} className={inp} placeholder="Independent Apple Repair Specialists" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Sitemap last-updated" hint="Bump on a content review">
              <input type="date" value={d.sitemapLastmod} onChange={(e) => set("sitemapLastmod", e.target.value)} className={inp} />
            </Field>
            <Field label="Timezone" hint="For scheduling/display">
              <input value={d.timezone} onChange={(e) => set("timezone", e.target.value)} className={inp} placeholder="Asia/Dubai" />
            </Field>
          </div>

          <div className="rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/5 p-3">
            <p className="m-0 mb-2 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#fbbf24]"><AlertTriangle size={13} /> Search visibility</p>
            <label className="flex items-start gap-2 text-[13px]">
              <input type="checkbox" checked={!!d.homepageNoindex} onChange={(e) => set("homepageNoindex", e.target.checked)} className="mt-0.5" />
              <span><span className="text-text">Hide homepage from Google</span><span className="block text-[11px] text-text-faint">noindex on / only</span></span>
            </label>
            <label className="mt-2 flex items-start gap-2 text-[13px]">
              <input type="checkbox" checked={!!d.siteNoindex} onChange={(e) => set("siteNoindex", e.target.checked)} className="mt-0.5" />
              <span><span className="text-danger">Hide the ENTIRE site from Google</span><span className="block text-[11px] text-text-faint">emergency kill-switch — deindexes every page + robots.txt disallow. Leave OFF normally.</span></span>
            </label>
          </div>

          <button onClick={save} disabled={busy} className="inline-flex w-fit items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50">
            {busy ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save settings
          </button>
        </div>
      </div>

      {/* Connect Claude AI — paste the Anthropic API key here (powers "Optimize with AI"). */}
      <div className="mt-lg max-w-xl rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
        <h2 className="m-0 flex items-center gap-1.5 text-[18px] text-text"><Sparkles size={18} className="text-accent" /> Connect Claude AI</h2>
        <p className="m-0 mt-1 text-[13px] text-text-muted">Paste your Anthropic API key to power the <strong className="text-text">“Optimize with AI”</strong> button on posts &amp; pages. Get one at <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">console.anthropic.com</a> (add a little billing credit first). Stored securely on the server; never shown again.</p>

        {ai?.configured ? (
          <div className="mt-md flex flex-wrap items-center gap-3 rounded-md border border-whatsapp/40 bg-whatsapp/10 px-3 py-2 text-[13px]">
            <span className="inline-flex items-center gap-1.5 font-semibold text-whatsapp"><CheckCircle2 size={15} /> Connected</span>
            <span className="font-mono text-text-muted">{ai.masked}</span>
            <span className="text-[11px] text-text-faint">via {ai.source === "env" ? "server env" : "dashboard"}</span>
            {ai.source !== "env" && <button onClick={disconnectAi} disabled={aiBusy} className="ml-auto inline-flex items-center gap-1 text-[12px] text-danger hover:underline disabled:opacity-50"><Link2Off size={13} /> Disconnect</button>}
          </div>
        ) : (
          <div className="mt-md flex gap-2">
            <input value={aiKey} onChange={(e) => setAiKey(e.target.value)} placeholder="sk-ant-..." type="password" autoComplete="off"
              className="w-full rounded-md border border-border bg-bg px-3 py-2 font-mono text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
            <button onClick={connectAi} disabled={aiBusy || !aiKey.trim()} className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{aiBusy ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />} Connect</button>
          </div>
        )}
        {ai?.envLocked && <p className="m-0 mt-2 text-[12px] text-text-faint">A key is set via the server environment, which takes precedence.</p>}
        {aiMsg && <p className="m-0 mt-2 text-[12px] text-text-muted">{aiMsg}</p>}
      </div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center justify-between text-[12px] text-text-faint"><span>{label}</span>{hint && <span className="text-[11px]">{hint}</span>}</span>
      {children}
    </label>
  );
}

const inp = "w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
