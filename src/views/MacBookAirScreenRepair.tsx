"use client";
import {
  Star, MessageCircle, Phone,
  Monitor, ShieldCheck, Clock, Award,
  Search, BadgeCheck, Truck, Check, ArrowRight,
  Wrench, AlertTriangle, Cpu, BatteryCharging,
  HardDrive, Droplets, Gauge,
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
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const IMG = {
  hero: {
    src: "/images/real/lab/macbook-air-lid-dubai.jpg",
    alt: "MacBook Air open on the workbench at MacBook Repair Dubai, Media City — screen repair in progress",
  },
  signs: {
    src: "/images/topics/apple-display-repair-dubai.jpg",
    alt: "MacBook Air display repair Dubai — common screen faults infographic",
    caption: "The most common MacBook Air display faults we see at the workshop.",
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

type DisplaySpec = { chip: string; display: string; resolution: string; trueTone: boolean; p3: boolean; l3href: string };
const DISPLAY_SPECS: DisplaySpec[] = [
  { chip: "Intel (2013–2020)", display: "IPS LCD",       resolution: '1366×768 (11") · 2560×1600 (13")', trueTone: false, p3: false, l3href: "/macbook-air-intel-repair-dubai" },
  { chip: "M1 (2020–2023)",   display: "IPS Retina",    resolution: "2560×1600",                         trueTone: false, p3: false, l3href: "/macbook-air-m1-repair-dubai"   },
  { chip: "M2 (2022–2024)",   display: "Liquid Retina", resolution: '2560×1600 (13") · 2880×1800 (15")', trueTone: true,  p3: true,  l3href: "/macbook-air-m2-repair-dubai"  },
  { chip: "M3 (2024)",        display: "Liquid Retina", resolution: '2560×1600 (13") · 2880×1800 (15")', trueTone: true,  p3: true,  l3href: "/macbook-air-m3-repair-dubai"  },
  { chip: "M4 (2025)",        display: "Liquid Retina", resolution: '2560×1600 (13") · 2880×1800 (15")', trueTone: true,  p3: true,  l3href: "/macbook-air-m4-repair-dubai"  },
];

const PROCESS: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Search,      title: "Free diagnosis & quote",          body: "WhatsApp the chip or year and a photo of the damage. We identify the exact panel — IPS, IPS Retina, or Liquid Retina — and quote in 4–8 minutes. Free diagnosis at the bench too: drop in or we collect." },
  { Icon: Clock,       title: "30-minute appointment repair",    body: "Pre-book a slot and confirm the panel for your Air model. Screen done in 30 minutes guaranteed — or the repair is free. Available for Intel, M1, and M2 13\" with in-stock panels." },
  { Icon: ShieldCheck, title: "30-point QC check & warranty",   body: "After the repair we run a 30-point display checklist — dead pixels, backlight uniformity, True Tone response on M2+, brightness and hinge torque. A signed warranty card is issued on the spot." },
];

const SIGNS: { Icon: LucideIcon; label: string; body: string }[] = [
  { Icon: Monitor,       label: "Cracked screen",         body: "Glass shattered after a drop — M1 and later are bonded assemblies needing a full panel swap from AED 500." },
  { Icon: Gauge,         label: "Flickering display",     body: "Screen pulses or strobes — usually the display flex cable on M1/M2 or a failing backlight circuit on Intel." },
  { Icon: AlertTriangle, label: "Lines on screen",        body: "Horizontal or vertical lines — cable-related if they shift with lid angle, panel damage if they are fixed in position." },
  { Icon: Droplets,      label: "Tint or discolouration", body: "Pink, green or purple tint across the display — typically a loose or oxidised eDP connector after a knock." },
  { Icon: BatteryCharging, label: "Dark screen",          body: "Laptop on, keyboard lights up, but screen stays black — backlight IC fault on Intel or panel failure on Apple Silicon." },
  { Icon: ShieldCheck,   label: "True Tone lost",         body: "Only relevant on M2/M3/M4 — True Tone gone after a third-party repair usually means an aftermarket panel without the calibration chip." },
  { Icon: AlertTriangle, label: "Dead or stuck pixels",   body: "Pixel cluster after a drop points to impact damage inside the bonded panel — replacement from AED 450." },
  { Icon: Droplets,      label: "Liquid near the hinge",  body: "Coffee or water near the USB-C ports or hinge — corrosion reaches the display connector within 24 hours; act fast." },
];

const PROBLEMS = [
  { title: "Cracked screen on M2, M3 or M4 Air — full panel only",
    body: "From the M2 Air (2022) onward the glass is bonded to the Liquid Retina panel as one assembly. There is no glass-only option — the full display unit must be replaced, starting at AED 600 for the M2 13\". Only the Intel 11\"/13\" and the M1 allow a glass-only repair on early production models." },
  { title: "Backlight failure on Intel Air",
    body: "Dark screen but image visible under a torch = backlight fault, not a panel. On Intel 11\"/13\" models the cause is usually the backlight IC or LED flex — board work from AED 300 to 400 saves you the cost of a full panel. Free diagnosis confirms which before we quote." },
  { title: "Screen flickering or pulsing brightness",
    body: "On M1 and M2 Air this is most often the display flex cable or connector working loose — a cable fix from AED 300–400 on M1. On Intel models a failing LVDS connector or voltage sag on the display rail causes the same symptom. If flicker changes with hinge angle it is the cable." },
  { title: "Pink, green or purple tint across the display",
    body: "Loose or oxidised eDP connector — most common on the M1 13\" after a drop or knock. Reseating the connector clears the tint in ~30% of these at no charge; the rest need a display cable or panel swap. The exact fault is confirmed at no cost in 15 minutes on the bench." },
  { title: "Screen lines — horizontal or vertical",
    body: "A line that changes position or disappears when you flex the lid is the display cable — cable replacement from AED 300 to 400. A line fixed in position that appears on an external monitor too is a GPU fault. Lines fixed only on the built-in screen point to the panel — replacement from AED 500." },
  { title: "True Tone lost after a repair elsewhere",
    body: "True Tone only works on M2, M3 and M4 Air panels — M1 and Intel have no True Tone hardware. If you lost True Tone after a third-party repair on your M2/M3/M4, the workshop fitted an aftermarket panel that lacks the calibration chip. Genuine Apple panels restore True Tone." },
  { title: "Built-in display dead, external monitor works",
    body: "The external output is a separate circuit from the internal panel backlight. When only the built-in is dead, it is almost always the panel or the backlight IC — not the GPU. Around 75% of these are panel swaps from AED 450 to AED 780; the rest are a backlight board repair from AED 350." },
  { title: "Dead or stuck pixels",
    body: "A single stuck pixel on a new panel counts as a warranty claim. If you have a dead-pixel cluster after a drop, the panel has impact damage — full replacement from AED 450. We run an 8-colour dead-pixel scan before and after every repair so the count is documented on the warranty card." },
  { title: "Water damage to the display connector",
    body: "Liquid that reaches the LIO board or the display flex connector causes a colour tint, flickering or total screen death. We clean the connector and board at component level before replacing any panel — otherwise the new panel shorts to the same corroded connector within weeks." },
  { title: "Hinge stiffness cracking the display",
    body: "The MacBook Air 13\" 2018–2020 Intel hinge can seize, especially in dry Dubai air. A stuck hinge forces the lid edge against the chassis — visible as a crack at the corner of the glass. We replace the hinge and the panel together for a quoted all-in price." },
];

const TIMELINE = [
  { tone: "good" as const, head: "30 minutes (booked appointment)",
    body: "Pre-book a slot, confirm chip and model, panel is staged before you arrive. Walk in, wait 30 minutes, walk out. Available for Intel, M1, M2 13\" and M3 13\" in-stock panels." },
  { tone: "good" as const, head: "Same day (3 to 4 hours)",
    body: "Intel, M1 and M2 13\" Air when the panel is in stock — including adhesive cure. WhatsApp the model first to confirm the panel before you travel." },
  { tone: "mid" as const, head: "1 day",
    body: "M2 15\", M3 13\" and M3 15\" — panels ordered from the local Apple-authorised distributor, arriving the following morning." },
  { tone: "mid" as const, head: "1 to 2 days (M4)",
    body: "M4 13\" and M4 15\" while M4 panel stock normalises. We always ship from the official local channel — no grey-market parts, no China stock." },
];

const WHY: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Award,       title: "Skilled Technicians",     body: "Every technician has years of MacBook experience. We train monthly on each new model release, from Intel backlight ICs to Liquid Retina Flex cables on M4." },
  { Icon: ShieldCheck, title: "Customer Satisfaction",   body: "You approve the price before we start and inspect the repair before you pay. No fix, no charge — that's our promise on every screen job." },
  { Icon: Wrench,      title: "Everything In One Place", body: "Screen, cable, backlight, hinge — we handle every display fault in one workshop, with panels on the shelf for same-day repairs." },
  { Icon: Cpu,         title: "Quality Parts",           body: "Genuine Apple panels for M3 and M4. A-grade Samsung and LG for M1 and M2. Intel gets A-grade IPS. Every grade is stated on the WhatsApp quote." },
  { Icon: HardDrive,   title: "Data Privacy",            body: "Your MacBook is your business. We follow strict confidentiality procedures and never access personal data during screen repairs." },
];

