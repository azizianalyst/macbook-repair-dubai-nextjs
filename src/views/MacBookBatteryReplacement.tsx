"use client";
// MacBook Battery Replacement - re-skinned in the dark theme to match the screen
// repair page (the canonical dark design). All content, pricing, problems,
// process, parts, warranty, comparison, reviews and FAQs are preserved verbatim;
// only the presentation moved to the dark design system (bg-primary band, glass
// cards, accent-bright). SEO/schema kept identical so rankings transfer.
import { type ReactNode } from "react";
import {
  Battery, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star,
  Check, Clock, MapPin, ExternalLink, ParkingCircle, ArrowRight,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Reveal } from "@/components/blocks/Reveal";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";

type PricingRow = { model: string; price: number; timeline: string };

const PRICING: PricingRow[] = [
  { model: "MacBook Air 11\" / 13\" (2010-2017)",  price: 450, timeline: "Same day · 2 hours" },
  { model: "MacBook Air 13\" / 15\" M1/M2/M3",     price: 450, timeline: "Same day · 2 hours" },
  { model: "MacBook Pro 13\" Retina (2012-2015)",  price: 500, timeline: "Same day · 2 hours" },
  { model: "MacBook Pro 13\" Touch Bar (2016-22)", price: 500, timeline: "Same day · 2 hours" },
  { model: "MacBook Pro 14\" M1/M2/M3/M4 Pro/Max", price: 600, timeline: "Same day · 2 hours" },
  { model: "MacBook Pro 15\" Retina (2012-2019)",  price: 600, timeline: "Same day · 2 hours" },
  { model: "MacBook Pro 16\" M1/M2/M3/M4 Pro/Max", price: 600, timeline: "Same day · 2 hours" },
  { model: "MacBook 12\" Retina (2015-2017)",      price: 550, timeline: "Same day · 3 hours" },
];

const PROBLEMS = [
  { title: "\"Service Recommended\" warning in macOS",
    body: "Battery health below 80% or cycle count over 1,000. macOS shows the warning under System Settings > Battery > Battery Health. Battery still works but holds 60-80% of original capacity. Replace before the cycle count crosses 1,200 to avoid swelling." },
  { title: "Battery swelling - trackpad lifts off the case",
    body: "Critical. The trackpad clicks weirdly or the bottom case bulges. Stop using the MacBook immediately - a swollen lithium pack is a fire risk and can crack the trackpad assembly (extra AED 350 if it breaks). WhatsApp same hour for free pickup." },
  { title: "Sudden shutdowns at 30-40% remaining",
    body: "PMIC cannot read the swollen cell voltages correctly. Battery replacement clears it. If shutdowns continue after the swap, that points to a logic-board PMIC issue - diagnosed free during the same visit." },
  { title: "MacBook only runs on charger - won't power on without it",
    body: "Battery has reached 0 voltage and the protection circuit has latched off. AED 450 to AED 600 battery swap solves it. The DC-in board is checked free in case the charging circuit is also damaged." },
  { title: "Battery drains overnight in sleep",
    body: "Cell self-discharge from age. Anything over 1.5% drain per hour in sleep means the battery is end-of-life. New cells lose less than 0.3% per hour at the same firmware version." },
  { title: "Cycle count over 1,000 on M1/M2 MacBook Air",
    body: "Apple rates Apple Silicon batteries for 1,000 cycles to 80% capacity. Many M1/M2 MacBook Airs cross 1,000 cycles within 24 months of heavy use. AED 450 swap restores full runtime." },
  { title: "Battery health stuck at 100% but runtime collapsed",
    body: "Firmware bug on macOS Ventura/Sonoma. SMC reset clears it on Intel Macs, free of charge. On Apple Silicon a battery health re-calibration cycle is run on the bench - 4 hours, no charge." },
  { title: "Charger plugs in but no charge LED, no charging",
    body: "DC-in board failure on 80% of cases, swollen battery on 20%. Free diagnosis confirms which. AED 350 DC-in board swap or AED 450-600 battery swap." },
  { title: "Hot battery - case warm to touch in idle",
    body: "Internal short in the cells. Replace before it swells further. The hot battery is also throttling the CPU - runtime and performance both improve after the swap." },
  { title: "Battery is original (8+ years old) on 2015-2017 Air or Pro",
    body: "Apple lists these as obsolete. The workshop carries new cells for every Air and Pro back to 2010. AED 450 to AED 600 swap, same day, with the 6-month warranty applied." },
];

