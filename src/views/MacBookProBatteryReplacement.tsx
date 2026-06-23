"use client";
// MacBook Pro Battery Replacement — Pro-only spoke under /macbook-battery-replacement-dubai.
// Differentiates on Pro-only battery realities the generic page can't dwell on: larger 70-100Wh
// packs (the 16" hits the 100Wh air-travel ceiling), faster cycle wear under sustained pro
// workloads, 16" heat aging, MagSafe 3 fast-charge (96W/140W) and the 2019 Intel 16". Same dark
// design system + component API as MacBookBatteryReplacement.tsx so it reads as a sibling.
import { type ReactNode } from "react";
import {
  Battery, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star,
  Check, MapPin, ExternalLink, ParkingCircle, ArrowRight,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Reveal } from "@/components/blocks/Reveal";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";

type PricingRow = { model: string; price: number; timeline: string };

// Pro-only pricing — mirrors the Pro rows in the generic battery page (AED 500/600) so the two
// pages never quote different numbers for the same pack.
const PRICING: PricingRow[] = [
  { model: 'MacBook Pro 13" Retina (2012-2015)',          price: 500, timeline: "Same day · 2 hours" },
  { model: 'MacBook Pro 13" Touch Bar (2016-2022)',       price: 500, timeline: "Same day · 2 hours" },
  { model: 'MacBook Pro 15" Retina (2012-2019)',          price: 600, timeline: "Same day · 2 hours" },
  { model: 'MacBook Pro 16" Intel (2019, A2141)',         price: 600, timeline: "Same day · 2 hours" },
  { model: 'MacBook Pro 14" M1/M2/M3/M4 Pro/Max',         price: 600, timeline: "Same day · 2 hours" },
  { model: 'MacBook Pro 16" M1/M2/M3/M4 Pro/Max',         price: 600, timeline: "Same day · 2 hours" },
  { model: 'MacBook Pro 14"/16" M5 (2025-2026)',          price: 650, timeline: "Same day · 2 hours" },
];

const PROBLEMS = [
  { title: '"Service Recommended" on a 14"/16" Pro',
    body: "Battery health under 80% or cycle count over 1,000, shown in System Settings > Battery > Battery Health. Pro machines reach this faster than an Air because sustained CPU/GPU load runs more full cycles. Replace before the count crosses ~1,200 to avoid swelling. AED 600." },
  { title: "Battery swelling — trackpad lifts or case bulges",
    body: 'Critical, and more common on the larger 16" 100Wh pack. The trackpad clicks oddly or the bottom case bows. Stop using it immediately — a swollen lithium pack is a fire risk and can crack the trackpad (extra AED 350 if it breaks). WhatsApp same hour for free pickup.' },
  { title: "Heavy workload wear — battery aged in 18 months",
    body: 'Video editing, Xcode builds and 3D work keep a Pro near 100% load, which runs full charge cycles fast and runs the pack hot. A 16" used for sustained rendering can cross 1,000 cycles inside two years. A new tier-1 pack restores full runtime, AED 600.' },
  { title: "Runs hot then throttles, runtime collapsed",
    body: 'Heat is the battery killer on the 16". A pack that gets warm at idle has an internal short and is also throttling the M-series chip — both runtime and performance recover after the swap. Bring it in before it swells.' },
  { title: "MagSafe 3 fast-charge no longer holds charge",
    body: "The 14\" (96W) and 16\" (140W) fast-charge over MagSafe 3 (USB-C PD 3.1). If it charges to ~80% then stops, or shows \"Not Charging\", it is usually battery end-of-life or the charge IC — free diagnosis tells which. Pack swap AED 600." },
  { title: "Sudden shutdowns at 30-40% on a Touch Bar Pro",
    body: "PMIC misreads the voltages of a worn or swollen cell on the 2016-2020 13\"/15\" Touch Bar models. Battery replacement clears it; if shutdowns persist after the swap it points to a logic-board PMIC fault, diagnosed free the same visit." },
  { title: '2019 16" Intel (A2141) battery and heat',
    body: 'The 2019 16" Intel runs a 100Wh pack and a hot 9th-gen CPU; batteries here degrade faster than the Apple-silicon 16". We fit a tier-1 100Wh replacement, AED 600, and check the thermal paste/fans at the same time on request.' },
  { title: "Only runs on the charger — won't power on without it",
    body: "The pack has reached 0 V and the protection circuit has latched off. AED 500 to AED 600 swap solves it; the MagSafe 3 / USB-C charge board is checked free in case the charging circuit is also damaged." },
  { title: "Battery health stuck at 100% but runtime gone",
    body: "Firmware quirk on macOS Sonoma/Sequoia. On Apple-silicon Pros a bench re-calibration cycle (charge full, run flat under load, charge full) corrects the reading — 4 hours, no charge if no new pack is needed." },
];

