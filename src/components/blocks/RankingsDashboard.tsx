"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, RefreshCw, Camera, ArrowLeft, ExternalLink, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

type Row = { key: string; clicks: number; impressions: number; ctr: number; position: number };
type Snapshot = { id: number; taken_at: string; range_start: string; range_end: string; queries: Row[]; pages: Row[] };
type Live = { range_start: string; range_end: string; queries: Row[]; pages: Row[]; opportunities: Row[] };
type Resp = { ok: boolean; configured?: boolean; source?: "live" | "snapshot" | "none"; live?: Live; snapshots?: Snapshot[]; error?: string };
type Mover = { key: string; prev: number; now: number; delta: number; pct: number };

const wAvgPos = (rows: Row[]) => {
  const imp = rows.reduce((s, r) => s + r.impressions, 0);
  return imp ? rows.reduce((s, r) => s + r.position * r.impressions, 0) / imp : 0;
};
const sum = (rows: Row[], k: "clicks" | "impressions") => rows.reduce((s, r) => s + r[k], 0);
const path = (u: string) => { try { return new URL(u).pathname; } catch { return u; } };

export default function RankingsDashboard() {
  const [data, setData] = useState<Resp | null>(null);
  const [loading, setLoading] = useState(true);
  const [snapping, setSnapping] = useState(false);
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/rankings/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d: Resp = await res.json();
      setData(d);
      if (d.ok === false && d.error) setErr(d.error);
    } catch { setErr("Could not load rankings."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  async function snapshot() {
    setSnapping(true);
    try {
      const res = await fetch("/api/admin/rankings/", { method: "POST" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      await load();
    } finally { setSnapping(false); }
  }

  const live = data?.live;
  // One point per data period (range_end), avg position weighted by impressions, oldest→newest.
  const trend = useMemo(() => {
    const byEnd = new Map<string, number>();
    for (const s of data?.snapshots ?? []) {
      const rows = s.pages.length ? s.pages : s.queries;
      if (rows.length) byEnd.set(s.range_end, Number(wAvgPos(rows).toFixed(1)));
    }
    return [...byEnd.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1)).map(([date, position]) => ({ date, position }));
  }, [data]);

  // Week-over-week movers: compare the two most recent snapshots that carry queries.
  const movers = useMemo(() => {
    const snaps = (data?.snapshots ?? []).filter((s) => s.queries?.length);
    if (snaps.length < 2) return null;
    const cur = snaps[0], prev = snaps[1];
    const prevMap = new Map(prev.queries.map((q) => [q.key, q.position]));
    const rows: Mover[] = [];
    for (const q of cur.queries) {
      const pp = prevMap.get(q.key);
      if (pp == null) continue;
      const delta = pp - q.position; // positive = moved up (better)
      if (Math.abs(delta) < 0.5) continue;
      rows.push({ key: q.key, prev: pp, now: q.position, delta, pct: pp ? (delta / pp) * 100 : 0 });
    }
    return {
      range: `${prev.range_start} → ${cur.range_end}`,
      up: rows.filter((r) => r.delta > 0).sort((a, b) => b.delta - a.delta).slice(0, 12),
      down: rows.filter((r) => r.delta < 0).sort((a, b) => a.delta - b.delta).slice(0, 12),
    };
  }, [data]);

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Rankings</h1>
          {live && <span className="text-[12px] text-text-faint">{live.range_start} → {live.range_end}{data?.source === "snapshot" ? " · saved snapshot" : ""}</span>}
        </div>
        <div className="flex items-center gap-2">
          {data?.configured && <button onClick={snapshot} disabled={snapping} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{snapping ? <Loader2 size={14} className="animate-spin" /> : <Camera size={14} />} Snapshot now</button>}
          <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
        </div>
      </div>

      {data && !live && (
        <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg text-[14px] text-text-muted">
          <p className="m-0 mb-2 font-semibold text-text">Google Search Console not connected yet.</p>
          <p className="m-0">Add a service account and set <code className="text-text">GSC_SA_EMAIL</code>, <code className="text-text">GSC_SA_PRIVATE_KEY</code> and <code className="text-text">GSC_SITE_URL=sc-domain:macbook-repair-dubai.ae</code>, then grant the service-account email access to the property in Search Console. See <code className="text-text">.env.local.example</code>.</p>
        </div>
      )}

      {err && <p className="mb-md rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-danger">{err}</p>}

      {live && (
        <>
          <div className="mb-md grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Card label="Clicks" value={sum(live.pages, "clicks").toLocaleString()} c="#34d399" />
            <Card label="Impressions" value={sum(live.pages, "impressions").toLocaleString()} c="#60a5fa" />
            <Card label="Avg position" value={wAvgPos(live.pages).toFixed(1)} c="#fbbf24" />
            <Card label="Page-2 opportunities" value={String(live.opportunities.length)} c="#c084fc" />
          </div>

          {movers && (movers.up.length > 0 || movers.down.length > 0) && (
            <div className="mb-lg">
              <h2 className="mb-2 text-[15px] font-semibold text-text">Keyword movers — week over week <span className="font-normal text-text-faint">({movers.range})</span></h2>
              <div className="grid gap-lg lg:grid-cols-2">
                <MoversTable title="Moving up ▲" rows={movers.up} dir="up" />
                <MoversTable title="Moving down ▼" rows={movers.down} dir="down" />
              </div>
            </div>
          )}

          <div className="mb-lg rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
            <p className="m-0 mb-2 flex items-center gap-1.5 text-[12px] uppercase tracking-wide text-text-faint"><TrendingUp size={13} /> Avg position over time (lower = better)</p>
            {trend.length < 2 ? (
              <p className="m-0 py-8 text-center text-[13px] text-text-faint">Take a snapshot today, then again over the coming weeks — the trend line builds from snapshots.</p>
            ) : (
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={trend} margin={{ top: 8, right: 12, bottom: 0, left: -12 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis reversed domain={[1, "auto"]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="position" stroke="#0A7A40" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          <Section title="Page-2 opportunities (position 8–25 with demand)">
            <RowTable rows={live.opportunities} keyLabel="Page" linkify />
          </Section>

          <div className="grid gap-lg lg:grid-cols-2">
            <Section title="Top queries"><RowTable rows={live.queries.slice(0, 25)} keyLabel="Query" /></Section>
            <Section title="Top pages"><RowTable rows={live.pages.slice(0, 25)} keyLabel="Page" linkify /></Section>
          </div>
        </>
      )}
    </div>
  );
}

function MoversTable({ title, rows, dir }: { title: string; rows: Mover[]; dir: "up" | "down" }) {
  const color = dir === "up" ? "#34d399" : "#f87171";
  return (
    <div>
      <h3 className="mb-2 text-[14px] font-semibold" style={{ color }}>{title}</h3>
      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[420px] text-[13px]">
          <thead className="bg-bg-card text-text-muted">
            <tr className="text-left">{["Keyword", "Last wk", "This wk", "Change"].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.length === 0 && <tr><td colSpan={4} className="px-3 py-6 text-center text-text-faint">No movement.</td></tr>}
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-border hover:bg-bg-alt">
                <td className="px-3 py-2 text-text">{r.key}</td>
                <td className="px-3 py-2 text-text-muted">{r.prev.toFixed(1)}</td>
                <td className="px-3 py-2 text-text-muted">{r.now.toFixed(1)}</td>
                <td className="px-3 py-2 font-semibold whitespace-nowrap" style={{ color }}>
                  {dir === "up" ? "▲" : "▼"} {Math.abs(r.delta).toFixed(1)} ({r.pct > 0 ? "+" : ""}{r.pct.toFixed(0)}%)
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ label, value, c }: { label: string; value: string; c: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
      <p className="m-0 text-[12px] uppercase tracking-wide text-text-faint">{label}</p>
      <p className="m-0 mt-1 text-[26px] font-bold" style={{ color: c }}>{value}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-lg">
      <h2 className="mb-2 text-[15px] font-semibold text-text">{title}</h2>
      <div className="overflow-x-auto rounded-md border border-border">{children}</div>
    </div>
  );
}

function RowTable({ rows, keyLabel, linkify }: { rows: Row[]; keyLabel: string; linkify?: boolean }) {
  return (
    <table className="w-full min-w-[460px] text-[13px]">
      <thead className="bg-bg-card text-text-muted">
        <tr className="text-left">{[keyLabel, "Clicks", "Impr.", "CTR", "Pos."].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.length === 0 && <tr><td colSpan={5} className="px-3 py-6 text-center text-text-faint">No data.</td></tr>}
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-border hover:bg-bg-alt">
            <td className="px-3 py-2 text-text">
              {linkify ? <a href={r.key} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">{path(r.key)} <ExternalLink size={11} className="text-text-faint" /></a> : r.key}
            </td>
            <td className="px-3 py-2 text-text-muted">{r.clicks}</td>
            <td className="px-3 py-2 text-text-muted">{r.impressions.toLocaleString()}</td>
            <td className="px-3 py-2 text-text-muted">{(r.ctr * 100).toFixed(1)}%</td>
            <td className="px-3 py-2 text-text-muted">{r.position.toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
