"use client";
// Shared layout for Mac Studio generation hub pages (M1, M2, M3, M4).
// Pro desktop: no screen, no battery — logic board, GPU, thermals, SSD focus.
import {
  Star, MessageCircle, Phone,
  Monitor, HardDrive, Cpu, Thermometer,
  Power, Gauge, AlertTriangle, Wind, Wifi,
  Zap, ShieldCheck, Clock, Award, Wrench,
  Search, BadgeCheck, Truck, RefreshCw, Droplets,
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
import type { LucideIcon } from "lucide-react";

export type MacStudioGenModel = { label: string; href?: string; aNum?: string };
export type MacStudioGenFAQ = { q: string; a: string };

export type MacStudioGenerationProps = {
  path: string;
  chip: string;        // "M4", "M3", "M2", "M1"
  years: string;       // "2022 – 2023"
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  heroDescription: string;
  heroMeta: string[];
  models: MacStudioGenModel[];
  faqs: MacStudioGenFAQ[];
};

const HERO_IMG = "/images/real/lab/macbook-battery-internals-dubai.jpg";
const HERO_ALT = "Mac Studio logic board on the repair bench at MacBook Repair Dubai, Media City";
const PARENT_HREF = "/mac-studio-repair-dubai";

const SERVICES: { Icon: LucideIcon; title: string; body: string; href: string }[] = [
  { Icon: Monitor,     title: "No Display Fix",       href: "/mac-studio-no-display-dubai",      body: "Black screen on Thunderbolt or HDMI at startup? We diagnose display port faults, GPU logic, and cable issues on all Mac Studio models." },
  { Icon: Cpu,         title: "Logic Board Repair",   href: "/mac-studio-repair-dubai",          body: "Power rail faults, dead machine, or no video from any port? Component-level board repair restores function without a full replacement." },
  { Icon: Zap,         title: "GPU Repair",           href: "/mac-studio-repair-dubai",          body: "Display corruption, GPU crashes under load, or compute failures? We diagnose and repair GPU subsystem faults on M1 and M2 Max and Ultra chips." },
  { Icon: HardDrive,   title: "Data Recovery",        href: "/mac-data-recovery-dubai",          body: "Lost files after a board failure or failed SSD? We recover data from Mac Studio soldered storage using specialist equipment." },
  { Icon: Power,       title: "Won't Turn On",        href: "/mac-studio-not-turning-on-dubai",  body: "No chime, no fan, no LED? We diagnose power supply faults, SMC failures, and logic board issues to bring your Mac Studio back to life." },
  { Icon: Thermometer, title: "Overheating Fix",      href: "/mac-studio-overheating-fix-dubai", body: "Fan screaming under load, thermal throttling during video exports, or unexpected shutdowns? We clean fans and inspect for board-level heat faults." },
  { Icon: Wind,        title: "Fan Cleaning",         href: "/mac-studio-repair-dubai",          body: "Dubai dust accumulates in Mac Studio fans. A professional clean restores airflow and drops temperatures by 10–15 °C under sustained load." },
  { Icon: HardDrive,   title: "SSD Upgrade",          href: "/mac-ssd-upgrade-dubai",            body: "Running out of storage on your Mac Studio? We advise on the best upgrade path for your generation — M1/M2 options differ from M3/M4." },
  { Icon: RefreshCw,   title: "OS Reinstall",         href: "/mac-os-reinstall-dubai",           body: "Corrupted macOS, bootloop, or startup failures? We reinstall macOS cleanly and restore your data from Time Machine or a local backup." },
  { Icon: Search,      title: "Full Diagnostic",      href: "/mac-full-diagnostic-dubai",        body: "Not sure what is wrong? Our 30-minute diagnostic tests every subsystem — storage, GPU, thermals, display ports — and gives you a written report." },
  { Icon: Droplets,    title: "Water Damage Repair",  href: "/macbook-water-damage-repair-dubai", body: "Liquid near a Mac Studio vent can reach the board fast. We open, dry, and clean at component level to stop corrosion spreading." },
  { Icon: Gauge,       title: "Running Slow",         href: "/mac-performance-tune-dubai",       body: "Slow exports, laggy UI, or thermal throttling under professional workloads? We clean thermals, tune macOS, and resolve SSD bottlenecks." },
];

const PROCESS = [
  { Icon: Search,      title: "Free diagnosis",   body: "Drop in, ship, or book a free pickup. We test every subsystem and report back before any work starts — no charge for the diagnosis." },
  { Icon: BadgeCheck,  title: "Fixed quote",       body: "You receive a transparent AED quote before any work begins. No hidden fees, no surprise add-ons." },
  { Icon: Wrench,      title: "Expert repair",     body: "Your Mac Studio is repaired by a specialist with 21 years on Apple hardware, using OEM-grade parts and board-level tools." },
  { Icon: ShieldCheck, title: "Quality check",     body: "Every repair passes a full function test: display output on all Thunderbolt ports, GPU compute, thermals, and storage — all verified before handover." },
];

const SIGNS: { Icon: LucideIcon; label: string; body: string }[] = [
  { Icon: Monitor,      label: "No display output",   body: "Black screen on all Thunderbolt and HDMI ports at startup — typically a GPU fault or display port issue." },
  { Icon: Power,        label: "Won't turn on",        body: "No chime, no fan spin, no light. Could be a power supply fault, dead logic board, or SMC failure." },
  { Icon: Thermometer,  label: "Overheating",          body: "Fan running at full speed during exports, or Mac Studio shutting down under sustained Pro or Max workload." },
  { Icon: Zap,          label: "GPU / display issues", body: "Corruption, artefacts, or display flickering under GPU load — often a board-level GPU subsystem fault." },
  { Icon: Gauge,        label: "Running slowly",       body: "Exports taking far longer than expected, UI lag, or thermal throttling — usually dust buildup or a degraded SSD." },
  { Icon: AlertTriangle, label: "Frequent crashes",    body: "Kernel panics or random restarts during heavy workloads. Usually a memory, logic board, or GPU fault." },
  { Icon: Droplets,     label: "Liquid damage",        body: "Any liquid near the vents can reach the board. Power off immediately and bring it in for board-level cleaning." },
  { Icon: Wifi,         label: "WiFi / Bluetooth",     body: "Connections dropping after sleep or Bluetooth refusing to pair — antenna or AirPort module fault." },
];

const WHY: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: Clock,       title: "Same-day service",         body: "Most Mac Studio repairs — logic board, overheating, no-display — are diagnosed and resolved within a few hours." },
  { Icon: Award,       title: "21 years experience",      body: "Our technicians have repaired Apple hardware since 2004, across every Mac Studio generation including M1 Ultra and M2 Max." },
  { Icon: ShieldCheck, title: "Warranty up to 12 months", body: "All parts and labour carry a written warranty. Logic board and GPU repairs come with 12-month cover." },
  { Icon: Truck,       title: "Free pickup Dubai-wide",   body: "Cannot bring it in? We collect your Mac Studio for free across Dubai and return it repaired." },
  { Icon: BadgeCheck,  title: "No fix, no charge",        body: "If we cannot fix it, you pay nothing. Our no-fix guarantee removes all the risk from your repair." },
  { Icon: Search,      title: "Free diagnosis",           body: "Every Mac Studio gets a full diagnostic at no cost. We find the real fault before quoting." },
];

