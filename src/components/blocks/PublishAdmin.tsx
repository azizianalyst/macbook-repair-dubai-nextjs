"use client";
import { useCallback, useEffect, useState } from "react";
import { Loader2, ArrowLeft, Rocket, Info, CheckCircle2, AlertTriangle } from "lucide-react";

export default function PublishAdmin() {
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/deploy/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const j = await res.json();
      setConfigured(!!j.configured);
    } catch { setConfigured(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  async function deploy() {
    if (!confirm("Publish all saved changes live? The site will rebuild on Hostinger in a few minutes.")) return;
    setBusy(true); setResult(null);
    try {
      const res = await fetch("/api/admin/deploy/", { method: "POST" });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const j = await res.json().catch(() => ({}));
      setResult({ ok: !!j.ok, msg: j.message || j.error || (j.ok ? "Deploy triggered." : "Could not trigger deploy.") });
    } catch { setResult({ ok: false, msg: "Could not reach the server." }); }
    finally { setBusy(false); }
  }

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex items-center gap-3">
        <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
        <h1 className="m-0 text-[24px] text-text">Publish</h1>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>Your site is <strong className="text-text">static</strong> (fast + secure). Edits you save in the admin go live when the site is <strong className="text-text">rebuilt &amp; deployed</strong>. Click Publish to push everything live at once.</span>
      </div>

      <div className="max-w-xl rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
        <h2 className="m-0 text-[18px] text-text">Publish changes live</h2>
        <p className="m-0 mt-1 text-[13px] text-text-muted">This rebuilds the site with all your saved edits — posts, prices, pages, menus, locations, reviews, settings — and deploys it. Takes a few minutes.</p>

        {configured === false && (
          <div className="mt-md rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 p-3 text-[13px] text-text">
            <p className="m-0 flex items-center gap-1.5 font-semibold text-[#fbbf24]"><AlertTriangle size={14} /> One-click deploy not connected yet</p>
            <p className="m-0 mt-1 text-text-muted">To enable the button, set <code className="text-text">HOSTINGER_API_TOKEN</code> in the server environment (direct Hostinger deploy — the server rebuilds &amp; redeploys itself with your saved edits). Until then, you can still publish by telling your developer to “deploy”.</p>
          </div>
        )}

        <button onClick={deploy} disabled={busy || configured === null} className="mt-md inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-[14px] font-semibold text-white disabled:opacity-50">
          {busy ? <Loader2 size={16} className="animate-spin" /> : <Rocket size={16} />} Publish &amp; deploy
        </button>

        {result && (
          <p className={`m-0 mt-md flex items-center gap-1.5 rounded-md border px-3 py-2 text-[13px] ${result.ok ? "border-whatsapp/40 bg-whatsapp/10 text-whatsapp" : "border-danger/40 bg-danger/10 text-danger"}`}>
            {result.ok ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />} {result.msg}
          </p>
        )}
      </div>
    </div>
  );
}
