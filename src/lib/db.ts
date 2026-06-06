import mysql from "mysql2/promise";
import type { Lead } from "@/lib/lead-schema";

// MySQL persistence for leads. Optional: if DB_* env vars aren't set, every export
// is a safe no-op and the route falls back to the JSONL file. Pool + table-creation
// are cached on globalThis so Next.js dev HMR doesn't open new pools each reload.

export function dbConfigured(): boolean {
  return Boolean(process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME);
}

const CREATE_TABLE = `
  CREATE TABLE IF NOT EXISTS leads (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    device_type VARCHAR(64),
    model VARCHAR(120),
    issue VARCHAR(160),
    details TEXT,
    name VARCHAR(120),
    phone VARCHAR(40),
    email VARCHAR(160),
    preferred_contact VARCHAR(32),
    area VARCHAR(120),
    source_path VARCHAR(255),
    emailed TINYINT(1) DEFAULT 0,
    INDEX idx_created (created_at),
    INDEX idx_phone (phone)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`;

type G = typeof globalThis & { __leadPool?: Promise<mysql.Pool> };

async function getPool(): Promise<mysql.Pool> {
  const g = globalThis as G;
  if (g.__leadPool) return g.__leadPool;
  g.__leadPool = (async () => {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: Number(process.env.DB_POOL || 5),
      charset: "utf8mb4_general_ci",
    });
    await pool.query(CREATE_TABLE); // idempotent; creates the table on first run
    return pool;
  })();
  return g.__leadPool;
}

// Insert one lead. Returns true on success, false if DB is unconfigured or the
// write fails (caller then relies on the file/email fallbacks).
export async function insertLead(r: Lead & { emailed?: boolean }): Promise<boolean> {
  if (!dbConfigured()) return false;
  try {
    const pool = await getPool();
    await pool.execute(
      `INSERT INTO leads
        (device_type, model, issue, details, name, phone, email, preferred_contact, area, source_path, emailed)
       VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
      [
        r.deviceType,
        r.model || null,
        r.issue,
        r.details || null,
        r.name,
        r.phone,
        r.email || null,
        r.preferredContact,
        r.area || null,
        r.sourcePath || null,
        r.emailed ? 1 : 0,
      ],
    );
    return true;
  } catch (err) {
    console.error("[lead] MySQL insert failed:", err);
    return false;
  }
}
