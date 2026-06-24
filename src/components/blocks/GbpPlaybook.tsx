"use client";
import { useState } from "react";
import { Copy, Check, AlertTriangle, TrendingDown, MapPin, Star, Search } from "lucide-react";
import {
  GBP_PULLED_AT, GBP_CURRENT, GBP_PERFORMANCE, GBP_SEARCH_TERMS, GBP_ZERO_DEMAND,
  GBP_POSTS_AUDIT, GBP_CORRECTIONS, GBP_OPTIMIZED_DESCRIPTION, GBP_RECOMMENDED_CATEGORIES,
  GBP_SERVICES, GBP_POSTS,
} from "@/content/gbp-playbook";

function CopyBtn({ text, label = "Copy" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => { try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1500); } catch {} }}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-2.5 py-1 text-[12px] font-semibold text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
    >
      {done ? <Check size={13} className="text-whatsapp" /> : <Copy size={13} />} {done ? "Copied" : label}
    </button>
  );
}

function Card({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-5">
      <h2 className="m-0 mb-3 flex items-center gap-2 text-[15px] font-bold text-text">{icon}{title}</h2>
      {children}
    </section>
  );
}

const sev = { critical: "bg-destructive/10 text-destructive border-destructive/30", high: "bg-orange-500/10 text-orange-500 border-orange-500/30", medium: "bg-accent/10 text-accent border-accent/30" } as const;

