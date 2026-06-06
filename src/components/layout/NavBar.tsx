"use client";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { Link, NavLink, useLocation } from "@/lib/router-compat";
import {
  ChevronDown, Menu, Phone, X, Star, Clock, Truck,
  Laptop, Monitor, BatteryCharging, Keyboard, Cpu, Droplets, SquareMousePointer,
  Smartphone, Tablet, PlugZap, Watch, DatabaseBackup, HardDrive, Box, Server,
  Banknote, Repeat, Wrench, Power, Gauge, Lock, Code, ShieldCheck, MessageCircle,
  ClipboardCheck, Info, MapPin, BadgeCheck, Tag, Scale, Newspaper, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";
import { MEGA_MENU, type MegaPanel } from "@/content/mega-menu";
import { cn } from "@/lib/utils";

// Lucide icon name → component. Used by the mega menu. Falls back to Wrench.
const MEGA_ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Laptop, Monitor, BatteryCharging, Keyboard, Cpu, Droplets, SquareMousePointer,
  Smartphone, Tablet, PlugZap, Watch, DatabaseBackup, HardDrive, Box, Server,
  Banknote, Repeat, Wrench, Power, Gauge, Lock, Code, ShieldCheck, MessageCircle,
  ClipboardCheck, Info, Star, MapPin, Clock, BadgeCheck, Tag, Truck, Scale, Newspaper,
};
const MegaIcon = ({ name, ...rest }: { name?: string; size?: number; strokeWidth?: number; className?: string }) => {
  const I = (name && MEGA_ICONS[name]) || Wrench;
  return <I {...rest} />;
};

