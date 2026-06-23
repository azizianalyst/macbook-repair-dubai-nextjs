import { getGscAccessToken } from "@/lib/google-auth";
import type { GscRow } from "@/lib/seo-schema";

// Thin Google Search Console searchAnalytics client (REST, no dependency).
// Docs: searchconsole.googleapis.com/webmasters/v3/sites/{siteUrl}/searchAnalytics/query

const API = "https://searchconsole.googleapis.com/webmasters/v3/sites";

type QueryOpts = {
  dimensions?: string[]; // e.g. ["query"] or ["page"]
  startDate: string;     // YYYY-MM-DD
  endDate: string;       // YYYY-MM-DD
  rowLimit?: number;
};

type RawRow = { keys?: string[]; clicks: number; impressions: number; ctr: number; position: number };

export async function querySearchAnalytics(opts: QueryOpts): Promise<GscRow[]> {
  const token = await getGscAccessToken();
  const site = process.env.GSC_SITE_URL || "";
  const url = `${API}/${encodeURIComponent(site)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      startDate: opts.startDate, endDate: opts.endDate,
      dimensions: opts.dimensions ?? [], rowLimit: opts.rowLimit ?? 100,
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GSC query failed: ${res.status} ${await res.text().catch(() => "")}`);
  const d = await res.json();
  const rows: RawRow[] = d.rows ?? [];
  return rows.map((r) => ({
    key: r.keys?.[0] ?? "(total)",
    clicks: r.clicks ?? 0,
    impressions: r.impressions ?? 0,
    ctr: r.ctr ?? 0,
    position: r.position ?? 0,
  }));
}

// Query × Page rows — keeps BOTH dimension keys so a keyword can be mapped to the URL that ranks.
export type GscQueryPage = { query: string; page: string; clicks: number; impressions: number; position: number };
export async function queryByQueryPage(opts: { startDate: string; endDate: string; rowLimit?: number }): Promise<GscQueryPage[]> {
  const token = await getGscAccessToken();
  const site = process.env.GSC_SITE_URL || "";
  const url = `${API}/${encodeURIComponent(site)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ startDate: opts.startDate, endDate: opts.endDate, dimensions: ["query", "page"], rowLimit: opts.rowLimit ?? 1000 }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GSC query failed: ${res.status} ${await res.text().catch(() => "")}`);
  const d = await res.json();
  const rows: RawRow[] = d.rows ?? [];
  return rows.map((r) => ({ query: r.keys?.[0] ?? "", page: r.keys?.[1] ?? "", clicks: r.clicks ?? 0, impressions: r.impressions ?? 0, position: r.position ?? 0 }));
}

// GSC data lags ~2-3 days; default window = last 90 days ending 3 days ago.
export function defaultRange(days = 90): { startDate: string; endDate: string } {
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - days);
  return { startDate: fmt(start), endDate: fmt(end) };
}
