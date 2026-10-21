import { promises as fs } from "fs";
import path from "path";
import type { BacklinkInput, BacklinkPatch, BacklinkStatus, RankingSnapshotInput, PriceInput, PricePatch, BusinessInfo, ReviewInput, ReviewPatch, PageMetaInput, BlogPostInput, BlogPostPatch, SiteSettings, Menus, BlogTaxonomy, AreaOverride, CityOverride, ScreenPriceInput, ScreenPricePatch } from "@/lib/seo-schema";
import { isEmptyPageMeta, isEmptyLocOverride } from "@/lib/seo-schema";

// Pure-JS JSON file store for the SEO command center — same pattern as lib/store.ts
// (no native modules, no DB credentials, atomic write + in-process write lock).
// Default ./data/seo.json; set SEO_DB to a persistent path so data survives redeploys.

const FILE = process.env.SEO_DB || path.join(process.cwd(), "data", "seo.json");

export type StoredBacklink = BacklinkInput & {
  id: number;
  created_at: string;
  updated_at: string;
  first_seen: string;
  last_checked: string | null;
};

export type StoredSnapshot = RankingSnapshotInput & { id: number; taken_at: string };

export type StoredPrice = PriceInput & { id: number; created_at: string; updated_at: string };

export type StoredReview = ReviewInput & { id: number };

export type StoredPost = BlogPostInput & { id: number; created_at: string; updated_at: string };

// Light revision history for posts (capped per post). Snapshot = the post payload before an edit.
export type PostRevision = { id: number; postId: number; at: string; snapshot: BlogPostInput };
const MAX_REVISIONS_PER_POST = 10;

export type MediaMeta = Record<string, { alt: string; caption: string }>;

export type TrackedKeyword = { keyword: string; addedAt: string };
export type TeamMember = { email: string; role: "owner" | "manager" | "content" | "pricing"; addedAt: string };
export type StoredScreenPrice = ScreenPriceInput & { id: number; created_at: string; updated_at: string };
export type SocialStatus = "draft" | "scheduled" | "published" | "failed";
export type SocialPost = {
  id: number; text: string; link?: string; image?: string; platforms: string[];
  status: SocialStatus; scheduledFor?: string | null; createdAt: string;
  publishedAt?: string | null; externalId?: string; error?: string;
};
type DB = { backlinks: StoredBacklink[]; snapshots: StoredSnapshot[]; prices: StoredPrice[]; business: BusinessInfo | null; reviews: StoredReview[]; pageMeta: PageMetaInput[]; posts: StoredPost[]; settings: SiteSettings | null; menus: Menus | null; mediaMeta: MediaMeta; taxonomy: BlogTaxonomy | null; areaOverrides: AreaOverride[]; cityOverrides: CityOverride[]; revisions: PostRevision[]; secrets: Record<string, string>; trackedKeywords: TrackedKeyword[]; teamMembers: TeamMember[]; screenPrices: StoredScreenPrice[]; socialPosts: SocialPost[] };

