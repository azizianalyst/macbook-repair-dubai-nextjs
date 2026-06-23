"use client";
// Shared layout for MacBook Pro generation hub pages (M1, M2, M3, M4, M5, Intel).
// Follows the MacBookProRepair.tsx master template exactly.
import {
  Star, MessageCircle, Phone,
  Keyboard, Monitor, BatteryCharging, Droplets, PlugZap,
  MousePointer2, Code2, HardDrive, Cpu, Thermometer,
  Power, Gauge, AlertTriangle, Snowflake, Wifi, Bluetooth, Volume2,
  Link2, ShieldCheck, Clock, Award, Wrench,
  Search, BadgeCheck, Truck, Flame,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";
import { ROUTES } from "@/lib/routes.generated";
import type { LucideIcon } from "lucide-react";

// So each generation hub links its OWN screen/battery spokes (e.g. /macbook-pro-m1-screen-repair-dubai)
// when those pages exist — otherwise the per-chip spokes are orphaned (no inbound links).
const ROUTE_SET = new Set(ROUTES);

export type GenModel = { label: string; href?: string; aNum?: string };
export type GenFAQ = { q: string; a: string };

export type MacBookProGenerationProps = {
  path: string;
  chip: string;          // "M5", "M4", "M3", "M2", "M1", "Intel"
  years: string;         // "2025 – 2026"
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  heroDescription: string;
  heroMeta: string[];    // bullet points under hero description
  models: GenModel[];
  faqs: GenFAQ[];
  parentHref?: string;   // link back to MacBook Pro hub, default /macbook-pro-repair-dubai
};

const HERO_IMG = "/images/real/lab/macbook-battery-internals-dubai.jpg";
const HERO_ALT = "MacBook Pro internals open on the repair bench at MacBook Repair Dubai";

const SERVICES: { Icon: LucideIcon; title: string; body: string; href: string }[] = [
  { Icon: Monitor,         title: "Screen Repair",            href: "/macbook-screen-repair-dubai",         body: "Cracked, flickering, or dead display? We replace Liquid Retina XDR panels same day for most models." },
  { Icon: BatteryCharging, title: "Battery Replacement",      href: "/macbook-battery-replacement-dubai",   body: "Swollen battery, rapid drain, or heat issues? We restore full capacity with genuine-grade cells." },
  { Icon: Keyboard,        title: "Keyboard Repair",          href: "/macbook-keyboard-repair-dubai",       body: "Keys loose, sticking, or unresponsive? We fix or replace individual keys and full keyboard assemblies." },
  { Icon: Droplets,        title: "Water Damage Repair",      href: "/macbook-water-damage-repair-dubai",   body: "Liquid spill? Power off immediately. Our board-level technicians dry, clean, and restore your MacBook Pro." },
  { Icon: PlugZap,         title: "Not Charging Fix",         href: "/macbook-charging-port-repair-dubai",  body: "USB-C not charging? We diagnose the port, cable, or charging IC and get your MacBook powering up again." },
  { Icon: MousePointer2,   title: "Trackpad Repair",          href: "/macbook-trackpad-repair-dubai",       body: "Trackpad not clicking? We recalibrate, repair, or replace Force Touch trackpads to restore precise control." },
  { Icon: Cpu,             title: "Logic Board Repair",       href: "/macbook-logic-board-repair-dubai",    body: "Power rail faults, no-video, or dead machine? Our board-level repair restores function without a full board swap." },
  { Icon: HardDrive,       title: "Data Recovery",            href: "/mac-data-recovery-dubai",             body: "Lost files after a failed drive or liquid damage? We retrieve data from faulty SSDs and logic boards." },
  { Icon: Thermometer,     title: "Overheating Fix",          href: "/macbook-overheating-fix-dubai",       body: "Fans running loud under load? We reclean thermal paste, replace heatsinks, and clear clogged fan vents." },
  { Icon: Power,           title: "Won&apos;t Turn On",       href: "/mac-not-turning-on-dubai",            body: "Dead MacBook? We diagnose power rail failures, SMC issues, and logic board faults to bring it back to life." },
  { Icon: Gauge,           title: "Running Slow",             href: "/mac-performance-tune-dubai",          body: "Slow startup or sluggish apps? We tune macOS settings and upgrade storage for peak performance." },
  { Icon: Link2,           title: "Hinge Repair",             href: "/macbook-hinge-repair-dubai",          body: "Loose or broken lid hinge? We repair or replace MacBook Pro hinges so the screen opens smoothly again." },
];

const PROCESS = [
  { Icon: Search,     title: "Free diagnosis",    body: "Drop in, ship, or book a free pickup. We run a full diagnostic — hardware and software — at no charge." },
  { Icon: BadgeCheck, title: "Fixed quote",        body: "You receive a transparent AED quote before any work begins. No surprises, no hidden add-ons." },
  { Icon: Wrench,     title: "Expert repair",      body: "Your MacBook Pro is repaired by a specialist with 14+ years on Apple hardware, using genuine-grade parts." },
  { Icon: ShieldCheck, title: "Quality check",    body: "Every repair passes a 25-point QC before return. Battery cycle, screen, keyboard, ports, thermals — all verified." },
];

const SIGNS: { Icon: LucideIcon; label: string; body: string }[] = [
  { Icon: Gauge,        label: "Running slowly",    body: "Long startup times, lag on simple tasks, or persistent spinning wheel." },
  { Icon: Thermometer,  label: "Overheating",       body: "Gets very hot even when idle — a fan, vent, or cooling issue." },
  { Icon: BatteryCharging, label: "Battery problems", body: "Drains too quickly, won&apos;t charge properly, or shows signs of swelling." },
  { Icon: Monitor,      label: "Screen issues",     body: "Cracked display, flickering, colour shifts, or brightness problems." },
  { Icon: Keyboard,     label: "Keyboard / trackpad", body: "Keys aren&apos;t responding, keyboard sticks, or trackpad stops working." },
  { Icon: Droplets,     label: "Liquid damage",     body: "You spilled liquid — power off immediately and bring it in." },
  { Icon: AlertTriangle, label: "Frequent crashes", body: "Random shutdowns or crashes — could be software or failing hardware." },
  { Icon: Flame,        label: "Burning smell",     body: "Strange burning or melting smell — needs urgent attention." },
];

const WHY: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: Clock,      title: "Same-day service",          body: "Most MacBook Pro repairs — screen, battery, keyboard — are done within a few hours, not days." },
  { Icon: Award,      title: "20+ years experience",      body: "Our technicians have repaired Apple hardware since 2004. We&apos;ve seen every fault, fixed every model." },
  { Icon: ShieldCheck, title: "Warranty up to 12 months", body: "All parts and labour carry a written warranty. Screen and battery replacements come with 12-month cover." },
  { Icon: Truck,      title: "Free pickup Dubai-wide",    body: "Can&apos;t come to us? We collect your MacBook Pro for free across Dubai and return it repaired." },
  { Icon: BadgeCheck, title: "No fix, no charge",         body: "If we can&apos;t fix it, you pay nothing. Our no-fix guarantee removes the risk from your repair." },
  { Icon: Search,     title: "Free diagnosis",            body: "Every MacBook Pro gets a full diagnosis at no cost. We find the real fault — not guess at it." },
];