const STEPS = [
  { title: "WhatsApp the Battery Health screenshot",
    body: "Open System Settings > Battery > Battery Health and send the screenshot, plus the model (14\"/16\", chip, year). Reply in 4-8 minutes with the confirmed price and a 2-hour booking slot." },
  { title: "Drop off or free pickup",
    body: "Walk in to Office #45, Concord Tower, Media City, or book a free pickup anywhere in Dubai mainland. Same-hour pickup from Internet City and JLT." },
  { title: "Bench diagnosis — 15 minutes",
    body: "SMC/PMIC voltages checked, MagSafe 3 / USB-C charge board verified, cycle count and design capacity logged. Confirms whether the pack alone needs replacing or the charge circuit too." },
  { title: "Pack removal + cell swap — 60 minutes",
    body: 'Bottom case off, adhesive softened with isopropyl 99%, old cells lifted, tier-1 replacement seated. On the larger 16" pack the cells are bonded over the trackpad ribbon, so this is done under the microscope.' },
  { title: "BMS re-pair + 4-hour calibration",
    body: "On Apple-silicon Pros the BMS firmware is re-paired to the logic board, then a full calibration cycle runs so macOS reads the new design capacity correctly. Final report shown on collection." },
  { title: "Free delivery + 3-month warranty card",
    body: "Delivered back same day. Warranty card lists the cell batch number and expected cycle life — 3 months on cells, plus an 80% capacity guarantee for the same period." },
];