async function load(): Promise<DB> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const d = JSON.parse(raw);
    return {
      backlinks: Array.isArray(d?.backlinks) ? d.backlinks : [],
      snapshots: Array.isArray(d?.snapshots) ? d.snapshots : [],
      prices: Array.isArray(d?.prices) ? d.prices : [],
      business: d?.business && typeof d.business === "object" ? d.business : null,
      reviews: Array.isArray(d?.reviews) ? d.reviews : [],
      pageMeta: Array.isArray(d?.pageMeta) ? d.pageMeta : [],
      posts: Array.isArray(d?.posts) ? d.posts : [],
      settings: d?.settings && typeof d.settings === "object" ? d.settings : null,
      menus: d?.menus && typeof d.menus === "object" ? d.menus : null,
      mediaMeta: d?.mediaMeta && typeof d.mediaMeta === "object" ? d.mediaMeta : {},
      taxonomy: d?.taxonomy && typeof d.taxonomy === "object" ? d.taxonomy : null,
      areaOverrides: Array.isArray(d?.areaOverrides) ? d.areaOverrides : [],
      cityOverrides: Array.isArray(d?.cityOverrides) ? d.cityOverrides : [],
      revisions: Array.isArray(d?.revisions) ? d.revisions : [],
      secrets: d?.secrets && typeof d.secrets === "object" ? d.secrets : {},
      trackedKeywords: Array.isArray(d?.trackedKeywords) ? d.trackedKeywords : [],
      teamMembers: Array.isArray(d?.teamMembers) ? d.teamMembers : [],
      screenPrices: Array.isArray(d?.screenPrices) ? d.screenPrices : [],
      socialPosts: Array.isArray(d?.socialPosts) ? d.socialPosts : [],
    };
  } catch {
    return { backlinks: [], snapshots: [], prices: [], business: null, reviews: [], pageMeta: [], posts: [], settings: null, menus: null, mediaMeta: {}, taxonomy: null, areaOverrides: [], cityOverrides: [], revisions: [], secrets: {}, trackedKeywords: [], teamMembers: [], screenPrices: [], socialPosts: [] }; // missing/empty/corrupt -> start fresh
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
const domainOf = (url?: string) => {
  if (!url) return "";
  try { return new URL(url.startsWith("http") ? url : `https://${url}`).hostname.replace(/^www\./, ""); }
  catch { return ""; }
};

// ---------- backlinks ----------
export async function readBacklinks(limit = 5000): Promise<StoredBacklink[]> {
  const db = await load();
  return db.backlinks.slice().sort((a, b) => b.id - a.id).slice(0, limit);
}

export async function insertBacklink(r: BacklinkInput): Promise<StoredBacklink | null> {
  try {
    return await withLock(async () => {
      const db = await load();
      const now = new Date().toISOString();
      const row: StoredBacklink = {
        ...r,
        source_domain: r.source_domain || domainOf(r.source_url),
        id: nextId(db.backlinks), created_at: now, updated_at: now, first_seen: now, last_checked: null,
      };
      db.backlinks.push(row);
      await save(db);
      return row;
    });
  } catch (err) { console.error("[seo] insertBacklink failed:", err); return null; }
}

// Bulk import (used by scripts/import-backlinks.cjs). De-dupes on site+target_url.
export async function insertBacklinksBulk(rows: BacklinkInput[]): Promise<number> {
  return withLock(async () => {
    const db = await load();
    const seen = new Set(db.backlinks.map((b) => `${b.site}|${b.target_url || ""}`.toLowerCase()));
    const now = new Date().toISOString();
    let added = 0;
    for (const r of rows) {
      const dedupe = `${r.site}|${r.target_url || ""}`.toLowerCase();
      if (seen.has(dedupe)) continue;
      seen.add(dedupe);
      db.backlinks.push({
        ...r,
        source_domain: r.source_domain || domainOf(r.source_url),
        id: nextId(db.backlinks), created_at: now, updated_at: now, first_seen: now, last_checked: null,
      });
      added++;
    }
    await save(db);
    return added;
  });
}

export async function updateBacklink(id: number, patch: BacklinkPatch): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const row = db.backlinks.find((b) => b.id === id);
      if (!row) return false;
      Object.assign(row, patch);
      row.updated_at = new Date().toISOString();
      if (patch.source_url && !patch.source_domain) row.source_domain = domainOf(patch.source_url);
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] updateBacklink failed:", err); return false; }
}

export async function deleteBacklink(id: number): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const before = db.backlinks.length;
      db.backlinks = db.backlinks.filter((b) => b.id !== id);
      if (db.backlinks.length === before) return false;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] deleteBacklink failed:", err); return false; }
}

export type BacklinkStats = {
  total: number;
  prospects: number;
  inbound: number;
  live: number;
  disavow: number;
  byStatus: Record<string, number>;
};

export async function backlinkStats(): Promise<BacklinkStats> {
  const db = await load();
  const byStatus: Record<string, number> = {};
  let prospects = 0, inbound = 0, live = 0, disavow = 0;
  for (const b of db.backlinks) {
    byStatus[b.status] = (byStatus[b.status] || 0) + 1;
    if (b.kind === "inbound") inbound++; else prospects++;
    if (b.status === "Live" || b.status === "Keep") live++;
    if (b.status === "Disavow") disavow++;
  }
  return { total: db.backlinks.length, prospects, inbound, live, disavow, byStatus };
}

