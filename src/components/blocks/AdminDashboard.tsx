"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LinkIcon, LineChart, Inbox, DollarSign, Building2, Star, FileText, Newspaper, Image as ImageIcon,
  FolderTree, Settings, ListTree, MapPin, Target, Gauge, Rocket, AlertTriangle, CheckCircle2,
  TrendingUp, Tag, ChevronRight,
} from "lucide-react";
import PageTrendChart from "@/components/blocks/PageTrendChart";

type Counts = Record<string, number>;
type KwRow = { path: string; type: string; score: number; hasKeyword: boolean; imageSet: boolean; priceId: number | null };
type TrackerSummary = { total: number; ranked: number; avgPosition: number | null; improved: number; top3: number; top10: number; top30: number };

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const [kw, setKw] = useState<KwRow[] | null>(null);
  const [track, setTrack] = useState<TrackerSummary | null>(null);

  useEffect(() => {
    const go = async () => {
      const j = (url: string) => fetch(url, { cache: "no-store" }).then((r) => (r.status === 401 ? (window.location.href = "/admin/login", null) : r.json())).catch(() => null);
      const [s, k, t] = await Promise.all([j("/api/admin/stats/"), j("/api/admin/keyword-map/"), j("/api/admin/keyword-tracker/")]);
      if (s?.ok) setCounts(s.counts);
      if (k?.ok) setKw(k.rows);
      if (t?.ok) setTrack(t.summary);
    };
    go();
  }, []);

  // ---- SEO health (computed from the single keyword-map source) ----
  const seo = (() => {
    if (!kw) return null;
    const total = kw.length;
    const avg = total ? Math.round(kw.reduce((a, r) => a + r.score, 0) / total) : 0;
    return {
      total, avg,
      missingKeyword: kw.filter((r) => !r.hasKeyword).length,
      missingImage: kw.filter((r) => !r.imageSet).length,
      lowScore: kw.filter((r) => r.score < 51).length,
      green: kw.filter((r) => r.score >= 81).length,
    };
  })();

  const newLeads = counts?.newLeads ?? 0;

  // ---- Needs-attention alerts (each links to the fix) ----
  const alerts: { txt: string; href: string; tone: "warn" | "bad" | "info" }[] = [];
  if (newLeads) alerts.push({ txt: `${newLeads} new lead${newLeads > 1 ? "s" : ""} to respond to`, href: "/admin/leads", tone: "info" });
  if (seo?.missingKeyword) alerts.push({ txt: `${seo.missingKeyword} page(s) with no target keyword`, href: "/admin/keywords", tone: "warn" });
  if (seo?.lowScore) alerts.push({ txt: `${seo.lowScore} page(s) scoring below 51 (needs work)`, href: "/admin/keywords", tone: "bad" });
  if (seo?.missingImage) alerts.push({ txt: `${seo.missingImage} page(s) with no featured image`, href: "/admin/keywords", tone: "warn" });

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg">
        <h1 className="m-0 text-[24px] text-text">Dashboard</h1>
        <p className="m-0 mt-1 text-[14px] text-text-muted">macbook-repair-dubai.ae · everything at a glance</p>
      </div>

      {/* Hero metrics */}
      <div className="mb-lg grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Metric label="Avg SEO score" value={seo ? seo.avg : "…"} sub={seo ? `${seo.green}/${seo.total} green` : ""} color={seo ? (seo.avg >= 81 ? "#16a34a" : seo.avg >= 51 ? "#f59e0b" : "#ef4444") : undefined} Icon={Gauge} />
        <Metric label="Avg position" value={track?.avgPosition ?? "—"} sub={track ? `${track.ranked} ranking · top10 ${track.top10}` : "no GSC data"} Icon={TrendingUp} color="#0ea5e9" />
        <Metric label="New leads" value={newLeads} sub={counts ? `${counts.leads} total` : ""} Icon={Inbox} color={newLeads ? "#16a34a" : undefined} />
        <Metric label="Pages" value={counts?.pages ?? "…"} sub={counts ? `${counts.posts} posts · ${counts.prices} prices` : ""} Icon={FileText} />
      </div>

      {/* Needs attention */}
      <div className="mb-lg rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
        <p className="m-0 mb-2 flex items-center gap-2 text-[13px] font-semibold text-text"><AlertTriangle size={15} className="text-[#f59e0b]" /> Needs attention</p>
        {alerts.length === 0 ? (
          <p className="m-0 flex items-center gap-2 text-[13px] text-whatsapp"><CheckCircle2 size={15} /> All clear — nothing needs attention right now.</p>
        ) : (
          <ul className="m-0 flex flex-col gap-1.5 p-0">
            {alerts.map((a, i) => (
              <li key={i} className="list-none">
                <Link href={a.href} className="flex items-center justify-between rounded px-2 py-1.5 text-[13px] hover:bg-bg-alt">
                  <span className="flex items-center gap-2 text-text">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: a.tone === "bad" ? "#ef4444" : a.tone === "warn" ? "#f59e0b" : "#0ea5e9" }} />
                    {a.txt}
                  </span>
                  <ChevronRight size={15} className="text-text-faint" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Three pulse panels */}
      <div className="mb-lg grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel title="SEO health" href="/admin/keywords" Icon={Target}>
          <Stat label="Pages tracked" v={seo?.total ?? "…"} />
          <Stat label="Green (≥81)" v={seo ? `${seo.green}` : "…"} good />
          <Stat label="Missing keyword" v={seo?.missingKeyword ?? "…"} warn={!!seo?.missingKeyword} />
          <Stat label="Missing image" v={seo?.missingImage ?? "…"} warn={!!seo?.missingImage} />
        </Panel>
        <Panel title="Rankings" href="/admin/keywords?tab=tracker" Icon={LineChart}>
          <Stat label="Avg position" v={track?.avgPosition ?? "—"} />
          <Stat label="Top 3" v={track?.top3 ?? "—"} good />
          <Stat label="Top 10" v={track?.top10 ?? "—"} good />
          <Stat label="Improved" v={track?.improved ?? "—"} />
        </Panel>
        <Panel title="Business" href="/admin/leads" Icon={Building2}>
          <Stat label="New leads" v={newLeads} good={!!newLeads} />
          <Stat label="Total leads" v={counts?.leads ?? "…"} />
          <Stat label="Reviews" v={counts?.reviews ?? "…"} />
          <Stat label="Priced services" v={counts?.prices ?? "…"} />
        </Panel>
      </div>

      {/* Page trend chart */}
      <div className="mb-lg">
        <PageTrendChart />
      </div>

      {/* Quick launch */}
      <p className="m-0 mb-2 text-[12px] font-semibold uppercase tracking-wide text-text-faint">Manage</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {LAUNCH.map(({ href, label, Icon }) => (
          <Link key={href + label} href={href} className="group flex items-center gap-2 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2.5 text-[13px] text-text transition-colors hover:border-accent">
            <Icon size={16} className="text-accent" /> <span className="group-hover:text-accent">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

const LAUNCH: { href: string; label: string; Icon: typeof Newspaper }[] = [
  { href: "/admin/keywords", label: "Keywords & Tracker", Icon: Tag },
  { href: "/admin/rankings", label: "Rankings (GSC)", Icon: LineChart },
  { href: "/admin/blog", label: "Posts", Icon: Newspaper },
  { href: "/admin/categories", label: "Categories", Icon: FolderTree },
  { href: "/admin/media", label: "Media", Icon: ImageIcon },
  { href: "/admin/pageseo", label: "Pages SEO", Icon: FileText },
  { href: "/admin/backlinks", label: "Backlinks", Icon: LinkIcon },
  { href: "/admin/locations", label: "Locations", Icon: MapPin },
  { href: "/admin/leads", label: "Leads", Icon: Inbox },
  { href: "/admin/reviews", label: "Reviews", Icon: Star },
  { href: "/admin/business", label: "Business / NAP", Icon: Building2 },
  { href: "/admin/menus", label: "Menus", Icon: ListTree },
  { href: "/admin/settings", label: "Settings", Icon: Settings },
  { href: "/admin/publish", label: "Publish / Deploy", Icon: Rocket },
];

function Metric({ label, value, sub, Icon, color }: { label: string; value: React.ReactNode; sub?: string; Icon: typeof Gauge; color?: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
      <p className="m-0 flex items-center gap-1.5 text-[12px] uppercase tracking-wide text-text-faint"><Icon size={13} /> {label}</p>
      <p className="m-0 mt-1 text-[28px] font-bold" style={{ color: color || "var(--text)" }}>{value}</p>
      {sub && <p className="m-0 text-[11px] text-text-faint">{sub}</p>}
    </div>
  );
}

function Panel({ title, href, Icon, children }: { title: string; href: string; Icon: typeof Gauge; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
      <div className="mb-2 flex items-center justify-between">
        <p className="m-0 flex items-center gap-1.5 text-[13px] font-semibold text-text"><Icon size={15} className="text-accent" /> {title}</p>
        <Link href={href} className="text-[12px] text-accent hover:underline">Open</Link>
      </div>
      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  );
}

function Stat({ label, v, good, warn }: { label: string; v: React.ReactNode; good?: boolean; warn?: boolean }) {
  return (
    <div className="rounded border border-border bg-bg-alt px-2.5 py-1.5">
      <p className="m-0 text-[11px] text-text-faint">{label}</p>
      <p className={`m-0 text-[18px] font-bold ${good ? "text-whatsapp" : warn ? "text-[#f59e0b]" : "text-text"}`}>{v}</p>
    </div>
  );
}
