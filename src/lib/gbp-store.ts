import { promises as fs } from "fs";
import path from "path";

const FILE = process.env.GBP_DB || path.join(process.cwd(), "data", "gbp.json");

export type GbpConfig = {
  refreshToken: string;
  accountId: string;   // e.g. "accounts/123456789"
  locationId: string;  // e.g. "accounts/123456789/locations/987654321"
  locationName: string; // display name
  connectedAt: string;
};

type DB = { config: GbpConfig | null };

async function load(): Promise<DB> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const d = JSON.parse(raw);
    return { config: d?.config ?? null };
  } catch {
    return { config: null };
  }
}

async function save(db: DB): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const tmp = `${FILE}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(db, null, 2), "utf8");
  await fs.rename(tmp, FILE);
}

export async function getGbpConfig(): Promise<GbpConfig | null> {
  const db = await load();
  return db.config;
}

export async function setGbpConfig(config: GbpConfig): Promise<void> {
  await save({ config });
}

export async function clearGbpConfig(): Promise<void> {
  await save({ config: null });
}