export default function GbpPlaybook() {
  const first = GBP_PERFORMANCE[0], last = GBP_PERFORMANCE[GBP_PERFORMANCE.length - 1];
  const mapsDrop = Math.round(((last.maps - first.maps) / first.maps) * 100);
  return (
    <div className="mx-auto max-w-content px-5 md:px-6 py-xl">
      <div className="mb-5">
        <h1 className="m-0 text-[24px] text-text">GBP Playbook</h1>
        <p className="m-0 mt-1 text-[13px] text-text-muted">Live Google Business Profile snapshot + corrections + paste-ready content. Pulled via Supermetrics on {GBP_PULLED_AT}. This is a reference — apply changes in your Google Business Profile (or the connected Posts/Business-Info tabs).</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* CURRENT PROFILE */}
        <Card title="Current profile (live)">
          <dl className="grid grid-cols-[120px_1fr] gap-x-3 gap-y-1.5 text-[13px]">
            <dt className="text-text-faint">Name</dt><dd className="m-0 text-text">{GBP_CURRENT.name}</dd>
            <dt className="text-text-faint">Primary cat.</dt><dd className="m-0 text-text">{GBP_CURRENT.primaryCategory}</dd>
            <dt className="text-text-faint">Other cats</dt><dd className="m-0 text-text-muted">{GBP_CURRENT.additionalCategories.join(", ")}</dd>
            <dt className="text-text-faint">Phone</dt><dd className="m-0 text-text">{GBP_CURRENT.phone}</dd>
            <dt className="text-text-faint">Hours (GBP)</dt><dd className="m-0 text-destructive">{GBP_CURRENT.hoursGbp}</dd>
            <dt className="text-text-faint">Hours (site)</dt><dd className="m-0 text-text-muted">{GBP_CURRENT.hoursWebsite}</dd>
            <dt className="text-text-faint">Reviews</dt><dd className="m-0 text-text">{GBP_CURRENT.reviews.count} · ★{GBP_CURRENT.reviews.avg}</dd>
          </dl>
          <p className="mt-3 mb-1 text-[12px] font-semibold text-text-faint">Current description (3rd-person — replace):</p>
          <p className="m-0 rounded-md bg-bg p-2.5 text-[12.5px] text-text-muted leading-relaxed">{GBP_CURRENT.description}</p>
        </Card>

        {/* PERFORMANCE */}
        <Card title="Performance trend" icon={<TrendingDown size={15} className="text-destructive" />}>
          <p className="m-0 mb-2 text-[13px] text-text-muted">Maps (map-pack) views <strong className="text-destructive">{mapsDrop}%</strong> from {first.month} ({first.maps}) to {last.month} ({last.maps}). Consistent posting reverses this.</p>
          <div className="flex items-end gap-1 h-24">
            {GBP_PERFORMANCE.map((m) => {
              const h = Math.round((m.maps / 1472) * 100);
              return <div key={m.month} className="flex-1 group relative" title={`${m.month}: ${m.maps} maps views`}>
                <div className="w-full rounded-t bg-accent/30 group-hover:bg-accent transition-colors" style={{ height: `${h}%` }} />
              </div>;
            })}
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-text-faint"><span>{first.month}</span><span>{last.month}</span></div>
        </Card>

        {/* SEARCH TERMS */}
        <Card title="Top search terms (what finds you)" icon={<Search size={15} className="text-accent" />}>
          <ul className="m-0 list-none p-0 space-y-1 text-[13px]">
            {GBP_SEARCH_TERMS.map((t) => (
              <li key={t.term} className="flex justify-between"><span className="text-text-muted">{t.term}</span><span className="text-text-faint">{t.impressions}</span></li>
            ))}
          </ul>
          <p className="mt-3 mb-1 text-[12px] font-semibold text-destructive">0 impressions (untapped — target with posts/services):</p>
          <p className="m-0 text-[12.5px] text-text-muted">{GBP_ZERO_DEMAND.join(" · ")}</p>
        </Card>

        {/* POSTS AUDIT */}
        <Card title={`Posts audit (${GBP_POSTS_AUDIT.total} live)`}>
          <p className="m-0 mb-2 text-[13px] text-text-muted">{GBP_POSTS_AUDIT.cadence}</p>
          <ul className="m-0 list-disc pl-4 space-y-1 text-[12.5px] text-text-muted">
            {GBP_POSTS_AUDIT.issues.map((i, k) => <li key={k}>{i}</li>)}
          </ul>
        </Card>
      </div>

      {/* CORRECTIONS */}
      <div className="mt-4">
        <Card title="Corrections — do first" icon={<AlertTriangle size={15} className="text-orange-500" />}>
          <ul className="m-0 list-none p-0 space-y-2">
            {GBP_CORRECTIONS.map((c, k) => (
              <li key={k} className="flex items-start gap-2 text-[13px]">
                <span className={`shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-bold uppercase ${sev[c.sev]}`}>{c.sev}</span>
                <span className="text-text">{c.text}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* OPTIMISED PROFILE CONTENT */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card title="New description (paste into GBP)">
          <div className="mb-2"><CopyBtn text={GBP_OPTIMIZED_DESCRIPTION} label="Copy description" /></div>
          <p className="m-0 rounded-md bg-bg p-2.5 text-[12.5px] text-text leading-relaxed">{GBP_OPTIMIZED_DESCRIPTION}</p>
        </Card>
        <Card title="Categories to set">
          <p className="m-0 text-[13px] text-text"><strong>Primary:</strong> {GBP_RECOMMENDED_CATEGORIES.primary}</p>
          <p className="m-0 mt-1 text-[13px] text-text"><strong className="text-accent">Add:</strong> {GBP_RECOMMENDED_CATEGORIES.add.join(" · ")}</p>
          <p className="m-0 mt-1 text-[13px] text-text-muted"><strong>Keep:</strong> {GBP_RECOMMENDED_CATEGORIES.keep.join(" · ")}</p>
        </Card>
      </div>

      {/* SERVICES */}
      <div className="mt-4">
        <Card title={`Services to add (${GBP_SERVICES.length})`}>
          <div className="grid gap-2 md:grid-cols-2">
            {GBP_SERVICES.map((s) => (
              <div key={s.name} className="rounded-md border border-border/70 bg-bg p-2.5">
                <div className="flex items-center justify-between gap-2"><span className="text-[13px] font-semibold text-text">{s.name}</span><CopyBtn text={`${s.name}\n${s.desc}`} /></div>
                <p className="m-0 mt-1 text-[12px] text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* POSTS */}
      <div className="mt-4">
        <Card title={`Post drafts (${GBP_POSTS.length}) — paste into Posts → Create`}>
          <div className="grid gap-3 md:grid-cols-2">
            {GBP_POSTS.map((p) => (
              <div key={p.n} className="rounded-md border border-border/70 bg-bg p-3">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-[12px] font-semibold text-text">
                    #{p.n}
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] text-accent">{p.topic}</span>
                    <span className="text-text-faint">CTA: {p.cta}</span>
                  </span>
                  <CopyBtn text={p.summary} label="Copy text" />
                </div>
                <p className="m-0 whitespace-pre-line text-[12px] text-text-muted leading-relaxed">{p.summary}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-text-faint">
                  {p.url && <span>🔗 <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{p.url.replace("https://macbook-repair-dubai.ae", "")}</a> {p.url && <CopyBtn text={p.url} label="URL" />}</span>}
                  <span>🖼 {p.image}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
