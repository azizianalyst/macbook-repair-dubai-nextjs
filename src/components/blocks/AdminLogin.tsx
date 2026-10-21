"use client";
import { useEffect, useState } from "react";
import { Lock, Loader2 } from "lucide-react";

const ERRORS: Record<string, string> = {
  oauth_unconfigured: "Google sign-in isn't configured yet — use the admin key below.",
  state: "Sign-in expired or was tampered with. Try again.",
  unverified: "That Google account has no verified email.",
  denied: "That Google account isn't on the allow-list.",
  nosecret: "Server session secret not set (ADMIN_SESSION_SECRET / ADMIN_KEY).",
  oauth: "Google sign-in failed. Try again.",
};

export default function AdminLogin({ googleEnabled = false }: { googleEnabled?: boolean }) {
  const [err, setErr] = useState("");
  const [key, setKey] = useState("");
  const [busy, setBusy] = useState(false);
  const [keyErr, setKeyErr] = useState("");

  useEffect(() => {
    const e = new URLSearchParams(window.location.search).get("e");
    if (e) setErr(ERRORS[e] || "Sign-in failed.");
  }, []);

  async function submitKey(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setKeyErr("");
    try {
      const res = await fetch("/api/admin/auth/key/", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key }),
      });
      if (res.ok) { window.location.href = "/admin"; return; }
      const d = await res.json().catch(() => ({}));
      setKeyErr(d?.error === "ADMIN_KEY not set on server" ? "Server has no ADMIN_KEY set." : "Wrong key.");
    } catch {
      setKeyErr("Could not reach the server.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="w-full max-w-sm rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-xl">
      <div className="mb-md flex items-center gap-2 text-text">
        <Lock size={18} className="text-accent" />
        <h1 className="m-0 text-[20px]">Admin sign in</h1>
      </div>
      <p className="mb-lg text-[14px] text-text-muted">SEO command center — owner access only.</p>

      {err && <p className="mb-md rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-danger">{err}</p>}

      {googleEnabled && (
        <>
          <a
            href="/api/admin/auth/login/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-4 py-2.5 font-semibold text-text hover:bg-bg-alt"
          >
            <GoogleMark /> Sign in with Google
          </a>
          <div className="my-lg flex items-center gap-3 text-[12px] text-text-faint">
            <span className="h-px flex-1 bg-border" /> or admin key <span className="h-px flex-1 bg-border" />
          </div>
        </>
      )}

      <form onSubmit={submitKey} className="grid gap-sm">
        <input
          type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Admin key"
          className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2.5 text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
        />
        <button
          type="submit" disabled={busy || !key}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 font-semibold text-white disabled:opacity-50"
        >
          {busy ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />} Unlock
        </button>
        {keyErr && <p className="text-[13px] text-danger">{keyErr}</p>}
      </form>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.9 2.4 30.4 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.1 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 3-2.2 5.5-4.7 7.2l7.3 5.7c4.3-3.9 6.8-9.7 6.8-17.4z" />
      <path fill="#FBBC05" d="M10.5 28.3a14.5 14.5 0 0 1 0-8.6l-7.9-6.1a24 24 0 0 0 0 20.8l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.4 0 11.9-2.1 15.8-5.8l-7.3-5.7c-2 1.4-4.7 2.3-8.5 2.3-6.3 0-11.6-3.6-13.5-9.3l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}
