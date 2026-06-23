"use client";
import {
  Star, MessageCircle, Phone,
  Monitor, ShieldCheck, Clock, Award,
  Search, BadgeCheck, Truck, Check, ArrowRight,
  Wrench, AlertTriangle, Cpu, BatteryCharging,
  HardDrive, Droplets, Gauge, MapPin,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { LeadForm } from "@/components/blocks/LeadForm";
import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const IMG = {
  hero: {
    src: "/images/real/lab/macbook-air-lid-dubai.jpg",
    alt: "MacBook Air on workbench at MacBook Repair Dubai — screen replacement in progress",
  },
  signs: {
    src: "/images/topics/apple-display-repair-dubai.jpg",
    alt: "MacBook Air screen replacement Dubai — common display faults",
    caption: "The most common reasons MacBook Air screens need to be replaced.",
  },
};

/* ── DATA ─────────────────────────────────────────────────────────── */

type PricingRow = { model: string; price: number; timeline: string; l6href?: string };

const PRICING: PricingRow[] = [
  { model: 'MacBook Air 11" (Intel, 2013–2015)',  price: 450, timeline: "Same day",      l6href: "/macbook-air-intel-screen-repair-dubai" },
  { model: 'MacBook Air 13" (Intel, 2013–2020)',  price: 500, timeline: "Same day",      l6href: "/macbook-air-intel-screen-repair-dubai" },
  { model: 'MacBook Air 13" M1 (2020–2023)',      price: 500, timeline: "Same day",      l6href: "/macbook-air-m1-screen-repair-dubai"    },
  { model: 'MacBook Air 13" M2 (2022–2024)',      price: 600, timeline: "Same day",      l6href: "/macbook-air-m2-screen-repair-dubai"    },
  { model: 'MacBook Air 15" M2 (2023–2024)',      price: 650, timeline: "Same day · 1d", l6href: "/macbook-air-m2-screen-repair-dubai"    },
  { model: 'MacBook Air 13" M3 (2024)',           price: 700, timeline: "Same day",      l6href: "/macbook-air-m3-screen-repair-dubai"    },
  { model: 'MacBook Air 15" M3 (2024)',           price: 750, timeline: "Same day · 1d", l6href: "/macbook-air-m3-screen-repair-dubai"    },
  { model: 'MacBook Air 13" M4 (2025)',           price: 720, timeline: "1–2 days",      l6href: "/macbook-air-m4-screen-repair-dubai"    },
  { model: 'MacBook Air 15" M4 (2025)',           price: 780, timeline: "1–2 days",      l6href: "/macbook-air-m4-screen-repair-dubai"    },
];

const MODELS_BY_YEAR = [
  { year: "2013–2015", chip: "Intel Core i5 / i7", sizes: '11" · 13"',  display: "IPS LCD", href: "/macbook-air-intel-repair-dubai" },
  { year: "2017–2018", chip: "Intel Core i5 / i7", sizes: '13"',         display: "IPS LCD", href: "/macbook-air-intel-repair-dubai" },
  { year: "2019–2020", chip: "Intel Core i3 / i5 / i7", sizes: '13"',   display: "IPS LCD", href: "/macbook-air-intel-repair-dubai" },
  { year: "2020–2023", chip: "Apple M1",            sizes: '13"',         display: "IPS Retina", href: "/macbook-air-m1-repair-dubai" },
  { year: "2022–2024", chip: "Apple M2",            sizes: '13" · 15"',  display: "Liquid Retina", href: "/macbook-air-m2-repair-dubai" },
  { year: "2024",      chip: "Apple M3",            sizes: '13" · 15"',  display: "Liquid Retina + True Tone", href: "/macbook-air-m3-repair-dubai" },
  { year: "2025",      chip: "Apple M4",            sizes: '13" · 15"',  display: "Liquid Retina + True Tone", href: "/macbook-air-m4-repair-dubai" },
];

const SIGNS: { Icon: LucideIcon; label: string; body: string }[] = [
  { Icon: Monitor,         label: "Cracked screen",         body: "Glass shattered after a drop — M1 and later are bonded assemblies needing a full panel swap from AED 500." },
  { Icon: Gauge,           label: "Flickering display",     body: "Screen pulses or strobes — usually the display flex cable on M1/M2 or a failing backlight circuit on Intel." },
  { Icon: AlertTriangle,   label: "Lines on screen",        body: "Horizontal or vertical lines — cable-related if they shift with lid angle, panel damage if fixed in position." },
  { Icon: Droplets,        label: "Tint or discolouration", body: "Pink, green or purple tint across the display — typically a loose eDP connector after a knock." },
  { Icon: BatteryCharging, label: "Dark screen",            body: "Laptop on, keyboard lights up, but screen stays black — backlight IC fault on Intel or panel failure on Apple Silicon." },
  { Icon: ShieldCheck,     label: "True Tone lost",         body: "Only relevant on M2/M3/M4 — True Tone gone after a third-party repair means an aftermarket panel without the calibration chip." },
  { Icon: AlertTriangle,   label: "Dead pixels",            body: "Pixel cluster after a drop points to impact damage inside the bonded panel — replacement from AED 450." },
  { Icon: Droplets,        label: "Liquid near the hinge",  body: "Corrosion reaches the display connector within 24 hours of a spill near the USB-C ports or hinge." },
];

const PROCESS: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: MessageCircle, title: "WhatsApp your model",       body: "Send the chip name or year and a photo of the screen. We identify the exact panel — IPS, IPS Retina, or Liquid Retina — and quote within 4–8 minutes. No diagnostic fee." },
  { Icon: Clock,         title: "Book a 30-minute slot",     body: "Pre-book an appointment, we stage your panel before you arrive. Walk in, screen replaced in 30 minutes, walk out with a warranty card. Available for Intel, M1 and M2 13\" in-stock panels." },
  { Icon: ShieldCheck,   title: "30-point QC + warranty",    body: "Dead-pixel scan, backlight uniformity, True Tone response (M2+), brightness and hinge torque — all checked before the MacBook leaves the bench. Written warranty issued on the spot." },
];