const STEPS = [
  { title: "WhatsApp battery health screenshot",
    body: "Open System Settings > Battery > Battery Health. Send the screenshot. Reply within 4-8 minutes during business hours with confirmed price and 2-hour booking slot." },
  { title: "Drop off or free pickup",
    body: "Walk in to Office #45, Concord Tower, Media City, or book a free pickup from anywhere in Dubai mainland. Same-hour pickup from Internet City and JLT." },
  { title: "Bench diagnosis - 15 minutes",
    body: "SMC voltages checked, DC-in board verified, cycle count and design capacity logged on the work order. Confirms whether battery alone needs replacement or charging circuit too." },
  { title: "Battery removal + cell swap - 60 minutes",
    body: "Bottom case off, battery adhesive softened with isopropyl 99%, old cells lifted, replacement seated, BMS firmware re-paired to the logic board on Apple Silicon." },
  { title: "4-hour calibration cycle",
    body: "Charge to 100%, run battery flat under controlled load, charge to 100% again. macOS Battery Health re-reads design capacity. Final report shown to you on collection." },
  { title: "Free delivery + 6-month warranty card",
    body: "Delivered back same day. Warranty card lists the cell batch number and expected cycle life. Battery warranty: 6 months on cells, 80% capacity guarantee for the same period." },
];

const FAQS: FAQ[] = [
  { q: "How much does MacBook battery replacement cost in Dubai?",
    a: "From AED 450 for MacBook Air 11\", 13\", and 15\" (Intel and Apple Silicon). AED 500 for MacBook Pro 13\". AED 600 for MacBook Pro 14\", 15\", and 16\". The price includes the new battery, labour, BMS firmware re-pair, and the 4-hour calibration cycle. No diagnostic fee." },
  { q: "How long does a MacBook battery replacement take?",
    a: "About 2 hours total - 60 minutes on the bench plus a 60-minute calibration. If you wait at the workshop, the MacBook is ready in 2 hours. With pickup and delivery the same-day turnaround is typically 4 to 6 hours from collection." },
  { q: "How do I check my MacBook battery health?",
    a: "On macOS Ventura and later: System Settings > Battery > Battery Health > Information (i). Look at \"Maximum Capacity\" (should be above 80%) and \"Cycle Count\" (Apple rates Apple Silicon for 1,000 cycles, Intel for 1,000 on most models, 500 on older Airs). On Intel Macs you can also hold Option and click the battery icon in the menu bar." },
  { q: "How many charge cycles does a MacBook battery last?",
    a: "Apple rates current MacBooks (2017+) for 1,000 cycles to 80% capacity. Heavy users (web dev, video editing) hit 1,000 cycles in 18-24 months. Light office use easily reaches 36-48 months. After 1,000 cycles the battery still works but runtime drops noticeably and Service Recommended starts appearing." },
  { q: "Do you replace M1, M2, M3, M4, and M5 MacBook batteries?",
    a: "Yes - every Apple Silicon MacBook battery is in active stock, including the M3 Pro 14\" and M4 Pro 16\". Apple Silicon batteries need BMS firmware re-pairing to the logic board after the swap, which the workshop does on the bench. Same-day, AED 450 (Air) or AED 600 (Pro 14\"/16\")." },
  { q: "Why don't you recommend cheap batteries under AED 200?",
    a: "Sub-AED-200 batteries on AliExpress and the Dragon Mart grey market typically use B-grade cells with 30% lower energy density and 2x faster wear. The workshop has seen 40% of these fail within 6 months and 15% swell within 12 months. The AED 450 cells used here are tier-1 (Samsung SDI, LG Chem, ATL) with traceable batch numbers." },
  { q: "What's the warranty on a new MacBook battery?",
    a: "6 months written warranty on cells, plus an 80% capacity guarantee. If maximum capacity drops below 80% within 6 months of the swap (and cycle count is under 200), the battery is replaced free of charge. The warranty stays with the MacBook serial number - transferable once free of charge." },
  { q: "My battery is swollen - what do I do?",
    a: "Stop using the MacBook immediately. Don't charge it, don't try to power it on. Lithium swelling is a fire risk and can crack the trackpad assembly (additional AED 350 if it breaks). WhatsApp 055 741 3706 same hour - free emergency pickup across Dubai mainland." },
  { q: "Will I lose my data during a battery swap?",
    a: "No. The SSD is on the logic board, untouched during a battery replacement. Files, apps, settings, FileVault encryption - all stay intact. The workshop still recommends a Time Machine backup before any service, just as a habit." },
  { q: "Do you replace MacBook Air 2017 and earlier batteries that Apple calls obsolete?",
    a: "Yes - every MacBook back to the 2010 Air is serviceable here. Apple stopped stocking parts for these models, but the workshop carries new cells from the original ATL and LG factories that built the Apple parts. AED 450 same-day with the same 6-month warranty as a current model." },
  { q: "Can I replace the battery myself?",
    a: "Technically yes on 2008-2012 unibody MacBooks with screw-in batteries - iFixit sells kits at AED 200-400. From 2013 onward Apple glued the cells to the case, requiring isopropyl 99%, a heat gun, and 60+ minutes of careful work. DIY swaps that go wrong cost more to recover than the original AED 450 service. The workshop's labour-only swap if you bring your own (verified) battery is AED 200." },
  { q: "Do you offer free pickup for battery service?",
    a: "Yes, free pickup and delivery anywhere in Dubai mainland. Same-hour pickup from Internet City, Knowledge Village, JLT, Al Barsha. Same-day from Marina, Downtown, JBR, Palm, Business Bay. Sharjah and Abu Dhabi pickup AED 100 each way." },
];

