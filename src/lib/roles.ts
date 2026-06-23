// Role-based access control — the single source of truth, importable by server (proxy, requireAdmin,
// login) AND client (AdminShell nav filter). PURE: no fs, no node-only imports, no async.
//
// Roles:
//  - owner   : everything (incl. Team + Settings + Publish). That's the business owner.
//  - manager : everything EXCEPT Team management + core Settings.
//  - content : posts, categories, media, menus, page SEO/keywords (+ AI optimize). No prices/leads/etc.
//  - pricing : Prices & Keywords only (+ dashboard). The "staff updates prices" role.
export type Role = "owner" | "manager" | "content" | "pricing";
export const ROLES: Role[] = ["owner", "manager", "content", "pricing"];
export const ROLE_LABELS: Record<Role, string> = {
  owner: "Owner — full access",
  manager: "Manager — all except Team & Settings",
  content: "Content — posts, media, page SEO",
  pricing: "Pricing — Prices & Keywords only",
};
export function isRole(v: unknown): v is Role {
  return typeof v === "string" && (ROLES as string[]).includes(v);
}

// The leading path segment under /admin or /api/admin → a logical "section".
export function sectionOf(pathname: string): string {
  const stripped = pathname.replace(/^\/+/, "").replace(/^api\//, "").replace(/^admin\/?/, "");
  const seg = stripped.split(/[/?#]/)[0] || "";
  return seg.toLowerCase();
}

// Normalize API-only segment names to their page-section equivalent so one rule covers both.
function normalize(sec: string): string {
  const map: Record<string, string> = {
    "": "dashboard",
    "keyword-map": "keywords",
    "keyword-tracker": "tracker",
    "screen-prices": "prices",
    pagemeta: "pageseo",
    "url-inspector": "pageseo",
    deploy: "publish",
    stats: "dashboard",
  };
  return map[sec] ?? sec;
}

// Sections every authenticated user may reach regardless of role.
const ALWAYS = new Set(["dashboard", "me", "auth", "login", "logout"]);
const CONTENT = new Set(["blog", "categories", "media", "menus", "pageseo", "keywords", "ai", "social"]);
const PRICING = new Set(["prices", "keywords", "tracker"]);
const OWNER_ONLY = new Set(["team", "settings"]); // manager is blocked from these

// Can this role access this page/API path?
export function canAccess(role: Role, pathname: string): boolean {
  const sec = normalize(sectionOf(pathname));
  if (role === "owner") return true;
  if (ALWAYS.has(sec)) return true;
  if (role === "manager") return !OWNER_ONLY.has(sec);
  if (role === "content") return CONTENT.has(sec);
  if (role === "pricing") return PRICING.has(sec);
  return false;
}