const PICKUP_STEPS = [
  { n: "01", title: "WhatsApp us", body: "Tell us the chip/model. We confirm the panel is in stock and give you an exact price." },
  { n: "02", title: "Free collection", body: "A courier picks up your MacBook Air from anywhere on Dubai mainland — Marina, Downtown, JBR, Business Bay, JLT, Al Barsha. Same-hour from Internet City." },
  { n: "03", title: "Screen replaced", body: "Panel swapped, 30-point display QC done, warranty card written. Same day on Intel, M1 and M2 in most cases." },
  { n: "04", title: "Free delivery back", body: "Your MacBook Air returned to your door, fully tested. No parking, no traffic, no waiting." },
];

const WHY: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Award,       title: "2,800+ Air screens replaced", body: "More MacBook Air screen replacements than any other job at the workshop. Intel backlight ICs to Liquid Retina Flex cables on M4 — we have seen every failure mode." },
  { Icon: ShieldCheck, title: "No fix, no charge",           body: "You approve the price before we start, inspect the screen before you pay. If we can't fix it cleanly, there is no charge." },
  { Icon: Wrench,      title: "Every display fault covered", body: "Screen, cable, backlight, hinge — all handled in one place. No need to go elsewhere if a cable rather than the panel turns out to be the fault." },
  { Icon: Cpu,         title: "Genuine Apple panels",        body: "Genuine Apple Liquid Retina panels stocked for M3 and M4. A-grade Samsung/LG for M1 and M2. Intel gets A-grade IPS. Every grade is stated upfront." },
  { Icon: HardDrive,   title: "Data stays private",          body: "Screen replacement never requires accessing your files. We follow strict confidentiality procedures — your data stays your business." },
  { Icon: Truck,       title: "Free pickup Dubai-wide",      body: "Free collection and return across all Dubai mainland areas. Sharjah and Abu Dhabi pickup available at AED 100 each way." },
];

