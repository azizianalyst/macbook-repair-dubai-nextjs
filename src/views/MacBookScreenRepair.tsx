"use client";
// MacBook Screen Repair - rebuilt in the dark theme to match the home page.
// All content, pricing, problems, process, parts, warranty, comparison, reviews
// and FAQs are preserved verbatim; only the presentation moved to the dark
// design system (bg-primary band, glass cards, accent-bright). SEO/schema kept
// identical so rankings transfer.
import { type ReactNode } from "react";
import {
  Monitor, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star,
  Check, Clock, Truck, MapPin, ExternalLink, ParkingCircle, ChevronDown, ArrowRight,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Reveal } from "@/components/blocks/Reveal";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { faqPage, localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";

type PricingRow = { model: string; price: number; timeline: string };

const PRICING: PricingRow[] = [
  { model: "MacBook Air 13\" (M1/M2/M3)",     price: 780,  timeline: "Same day"   },
  { model: "MacBook Air 15\" (M2/M3)",        price: 910,  timeline: "Same day"   },
  { model: "MacBook Pro 13\" (Touch Bar)",    price: 780,  timeline: "Same day"   },
  { model: "MacBook Pro 14\" (M1/M2/M3/M4)",  price: 1040,  timeline: "Same day · 1 day" },
  { model: "MacBook Pro 16\" (M1/M2/M3/M4)",  price: 1560, timeline: "1-2 days"   },
  { model: "MacBook Pro 15\" Retina 2012-15", price: 910,  timeline: "1 day"      },
  { model: "MacBook Pro 13\" Retina 2012-15", price: 780,  timeline: "Same day"   },
  { model: "MacBook 12\" Retina 2015-17",     price: 910,  timeline: "1-2 days"   },
];

const COMMON_PROBLEMS = [
  { title: "Flexgate - horizontal lines or no backlight",
    body: "MacBook Pro 13\" and 15\" 2016-2017 (A1706, A1707, A1708). The display flex cable wears through after ~10,000 lid open/close cycles. Symptom: stage-light backlight, then full backlight death. Fix: AED 780 cable swap on 2016-2017, AED 1,040 panel swap on 2018+." },
  { title: "Cracked outer glass, LCD intact",
    body: "Common on 13\" and 14\" Pros after a drop. If touch and image still work under the cracks, AED 780 glass-only on 2012-2015 Retina. From 2016 onward Apple bonded the glass to the LCD - full panel replacement at AED 780 to AED 1,560." },
  { title: "Pink, green, or purple tint across the screen",
    body: "Loose or oxidised eDP cable, or a failing T-CON board. Reseating the cable fixes 30% of cases at no charge - full panel swap on the rest." },
  { title: "Dead pixels or stuck pixels",
    body: "Apple replaces the panel only if more than 5 dead pixels appear in a 50 mm² area. The workshop replaces from a single visible dead pixel - AED 780 starting." },
  { title: "Backlight bleed in corners",
    body: "Manufacturing defect on Retina 2012-2015 and Air 2018+. LCD panel swap, AED 780 to AED 1,040. The replacement uses a tested A-grade panel with a 90-day no-bleed guarantee." },
  { title: "Ghosting or burn-in (image retention)",
    body: "More common on the 2012 Retina LG-built panels. New panels from the original Samsung supplier eliminate the ghosting. AED 910." },
  { title: "Display works but lid sensor reports closed",
    body: "Hall-effect sensor failure inside the bezel. AED 330 sensor swap, same day, no panel replacement needed." },
  { title: "True Tone disabled after panel swap",
    body: "Genuine Apple panels keep True Tone. Aftermarket panels carry a calibration chip programmed against the logic board's serial number - if True Tone matters to you, ask for the genuine option at quote time." },
  { title: "Screen flickers when battery drops below 20%",
    body: "PMIC voltage sag on the LCD rail. Capacitor replacement on the logic board, AED 460. No panel swap needed in 80% of these tickets." },
  { title: "Screen comes loose from the lid",
    body: "Failed bezel adhesive on Retina 2013-2015. Re-bond with industrial 3M tape and a heated press, AED 260, no panel swap." },
];

const STEPS = [
  { title: "WhatsApp the model + photo",
    body: "Send the serial number from About This Mac and a photo of the screen damage. Quote back in 4 to 8 minutes during business hours (9 am - 10 pm Mon-Sat)." },
  { title: "Free pickup or drop-off",
    body: "Free pickup from anywhere in Dubai mainland. Or walk in to Office #45, Concord Tower, Media City. Diagnosis is on the spot - about 15 minutes." },
  { title: "Panel swap in the workshop",
    body: "Lid removed in 25 minutes. Adhesive heated, panel disconnected, replacement seated, eDP cable routed, lid re-bonded. Under microscope from start to finish." },
  { title: "True Tone calibration + 90-min cure",
    body: "On genuine panels, True Tone re-calibrates against the original board serial. Lid press cures for 90 minutes at 45 °C before the MacBook leaves the bench." },
  { title: "Display QC - 47-point checklist",
    body: "Backlight uniformity, dead-pixel scan at 8 colours, hinge torque, lid sensor, brightness curve, P3 colour gamut, eDP cable strain test. The checklist is signed and shown to you at handover." },
  { title: "Free delivery + 90-day warranty card",
    body: "Delivered back same day on common models, next day on the 16\" Pro. Warranty card lists the panel batch number - the warranty stays with the serial number, transferable once free of charge." },
];

type FAQ = { q: string; a: string };
const FAQS: FAQ[] = [
  { q: "How much does MacBook screen repair cost in Dubai?",
    a: "From AED 780 for a MacBook Air 13\" or MacBook Pro 13\" panel. AED 1,040 for the 14\" Pro. AED 1,560 for the 16\" Pro. Glass-only repair is AED 780 on 2012-2015 Retina models - newer models need full panel swap because the glass is bonded to the LCD." },
  { q: "How long does MacBook screen replacement take?",
    a: "Same day for MacBook Air, MacBook Pro 13\", and 14\" Pro when the panel is in stock - typically 3 to 5 hours including the 90-minute adhesive cure. The 16\" Pro panel is sometimes a 1 to 2 day order. WhatsApp the serial first to confirm stock." },
  { q: "Do you fix Flexgate on the 2016 and 2017 MacBook Pro?",
    a: "Yes. Flexgate on the A1706, A1707, and A1708 is repaired with a longer flex cable, AED 780, same day. The new cable is 2 mm longer than Apple's original to stop the wear pattern returning. 90-day warranty." },
  { q: "Will True Tone still work after the screen is replaced?",
    a: "True Tone works on genuine Apple panels - the workshop calibrates it against the original logic board serial during reassembly. With aftermarket A-grade panels True Tone is disabled by macOS; everything else (P3 colour, brightness, contrast) is identical. Both options carry the 90-day warranty." },
  { q: "Can you replace just the cracked glass without changing the LCD?",
    a: "On 2012-2015 Retina MacBooks, yes - AED 780 glass-only swap. On every MacBook from 2016 onward Apple bonded the glass to the LCD as a single assembly, so the full panel must be replaced. The workshop will not charge for glass-only on bonded models because the result is unreliable." },
  { q: "What's the difference between LCD-only and full display assembly replacement?",
    a: "LCD-only is the panel inside the lid - the camera, hinges, and antenna stay original. Full display assembly is the entire lid pre-built. LCD-only is AED 260 to AED 520 cheaper but takes 90 extra minutes of labour. The workshop quotes both prices on every WhatsApp ticket." },
  { q: "Do you use genuine Apple screens?",
    a: "Genuine Apple panels are stocked for MacBook Pro M3, M4, and M5 - the only way to keep True Tone active. For 2012-2022 models the workshop fits A-grade panels from the original Samsung or LG factories that built the Apple part. Both are labelled clearly on the WhatsApp quote and carry 90-day warranty." },
  { q: "What if my screen is fine but I see horizontal lines at the bottom?",
    a: "Classic Flexgate. The flex cable inside the hinge is failing. Open and close the lid slowly - if the lines come and go, it's confirmed. AED 780 cable replacement, same day, and the new cable is the 2-mm-longer revised version." },
  { q: "Will my MacBook screen replacement work with my external monitor?",
    a: "Yes - the external display output is a separate circuit on the logic board. If your built-in display died but external still works, that confirms a panel-side fault, not a logic-board GPU fault. AED 780 to AED 1,560 panel swap solves it." },
  { q: "Is there a warranty on the new screen?",
    a: "90-day written warranty on parts and labour. Covers manufacturing defects, dead pixels appearing post-repair, backlight bleed, and cable failure. Does not cover new physical damage. Transferable once free of charge to a new owner if the MacBook is sold." },
  { q: "Can you fix a MacBook screen with no image but the laptop still chimes?",
    a: "Yes - that's a panel or backlight issue, not a logic-board issue. Free diagnosis confirms whether it's the LCD, the eDP cable, or the backlight chip on the board. 70% of these are panel swaps at AED 780 to AED 1,560." },
  { q: "Do you offer pickup for screen repair?",
    a: "Free pickup and delivery across Dubai mainland - Marina, Downtown, JBR, JLT, Palm, Business Bay, Al Barsha. Same-hour pickup from Internet City and Knowledge Village. Sharjah and Abu Dhabi pickup AED 100 each way." },
];

const COMPARISON = [
  ["Repair window",         "Same day on MacBook Air 13\" and Pro 14\"",  "5 to 14 business days, mail-in"],
  ["Starting price (Air 13\")", "AED 780",                                  "AED 1,449 (Apple list)"],
  ["Starting price (Pro 14\")", "AED 1,040",                                  "AED 2,099 (Apple list)"],
  ["Starting price (Pro 16\")", "AED 1,560",                                 "AED 2,749 (Apple list)"],
  ["Free pickup in Dubai",  "Yes, same day",                                "No, customer must courier"],
  ["LCD-only option",       "Yes - AED 260 to AED 520 cheaper",             "No, full assembly only"],
  ["Warranty",              "90 days written",                              "90 days"],
  ["No-fix-no-charge",      "Yes",                                           "No, diagnostic fee charged"],
  ["Vintage/obsolete models","Yes - 2012 onwards",                           "Refused on obsolete (pre-2017)"],
];

const TIMELINE = [
  { tone: "good" as const, head: "Same day (3 to 5 hours)",
    body: "MacBook Air 13″ and 15″, Pro 13″ Touch Bar, Pro 14″ M1/M2/M3/M4 - when the panel is in stock. 90 of last 100 same-day tickets delivered before 8 pm." },
  { tone: "mid" as const, head: "1 to 2 days",
    body: "MacBook Pro 16″ M1 to M4 (panel ordered from local Apple-authorised distributor). 12″ Retina 2015-2017. 2012 Retina 15″ when the original Samsung panel must be sourced." },
  { tone: "mid" as const, head: "3 days (rare)",
    body: "Genuine Apple panel orders for M5 Pro 16″ during release months. The workshop ships from the local Apple distributor - never from China, never from grey market." },
];

const RELATED = [
  { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai", description: "From AED 590, 2 hours, 6-month battery warranty." },
  { label: "MacBook Logic Board Repair",  href: "/macbook-logic-board-repair-dubai",  description: "Component-level board work from AED 1,040. Microscope + hot air rework." },
  { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Ultrasonic cleaning + corrosion removal from AED 910. Bring it in within 24 hours." },
];

const TRUST = [
  { value: "3,400+", label: "Displays fitted since 2004" },
  { value: "From AED 780", label: "Air 13″ & Pro 13″ panel" },
  { value: "Same day", label: "On most Air & Pro 14″" },
  { value: "90 days", label: "Written warranty" },
];

const MAPS_EMBED = "https://www.google.com/maps?q=Concord+Tower+Dubai+Media+City&output=embed";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";

const aed = (n: number) => `AED ${n.toLocaleString()}`;

export default function MacBookScreenRepair() {
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
      title: "MacBook Screen Repair Dubai - From AED 780",
      description:
        "MacBook screen repair Dubai from AED 780. Same-day Air & Pro 14\". Flexgate, cracked glass, dead pixels. 90-day warranty. Concord Tower. 055 741 3706.",
      path: "/macbook-screen-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Screen Repair Dubai",
        price: 780,
        timeline: "Same day to 2 days",
        warranty: "P90D",
        url: "/macbook-screen-repair-dubai",
        description:
          "MacBook screen and LCD replacement in Dubai. Flexgate, cracked glass, dead pixels, backlight failure. Air, Pro 13/14/16, Intel and Apple Silicon.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-primary text-on-primary -mb-[4rem]">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section data-hero-tone="dark" className="relative overflow-hidden pt-[120px] pb-3xl md:pb-4xl">
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute top-1/3 -right-16 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto max-w-content px-5 md:px-6">
            <nav aria-label="Breadcrumb" className="mb-lg text-[13px] text-on-primary-faint">
              <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
                <li><Link to="/" className="hover:text-accent-bright">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link to="/" className="hover:text-accent-bright">MacBook Repair</Link></li>
                <li aria-hidden>/</li>
                <li className="text-on-primary-muted">Screen Repair</li>
              </ol>
            </nav>

            <div className="grid gap-2xl md:grid-cols-12 items-start">
              <div className="md:col-span-7">
                <p className="m-0 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-on-primary-muted">
                  <Monitor size={14} className="text-accent-bright" aria-hidden /> MacBook screen repair · Media City
                </p>
                <h1 className="mt-lg text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.01em] text-on-primary">
                  MacBook Screen Repair Dubai - <span className="text-accent-bright">From AED 780</span>
                </h1>
                <p className="mt-lg max-w-[64ch] text-[17px] leading-relaxed text-on-primary-muted">
                  Cracked glass, Flexgate, dead pixels, no backlight. Air, Pro 13″, 14″, 16″ - Intel through M5.
                  Same-day on most models, 90-day written warranty.
                </p>
                <div className="mt-xl flex flex-wrap gap-sm">
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Shafiq, MacBook screen repair quote please. Model: ")}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle aria-hidden /> Get a quote on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="border border-white/20 bg-white/[0.06] text-on-primary hover:bg-white/10">
                    <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
                  </Button>
                </div>
                <p className="mt-lg text-[12.5px] text-on-primary-faint">
                  Updated April 2026 · Reviewed by Shafiq Ahmed, Lead MacBook Technician · 9 min read
                </p>
              </div>

              {/* glass info card */}
              <div className="md:col-span-5">
                <Reveal delay={120} className="rounded-2xl border border-white/10 bg-white/[0.05] p-lg shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-bright"><Monitor size={22} aria-hidden /></span>
                      <div>
                        <p className="m-0 font-semibold leading-tight text-on-primary">Screen Repair</p>
                        <p className="m-0 text-[12px] text-on-primary-faint">LCD · glass · Flexgate</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-bright/30 bg-accent-bright/10 px-2.5 py-1 text-[12px] font-medium text-accent-bright">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" aria-hidden /> Online
                    </span>
                  </div>
                  <ul className="mt-lg space-y-2.5 list-none p-0 border-t border-white/10 pt-md">
                    {[["Starting price", "AED 780"], ["Turnaround", "Same day · 1-2 days"], ["Warranty", "90 days written"], ["Diagnosis", "FREE"]].map(([k, v]) => (
                      <li key={k} className="flex items-center justify-between gap-2 text-[14px]">
                        <span className="text-on-primary-faint">{k}</span>
                        <span className="font-semibold text-on-primary">{v}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-md flex items-center justify-between gap-2 border-t border-white/10 pt-md text-[12.5px]">
                    <span className="inline-flex items-center gap-1.5 text-on-primary-faint"><Clock size={13} aria-hidden /> Mon-Sat · 9 am - 10 pm</span>
                    <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-accent-bright hover:underline"><MessageCircle size={13} aria-hidden /> WhatsApp now</a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ────────────────────────────────────────── */}
        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-content px-5 md:px-6 py-2xl grid gap-xl grid-cols-2 lg:grid-cols-4 text-center">
            {TRUST.map((s) => (
              <Reveal key={s.label}>
                <p className="mono text-[22px] md:text-[26px] font-bold text-on-primary leading-none mb-1">{s.value}</p>
                <p className="text-[13px] text-on-primary-muted m-0">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Intro ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <LinkifyProse selfHref="/macbook-screen-repair-dubai"><p className="max-w-[78ch] text-[17px] leading-relaxed text-on-primary-muted m-0">
            MacBook screen repair in Dubai starts at AED 780 and finishes the same day on the MacBook Air 13″, Pro 13″, and Pro 14″ when the panel is in stock. The workshop has fitted 3,400+ MacBook displays since 2004 - Flexgate cable swaps on the 2016-2017 Pro, full panel replacements on the M1 to M5 Pro, glass-only repairs on the 2012-2015 Retina range. Every panel is bench-tested for dead pixels, backlight uniformity, and P3 colour before it leaves the bench. True Tone is preserved on genuine Apple panels, calibrated against the original logic-board serial.
          </p></LinkifyProse>
        </section>

        {/* ── Models + pricing ───────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Every screen, one place" title="MacBook models we repair" intro="Every MacBook from the 2008 unibody through the 2025 M5 Pro 16″. Prices below are the panel + labour + 90-day warranty all-in. No diagnostic fee, no hidden adhesive charge." />
            <PriceTable rows={PRICING} />
            <p className="mt-md text-[13px] text-on-primary-faint mono max-w-[70ch]">
              Glass-only repair on 2012-2015 Retina starts at AED 780. From 2016 the glass is bonded to the LCD - full assembly only.
            </p>
          </div>
        </section>

        {/* ── Common problems ────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            eyebrow="Match the symptom"
            title="Common screen problems we fix"
            intro="The 10 highest-volume screen tickets at the workshop. Match the symptom in bold to find the typical fix and price."
            icon={<AlertTriangle size={26} className="text-accent-bright" aria-hidden />}
          />
          <div className="grid gap-lg md:grid-cols-2">
            {COMMON_PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <Card className="h-full">
                  <h3 className="m-0 mb-2 text-on-primary text-[16px] font-bold">{p.title}</h3>
                  <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead
              eyebrow="Simple & transparent"
              title="Our screen repair process"
              intro="Six steps from WhatsApp to delivery. Each step has a fixed time estimate - no vague 'we'll call you back'."
              icon={<Wrench size={26} className="text-accent-bright" aria-hidden />}
            />
            <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={(i % 3) * 70} className="rounded-2xl border border-white/10 bg-white/[0.04] p-lg">
                  <span aria-hidden className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bright/15 font-heading text-[18px] font-bold text-accent-bright">{i + 1}</span>
                  <p className="font-semibold text-[16px] m-0 mb-1 text-on-primary">{s.title}</p>
                  <p className="text-[13.5px] text-on-primary-muted leading-relaxed m-0">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Timeline ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Turnaround" title="How long does MacBook screen repair take?" />
          <div className="grid gap-lg md:grid-cols-3">
            {TIMELINE.map((t) => (
              <Card key={t.head} className={t.tone === "good" ? "border-accent-bright/30 bg-accent-bright/[0.06]" : ""}>
                <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">{t.head}</h3>
                <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">{t.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Parts ──────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="What goes in your MacBook" title="Three screen grades to choose from" intro="A MacBook screen comes in three grades, and the price moves with the grade you pick. The numbers above are the screen-only A-grade floor - a full display assembly, or a 14″ and 16″ Pro, costs more. We can't lock the exact figure until we read the serial, since that's what pins down the panel your MacBook actually takes." />
            <div className="grid gap-lg md:grid-cols-3">
              <Card>
                <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">Original Apple (OEM)</h3>
                <p className="m-0 mb-sm text-[14px] text-on-primary-muted leading-relaxed">Genuine Apple panels stocked for M3, M4, and M5 Pro 14″ and 16″. Sourced from the local Apple-authorised distributor with traceable batch numbers. True Tone calibration retained.</p>
                <p className="m-0 mono text-[13px] text-accent-bright">Add AED 260 to AED 520 over A-grade pricing</p>
              </Card>
              <Card>
                <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">A-grade aftermarket (Samsung / LG)</h3>
                <p className="m-0 mb-sm text-[14px] text-on-primary-muted leading-relaxed">Same Samsung and LG factories that build the Apple panel - sold without the Apple label and calibration chip. P3 colour, full brightness, 60 Hz or 120 Hz to match original. True Tone disabled by macOS.</p>
                <p className="m-0 mono text-[13px] text-accent-bright">Standard pricing - AED 780 to AED 1,560</p>
              </Card>
              <Card>
                <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">Used pull-out (genuine)</h3>
                <p className="m-0 mb-sm text-[14px] text-on-primary-muted leading-relaxed">Real Apple panels pulled from board-damaged trade-ins - genuine glass and calibration, not aftermarket. Stock depends on what's passed across the bench that week, so it isn't always available for your model.</p>
                <p className="m-0 mono text-[13px] text-accent-bright">Cheapest route to a genuine panel - WhatsApp the serial to check stock</p>
              </Card>
            </div>
            <p className="mt-md text-[14px] text-on-primary-muted leading-relaxed max-w-[78ch]">
              All three carry the same 90-day warranty. The WhatsApp quote shows every grade we can supply for your model side by side, with the exact price once we have the serial - pick what suits the budget. The workshop refuses to fit unbranded panels under AED 520 because failure rates above 20% are normal in that grade.
            </p>
          </div>
        </section>

        {/* ── Warranty ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Backed in writing" title="Warranty" icon={<ShieldCheck size={26} className="text-accent-bright" aria-hidden />} />
          <Card>
            <ul className="space-y-2.5 text-[15px] text-on-primary-muted list-none p-0 m-0">
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">90 days</strong> - written warranty on parts and labour, dated and signed.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">Covered:</strong> manufacturing defects, dead pixels appearing post-repair, backlight bleed, eDP cable failure, hinge alignment.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">Not covered:</strong> new physical damage, liquid damage after repair, software issues unrelated to the display.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">How to claim:</strong> WhatsApp the warranty card photo to {NAP.phoneDisplay}. Same-day collection, free of charge. Replacement panel fitted within 48 hours.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">Transferable:</strong> once, free of charge, if the MacBook is sold within the warranty period.</span></li>
            </ul>
          </Card>
        </section>

        {/* ── Pricing recap + CTA ────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Transparent pricing" title="MacBook screen repair cost in Dubai" intro="No hidden fees. The price quoted on WhatsApp is the price paid on collection - see the full per-model price list above. No diagnostic fee, no adhesive surcharge, no VAT add-on." />
            <p className="text-[14px] text-on-primary-faint mono max-w-[78ch]">
              All prices in AED, VAT inclusive. Payment on collection - cash, Visa, Mastercard, Apple Pay, Samsung Pay, or bank transfer to Emirates NBD.
            </p>

            <div className="mt-2xl relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-xl md:p-2xl">
              <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
              <div className="relative flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="m-0 mono text-[12px] uppercase tracking-wider text-accent-bright mb-2">MacBook Screen Repair · Same day · 1-2 days</p>
                  <h3 className="m-0 text-on-primary text-[24px] md:text-[26px]">Get your screen quote in 4 minutes</h3>
                  <p className="m-0 mt-2 text-on-primary-muted text-[15px]">Starting from <strong className="text-on-primary">AED 780</strong>. WhatsApp the model + a photo of the damage.</p>
                </div>
                <CtaRow whatsappMessage="Hi Shafiq, MacBook screen repair quote please. Model: " />
              </div>
            </div>
          </div>
        </section>

        {/* ── Technician ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Who does the work" title="Lead technician on screen jobs" />
          <Card>
            <div className="flex flex-wrap items-center gap-lg">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-bright/15 font-heading text-[20px] font-bold text-accent-bright">SA</span>
              <div>
                <p className="m-0 font-semibold text-on-primary text-[18px]">Shafiq Ahmed</p>
                <p className="m-0 text-[13.5px] text-on-primary-faint">21 years experience · Display &amp; logic board</p>
              </div>
            </div>
            <p className="mt-md text-[14px] text-on-primary-muted leading-relaxed max-w-[78ch]">
              Shafiq founded the workshop on 10 October 2004. Personally fits 60% of MacBook screens at the bench and signs the QC checklist on every job.
            </p>
          </Card>
        </section>

        {/* ── DIY ────────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Save a trip - or don't" title="When DIY makes sense - and when it doesn't" />
            <div className="grid gap-lg md:grid-cols-2">
              <Card className="border-accent-bright/30 bg-accent-bright/[0.06]">
                <h3 className="m-0 mb-md text-on-primary text-[18px] font-bold">Try it yourself first</h3>
                <ul className="space-y-2.5 text-[14px] text-on-primary-muted list-none p-0 m-0">
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> SMC reset (Shift + Ctrl + Option + power for 10 seconds) - fixes ~5% of "no display" cases.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> NVRAM reset (Cmd + Option + P + R during boot) - fixes brightness lockouts.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Plug in an external monitor - confirms whether the issue is panel-side or board-side.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Boot in Safe Mode (hold Shift on Intel, hold power on Apple Silicon) - rules out kernel extension issues.</li>
                </ul>
              </Card>
              <Card>
                <h3 className="m-0 mb-md text-on-primary text-[18px] font-bold">Stop and bring it in</h3>
                <ul className="space-y-2.5 text-[14px] text-on-primary-muted list-none p-0 m-0">
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Cracked glass on bonded LCD - opening the lid wider can split the panel further.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Backlight bleed appearing after a drop - likely a hairline panel crack that will spread.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Liquid spill that hit the display - corrosion needs ultrasonic cleaning within 24 hours.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Pink lines or stage-light effect (Flexgate) - repeated lid open/close accelerates the cable failure.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Comparison ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Side by side" title="MacBook Screen Repair vs Apple Store Dubai" />
          <Reveal className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
            <table className="w-full border-collapse text-left text-[14px] min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-accent-bright">
                  <th className="px-md py-md font-semibold">Factor</th>
                  <th className="px-md py-md font-semibold">MacBook Repair Dubai</th>
                  <th className="px-md py-md font-semibold">Apple Store / AASP</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row[0]} className="border-b border-white/10 last:border-0 align-top">
                    <td className="px-md py-sm font-semibold text-on-primary">{row[0]}</td>
                    <td className="px-md py-sm text-on-primary">{row[1]}</td>
                    <td className="px-md py-sm text-on-primary-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-md text-[13px] text-on-primary-faint mono max-w-[80ch]">
            Apple list pricing from apple.com/ae/shop/mac/repair, retrieved April 2026. Comparison shown for transparency - Apple offers an excellent service backed by AppleCare; the workshop is the right fit when the device is out of warranty, the model is vintage/obsolete, or the customer needs same-day turnaround.
          </p>
        </section>

        {/* ── Reviews ────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl flex items-end justify-between gap-md flex-wrap">
              <div>
                <p className="mono text-[12px] uppercase tracking-wider text-accent-bright mb-3">{REVIEW_AVERAGE.toFixed(1)} average · Google verified</p>
                <h2 className="m-0 text-on-primary">Real screen-repair reviews</h2>
              </div>
              <Link to="/reviews" className="text-[15px] font-semibold text-accent-bright hover:underline inline-flex items-center gap-1">All {REVIEW_COUNT}+ reviews <ArrowRight size={15} aria-hidden /></Link>
            </div>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-lg">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-on-primary">{r.name}</span>
                    <span className="flex" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} className="fill-star text-star" />)}</span>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-on-primary-muted m-0 flex-1">“{r.text}”</p>
                  <p className="mt-md mb-0 text-[12px] text-on-primary-faint">{r.date} · Google review</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage(FAQS)) }} />
          <SectionHead eyebrow="Before you ask" title="MacBook screen repair FAQ" />
          <ul className="grid md:grid-cols-2 md:gap-x-2xl border-t border-white/10 list-none p-0 m-0">
            {FAQS.map((f, i) => (
              <li key={i} className="border-b border-white/10">
                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-md py-md list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[16px] md:text-[17px] font-semibold text-on-primary">{f.q}</span>
                    <ChevronDown size={18} className="mt-1 shrink-0 text-accent-bright transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="pb-md text-[15px] leading-relaxed text-on-primary-muted max-w-[70ch] m-0">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Related ────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Often booked together" title="Related MacBook repairs" />
            <div className="grid gap-lg md:grid-cols-3">
              {RELATED.map((r) => (
                <Link key={r.href} to={r.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent-bright/40 hover:bg-white/[0.07]">
                  <h3 className="m-0 mb-1 text-on-primary text-[17px] group-hover:text-accent-bright">{r.label}</h3>
                  <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Free pickup across the city" title="Where to bring your MacBook" />
          <div className="grid gap-lg md:grid-cols-2 items-stretch">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe src={MAPS_EMBED} title={`Map to ${NAP.name}`} width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full h-[320px] border-0" />
            </div>
            <div className="flex flex-col gap-md">
              <h3 className="m-0 text-on-primary">Find us in Media City</h3>
              <p className="flex items-start gap-sm text-[15px] text-on-primary-muted m-0"><MapPin size={18} className="text-accent-bright mt-1 shrink-0" aria-hidden /><span>{NAP.street}<br />{NAP.area}<br />{NAP.city}, UAE</span></p>
              <p className="flex items-start gap-sm text-[14px] text-on-primary-faint m-0"><ParkingCircle size={18} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Paid parking on-site and nearby. Across from Media City Metro.</p>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent-bright hover:underline">Get directions <ExternalLink size={14} aria-hidden /></a>
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-white/10">
          <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/18 blur-3xl" />
          <div className="relative mx-auto max-w-content px-5 md:px-6 py-4xl text-center">
            <h2 className="text-on-primary m-0 mb-md max-w-[28ch] mx-auto">Cracked screen? WhatsApp the model - quote in 4 minutes</h2>
            <p className="text-on-primary-muted max-w-[60ch] mx-auto mb-xl text-[17px]">
              Year, screen size, processor, photo of the damage. Free pickup across Dubai mainland. 90-day written warranty on every panel fitted.
            </p>
            <div className="flex flex-wrap justify-center gap-sm">
              <Button asChild variant="whatsapp" size="lg"><a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> Message on WhatsApp</a></Button>
              <Button asChild size="lg" variant="secondary" className="bg-white"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> {NAP.phoneDisplay}</a></Button>
            </div>
          </div>
        </section>
      </div>
        <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
      <h2 className="text-[28px] md:text-[32px] mb-md text-on-primary">Get your free repair quote</h2>
      <p className="text-[15px] text-on-primary-muted mb-lg max-w-[60ch]">Two quick steps — your device, then how to reach you. Free diagnosis, written quote, 90-day warranty.</p>
      <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-screen-repair-dubai" />
    </section>
    <RelatedArticles path="/macbook-screen-repair-dubai" />
    </PageShell>
  );
}

/* ── local helpers (dark) ──────────────────────────────────── */
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-white/10 bg-white/[0.04] p-lg ${className}`}>{children}</div>;
}

function SectionHead({ eyebrow, title, intro, icon }: { eyebrow: string; title: string; intro?: string; icon?: ReactNode }) {
  return (
    <div className="mb-2xl max-w-[64ch]">
      <Reveal as="p" className="mono text-[12px] uppercase tracking-wider text-accent-bright mb-3">{eyebrow}</Reveal>
      <Reveal as="h2" className="m-0 text-on-primary flex items-center gap-sm">{icon}{title}</Reveal>
      {intro && <Reveal as="p" className="mt-md text-[17px] text-on-primary-muted leading-relaxed">{intro}</Reveal>}
    </div>
  );
}

function CtaRow({ whatsappMessage }: { whatsappMessage?: string }) {
  const href = whatsappMessage ? `${NAP.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}` : NAP.whatsappUrl;
  return (
    <div className="flex flex-wrap gap-sm shrink-0">
      <Button asChild variant="whatsapp" size="lg"><a href={href} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a></Button>
      <Button asChild size="lg" variant="secondary" className="border border-white/20 bg-white/[0.06] text-on-primary hover:bg-white/10"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a></Button>
    </div>
  );
}

function PriceTable({ rows }: { rows: PricingRow[] }) {
  return (
    <Reveal className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
      <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
        <thead>
          <tr className="border-b border-white/10 text-accent-bright">
            <th className="px-lg py-md font-semibold">MacBook model</th>
            <th className="px-lg py-md font-semibold whitespace-nowrap">Screen replacement</th>
            <th className="px-lg py-md font-semibold">Turnaround</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.model} className="border-b border-white/10 last:border-0">
              <td className="px-lg py-sm font-medium text-on-primary">{r.model}</td>
              <td className="px-lg py-sm mono whitespace-nowrap text-accent-bright font-semibold">{aed(r.price)}</td>
              <td className="px-lg py-sm text-on-primary-muted">{r.timeline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
