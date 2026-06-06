import Database from "better-sqlite3";
import { promises as fsp } from "fs";
import fs from "fs";
import path from "path";
import type { Lead } from "@/lib/lead-schema";

// Embedded SQLite store + lightweight CRM (status pipeline + notes timeline).
// No server, no credentials. Single file (default ./data/leads.db). Set LEADS_DB
// to a persistent path so records survive redeploys. Cached on globalThis.

const DB_FILE = process.env.LEADS_DB || path.join(process.cwd(), "data", "leads.db");

export const LEAD_STATUSES = ["New", "Contacted", "Quoted", "Won", "Lost"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

const CREATE_TABLE = `
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL,
    device_type TEXT, model TEXT, issue TEXT, details TEXT,
    name TEXT, phone TEXT, email TEXT, preferred_contact TEXT, area TEXT,
    source_path TEXT, emailed INTEGER DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS lead_notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    kind TEXT NOT NULL DEFAULT 'note',
    body TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_leads_created ON leads (created_at);
  CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads (phone);
  CREATE INDEX IF NOT EXISTS idx_notes_lead ON lead_notes (lead_id);`;

type G = typeof globalThis & { __leadDb?: Database.Database };

function migrate(db: Database.Database) {
  // Add columns introduced after the first version (SQLite has no IF NOT EXISTS for columns).
  const cols = new Set((db.prepare("PRAGMA table_info(leads)").all() as { name: string }[]).map((c) => c.name));
  if (!cols.has("status")) db.exec("ALTER TABLE leads ADD COLUMN status TEXT NOT NULL DEFAULT 'New'");
  if (!cols.has("updated_at")) db.exec("ALTER TABLE leads ADD COLUMN updated_at TEXT");
}

function getDb(): Database.Database {
  const g = globalThis as G;
  if (g.__leadDb) return g.__leadDb;
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
  const db = new Database(DB_FILE);
  db.pragma("journal_mode = WAL");
  db.exec(CREATE_TABLE);
  migrate(db);
  g.__leadDb = db;
  return db;
}

export function insertLeadSqlite(r: Lead & { submittedAt: string; emailed?: boolean }): boolean {
  try {
    const db = getDb();
    db.prepare(
      `INSERT INTO leads
        (created_at, updated_at, status, device_type, model, issue, details, name, phone, email, preferred_contact, area, source_path, emailed)
       VALUES (@created_at, @created_at, 'New', @device_type, @model, @issue, @details, @name, @phone, @email, @preferred_contact, @area, @source_path, @emailed)`,
    ).run({
      created_at: r.submittedAt,
      device_type: r.deviceType, model: r.model || null, issue: r.issue, details: r.details || null,
      name: r.name, phone: r.phone, email: r.email || null, preferred_contact: r.preferredContact,
      area: r.area || null, source_path: r.sourcePath || null, emailed: r.emailed ? 1 : 0,
    });
    return true;
  } catch (err) {
    console.error("[lead] SQLite insert failed:", err);
    return false;
  }
}

export type LeadRow = Record<string, unknown> & { id: number; note_count?: number };

export function readLeads(limit = 5000): LeadRow[] {
  try {
    return getDb().prepare(
      `SELECT l.*, (SELECT COUNT(*) FROM lead_notes n WHERE n.lead_id = l.id AND n.kind='note') AS note_count
       FROM leads l ORDER BY l.id DESC LIMIT ?`,
    ).all(limit) as LeadRow[];
  } catch (err) {
    console.error("[lead] SQLite read failed:", err);
    return [];
  }
}

export function getLead(id: number): { lead: LeadRow; notes: unknown[] } | null {
  try {
    const db = getDb();
    const lead = db.prepare("SELECT * FROM leads WHERE id = ?").get(id) as LeadRow | undefined;
    if (!lead) return null;
    const notes = db.prepare("SELECT id, created_at, kind, body FROM lead_notes WHERE lead_id = ? ORDER BY id ASC").all(id);
    return { lead, notes };
  } catch (err) {
    console.error("[lead] getLead failed:", err);
    return null;
  }
}

export function updateLeadStatus(id: number, status: LeadStatus): boolean {
  if (!LEAD_STATUSES.includes(status)) return false;
  try {
    const db = getDb();
    const now = new Date().toISOString();
    const res = db.prepare("UPDATE leads SET status = ?, updated_at = ? WHERE id = ?").run(status, now, id);
    if (res.changes === 0) return false;
    db.prepare("INSERT INTO lead_notes (lead_id, created_at, kind, body) VALUES (?,?, 'status', ?)").run(id, now, `Status → ${status}`);
    return true;
  } catch (err) {
    console.error("[lead] updateLeadStatus failed:", err);
    return false;
  }
}

export function addNote(id: number, body: string): { id: number; created_at: string; kind: string; body: string } | null {
  try {
    const db = getDb();
    const exists = db.prepare("SELECT 1 FROM leads WHERE id = ?").get(id);
    if (!exists) return null;
    const now = new Date().toISOString();
    const res = db.prepare("INSERT INTO lead_notes (lead_id, created_at, kind, body) VALUES (?,?, 'note', ?)").run(id, now, body);
    db.prepare("UPDATE leads SET updated_at = ? WHERE id = ?").run(now, id);
    return { id: Number(res.lastInsertRowid), created_at: now, kind: "note", body };
  } catch (err) {
    console.error("[lead] addNote failed:", err);
    return null;
  }
}

export function deleteLead(id: number): boolean {
  try {
    const db = getDb();
    db.prepare("DELETE FROM lead_notes WHERE lead_id = ?").run(id);
    const res = db.prepare("DELETE FROM leads WHERE id = ?").run(id);
    return res.changes > 0;
  } catch (err) {
    console.error("[lead] deleteLead failed:", err);
    return false;
  }
}

export type LeadStats = {
  total: number;
  byStatus: Record<string, number>;
  today: number;
  week: number;
  conversion: number; // Won / total, %
};

export function leadStats(): LeadStats {
  const byStatus: Record<string, number> = Object.fromEntries(LEAD_STATUSES.map((s) => [s, 0]));
  const stats: LeadStats = { total: 0, byStatus, today: 0, week: 0, conversion: 0 };
  try {
    const rows = getDb().prepare("SELECT status, created_at FROM leads").all() as { status: string; created_at: string }[];
    const now = Date.now();
    const dayMs = 86400000;
    const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0);
    for (const r of rows) {
      stats.total++;
      byStatus[r.status] = (byStatus[r.status] || 0) + 1;
      const t = new Date(r.created_at).getTime();
      if (t >= startOfToday.getTime()) stats.today++;
      if (now - t <= 7 * dayMs) stats.week++;
    }
    stats.conversion = stats.total ? Math.round((byStatus["Won"] / stats.total) * 100) : 0;
  } catch (err) {
    console.error("[lead] leadStats failed:", err);
  }
  return stats;
}

export async function ensureDbDir(): Promise<void> {
  await fsp.mkdir(path.dirname(DB_FILE), { recursive: true });
}