const TESTIMONIALS = [
  { name: "Saeed Alam", body: "Dropped my MacBook Pro and the screen completely shattered. They replaced it same day for a fair price and it looks brand new. Highly recommended." },
  { name: "Anatoliy Tarasenko", body: "Logic board issue fixed in 2 hours. The technician explained exactly what was wrong and showed me the faulty component. Very professional service." },
  { name: "Daniel Vyskoc", body: "Battery was swollen and the trackpad stopped clicking. Both fixed same day. Warranty on the battery too. Will come back for sure." },
];

function SectionHeading({ label, title, sub }: { label?: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-[56px]">
      {label && (
        <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4 max-w-none w-full">
          {label}
        </p>
      )}
      <h2 className="text-center text-[36px] md:text-[52px] font-bold tracking-tight text-text leading-[1.1]">{title}</h2>
      {sub && <p className="text-center mt-5 text-[17px] text-text-muted max-w-[56ch] mx-auto leading-relaxed">{sub}</p>}
    </div>
  );
}

function IconCard({ Icon, title, body, href }: { Icon: LucideIcon; title: string; body: string; href?: string }) {
  const inner = (
    <div className="flex flex-col gap-sm group">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
        <Icon size={22} className="text-accent" strokeWidth={1.75} />
      </div>
      <h3 className="text-[17px] font-semibold text-text flex items-center gap-1">
        {title}
        {href && <span className="text-accent text-[13px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>}
      </h3>
      <p className="text-[15px] text-text-muted leading-relaxed">{body}</p>
    </div>
  );
  return href ? <Link to={href} className="block">{inner}</Link> : inner;
}

function CallButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant={dark ? "secondary" : "outline"} size="lg" className={dark ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : ""}>
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function MacBookProGenerationPage(p: MacBookProGenerationProps) {
  // Point the Screen/Battery service cards at this generation's own spoke page when it exists,
  // so /macbook-pro-mX-repair-dubai links to /macbook-pro-mX-screen-repair-dubai etc.
  const base = p.path.replace(/-repair-dubai\/?$/, "");
  const spokeOr = (suffix: string, fallback: string) => (ROUTE_SET.has(base + suffix) ? base + suffix : fallback);
  const services = SERVICES.map((s) =>
    s.title === "Screen Repair" ? { ...s, href: spokeOr("-screen-repair-dubai", s.href) }
    : s.title === "Battery Replacement" ? { ...s, href: spokeOr("-battery-replacement-dubai", s.href) }
    : s,
  );
  useSeo(
    {
      title: p.seoTitle,
      description: p.seoDescription,
      path: p.path,
      preloadImage: preloadFromHero(HERO_IMG),
    },
    [localBusiness(), organization()],
  );

  const parentHref = p.parentHref ?? "/macbook-pro-repair-dubai";
  const isSilicon = p.chip !== "Intel";

  const faqGroups = [
    {
      category: "Pricing & booking",
      items: p.faqs.filter((_, i) => i < 2),
    },
    {
      category: "Parts & warranty",
      items: p.faqs.filter((_, i) => i >= 2),
    },
  ].filter((g) => g.items.length > 0);

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* ── BREADCRUMB ── */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={[
              { name: "Home", path: "/" },
              { name: "Apple Repair", path: "/apple-repair-dubai" },
              { name: "MacBook Pro Repair", path: parentHref },
              { name: `MacBook Pro ${p.chip} Repair`, path: p.path },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow={p.eyebrow}
          title={p.h1}
          image={HERO_IMG}
          imageAlt={HERO_ALT}
        >
          <p className="text-[15px] text-text-muted leading-relaxed mt-md">
            {p.heroDescription}
          </p>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            {p.heroMeta.map((m, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span className="mr-md">·</span>}
                <Star size={16} className="fill-star text-star" aria-hidden /> {m}
              </span>
            ))}
          </p>
        </Hero>

        {/* ── USP STRIP ── */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search, label: "Free diagnosis" },
              { Icon: BadgeCheck, label: "No fix, no charge" },
              { Icon: Truck, label: "Free pickup Dubai-wide" },
              { Icon: ShieldCheck, label: "Genuine & OEM-grade parts" },
              { Icon: Clock, label: "Same-day service" },
              { Icon: Star, label: "Trusted since 2004" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ── STATS ── */}
        <section
          className="mt-xl"
          style={{
            background: "#2C3137",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.15)",
          }}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { stat: "20+", label: "Years in Dubai" },
                { stat: "216+", label: "Google reviews" },
                { stat: "30 min", label: "Appointment repair" },
                { stat: "12 mo", label: "Written warranty" },
              ].map(({ stat, label }, i) => (
                <div
                  key={label}
                  className="py-lg px-xl flex flex-col justify-center"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                    textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                  }}
                >
                  <p className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight text-white">{stat}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-on-primary-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODELS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <SectionHeading
            label="Supported models"
            title={`MacBook Pro ${p.chip} models we repair`}
            sub={`All ${p.chip} MacBook Pro variants from ${p.years}. Tap a model for its dedicated repair page.`}
          />
          <div className="rounded-2xl border border-border bg-bg-card p-lg">
            <div className="flex items-center gap-xs mb-md">
              <span
                className="inline-flex items-center px-[7px] py-[2px] rounded text-[10px] font-bold tracking-widest uppercase"
                style={{
                  background: isSilicon ? "rgba(10,122,64,0.12)" : "rgba(0,0,0,0.06)",
                  color: isSilicon ? "var(--color-accent)" : "var(--color-text-muted)",
                }}
              >
                {p.chip}
              </span>
              <span className="text-[11px] text-text-faint">{p.years}</span>
            </div>
            <div className="flex flex-wrap gap-[5px]">
              {p.models.map((m) => (
                m.href ? (
                  <Link
                    key={m.label}
                    to={m.href}
                    className="inline-flex items-center gap-[5px] px-[9px] py-[4px] rounded-md border border-border bg-bg text-[12px] text-accent font-medium hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    {m.label}
                    {m.aNum && <span className="text-[9px] text-text-faint font-normal opacity-70">{m.aNum}</span>}
                  </Link>
                ) : (
                  <span
                    key={m.label}
                    className="inline-flex items-center gap-[5px] px-[9px] py-[4px] rounded-md border border-border bg-bg-alt text-[12px] text-text-faint font-medium"
                  >
                    {m.label}
                    {m.aNum && <span className="text-[9px] font-normal opacity-70">{m.aNum}</span>}
                  </span>
                )
              ))}
            </div>
            <div className="mt-md pt-md border-t border-border">
              <Link to={parentHref} className="text-[13px] text-accent hover:underline">
                ← View all MacBook Pro models
              </Link>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="What we fix"
            title={`MacBook Pro ${p.chip} repair services`}
            sub="From a cracked screen to a dead logic board, our technicians handle every repair in our Dubai Media City workshop."
          />
          <div className="grid gap-x-xl gap-y-[56px] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <IconCard key={s.title} Icon={s.Icon} title={s.title} body={s.body} href={s.href} />
            ))}
          </div>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* ── PROCESS ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="How it works"
              title="Our repair process"
              sub="Simple, transparent, and fast. Here's what happens when you bring in your MacBook Pro."
            />
            <div className="grid gap-x-[48px] gap-y-[56px] md:grid-cols-4">
              {PROCESS.map((step, i) => (
                <div key={step.title} className="flex flex-col">
                  <p className="text-[72px] font-bold leading-none text-accent/15 mb-md select-none">0{i + 1}</p>
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent/10 mb-md">
                    <step.Icon size={20} className="text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[19px] font-semibold text-text mb-sm">{step.title}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIGNS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="Warning signs"
            title={`Signs your MacBook Pro ${p.chip} needs repair`}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SIGNS.map(({ Icon, label, body }) => (
              <li
                key={label}
                className="flex items-start gap-4 rounded-xl border border-border bg-bg-card p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon size={19} className="text-accent" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-text mb-0.5">{label}</p>
                  <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Why us"
              title="The independent Apple specialists in Dubai"
              sub="Not an Apple Authorised Service Centre — we're the faster, fairer-priced alternative with 20 years of experience."
            />
            <div className="grid gap-x-xl gap-y-[48px] sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => (
                <IconCard key={w.title} Icon={w.Icon} title={w.title} body={w.body} />
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[56px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">What customers say</p>
              <h2 className="text-center text-[36px] md:text-[52px] font-bold tracking-tight text-white leading-[1.1]">Real results from real people</h2>
              <p className="text-center mt-5 text-[17px] text-on-primary-muted max-w-[50ch] mx-auto leading-relaxed">216+ verified Google reviews. Here are three.</p>
            </div>
            <div className="grid gap-lg md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="flex flex-col gap-md p-xl rounded-2xl" style={{ background: "#242a30" }}>
                  <div className="flex gap-1" role="img" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} className="fill-star text-star" aria-hidden />)}
                  </div>
                  <blockquote className="text-[15px] text-on-primary-muted leading-relaxed flex-1">&ldquo;{t.body}&rdquo;</blockquote>
                  <figcaption className="font-semibold text-[14px] text-white">- {t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── VS APPLE + FAQ ── */}
        <VsAppleStore tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-bg-card p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                Frequently asked questions
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Everything you need to know before booking your MacBook Pro {p.chip} repair.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>✓ Free diagnosis</span>
                <span>✓ No fix, no charge</span>
                <span>✓ Warranty up to 12 months</span>
                <span>✓ Free pickup Dubai-wide</span>
              </div>
            </div>
            <div className="flex flex-col gap-[48px]">
              {faqGroups.map((g, gi) => (
                <div key={g.category}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">{g.category}</p>
                  <FAQAccordion items={g.items} injectSchema={gi === 0} tone="dark" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-6">Find us</p>
          <LocationBlock tone="dark" compact />
        </section>

        {/* ── RELATED SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Related services</p>
          <div className="flex flex-wrap justify-center gap-sm text-[15px]">
            {[
              { label: "MacBook Pro Repair Dubai", href: parentHref },
              { label: "MacBook Screen Repair Dubai", href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai" },
              { label: "MacBook Water Damage Repair Dubai", href: "/macbook-water-damage-repair-dubai" },
              { label: "Logic Board Repair Dubai", href: "/macbook-logic-board-repair-dubai" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Ready to fix your Mac?</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                Free diagnosis · No fix, no charge · Warranty up to 12 months
              </h2>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0">
              <CallButtons dark />
            </div>
          </div>
        </section>

      </div>
      <RelatedArticles path={p.path} />
    </PageShell>
  );
}