const TESTIMONIALS = [
  { name: "Mehdi K.",  body: "Brought my M2 MacBook Air in with a cracked screen. Same-day repair, genuine Apple panel, and True Tone still works. Really impressive — much faster and cheaper than Apple." },
  { name: "Sophie B.", body: "Screen was flickering after a small drop. Turned out to be the display cable, not the panel — saved me hundreds. Shafiq was upfront about the cost from the start." },
  { name: "Carlos R.", body: "M3 Air screen went completely black after liquid got near the hinge. Fixed the same day — they cleaned the connector and replaced the panel. Fantastic work, highly recommend." },
];

const FAQ_GROUPS = [
  {
    category: "Pricing & booking",
    items: [
      { q: "How much does MacBook Air screen repair cost in Dubai?", a: "From AED 450 for the Intel 11\" to AED 780 for the M4 15\". The M1 13\" is AED 500, M2 13\" AED 600, M3 13\" AED 700, and M4 13\" AED 720. All prices include the panel, labour, and warranty — no diagnostic fee. WhatsApp the model name or chip for the exact figure." },
      { q: "How long does MacBook Air screen repair take in Dubai?", a: "Same day on Intel, M1, and M2 13\" when the panel is in stock (3–4 hours including adhesive cure). M2 15\" and M3 13\"/15\" are usually same day or next day. M4 models currently take 1–2 days. WhatsApp the serial to confirm before you travel." },
      { q: "Do you offer free pickup for MacBook Air screen repair in Dubai?", a: "Yes — free pickup and delivery across Dubai mainland, including Marina, Downtown, JBR, JLT, Palm Jumeirah, Business Bay and Al Barsha. Same-hour pickup is available from Internet City and Knowledge Village. Sharjah and Abu Dhabi pickup is available at AED 100 each way." },
      { q: "How much is MacBook Air screen repair compared to the Apple Store?", a: "Apple charges from around AED 900–1,200 for an M1/M2 Air screen out of warranty (AED 1,100–1,900 for M3/M4), with a 5–14 business day wait and no pickup option. We charge AED 500–780 for the same models, finish same day to 2 days, and offer free pickup across Dubai. Apple does not service Intel models it has declared vintage — we repair them from AED 450." },
    ],
  },
  {
    category: "Parts & warranty",
    items: [
      { q: "Do you use genuine Apple screens for MacBook Air?", a: "Genuine Apple panels are stocked for the M3 and M4 Air — the only way to keep True Tone on those models. For M1 and M2 Air we stock A-grade panels from Samsung and LG (the same factories that build the Apple parts) at a lower price. Intel models get A-grade IPS panels. All grades are listed on the WhatsApp quote." },
      { q: "What warranty do you offer on MacBook Air screen repair?", a: "Genuine Apple panels carry a 3-month written warranty on parts and labour. A-grade aftermarket panels carry 15 days. All warranties are dated, signed, and documented — if the same fault returns within the warranty period, we re-repair at no cost." },
      { q: "Does M4 MacBook Air screen repair cost more than M3?", a: "Slightly — M4 13\" is AED 720 vs AED 700 for the M3 13\", and M4 15\" is AED 780 vs AED 750 for the M3 15\". The panel specs are similar but M4 parts are newer and cost more at the distributor. The gap narrows over 12–18 months as M4 panels enter wider supply." },
    ],
  },
  {
    category: "Screen types",
    items: [
      { q: "What is the difference between M1 and M2 MacBook Air screens?", a: "The M1 Air (2020–2023) uses an IPS Retina panel with no True Tone and no P3 wide colour. The M2 Air (2022+) stepped up to a Liquid Retina panel with True Tone and P3 wide colour, and is larger at 13.6 inches vs 13.3 inches. The M2 15\" adds a 15.3\" Liquid Retina at 2880×1800. The repair parts are completely different, which is why M2 screen repair (AED 600) costs more than M1 (AED 500)." },
      { q: "Can you replace just the glass on a MacBook Air?", a: "Only on certain Intel models (11\" and early 13\" pre-2016) where the glass is a separate piece. From the M1 Air onward — and on most Intel 13\" models from 2018 — the glass is bonded to the panel as one assembly. There is no reliable glass-only option on bonded models: we replace the full panel and charge accordingly." },
      { q: "Will True Tone still work after the screen is replaced on my MacBook Air?", a: "True Tone only exists on the M2, M3 and M4 MacBook Air — the M1 and Intel models never had it. On M2/M3/M4 with a genuine Apple panel, True Tone is calibrated against the board serial and works normally. With an A-grade aftermarket panel True Tone is disabled by macOS — everything else (brightness, P3 colour, resolution) is full-spec. We label the grade and True Tone status on every WhatsApp quote." },
    ],
  },
  {
    category: "Diagnosing the problem",
    items: [
      { q: "My MacBook Air screen is black but the external monitor works — is it the screen?", a: "Yes — when the external output works, the GPU is fine. The fault is inside the display circuit: the panel, the backlight IC, or the display cable. Free diagnosis on the bench isolates which in 15 minutes. Around 75% are full panel replacements from AED 450 to AED 780; the rest are a backlight board repair from AED 350." },
      { q: "My MacBook Air has lines on the screen — is it the panel or the cable?", a: "It depends on whether the lines move. If lines shift or disappear when you open and close the lid at different angles, it is the display flex cable — cable replacement from AED 300 to 400, much cheaper than a panel. If the lines are fixed and also appear on an external display, it is a GPU fault. Fixed lines only on the built-in screen point to the panel — replacement from AED 500. Free 15-minute bench diagnosis confirms before any repair is authorised." },
      { q: "Can you fix a MacBook Air with no image but the laptop still chimes?", a: "Yes — chime with no image confirms the logic board and GPU are working, so the fault is inside the display circuit. Free diagnosis on the bench isolates the panel, the backlight IC, or the display flex cable in about 15 minutes. Around 75% of these are full panel replacements from AED 450 to AED 780; the rest are a backlight or cable repair from AED 300." },
    ],
  },
];

