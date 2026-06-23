"use client";
// MacBook Pro Screen Repair — Pro-only spoke under /macbook-screen-repair-dubai.
// Goes deep on Pro display generations the generic page only touches: Liquid Retina XDR
// mini-LED (14"/16" 2021+), ProMotion 120Hz, the 2026 M5 OLED, Touch Bar Retina (2016-2020),
// classic Retina (2012-2015) and Flexgate. Same dark design system + component API as
// MacBookScreenRepair.tsx so it reads as a sibling and rankings/UX stay consistent.
import { type ReactNode } from "react";
import {
  Monitor, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star,
  Check, Clock, MapPin, ExternalLink, ParkingCircle, ChevronDown, ArrowRight,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Reveal } from "@/components/blocks/Reveal";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { faqPage, localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";
import GlassWarrantyNotice from "@/components/blocks/GlassWarrantyNotice";

type PricingRow = { model: string; price: number; timeline: string };

// Pro-only pricing — mirrors the Pro rows in the generic screen page (AED 600/1000/1200/910)
// so the two pages never quote different numbers for the same panel.
const PRICING: PricingRow[] = [
  { model: 'MacBook Pro 13" Retina (2012-2015)',          price: 600,  timeline: "Same day"        },
  { model: 'MacBook Pro 13" Touch Bar (2016-2020, Intel)', price: 600,  timeline: "Same day"        },
  { model: 'MacBook Pro 15" Retina (2012-2015)',          price: 910,  timeline: "1 day"           },
  { model: 'MacBook Pro 15" Touch Bar (2016-2019, Intel)', price: 1000, timeline: "1 day"           },
  { model: 'MacBook Pro 14" Liquid Retina XDR (M1-M4)',   price: 1000, timeline: "Same day · 1 day" },
  { model: 'MacBook Pro 16" Liquid Retina XDR (M1-M4)',   price: 1200, timeline: "1-2 days"        },
  { model: 'MacBook Pro 14"/16" M5 (OLED, 2026)',         price: 1300, timeline: "1-3 days"        },
];

const COMMON_PROBLEMS = [
  { title: "Flexgate — stage-light effect or no backlight",
    body: 'MacBook Pro 13" and 15" 2016-2017 (A1706, A1707, A1708). The display flex cable wears through after ~10,000 lid cycles: uneven "stage-light" backlight at the bottom first, then full backlight death. Cable swap AED 600 on 2016-2017, full panel from AED 1,000 on 2018+. The revised cable is 2 mm longer to stop the wear returning.' },
  { title: "Mini-LED blooming or uneven local dimming",
    body: 'Liquid Retina XDR on the 14"/16" M1 Pro through M4 uses ~10,000 mini-LED zones. A halo around bright objects on a black background is normal HDR blooming — not a fault. A fixed bright/dark patch that stays in one spot is a failed dimming zone and needs a panel swap, from AED 1,000.' },
  { title: "ProMotion judder or stuck at 60Hz",
    body: "120Hz ProMotion (14\"/16\" 2021+) dropping to 60Hz is usually a Display setting or a third-party app capping refresh, not hardware. If the panel physically tears or judders at 120Hz after a knock, the timing-controller ribbon is the suspect — free diagnosis tells panel from board." },
  { title: "Cracked glass on a bonded Pro panel",
    body: 'From the 2016 Touch Bar models onward Apple bonds the glass to the LCD/mini-LED as one assembly, so there is no glass-only repair — full panel from AED 600 (13") to AED 1,200 (16"). Only the 2012-2015 Retina takes a glass-only repair at AED 600.' },
  { title: "Pink, green or purple tint across the display",
    body: 'Loose or oxidised eDP cable, or a failing T-CON board — most common on the 15" Retina 2013-2015. Reseating the cable clears ~30% of these at no charge; the rest need a panel swap.' },
  { title: "Image retention / burn-in on the M5 OLED",
    body: 'The 2026 14"/16" M5 Pro is the first OLED MacBook. Faint retention of a static UI element that fades within minutes is normal OLED behaviour; permanent burn-in is a warranty panel. We fit genuine Apple OLED assemblies only on these — aftermarket OLED for this model does not exist yet.' },
  { title: "Backlight bleed in the corners",
    body: 'Manufacturing defect on the 2012-2015 Retina and some early Touch Bar units. LCD swap AED 600 to AED 1,000 with a tested A-grade panel. Mini-LED 14"/16" panels do not have edge-lit bleed — a glow there means a cracked panel instead.' },
  { title: "Screen flickers below 20% battery",
    body: "PMIC voltage sag on the display rail, not the panel. Capacitor/PMIC work on the logic board, from AED 460 — no panel swap needed in ~80% of these tickets." },
  { title: "Built-in display dead, external monitor works",
    body: "Confirms a panel-side or backlight fault, not a logic-board GPU fault (the external output is a separate circuit). 70% are panel swaps from AED 600 to AED 1,200; the rest are the backlight chip on the board." },
  { title: "True Tone lost after a panel change",
    body: "Genuine Apple panels keep True Tone — we calibrate it against the original board serial during reassembly. A-grade aftermarket panels disable True Tone in macOS; every other metric (P3 colour, brightness, 120Hz) is identical. Ask for the genuine option at quote time if True Tone matters." },
];

const STEPS = [
  { title: "WhatsApp the model + a photo",
    body: 'Send the serial from  > About This Mac (or the A-number on the underside) and a photo of the damage. We tell Touch Bar from XDR from OLED by serial and quote in 4-8 minutes, 9 am-10 pm Mon-Sat.' },
  { title: "Free pickup or drop-off",
    body: "Free pickup anywhere in Dubai mainland, or walk in to Office #45, Concord Tower, Media City. On-the-spot diagnosis in about 15 minutes — panel-side vs board-side confirmed before any work." },
  { title: "Panel swap under the microscope",
    body: "Lid off in ~25 minutes. Adhesive heated, panel disconnected, replacement seated, eDP/mini-LED ribbon routed and strain-tested, lid re-bonded. Mini-LED and XDR ribbons are handled with the Pro's exact torque spec." },
  { title: "True Tone + XDR calibration",
    body: "On genuine panels True Tone re-calibrates against the original board serial. XDR/HDR brightness and the P3 colour curve are verified against reference before the lid press cures for 90 minutes at 45 °C." },
  { title: "Display QC — 47-point checklist",
    body: "Backlight/zone uniformity, dead-pixel scan at 8 colours, 120Hz ProMotion sweep, hinge torque, lid sensor, brightness curve, P3 gamut, ribbon strain test. The signed checklist is shown to you at handover." },
  { title: "Free delivery + warranty card",
    body: 'Back same day on 13"/14" in-stock panels, next day on the 16". The warranty card lists the panel batch number; cover stays with the serial and transfers once free of charge.' },
];

type FAQ = { q: string; a: string };
const FAQS: FAQ[] = [
  { q: "How much does MacBook Pro screen repair cost in Dubai?",
    a: 'From AED 600 for a 13" Retina or Touch Bar panel, AED 910 for the 15" Retina, AED 1,000 for the 14" Liquid Retina XDR, AED 1,200 for the 16" XDR, and from AED 1,300 for the 2026 M5 OLED. The price is panel + labour + warranty all-in — no diagnostic fee. WhatsApp the serial for the exact figure.' },
  { q: "What is the difference between repairing a 14\"/16\" XDR screen and an older Retina Pro?",
    a: 'The 14"/16" (2021+) use a Liquid Retina XDR mini-LED panel with ~10,000 dimming zones and a 120Hz ProMotion timing controller — a more involved, higher-cost assembly (AED 1,000-1,200). The 2012-2015 Retina is a conventional LCD where glass-only repair (AED 600) is still possible. The 2016-2020 Touch Bar models sit in between: bonded LCD, full-panel only.' },
  { q: "Do you repair Flexgate on the 2016-2017 MacBook Pro?",
    a: "Yes. Flexgate on the A1706/A1707/A1708 is fixed with a revised flex cable that is 2 mm longer than Apple's original, AED 600, same day, 3-month warranty. If the cable tore late and damaged the backlight strip (under 15% of cases) it becomes a full panel from AED 1,000." },
  { q: "Is mini-LED blooming on my MacBook Pro a fault?",
    a: 'A soft halo around bright objects on a dark background is normal HDR behaviour on every Liquid Retina XDR panel — not a defect and not repairable, because it is how mini-LED local dimming works. A fixed bright or dead patch that stays in one place regardless of content is a failed zone and needs a panel swap.' },
  { q: "Can the 2026 M5 OLED MacBook Pro screen be replaced?",
    a: "Yes, with a genuine Apple OLED assembly — aftermarket OLED for this model does not exist yet, so we fit Apple parts only on the M5. Faint, temporary image retention that fades is normal OLED behaviour; permanent burn-in or lines is a panel replacement. WhatsApp the serial to confirm OLED stock and lead time." },
  { q: "Will True Tone and ProMotion still work after the screen is replaced?",
    a: "True Tone works on genuine Apple panels — we calibrate it against the original logic-board serial. ProMotion 120Hz works on any correct-spec panel for that model. With A-grade aftermarket panels True Tone is disabled by macOS, but 120Hz, P3 colour and full brightness are retained. Genuine panels carry a 3-month warranty, A-grade 15 days." },
  { q: "Can you replace just the cracked glass on a MacBook Pro?",
    a: 'Only on the 2012-2015 Retina (AED 600 glass-only). Every MacBook Pro from the 2016 Touch Bar onward has the glass bonded to the LCD or mini-LED panel as one assembly, so the full panel must be replaced — we will not charge for glass-only on bonded models because the result is unreliable.' },
  { q: "My MacBook Pro display is black but it chimes and the external monitor works — is that the screen?",
    a: "Yes — that pattern confirms a panel or backlight fault, not a logic-board GPU fault (the external output is a separate circuit). Free diagnosis isolates the LCD/mini-LED panel, the eDP ribbon, or the backlight chip. Around 70% are panel swaps from AED 600 to AED 1,200." },
  { q: "Do you use genuine Apple screens for the MacBook Pro?",
    a: "Genuine Apple panels are stocked for the M3, M4 and M5 Pro (the only way to keep True Tone, and the only option on the M5 OLED). For 2012-2022 Pros we also fit A-grade panels from the same Samsung/LG factories that build the Apple part. Both are labelled on the WhatsApp quote — genuine 3-month warranty, A-grade 15 days." },
  { q: "How long does MacBook Pro screen replacement take in Dubai?",
    a: 'Same day on the 13" Retina/Touch Bar and the 14" XDR when the panel is in stock (3-5 hours including the 90-minute adhesive cure). The 16" XDR is often 1-2 days; the M5 OLED can be 1-3 days during release months while genuine stock is sourced from the local Apple distributor.' },
];

const COMPARISON = [
  ["Repair window",            'Same day on 13" Retina & 14" XDR',          "5 to 14 business days, mail-in"],
  ['Starting price (14" XDR)',  "AED 1,000",                                 "AED 2,099 (Apple list)"],
  ['Starting price (16" XDR)',  "AED 1,200",                                 "AED 2,600 (Apple list)"],
  ["Flexgate cable-only fix",  "Yes — AED 600 on 2016-2017",                "No, full assembly only"],
  ["Free pickup in Dubai",     "Yes, same day",                             "No, customer must courier"],
  ["Vintage/obsolete Pros",    "Yes — 2012 Retina onward",                  "Refused on obsolete (pre-2017)"],
  ["Warranty",                 "15 days - 3 months (by panel grade)",       "12 months"],
  ["No-fix-no-charge",         "Yes",                                       "No, diagnostic fee charged"],
];

const TIMELINE = [
  { tone: "good" as const, head: 'Same day (3 to 5 hours)',
    body: 'MacBook Pro 13" Retina/Touch Bar and 14" Liquid Retina XDR (M1-M4) when the panel is in stock — including the 90-minute adhesive cure. WhatsApp the serial first to confirm stock.' },
  { tone: "mid" as const, head: "1 to 2 days",
    body: 'MacBook Pro 16" XDR (panel ordered from the local Apple-authorised distributor), and the 15" Retina 2013-2015 when an original panel must be sourced.' },
  { tone: "mid" as const, head: "1 to 3 days (M5 OLED)",
    body: "Genuine Apple OLED orders for the 2026 M5 Pro during release months. Always shipped from the local Apple distributor — never grey-market, never from China." },
];

const RELATED = [
  { label: "MacBook screen repair (all models)", href: "/macbook-screen-repair-dubai", description: "The full MacBook screen service — Air, Pro and Intel, from AED 600." },
  { label: "MacBook Pro repair Dubai",           href: "/macbook-pro-repair-dubai",     description: "Every MacBook Pro repair: battery, board, keyboard, water damage." },
  { label: "MacBook Pro battery replacement",    href: "/macbook-pro-battery-replacement-dubai", description: "Pro battery service — 14\"/16\"/Intel, cycle-count check, pricing." },
];

const TRUST = [
  { value: "3,400+", label: "Displays fitted since 2004" },
  { value: "From AED 600", label: 'Pro 13" panel' },
  { value: "Genuine", label: "Apple panels for M3-M5" },
  { value: "3 months", label: "Written warranty" },
];

const MAPS_EMBED = "https://www.google.com/maps?q=Concord+Tower+Dubai+Media+City&output=embed";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";

const aed = (n: number) => `AED ${n.toLocaleString()}`;

export default function MacBookProScreenRepair() {
  const reviews = pickReviews([
    "Mariia Chymyrysova",
    "Daniel Layzell",
    "Maja Pilirani",
    "Quickbooks & Tax Services",
    "Oliver Tritton",
    "Faizal Hussain",
  ]);

  useSeo(
    {
      title: "MacBook Pro Screen Repair Dubai — From AED 600",
      description:
        "MacBook Pro screen repair Dubai from AED 600. XDR mini-LED 14\"/16\", ProMotion, Flexgate, M5 OLED. Same-day, genuine panels, 3-month warranty. 055 741 3706.",
      path: "/macbook-pro-screen-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Pro Screen Repair Dubai",
        price: 600,
        timeline: "Same day to 3 days",
        warranty: "P3M",
        url: "/macbook-pro-screen-repair-dubai",
        description:
          "MacBook Pro screen and panel replacement in Dubai. Liquid Retina XDR mini-LED, ProMotion 120Hz, M5 OLED, Touch Bar Retina, classic Retina and Flexgate. 13/14/15/16-inch, Intel and Apple Silicon.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section data-hero-tone="light" className="relative overflow-hidden pt-[120px] pb-3xl md:pb-4xl">
          <div className="relative mx-auto max-w-content px-5 md:px-6">
            <nav aria-label="Breadcrumb" className="mb-lg text-[13px] text-text-faint">
              <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
                <li><Link to="/" className="hover:text-accent">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link to="/macbook-pro-repair-dubai" className="hover:text-accent">MacBook Pro Repair</Link></li>
                <li aria-hidden>/</li>
                <li><Link to="/macbook-screen-repair-dubai" className="hover:text-accent">Screen Repair</Link></li>
                <li aria-hidden>/</li>
                <li className="text-text-muted">MacBook Pro</li>
              </ol>
            </nav>

            <div className="grid gap-2xl md:grid-cols-12 items-start">
              <div className="md:col-span-7">
                <p className="m-0 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-[13px] font-medium text-text-muted">
                  <Monitor size={14} className="text-accent" aria-hidden /> MacBook Pro screen repair · Media City
                </p>
                <h1 className="mt-lg text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.01em] text-text">
                  MacBook Pro Screen Repair Dubai — <span className="text-accent">From AED 600</span>
                </h1>
                <p className="mt-lg max-w-[64ch] text-[17px] leading-relaxed text-text-muted">
                  Liquid Retina XDR mini-LED, ProMotion 120Hz, the 2026 M5 OLED, Touch Bar Retina and Flexgate.
                  13″, 14″, 15″, 16″ — Intel through M5. Same-day on most models, warranty up to 3 months.
                </p>
                <div className="mt-xl flex flex-wrap gap-sm">
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Shafiq, MacBook Pro screen repair quote please. Model: ")}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle aria-hidden /> Get a quote on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
                    <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
                  </Button>
                </div>
                <p className="mt-lg text-[12.5px] text-text-faint">
                  Updated June 2026 · Reviewed by Shafiq Ahmed, Lead MacBook Technician · 9 min read
                </p>
              </div>

              <div className="md:col-span-5">
                <Reveal delay={120} className="overflow-hidden rounded-2xl border border-border shadow-lg">
                  <ResponsiveImage
                    src="/images/services/svc-screen.jpg"
                    alt="MacBook Pro screen replacement in Dubai — technician fitting a Liquid Retina XDR panel at our Media City workshop"
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 92vw, 420px"
                    imgClassName="w-full h-auto"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Answer-first capsule (AEO/BLUF) */}
        <div className="mx-auto max-w-content px-5 md:px-6 grid gap-xl md:grid-cols-12 items-stretch">
          <QuickAnswer tone="dark" className="max-w-none px-0 md:px-0 mt-0 md:col-span-7 h-full" {...deriveServiceQuickAnswer({ serviceName: "MacBook Pro screen repair", startingPrice: 600, timeline: "same-day on most models" })} />
          <Reveal delay={120} className="md:col-span-5 h-full rounded-2xl border border-border bg-bg-card p-lg shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent"><Monitor size={22} aria-hidden /></span>
                <div>
                  <p className="m-0 font-semibold leading-tight text-text">Pro Screen Repair</p>
                  <p className="m-0 text-[12px] text-text-faint">XDR · ProMotion · OLED · Flexgate</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[12px] font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden /> Online
              </span>
            </div>
            <ul className="mt-lg space-y-2.5 list-none p-0 border-t border-border pt-md">
              {[["Starting price", "AED 600"], ["Turnaround", "Same day · 1-3 days"], ["Warranty", "15 days - 3 months"], ["Diagnosis", "FREE"]].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between gap-2 text-[14px]">
                  <span className="text-text-faint">{k}</span>
                  <span className="font-semibold text-text">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-md flex items-center justify-between gap-2 border-t border-border pt-md text-[12.5px]">
              <span className="inline-flex items-center gap-1.5 text-text-faint"><Clock size={13} aria-hidden /> Mon-Sat · 9 am - 10 pm</span>
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"><MessageCircle size={13} aria-hidden /> WhatsApp now</a>
            </div>
          </Reveal>
        </div>

        {/* ── Broken-glass warranty notice ───────────────────────── */}
        <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <GlassWarrantyNotice device="screen" />
        </div>

        {/* ── Trust strip ────────────────────────────────────────── */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-2xl grid gap-xl grid-cols-2 lg:grid-cols-4 text-center">
            {TRUST.map((s) => (
              <Reveal key={s.label}>
                <p className="mono text-[22px] md:text-[26px] font-bold text-text leading-none mb-1">{s.value}</p>
                <p className="text-[13px] text-text-muted m-0">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Intro ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <LinkifyProse selfHref="/macbook-pro-screen-repair-dubai"><p className="max-w-[78ch] text-[17px] leading-relaxed text-text-muted m-0">
            MacBook Pro screen repair in Dubai starts at AED 600 and finishes the same day on the 13″ Retina, Touch Bar and 14″ Liquid Retina XDR when the panel is in stock. The MacBook Pro is the harder display to get right: the 14″ and 16″ (2021 onward) use mini-LED XDR panels with roughly 10,000 dimming zones and a 120Hz ProMotion timing controller, the 2026 M5 is the first OLED MacBook, and the 2016-2017 models suffer the well-known Flexgate cable failure. We fit genuine Apple panels on the M3, M4 and M5 to keep True Tone and ProMotion intact, and tested A-grade Samsung/LG panels on the 2012-2022 range. Every panel is bench-tested for dead pixels, zone uniformity, P3 colour and 120Hz before it leaves the workshop. For Air or Intel models, see the <Link to="/macbook-screen-repair-dubai" className="text-accent hover:underline">full MacBook screen repair</Link> page.
          </p></LinkifyProse>
        </section>

        {/* ── Models + pricing ───────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Every Pro panel, one place" title="MacBook Pro models we repair" intro="From the 2012 Retina through the 2026 M5 OLED. Prices are panel + labour + warranty all-in — no diagnostic fee, no adhesive surcharge. The exact figure is pinned to your serial." />
            <PriceTable rows={PRICING} />
            <p className="mt-md text-[13px] text-text-faint mono max-w-[72ch]">
              Glass-only repair on 2012-2015 Retina starts at AED 600. From the 2016 Touch Bar the glass is bonded to the panel — full assembly only.
            </p>
          </div>
        </section>

        {/* ── Common problems ────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            eyebrow="Match the symptom"
            title="Common MacBook Pro screen problems"
            intro="The highest-volume Pro display tickets at the workshop — including the XDR, ProMotion and OLED faults the generic screen page does not cover. Match the symptom in bold to the typical fix and price."
            icon={<AlertTriangle size={26} className="text-accent" aria-hidden />}
          />
          <div className="grid gap-lg md:grid-cols-2">
            {COMMON_PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <Card className="h-full">
                  <h3 className="m-0 mb-2 text-text text-[16px] font-bold">{p.title}</h3>
                  <p className="m-0 text-[14px] text-text-muted leading-relaxed">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead
              eyebrow="Simple & transparent"
              title="Our MacBook Pro screen repair process"
              intro="Six steps from WhatsApp to delivery, each with a fixed time estimate."
              icon={<Wrench size={26} className="text-accent" aria-hidden />}
            />
            <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={(i % 3) * 70} className="rounded-2xl border border-border bg-bg-card p-lg">
                  <span aria-hidden className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 font-heading text-[18px] font-bold text-accent">{i + 1}</span>
                  <p className="font-semibold text-[16px] m-0 mb-1 text-text">{s.title}</p>
                  <p className="text-[13.5px] text-text-muted leading-relaxed m-0">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Timeline ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Turnaround" title="How long does MacBook Pro screen repair take?" />
          <div className="grid gap-lg md:grid-cols-3">
            {TIMELINE.map((t) => (
              <Card key={t.head} className={t.tone === "good" ? "border-accent/30 bg-accent/[0.06]" : ""}>
                <h3 className="m-0 mb-2 text-text text-[18px] font-bold">{t.head}</h3>
                <p className="m-0 text-[14px] text-text-muted leading-relaxed">{t.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Parts ──────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="What goes in your MacBook Pro" title="Genuine, A-grade, or genuine used" intro="A Pro panel comes in three grades and the price moves with the grade. The figures above are the A-grade floor; a full display assembly, or a 14″/16″ XDR, costs more. The M5 OLED is genuine-Apple only — aftermarket OLED for it does not exist yet." />
            <div className="grid gap-lg md:grid-cols-3">
              <Card>
                <h3 className="m-0 mb-2 text-text text-[18px] font-bold">Original Apple (OEM)</h3>
                <p className="m-0 mb-sm text-[14px] text-text-muted leading-relaxed">Genuine Apple panels stocked for the M3, M4 and M5 Pro 14″ and 16″ — and the only option on the M5 OLED. Sourced from the local Apple-authorised distributor with traceable batch numbers. True Tone, ProMotion and XDR brightness retained.</p>
                <p className="m-0 mono text-[13px] text-accent">Add AED 260 to AED 600 over A-grade pricing</p>
              </Card>
              <Card>
                <h3 className="m-0 mb-2 text-text text-[18px] font-bold">A-grade aftermarket (Samsung / LG)</h3>
                <p className="m-0 mb-sm text-[14px] text-text-muted leading-relaxed">Same Samsung/LG factories that build the Apple panel for the 2012-2022 Pro — without the Apple label and calibration chip. P3 colour, full brightness, 120Hz where the model supports it. True Tone disabled by macOS.</p>
                <p className="m-0 mono text-[13px] text-accent">Standard pricing — AED 600 to AED 1,200</p>
              </Card>
              <Card>
                <h3 className="m-0 mb-2 text-text text-[18px] font-bold">Used pull-out (genuine)</h3>
                <p className="m-0 mb-sm text-[14px] text-text-muted leading-relaxed">Real Apple panels pulled from board-damaged trade-ins — genuine glass and calibration, not aftermarket. Stock depends on what crosses the bench that week, so it is not always available for your model.</p>
                <p className="m-0 mono text-[13px] text-accent">Cheapest route to a genuine panel — WhatsApp the serial to check stock</p>
              </Card>
            </div>
            <p className="mt-md text-[14px] text-text-muted leading-relaxed max-w-[78ch]">
              Genuine Apple panels carry a 3-month warranty; A-grade aftermarket carries 15 days. The WhatsApp quote shows every grade we can supply for your model side by side, with the exact price once we have the serial. We refuse unbranded panels under AED 520 because failure rates above 20% are normal in that grade.
            </p>
          </div>
        </section>

        {/* ── Warranty ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Backed in writing" title="Warranty" icon={<ShieldCheck size={26} className="text-accent" aria-hidden />} />
          <Card>
            <ul className="space-y-2.5 text-[15px] text-text-muted list-none p-0 m-0">
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Up to 3 months</strong> — written warranty on parts and labour, dated and signed (3 months on genuine Apple panels, 15 days on A-grade aftermarket).</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Covered:</strong> manufacturing defects, dead pixels appearing post-repair, failed mini-LED zones, backlight bleed, eDP/ribbon cable failure, hinge alignment.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Not covered:</strong> new physical damage, liquid damage after repair, normal HDR blooming or temporary OLED retention (these are not faults).</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">How to claim:</strong> WhatsApp the warranty card photo to {NAP.phoneDisplay}. Same-day collection, free; replacement panel fitted within 48 hours.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Transferable:</strong> once, free of charge, if the MacBook Pro is sold within the warranty period.</span></li>
            </ul>
          </Card>
        </section>

        {/* ── Pricing recap + CTA ────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Transparent pricing" title="MacBook Pro Screen Repair Dubai — pricing guide" intro="No hidden fees. The price quoted on WhatsApp is the price paid on collection — see the full per-model list above. No diagnostic fee, no adhesive surcharge, no VAT add-on." />
            <p className="text-[14px] text-text-faint mono max-w-[78ch]">
              All prices in AED, VAT inclusive. Payment on collection — cash, Visa, Mastercard, Apple Pay, Samsung Pay, or bank transfer to Emirates NBD.
            </p>

            <div className="mt-2xl relative overflow-hidden rounded-2xl border border-border bg-bg-card p-xl md:p-2xl">
              <div className="relative flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="m-0 mono text-[12px] uppercase tracking-wider text-accent mb-2">MacBook Pro Screen Repair · Same day · 1-3 days</p>
                  <h3 className="m-0 text-text text-[24px] md:text-[26px]">Get your Pro screen quote in 4 minutes</h3>
                  <p className="m-0 mt-2 text-text-muted text-[15px]">Starting from <strong className="text-text">AED 600</strong>. WhatsApp the model + a photo of the damage.</p>
                </div>
                <CtaRow whatsappMessage="Hi Shafiq, MacBook Pro screen repair quote please. Model: " />
              </div>
            </div>
          </div>
        </section>

        {/* ── Comparison ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Side by side" title="MacBook Pro Screen Repair vs Apple Store Dubai" />
          <Reveal className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
            <table className="w-full border-collapse text-left text-[14px] min-w-[640px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-md py-md font-semibold">Factor</th>
                  <th className="px-md py-md font-semibold">MacBook Repair Dubai</th>
                  <th className="px-md py-md font-semibold">Apple Store / AASP</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row[0]} className="border-b border-border last:border-0 align-top">
                    <td className="px-md py-sm font-semibold text-text">{row[0]}</td>
                    <td className="px-md py-sm text-text">{row[1]}</td>
                    <td className="px-md py-sm text-text-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-md text-[13px] text-text-faint mono max-w-[80ch]">
            Apple list pricing from apple.com/ae/shop/mac/repair, retrieved June 2026. We are an independent Apple specialist, not an Apple Authorised Service Provider — the right fit when the device is out of warranty, the model is vintage/obsolete, or you need same-day turnaround.
          </p>
        </section>

        {/* ── Reviews ────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl flex items-end justify-between gap-md flex-wrap">
              <div>
                <p className="mono text-[12px] uppercase tracking-wider text-accent mb-3">{REVIEW_AVERAGE.toFixed(1)} average · Google verified</p>
                <h2 className="m-0 text-text">Real MacBook Pro repair reviews</h2>
              </div>
              <Link to="/reviews" className="text-[15px] font-semibold text-accent hover:underline inline-flex items-center gap-1">All {REVIEW_COUNT}+ reviews <ArrowRight size={15} aria-hidden /></Link>
            </div>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name} className="flex h-full flex-col rounded-2xl border border-border bg-bg-card p-lg">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-text">{r.name}</span>
                    <span className="flex" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} className="fill-star text-star" />)}</span>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-muted m-0 flex-1">“{r.text}”</p>
                  <p className="mt-md mb-0 text-[12px] text-text-faint">{r.date} · Google review</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage(FAQS)) }} />
          <SectionHead eyebrow="Before you ask" title="MacBook Pro screen repair FAQ" />
          <ul className="grid md:grid-cols-2 md:gap-x-2xl border-t border-border list-none p-0 m-0">
            {FAQS.map((f, i) => (
              <li key={i} className="border-b border-border">
                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-md py-md list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[16px] md:text-[17px] font-semibold text-text">{f.q}</span>
                    <ChevronDown size={18} className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="pb-md text-[15px] leading-relaxed text-text-muted max-w-[70ch] m-0">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Related ────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Often booked together" title="Related MacBook Pro repairs" />
            <div className="grid gap-lg md:grid-cols-3">
              {RELATED.map((r) => (
                <Link key={r.href} to={r.href} className="group rounded-2xl border border-border bg-bg-card p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                  <h3 className="m-0 mb-1 text-text text-[17px] group-hover:text-accent">{r.label}</h3>
                  <p className="m-0 text-[14px] text-text-muted leading-relaxed">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Free pickup across the city" title="Where to bring your MacBook Pro" />
          <div className="grid gap-lg md:grid-cols-2 items-stretch">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe src={MAPS_EMBED} title={`Map to ${NAP.name}`} width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full h-[320px] border-0" />
            </div>
            <div className="flex flex-col gap-md">
              <h3 className="m-0 text-text">Find us in Media City</h3>
              <p className="flex items-start gap-sm text-[15px] text-text-muted m-0"><MapPin size={18} className="text-accent mt-1 shrink-0" aria-hidden /><span>{NAP.street}<br />{NAP.area}<br />{NAP.city}, UAE</span></p>
              <p className="flex items-start gap-sm text-[14px] text-text-faint m-0"><ParkingCircle size={18} className="text-accent mt-1 shrink-0" aria-hidden /> Paid parking on-site and nearby. Across from Media City Metro.</p>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent hover:underline">Get directions <ExternalLink size={14} aria-hidden /></a>
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-border">
          <div className="relative mx-auto max-w-content px-5 md:px-6 py-4xl text-center">
            <h2 className="text-text m-0 mb-md max-w-[30ch] mx-auto">Cracked Pro screen? WhatsApp the model — quote in 4 minutes</h2>
            <p className="text-text-muted max-w-[60ch] mx-auto mb-xl text-[17px]">
              Year, screen size, processor, photo of the damage. Free pickup across Dubai mainland. Warranty up to 3 months on every panel fitted.
            </p>
            <div className="flex flex-wrap justify-center gap-sm">
              <Button asChild variant="whatsapp" size="lg"><a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> Message on WhatsApp</a></Button>
              <Button asChild size="lg" variant="secondary" className="bg-white"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> {NAP.phoneDisplay}</a></Button>
            </div>
          </div>
        </section>
      </div>

      <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free repair quote</h2>
        <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps, your device, then how to reach you. Free diagnosis, written quote, warranty up to 3 months.</p>
        <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-pro-screen-repair-dubai" />
      </section>
      <RelatedArticles path="/macbook-pro-screen-repair-dubai" />
    </PageShell>
  );
}

/* ── local helpers (dark) ──────────────────────────────────── */
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-bg-card p-lg ${className}`}>{children}</div>;
}

function SectionHead({ eyebrow, title, intro, icon }: { eyebrow: string; title: string; intro?: string; icon?: ReactNode }) {
  return (
    <div className="mb-2xl max-w-[64ch]">
      <Reveal as="p" className="mono text-[12px] uppercase tracking-wider text-accent mb-3">{eyebrow}</Reveal>
      <Reveal as="h2" className="m-0 text-text flex items-center gap-sm">{icon}{title}</Reveal>
      {intro && <Reveal as="p" className="mt-md text-[17px] text-text-muted leading-relaxed">{intro}</Reveal>}
    </div>
  );
}

function CtaRow({ whatsappMessage }: { whatsappMessage?: string }) {
  const href = whatsappMessage ? `${NAP.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}` : NAP.whatsappUrl;
  return (
    <div className="flex flex-wrap gap-sm shrink-0">
      <Button asChild variant="whatsapp" size="lg"><a href={href} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a></Button>
      <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a></Button>
    </div>
  );
}

function PriceTable({ rows }: { rows: PricingRow[] }) {
  return (
    <Reveal className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
      <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
        <thead>
          <tr className="border-b border-border text-accent">
            <th className="px-lg py-md font-semibold">MacBook Pro model</th>
            <th className="px-lg py-md font-semibold whitespace-nowrap">Screen replacement</th>
            <th className="px-lg py-md font-semibold">Turnaround</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.model} className="border-b border-border last:border-0">
              <td className="px-lg py-sm font-medium text-text">{r.model}</td>
              <td className="px-lg py-sm mono whitespace-nowrap text-accent font-semibold">{aed(r.price)}</td>
              <td className="px-lg py-sm text-text-muted">{r.timeline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
