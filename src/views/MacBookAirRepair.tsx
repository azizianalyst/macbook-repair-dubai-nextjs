"use client";
import {
  Star, MessageCircle, Phone,
  Keyboard, Monitor, BatteryCharging, Droplets, PlugZap,
  MousePointer2, HardDrive, Cpu, Thermometer,
  Power, Gauge, Link2, Wifi,
  Wrench, ShieldCheck, Clock, Award,
  Search, BadgeCheck, Truck, Laptop,
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
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const IMG = {
  hero: {
    src: "/images/real/lab/macbook-air-lid-dubai.jpg",
    alt: "MacBook Air open on the workshop bench at MacBook Repair Dubai, Media City",
  },
  services: {
    src: "/images/topics/macbook-air-repair-hub-dubai.jpg",
    alt: "MacBook Air repair services Dubai: screen, battery, keyboard and logic board",
    caption: "The four MacBook Air repairs we do most: screen, battery, keyboard and logic board.",
  },
};

function TopicFigure({ img }: { img: { src: string; alt: string; caption: string } }) {
  return (
    <figure className="mt-xl mx-auto max-w-[860px] overflow-hidden rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03]">
      <ResponsiveImage
        src={img.src}
        alt={img.alt}
        width={1600}
        height={1200}
        sizes="(max-width: 414px) 360px, (max-width: 1068px) 800px, 860px"
        imgClassName="w-full h-auto"
      />
      <figcaption className="border-t border-border px-lg py-3 text-center text-[13px] text-text-muted">
        {img.caption}
      </figcaption>
    </figure>
  );
}

const SIBLINGS = [
  { label: "MacBook Pro", href: "/macbook-pro-repair-dubai" },
  { label: "iMac", href: "/imac-repair-dubai" },
  { label: "Mac Pro", href: "/mac-pro-repair-dubai" },
  { label: "Mac mini", href: "/mac-mini-repair-dubai" },
  { label: "Mac Studio", href: "/mac-studio-repair-dubai" },
];

type Model = { label: string; href?: string; aNum?: string };
type ModelGroup = { chip: string; years: string; chipHref: string; models: Model[] };
const MODEL_GROUPS: ModelGroup[] = [
  {
    chip: "M5", years: "2026", chipHref: "/macbook-air-m5-repair-dubai",
    models: [
      { label: `15" M5`, href: "/macbook-air-15-m5-2026-repair-dubai" },
      { label: `13" M5`, href: "/macbook-air-13-m5-2026-repair-dubai" },
    ],
  },
  {
    chip: "M4", years: "2025", chipHref: "/macbook-air-m4-repair-dubai",
    models: [
      { label: `15" M4`, href: "/macbook-air-15-m4-2025-repair-dubai" },
      { label: `13" M4`, href: "/macbook-air-13-m4-2025-repair-dubai" },
    ],
  },
  {
    chip: "M3", years: "2024", chipHref: "/macbook-air-m3-repair-dubai",
    models: [
      { label: `15" M3`, href: "/macbook-air-15-m3-2024-repair-dubai" },
      { label: `13" M3`, href: "/macbook-air-13-m3-2024-repair-dubai" },
    ],
  },
  {
    chip: "M2", years: "2022 – 2023", chipHref: "/macbook-air-m2-repair-dubai",
    models: [
      { label: `15" M2`, href: "/macbook-air-15-m2-2023-repair-dubai", aNum: "A2941" },
      { label: `13" M2`, href: "/macbook-air-13-m2-2022-repair-dubai", aNum: "A2681" },
    ],
  },
  {
    chip: "M1", years: "2020", chipHref: "/macbook-air-m1-repair-dubai",
    models: [
      { label: `13" M1`, href: "/macbook-air-13-m1-2020-repair-dubai", aNum: "A2337" },
    ],
  },
  {
    chip: "Intel", years: "2017 – 2020", chipHref: "/macbook-air-intel-repair-dubai",
    models: [
      { label: `13" Intel 2020`, href: "/macbook-air-13-intel-2020-repair-dubai", aNum: "A2179" },
      { label: `13" Intel 2019`, href: "/macbook-air-13-intel-2019-repair-dubai", aNum: "A1932" },
      { label: `13" Intel 2018`, href: "/macbook-air-13-intel-2018-repair-dubai", aNum: "A1932" },
    ],
  },
];

const SERVICES: { title: string; body: string; Icon: LucideIcon; href?: string }[] = [
  { Icon: Monitor,         title: "Screen Repair & Replacement", href: "/macbook-screen-repair-dubai",        body: "Cracked, flickering, or dead Liquid Retina display? We replace LCD panels same day for all Air models, Intel through M5." },
  { Icon: BatteryCharging, title: "Battery Replacement",         href: "/macbook-battery-replacement-dubai",  body: "Swollen battery, rapid drain, or heat issues? We swap genuine-grade cells and restore full capacity. AED 450–500 same day." },
  { Icon: Keyboard,        title: "Keyboard Repair",             href: "/macbook-keyboard-repair-dubai",      body: "Keys stuck or unresponsive? We repair Intel butterfly keyboards and M-series scissor keyboards, individual keys or full assembly." },
  { Icon: Droplets,        title: "Water Damage Repair",         href: "/macbook-water-damage-repair-dubai",  body: "Liquid spill? Power off immediately and bring it in. Our board-level technicians dry, clean, and restore water-damaged MacBook Airs." },
  { Icon: PlugZap,         title: "Not Charging Fix",            href: "/macbook-charging-port-repair-dubai", body: "USB-C or MagSafe 2 not charging? We diagnose the port, cable, or charging IC and get your MacBook Air powering up again." },
  { Icon: PlugZap,         title: "MacBook Air Charging Port Repair (MagSafe 3 & USB-C)", href: "/macbook-air-charging-port-repair-dubai", body: "MagSafe 3 or USB-C port worn, loose, or not charging? We repair and replace MacBook Air charging ports for Intel and M-series models." },
  { Icon: MousePointer2,   title: "Trackpad Repair",             href: "/macbook-trackpad-repair-dubai",      body: "Trackpad not clicking or erratic? We recalibrate, repair, or replace Force Touch trackpads on all MacBook Air models." },
  { Icon: Cpu,             title: "Logic Board Repair",          href: "/macbook-logic-board-repair-dubai",   body: "Power rail faults, no-video, or dead machine? Component-level repair restores function without a full board swap." },
  { Icon: HardDrive,       title: "Data Recovery",               href: "/mac-data-recovery-dubai",            body: "Lost files after a failed drive or liquid damage? We retrieve data from faulty SSDs and logic boards." },
  { Icon: Thermometer,     title: "Overheating Fix",             href: "/macbook-overheating-fix-dubai",      body: "MacBook Air running hot silently? Fanless design means heat builds in the chassis. We reclean thermal pads and inspect for board faults." },
  { Icon: Power,           title: "Won't Turn On",               href: "/mac-not-turning-on-dubai",           body: "Dead MacBook Air? We diagnose power rail failures, SMC issues, and logic board faults to bring it back to life." },
  { Icon: Gauge,           title: "Running Slow",                href: "/mac-performance-tune-dubai",         body: "Slow startup or sluggish apps? We tune macOS settings and identify background processes throttling your Air's performance." },
  { Icon: Wifi,            title: "WiFi & Bluetooth Fix",        href: "/macbook-repair-dubai",               body: "WiFi dropping after sleep or Bluetooth won't pair? We diagnose antenna faults, driver issues, and board-level wireless chip failures." },
  { Icon: Link2,           title: "Hinge Repair",                href: "/macbook-hinge-repair-dubai",         body: "Loose or stiff lid hinge? We repair or replace MacBook Air hinges so the screen opens and closes smoothly again." },
];

const USP_ITEMS = [
  { Icon: Search,     label: "Free diagnosis" },
  { Icon: ShieldCheck,label: "Warranty up to 12 months" },
  { Icon: Clock,      label: "Same-day most repairs" },
  { Icon: BadgeCheck, label: "OEM-grade parts" },
  { Icon: Truck,      label: "Free pickup Dubai" },
  { Icon: Laptop,     label: "All Air models" },
  { Icon: Award,      label: "21 years experience" },
  { Icon: Wrench,     label: "No fix, no charge" },
];

const PRICING_ROWS = [
  { service: "Screen replacement: 13\" M1/M2/M3/M4",   ours: "AED 600",   apple: "AED 1,099" },
  { service: "Screen replacement: 15\" M2/M3/M4",       ours: "AED 700",   apple: "AED 1,199" },
  { service: "Screen replacement: 13\"/15\" M5",         ours: "AED 650",   apple: "AED 1,099" },
  { service: "Screen replacement: Intel 13\"",            ours: "AED 500",   apple: "AED 899"   },
  { service: "Battery replacement: 13\" models",         ours: "AED 450",   apple: "AED 899"   },
  { service: "Battery replacement: 15\" models",         ours: "AED 500",   apple: "AED 999"   },
  { service: "Keyboard / top-case",                       ours: "AED 700",   apple: "AED 1,399" },
  { service: "Logic board (component-level)",             ours: "AED 1,000", apple: "AED 3,500+" },
  { service: "Water damage assessment + clean",           ours: "AED 350",   apple: "AED 700+"  },
];

const PROCESS_STEPS = [
  { title: "Free diagnosis",      body: "Drop off or request pickup. Our tech diagnoses the fault at no cost and tells you exactly what's wrong before any work starts." },
  { title: "Clear quote",         body: "You receive a written quote with part cost, labour, and estimated turnaround. No hidden fees. You approve before we touch anything." },
  { title: "Same-day repair",     body: "Most MacBook Air screen and battery jobs are done in 45–90 minutes. We use OEM-grade parts with the same capacity and quality as original Apple components." },
  { title: "Quality check",       body: "Every repair goes through a full function test before handover: display calibration, battery cycle check, keyboard scan, and trackpad response." },
];

const FAQS = [
  {
    q: "Which MacBook Air models do you repair?",
    a: "We repair every MacBook Air ever made, from the original 2008 model through the latest M5. That includes all Intel models (2017–2020), M1 (2020), M2 13\" and 15\" (2022–2023), M3 13\" and 15\" (2024), M4 13\" and 15\" (2025), and the M5 lineup (2026). Free diagnosis on all models.",
  },
  {
    q: "How much does MacBook Air screen repair cost in Dubai?",
    a: "MacBook Air screen replacement costs AED 500–700 at our workshop depending on the model, versus AED 899–1,199 at the Apple Store. M-series 13\" screens start from AED 600, 15\" from AED 700. Intel 13\" from AED 500. Same-day service for most models. Quote confirmed before any work starts.",
  },
  {
    q: "How much does MacBook Air battery replacement cost in Dubai?",
    a: "MacBook Air battery replacement costs AED 450 for 13\" models and AED 500 for 15\" models, versus AED 899–999 at the Apple Store. We use OEM-grade cells with the same Wh rating as the original. Turnaround is 45–60 minutes, same-day if you drop off before 11am.",
  },
  {
    q: "Is it worth repairing an older Intel MacBook Air?",
    a: "For screen or battery on a 2018–2020 Intel Air, usually yes. The machine still runs macOS Ventura well and a AED 400–500 repair is far cheaper than a new Air at AED 4,499+. For logic board faults on pre-2018 models, we'll tell you honestly if the repair cost exceeds the device's value.",
  },
  {
    q: "Do you offer free pickup for MacBook Air repair in Dubai?",
    a: "Yes: free door-to-door pickup anywhere in mainland Dubai. A courier collects your MacBook Air, we diagnose and repair it at our Media City workshop, and return it same day or next day depending on the job.",
  },
  {
    q: "How long does MacBook Air repair take?",
    a: "Screen and battery replacements: 45–90 minutes. Keyboard / top-case: 2–3 hours. Water damage assessment: same day. Logic board repair: 24–48 hours depending on component availability. We give an estimated completion time when we confirm the quote.",
  },
  {
    q: "Will repairing my MacBook Air void the Apple warranty?",
    a: "If you're still inside the 1-year Apple warranty, go to Apple first. They'll fix manufacturing defects free. If you're out of warranty, there's nothing to void. Our repairs carry their own written warranty of up to 12 months on screen and battery, 90 days on other hardware.",
  },
];

function CallButtons({ dark }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant={dark ? "secondary" : "outline"} size="lg">
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function MacBookAirRepair() {
  useSeo(
    {
      title: "MacBook Air Repair Dubai: Screen, Battery & Logic Board | From AED 450",
      description: "MacBook Air repair Dubai. All models M1–M5 and Intel. Screen from AED 500, battery from AED 450. Free diagnosis, same-day service, free pickup across Dubai. 21 years experience.",
      path: "/macbook-air-repair-dubai",
    },
    [localBusiness(), organization()],
  );
  preloadFromHero(IMG.hero.src);

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">

        {/* ── HERO ── */}
        <Hero
          image={IMG.hero.src}
          imageAlt={IMG.hero.alt}
          variant="device"
          tone="dark"
          eyebrow="MacBook Air specialist · All models M1–M5 & Intel"
          title="MacBook Air Repair Dubai"
          subtitle="Screen from AED 500 · Battery from AED 450 · Free diagnosis · Same-day service · Free pickup across Dubai"
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 stars · 40,000+ devices repaired</span>
            <span>·</span>
            <span>21 years experience</span>
            <span>·</span>
            <span>No fix, no charge</span>
          </p>
        </Hero>

        {/* ── BREADCRUMB ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[
            { name: "Home", path: "/" },
            { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
            { name: "MacBook Air Repair Dubai", path: "/macbook-air-repair-dubai" },
          ]} />
        </section>

        {/* ── SIBLING NAV ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-md">
          <div className="flex flex-wrap gap-2 text-[13px]">
            {SIBLINGS.map((s) => (
              <Link key={s.href} to={s.href} className="px-3 py-1.5 border border-border rounded-full text-text-muted hover:text-accent hover:border-accent transition-colors">{s.label} →</Link>
            ))}
          </div>
        </section>

        {/* ── MODELS BY CHIP ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">Every model covered</p>
          <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight text-text mb-6">MacBook Air models we repair</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODEL_GROUPS.map((g) => (
              <div key={g.chip} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-3">
                  <Link to={g.chipHref} className="text-[18px] font-bold text-accent hover:underline">
                    MacBook Air {g.chip}
                  </Link>
                  <span className="text-[12px] text-text-muted">{g.years}</span>
                </div>
                <ul className="space-y-1">
                  {g.models.map((m) => (
                    <li key={m.label}>
                      {m.href ? (
                        <Link to={m.href} className="text-[13px] text-text hover:text-accent transition-colors flex items-center justify-between">
                          <span>{m.label}</span>
                          {m.aNum && <span className="text-text-faint text-[11px]">{m.aNum}</span>}
                        </Link>
                      ) : (
                        <span className="text-[13px] text-text-muted">{m.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">What we fix</p>
          <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight text-text mb-6">MacBook Air repair services Dubai</h2>
          <TopicFigure img={IMG.services} />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-xl p-5 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <s.Icon size={18} className="text-accent shrink-0" aria-hidden />
                  {s.href ? (
                    <Link to={s.href} className="text-[15px] font-semibold text-text hover:text-accent">{s.title}</Link>
                  ) : (
                    <span className="text-[15px] font-semibold text-text">{s.title}</span>
                  )}
                </div>
                <p className="text-[13px] text-text-muted leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6"><CallButtons /></div>
        </section>

        {/* ── USP STRIP ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {USP_ITEMS.map((u) => (
              <div key={u.label} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-xl p-4 flex items-center gap-3">
                <u.Icon size={20} className="text-accent shrink-0" aria-hidden />
                <span className="text-[13px] font-medium text-text">{u.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">Transparent pricing</p>
          <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight text-text mb-2">MacBook Air repair cost Dubai: us vs Apple Store</h2>
          <p className="text-[14px] text-text-muted mb-6 max-w-[65ch]">All prices in AED. Quote confirmed before any work starts. No fix, no charge policy on all jobs.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-text">Repair</th>
                  <th className="text-left py-3 pr-4 font-semibold text-accent">Our price</th>
                  <th className="text-left py-3 font-semibold text-text-muted">Apple Store</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_ROWS.map((r) => (
                  <tr key={r.service} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-text">{r.service}</td>
                    <td className="py-3 pr-4 font-semibold text-accent">{r.ours}</td>
                    <td className="py-3 text-text-muted line-through">{r.apple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-text-faint mt-3">Prices as of June 2026. Screen prices vary by panel condition and model. Logic board priced after component-level diagnosis.</p>
        </section>

        {/* ── VS APPLE STORE ── */}
        <VsAppleStore tone="dark" />

        {/* ── PROCESS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">How it works</p>
          <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight text-text mb-6">MacBook Air repair process</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center text-[14px] mb-3">{i + 1}</div>
                <h3 className="text-[15px] font-semibold text-text mb-1">{step.title}</h3>
                <p className="text-[13px] text-text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">Common questions</p>
          <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight text-text mb-6">MacBook Air repair Dubai: FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* ── LOCATION ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-6">Find us</p>
          <LocationBlock tone="dark" compact />
        </section>

        {/* ── RELATED SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4 max-w-none w-full">Related services</p>
          <div className="flex flex-wrap justify-center gap-sm text-[15px]">
            {[
              { label: "MacBook Repair Dubai", href: "/macbook-repair-dubai" },
              { label: "MacBook Pro Repair Dubai", href: "/macbook-pro-repair-dubai" },
              { label: "MacBook Screen Repair Dubai", href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai" },
              { label: "MacBook Water Damage Repair Dubai", href: "/macbook-water-damage-repair-dubai" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>
            ))}
          </div>
        </section>

        {/* ── BLOG LINKS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">From our blog</p>
          <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-text mb-5">MacBook Air guides &amp; repair advice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {([
              ["MacBook Air battery draining fast? Causes & fixes", "/blog/macbook-air-battery-drain-dubai"],
              ["MacBook Air not charging fix Dubai: USB-C & MagSafe 2", "/blog/macbook-air-not-charging-dubai"],
              ["MacBook Air overheating fix Dubai: M1 to M5", "/blog/macbook-air-overheating-dubai"],
              ["MacBook Air screen repair cost Dubai: all models", "/blog/macbook-air-screen-repair-cost-dubai"],
              ["MacBook Air keyboard not working Dubai", "/blog/macbook-air-keyboard-not-working-dubai"],
              ["MacBook Air WiFi & Bluetooth fix Dubai", "/blog/macbook-air-wifi-bluetooth-fix-dubai"],
              ["MacBook Air won't turn on fix Dubai", "/blog/macbook-air-wont-turn-on-fix-dubai"],
              ["MacBook Air running slow fix Dubai", "/blog/macbook-air-running-slow-fix-dubai"],
            ] as [string, string][]).map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="flex items-start rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-4 hover:border-accent/50 transition-colors group"
              >
                <span className="text-[14px] font-medium text-text leading-snug group-hover:text-accent">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Ready to fix your MacBook Air?</p>
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
      <RelatedArticles path="/macbook-air-repair-dubai" />
    </PageShell>
  );
}
