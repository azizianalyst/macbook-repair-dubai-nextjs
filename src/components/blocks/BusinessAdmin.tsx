"use client";
import { useCallback, useEffect, useState } from "react";
import { Loader2, Save, ArrowLeft, Info, Check } from "lucide-react";

type Hours = { day: string; open: string };
type Business = {
  name: string; phoneDisplay: string; phoneE164: string; email?: string;
  street: string; area: string; city: string; country: string;
  facebook?: string; instagram?: string; youtube?: string;
  founded?: string; yearsInBusiness: number; reviewCount: number; reviewAverage: number;
  contentReviewed?: string; hours: Hours[];
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function BusinessAdmin() {
  const [b, setB] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [saved, setSaved] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/business/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      const biz: Business = d.business ?? blank();
      // normalise hours to 7 rows
      const hours = DAYS.map((day) => biz.hours?.find((h) => h.day === day) ?? { day, open: "" });
      setB({ ...biz, hours });
    } catch { setErr("Could not load business info."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  function set<K extends keyof Business>(k: K, v: Business[K]) { setB((cur) => (cur ? { ...cur, [k]: v } : cur)); setSaved(false); }
  function setHour(i: number, open: string) { setB((cur) => cur ? { ...cur, hours: cur.hours.map((h, j) => j === i ? { ...h, open } : h) } : cur); setSaved(false); }

  async function save() {
    if (!b) return;
    setBusy(true); setErr("");
    try {
      const res = await fetch("/api/admin/business/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(b) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (!res.ok) { const d = await res.json().catch(() => ({})); setErr(d.errors ? Object.values(d.errors).join("; ") : "Save failed."); return; }
      setSaved(true);
    } finally { setBusy(false); }
  }

  if (loading || !b) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="mx-auto max-w-[820px]">
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Business info</h1>
        </div>
        <button onClick={save} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">
          {busy ? <Loader2 size={14} className="animate-spin" /> : saved ? <Check size={14} /> : <Save size={14} />} {saved ? "Saved" : "Save"}
        </button>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>This is your one source of truth — saving here updates the phone, address, hours, reviews and social links <strong className="text-text">everywhere on the site</strong> (footer, contact, Google schema) on the <strong className="text-text">next deploy</strong>.</span>
      </div>

      {err && <p className="mb-md rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-danger">{err}</p>}

      <Section title="Contact">
        <Field label="Business name"><input value={b.name} onChange={(e) => set("name", e.target.value)} className={inp} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Phone (display)"><input value={b.phoneDisplay} onChange={(e) => set("phoneDisplay", e.target.value)} className={inp} placeholder="055 741 3706" /></Field>
          <Field label="Phone (E.164 / WhatsApp)"><input value={b.phoneE164} onChange={(e) => set("phoneE164", e.target.value)} className={inp} placeholder="+971557413706" /></Field>
        </div>
        <Field label="Email"><input value={b.email || ""} onChange={(e) => set("email", e.target.value)} className={inp} placeholder="info@macbook-repair-dubai.ae" /></Field>
      </Section>

      <Section title="Address">
        <Field label="Street / building"><input value={b.street} onChange={(e) => set("street", e.target.value)} className={inp} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Area"><input value={b.area} onChange={(e) => set("area", e.target.value)} className={inp} /></Field>
          <Field label="City"><input value={b.city} onChange={(e) => set("city", e.target.value)} className={inp} /></Field>
        </div>
        <Field label="Country"><input value={b.country} onChange={(e) => set("country", e.target.value)} className={inp} /></Field>
      </Section>

      <Section title="Reviews & trust">
        <div className="grid grid-cols-3 gap-3">
          <Field label="Review count"><input type="number" value={b.reviewCount} onChange={(e) => set("reviewCount", Number(e.target.value))} className={inp} /></Field>
          <Field label="Average rating"><input type="number" step="0.1" value={b.reviewAverage} onChange={(e) => set("reviewAverage", Number(e.target.value))} className={inp} /></Field>
          <Field label="Years in business"><input type="number" value={b.yearsInBusiness} onChange={(e) => set("yearsInBusiness", Number(e.target.value))} className={inp} /></Field>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Founded"><input value={b.founded || ""} onChange={(e) => set("founded", e.target.value)} className={inp} placeholder="10 October 2004" /></Field>
          <Field label="Content reviewed (freshness)"><input value={b.contentReviewed || ""} onChange={(e) => set("contentReviewed", e.target.value)} className={inp} placeholder="June 2026" /></Field>
        </div>
      </Section>

      <Section title="Social">
        <Field label="Facebook URL"><input value={b.facebook || ""} onChange={(e) => set("facebook", e.target.value)} className={inp} /></Field>
        <Field label="Instagram URL"><input value={b.instagram || ""} onChange={(e) => set("instagram", e.target.value)} className={inp} /></Field>
        <Field label="YouTube URL"><input value={b.youtube || ""} onChange={(e) => set("youtube", e.target.value)} className={inp} /></Field>
      </Section>

      <Section title="Opening hours">
        <div className="grid gap-2">
          {b.hours.map((h, i) => (
            <div key={h.day} className="grid grid-cols-[120px_1fr] items-center gap-3">
              <span className="text-[13px] text-text-muted">{h.day}</span>
              <input value={h.open} onChange={(e) => setHour(i, e.target.value)} className={inp} placeholder="9 am - 10 pm  (or Closed)" />
            </div>
          ))}
        </div>
      </Section>

      <div className="mt-lg">
        <button onClick={save} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-5 py-2.5 text-[14px] font-semibold text-white disabled:opacity-50">
          {busy ? <Loader2 size={14} className="animate-spin" /> : saved ? <Check size={14} /> : <Save size={14} />} {saved ? "Saved — applies on next deploy" : "Save"}
        </button>
      </div>
    </div>
  );
}

function blank(): Business {
  return { name: "", phoneDisplay: "", phoneE164: "", street: "", area: "", city: "Dubai", country: "United Arab Emirates", yearsInBusiness: 0, reviewCount: 0, reviewAverage: 5, hours: [] };
}

const inp = "w-full rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1 block text-[12px] text-text-faint">{label}</span>{children}</label>;
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-lg rounded-md border border-border bg-bg-card p-lg">
      <h2 className="m-0 mb-3 text-[15px] font-semibold text-text">{title}</h2>
      <div className="grid gap-3">{children}</div>
    </section>
  );
}
