"use client";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer, ComposedChart, Line, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { TrendingUp, RefreshCw, ExternalLink } from "lucide-react";
import type { TrendRow } from "@/app/api/admin/page-trend/route";

const PAGES = [
  "/macbook-screen-repair-dubai",
  "/macbook-repair-dubai",
  "/iphone-screen-repair-dubai",
  "/ipad-screen-repair-dubai-2026",
  "/macbook-battery-replacement-dubai",
  "/blog/macbook-screen-repair-cost-dubai-2026",
];

const DAYS_OPTIONS = [
  { label: "30d", value: 30 },
  { label: "60d", value: 60 },
  { label: "90d", value: 90 },
];

function fmtDate(d: string) {
  const [, m, day] = d.split("-");
  return `${day}/${m}`;
}

type ChartRow = TrendRow & { posInverted: number };

export default function PageTrendChart() {
  const [path, setPath] = useState(PAGES[0]);
  const [days, setDays] = useState(90);
  const [rows, setRows] = useState<ChartRow[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = async (p = path, d = days) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/page-trend/?path=${encodeURIComponent(p)}&days=${d}`, { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const j = await res.json();
      if (!j.ok) { setError(j.error || "Failed"); setRows(null); return; }
      // position: lower = better — invert for secondary axis so "higher on chart = better rank"
      const maxPos = Math.max(...(j.rows as TrendRow[]).map((r) => r.position), 1);
      setRows((j.rows as TrendRow[]).map((r) => ({ ...r, posInverted: Math.round((maxPos + 1 - r.position) * 10) / 10 })));
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const totals = rows
    ? { impressions: rows.reduce((a, r) => a + r.impressions, 0), clicks: rows.reduce((a, r) => a + r.clicks, 0), avgPos: rows.length ? Math.round(rows.reduce((a, r) => a + r.position, 0) / rows.length * 10) / 10 : null }
    : null;

  return (
    <div className="rounded-md border border-border bg-bg-card p-md">
      {/* Header */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="m-0 flex items-center gap-1.5 text-[13px] font-semibold text-text">
          <TrendingUp size={15} className="text-accent" /> Page Performance (GSC)
        </p>
        <div className="flex items-center gap-2">
          <a href={`https://macbook-repair-dubai.ae${path}/`} target="_blank" rel="noopener noreferrer" className="text-accent" title="View page">
            <ExternalLink size={13} />
          </a>
          <button onClick={() => load()} className="rounded p-1 hover:bg-bg-alt" title="Refresh" disabled={loading}>
            <RefreshCw size={13} className={`text-text-faint ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="mb-3 flex flex-wrap gap-2">
        <select
          value={path}
          onChange={(e) => { setPath(e.target.value); load(e.target.value, days); }}
          className="rounded border border-border bg-bg-alt px-2 py-1 text-[12px] text-text"
        >
          {PAGES.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
        <div className="flex gap-1">
          {DAYS_OPTIONS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => { setDays(value); load(path, value); }}
              className={`rounded px-2 py-1 text-[12px] transition-colors ${days === value ? "bg-accent text-white" : "bg-bg-alt text-text-faint hover:text-text"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Summary pills */}
      {totals && (
        <div className="mb-3 flex gap-3">
          <Pill label="Impressions" value={totals.impressions.toLocaleString()} color="#0ea5e9" />
          <Pill label="Clicks" value={totals.clicks.toLocaleString()} color="#16a34a" />
          <Pill label="Avg Position" value={totals.avgPos ?? "—"} color="#f59e0b" />
        </div>
      )}

      {/* Chart */}
      {loading && !rows && (
        <div className="flex h-[220px] items-center justify-center text-[13px] text-text-faint">Loading GSC data…</div>
      )}
      {error && (
        <div className="flex h-[220px] items-center justify-center text-[13px] text-[#ef4444]">{error}</div>
      )}
      {!error && rows && rows.length === 0 && (
        <div className="flex h-[220px] items-center justify-center text-[13px] text-text-faint">No GSC data for this page yet.</div>
      )}
      {!error && rows && rows.length > 0 && (
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart data={rows} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="date" tickFormatter={fmtDate} tick={{ fontSize: 11, fill: "var(--text-faint)" }} interval="preserveStartEnd" />
            <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "var(--text-faint)" }} />
            <YAxis yAxisId="right" orientation="right" hide />
            <Tooltip
              contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", fontSize: 12 }}
              labelStyle={{ color: "var(--text-faint)", marginBottom: 4 }}
              formatter={(value: number, name: string) => {
                if (name === "posInverted") return null;
                if (name === "position") return [value, "Avg Position"];
                return [value.toLocaleString(), name.charAt(0).toUpperCase() + name.slice(1)];
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} formatter={(v) => v === "posInverted" ? null : v.charAt(0).toUpperCase() + v.slice(1)} />
            <Bar yAxisId="left" dataKey="impressions" fill="#0ea5e940" stroke="#0ea5e9" strokeWidth={1} radius={[2, 2, 0, 0]} />
            <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#16a34a" strokeWidth={2} dot={false} />
            <Line yAxisId="right" type="monotone" dataKey="position" stroke="#f59e0b" strokeWidth={2} dot={false} strokeDasharray="4 2" />
          </ComposedChart>
        </ResponsiveContainer>
      )}
      {rows && rows.length > 0 && (
        <p className="m-0 mt-1 text-[10px] text-text-faint">Bars = impressions · Green line = clicks · Dashed = avg position (lower = better)</p>
      )}
    </div>
  );
}

function Pill({ label, value, color }: { label: string; value: React.ReactNode; color: string }) {
  return (
    <div className="rounded border border-border bg-bg-alt px-2.5 py-1">
      <p className="m-0 text-[10px] text-text-faint">{label}</p>
      <p className="m-0 text-[16px] font-bold" style={{ color }}>{value}</p>
    </div>
  );
}