const FAQS: FAQ[] = [
  { q: "How much does MacBook Pro battery replacement cost in Dubai?",
    a: 'From AED 500 for the 13" Retina and Touch Bar Pro, and AED 600 for the 14", 15" and 16" (Intel and Apple Silicon). The 2025-2026 M5 is AED 650. The price includes the new tier-1 pack, labour, BMS firmware re-pair and the 4-hour calibration cycle. No diagnostic fee.' },
  { q: "Why does my MacBook Pro battery wear out faster than a MacBook Air?",
    a: "Because Pro workloads run more full charge cycles and run the pack hotter. Video editing, Xcode builds and 3D rendering keep the CPU/GPU near full load, and heat is what ages lithium cells fastest — especially in the larger 16\". An Air doing email and web lasts 36-48 months; a Pro under sustained load can reach 1,000 cycles in 18-24." },
  { q: "How big is the MacBook Pro 16\" battery, and can I fly with it?",
    a: 'The 16" uses a ~100Wh pack — the maximum a lithium battery can be and still go in airline cabin baggage under IATA rules. The 14" is around 70Wh. We fit tier-1 cells with IATA shipping certificates and traceable batch numbers, the same spec the original carried.' },
  { q: "Does MagSafe 3 fast charging damage the battery?",
    a: 'No — fast charging (96W on the 14", 140W on the 16" via USB-C PD 3.1) is managed by the charge IC and macOS Optimised Battery Charging, which limits heat and holds at 80% until you need 100%. Normal cycle wear, not fast charge, is what ages the pack. Leaving Optimised Charging on is the single best way to extend Pro battery life in Dubai heat.' },
  { q: "Do you replace M1, M2, M3, M4 and M5 Pro batteries?",
    a: 'Yes — every Apple-silicon Pro pack is in active stock, including the M3 Pro 14" and M4 Pro 16". Apple-silicon batteries are BMS-firmware re-paired to the logic board on the bench after the swap. Same-day, AED 600 (AED 650 on the M5).' },
  { q: "My MacBook Pro battery is swollen — what do I do?",
    a: "Stop using it immediately. Don't charge it or try to power it on. Lithium swelling is a fire risk and on a Pro can crack the trackpad assembly (extra AED 350 if it breaks). WhatsApp 055 741 3706 same hour — free emergency pickup across Dubai mainland." },
  { q: "What's the warranty on a new MacBook Pro battery?",
    a: "3 months written warranty on cells plus an 80% capacity guarantee. If maximum capacity drops below 80% within 3 months at under 200 cycles, the pack is replaced free. The warranty stays with the MacBook serial and transfers once free of charge." },
  { q: "Will I lose my data during a Pro battery swap?",
    a: "No. The SSD is soldered to the logic board and is untouched during a battery replacement — files, apps, FileVault encryption all stay intact. A Time Machine backup before any service is still good practice." },
  { q: "Do you replace the 2019 16\" Intel and older Touch Bar Pro batteries Apple calls obsolete?",
    a: "Yes — every Pro back to the 2012 Retina is serviceable here. Apple stopped stocking some of these, but we carry tier-1 100Wh and Touch Bar packs from the original ATL/LG factories. AED 600 same day with the full 3-month warranty." },
  { q: "Do you offer free pickup for MacBook Pro battery service?",
    a: "Yes — free pickup and delivery anywhere in Dubai mainland. Same-hour from Internet City, Knowledge Village, JLT and Al Barsha; same-day from Marina, Downtown, JBR, Palm and Business Bay. Sharjah and Abu Dhabi pickup AED 100 each way." },
];

const COMPARISON = [
  ["Repair window",            "30 min (booked) · 2 hrs walk-in",          "5 to 10 business days, mail-in"],
  ['Starting price (14" Pro)',  "AED 600",                                  "AED 829 (Apple list)"],
  ['Starting price (16" Pro)',  "AED 600",                                  "AED 949 (Apple list)"],
  ["Free pickup in Dubai",     "Yes, same hour from many areas",           "No, customer must courier"],
  ['100Wh 16" pack in stock',   "Yes — tier-1, IATA certified",            "Order only"],
  ["Calibration cycle",        "Yes, 4 hours included",                    "Not specified"],
  ["Warranty",                 "3 months + 80% capacity guarantee",        "1 year (Apple)"],
  ["Vintage/obsolete Pros",    "Yes — 2012 Retina onward",                 "Refused on obsolete (pre-2017)"],
];

const TRUST = [
  { value: "5,200+", label: "Batteries fitted since 2004" },
  { value: "From AED 500", label: 'Pro 13" cells' },
  { value: "100Wh", label: '16" tier-1 in stock' },
  { value: "3 months", label: "Warranty + 80% capacity" },
];

const MAPS_EMBED = "https://www.google.com/maps?q=Concord+Tower+Dubai+Media+City&output=embed";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";

const aed = (n: number) => `AED ${n.toLocaleString()}`;