const TESTIMONIALS = [
  { name: "Ahmed Al Rashidi",  body: "Mac Studio M2 Max stopped outputting video after a macOS update. They traced it to a GPU subsystem fault and fixed it in one day. Exceptional work." },
  { name: "Natasha Ivanova",   body: "Fan on my Mac Studio was screaming during Premiere Pro renders. After cleaning and new thermal paste it is silent under load. Very professional service." },
  { name: "James Thornton",    body: "Thought my M1 Ultra was dead — no power at all. They found a power rail fault, fixed it component-level, and saved me thousands. Highly recommend." },
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

export default function MacStudioGenerationPage(p: MacStudioGenerationProps) {
  useSeo(
    {
      title: p.seoTitle,
      description: p.seoDescription,
      path: p.path,
      preloadImage: preloadFromHero(HERO_IMG),
    },
    [localBusiness(), organization()],
  );

  const isSilicon = p.chip !== "Intel";

  const faqGroups = [
    { category: "Pricing & booking", items: p.faqs.filter((_, i) => i < 2) },
    { category: "Parts & warranty",  items: p.faqs.filter((_, i) => i >= 2) },
  ].filter((g) => g.items.length > 0);

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* ── BREADCRUMB ── */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={[
              { name: "Home", path: "/" },
              { name: "Mac Repair Dubai", path: "/mac-repair-dubai" },
              { name: "Mac Studio Repair Dubai", path: PARENT_HREF },
              { name: `Mac Studio ${p.chip} Repair`, path: p.path },
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
              { Icon: Search,      label: "Free diagnosis" },
              { Icon: BadgeCheck,  label: "No fix, no charge" },
              { Icon: Truck,       label: "Free pickup Dubai-wide" },
              { Icon: ShieldCheck, label: "OEM-grade parts" },
              { Icon: Clock,       label: "Same-day service" },
              { Icon: Star,        label: "21 years experience" },
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
                { stat: "21+", label: "Years in Dubai" },
                { stat: "215+", label: "Google reviews" },
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
            title={`Mac Studio ${p.chip} models we repair`}
            sub={`All ${p.chip} Mac Studio variants from ${p.years}. Tap a model for its dedicated repair page.`}
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
              <Link to={PARENT_HREF} className="text-[13px] text-accent hover:underline">
                ← View all Mac Studio models
              </Link>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="What we fix"
            title={`Mac Studio ${p.chip} repair services`}
            sub="From a no-display fault to a dead logic board, our technicians handle every Mac Studio repair in our Dubai Media City workshop."
          />
          <div className="grid gap-x-xl gap-y-[56px] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
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
              sub="Simple, transparent, and fast. Here is what happens when you bring in your Mac Studio."
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
            title={`Signs your Mac Studio ${p.chip} needs repair`}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SIGNS.map(({ Icon, label, body }) => (
              <li key={label} className="flex items-start gap-4 rounded-xl border border-border bg-bg-card p-4">
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
              sub="Not an Apple Authorised Service Centre. We are the faster, fairer-priced alternative with 21 years of experience."
            />
            <div className="grid gap-x-xl gap-y-[48px] sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => <IconCard key={w.title} Icon={w.Icon} title={w.title} body={w.body} />)}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[56px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">What customers say</p>
              <h2 className="text-center text-[36px] md:text-[52px] font-bold tracking-tight text-white leading-[1.1]">Real results from real people</h2>
              <p className="text-center mt-5 text-[17px] text-on-primary-muted max-w-[50ch] mx-auto leading-relaxed">215+ verified Google reviews. Here are three.</p>
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
                Everything you need to know before booking your Mac Studio {p.chip} repair.
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
              { label: "Mac Studio Repair Dubai",     href: PARENT_HREF },
              { label: "Mac Repair Dubai",            href: "/mac-repair-dubai" },
              { label: "Mac Data Recovery Dubai",     href: "/mac-data-recovery-dubai" },
              { label: "Mac Not Turning On Dubai",    href: "/mac-not-turning-on-dubai" },
              { label: "Mac Full Diagnostic Dubai",   href: "/mac-full-diagnostic-dubai" },
              { label: "Mac Logic Board Repair Dubai", href: "/mac-logic-board-repair-dubai" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Ready to fix your Mac Studio?</p>
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