// ---------- ranking snapshots ----------
export async function insertSnapshot(s: RankingSnapshotInput): Promise<StoredSnapshot | null> {
  try {
    return await withLock(async () => {
      const db = await load();
      const snap: StoredSnapshot = { ...s, id: nextId(db.snapshots), taken_at: new Date().toISOString() };
      db.snapshots.push(snap);
      await save(db);
      return snap;
    });
  } catch (err) { console.error("[seo] insertSnapshot failed:", err); return null; }
}

export async function readSnapshots(limit = 365): Promise<StoredSnapshot[]> {
  const db = await load();
  return db.snapshots.slice().sort((a, b) => b.id - a.id).slice(0, limit);
}

// ---------- tracked keywords (rank tracker) ----------
const normKw = (s: string) => s.toLowerCase().trim().replace(/\s+/g, " ").slice(0, 120);

export async function readTrackedKeywords(): Promise<TrackedKeyword[]> {
  const db = await load();
  return db.trackedKeywords.slice();
}

// Add one or many keywords (dedup, case-insensitive). addedAt is passed in (no Date.now in lib here).
export async function addTrackedKeywords(keywords: string[], addedAt: string): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const have = new Set(db.trackedKeywords.map((t) => normKw(t.keyword)));
      for (const raw of keywords) {
        const kw = normKw(raw);
        if (kw && !have.has(kw)) { db.trackedKeywords.push({ keyword: kw, addedAt }); have.add(kw); }
      }
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] addTrackedKeywords failed:", err); return false; }
}

export async function removeTrackedKeyword(keyword: string): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const kw = normKw(keyword);
      db.trackedKeywords = db.trackedKeywords.filter((t) => normKw(t.keyword) !== kw);
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] removeTrackedKeyword failed:", err); return false; }
}

// ---------- team members (roles) ----------
const normEmail = (s: string) => s.toLowerCase().trim();

export async function readTeamMembers(): Promise<TeamMember[]> {
  const db = await load();
  return db.teamMembers.slice();
}

// Look up a member's role by email (used at login to mint a role-bearing session). null = not a member.
export async function roleForEmail(email: string): Promise<TeamMember["role"] | null> {
  const e = normEmail(email);
  const db = await load();
  return db.teamMembers.find((m) => normEmail(m.email) === e)?.role ?? null;
}

// Add or update a member's role. addedAt passed in (no Date.now in lib).
export async function upsertTeamMember(email: string, role: TeamMember["role"], addedAt: string): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const e = normEmail(email);
      const existing = db.teamMembers.find((m) => normEmail(m.email) === e);
      if (existing) existing.role = role;
      else db.teamMembers.push({ email: e, role, addedAt });
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] upsertTeamMember failed:", err); return false; }
}

export async function removeTeamMember(email: string): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const e = normEmail(email);
      db.teamMembers = db.teamMembers.filter((m) => normEmail(m.email) !== e);
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] removeTeamMember failed:", err); return false; }
}

// ---------- social posts ----------
export async function readSocialPosts(): Promise<SocialPost[]> {
  const db = await load();
  return db.socialPosts.slice().sort((a, b) => b.id - a.id);
}

export async function insertSocialPost(p: Omit<SocialPost, "id">): Promise<SocialPost | null> {
  try {
    return await withLock(async () => {
      const db = await load();
      const row: SocialPost = { ...p, id: nextId(db.socialPosts) };
      db.socialPosts.push(row);
      await save(db);
      return row;
    });
  } catch (err) { console.error("[seo] insertSocialPost failed:", err); return null; }
}

export async function updateSocialPost(id: number, patch: Partial<SocialPost>): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const row = db.socialPosts.find((p) => p.id === id);
      if (!row) return false;
      Object.assign(row, patch);
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] updateSocialPost failed:", err); return false; }
}

export async function deleteSocialPost(id: number): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const before = db.socialPosts.length;
      db.socialPosts = db.socialPosts.filter((p) => p.id !== id);
      if (db.socialPosts.length === before) return false;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] deleteSocialPost failed:", err); return false; }
}

// Scheduled posts whose time has arrived (for the publisher cron/agent).
export async function dueScheduledSocialPosts(nowIso: string): Promise<SocialPost[]> {
  const db = await load();
  return db.socialPosts.filter((p) => p.status === "scheduled" && p.scheduledFor && p.scheduledFor <= nowIso);
}

// ---------- prices ----------
const slug = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 120);

