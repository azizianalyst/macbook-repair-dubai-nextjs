"use client";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "@/lib/router-compat";
import {
  Menu, Phone, X, Star, Clock, Truck, ChevronDown, ChevronRight, MessageCircle,
  Laptop, Smartphone, Tablet, Monitor, HardDrive, BatteryCharging, Power, Droplets,
  Keyboard, Calculator, Tag, ShieldCheck, BadgeCheck, Building2, Wrench, MapPin,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";
import { MEGA_MENU } from "@/content/mega-menu";
import type { MegaPanel, MegaLink } from "@/content/mega-menu";
import { cn } from "@/lib/utils";

// One friendly icon per link so each row is instantly scannable.
const LINK_ICONS: Record<string, LucideIcon> = {
  "/macbook-pro-repair-dubai": Laptop,
  "/macbook-air-repair-dubai": Laptop,
  "/imac-repair-dubai": Monitor,
  "/iphone-repair-dubai": Smartphone,
  "/ipad-repair-dubai": Tablet,
  "/mac-mini-repair-dubai": HardDrive,
  "/macbook-screen-repair-dubai": Monitor,
  "/macbook-battery-replacement-dubai": BatteryCharging,
  "/macbook-not-turning-on-dubai": Power,
  "/macbook-water-damage-repair-dubai": Droplets,
  "/mac-data-recovery-dubai": HardDrive,
  "/macbook-keyboard-repair-dubai": Keyboard,
  "/macbook-repair-cost-calculator-dubai": Calculator,
  "/pricing": Tag,
  "/warranty": ShieldCheck,
  "/applecare-macbook-repair-dubai": BadgeCheck,
  "/where-to-repair-macbook-dubai": Building2,
  "/out-of-warranty-apple-repair-dubai": Wrench,
  "/onsite-macbook-repair-dubai": Truck,
};
const PANEL_ICONS: Record<string, LucideIcon> = {
  devices: Laptop,
  repairs: Wrench,
  pricing: Tag,
  locations: MapPin,
};

function panelLinks(panel: MegaPanel): MegaLink[] {
  if (panel.links?.length) return panel.links;
  if (panel.groups?.length) return panel.groups.flatMap((g) => g.links);
  if (panel.families?.length) return panel.families.flatMap((f) => f.links);
  return [];
}
function hasDropdown(panel: MegaPanel): boolean {
  return panelLinks(panel).length > 0;
}
function iconFor(panel: MegaPanel, href: string): LucideIcon {
  return LINK_ICONS[href] ?? PANEL_ICONS[panel.key] ?? ChevronRight;
}

// A single friendly menu row: icon chip + label, comfortable tap target.
function MenuRow({ panel, link, onNavigate }: { panel: MegaPanel; link: MegaLink; onNavigate: () => void }) {
  const Icon = iconFor(panel, link.href);
  return (
    <Link
      to={link.href}
      onClick={onNavigate}
      className="group/row flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-[14.5px] text-text/90 transition-colors hover:bg-accent/8 hover:text-accent"
    >
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover/row:bg-accent group-hover/row:text-white">
        <Icon size={16} aria-hidden />
      </span>
      <span className="flex-1 truncate font-medium">{link.label}</span>
      <ChevronRight size={15} aria-hidden className="shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
    </Link>
  );
}

// Compact, single-column desktop dropdown — easy to scan, one click to act.
function MegaDropdown({ panel, onNavigate }: { panel: MegaPanel; onNavigate: () => void }) {
  const links = panelLinks(panel);
  if (!links.length) return null;
  return (
    <div className="w-[320px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border/70 bg-bg-card/95 text-text shadow-2xl ring-1 ring-black/[0.04] supports-[backdrop-filter]:bg-bg-card/85 supports-[backdrop-filter]:backdrop-blur-xl p-2">
      <ul className="space-y-0.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <MenuRow panel={panel} link={link} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
      <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-border/60 px-2.5 pt-2.5">
        <Link
          to={panel.href}
          onClick={onNavigate}
          className="group/all inline-flex items-center gap-1 text-[13px] font-semibold text-accent"
        >
          {panel.viewAll ?? "View all"}
          <ChevronRight size={14} aria-hidden className="transition-transform duration-200 group-hover/all:translate-x-0.5" />
        </Link>
        <Button asChild variant="whatsapp" size="sm">
          <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">Free quote</a>
        </Button>
      </div>
    </div>
  );
}

export function NavBar({ utilityBar = false }: { utilityBar?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [heroTone, setHeroTone] = useState<"dark" | "light">("light");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const hero = document.querySelector<HTMLElement>("[data-hero-tone]");
    setHeroTone((hero?.dataset.heroTone as "dark" | "light") || "light");
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); setOpenKey(null); }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setOpenKey(null); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative inline-flex items-center gap-1 whitespace-nowrap text-[14px] py-2 text-current hover:text-accent transition-colors duration-200",
      "after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent motion-safe:after:transition-transform motion-safe:after:duration-200 hover:after:scale-x-100",
      isActive && "!text-accent after:scale-x-100",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out",
        scrolled || openKey
          ? "bg-bg/90 supports-[backdrop-filter]:bg-bg/70 backdrop-blur-xl text-text border-b border-border/70 shadow-sm"
          : heroTone === "dark"
            ? "bg-transparent text-on-primary"
            : "bg-transparent text-text",
      )}
    >
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

      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 md:px-6">
        <Link to="/" aria-label={`${NAP.name} - home`} className="shrink-0 text-current">
          <Logo withWordmark />
        </Link>

        {/* Desktop nav — friendly compact dropdowns */}
        <nav
          className="hidden lg:flex items-center gap-3 xl:gap-5"
          aria-label="Primary"
          onMouseLeave={() => setOpenKey(null)}
        >
          <NavLink to="/" end className={linkCls}>Home</NavLink>
          {MEGA_MENU.map((panel, idx) => {
            const dropdown = hasDropdown(panel);
            const isOpen = openKey === panel.key;
            const alignRight = idx >= MEGA_MENU.length - 2; // keep right-side panels in-viewport
            return (
              <div
                key={panel.key}
                className="relative"
                onMouseEnter={() => dropdown && setOpenKey(panel.key)}
              >
                <NavLink
                  to={panel.href}
                  className={linkCls}
                  aria-expanded={dropdown ? isOpen : undefined}
                  onFocus={() => dropdown && setOpenKey(panel.key)}
                >
                  {panel.label}
                  {dropdown && (
                    <ChevronDown size={14} aria-hidden className={cn("transition-transform duration-200", isOpen && "rotate-180")} />
                  )}
                </NavLink>
                {dropdown && (
                  <div
                    className={cn(
                      "absolute top-full pt-3 z-50 origin-top transition-all duration-200 ease-out motion-reduce:transition-none",
                      alignRight ? "right-0" : "left-0",
                      isOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 -translate-y-1 scale-[0.98] pointer-events-none",
                    )}
                    aria-hidden={!isOpen}
                  >
                    <MegaDropdown panel={panel} onNavigate={() => setOpenKey(null)} />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTAs — Call + Free quote (WhatsApp) */}
        <div className="hidden lg:flex shrink-0 items-center gap-2.5">
          <Button asChild variant="secondary" size="sm">
            <a href={`tel:${NAP.phoneE164}`} aria-label={`Call ${NAP.phoneDisplay}`}>
              <Phone size={15} aria-hidden />
              <span className="hidden xl:inline">{NAP.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>
          </Button>
          <Button asChild variant="whatsapp" size="sm" className="shadow-sm shadow-whatsapp/20">
            <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={15} aria-hidden /> Free quote
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={24} aria-hidden />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        inert={!open}
      >
        <div className={cn("absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200", open ? "opacity-100" : "opacity-0")} onClick={() => setOpen(false)} />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[330px] max-w-[90vw] bg-bg-card text-text shadow-2xl transition-transform duration-300 ease-out overflow-y-auto",
            open ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between p-md border-b border-border sticky top-0 bg-bg-card/95 supports-[backdrop-filter]:bg-bg-card/80 supports-[backdrop-filter]:backdrop-blur-md z-10">
            <Logo withWordmark className="text-primary" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-text/5">
              <X size={22} aria-hidden />
            </button>
          </div>

          {/* Persistent dual CTA */}
          <div className="grid grid-cols-2 gap-2 p-md border-b border-border">
            <Button asChild variant="whatsapp" size="lg" className="w-full">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} aria-hidden /> Free quote
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href={`tel:${NAP.phoneE164}`}><Phone size={18} aria-hidden /> Call</a>
            </Button>
          </div>

          <nav className="flex flex-col pb-6" aria-label="Mobile">
            <Link to="/" onClick={() => setOpen(false)} className="flex min-h-[52px] items-center px-md text-[16px] font-semibold border-b border-border">Home</Link>
            {MEGA_MENU.map((panel) => {
              const links = panelLinks(panel);
              const isExpanded = expanded === panel.key;
              const PanelIcon = PANEL_ICONS[panel.key];
              if (!links.length) {
                return (
                  <Link key={panel.key} to={panel.href} onClick={() => setOpen(false)} className="flex min-h-[52px] items-center gap-2.5 px-md text-[16px] font-semibold border-b border-border">
                    {PanelIcon && <PanelIcon size={18} className="text-accent" aria-hidden />}
                    {panel.label}
                  </Link>
                );
              }
              return (
                <div key={panel.key} className="border-b border-border">
                  <button
                    className="flex w-full min-h-[52px] items-center justify-between gap-2 px-md text-[16px] font-semibold"
                    aria-expanded={isExpanded}
                    onClick={() => setExpanded(isExpanded ? null : panel.key)}
                  >
                    <span className="flex items-center gap-2.5">
                      {PanelIcon && <PanelIcon size={18} className="text-accent" aria-hidden />}
                      {panel.label}
                    </span>
                    <ChevronDown size={18} aria-hidden className={cn("transition-transform duration-200", isExpanded && "rotate-180")} />
                  </button>
                  <div className={cn("grid transition-[grid-template-rows] duration-300 ease-out", isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <ul className="px-sm pb-2">
                        {links.map((link) => {
                          const Icon = iconFor(panel, link.href);
                          return (
                            <li key={link.href + link.label}>
                              <Link
                                to={link.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[15px] text-text/85 transition-colors hover:bg-accent/8 hover:text-accent"
                              >
                                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                                  <Icon size={15} aria-hidden />
                                </span>
                                {link.label}
                              </Link>
                            </li>
                          );
                        })}
                        {panel.viewAll && (
                          <li>
                            <Link
                              to={panel.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-1 px-2 py-2.5 text-[14px] font-semibold text-accent"
                            >
                              {panel.viewAll} <ChevronRight size={15} aria-hidden />
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </aside>
      </div>
    </header>
  );
}
