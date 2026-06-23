"use client";
import { useCallback, useEffect, useState } from "react";
import { Loader2, ArrowLeft, Plus, Trash2, Info, ShieldCheck, Mail } from "lucide-react";
import { ROLES, ROLE_LABELS, type Role } from "@/lib/roles";

type Member = { email: string; role: Role; addedAt: string };

export default function TeamAdmin() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("pricing");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [googleOn, setGoogleOn] = useState<boolean | null>(null);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/team/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      if (!d.ok) { setErr(d.error || "Could not load team."); setMembers([]); }
      else setMembers(d.members || []);
    } catch { setErr("Could not load team."); }
    finally { setLoading(false); }
    // Detect whether Google sign-in is configured (team login needs it).
    try { const s = await (await fetch("/api/admin/me/", { cache: "no-store" })).json(); setGoogleOn(!!s?.googleEnabled); } catch { setGoogleOn(null); }
  }, []);
  useEffect(() => { load(); }, [load]);

  async function add() {
    if (!email.trim()) return;
    setBusy(true); setErr("");
    try {
      const res = await fetch("/api/admin/team/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email.trim(), role }) });
      const d = await res.json().catch(() => ({}));
      if (res.ok && d.ok) { setEmail(""); await load(); } else setErr(d.error || "Could not add member.");
    } finally { setBusy(false); }
  }
  async function remove(e: string) {
    if (!confirm(`Remove ${e}? They lose access on next sign-in.`)) return;
    const res = await fetch(`/api/admin/team/?email=${encodeURIComponent(e)}`, { method: "DELETE" });
    if (res.ok) load();
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex items-center gap-3">
        <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
        <h1 className="m-0 text-[24px] text-text">Team &amp; Roles</h1>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>Add team members by their <strong className="text-text">Google (Gmail) address</strong> and pick a role. They sign in with Google and get exactly that access. <strong className="text-text">You</strong> (the owner) always have full access via the admin key.</span>
      </div>

      {googleOn === false && (
        <p className="mb-md rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-2 text-[13px] text-[#fbbf24]">
          Google sign-in isn&apos;t configured yet, so team members can&apos;t log in until it is. You can add them here now; set <code>GOOGLE_OAUTH_CLIENT_ID</code> / <code>GOOGLE_OAUTH_CLIENT_SECRET</code> on the server + redirect URI <code>/api/admin/auth/callback</code> to enable it.
        </p>
      )}
      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}

      {/* Add member */}
      <div className="mb-lg rounded-md border border-border bg-bg-card p-md">
        <p className="m-0 mb-2 text-[13px] font-semibold text-text">Add a team member</p>
        <div className="flex flex-wrap items-end gap-2">
          <label className="block min-w-[240px] flex-1">
            <span className="mb-1 block text-[12px] text-text-faint">Google email</span>
            <div className="relative"><Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") add(); }} placeholder="name@gmail.com" type="email"
                className="w-full rounded-md border border-border bg-bg pl-9 pr-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" /></div>
          </label>
          <label className="block min-w-[240px]">
            <span className="mb-1 block text-[12px] text-text-faint">Role</span>
            <select value={role} onChange={(e) => setRole(e.target.value as Role)} className="w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
              {ROLES.filter((r) => r !== "owner").map((r) => <option key={r} value={r}>{ROLE_LABELS[r]}</option>)}
            </select>
          </label>
          <button onClick={add} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} Add</button>
        </div>
      </div>

      {/* Members table */}
      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[560px] text-[13px]">
          <thead className="bg-bg-card text-text-muted"><tr className="text-left">{["Email", "Role", "Added", ""].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr></thead>
          <tbody>
            {members.length === 0 && <tr><td colSpan={4} className="px-3 py-8 text-center text-text-faint">No team members yet — add one above.</td></tr>}
            {members.map((m) => (
              <tr key={m.email} className="border-t border-border align-middle hover:bg-bg-alt/60">
                <td className="px-3 py-2 text-text">{m.email}</td>
                <td className="px-3 py-2"><span className="inline-flex items-center gap-1 rounded bg-accent/12 px-2 py-0.5 text-[12px] text-accent"><ShieldCheck size={12} /> {ROLE_LABELS[m.role]}</span></td>
                <td className="px-3 py-2 whitespace-nowrap text-text-faint">{m.addedAt ? new Date(m.addedAt).toLocaleDateString() : "—"}</td>
                <td className="px-2 py-2 text-right"><button onClick={() => remove(m.email)} className="rounded p-1 text-text-faint hover:text-danger" title="Remove"><Trash2 size={13} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[12px] text-text-faint">Roles: <strong className="text-text">Pricing</strong> = Prices &amp; Keywords only · <strong className="text-text">Content</strong> = posts, media, page SEO · <strong className="text-text">Manager</strong> = everything except Team &amp; Settings. Removing a member blocks new sign-ins; an active session ends within 7 days (or rotate the session secret to end all immediately).</p>
    </div>
  );
}