// Insertion order = table order on /pricing, so return ascending by id.
export async function readPrices(): Promise<StoredPrice[]> {
  const db = await load();
  return db.prices.slice().sort((a, b) => a.id - b.id);
}

export async function insertPrice(r: PriceInput): Promise<StoredPrice | null> {
  try {
    return await withLock(async () => {
      const db = await load();
      const now = new Date().toISOString();
      const row: StoredPrice = { ...r, key: r.key || slug(r.service), id: nextId(db.prices), created_at: now, updated_at: now };
      db.prices.push(row);
      await save(db);
      return row;
    });
  } catch (err) { console.error("[seo] insertPrice failed:", err); return null; }
}

export async function updatePrice(id: number, patch: PricePatch): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const row = db.prices.find((p) => p.id === id);
      if (!row) return false;
      Object.assign(row, patch);
      if (patch.service && !patch.key) row.key = slug(patch.service);
      row.updated_at = new Date().toISOString();
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] updatePrice failed:", err); return false; }
}

// Bulk upsert for CSV/Excel import: items with an existing id are updated, the rest inserted.
export async function upsertPricesBulk(items: (PriceInput & { id?: number })[]): Promise<{ added: number; updated: number }> {
  return withLock(async () => {
    const db = await load();
    const now = new Date().toISOString();
    let added = 0, updated = 0;
    for (const it of items) {
      const { id, ...rest } = it;
      const existing = id ? db.prices.find((p) => p.id === id) : undefined;
      if (existing) {
        Object.assign(existing, rest);
        if (rest.service && !rest.key) existing.key = slug(rest.service);
        existing.updated_at = now;
        updated++;
      } else {
        db.prices.push({ ...rest, key: rest.key || slug(rest.service), id: nextId(db.prices), created_at: now, updated_at: now });
        added++;
      }
    }
    await save(db);
    return { added, updated };
  });
}

export async function deletePrice(id: number): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const before = db.prices.length;
      db.prices = db.prices.filter((p) => p.id !== id);
      if (db.prices.length === before) return false;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] deletePrice failed:", err); return false; }
}

// ---------- business info (single object) ----------
export async function readBusiness(): Promise<BusinessInfo | null> {
  const db = await load();
  return db.business ?? null;
}

export async function saveBusiness(b: BusinessInfo): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      db.business = b;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] saveBusiness failed:", err); return false; }
}

// ---------- site settings (single object) ----------
export async function readSettings(): Promise<SiteSettings | null> {
  const db = await load();
  return db.settings ?? null;
}

export async function saveSettings(s: SiteSettings): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      db.settings = s;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] saveSettings failed:", err); return false; }
}

// ---------- media metadata (alt/caption per uploaded image, keyed by filename) ----------
export async function readMediaMeta(): Promise<MediaMeta> {
  const db = await load();
  return db.mediaMeta ?? {};
}

export async function setMediaMeta(name: string, alt: string, caption: string): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      if (!alt.trim() && !caption.trim()) delete db.mediaMeta[name];
      else db.mediaMeta[name] = { alt: alt.trim(), caption: caption.trim() };
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] setMediaMeta failed:", err); return false; }
}

// ---------- location overrides (area + city editable copy, keyed by slug) ----------
export async function readAreaOverrides(): Promise<AreaOverride[]> { return (await load()).areaOverrides.slice(); }
export async function readCityOverrides(): Promise<CityOverride[]> { return (await load()).cityOverrides.slice(); }

export async function upsertAreaOverride(o: AreaOverride): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      db.areaOverrides = db.areaOverrides.filter((x) => x.slug !== o.slug);
      if (!isEmptyLocOverride(o)) db.areaOverrides.push(o);
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] upsertAreaOverride failed:", err); return false; }
}

export async function upsertCityOverride(o: CityOverride): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      db.cityOverrides = db.cityOverrides.filter((x) => x.slug !== o.slug);
      if (!isEmptyLocOverride(o)) db.cityOverrides.push(o);
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] upsertCityOverride failed:", err); return false; }
}

// ---------- secrets (server-only; e.g. ANTHROPIC_API_KEY entered via the admin) ----------
// Stored in the gated, gitignored store (never returned to the client in full, never read by any
// generator). Env vars still take precedence in the consumers.
export async function readSecret(name: string): Promise<string> {
  const db = await load();
  return db.secrets?.[name] || "";
}

