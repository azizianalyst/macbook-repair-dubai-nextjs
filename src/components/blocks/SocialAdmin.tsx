"use client";
import { useCallback, useEffect, useState } from "react";
import { Loader2, ArrowLeft, Send, Clock, Trash2, Info, Facebook, Link2, Image as ImageIcon, ExternalLink, CheckCircle2, AlertTriangle } from "lucide-react";
import ImagePicker from "@/components/blocks/ImagePicker";

type Post = {
  id: number; text: string; link?: string; image?: string; platforms: string[];
  status: "draft" | "scheduled" | "published" | "failed"; scheduledFor?: string | null;
  createdAt: string; publishedAt?: string | null; externalId?: string; error?: string;
};

export default function SocialAdmin() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  // composer
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [when, setWhen] = useState("");
  // connect
  const [pageId, setPageId] = useState("");
  const [token, setToken] = useState("");

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/social/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setConfigured(!!d.configured); setPosts(d.posts || []);
    } catch { setErr("Could not load."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  async function connect() {
    if (!pageId.trim() || !token.trim()) return;
    setBusy(true); setErr("");
    try {
      const res = await fetch("/api/admin/social/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "connect", pageId, token }) });
      const d = await res.json().catch(() => ({}));
      if (res.ok && d.ok) { setToken(""); setMsg("Facebook connected."); await load(); } else setErr(d.error || "Connect failed.");
    } finally { setBusy(false); }
  }

  async function submit(publishNow: boolean) {
    if (!text.trim() && !image) { setErr("Add some text or an image."); return; }
    if (!publishNow && !when) { setErr("Pick a date/time to schedule, or use Publish now."); return; }
    setBusy(true); setErr(""); setMsg("");
    try {
      const res = await fetch("/api/admin/social/", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, link, image, platforms: ["facebook"], publishNow, scheduledFor: publishNow ? null : new Date(when).toISOString() }) });
      const d = await res.json().catch(() => ({}));
      if (res.ok && d.ok) { setText(""); setLink(""); setImage(""); setWhen(""); setMsg(publishNow ? "Published to Facebook." : "Scheduled."); await load(); }
      else setErr(d.error || "Failed.");
    } finally { setBusy(false); }
  }
  async function publishNow(id: number) {
    setBusy(true); setErr("");
    try {
      const res = await fetch("/api/admin/social/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "publish", id }) });
      const d = await res.json().catch(() => ({}));
      if (!(res.ok && d.ok)) setErr(d.error || "Publish failed."); await load();
    } finally { setBusy(false); }
  }
  async function remove(id: number) {
    if (!confirm("Delete this post?")) return;
    const res = await fetch(`/api/admin/social/?id=${id}`, { method: "DELETE" });
    if (res.ok) load();
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex items-center gap-3">
        <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
        <h1 className="m-0 text-[24px] text-text">Social publishing</h1>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>Compose once and post to <strong className="text-text">Facebook</strong> — publish now or schedule. Instagram next. Scheduled posts go out via a cron/agent calling the publisher.</span>
      </div>
      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}
      {msg && <p className="mb-md rounded-md border border-whatsapp/40 bg-whatsapp/10 px-3 py-2 text-[13px] text-whatsapp">{msg}</p>}

      {/* Connect card */}
      {configured === false && (
        <div className="mb-lg rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 p-md">
          <p className="m-0 mb-2 flex items-center gap-1.5 text-[13px] font-semibold text-[#fbbf24]"><Facebook size={15} /> Connect Facebook to publish</p>
          <p className="m-0 mb-3 text-[12px] text-text-muted">Paste your Facebook <strong className="text-text">Page ID</strong> and a <strong className="text-text">Page access token</strong> (with <code>pages_manage_posts</code>) from your Meta app / Graph API Explorer. Stored securely on the server.</p>
          <div className="flex flex-wrap items-end gap-2">
            <label className="block min-w-[160px]"><span className="mb-1 block text-[12px] text-text-faint">Page ID</span><input value={pageId} onChange={(e) => setPageId(e.target.value)} className={inp} /></label>
            <label className="block min-w-[280px] flex-1"><span className="mb-1 block text-[12px] text-text-faint">Page access token</span><input value={token} onChange={(e) => setToken(e.target.value)} type="password" className={inp} /></label>
            <button onClick={connect} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">Connect</button>
          </div>
        </div>
      )}
      {configured && <p className="mb-md inline-flex items-center gap-1.5 rounded-md border border-whatsapp/40 bg-whatsapp/10 px-2.5 py-1 text-[12px] text-whatsapp"><CheckCircle2 size={13} /> Facebook connected</p>}

      {/* Composer */}
      <div className="mb-lg rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
        <p className="m-0 mb-2 text-[13px] font-semibold text-text">New post</p>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} placeholder="What do you want to post?" className={inp} />
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <label className="block"><span className="mb-1 flex items-center gap-1 text-[12px] text-text-faint"><Link2 size={12} /> Link (optional)</span><input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://macbook-repair-dubai.ae/…" className={inp} /></label>
          <div><span className="mb-1 flex items-center gap-1 text-[12px] text-text-faint"><ImageIcon size={12} /> Image (optional)</span><ImagePicker value={image} onChange={setImage} /></div>
        </div>
        <div className="mt-3 flex flex-wrap items-end gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-2 text-[12px] text-text-muted"><Facebook size={14} className="text-[#1877f2]" /> Facebook</span>
          <label className="block"><span className="mb-1 block text-[12px] text-text-faint">Schedule for</span><input type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} className={inp} /></label>
          <button onClick={() => submit(false)} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-[13px] text-text hover:border-accent disabled:opacity-50"><Clock size={14} /> Schedule</button>
          <button onClick={() => submit(true)} disabled={busy || !configured} title={configured ? "" : "Connect Facebook first"} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />} Publish now</button>
        </div>
      </div>

      {/* History */}
      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[640px] text-[13px]">
          <thead className="bg-bg-card text-text-muted"><tr className="text-left">{["Post", "Status", "When", ""].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr></thead>
          <tbody>
            {posts.length === 0 && <tr><td colSpan={4} className="px-3 py-8 text-center text-text-faint">No posts yet.</td></tr>}
            {posts.map((p) => (
              <tr key={p.id} className="border-t border-border align-top hover:bg-bg-alt/60">
                <td className="px-3 py-2 max-w-[360px]">
                  <p className="m-0 line-clamp-2 text-text">{p.text || <span className="text-text-faint">(image only)</span>}</p>
                  {p.image && <p className="m-0 text-[11px] text-text-faint">🖼 {p.image}</p>}
                  {p.link && <p className="m-0 truncate text-[11px] text-accent">{p.link}</p>}
                  {p.error && <p className="m-0 text-[11px] text-danger">⚠ {p.error}</p>}
                </td>
                <td className="px-3 py-2"><StatusBadge s={p.status} /></td>
                <td className="px-3 py-2 whitespace-nowrap text-text-faint">{p.publishedAt ? new Date(p.publishedAt).toLocaleString() : p.scheduledFor ? `⏰ ${new Date(p.scheduledFor).toLocaleString()}` : new Date(p.createdAt).toLocaleDateString()}</td>
                <td className="px-2 py-2 text-right whitespace-nowrap">
                  {p.externalId && <a href={`https://facebook.com/${p.externalId}`} target="_blank" rel="noopener noreferrer" className="mr-1 inline-flex rounded p-1 text-text-faint hover:text-accent" title="View on Facebook"><ExternalLink size={13} /></a>}
                  {(p.status === "draft" || p.status === "failed" || p.status === "scheduled") && <button onClick={() => publishNow(p.id)} disabled={busy || !configured} className="mr-1 inline-flex rounded p-1 text-text-faint hover:text-whatsapp disabled:opacity-40" title="Publish now"><Send size={13} /></button>}
                  <button onClick={() => remove(p.id)} className="inline-flex rounded p-1 text-text-faint hover:text-danger" title="Delete"><Trash2 size={13} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ s }: { s: Post["status"] }) {
  const m = {
    published: { c: "#16a34a", t: "Published", I: CheckCircle2 },
    scheduled: { c: "#0ea5e9", t: "Scheduled", I: Clock },
    draft: { c: "#64748b", t: "Draft", I: Clock },
    failed: { c: "#ef4444", t: "Failed", I: AlertTriangle },
  }[s];
  const I = m.I;
  return <span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-semibold" style={{ color: m.c, background: `${m.c}1f` }}><I size={11} /> {m.t}</span>;
}

const inp = "w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