const FAQ_ITEMS = [
  { q: "How much does MacBook Air screen replacement cost in Dubai?", a: "MacBook Air screen replacement in Dubai starts at AED 450 for the Intel 11\", AED 500 for the Intel 13\" and M1 13\", AED 600 for the M2 13\", AED 700 for the M3 13\", and AED 720–780 for the M4 13\"/15\". All prices include the panel, labour, and warranty — no diagnostic fee. WhatsApp the model for an exact quote." },
  { q: "How long does MacBook Air screen replacement take?", a: "Intel, M1 and M2 13\" models are same-day when the panel is in stock — around 3 to 4 hours including adhesive cure. Book a 30-minute appointment slot and we stage the panel before you arrive. M3 and M4 models take 1 to 2 days. WhatsApp the serial number to confirm availability before you travel." },
  { q: "Do you use original Apple screens for MacBook Air replacement?", a: "Genuine Apple Liquid Retina panels are stocked for the M3 and M4 Air — the only grade that keeps True Tone active. M1 and M2 models get A-grade panels from Samsung or LG (the same factories that supply Apple), which are full-resolution and full-brightness but disable True Tone on M2. Intel models get A-grade IPS. Every grade is listed on the WhatsApp quote." },
  { q: "Will True Tone still work after the screen is replaced?", a: "True Tone only exists on M2, M3 and M4 MacBook Air. With a genuine Apple panel it is calibrated to the board serial and works normally. With an A-grade aftermarket panel, macOS disables True Tone — everything else (brightness, P3 colour, resolution) runs at full spec. True Tone status is stated on every quote." },
  { q: "Can you replace just the glass on a MacBook Air?", a: "Only on Intel 11\" and certain Intel 13\" pre-2016 models where the glass is a separate piece. From the M1 Air onward — and on most Intel 13\" from 2018 — the glass is bonded to the panel as one assembly. There is no reliable glass-only option on bonded models: we replace the full panel assembly." },
  { q: "Do you offer pickup for MacBook Air screen replacement in Dubai?", a: "Yes — free pickup and delivery across all Dubai mainland areas: Marina, Downtown, JBR, JLT, Palm Jumeirah, Business Bay, Al Barsha, DIFC, Deira and more. Same-hour pickup is available from Internet City and Knowledge Village. Sharjah and Abu Dhabi pickup is available at AED 100 each way." },
  { q: "My MacBook Air has lines on the screen — is it the panel or cable?", a: "Lines that shift or disappear when you open and close the lid at different angles point to the display flex cable — cable replacement costs AED 300 to AED 400, much less than a panel. Fixed lines that stay in the same position regardless of lid angle point to the panel — replacement from AED 500. Free 15-minute bench diagnosis confirms the fault before any repair is authorised." },
  { q: "How much cheaper is MacBook Air screen replacement than Apple?", a: "Apple charges AED 900–1,200 for M1/M2 Air screen replacement out of warranty, and AED 1,100–1,900 for M3/M4, with a 5–14 business-day wait. We charge AED 500–780 for the same models, same-day to 2 days, with free pickup across Dubai. Apple does not service Intel models declared vintage — we replace them from AED 450." },
];

const RELATED = [
  { label: "MacBook Air Screen Repair Dubai",        href: "/macbook-air-screen-repair-dubai",          description: "Our full Air screen service hub — all models from AED 450." },
  { label: "MacBook Screen Repair Dubai",            href: "/macbook-screen-repair-dubai",              description: "All MacBook screen repairs — Air, Pro, Intel, from AED 450." },
  { label: "MacBook Air Repair Dubai",               href: "/macbook-air-repair-dubai",                 description: "All MacBook Air repairs: battery, keyboard, charging port, logic board." },
  { label: "MacBook Air Battery Replacement Dubai",  href: "/macbook-air-battery-replacement-dubai",    description: "Air battery service — M1 through M4, swelling, cycle count check." },
];

const aed = (n: number) => `AED ${n.toLocaleString()}`;

/* ── Sub-components ─────────────────────────────────────────────── */

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

function CallButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Shafiq, MacBook Air screen replacement quote please. Model: ")}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden /> WhatsApp Us
        </a>
      </Button>
      <Button asChild variant={dark ? "secondary" : "outline"} size="lg" className={dark ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : ""}>
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

/* ── MAIN COMPONENT ─────────────────────────────────────────────── */