export async function setSecret(name: string, value: string): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      if (value) db.secrets[name] = value; else delete db.secrets[name];
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] setSecret failed:", err); return false; }
}

// ---------- blog taxonomy (categories + tags, single object) ----------
export async function readTaxonomy(): Promise<BlogTaxonomy | null> {
  const db = await load();
  return db.taxonomy ?? null;
}

export async function saveTaxonomy(t: BlogTaxonomy): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      db.taxonomy = t;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] saveTaxonomy failed:", err); return false; }
}

// ---------- navigation menus (single object) ----------
export async function readMenus(): Promise<Menus | null> {
  const db = await load();
  return db.menus ?? null;
}

export async function saveMenus(m: Menus): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      db.menus = m;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] saveMenus failed:", err); return false; }
}

// ---------- reviews ----------
export async function readReviews(): Promise<StoredReview[]> {
  const db = await load();
  return db.reviews.slice().sort((a, b) => a.id - b.id);
}

export async function insertReview(r: ReviewInput): Promise<StoredReview | null> {
  try {
    return await withLock(async () => {
      const db = await load();
      const row: StoredReview = { ...r, id: nextId(db.reviews) };
      db.reviews.push(row);
      await save(db);
      return row;
    });
  } catch (err) { console.error("[seo] insertReview failed:", err); return null; }
}

export async function updateReview(id: number, patch: ReviewPatch): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const row = db.reviews.find((r) => r.id === id);
      if (!row) return false;
      Object.assign(row, patch);
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] updateReview failed:", err); return false; }
}

export async function deleteReview(id: number): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const before = db.reviews.length;
      db.reviews = db.reviews.filter((r) => r.id !== id);
      if (db.reviews.length === before) return false;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] deleteReview failed:", err); return false; }
}

// Bulk insert for the one-off seed (scripts/seed-reviews.cjs).
export async function insertReviewsBulk(rows: ReviewInput[]): Promise<number> {
  return withLock(async () => {
    const db = await load();
    for (const r of rows) db.reviews.push({ ...r, id: nextId(db.reviews) });
    await save(db);
    return rows.length;
  });
}

// ---------- page SEO overrides (keyed by path) ----------
export async function readPageMeta(): Promise<PageMetaInput[]> {
  const db = await load();
  return db.pageMeta.slice();
}

// Upsert by path. If the override carries nothing meaningful, it's removed (reverts to default).
export async function upsertPageMeta(input: PageMetaInput): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      db.pageMeta = db.pageMeta.filter((m) => m.path !== input.path);
      if (!isEmptyPageMeta(input)) db.pageMeta.push(input);
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] upsertPageMeta failed:", err); return false; }
}

// ---------- blog posts (admin-authored markdown) ----------
// Newest first (by id) so the admin list and the prepended POSTS registry lead with recent posts.
export async function readPosts(): Promise<StoredPost[]> {
  const db = await load();
  return db.posts.slice().sort((a, b) => b.id - a.id);
}

export async function readPost(id: number): Promise<StoredPost | null> {
  const db = await load();
  return db.posts.find((p) => p.id === id) ?? null;
}

// Guard slug uniqueness within the store; the API also rejects collisions with hand-built posts.
async function slugTaken(s: string, exceptId?: number): Promise<boolean> {
  const db = await load();
  return db.posts.some((p) => p.slug === s && p.id !== exceptId);
}

export async function insertPost(r: BlogPostInput): Promise<StoredPost | null> {
  try {
    return await withLock(async () => {
      const db = await load();
      const now = new Date().toISOString();
      const row: StoredPost = { ...r, slug: slug(r.slug), id: nextId(db.posts), created_at: now, updated_at: now };
      db.posts.push(row);
      await save(db);
      return row;
    });
  } catch (err) { console.error("[seo] insertPost failed:", err); return null; }
}

