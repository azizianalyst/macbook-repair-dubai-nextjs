"use client";
import { useState } from "react";
import { Copy, Check, AlertTriangle, TrendingDown, Search, ListOrdered, History } from "lucide-react";
import {
  GBP_PULLED_AT, GBP_CURRENT, GBP_PERFORMANCE, GBP_SEARCH_TERMS, GBP_ZERO_DEMAND,
  GBP_POSTS_AUDIT, GBP_CORRECTIONS,
} from "@/content/gbp-playbook";
import {
  GBP_DESCRIPTION, GBP_DESCRIPTION_LENGTH, GBP_CATEGORIES,
  GBP_SERVICES, GBP_POSTS, GBP_POST_BRIEFS,
} from "@/content/gbp-content.generated";

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

/** The 103 services, grouped so each GBP category visibly has services behind it. */
function servicesByCategory() {
  const groups = new Map<string, typeof GBP_SERVICES>();
  for (const s of GBP_SERVICES) {
    const g = groups.get(s.category);
    if (g) g.push(s); else groups.set(s.category, [s]);
  }
  return [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
}

export default function GbpPlaybook() {
  const first = GBP_PERFORMANCE[0], last = GBP_PERFORMANCE[GBP_PERFORMANCE.length - 1];
  const mapsDrop = Math.round(((last.maps - first.maps) / first.maps) * 100);
  const laterBriefs = GBP_POST_BRIEFS.filter((b) => b.week > GBP_POSTS.length);

  return (
    <div className="mx-auto max-w-content px-5 md:px-6 py-xl">
      <div className="mb-5">
        <h1 className="m-0 text-[24px] text-text">GBP Playbook</h1>
        <p className="m-0 mt-1 text-[13px] text-text-muted">
          Paste-ready Google Business Profile content, generated from the August content pack — every item below has
          passed the policy gate (no prices, no Apple certification claim, no hardcoded review count).
          Publish services in one click from <a href="/admin/gbp" className="text-accent hover:underline">GBP → Services</a>;
          everything else is copy-and-paste.
        </p>
      </div>

      {/* ORDER OF OPERATIONS — the trap that costs the whole exercise if missed */}
      <Card title="Do these in order" icon={<ListOrdered size={15} className="text-accent" />}>
        <ol className="m-0 space-y-1.5 pl-5 text-[13px] text-text">
          <li><strong>Categories first</strong> — add the 7 secondary categories by hand in Google Business Profile Manager. The API cannot set them.</li>
          <li><strong>Description</strong> — paste below into GBP → Business Info → Save to Google.</li>
          <li><strong>Services</strong> — then, and only then, click Publish on the Services tab.</li>
        </ol>
        <p className="m-0 mt-2 rounded-md border border-orange-500/30 bg-orange-500/5 px-3 py-2 text-[12.5px] text-text">
          <AlertTriangle size={13} className="mr-1 inline text-orange-500" />
          Publish services before the categories exist and all {GBP_SERVICES.length} file under the primary category,
          substantiating none of the other {GBP_CATEGORIES.add.length}. The Services tab&apos;s
          &ldquo;missing categories&rdquo; count is the guard — it must read zero.
        </p>
      </Card>

      {/* IDENTITY */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card title={`Description — ${GBP_DESCRIPTION_LENGTH}/750 chars`}>
          <div className="mb-2"><CopyBtn text={GBP_DESCRIPTION} label="Copy description" /></div>
          <p className="m-0 rounded-md bg-bg p-2.5 text-[12.5px] text-text leading-relaxed">{GBP_DESCRIPTION}</p>
          <p className="m-0 mt-2 text-[11.5px] text-text-faint">
            Replaces the live description, which claims &ldquo;certified Apple specialists&rdquo; — the site says the
            opposite in 6+ places, and it is the one open trademark risk on the profile.
          </p>
        </Card>

        <Card title="Categories">
          <p className="m-0 text-[13px] text-text"><strong>Primary:</strong> {GBP_CATEGORIES.primary}</p>
          <p className="m-0 mt-0.5 text-[11.5px] text-text-faint">Correct — do not change it. Changing a primary category resets category-level ranking history.</p>
          <p className="m-0 mt-2 text-[13px] text-text"><strong className="text-accent">Add ({GBP_CATEGORIES.add.length}):</strong> {GBP_CATEGORIES.add.join(" · ")}</p>
          <p className="m-0 mt-2 text-[13px] text-text-muted"><strong className="text-destructive">Remove ({GBP_CATEGORIES.remove.length}):</strong> {GBP_CATEGORIES.remove.join(" · ")}</p>
          <div className="mt-2"><CopyBtn text={GBP_CATEGORIES.add.join("\n")} label="Copy categories to add" /></div>
        </Card>
      </div>

      {/* SERVICES */}
      <div className="mt-4">
        <Card title={`Services (${GBP_SERVICES.length}) — one-click publish on the Services tab`}>
          <p className="m-0 mb-3 text-[12.5px] text-text-muted">
            Grouped by the category each one substantiates. You should not need to copy these — the Services tab
            publishes the whole list. They are here so you can read what is going out.
          </p>
          {servicesByCategory().map(([cat, list]) => (
            <div key={cat} className="mb-4 last:mb-0">
              <h3 className="m-0 mb-2 text-[13px] font-semibold text-accent">{cat} <span className="text-text-faint">({list.length})</span></h3>
              <div className="grid gap-2 md:grid-cols-2">
                {list.map((s) => (
                  <div key={s.name} className="rounded-md border border-border/70 bg-bg p-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-semibold text-text">{s.name}</span>
                      <CopyBtn text={`${s.name}\n${s.description}`} />
                    </div>
                    <p className="m-0 mt-1 text-[12px] text-text-muted leading-relaxed">{s.description}</p>
                    <p className="m-0 mt-1 text-[11px] text-text-faint">{s.url}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* POSTS */}
      <div className="mt-4">
        <Card title={`Post drafts, weeks 1–${GBP_POSTS.length} — paste into GBP → Posts → Create`}>
          <p className="m-0 mb-3 text-[12.5px] text-text-muted">
            One a week, every week — cadence is what Google reads, not volume. Rotation is DEVICE → AREA → TRUST →
            SEASONAL so no intent goes dormant. Each post needs its own image; reusing one generic image across posts
            reads as spam.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {GBP_POSTS.map((p) => (
              <div key={p.week} className="rounded-md border border-border/70 bg-bg p-3">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="flex flex-wrap items-center gap-2 text-[12px] font-semibold text-text">
                    W{p.week}
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] text-accent">{p.type}</span>
                    <span className="text-text-faint">{p.date}</span>
                    <span className="text-text-faint">CTA: {p.cta}</span>
                  </span>
                  <CopyBtn text={p.body} label="Copy text" />
                </div>
                <p className="m-0 whitespace-pre-line text-[12px] text-text-muted leading-relaxed">{p.body}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-text-faint">
                  <span className="flex items-center gap-1.5">
                    🔗 <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{p.url.replace(/^https:\/\/[^/]+/, "").split("?")[0]}</a>
                    <CopyBtn text={p.url} label="URL" />
                  </span>
                  <span>🖼 {p.image}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* REMAINING PLAN */}
      <div className="mt-4">
        <Card title={`Weeks ${GBP_POSTS.length + 1}–${GBP_POST_BRIEFS.length} — briefs, bodies not written yet`}>
          <p className="m-0 mb-2 text-[12.5px] text-text-muted">
            Openings and matched images only. Week 14 breaks rotation for UAE National Day (2 December). Weeks 16, 20
            and 40 carry Ramadan and Eid dates, which shift yearly — confirm before scheduling.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <tbody>
                {laterBriefs.map((b) => (
                  <tr key={b.week} className="border-b border-border/60 last:border-0 align-top">
                    <td className="py-1.5 pr-2 font-semibold text-text-faint">W{b.week}</td>
                    <td className="py-1.5 pr-2"><span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] text-accent">{b.type}</span></td>
                    <td className="py-1.5 pr-2 text-text-muted">{b.opening}</td>
                    <td className="py-1.5 text-text-faint whitespace-nowrap">{b.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* ── HISTORY ─────────────────────────────────────────────────────────── */}
      <div className="mt-8 mb-3 flex items-center gap-2 border-t border-border pt-5">
        <History size={16} className="text-text-faint" />
        <h2 className="m-0 text-[16px] font-bold text-text">June {GBP_PULLED_AT} snapshot — history, not live</h2>
      </div>
      <p className="m-0 mb-3 text-[12.5px] text-text-muted">
        Pulled via Supermetrics on {GBP_PULLED_AT}. That connection expired on 30 June 2026 and cannot be re-pulled, so
        these figures are frozen and some are already superseded — the profile now shows 232 reviews at 5.0, and the
        Sunday hours defect below was fixed. Use <a href="/admin/gbp" className="text-accent hover:underline">GBP → Overview</a> for
        current numbers. Kept because the trend and the search-term breakdown are still the best read available.
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title={`Profile as at ${GBP_PULLED_AT}`}>
          <dl className="grid grid-cols-[120px_1fr] gap-x-3 gap-y-1.5 text-[13px]">
            <dt className="text-text-faint">Name</dt><dd className="m-0 text-text">{GBP_CURRENT.name}</dd>
            <dt className="text-text-faint">Primary cat.</dt><dd className="m-0 text-text">{GBP_CURRENT.primaryCategory}</dd>
            <dt className="text-text-faint">Other cats</dt><dd className="m-0 text-text-muted">{GBP_CURRENT.additionalCategories.join(", ")}</dd>
            <dt className="text-text-faint">Phone</dt><dd className="m-0 text-text">{GBP_CURRENT.phone}</dd>
            <dt className="text-text-faint">Hours (GBP)</dt><dd className="m-0 text-destructive">{GBP_CURRENT.hoursGbp}</dd>
            <dt className="text-text-faint">Hours (site)</dt><dd className="m-0 text-text-muted">{GBP_CURRENT.hoursWebsite}</dd>
            <dt className="text-text-faint">Reviews</dt><dd className="m-0 text-text">{GBP_CURRENT.reviews.count} · ★{GBP_CURRENT.reviews.avg}</dd>
          </dl>
          <p className="mt-3 mb-1 text-[12px] font-semibold text-text-faint">Description live at the time (3rd-person):</p>
          <p className="m-0 rounded-md bg-bg p-2.5 text-[12.5px] text-text-muted leading-relaxed">{GBP_CURRENT.description}</p>
        </Card>

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

        <Card title="Top search terms (what finds you)" icon={<Search size={15} className="text-accent" />}>
          <ul className="m-0 list-none p-0 space-y-1 text-[13px]">
            {GBP_SEARCH_TERMS.map((t) => (
              <li key={t.term} className="flex justify-between"><span className="text-text-muted">{t.term}</span><span className="text-text-faint">{t.impressions}</span></li>
            ))}
          </ul>
          <p className="mt-3 mb-1 text-[12px] font-semibold text-destructive">0 impressions (untapped — this is what the {GBP_SERVICES.length} services above are for):</p>
          <p className="m-0 text-[12.5px] text-text-muted">{GBP_ZERO_DEMAND.join(" · ")}</p>
        </Card>

        <Card title={`Posts audit (${GBP_POSTS_AUDIT.total} live at the time)`}>
          <p className="m-0 mb-2 text-[13px] text-text-muted">{GBP_POSTS_AUDIT.cadence}</p>
          <ul className="m-0 list-disc pl-4 space-y-1 text-[12.5px] text-text-muted">
            {GBP_POSTS_AUDIT.issues.map((i, k) => <li key={k}>{i}</li>)}
          </ul>
        </Card>
      </div>

      <div className="mt-4">
        <Card title="Corrections raised in June" icon={<AlertTriangle size={15} className="text-orange-500" />}>
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
    </div>
  );
}