const COMPARISON = [
  ["Repair window",          "Same day, 2 hours bench time",                "5 to 10 business days, mail-in"],
  ["Starting price (Air)",   "AED 450",                                      "AED 549 (Apple list)"],
  ["Starting price (Pro 14)","AED 600",                                      "AED 829 (Apple list)"],
  ["Starting price (Pro 16)","AED 600",                                      "AED 949 (Apple list)"],
  ["Free pickup in Dubai",   "Yes, same hour from many areas",               "No, customer must courier"],
  ["Calibration cycle",      "Yes, 4 hours included",                        "Not specified"],
  ["Warranty",               "6 months + 80% capacity guarantee",            "1 year (Apple)"],
  ["Vintage/obsolete models","Yes - 2010 onwards",                            "Refused on obsolete (pre-2017)"],
  ["BYO battery labour",     "AED 200 if part is verified",                  "Refused"],
];

const TRUST = [
  { value: "5,200+", label: "Batteries fitted since 2004" },
  { value: "From AED 450", label: "Air 11-15\" cells" },
  { value: "2 hours", label: "Same-day bench time" },
  { value: "6 months", label: "Warranty + 80% capacity" },
];

const MAPS_EMBED = "https://www.google.com/maps?q=Concord+Tower+Dubai+Media+City&output=embed";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";

const aed = (n: number) => `AED ${n.toLocaleString()}`;