export default function MacBookAirScreenReplacement() {
  const reviews = pickReviews(["Mehdi Karimi", "Sophie Bennett", "Carlos Rodriguez"]);

  useSeo({
    title: "MacBook Air Screen Replacement Dubai — From AED 450",
    description:
      "MacBook Air screen replacement Dubai from AED 450. M1–M4 Liquid Retina, Intel IPS, True Tone preserved. Same-day on most models, free pickup Dubai-wide. Call 055 741 3706.",
    path: "/macbook-air-screen-replacement-dubai",
    preloadImage: preloadFromHero(IMG.hero.src),
  });

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* ── BREADCRUMB ── */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={[
              { name: "Home", path: "/" },
              { name: "MacBook Repair", path: "/macbook-repair-dubai" },
              { name: "MacBook Air Repair", path: "/macbook-air-repair-dubai" },
              { name: "Screen Replacement", path: "/macbook-air-screen-replacement-dubai" },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="MacBook Air screen replacement specialist — Dubai"
          title="MacBook Air Screen Replacement Dubai"
          image={IMG.hero.src}
          imageAlt={IMG.hero.alt}
        >
          <div className="mt-md" itemScope itemType="https://schema.org/Question">
            <p className="text-[15px] font-semibold text-text mb-2" itemProp="name">
              Where can I get MacBook Air screen replacement in Dubai?
            </p>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-[15px] text-text-muted leading-relaxed" itemProp="text">
                MacBook Repair Dubai replaces MacBook Air screens from AED 450 at its Concord Tower workshop in Dubai Media City. All models from Intel (2013) to M4 (2025) — Liquid Retina, IPS Retina, IPS LCD. Same-day on most models, free citywide pickup, genuine Apple panels for M3 and M4, written warranty up to 3 months.
              </p>
            </div>
          </div>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> All models 2013–2025</span>
            <span>·</span><span>Liquid Retina specialist</span>
            <span>·</span><span>True Tone on genuine M3/M4 panels</span>
          </p>
        </Hero>

        {/* ── USP STRIP ── */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search,      label: "Free MacBook Air diagnosis" },
              { Icon: BadgeCheck,  label: "No fix, no charge" },
              { Icon: Truck,       label: "Free pickup Dubai-wide" },
              { Icon: ShieldCheck, label: "Genuine & A-grade panels" },
              { Icon: Clock,       label: "Same-day on most models" },
              { Icon: Star,        label: "Trusted since 2004" },
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
          style={{ background: "#2C3137", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.15)" }}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { stat: "2,800+", label: "Air screens replaced" },
                { stat: "AED 450", label: "Starting price" },
                { stat: "30 min", label: "Appointment replacement" },
                { stat: "3 mo",   label: "Written warranty" },
              ].map(({ stat, label }, i) => (
                <div key={label} className="py-lg px-xl flex flex-col justify-center"
                  style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : undefined }}>
                  <p className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight text-white">{stat}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-on-primary-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <SectionHeading
            label="Every Air panel, one place"
            title="MacBook Air screen replacement cost Dubai"
            sub="Panel + labour + warranty all-in from AED 450. No diagnostic fee, no adhesive surcharge. Prices by model below."
          />
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">MacBook Air model</th>
                  <th className="px-lg py-md font-semibold whitespace-nowrap">Screen replacement cost</th>
                  <th className="px-lg py-md font-semibold">Turnaround</th>
                  <th className="px-lg py-md font-semibold">Model page</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((r) => (
                  <tr key={r.model} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm font-medium text-text">{r.model}</td>
                    <td className="px-lg py-sm font-bold text-accent whitespace-nowrap">{aed(r.price)}</td>
                    <td className="px-lg py-sm text-text-muted">{r.timeline}</td>
                    <td className="px-lg py-sm">
                      {r.l6href && (
                        <Link to={r.l6href} className="text-[13px] text-accent hover:underline whitespace-nowrap">
                          Details →
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-md text-[13px] text-text-faint max-w-[72ch]">
            Glass-only replacement available on Intel 11″ and early Intel 13″ pre-2016. From M1 onward the glass is bonded to the panel — full assembly replacement required.
          </p>
        </section>

        {/* ── MODELS COVERED ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Full model coverage"
              title="MacBook Air models we replace screens for — 2013 to 2025"
              sub="Every MacBook Air released from 2013 to 2025 is covered. Intel, M1, M2, M3, and M4 — 11-inch and 13-inch and 15-inch."
            />
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg">
              <table className="w-full border-collapse text-left text-[14px] min-w-[560px]">
                <thead>
                  <tr className="border-b border-border text-accent">
                    <th className="px-lg py-md font-semibold">Year</th>
                    <th className="px-lg py-md font-semibold">Chip</th>
                    <th className="px-lg py-md font-semibold">Sizes</th>
                    <th className="px-lg py-md font-semibold">Display type</th>
                    <th className="px-lg py-md font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {MODELS_BY_YEAR.map((m) => (
                    <tr key={m.year} className="border-b border-border last:border-0">
                      <td className="px-lg py-sm font-semibold text-text">{m.year}</td>
                      <td className="px-lg py-sm text-text">{m.chip}</td>
                      <td className="px-lg py-sm text-text-muted">{m.sizes}</td>
                      <td className="px-lg py-sm text-text-muted">{m.display}</td>
                      <td className="px-lg py-sm">
                        <Link to={m.href} className="text-[13px] text-accent hover:underline whitespace-nowrap">View →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-md text-[13px] text-text-faint">
              Not sure which chip is in your Mac? Click the Apple logo → About This Mac and WhatsApp us the chip name.
            </p>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="How it works"
            title="How MacBook Air screen replacement works"
            sub="Three steps, transparent pricing, no surprises."
          />
          <div className="grid gap-x-[48px] gap-y-[56px] md:grid-cols-3">
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
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* ── FREE PICKUP ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="No need to leave home or office"
              title="Free pickup for MacBook Air screen replacement across Dubai"
              sub="We collect your MacBook Air from anywhere on Dubai mainland, replace the screen at the workshop, and return it to your door — same day in most cases."
            />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-4">
              {PICKUP_STEPS.map((s) => (
                <div key={s.n} className="rounded-2xl border border-border bg-bg-card p-lg flex flex-col gap-sm">
                  <p className="text-[48px] font-bold leading-none text-accent/20 select-none">{s.n}</p>
                  <h3 className="text-[17px] font-semibold text-text">{s.title}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-xl rounded-xl border border-border bg-bg p-lg flex flex-wrap gap-md items-center">
              <MapPin size={18} className="text-accent shrink-0" />
              <p className="text-[14px] text-text-muted flex-1">
                <strong className="text-text">Areas covered:</strong> Dubai Marina · Downtown Dubai · JBR · JLT · Palm Jumeirah · Business Bay · DIFC · Al Barsha · Deira · Karama · Jumeirah · Mirdif · Silicon Oasis · Internet City · Knowledge Village and all Dubai mainland areas.
              </p>
            </div>
            <div className="mt-md flex justify-center"><CallButtons /></div>
          </div>
        </section>

        {/* ── WARNING SIGNS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="When to replace"
            title="Signs your MacBook Air screen needs replacement"
          />
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-[42%] shrink-0">
              <figure className="overflow-hidden rounded-2xl border border-border bg-bg-card">
                <ResponsiveImage
                  src={IMG.signs.src}
                  alt={IMG.signs.alt}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  imgClassName="w-full h-auto"
                />
              </figure>
            </div>
            <ul className="flex-1 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Why us"
              title="Dubai's independent MacBook Air screen replacement specialist"
              sub="Not an Apple Authorised Service Centre — the faster, fairer alternative with 20+ years replacing MacBook displays and 2,800+ Air screens done."
            />
            <div className="grid gap-x-xl gap-y-[48px] sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => (
                <div key={w.title} className="flex flex-col gap-sm">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
                    <w.Icon size={22} className="text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-text">{w.title}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[56px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4 max-w-none w-full">What customers say</p>
              <h2 className="text-center text-[36px] md:text-[52px] font-bold tracking-tight text-white leading-[1.1]">Real results from real people</h2>
              <p className="text-center mt-5 text-[17px] text-on-primary-muted max-w-[50ch] mx-auto leading-relaxed">216+ verified Google reviews. Here are three.</p>
            </div>
            <div className="grid gap-lg md:grid-cols-3">
              {(reviews.length ? reviews.map(r => ({ name: r.name, body: r.text })) : [
                { name: "Mehdi K.",  body: "Brought my M2 MacBook Air in with a cracked screen. Same-day replacement, genuine Apple panel, True Tone still works. Much faster and cheaper than Apple." },
                { name: "Sophie B.", body: "Screen was flickering after a drop. Turned out to be the display cable — saved me hundreds. Shafiq confirmed the fault for free before touching anything." },
                { name: "Carlos R.", body: "M3 Air screen went black after liquid reached the hinge. Panel replaced same day, connector cleaned first so the new screen doesn't short. Highly recommend." },
              ]).map((t) => (
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

        {/* ── VS APPLE STORE ── */}
        <VsAppleStore tone="dark" />

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-bg-card p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                Frequently asked questions — MacBook Air screen replacement Dubai
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Everything you need to know before booking your MacBook Air screen replacement.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>✓ Free diagnosis</span>
                <span>✓ No fix, no charge</span>
                <span>✓ Warranty up to 3 months</span>
                <span>✓ Free pickup Dubai-wide</span>
              </div>
            </div>
            <div>
              <FAQAccordion items={FAQ_ITEMS} injectSchema tone="dark" />
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
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4 max-w-none w-full">Related services</p>
          <div className="flex flex-wrap justify-center gap-sm text-[15px]">
            {[
              { label: "MacBook Air Screen Repair Dubai",          href: "/macbook-air-screen-repair-dubai" },
              { label: "MacBook Air Repair Dubai",                 href: "/macbook-air-repair-dubai" },
              { label: "MacBook Screen Repair Dubai",              href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Pro Screen Repair Dubai",          href: "/macbook-pro-screen-repair-dubai" },
              { label: "MacBook Air Battery Replacement Dubai",    href: "/macbook-air-battery-replacement-dubai" },
              { label: "MacBook Water Damage Repair Dubai",        href: "/macbook-water-damage-repair-dubai" },
              { label: "Mac Repair Dubai",                         href: "/mac-repair-dubai" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>
            ))}
          </div>
        </section>

        {/* ── BLOG LINKS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">From our blog</p>
          <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-text mb-5">MacBook Air screen guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {([
              ["MacBook Air screen repair cost Dubai 2026",        "/blog/macbook-air-screen-repair-cost-dubai"],
              ["MacBook Air M3 screen flickering Dubai",           "/blog/macbook-air-m3-screen-flickering-dubai"],
              ["MacBook Air M2 screen lines Dubai",                "/blog/macbook-air-m2-screen-lines-dubai"],
              ["White or grey lines on MacBook screen",            "/white-or-grey-horizontal-lines-appearing-on-macbook-screen"],
              ["What causes colour distortion on MacBook screens?","/what-causes-color-distortion-on-macbook-screens"],
              ["MacBook Air vs MacBook Pro 2026",                  "/blog/macbook-air-vs-macbook-pro-2026"],
              ["MacBook battery replacement cost Dubai 2026",      "/blog/macbook-battery-replacement-cost-2026"],
              ["How long do MacBooks last?",                       "/do-macbooks-last-over-a-decade"],
            ] as [string, string][]).map(([label, href]) => (
              <Link key={href} to={href}
                className="flex items-start rounded-xl border border-border bg-bg-card p-4 hover:border-accent/50 transition-colors group">
                <span className="text-[14px] font-medium text-text leading-snug group-hover:text-accent">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Cracked MacBook Air screen?</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                Free diagnosis · No fix, no charge · Warranty up to 3 months
              </h2>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0">
              <CallButtons dark />
            </div>
          </div>
        </section>

      </div>

      {/* ── LEAD FORM ── */}
      <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free screen replacement quote</h2>
        <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps — your device, then how to reach you. Free diagnosis, written quote, warranty up to 3 months.</p>
        <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-air-screen-replacement-dubai" />
      </section>

      <RelatedArticles path="/macbook-air-screen-replacement-dubai" />
    </PageShell>
  );
}