export default function MacBookProBatteryReplacement() {
  const reviews = pickReviews([
    "Theresa G.",
    "Henry Choong",
    "Jeanne Maingueux",
    "Magdalena Paluchowska",
    "Octavio Albiach",
    "Moaz Nabiel",
  ]);

  useSeo(
    {
      title: "MacBook Pro Battery Replacement Dubai — From AED 500",
      description:
        "MacBook Pro battery replacement Dubai from AED 500. Same-day 2-hour service. 14\"/16\" 100Wh, Intel & M1-M5, swelling, calibration. 3-month + 80% capacity warranty.",
      path: "/macbook-pro-battery-replacement-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Pro Battery Replacement Dubai",
        price: 500,
        timeline: "Same day · 2 hours",
        warranty: "P90D",
        url: "/macbook-pro-battery-replacement-dubai",
        description:
          "MacBook Pro battery replacement in Dubai. 13/14/15/16-inch, Intel and Apple Silicon, 70-100Wh tier-1 cells, BMS re-pair and calibration. 3-month warranty + 80% capacity guarantee.",
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
                <li><Link to="/macbook-battery-replacement-dubai" className="hover:text-accent">Battery Replacement</Link></li>
                <li aria-hidden>/</li>
                <li className="text-text-muted">MacBook Pro</li>
              </ol>
            </nav>

            <div className="grid gap-2xl md:grid-cols-12 items-start">
              <div className="md:col-span-7">
                <p className="m-0 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-[13px] font-medium text-text-muted">
                  <Battery size={14} className="text-accent" aria-hidden /> MacBook Pro battery replacement · Media City
                </p>
                <h1 className="mt-lg text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.01em] text-text">
                  MacBook Pro Battery Replacement Dubai — <span className="text-accent">From AED 500</span>
                </h1>
                <p className="mt-lg max-w-[64ch] text-[17px] leading-relaxed text-text-muted">
                  Service Recommended? Swollen 100Wh pack? Sudden shutdowns? New tier-1 cells for the 14″, 15″ and 16″ Pro — Intel through M5 — in 2 hours, 3-month warranty plus 80% capacity guarantee.
                </p>
                <div className="mt-xl flex flex-wrap gap-sm">
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Usman, MacBook Pro battery replacement quote please. Model: ")}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle aria-hidden /> Get a quote on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
                    <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
                  </Button>
                </div>
                <p className="mt-lg text-[12.5px] text-text-faint">
                  Updated June 2026 · Reviewed by Usman, Lead MacBook Technician
                </p>
              </div>

              <div className="md:col-span-5">
                <Reveal delay={120} className="overflow-hidden rounded-2xl border border-border shadow-lg">
                  <ResponsiveImage
                    src="/images/topics/macbook-battery-replacement-dubai.jpg"
                    alt="MacBook Pro battery replacement Dubai — 100Wh lithium pack removal and health diagnostics at our Media City workshop"
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 92vw, 420px"
                    imgClassName="w-full h-auto"
                    priority
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer, full-width directly under H1 */}
        <QuickAnswer tone="dark" {...deriveServiceQuickAnswer({ serviceName: "MacBook Pro battery replacement", startingPrice: 500, timeline: "about 2 hours, same-day" })} />

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
        <section className="mx-auto max-w-content px-5 md:px-6 py-xl">
          <LinkifyProse selfHref="/macbook-pro-battery-replacement-dubai"><p className="max-w-[78ch] text-[17px] leading-relaxed text-text-muted m-0">
            MacBook Pro battery replacement in Dubai costs from AED 500 and finishes in 2 hours on the bench — including the calibration cycle macOS needs to read the new design capacity. The Pro is a bigger job than an Air: the 14″ carries a ~70Wh pack and the 16″ a ~100Wh pack (the airline-cabin ceiling), and Pro workloads run more full cycles and more heat, so packs age faster. We fit tier-1 cells from Samsung SDI, LG Chem and ATL — the same factories that supply Apple — with BMS firmware re-pairing on Apple Silicon, a 4-hour calibration, and a 3-month warranty plus 80% capacity guarantee. Swollen pack? Stop using the MacBook and WhatsApp same hour for free emergency pickup. For Air or other models, see the <Link to="/macbook-battery-replacement-dubai" className="text-accent hover:underline">full MacBook battery replacement</Link> page.
          </p></LinkifyProse>
        </section>

        {/* ── Models + pricing ───────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="MacBook Pro models we replace batteries for" intro="Every MacBook Pro from the 2012 Retina through the 2026 M5 16″. Apple Silicon packs are BMS-paired to the logic board on the bench. Prices include cell, labour, calibration and the 3-month warranty." />
            <PriceTable rows={PRICING} />
            <p className="mt-md text-[13px] text-text-faint mono max-w-[72ch]">
              Bring-your-own-battery labour: AED 200 (only if the part is verified tier-1). Battery + trackpad swap if swelling cracked the trackpad: AED 900 combined.
            </p>
          </div>
        </section>

        {/* ── Common problems ────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            title="Common MacBook Pro battery problems we fix"
            intro="The highest-volume Pro battery tickets at the workshop — including the heat-driven, sustained-load wear the larger Pro packs are prone to. The first two are urgent: bring it in same day."
            icon={<AlertTriangle size={26} className="text-accent" aria-hidden />}
          />
          <div className="grid gap-lg md:grid-cols-2">
            {PROBLEMS.map((p, i) => (
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
              title="Our MacBook Pro battery replacement process"
              intro="Six steps from screenshot to delivery. The BMS re-pair and 4-hour calibration are what separate a proper Pro swap from a grey-market job."
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

        {/* ── Parts ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="What batteries we use — and which we refuse" />
          <div className="grid gap-lg md:grid-cols-2">
            <Card>
              <h3 className="m-0 mb-2 text-text text-[18px] font-bold">Tier-1 cells (what we fit)</h3>
              <p className="m-0 mb-sm text-[14px] text-text-muted leading-relaxed">Samsung SDI, LG Chem and ATL — the cell suppliers Apple uses — including the full 100Wh 16″ pack. Authorised distributors, traceable batch numbers, IATA shipping certificates. Cycle life: 1,000 cycles to 80%, matching the Apple rating.</p>
              <p className="m-0 mono text-[13px] text-accent">AED 500 to AED 650 — included in the quote</p>
            </Card>
            <Card>
              <h3 className="m-0 mb-2 text-text text-[18px] font-bold">Sub-spec grey market (what we refuse)</h3>
              <p className="m-0 mb-sm text-[14px] text-text-muted leading-relaxed">Re-wrapped or B-grade cells, no batch traceability, no IATA certification — especially risky in the high-energy 16″ 100Wh pack. Failure rate 40% within 6 months, 15% swelling within 12. We will not fit these even if a customer brings them.</p>
              <p className="m-0 mono text-[13px] text-text-faint">Refused — fire risk in 12+ month timeframe</p>
            </Card>
          </div>
          <p className="mt-md text-[14px] text-text-muted leading-relaxed max-w-[78ch]">
            Already bought a battery elsewhere? Bring it in — we inspect the cells and only fit it if the brand is verifiable (AED 200 labour). Around 20% of customer-supplied Pro packs fail inspection.
          </p>
        </section>

        {/* ── Warranty ───────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="Warranty" icon={<ShieldCheck size={26} className="text-accent" aria-hidden />} />
            <Card>
              <ul className="space-y-2.5 text-[15px] text-text-muted list-none p-0 m-0">
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">3 months</strong> — written warranty on cells and labour.</span></li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">80% capacity guarantee</strong> — if maximum capacity drops below 80% within 3 months at under 200 cycles, the pack is replaced free.</span></li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Covered:</strong> manufacturing defects, premature capacity loss, swelling, BMS firmware faults, sudden-shutdown returns.</span></li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Not covered:</strong> physical damage, liquid damage, charging from non-spec chargers above the model's rated wattage.</span></li>
                <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">How to claim:</strong> WhatsApp the warranty card photo. Free same-day collection. Replacement fitted within 24 hours.</span></li>
              </ul>
            </Card>
          </div>
        </section>

        {/* ── Mid-page CTA ───────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-xl md:p-2xl">
            <div className="relative flex flex-col gap-md md:flex-row md:items-center md:justify-between">
              <div>
                <p className="m-0 mono text-[12px] uppercase tracking-wider text-accent mb-2">MacBook Pro Battery Replacement · Same day · 2 hours</p>
                <h3 className="m-0 text-text text-[24px] md:text-[26px]">Get your Pro battery quote in 4 minutes</h3>
                <p className="m-0 mt-2 text-text-muted text-[15px]">Starting from <strong className="text-text">AED 500</strong>. WhatsApp the model + the Battery Health screenshot.</p>
              </div>
              <CtaRow whatsappMessage="Hi Usman, MacBook Pro battery replacement quote please. Model: " />
            </div>
          </div>
        </section>

        {/* ── Comparison ─────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="MacBook Pro Battery Replacement vs Apple Store Dubai" />
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
              Apple list pricing from apple.com/ae/shop/mac/repair, retrieved June 2026. We are an independent Apple specialist, not an Apple Authorised Service Provider.
            </p>
          </div>
        </section>

        {/* ── Reviews ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
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
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="MacBook Pro battery replacement FAQ" />
            <FAQAccordion items={FAQS} injectSchema tone="dark" />
          </div>
        </section>

        {/* ── Related ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Related MacBook Pro repairs" />
          <div className="grid gap-lg md:grid-cols-3">
            {[
              { label: "MacBook battery replacement (all models)", href: "/macbook-battery-replacement-dubai", description: "The full MacBook battery service — Air, Pro and Intel, from AED 450." },
              { label: "MacBook Pro repair Dubai",                 href: "/macbook-pro-repair-dubai",          description: "Every MacBook Pro repair: screen, board, keyboard, water damage." },
              { label: "MacBook Pro screen repair",                href: "/macbook-pro-screen-repair-dubai",   description: "XDR mini-LED, ProMotion, Flexgate and OLED panels from AED 600." },
            ].map((r) => (
              <Link key={r.href} to={r.href} className="group rounded-2xl border border-border bg-bg-card p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                <h3 className="m-0 mb-1 text-text text-[17px] group-hover:text-accent">{r.label}</h3>
                <p className="m-0 text-[14px] text-text-muted leading-relaxed">{r.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Location ───────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="Where to bring your MacBook Pro" />
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
          </div>
        </section>

        {/* ── Lead Form ──────────────────────────────────────────── */}
        <section id="quote" className="mx-auto max-w-content px-5 md:px-6 py-2xl scroll-mt-24">
          <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free repair quote</h2>
          <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps, your device, then how to reach you. Free diagnosis, written quote, 3-month battery warranty plus 80% capacity guarantee.</p>
          <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-pro-battery-replacement-dubai" />
        </section>

        {/* ── Related Articles ───────────────────────────────────── */}
        <RelatedArticles path="/macbook-pro-battery-replacement-dubai" />

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-border">
          <div className="relative mx-auto max-w-content px-5 md:px-6 py-2xl text-center">
            <h2 className="text-text m-0 mb-md max-w-[30ch] mx-auto">Pro battery under 80%? Send the screenshot — quote in 4 minutes</h2>
            <p className="text-text-muted max-w-[60ch] mx-auto mb-xl text-[17px]">
              Battery Health screenshot + serial on WhatsApp. 2-hour bench time, free pickup, 3-month warranty plus 80% capacity guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-sm">
              <Button asChild variant="whatsapp" size="lg"><a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> Message on WhatsApp</a></Button>
              <Button asChild size="lg" variant="secondary" className="bg-white"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> {NAP.phoneDisplay}</a></Button>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

/* ── local helpers (dark) ──────────────────────────────────── */
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-bg-card p-lg ${className}`}>{children}</div>;
}

function SectionHead({ title, intro, icon }: { title: string; intro?: string; icon?: ReactNode }) {
  return (
    <div className="mb-2xl max-w-[64ch]">
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
            <th className="px-lg py-md font-semibold whitespace-nowrap">Battery replacement</th>
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
