import { promises as fs } from "fs";
import path from "path";
import type { Lead } from "@/lib/lead-schema";

// Pure-JS JSON file store for leads + lightweight CRM (status pipeline + notes).
// No native modules (works on shared hosting where better-sqlite3 can't compile)
// and no database credentials. Single JSON file (default ./data/leads.json); set
// LEADS_DB to a persistent path so records survive redeploys. Writes are
// serialized via an in-process queue to avoid read-modify-write races.

const FILE = process.env.LEADS_DB || path.join(process.cwd(), "data", "leads.json");

export const LEAD_STATUSES = ["New", "Contacted", "Quoted", "Won", "Lost"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export type Note = { id: number; created_at: string; kind: "note" | "status"; body: string };
export type StoredLead = {
  id: number; created_at: string; updated_at: string; status: LeadStatus;
  device_type: string; model: string | null; issue: string; details: string | null;
  name: string; phone: string; email: string | null; preferred_contact: string;
  area: string | null; source_path: string | null; emailed: number; notes: Note[];
};
type DB = { leads: StoredLead[] };

async function load(): Promise<DB> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const d = JSON.parse(raw);
    if (!d || !Array.isArray(d.leads)) return { leads: [] };
    return d as DB;
  } catch {
    return { leads: [] }; // missing/empty/corrupt -> start fresh
  }
}

async function save(db: DB): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const tmp = `${FILE}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(db), "utf8");
  await fs.rename(tmp, FILE); // atomic replace
}

// serialize all mutations
let chain: Promise<unknown> = Promise.resolve();
function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = chain.then(fn, fn);
  chain = run.then(() => {}, () => {});
  return run as Promise<T>;
}

const nextId = (rows: { id: number }[]) => rows.reduce((m, r) => Math.max(m, r.id), 0) + 1;

export async function insertLead(r: Lead & { submittedAt: string; emailed?: boolean }): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      db.leads.push({
        id: nextId(db.leads), created_at: r.submittedAt, updated_at: r.submittedAt, status: "New",
        device_type: r.deviceType, model: r.model || null, issue: r.issue, details: r.details || null,
        name: r.name, phone: r.phone, email: r.email || null, preferred_contact: r.preferredContact,
        area: r.area || null, source_path: r.sourcePath || null, emailed: r.emailed ? 1 : 0, notes: [],
      });
      await save(db);
      return true;
    });
  } catch (err) { console.error("[lead] store insert failed:", err); return false; }
}

export type LeadRow = Omit<StoredLead, "notes"> & { note_count: number };

export async function readLeads(limit = 5000): Promise<LeadRow[]> {
  const db = await load();
  return db.leads
    .slice().sort((a, b) => b.id - a.id).slice(0, limit)
    .map(({ notes, ...l }) => ({ ...l, note_count: notes.filter((n) => n.kind === "note").length }));
}

export async function getLead(id: number): Promise<{ lead: Omit<StoredLead, "notes">; notes: Note[] } | null> {
  const db = await load();
  const lead = db.leads.find((l) => l.id === id);
  if (!lead) return null;
  const { notes, ...rest } = lead;
  return { lead: rest, notes };
}

export async function updateLeadStatus(id: number, status: LeadStatus): Promise<boolean> {
  if (!LEAD_STATUSES.includes(status)) return false;
  try {
    return await withLock(async () => {
      const db = await load();
      const lead = db.leads.find((l) => l.id === id);
      if (!lead) return false;
      const now = new Date().toISOString();
      lead.status = status; lead.updated_at = now;
      lead.notes.push({ id: nextId(lead.notes), created_at: now, kind: "status", body: `Status → ${status}` });
      await save(db);
      return true;
    });
  } catch (err) { console.error("[lead] updateStatus failed:", err); return false; }
}

export async function addNote(id: number, body: string): Promise<Note | null> {
  try {
    return await withLock(async () => {
      const db = await load();
      const lead = db.leads.find((l) => l.id === id);
      if (!lead) return null;
      const now = new Date().toISOString();
      const note: Note = { id: nextId(lead.notes), created_at: now, kind: "note", body };
      lead.notes.push(note); lead.updated_at = now;
      await save(db);
      return note;
    });
  } catch (err) { console.error("[lead] addNote failed:", err); return null; }
}

export async function deleteLead(id: number): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const before = db.leads.length;
      db.leads = db.leads.filter((l) => l.id !== id);
      if (db.leads.length === before) return false;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[lead] delete failed:", err); return false; }
}

export type LeadStats = { total: number; byStatus: Record<string, number>; today: number; week: number; conversion: number };

export async function leadStats(): Promise<LeadStats> {
  const byStatus: Record<string, number> = Object.fromEntries(LEAD_STATUSES.map((s) => [s, 0]));
  const stats: LeadStats = { total: 0, byStatus, today: 0, week: 0, conversion: 0 };
  const db = await load();
  const now = Date.now();
  const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0);
  for (const l of db.leads) {
    stats.total++;
    byStatus[l.status] = (byStatus[l.status] || 0) + 1;
    const t = new Date(l.created_at).getTime();
    if (t >= startOfToday.getTime()) stats.today++;
    if (now - t <= 7 * 86400000) stats.week++;
  }
  stats.conversion = stats.total ? Math.round((byStatus["Won"] / stats.total) * 100) : 0;
  return stats;
}