export async function updatePost(id: number, patch: BlogPostPatch): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const row = db.posts.find((p) => p.id === id);
      if (!row) return false;
      // Capture the pre-edit state as a revision (capped per post), so edits can be rolled back.
      const { id: _i, created_at: _c, updated_at: _u, ...snapshot } = row;
      db.revisions.push({ id: nextId(db.revisions), postId: id, at: new Date().toISOString(), snapshot });
      const mine = db.revisions.filter((r) => r.postId === id);
      if (mine.length > MAX_REVISIONS_PER_POST) {
        const dropIds = new Set(mine.slice(0, mine.length - MAX_REVISIONS_PER_POST).map((r) => r.id));
        db.revisions = db.revisions.filter((r) => !dropIds.has(r.id));
      }
      Object.assign(row, patch);
      if (patch.slug) row.slug = slug(patch.slug);
      row.updated_at = new Date().toISOString();
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] updatePost failed:", err); return false; }
}

export async function readPostRevisions(postId: number): Promise<PostRevision[]> {
  const db = await load();
  return db.revisions.filter((r) => r.postId === postId).sort((a, b) => b.id - a.id);
}

// Restore a post to a saved revision (the current state is itself captured as a new revision first).
export async function restorePostRevision(postId: number, revisionId: number): Promise<boolean> {
  const db = await load();
  const rev = db.revisions.find((r) => r.id === revisionId && r.postId === postId);
  if (!rev) return false;
  return updatePost(postId, rev.snapshot as BlogPostPatch);
}

// Duplicate a post as a fresh draft (unique slug, "(copy)" title). Returns the new post.
export async function duplicatePost(id: number): Promise<StoredPost | null> {
  const db = await load();
  const src = db.posts.find((p) => p.id === id);
  if (!src) return null;
  const { id: _i, created_at: _c, updated_at: _u, ...payload } = src;
  let base = slug(src.slug) + "-copy", s = base, n = 2;
  while (db.posts.some((p) => p.slug === s)) s = `${base}-${n++}`;
  return insertPost({ ...payload, slug: s, title: `${src.title} (copy)`, status: "draft" } as BlogPostInput);
}

export async function deletePost(id: number): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const before = db.posts.length;
      db.posts = db.posts.filter((p) => p.id !== id);
      if (db.posts.length === before) return false;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] deletePost failed:", err); return false; }
}

export { slug as slugify, slugTaken };

export { BACKLINK_STATUSES } from "@/lib/seo-schema";
export type { BacklinkStatus };

// ---------- screen prices ----------
export async function readScreenPrices(): Promise<StoredScreenPrice[]> {
  const db = await load();
  return db.screenPrices.slice().sort((a, b) => a.sort_order - b.sort_order || a.id - b.id);
}

export async function insertScreenPrice(r: ScreenPriceInput): Promise<StoredScreenPrice | null> {
  try {
    return await withLock(async () => {
      const db = await load();
      const now = new Date().toISOString();
      const row: StoredScreenPrice = { ...r, id: nextId(db.screenPrices), created_at: now, updated_at: now };
      db.screenPrices.push(row);
      await save(db);
      return row;
    });
  } catch (err) { console.error("[seo] insertScreenPrice failed:", err); return null; }
}

export async function updateScreenPrice(id: number, patch: ScreenPricePatch): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const row = db.screenPrices.find((r) => r.id === id);
      if (!row) return false;
      Object.assign(row, patch, { updated_at: new Date().toISOString() });
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] updateScreenPrice failed:", err); return false; }
}

export async function deleteScreenPrice(id: number): Promise<boolean> {
  try {
    return await withLock(async () => {
      const db = await load();
      const before = db.screenPrices.length;
      db.screenPrices = db.screenPrices.filter((r) => r.id !== id);
      if (db.screenPrices.length === before) return false;
      await save(db);
      return true;
    });
  } catch (err) { console.error("[seo] deleteScreenPrice failed:", err); return false; }
}

export async function upsertScreenPricesBulk(items: (ScreenPriceInput & { id?: number })[]): Promise<{ added: number; updated: number }> {
  return withLock(async () => {
    const db = await load();
    const now = new Date().toISOString();
    let added = 0, updated = 0;
    for (const it of items) {
      const { id, ...rest } = it;
      if (id) {
        const row = db.screenPrices.find((r) => r.id === id);
        if (row) { Object.assign(row, rest, { updated_at: now }); updated++; continue; }
      }
      db.screenPrices.push({ ...rest, id: nextId(db.screenPrices), created_at: now, updated_at: now });
      added++;
    }
    await save(db);
    return { added, updated };
  });
}