// transparent at top, solid navy after 50px scroll
export function NavBar({ utilityBar = false }: { utilityBar?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  // tone of the hero behind the transparent header: "dark" heroes take white text,
  // "light" heroes (service/blog pages) take dark text so nav links stay legible.
  const [heroTone, setHeroTone] = useState<"dark" | "light">("dark");
  const location = useLocation();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // detect the hero tone for the current route (re-check on navigation)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const hero = document.querySelector<HTMLElement>("[data-hero-tone]");
    setHeroTone((hero?.dataset.heroTone as "dark" | "light") || "light");
  }, [location.pathname]);

  // lock scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close mega menu on route change or ESC
  useEffect(() => { setActiveKey(null); setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setActiveKey(null); setOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openPanel = (k: string) => {
    if (closeTimer.current) { window.clearTimeout(closeTimer.current); closeTimer.current = null; }
    setActiveKey(k);
  };
  const schedulePanelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveKey(null), 120);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out",
        scrolled || activeKey
          ? "bg-primary/95 supports-[backdrop-filter]:bg-primary/80 backdrop-blur-md text-on-primary shadow-md"
          : heroTone === "dark"
            ? "bg-transparent text-on-primary"
            : "bg-transparent text-text",
      )}
      onMouseLeave={schedulePanelClose}
    >
      {/* utility bar (opt-in, desktop) - trust + contact at a glance. Always solid so it's legible over any hero. */}
      {utilityBar && (
        <div className="hidden md:block bg-accent text-white">
          <div className="mx-auto flex h-9 max-w-content items-center justify-between gap-md px-5 md:px-6 text-[12px]">
            <span className="inline-flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <Star size={13} className="fill-star text-star" aria-hidden />
                <strong className="font-semibold">{REVIEW_AVERAGE.toFixed(1)}</strong>
                <span className="text-white/85">· {REVIEW_COUNT}+ Google reviews</span>
              </span>
              <span className="hidden lg:inline text-white/85">Apple specialist in Dubai since 2004 · 21+ years</span>
            </span>
            <span className="inline-flex items-center gap-4 text-white/85">
              <span className="hidden lg:inline-flex items-center gap-1.5"><Clock size={13} aria-hidden /> Mon-Sat 9 AM-10 PM</span>
              <span className="inline-flex items-center gap-1.5"><Truck size={13} aria-hidden /> Free pickup across Dubai</span>
              <a href={`tel:${NAP.phoneE164}`} className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-white/80 transition-colors" aria-label={`Call ${NAP.phoneDisplay}`}>
                <Phone size={13} aria-hidden /> {NAP.phoneDisplay}
              </a>
            </span>
          </div>
        </div>
      )}
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-6">
        <Link to="/" aria-label={`${NAP.name} - home`} className="text-current">
          <Logo withWordmark />
        </Link>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) => cn("relative text-[15px] py-2 text-current hover:text-accent transition-colors duration-200 ease-out after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent motion-safe:after:transition-transform motion-safe:after:duration-200 motion-safe:after:ease-out hover:after:scale-x-100", isActive && "!text-accent after:scale-x-100")}
          >
            Home
          </NavLink>
          {MEGA_MENU.map((panel) => {
            const isOpen = activeKey === panel.key;
            return (
              <div
                key={panel.key}
                className="relative"
                onMouseEnter={() => openPanel(panel.key)}
              >
                <NavLink
                  to={panel.href}
                  className={({ isActive }) =>
                    cn(
                      "relative inline-flex items-center gap-1 text-[15px] py-2 text-current hover:text-accent transition-colors duration-200 ease-out",
                      "after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent motion-safe:after:transition-transform motion-safe:after:duration-200 motion-safe:after:ease-out hover:after:scale-x-100",
                      (isActive || isOpen) && "!text-accent after:scale-x-100",
                    )
                  }
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onFocus={() => openPanel(panel.key)}
                  onClick={() => setActiveKey(null)}
                >
                  {panel.label}
                  <ChevronDown size={14} aria-hidden className={cn("transition-transform", isOpen && "rotate-180")} />
                </NavLink>
              </div>
            );
          })}
        </nav>

        {/* desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${NAP.phoneE164}`}
            className="flex items-center gap-2 text-[15px] font-semibold"
            aria-label={`Call ${NAP.phoneDisplay}`}
          >
            <Phone size={16} aria-hidden /> {NAP.phoneDisplay}
          </a>
          <Button asChild variant="whatsapp" size="sm">
            <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>

        {/* mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={24} aria-hidden />
        </button>
      </div>

      {/* desktop mega panels - offset clears the utility bar when present (36px + 64px nav) */}
      <div className="hidden lg:block">
        {/* scrim: dims the page behind the open panel and covers the gap between
            the nav row and the floating card so page content can't bleed through */}
        <div
          className={cn(
            "fixed inset-x-0 bottom-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-200 ease-out motion-reduce:transition-none",
            utilityBar ? "top-[100px]" : "top-16",
            activeKey ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          aria-hidden
          onMouseEnter={schedulePanelClose}
          onClick={() => setActiveKey(null)}
        />
        {MEGA_MENU.map((panel) => (
          <MegaPanelView
            key={panel.key}
            panel={panel}
            open={activeKey === panel.key}
            topOffset={utilityBar ? "top-[100px]" : "top-16"}
            onMouseEnter={() => openPanel(panel.key)}
            onMouseLeave={schedulePanelClose}
            onLinkClick={() => setActiveKey(null)}
          />
        ))}
      </div>

      {/* off-canvas drawer (right) */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[340px] max-w-[88vw] bg-bg-card text-text shadow-lg transition-transform duration-200 overflow-y-auto",
            open ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between p-md border-b border-border sticky top-0 bg-bg-card z-10">
            <Logo withWordmark className="text-primary" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
              <X size={22} aria-hidden />
            </button>
          </div>
          <nav className="flex flex-col" aria-label="Mobile">
            {MEGA_MENU.map((panel) => {
              const expanded = mobileExpanded === panel.key;
              return (
                <div key={panel.key} className="border-b border-border">
                  <div className="flex items-center">
                    <Link
                      to={panel.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 px-md py-3 text-[16px] font-semibold"
                    >
                      {panel.label}
                    </Link>
                    <button
                      type="button"
                      className="px-md py-3"
                      aria-label={`${expanded ? "Collapse" : "Expand"} ${panel.label}`}
                      aria-expanded={expanded}
                      onClick={() => setMobileExpanded(expanded ? null : panel.key)}
                    >
                      <ChevronDown size={18} aria-hidden className={cn("transition-transform", expanded && "rotate-180")} />
                    </button>
                  </div>
                  {expanded && (
                    <div className="pb-md">
                      {panel.columns.map((col) => (
                        <div key={col.heading} className="px-md pb-sm">
                          <p className="mb-1.5 mt-sm flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted">
                            <MegaIcon name={col.icon} size={12} strokeWidth={2.4} className="text-accent" />
                            {col.heading}
                          </p>
                          <ul className="space-y-0.5">
                            {col.links.map((l) => (
                              <li key={l.href + l.label}>
                                <Link
                                  to={l.href}
                                  onClick={() => setOpen(false)}
                                  className="group flex items-center gap-2.5 rounded-lg py-1.5 text-[14px] text-text"
                                >
                                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-bg-alt text-text-muted">
                                    <MegaIcon name={l.icon} size={14} strokeWidth={2} />
                                  </span>
                                  <span className="group-hover:text-accent">{l.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/" onClick={() => setOpen(false)} className="px-md py-3 text-[16px] font-semibold border-b border-border">Home</Link>
          </nav>
          <div className="p-md flex flex-col gap-sm">
            <Button asChild variant="primary">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone size={16} aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="whatsapp">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
            </Button>
          </div>
        </aside>
      </div>
    </header>
  );
}

function MegaPanelView({
  panel, open, topOffset, onMouseEnter, onMouseLeave, onLinkClick,
}: {
  panel: MegaPanel;
  open: boolean;
  topOffset: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
}) {
  const f = panel.featured;
  // Track count must match columns + featured, or the featured card wraps to a
  // new row (Devices has 4 columns; the others have 3). Tighten the gap and
  // featured width on the wide layout so 4 columns + card still fit 1180px.
  const colCount = panel.columns.length;
  const wide = colCount >= 4;
  return (
    <div
      className={cn(
        "absolute inset-x-0 px-5 md:px-6 origin-top transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none",
        topOffset,
        open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible motion-safe:-translate-y-2 pointer-events-none",
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label={`${panel.label} menu`}
    >
      {/* floating contained card - sleek, spacious, icon-led */}
      <div className="mx-auto mt-2 max-w-content overflow-hidden rounded-2xl border border-border bg-bg-card text-text shadow-lg ring-1 ring-black/5">
        <div
          className={cn("grid gap-y-xl p-xl", wide ? "gap-x-lg" : "gap-x-2xl")}
          style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0,1fr))${f ? (wide ? " 260px" : " 300px") : ""}` }}
        >
          {panel.columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted">
                <MegaIcon name={col.icon} size={13} strokeWidth={2.4} className="text-accent" />
                {col.heading}
              </p>
              <ul className="space-y-0.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      to={l.href}
                      onClick={onLinkClick}
                      className="group -mx-2.5 flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors duration-150 hover:bg-bg-alt"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg-alt text-text-muted transition-colors duration-150 group-hover:bg-accent group-hover:text-white">
                        <MegaIcon name={l.icon} size={16} strokeWidth={2} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14px] font-semibold leading-tight text-text transition-colors group-hover:text-accent">{l.label}</span>
                        {l.desc && <span className="mt-0.5 block text-[12px] leading-tight text-text-muted">{l.desc}</span>}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {f && (
            <aside className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 p-6 text-white shadow-md">
              <p className="mb-2 text-[16px] font-bold leading-snug">{f.title}</p>
              <p className="flex-1 text-[13px] leading-relaxed text-white/85">{f.desc}</p>
              {f.href.startsWith("http") ? (
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-[13px] font-bold text-accent shadow-sm transition-colors hover:bg-white/90"
                  onClick={onLinkClick}
                >
                  {f.cta.replace(/\s*→\s*$/, "")}
                  <ArrowRight size={15} className="transition-transform group-hover/cta:translate-x-0.5" aria-hidden />
                </a>
              ) : (
                <Link
                  to={f.href}
                  onClick={onLinkClick}
                  className="group/cta mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-[13px] font-bold text-accent shadow-sm transition-colors hover:bg-white/90"
                >
                  {f.cta.replace(/\s*→\s*$/, "")}
                  <ArrowRight size={15} className="transition-transform group-hover/cta:translate-x-0.5" aria-hidden />
                </Link>
              )}
            </aside>
          )}
        </div>
        {panel.intro && (
          <p className="border-t border-border bg-bg-alt/60 px-xl py-3 text-[12px] text-text-muted">{panel.intro}</p>
        )}
      </div>
    </div>
  );
}
