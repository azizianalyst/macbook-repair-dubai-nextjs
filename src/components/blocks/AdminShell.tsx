"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { canAccess, type Role } from "@/lib/roles";
import {
  LayoutDashboard, Newspaper, FileText, Star, DollarSign, LineChart, LinkIcon,
  Inbox, Building2, LogOut, ExternalLink, Menu, Image as ImageIcon, FolderTree, Settings, ListTree, MapPin, Rocket, Target, Gauge, MapPinned, Users, Megaphone,
} from "lucide-react";

// WordPress-style admin chrome: a persistent dark left sidebar + top bar wrapping every /admin page.
// Login is rendered bare (no chrome). Mobile collapses the sidebar into a drawer.
type Item = { href: string; label: string; Icon: typeof LayoutDashboard };
type Group = { heading?: string; items: Item[] };

const NAV: Group[] = [
  { heading: "Overview", items: [{ href: "/admin", label: "Dashboard", Icon: LayoutDashboard }] },
  {
    heading: "Content",
    items: [
      { href: "/admin/blog", label: "Posts", Icon: Newspaper },
      { href: "/admin/categories", label: "Categories", Icon: FolderTree },
      { href: "/admin/media", label: "Media", Icon: ImageIcon },
      { href: "/admin/menus", label: "Menus", Icon: ListTree },
    ],
  },
  {
    heading: "SEO",
    items: [
      { href: "/admin/keywords", label: "Keywords & Tracker", Icon: Target },
      { href: "/admin/rankings", label: "Rankings (GSC)", Icon: LineChart },
      { href: "/admin/pageseo", label: "Pages SEO", Icon: FileText },
      { href: "/admin/backlinks", label: "Backlinks", Icon: LinkIcon },
      { href: "/admin/locations", label: "Locations", Icon: MapPin },
    ],
  },
  {
    heading: "Business",
    items: [
      { href: "/admin/leads", label: "Leads", Icon: Inbox },
      { href: "/admin/reviews", label: "Reviews", Icon: Star },
      { href: "/admin/prices", label: "Prices", Icon: DollarSign },
      { href: "/admin/social", label: "Social", Icon: Megaphone },
      { href: "/admin/gbp", label: "Google Business", Icon: MapPinned },
      { href: "/admin/business", label: "Business / NAP", Icon: Building2 },
    ],
  },
  {
    heading: "System",
    items: [
      { href: "/admin/team", label: "Team & Roles", Icon: Users },
      { href: "/admin/settings", label: "Settings", Icon: Settings },
      { href: "/admin/publish", label: "Publish / Deploy", Icon: Rocket },
    ],
  },
];
const ALL_ITEMS = NAV.flatMap((g) => g.items);

// Trailing-slash-robust (the site uses trailingSlash:true, so usePathname can be "/admin/").
function isActive(pathname: string, href: string): boolean {
  const base = href.split("?")[0];
  return base === "/admin" ? pathname === "/admin" : pathname === base || pathname.startsWith(base + "/");
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = (usePathname() || "/").replace(/\/+$/, "") || "/";
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<Role | null>(null);

  // Fetch the signed-in role so the nav only shows sections this person can use. (Real access
  // control is enforced server-side in proxy.ts + requireAdmin — this is just UX.)
  useEffect(() => {
    if (pathname === "/admin/login") return;
    let alive = true;
    fetch("/api/admin/me/", { cache: "no-store" }).then((r) => r.ok ? r.json() : null)
      .then((j) => { if (alive && j?.ok && j.role) setRole(j.role); }).catch(() => {});
    return () => { alive = false; };
  }, [pathname]);

  // Login (and any future un-gated admin screen) renders without the chrome.
  if (pathname === "/admin/login") return <>{children}</>;

  // Show only nav the role can access (before role loads, show all — proxy still gates clicks).
  const visible = (href: string) => !role || canAccess(role, href);
  const groups = NAV.map((g) => ({ ...g, items: g.items.filter((i) => visible(i.href)) })).filter((g) => g.items.length);

  // Best-match active item drives the top-bar section label (longest matching href wins).
  const current = ALL_ITEMS.filter((i) => isActive(pathname, i.href)).sort((a, b) => b.href.length - a.href.length)[0];

  const SidebarInner = (
    <div className="flex h-full flex-col">
      <div className="px-4 py-4">
        <p className="m-0 text-[15px] font-semibold leading-tight text-white">MacBook Repair Dubai</p>
        <p className="m-0 text-[11px] uppercase tracking-wider text-white/40">Admin</p>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        {groups.map((g, gi) => (
          <div key={gi} className="mb-1">
            {g.heading && <p className="m-0 mb-1 mt-3 px-2 text-[10px] font-semibold uppercase tracking-wider text-white/35">{g.heading}</p>}
            {g.items.map(({ href, label, Icon }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`mb-0.5 flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] transition-colors ${
                    active ? "bg-white/12 font-semibold text-white" : "text-white/65 hover:bg-white/8 hover:text-white"
                  }`}
                  style={active ? { boxShadow: "inset 2px 0 0 var(--accent, #34d399)" } : undefined}
                >
                  <Icon size={16} className={active ? "text-accent" : ""} /> {label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="border-t border-white/10 p-2">
        <a href="/" target="_blank" rel="noopener noreferrer" className="mb-0.5 flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-white/65 hover:bg-white/8 hover:text-white">
          <ExternalLink size={16} /> View site
        </a>
        <a href="/api/admin/auth/logout/" className="flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-white/65 hover:bg-white/8 hover:text-white">
          <LogOut size={16} /> Sign out
        </a>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-56 shrink-0 bg-[#151D2E] lg:block">{SidebarInner}</aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 bg-[#151D2E] shadow-2xl">{SidebarInner}</aside>
        </div>
      )}

      {/* Content column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-bg/95 px-4 backdrop-blur md:px-6">
          <button onClick={() => setOpen(true)} className="rounded-md p-1.5 text-text-muted hover:bg-bg-alt lg:hidden" aria-label="Open menu"><Menu size={20} /></button>
          <span className="text-[14px] font-semibold text-text">{current?.label ?? "Admin"}</span>
          <a href="/" target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-[12px] text-text-muted hover:text-text">
            <ExternalLink size={13} /> View site
          </a>
        </header>
        <div className="flex-1 px-4 py-6 md:px-8">{children}</div>
      </div>
    </div>
  );
}
