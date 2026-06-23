"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/router-compat";
import {
  Facebook, Instagram, Youtube, Phone, MessageCircle, MapPin, Clock, Star,
  ShieldCheck, Truck, BadgeCheck, Laptop, Smartphone, Tablet, Monitor,
  BatteryCharging, Droplets, CircuitBoard, HardDrive, Calculator, Tag, BookOpen,
  Wrench, LifeBuoy, ChevronRight, type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";
import { FOOTER_COLUMNS } from "@/content/mega-menu";
import { cn } from "@/lib/utils";

// The pre-footer CTA names the visitor's device so an iPhone/iPad page never asks
// "Broken Mac?". Mixed/Mac pages keep the brand default.
function brokenDeviceWord(path: string): string {
  if (/iphone|ipod/.test(path)) return "iPhone";
  if (/ipad/.test(path)) return "iPad";
  if (/watch/.test(path)) return "Apple Watch";
  return "Mac";
}

// Same icon language as the mega menu so the footer feels like one system.
const LINK_ICONS: Record<string, LucideIcon> = {
  "/mac-repair-dubai": Laptop,
  "/macbook-screen-repair-dubai": Monitor,
  "/macbook-battery-replacement-dubai": BatteryCharging,
  "/macbook-water-damage-repair-dubai": Droplets,
  "/macbook-logic-board-repair-dubai": CircuitBoard,
  "/mac-data-recovery-dubai": HardDrive,
  "/iphone-repair-dubai": Smartphone,
  "/ipad-repair-dubai": Tablet,
  "/macbook-repair-cost-calculator-dubai": Calculator,
  "/pricing": Tag,
  "/warranty": ShieldCheck,
  "/reviews": Star,
  "/about": BadgeCheck,
  "/blog": BookOpen,
  "/contact": Truck,
};
const HEADING_ICONS: Record<string, LucideIcon> = { popular: Wrench, company: LifeBuoy, locations: MapPin };
const FALLBACK_ICON: Record<string, LucideIcon> = { popular: Wrench, company: Tag, locations: MapPin };

// Footer columns are edited in /admin/menus (baked into mega-menu.generated.ts). The {REVIEW_COUNT}
// token in a link label is replaced with the live review count from Business / NAP.
const reviewToken = (s: string) => s.replace("{REVIEW_COUNT}", String(REVIEW_COUNT));
const footerCol = (key: string) => FOOTER_COLUMNS.find((c) => c.key === key);
const popularCol = footerCol("popular");
const companyCol = footerCol("company");
const locationsCol = footerCol("locations");
const POPULAR_REPAIRS = (popularCol?.links ?? []).map((l) => ({ label: reviewToken(l.label), href: l.href }));
const COMPANY_LINKS = (companyCol?.links ?? []).map((l) => ({ label: reviewToken(l.label), href: l.href }));
const LOCATION_LINKS = (locationsCol?.links ?? []).map((l) => ({ label: reviewToken(l.label), href: l.href }));

// `hideCtaBand` suppresses the pre-footer CTA strip on pages that already render
// their own closing CTA (service/device/iPhone templates) so the two don't stack.
export function Footer({ hideCtaBand = false }: { hideCtaBand?: boolean } = {}) {
  const year = new Date().getFullYear();
  const pathname = usePathname() || "";
  const device = brokenDeviceWord(pathname);
  return (
    <footer className="relative border-t border-border bg-bg-alt text-text pb-14 md:pb-0">
      <div className="relative mx-auto max-w-content px-5 md:px-6 pt-3xl pb-lg">
        {/* ── Top CTA strip ─────────────────────────────────────── */}
        {!hideCtaBand && (
        <div className="relative flex flex-col gap-lg overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/12 via-bg-card to-bg-card p-lg md:flex-row md:items-center md:justify-between md:p-xl">
          <div>
            <p className="m-0 text-[12px] font-semibold uppercase tracking-wider text-accent">Fixed in 30 minutes by appointment · or it's free</p>
            <h2 className="m-0 mt-1 text-[24px] md:text-[28px] text-text">Broken {device}? Get a quote in minutes.</h2>
            <p className="m-0 mt-1.5 text-[13.5px] text-text-muted">Free diagnosis · no fix, no charge · free pickup Dubai-wide · warranty up to 12 months</p>
          </div>
          <div className="flex flex-wrap gap-sm shrink-0">
            <Button asChild variant="whatsapp" size="lg" className="shadow-sm shadow-whatsapp/20">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
        )}

        {/* ── Trust strip ───────────────────────────────────────── */}
        <ul className="mt-2xl flex flex-wrap items-center justify-center gap-2.5 text-[13px] text-text-muted list-none">
          {[
            { Icon: Star, node: <><strong className="font-semibold text-text">{REVIEW_AVERAGE.toFixed(1)}</strong> · {REVIEW_COUNT}+ Google reviews</>, star: true },
            { Icon: BadgeCheck, node: <>Apple specialist since {NAP.founded}</> },
            { Icon: ShieldCheck, node: <>Up to 12-month warranty</> },
            { Icon: Truck, node: <>Free pickup Dubai-wide</> },
            { Icon: BadgeCheck, node: <>No fix · no fee</> },
          ].map(({ Icon, node, star }, i) => (
            <li key={i} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card/70 px-3 py-1.5">
              <Icon size={14} className={star ? "fill-star text-star" : "text-accent"} aria-hidden /> {node}
            </li>
          ))}
        </ul>

        {/* ── Card grid (same visual language as the mega menu) ──── */}
        <div className="mt-3xl grid gap-x-lg gap-y-lg sm:grid-cols-2 lg:grid-cols-12">
          {/* brand + contact */}
          <div className="sm:col-span-2 lg:col-span-4 rounded-2xl border border-border/70 bg-bg-card/60 p-5">
            <Logo withWordmark className="text-text" />
            <p className="mt-md max-w-sm text-[14px] leading-relaxed text-text-muted">
              Independent Apple repair specialist in Dubai Media City since {NAP.founded}. Board-level
              work, free pickup, warranty up to 12 months.
            </p>
            <address className="mt-md not-italic text-[14px] leading-relaxed text-text-muted">
              <span className="flex items-start gap-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"><MapPin size={15} aria-hidden /></span>
                <span className="pt-1">{NAP.street}, {NAP.area}, {NAP.city}</span>
              </span>
            </address>
            <div className="mt-sm text-[14px]">
              <a href={`tel:${NAP.phoneE164}`} className="group flex min-h-[44px] items-center gap-3 rounded-xl px-1 text-text-muted transition-colors hover:text-accent">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white"><Phone size={14} aria-hidden /></span>
                <span>{NAP.phoneDisplay}</span>
              </a>
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-[44px] items-center gap-3 rounded-xl px-1 text-text-muted transition-colors hover:text-accent">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white"><MessageCircle size={14} aria-hidden /></span>
                <span>WhatsApp 24/7</span>
              </a>
              <p className="m-0 flex items-center gap-3 px-1 text-text-faint">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"><Clock size={14} aria-hidden /></span>
                <span>Mon-Sat · 9 am - 10 pm · Sun closed</span>
              </p>
            </div>
            {/* Social profiles — keep in lockstep with Organization/LocalBusiness sameAs (schema.ts reads the same NAP fields). */}
            <div className="mt-md flex gap-2">
              {[
                { href: NAP.facebook, label: "Facebook", Icon: Facebook },
                { href: NAP.instagram, label: "Instagram", Icon: Instagram },
                { href: NAP.youtube, label: "YouTube", Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-accent/10 text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon size={16} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <FooterCol className="lg:col-span-3" colKey="popular" heading={popularCol?.heading ?? "Popular repairs"} links={POPULAR_REPAIRS} />
          <FooterCol className="lg:col-span-3" colKey="company" heading={companyCol?.heading ?? "Company & support"} links={COMPANY_LINKS} />
          <FooterCol
            className="lg:col-span-2"
            colKey="locations"
            heading={locationsCol?.heading ?? "Service areas"}
            links={LOCATION_LINKS}
            viewAll={{ label: "All areas & UAE", href: "/macbook-repair-near-me" }}
          />
        </div>
      </div>

      {/* ── Bottom strip ──────────────────────────────────────── */}
      <div className="relative mx-auto max-w-content px-5 md:px-6 mt-2xl border-t border-border py-lg flex flex-wrap items-center justify-between gap-md text-[13px] text-text-faint">
        <p className="m-0">© {year} {NAP.name}. All rights reserved.</p>
        <nav className="-my-1 flex flex-wrap gap-x-md" aria-label="Legal">
          <Link to="/privacy"  className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent">Privacy</Link>
          <Link to="/terms"    className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent">Terms</Link>
          <Link to="/warranty" className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent">Warranty</Link>
          <Link to="/refund"   className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent">Refund</Link>
          <Link to="/cookies"  className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent">Cookies</Link>
          <Link to="/image-usage-license" className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent">Image license</Link>
          <Link to="/sitemap.xml" className="inline-flex min-h-[44px] items-center transition-colors hover:text-accent">Sitemap</Link>
        </nav>
        <div className="flex flex-wrap items-center gap-2 text-[12px]">
          {["Tabby", "Tamara", "VISA", "Mastercard", "Amex", "Cash"].map((m) => (
            <span key={m} className="rounded-md border border-border-strong px-2 py-1">{m}</span>
          ))}
        </div>
      </div>

      {/* ── Credits ───────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-content px-5 md:px-6 pb-lg flex flex-wrap items-center justify-center gap-x-md gap-y-xs text-center text-[12px] text-text-faint">
        <span>
          Development &amp; SEO by{" "}
          <a href="https://webbae.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            webbae.com
          </a>
          {" "}· Operated by{" "}
          <a href="https://azizitechnologies.ae" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            Azizi Technologies
          </a>
        </span>
      </div>
    </footer>
  );
}

function FooterHeading({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <div className="mb-2 flex items-center gap-2 px-1">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent/10 text-accent"><Icon size={14} aria-hidden /></span>
      <p className="m-0 text-[11px] font-semibold uppercase tracking-wide text-text/50">{children}</p>
    </div>
  );
}

// One footer row — identical chip + hover + sliding-chevron language as the mega menu.
function FooterRow({ icon: Icon, label, href, accent }: { icon: LucideIcon; label: string; href: string; accent?: boolean }) {
  return (
    <Link
      to={href}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-2.5 py-2 text-[14px] transition-colors hover:bg-accent/8 hover:text-accent",
        accent ? "font-semibold text-accent" : "text-text-muted",
      )}
    >
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon size={15} aria-hidden />
      </span>
      <span className="flex-1 truncate">{label}</span>
      <ChevronRight size={14} aria-hidden className="shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}

function FooterCol({
  colKey, heading, links, viewAll, className,
}: {
  colKey: string;
  heading: string;
  links: { label: string; href: string }[];
  viewAll?: { label: string; href: string };
  className?: string;
}) {
  const HeadIcon = HEADING_ICONS[colKey] ?? Wrench;
  const fallback = FALLBACK_ICON[colKey] ?? ChevronRight;
  return (
    <nav aria-label={heading} className={cn("rounded-2xl border border-border/70 bg-bg-card/60 p-3", className)}>
      <FooterHeading icon={HeadIcon}>{heading}</FooterHeading>
      <ul className="space-y-0.5 list-none p-0 m-0">
        {links.map((l) => (
          <li key={l.href}>
            <FooterRow icon={LINK_ICONS[l.href] ?? fallback} label={l.label} href={l.href} />
          </li>
        ))}
        {viewAll && (
          <li className="mt-0.5 border-t border-border/60 pt-0.5">
            <FooterRow icon={MapPin} label={viewAll.label} href={viewAll.href} accent />
          </li>
        )}
      </ul>
    </nav>
  );
}