export default function MacBookBatteryReplacement() {
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
      title: "MacBook Battery Replacement Dubai - From AED 450",
      description:
        "MacBook battery replacement Dubai from AED 450. Same-day 2-hour service. Air, Pro 13\"/14\"/16\". M1-M5. 6-month warranty + 80% capacity guarantee. 055 741 3706.",
      path: "/macbook-battery-replacement-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Battery Replacement Dubai",
        price: 450,
        timeline: "Same day · 2 hours",
        warranty: "P180D",
        url: "/macbook-battery-replacement-dubai",
        description:
          "MacBook battery replacement in Dubai. Air, Pro 13/14/16, Intel and Apple Silicon. Genuine ATL/LG/Samsung cells. 6-month warranty + 80% capacity guarantee.",
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
                <li className="text-on-primary-muted">Battery Replacement</li>
              </ol>
            </nav>

            <div className="grid gap-2xl md:grid-cols-12 items-start">
              <div className="md:col-span-7">
                <p className="m-0 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-on-primary-muted">
                  <Battery size={14} className="text-accent-bright" aria-hidden /> MacBook battery replacement · Media City
                </p>
                <h1 className="mt-lg text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.01em] text-on-primary">
                  MacBook Battery Replacement Dubai
                </h1>
                <p className="mt-lg max-w-[64ch] text-[17px] leading-relaxed text-on-primary-muted">
                  Service Recommended? Swollen pack? Sudden shutdowns? New tier-1 cells in 2 hours, 6-month warranty plus 80% capacity guarantee.
                </p>
                <div className="mt-xl flex flex-wrap gap-sm">
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Usman, MacBook battery replacement quote please. Model: ")}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle aria-hidden /> Get a quote on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="border border-white/20 bg-white/[0.06] text-on-primary hover:bg-white/10">
                    <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
                  </Button>
                </div>
                <p className="mt-lg text-[12.5px] text-on-primary-faint">
                  Reviewed by Usman, Lead MacBook Technician
                </p>
              </div>

              {/* glass info card */}
              <div className="md:col-span-5">
                <Reveal delay={120} className="rounded-2xl border border-white/10 bg-white/[0.05] p-lg shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-bright"><Battery size={22} aria-hidden /></span>
                      <div>
                        <p className="m-0 font-semibold leading-tight text-on-primary">Battery Replacement</p>
                        <p className="m-0 text-[12px] text-on-primary-faint">tier-1 cells · BMS re-pair</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-bright/30 bg-accent-bright/10 px-2.5 py-1 text-[12px] font-medium text-accent-bright">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" aria-hidden /> Online
                    </span>
                  </div>
                  <ul className="mt-lg space-y-2.5 list-none p-0 border-t border-white/10 pt-md">
                    {[["Starting price", "AED 450"], ["Turnaround", "Same day · 2 hours"], ["Warranty", "6 months + 80%"], ["Diagnosis", "FREE"]].map(([k, v]) => (
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
          <LinkifyProse selfHref="/macbook-battery-replacement-dubai"><p className="max-w-[78ch] text-[17px] leading-relaxed text-on-primary-muted m-0">
            MacBook battery replacement in Dubai costs from AED 450 and finishes in 2 hours on the bench - including the 60-minute calibration cycle that macOS needs to read the new design capacity correctly. The workshop has fitted 5,200+ MacBook batteries since 2004. Tier-1 cells from Samsung SDI, LG Chem, and ATL - the same factories that supply Apple - fitted with BMS firmware re-pairing on Apple Silicon. 6-month warranty plus an 80% capacity guarantee for the same period. Swollen battery? Stop using the MacBook and WhatsApp same hour - free emergency pickup across Dubai mainland.
          </p></LinkifyProse>
        </section>

        {/* ── Models + pricing ───────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="MacBook models we replace batteries for" intro="Every MacBook from the 2010 Air through the 2025 M5 Pro 16″. Apple Silicon batteries are paired to the logic board on the bench. Prices include cell, labour, calibration, and the 6-month warranty." />
            <PriceTable rows={PRICING} />
            <p className="mt-md text-[13px] text-on-primary-faint mono max-w-[70ch]">
              Bring-your-own-battery labour: AED 200 (only if the part is verified tier-1). Battery + trackpad swap if the swelling cracked the trackpad: AED 800 combined.
            </p>
          </div>
        </section>

        {/* ── Common problems ────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            title="Common battery problems we fix"
            intro="The 10 highest-volume battery tickets at the workshop. The first three are urgent - bring it in same day."
            icon={<AlertTriangle size={26} className="text-accent-bright" aria-hidden />}
          />
          <div className="grid gap-lg md:grid-cols-2">
            {PROBLEMS.map((p, i) => (
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
              title="Our battery replacement process"
              intro="Six steps from screenshot to delivery. The 4-hour calibration is what separates a proper swap from a Dragon-Mart job."
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
          <SectionHead title="How long does MacBook battery replacement take?" />
          <div className="grid gap-lg md:grid-cols-3">
            <Card className="border-accent-bright/30 bg-accent-bright/[0.06]">
              <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">Same day (2 hours bench)</h3>
              <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">All MacBook Air 11″/13″/15″, all MacBook Pro 13″/14″/15″/16″ - Intel and Apple Silicon. 92 of last 100 battery tickets delivered before 7 pm same day.</p>
            </Card>
            <Card>
              <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">Same day (3 hours)</h3>
              <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">MacBook 12″ Retina 2015-2017 - the 6-cell custom-shape pack takes longer to seat correctly. Still same-day, just 60 extra minutes.</p>
            </Card>
            <Card>
              <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">2 days (very rare)</h3>
              <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">Only when the battery + trackpad both need replacing because the swelling cracked the trackpad. The trackpad ships from local stock within 24 hours.</p>
            </Card>
          </div>
        </section>

        {/* ── Parts ──────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="What batteries we use - and which we refuse" />
            <div className="grid gap-lg md:grid-cols-2">
              <Card>
                <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">Tier-1 cells (what we fit)</h3>
                <p className="m-0 mb-sm text-[14px] text-on-primary-muted leading-relaxed">Samsung SDI, LG Chem, ATL - the three cell suppliers Apple uses. Sourced from authorised distributors with traceable batch numbers and IATA shipping certificates. Cycle life: 1,000 cycles to 80% (matches Apple rating).</p>
                <p className="m-0 mono text-[13px] text-accent-bright">AED 450 to AED 600 - included in the quote</p>
              </Card>
              <Card>
                <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">Sub-AED-200 grey market (what we refuse)</h3>
                <p className="m-0 mb-sm text-[14px] text-on-primary-muted leading-relaxed">B-grade cells, often re-wrapped used cells, no batch traceability, no IATA certification. Failure rate: 40% within 6 months, 15% swelling within 12 months. The workshop will not fit these even if the customer brings them.</p>
                <p className="m-0 mono text-[13px] text-on-primary-faint">Refused - fire risk in 12+ month timeframe</p>
              </Card>
            </div>
            <p className="mt-md text-[14px] text-on-primary-muted leading-relaxed max-w-[78ch]">
              If you've already bought a battery elsewhere, bring it in - the workshop will inspect the cells and only fit it if the brand is verifiable (AED 200 labour). Around 20% of customer-supplied batteries fail inspection.
            </p>
          </div>
        </section>

        {/* ── Warranty ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Warranty" icon={<ShieldCheck size={26} className="text-accent-bright" aria-hidden />} />
          <Card>
            <ul className="space-y-2.5 text-[15px] text-on-primary-muted list-none p-0 m-0">
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">6 months</strong> - written warranty on cells and labour.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">80% capacity guarantee</strong> - if maximum capacity drops below 80% within 6 months at under 200 cycles, battery replaced free.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">Covered:</strong> manufacturing defects, premature capacity loss, swelling, BMS firmware faults, sudden shutdown returns.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">Not covered:</strong> physical damage, liquid damage, charging from non-Apple-spec chargers above 100 W.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">How to claim:</strong> WhatsApp the warranty card photo. Free same-day collection. Replacement fitted within 24 hours.</span></li>
            </ul>
          </Card>
        </section>

        {/* ── Pricing recap + CTA ────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="MacBook battery cost in Dubai - transparent pricing" intro="No hidden fees. The price quoted on WhatsApp is the price paid on collection. No diagnostic fee, no calibration surcharge, no VAT add-on." />
            <PriceTable rows={PRICING} />
            <p className="mt-md text-[14px] text-on-primary-faint mono max-w-[78ch]">
              All prices in AED, VAT inclusive. Payment on collection - cash, Visa, Mastercard, Apple Pay, Samsung Pay, or bank transfer.
            </p>

            <div className="mt-2xl relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-xl md:p-2xl">
              <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
              <div className="relative flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="m-0 mono text-[12px] uppercase tracking-wider text-accent-bright mb-2">MacBook Battery Replacement · Same day · 2 hours</p>
                  <h3 className="m-0 text-on-primary text-[24px] md:text-[26px]">Get your battery quote in 4 minutes</h3>
                  <p className="m-0 mt-2 text-on-primary-muted text-[15px]">Starting from <strong className="text-on-primary">AED 450</strong>. WhatsApp the model + the Battery Health screenshot.</p>
                </div>
                <CtaRow whatsappMessage="Hi Usman, MacBook battery replacement quote please. Model: " />
              </div>
            </div>
          </div>
        </section>

        {/* ── Technician ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Lead technician on battery jobs" />
          <Card>
            <div className="flex flex-wrap items-center gap-lg">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-bright/15 font-heading text-[20px] font-bold text-accent-bright">U</span>
              <div>
                <p className="m-0 font-semibold text-on-primary text-[18px]">Usman</p>
                <p className="m-0 text-[13.5px] text-on-primary-faint">9 years experience · Battery, keyboard &amp; trackpad</p>
              </div>
            </div>
            <p className="mt-md text-[14px] text-on-primary-muted leading-relaxed max-w-[78ch]">
              Usman has fitted 4,800+ MacBook batteries since joining the workshop in 2017. Personally runs every Apple Silicon BMS re-pair and every 4-hour calibration cycle.
            </p>
          </Card>
        </section>

        {/* ── DIY ────────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="When DIY makes sense - and when it doesn't" />
            <div className="grid gap-lg md:grid-cols-2">
              <Card className="border-accent-bright/30 bg-accent-bright/[0.06]">
                <h3 className="m-0 mb-md text-on-primary text-[18px] font-bold">Try it yourself first</h3>
                <ul className="space-y-2.5 text-[14px] text-on-primary-muted list-none p-0 m-0">
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> SMC reset - fixes ~10% of "battery not charging" cases on Intel Macs at zero cost.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Recalibrate by running the battery flat then charging to 100% - corrects firmware capacity readings.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Check Energy Saver settings - high brightness + connected USB-C accessories can halve runtime without a battery fault.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Run System Information &gt; Power to view raw cycle count and design capacity for an objective baseline.</li>
                </ul>
              </Card>
              <Card>
                <h3 className="m-0 mb-md text-on-primary text-[18px] font-bold">Stop and bring it in</h3>
                <ul className="space-y-2.5 text-[14px] text-on-primary-muted list-none p-0 m-0">
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Any visible swelling - fire risk, do not charge or operate.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Battery hot to touch in idle - internal short, replace before swelling.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Sudden shutdowns at 30%+ remaining - battery cell failure or PMIC issue, both diagnosed free.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> 2013+ MacBook - adhesive removal needs a heat gun and isopropyl 99%; DIY mistakes ruin the trackpad cable below.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Comparison ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="MacBook Battery Replacement vs Apple Store Dubai" />
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
            Apple list pricing from apple.com/ae/shop/mac/repair, retrieved April 2026.
          </p>
        </section>

        {/* ── Reviews ────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl flex items-end justify-between gap-md flex-wrap">
              <div>
                <p className="mono text-[12px] uppercase tracking-wider text-accent-bright mb-3">{REVIEW_AVERAGE.toFixed(1)} average · Google verified</p>
                <h2 className="m-0 text-on-primary">Real battery-repair reviews</h2>
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
          <SectionHead title="MacBook battery replacement FAQ" />
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* ── Related ────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="Related MacBook repairs" />
            <div className="grid gap-lg md:grid-cols-3">
              {[
                { label: "MacBook Screen Repair",       href: "/macbook-screen-repair-dubai",       description: "Cracked glass, Flexgate, dead pixels from AED 600. Same-day on Air & Pro 14\"." },
                { label: "MacBook Trackpad Repair",     href: "/macbook-trackpad-repair-dubai",     description: "Trackpad swap from AED 350. Often paired with battery if swelling cracked it." },
                { label: "MacBook Keyboard Repair",     href: "/macbook-keyboard-repair-dubai",     description: "Key cap from AED 150, top case from AED 700. Butterfly and Magic keyboards." },
              ].map((r) => (
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
          <SectionHead title="Where to bring your MacBook" />
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
            <h2 className="text-on-primary m-0 mb-md max-w-[28ch] mx-auto">Battery health under 80%? Send the screenshot - quote in 4 minutes</h2>
            <p className="text-on-primary-muted max-w-[60ch] mx-auto mb-xl text-[17px]">
              Battery Health screenshot + serial number on WhatsApp. 2-hour bench time, free pickup, 6-month warranty plus 80% capacity guarantee.
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
      <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-battery-replacement-dubai" />
    </section>
    <RelatedArticles path="/macbook-battery-replacement-dubai" />
    </PageShell>
  );
}

/* ── local helpers (dark) ──────────────────────────────────── */
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-white/10 bg-white/[0.04] p-lg ${className}`}>{children}</div>;
}

function SectionHead({ title, intro, icon }: { title: string; intro?: string; icon?: ReactNode }) {
  return (
    <div className="mb-2xl max-w-[64ch]">
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
            <th className="px-lg py-md font-semibold whitespace-nowrap">Battery replacement</th>
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