const RELATED = [
  { label: "MacBook Air screen replacement Dubai",   href: "/macbook-air-screen-replacement-dubai",  description: "Dedicated replacement page — 'replacement' intent, all models 2013–2025." },
  { label: "MacBook screen repair (all models)",     href: "/macbook-screen-repair-dubai",          description: "The full MacBook screen service — Air, Pro, Intel, from AED 450." },
  { label: "MacBook Air repair Dubai",               href: "/macbook-air-repair-dubai",              description: "All MacBook Air repairs: battery, keyboard, charging port, logic board." },
  { label: "MacBook Air battery replacement Dubai",  href: "/macbook-air-battery-replacement-dubai", description: "Air battery service — M1 through M4, swelling, cycle count check." },
];

const aed = (n: number) => `AED ${n.toLocaleString()}`;

/* ── Section heading, always centered ── */
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

/* ── Icon card ── */
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
        <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Shafiq, MacBook Air screen repair quote please. Model: ")}`} target="_blank" rel="noopener noreferrer">
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

export default function MacBookAirScreenRepair() {
  const reviews = pickReviews(["Mehdi Karimi", "Sophie Bennett", "Carlos Rodriguez"]);

  useSeo(
    {
      title: "MacBook Air Screen Repair Dubai — From AED 450",
      description:
        "MacBook Air screen repair Dubai from AED 450. M1–M4 Liquid Retina, Intel IPS, True Tone, same-day. Genuine Apple panels, 3-month warranty. Call 055 741 3706.",
      path: "/macbook-air-screen-repair-dubai",
      preloadImage: preloadFromHero(IMG.hero.src),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Air Screen Repair Dubai",
        price: 450,
        timeline: "Same day to 2 days",
        warranty: "P3M",
        url: "/macbook-air-screen-repair-dubai",
        description:
          'MacBook Air screen and panel replacement in Dubai. Liquid Retina (M2–M4), IPS Retina (M1), IPS LCD (Intel). True Tone on M2+. 11", 13", 15". Intel and Apple Silicon.',
      }),
    ],
  );

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
              { name: "Screen Repair", path: "/macbook-air-screen-repair-dubai" },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="MacBook Air screen specialist"
          title="MacBook Air Screen Repair Dubai"
          image={IMG.hero.src}
          imageAlt={IMG.hero.alt}
        >
          <div
            className="mt-md"
            itemScope
            itemType="https://schema.org/Question"
          >
            <p className="text-[15px] font-semibold text-text mb-2" itemProp="name">
              Where can I get my MacBook Air screen repaired in Dubai?
            </p>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-[15px] text-text-muted leading-relaxed" itemProp="text">
                MacBook Repair Dubai replaces MacBook Air screens from AED 450 at its Concord Tower workshop in Dubai Media City. Intel IPS, M1 IPS Retina, and M2–M4 Liquid Retina panels in stock — same-day on most models, free diagnosis, free citywide pickup, genuine Apple panels for M3 and M4, written warranty up to 3 months.
              </p>
            </div>
          </div>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> M1–M4 &amp; all Intel models</span>
            <span>·</span><span>Liquid Retina specialist</span>
            <span>·</span><span>True Tone preserved on genuine panels</span>
          </p>
        </Hero>

        {/* ── USP STRIP ── */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search,     label: "Free MacBook Air diagnosis" },
              { Icon: BadgeCheck, label: "No fix, no charge" },
              { Icon: Truck,      label: "Free pickup Dubai-wide" },
              { Icon: ShieldCheck, label: "Genuine & A-grade panels" },
              { Icon: Clock,      label: "Same-day on most models" },
              { Icon: Star,       label: "Trusted since 2004" },
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
                { stat: "2,800+", label: "Air screens fitted" },
                { stat: "AED 450", label: "Starting price" },
                { stat: "30 min", label: "Appointment repair" },
                { stat: "3 mo", label: "Written warranty" },
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

        {/* ── PRICING ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <SectionHeading
            label="Every Air panel, one place"
            title="MacBook Air screen repair prices Dubai"
            sub="Intel through M4, panel + labour + warranty all-in. No diagnostic fee, no adhesive surcharge. Tap the chip column for a model-specific page."
          />
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">MacBook Air model</th>
                  <th className="px-lg py-md font-semibold whitespace-nowrap">Screen replacement</th>
                  <th className="px-lg py-md font-semibold">Turnaround</th>
                  <th className="px-lg py-md font-semibold">Chip page</th>
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
                          Chip detail →
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-md text-[13px] text-text-faint max-w-[72ch]">
            Glass-only repair available on Intel 11″ and early Intel 13″ pre-2016. From the M1 onward the glass is bonded — full panel replacement required.
          </p>
        </section>

        {/* ── DISPLAY SPECS ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Know your panel before you book"
              title="Which screen does your MacBook Air have?"
              sub="Display technology changed with every chip generation — this matters for pricing, True Tone support, and the type of repair needed."
            />
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg">
              <table className="w-full border-collapse text-left text-[14px] min-w-[560px]">
                <thead>
                  <tr className="border-b border-border text-accent">
                    <th className="px-lg py-md font-semibold">Chip</th>
                    <th className="px-lg py-md font-semibold">Display type</th>
                    <th className="px-lg py-md font-semibold">Resolution</th>
                    <th className="px-lg py-md font-semibold">True Tone</th>
                    <th className="px-lg py-md font-semibold">P3 colour</th>
                  </tr>
                </thead>
                <tbody>
                  {DISPLAY_SPECS.map((s) => (
                    <tr key={s.chip} className="border-b border-border last:border-0">
                      <td className="px-lg py-sm font-medium text-text">
                        <Link to={s.l3href} className="text-accent hover:underline">{s.chip}</Link>
                      </td>
                      <td className="px-lg py-sm text-text">{s.display}</td>
                      <td className="px-lg py-sm text-text-muted text-[13px]">{s.resolution}</td>
                      <td className="px-lg py-sm">
                        {s.trueTone ? <span className="text-accent font-semibold">Yes</span> : <span className="text-text-faint">No</span>}
                      </td>
                      <td className="px-lg py-sm">
                        {s.p3 ? <span className="text-accent font-semibold">Yes</span> : <span className="text-text-faint">No</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="How it works"
            title="Our repair process"
            sub="Simple, transparent, and fast. Here's what happens when you book your MacBook Air screen repair."
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

        {/* ── WARNING SIGNS ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Warning signs"
              title="Signs your MacBook Air screen needs repair"
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
            </div>
          </div>
        </section>

        {/* ── COMMON FAULTS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="Match the symptom"
            title="Common MacBook Air screen faults"
            sub="The highest-volume Air display repairs at the workshop. Match your symptom to the typical fix and cost."
          />
          <div className="grid gap-x-xl gap-y-[56px] sm:grid-cols-2 lg:grid-cols-2">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="flex flex-col gap-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
                  <AlertTriangle size={22} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[17px] font-semibold text-text">{p.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Turnaround"
              title="How long does MacBook Air screen repair take?"
            />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-4">
              {TIMELINE.map((t) => (
                <div
                  key={t.head}
                  className={`rounded-2xl border p-lg flex flex-col gap-sm ${t.tone === "good" ? "border-accent/30 bg-accent/[0.06]" : "border-border bg-bg-card"}`}
                >
                  <h3 className="text-[18px] font-semibold text-text">{t.head}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTS GRADES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="What goes in your MacBook Air"
            title="Genuine, A-grade, or genuine used"
            sub="An Air panel comes in three grades and the price moves with the grade. We stock genuine for M3 and M4 and A-grade for everything else."
          />
          <div className="grid gap-x-xl gap-y-[48px] sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Original Apple (OEM)",  sub: "Add AED 150–300 over A-grade",       body: "Genuine Apple Liquid Retina panels stocked for the M3 and M4 Air — sourced from the local Apple-authorised distributor with traceable batch numbers. True Tone, full P3 brightness retained. Only option that keeps True Tone active on M2, M3 and M4." },
              { title: "A-grade (Samsung / LG)", sub: "Standard pricing — AED 450 to AED 780", body: "Same Samsung and LG factories that build the Apple panel — without the Apple calibration chip. Full resolution, full brightness, and P3 colour where the model supports it. True Tone is disabled by macOS on M2/M3/M4 aftermarket panels but everything else is full-spec." },
              { title: "Used pull-out (genuine)", sub: "Cheapest genuine route — ask on WhatsApp", body: "Real Apple panels recovered from board-damaged trade-ins — genuine glass and calibration chip. Stock depends on what crosses the bench that week. Keeps True Tone when fitted in the matching model." },
            ].map(({ title, sub, body }) => (
              <div key={title} className="flex flex-col gap-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
                  <Check size={22} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[17px] font-semibold text-text">{title}</h3>
                <p className="text-[13px] text-accent font-medium">{sub}</p>
                <p className="text-[15px] text-text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Why us"
              title="The independent Apple screen specialists in Dubai"
              sub="Not an Apple Authorised Service Centre — the faster, fairer-priced alternative with 20 years of experience replacing MacBook displays."
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
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4 max-w-none w-full">What customers say</p>
              <h2 className="text-center text-[36px] md:text-[52px] font-bold tracking-tight text-white leading-[1.1]">Real results from real people</h2>
              <p className="text-center mt-5 text-[17px] text-on-primary-muted max-w-[50ch] mx-auto leading-relaxed">216+ verified Google reviews. Here are three.</p>
            </div>
            <div className="grid gap-lg md:grid-cols-3">
              {(reviews.length ? reviews.map(r => ({ name: r.name, body: r.text })) : TESTIMONIALS).map((t) => (
                <figure key={t.name} className="flex flex-col gap-md p-xl rounded-2xl" style={{ background: "#242a30" }}>
                  <div className="flex gap-1" role="img" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} className="fill-star text-star" aria-hidden />)}
                  </div>
                  <blockquote className="text-[15px] text-on-primary-muted leading-relaxed flex-1">&ldquo;{t.body}&rdquo;</blockquote>
                  <figcaption className="font-semibold text-[14px] text-white">- {t.name}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-xl flex flex-wrap justify-center gap-xl text-[15px] text-on-primary-muted">
              <div>
                <p className="font-semibold text-white">Mon - Sat</p>
                <p>9:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sunday</p>
                <p>Onsite service available</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VS APPLE STORE ── */}
        <VsAppleStore tone="dark" />

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* sticky sidebar */}
            <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-bg-card p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                Frequently asked questions
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Everything you need to know before booking your MacBook Air screen repair.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>✓ Free diagnosis</span>
                <span>✓ No fix, no charge</span>
                <span>✓ Warranty up to 3 months</span>
                <span>✓ Free pickup Dubai-wide</span>
              </div>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2">
                {FAQ_GROUPS.map((g) => (
                  <a key={g.category} href={`#faq-${g.category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-[13px] text-accent hover:underline capitalize">
                    {g.category}
                  </a>
                ))}
              </div>
            </div>
            {/* grouped accordions */}
            <div className="flex flex-col gap-[48px]">
              {FAQ_GROUPS.map((g, gi) => (
                <div key={g.category} id={`faq-${g.category.replace(/\s+/g, "-").toLowerCase()}`}>
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
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4 max-w-none w-full">Related services</p>
          <div className="flex flex-wrap justify-center gap-sm text-[15px]">
            {[
              { label: "MacBook Air Screen Replacement Dubai", href: "/macbook-air-screen-replacement-dubai" },
              { label: "MacBook Air Repair Dubai",            href: "/macbook-air-repair-dubai" },
              { label: "MacBook Screen Repair Dubai",         href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Pro Screen Repair Dubai",     href: "/macbook-pro-screen-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai",   href: "/macbook-battery-replacement-dubai" },
              { label: "MacBook Water Damage Repair Dubai",   href: "/macbook-water-damage-repair-dubai" },
              { label: "Mac Repair Dubai",                    href: "/mac-repair-dubai" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>
            ))}
          </div>
        </section>

        {/* ── BLOG LINKS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">From our blog</p>
          <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-text mb-5">MacBook Air screen guides &amp; repair advice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {([
              ["MacBook Air screen repair cost Dubai 2026", "/blog/macbook-air-screen-repair-cost-dubai"],
              ["MacBook Air M3 screen flickering Dubai", "/blog/macbook-air-m3-screen-flickering-dubai"],
              ["MacBook Air M2 screen lines Dubai", "/blog/macbook-air-m2-screen-lines-dubai"],
              ["White or grey horizontal lines on MacBook screen", "/white-or-grey-horizontal-lines-appearing-on-macbook-screen"],
              ["What causes colour distortion on MacBook screens?", "/what-causes-color-distortion-on-macbook-screens"],
              ["MacBook Air vs MacBook Pro M5: 2026 buyer's guide", "/blog/macbook-air-vs-macbook-pro-2026"],
              ["MacBook battery replacement cost Dubai 2026", "/blog/macbook-battery-replacement-cost-2026"],
              ["How long do MacBooks last?", "/do-macbooks-last-over-a-decade"],
            ] as [string, string][]).map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="flex items-start rounded-xl border border-border bg-bg-card p-4 hover:border-accent/50 transition-colors group"
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
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Cracked Air screen?</p>
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
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free repair quote</h2>
        <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps — your device, then how to reach you. Free diagnosis, written quote, warranty up to 3 months.</p>
        <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-air-screen-repair-dubai" />
      </section>

      <RelatedArticles path="/macbook-air-screen-repair-dubai" />
    </PageShell>
  );
}
