"use client";
import { Droplets, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star, Siren } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { PageMeta } from "@/components/blocks/PageMeta";
import { PricingTable, type PricingRow } from "@/components/blocks/PricingTable";
import { StepList } from "@/components/blocks/StepList";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { TechnicianBadge } from "@/components/blocks/TechnicianBadge";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { WarrantyBar } from "@/components/blocks/WarrantyBar";
import { QuoteBand } from "@/components/blocks/QuoteBand";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";

const PRICING: PricingRow[] = [
  { model: "Standard ultrasonic clean (no board damage)",   price: 299,  timeline: "1-2 days" },
  { model: "Clean + corroded keyboard membrane swap",       price: 950,  timeline: "2-3 days" },
  { model: "Clean + battery swap (swelling from liquid)",   price: 1050, timeline: "2 days"   },
  { model: "Clean + logic board component repair",          price: 1200, timeline: "3-5 days" },
  { model: "Salt-water (beach) damage - full strip + clean", price: 1100, timeline: "3 days"  },
  { model: "Sugar drink (juice / soda / coffee with sugar)", price: 850,  timeline: "2-3 days" },
  { model: "Pure water (clean spill, fast response)",        price: 299,  timeline: "1-2 days" },
  { model: "Logic board unrecoverable - data recovery only", price: 800,  timeline: "3-7 days" },
];

const FIRST_24_HOURS = [
  { do: "DO power off immediately",
    why: "Hold the power button for 10 seconds. Every second the MacBook stays on, current corrodes copper traces. This is the single most important step." },
  { do: "DO unplug the charger and any USB-C cables",
    why: "Charging into a wet board accelerates corrosion 5x. Pulling the cable cuts the corrosion source." },
  { do: "DO turn the MacBook upside down on a towel",
    why: "Tent shape - keyboard down, screen open at 90°. Lets liquid drain out of the bottom case rather than pooling on the logic board." },
  { do: "DO WhatsApp the workshop within 1 hour",
    why: "055 741 3706. Free emergency pickup across Dubai mainland. The success rate drops from 90% (under 24 hours) to 60% (under 72 hours) to 30% (over a week)." },
  { dont: "DON'T try to power it on to \"see if it still works\"",
    why: "Each power-on attempt drives current through corroded traces and burns them open. The most common cause of unrecoverable boards in the workshop is the customer testing repeatedly." },
  { dont: "DON'T put the MacBook in rice",
    why: "Rice is folklore. It absorbs ambient humidity, not the liquid trapped inside. Meanwhile rice dust enters the keyboard and fans, and corrosion continues unchecked. There is no engineering basis for this advice." },
  { dont: "DON'T use a hairdryer or oven",
    why: "Heat above 50 °C warps the logic board, melts adhesives, and damages the LCD. Heat does not reverse corrosion." },
  { dont: "DON'T wait \"a few days to see\"",
    why: "Corrosion is exponential. A board recoverable on day 1 for AED 299 is often a write-off on day 7." },
];

const PROCESS = [
  { title: "Emergency WhatsApp + free pickup",
    body: "WhatsApp 055 741 3706 same hour. Free emergency pickup across Dubai mainland - typically 30 to 60 minutes from call to bench." },
  { title: "Strip-down + initial assessment",
    body: "Bottom case off, battery disconnected within 5 minutes of arrival. Visible liquid logged with macro photos. Free assessment, written quote on WhatsApp before any paid work." },
  { title: "Ultrasonic clean - 60 minutes at 40 kHz",
    body: "Logic board, keyboard, trackpad, and speakers immersed in 99% isopropyl alcohol in the ultrasonic tank. 40 kHz vibration shakes corrosion out of every BGA chip and connector." },
  { title: "Microscope corrosion removal",
    body: "Component-by-component check under 40x microscope. Corroded resistors, capacitors, and inductors replaced with same-spec parts. Hot air rework on damaged BGA chips." },
  { title: "48-hour drying + bench test",
    body: "Drying cabinet at 35 °C for 48 hours. Then powered up on bench supply with current monitor - looking for the corrosion-induced shorts that don't show in cold inspection." },
  { title: "Re-assembly + 7-day soak test + handover",
    body: "Re-assembled with new adhesives, then run for 7 days at the workshop on a customer-data-free macOS install. If it survives 7 days clean, it leaves with the warranty of up to 12 months." },
];

const FAQS: FAQ[] = [
  { q: "How much does MacBook water damage repair cost in Dubai?",
    a: "Standard ultrasonic clean and corrosion removal: AED 299, 1 to 2 days. If the keyboard membrane is corroded: AED 950. If the battery has swollen: AED 1,050. If logic-board component-level repair is needed: up to AED 1,200. The exact price is confirmed on WhatsApp after the free strip-down assessment - never quoted blind." },
  { q: "What's the success rate for MacBook water damage repair?",
    a: "Honest numbers from the workshop's 2024-2025 logbook: 90% recoverable if the MacBook arrives within 24 hours of the spill and was not powered on after. 60% recoverable at 24 to 72 hours. 30% recoverable after a week. 10% recoverable if the customer tried to test it multiple times. No-fix-no-charge applies to the unrecoverable cases." },
  { q: "How quickly do I need to bring my MacBook in?",
    a: "Within 1 hour for the best outcome. Within 24 hours for the 90% recovery rate. Every hour above that, corrosion advances. After 7 days the success rate drops below 50% even with the most aggressive cleaning. WhatsApp 055 741 3706 same hour - free emergency pickup." },
  { q: "Salt water damage from the beach - can it be fixed?",
    a: "Yes, but it's the worst case. Salt water (Persian Gulf) is far more conductive than fresh water and the chloride ions accelerate corrosion 10x. The workshop strips and ultrasonically cleans the MacBook within 60 minutes of arrival. AED 1,100 standard, 3 days, 75% recovery rate at under 24 hours." },
  { q: "What about coffee, juice, or other sugary drinks?",
    a: "Sugar makes recovery harder than pure water - once the liquid dries, sugar forms a sticky conductive film across every chip. AED 850 (sugar) vs AED 299 (clean water). Same 1-2 day timeline if it arrives within 24 hours. The ultrasonic clean dissolves the sugar film completely; without it, sugar bridges keep shorting the board for months after it appears \"dry\"." },
  { q: "I already put my MacBook in rice - is it ruined?",
    a: "Not necessarily, but rice is folklore - it absorbs ambient humidity, not the liquid trapped inside. Meanwhile corrosion continues silently. Bring it in immediately. The workshop has recovered MacBooks that spent a week in rice, but the success rate is half what it would have been if it had come straight in." },
  { q: "Can you recover my data even if the MacBook is unrecoverable?",
    a: "Yes - data recovery is a separate AED 800 service. The SSD chips are read directly with a chip-off recovery rig if the controller is dead. On Apple Silicon and T2 Macs the SSD is encrypted and bonded to the secure enclave - recovery requires a working logic board, so data recovery is more difficult on these models. Honesty: success rates are 70% on Intel, 35% on Apple Silicon and T2." },
  { q: "Do you charge if my MacBook is unrecoverable?",
    a: "No - no fix, no charge. If the logic board is beyond component-level repair, you pay AED 0 for the diagnosis and ultrasonic clean. The free written diagnostic report is yours to take to insurance, Apple, or any other shop." },
  { q: "Will my AppleCare warranty cover water damage?",
    a: "AppleCare+ covers two accidental damage incidents per year with a service fee of AED 379 (MacBook Air) or AED 999 (MacBook Pro), per Apple's UAE published rates. Standard AppleCare and the 1-year limited warranty do not cover liquid damage. If you have AppleCare+ and are within the incident limit, Apple is usually the better route for full board replacement. The workshop is the right call when AppleCare+ has been used up or the device is out of warranty." },
  { q: "What's the warranty on water damage repair?",
    a: "12 months written warranty on the repair work and any parts fitted. Covers the specific repair completed (e.g. if a corroded keyboard was replaced, that keyboard is warrantied). Does not cover new corrosion appearing in a different area months later - corrosion is unpredictable, and a second spill is a new ticket." },
  { q: "Can you fix water damage on M1, M2, M3, M4, M5 MacBooks?",
    a: "Yes - Apple Silicon water damage is roughly 50% of the workshop's water tickets in 2024-2025. The component-level repair process is the same: ultrasonic clean, microscope inspection, replacement of corroded chips. Recovery rate is comparable to Intel. Data recovery on Apple Silicon is harder due to the bonded SSD, so a Time Machine backup taken before the spill is hugely valuable." },
  { q: "Do you offer free emergency pickup for water damage?",
    a: "Yes. WhatsApp 055 741 3706 - same-hour free pickup across Dubai mainland for liquid damage cases (this is faster than the standard same-day pickup). Driver arrives in a sealed plastic case with absorbent material to keep the MacBook stable in transit." },
];

const COMPARISON = [
  ["Repair window",          "1 to 5 days",                                  "10 to 21 business days, mail-in"],
  ["Free strip-down",        "Yes - written quote before paid work",         "AED 379 / AED 999 service fee upfront"],
  ["Standard clean",         "AED 299",                                       "Often replaces full logic board AED 4,000+"],
  ["No-fix-no-charge",       "Yes",                                           "Service fee retained even if unrecoverable"],
  ["Same-day emergency pickup", "Yes",                                        "No, customer must courier"],
  ["Component-level repair", "Yes - board-chip-level replacement",           "Logic board swap only, no component repair"],
  ["Data recovery (failed board)", "AED 800 add-on",                         "Not offered - refers to third party"],
  ["Vintage/obsolete models","Yes - 2010 onwards",                            "Refused on obsolete (pre-2017)"],
];

export default function MacBookWaterDamageRepair() {
  const reviews = pickReviews([
    "Janna Nurahmetova",
    "Daniel Layzell",
    "Nata Lee",
    "Marina Larioshina",
    "Yuki Koga",
    "Shaun Johnson",
    "Iryna Buchynska",
    "Knight A. Shakir",
  ]).slice(0, 6);

  useSeo(
    {
      title: "MacBook Water Damage Repair Dubai - From AED 299",
      description:
        "MacBook water damage repair Dubai from AED 299. 90% recovery rate under 24 hours. Salt water, coffee, juice. Same-hour emergency pickup. 055 741 3706.",
      path: "/macbook-water-damage-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Water Damage Repair Dubai",
        price: 299,
        timeline: "1 to 5 days",
        warranty: "P15D",
        url: "/macbook-water-damage-repair-dubai",
        description:
          "MacBook liquid and water damage repair in Dubai. Ultrasonic cleaning, corrosion removal, component-level board work. Salt water, coffee, juice. 90% recovery rate under 24 hours.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/real/lab/macbook-full-internals-dubai.jpg"
        imageAlt="MacBook water damage repair Dubai - bottom case removed showing the full internals during a water-damage repair"
        variant="service"
        tone="dark"
        eyebrow="MacBook water damage repair"
        title="MacBook Water Damage Repair Dubai"
        subtitle="Coffee spill, beach water, pool incident, leaking water bottle in the bag. Free same-hour pickup, ultrasonic clean from AED 299, 90% recovery rate at under 24 hours."
        startingPrice={299}
        timeline="1-5 days"
      >
        <PageMeta author="Shafiq Ahmed, Lead MacBook Technician" />
      </Hero>

      <WarrantyBar tone="dark" warrantyDays={15} />

      {/* Emergency strip - full width, prominent */}
      <section className="bg-error/10 border-y-2 border-error/40">
        <div className="mx-auto max-w-content px-5 md:px-6 py-lg flex flex-col md:flex-row md:items-center gap-md justify-between">
          <div className="flex items-start gap-md">
            <Siren size={32} className="text-error shrink-0 mt-1" aria-hidden />
            <div>
              <p className="font-bold text-[18px] text-text">Just spilled? WhatsApp now - same-hour free pickup</p>
              <p className="text-[14px] text-text-muted mt-1">Power off, flip upside down on a towel, message a photo. Every minute counts - corrosion is exponential.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-sm shrink-0">
            <Button asChild variant="whatsapp" size="lg">
              <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("EMERGENCY water damage. Just spilled. Need pickup.")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Emergency WhatsApp
              </a>
            </Button>
            <Button asChild variant="primary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer tone="dark" {...deriveServiceQuickAnswer({ serviceName: "MacBook water damage repair", startingPrice: 299, timeline: "1 to 5 days" })} />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home",                  path: "/" },
          { name: "MacBook Repair",        path: "/" },
          { name: "Water Damage Repair",   path: "/macbook-water-damage-repair-dubai" },
        ]} />
      </section>

      <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="flex flex-col gap-3xl">
          {/* Intro */}
          <section>
            <LinkifyProse selfHref="/macbook-water-damage-repair-dubai"><p className="text-[17px] text-text leading-relaxed">
              MacBook water damage repair in Dubai starts at AED 299 for a full ultrasonic clean and corrosion removal - most spills are recoverable if they arrive at the workshop within 24 hours and the MacBook was not powered on after the incident. The workshop's 2024-2025 logbook shows a 90% success rate at under 24 hours, dropping to 60% at 72 hours and 30% after a week. Coffee, juice, beach water, swimming pool water, leaking water bottles in laptop bags, melted ice from a drink - the workshop has rescued 1,800+ MacBooks since 2004. Same-hour emergency pickup across Dubai mainland. No fix, no charge - if the logic board is beyond component-level repair, you pay AED 0.
            </p></LinkifyProse>
          </section>

          {/* The first 24 hours */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <AlertTriangle size={28} className="text-error" aria-hidden /> The first 24 hours - what to do, what to avoid
            </h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Liquid damage is exponential. The actions in the first hour determine whether the MacBook costs AED 299 to recover or AED 0 because it's a write-off.
            </p>
            <div className="grid gap-md md:grid-cols-2">
              {FIRST_24_HOURS.map((item, i) => (
                <article key={i} className={`rounded-md p-lg border ${"do" in item ? "bg-success/5 border-success/30" : "bg-error/5 border-error/30"}`}>
                  <h3 className={`text-[16px] font-bold mb-sm ${"do" in item ? "text-success" : "text-error"}`}>
                    {"do" in item ? item.do : item.dont}
                  </h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{item.why}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Salt water Dubai note */}
          <section className="bg-bg-alt rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md flex items-center gap-sm text-text">
              <Droplets size={24} className="text-accent" aria-hidden /> Dubai-specific: salt water is the worst case
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed mb-md">
              Persian Gulf salt water is roughly 4% salinity vs the open ocean's 3.5%. Beach water that gets into a MacBook causes corrosion roughly 10x faster than fresh water - chloride ions strip the protective oxide layer off every copper trace within hours. Swimming pool water (chlorinated) is somewhere in between.
            </p>
            <ul className="space-y-2 text-[14px] text-text-muted">
              <li><strong className="text-text">Beach water:</strong> AED 1,100, 3 days, 75% recovery at under 24 hours.</li>
              <li><strong className="text-text">Swimming pool water:</strong> AED 850, 2 days, 80% recovery at under 24 hours.</li>
              <li><strong className="text-text">Tap water (clean spill):</strong> AED 299, 1-2 days, 90% recovery at under 24 hours.</li>
              <li><strong className="text-text">Coffee, tea, juice (sugary):</strong> AED 850, 2-3 days. The sugar film must be ultrasonically dissolved or it bridges chips for months.</li>
            </ul>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <Wrench size={28} className="text-accent" aria-hidden /> Our water damage repair process
            </h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Six steps - from emergency pickup to a 7-day soak test before the MacBook leaves the workshop. The 7-day test catches the delayed-failure cases that show up days later.
            </p>
            <StepList steps={PROCESS} tone="dark" />
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">MacBook Water Damage Repair Dubai. Pricing Guide</h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Final price depends on what corroded. After the free strip-down, the WhatsApp quote shows exactly which parts need replacement and the expected total. No hidden fees, no diagnostic surcharge.
            </p>
            <PricingTable service="Water damage repair" rows={PRICING} tone="dark" />
            <p className="text-[14px] text-text-faint mt-md max-w-[70ch] mono">
              All prices in AED, VAT inclusive. No fix, no charge - unrecoverable boards cost AED 0.
            </p>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">How long does water damage repair take?</h2>
            <div className="grid gap-md md:grid-cols-3">
              <article className="bg-accent/5 border border-accent/30 rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">1-2 days</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Clean spill (water), under 24 hours from incident, no powered-on attempts. Ultrasonic clean + 48-hour dry + 7-day soak test.</p>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">2-3 days</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Coffee, juice, sugary drinks (sugar film needs deeper clean). Beach or pool water with mild corrosion. Keyboard membrane swap if it didn't survive.</p>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">3-5 days</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Logic board component-level work - corroded chips replaced under microscope with hot air rework. Salt water with deep corrosion. Late arrivals (over a week from spill).</p>
              </article>
            </div>
          </section>

          <QuoteBand
            service="MacBook Water Damage Repair"
            startingPrice={299}
            timeline="1-5 days"
            whatsappMessage="EMERGENCY water damage. Spill type: . Hours since spill: . Powered on after? "
          />

          {/* Honest success rate */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">Honest success rates - from the workshop logbook</h2>
            <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
              <table className="w-full text-[14px] min-w-[520px]">
                <thead className="bg-bg-alt">
                  <tr className="text-left">
                    <th className="px-md py-sm font-semibold text-text">Time from spill</th>
                    <th className="px-md py-sm font-semibold text-text">Recovery rate</th>
                    <th className="px-md py-sm font-semibold text-text">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-md py-sm font-semibold text-text">Under 24 hours, not powered on</td><td className="px-md py-sm mono text-success">90%</td><td className="px-md py-sm text-text-muted">Best case - usually AED 299 standard clean.</td></tr>
                  <tr className="bg-bg-alt"><td className="px-md py-sm font-semibold text-text">24 to 72 hours</td><td className="px-md py-sm mono text-text">60%</td><td className="px-md py-sm text-text-muted">Often needs component-level repair, AED 950 to AED 1,200.</td></tr>
                  <tr><td className="px-md py-sm font-semibold text-text">3 to 7 days</td><td className="px-md py-sm mono text-text">45%</td><td className="px-md py-sm text-text-muted">Corrosion has spread - multi-chip replacement common.</td></tr>
                  <tr className="bg-bg-alt"><td className="px-md py-sm font-semibold text-text">Over 1 week</td><td className="px-md py-sm mono text-text">30%</td><td className="px-md py-sm text-text-muted">Many traces unrecoverable - data recovery becomes the priority.</td></tr>
                  <tr><td className="px-md py-sm font-semibold text-text">Powered on multiple times after spill</td><td className="px-md py-sm mono text-error">10%</td><td className="px-md py-sm text-text-muted">Worst case - each power-on attempt burns more traces.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <ShieldCheck size={28} className="text-accent" aria-hidden /> Warranty
            </h2>
            <div className="border border-border bg-bg-card rounded-md p-lg">
              <ul className="space-y-2 text-[15px] text-text">
                <li><strong>12 months</strong> - written warranty on the repair work and any parts fitted.</li>
                <li><strong>Covered:</strong> the specific corrosion repair completed, replacement parts (keyboard, battery, chips), the soak-test result.</li>
                <li><strong>Not covered:</strong> new corrosion in a different area, a second spill (new ticket), pre-existing damage unrelated to the spill.</li>
                <li><strong>How to claim:</strong> WhatsApp the warranty card photo. Same-day collection, free of charge.</li>
                <li><strong>No fix, no charge:</strong> if the board is unrecoverable, the price is AED 0 - diagnostic report yours to keep.</li>
              </ul>
            </div>
          </section>

          {/* Technician */}
          <section className="bg-bg-alt rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md text-text">Lead technician on water damage jobs</h2>
            <TechnicianBadge name="Shafiq Ahmed" years={21} specialisation="Water damage & logic board" tone="dark" />
            <p className="text-[14px] text-text-muted mt-md max-w-[70ch]">
              Shafiq founded the workshop in 2004 and personally handles 80% of water-damage strip-downs. The 7-day soak test protocol is his - designed after 21 years of seeing delayed-failure boards come back in week 2.
            </p>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">Water Damage Repair vs Apple Store Dubai</h2>
            <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
              <table className="w-full text-[14px] min-w-[640px]">
                <thead className="bg-bg-alt">
                  <tr className="text-left">
                    <th className="px-md py-sm font-semibold text-text">Factor</th>
                    <th className="px-md py-sm font-semibold text-text">MacBook Repair Dubai</th>
                    <th className="px-md py-sm font-semibold text-text">Apple Store / AASP</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-bg-alt" : ""}>
                      <td className="px-md py-sm font-semibold text-text">{row[0]}</td>
                      <td className="px-md py-sm text-text">{row[1]}</td>
                      <td className="px-md py-sm text-text-muted">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-text-faint mt-sm mono">
              AppleCare+ pricing from apple.com/ae/shop/applecare, retrieved April 2026. AppleCare+ is the right call when active and within the 2-incident-per-year limit; the workshop is the right call when AppleCare+ is exhausted, the device is out of warranty, or component-level board repair is preferred over full board swap.
            </p>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <Star size={28} className="text-star fill-star" aria-hidden /> Real water-damage reviews
            </h2>
            <p className="text-[14px] text-text-muted mb-lg">
              All six reviews are verbatim from Google. Coffee spills, beach water, sugar drinks. <a href="/reviews/" className="text-accent font-semibold hover:underline">Read all 215+ →</a>
            </p>
            <ReviewGrid reviews={reviews} tone="dark" />
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">MacBook water damage FAQ</h2>
            <FAQAccordion items={FAQS} injectSchema tone="dark" />
          </section>

          {/* Related */}
          <section>
            <RelatedServices tone="dark" items={[
              { label: "MacBook Logic Board Repair",  href: "/macbook-logic-board-repair-dubai",  description: "Component-level board work from AED 800. Often follows water damage if chips need replacement." },
              { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai", description: "Liquid often swells the battery - combo job from AED 1,050." },
              { label: "MacBook Keyboard Repair",     href: "/macbook-keyboard-repair-dubai",     description: "Liquid-damaged keyboard membrane swap from AED 550." },
            ]} />
          </section>

          {/* Location */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-lg text-text">Where to bring your MacBook (or call for pickup)</h2>
            <LocationBlock tone="dark" />
          </section>
        </div>
      </div>

      {/* Final CTA - emergency framing */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="bg-error text-text rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="text-text text-[28px] md:text-[32px] max-w-[28ch]">Spilled in the last hour? Send a photo - pickup driver dispatched in 15 minutes</h2>
          <p className="text-text-muted text-[16px] max-w-[60ch]">
            Power off the MacBook, flip it upside down on a towel, WhatsApp a photo. Free emergency pickup across Dubai mainland. No fix, no charge.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("EMERGENCY water damage. Just spilled.")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Emergency WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
        <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
      <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free repair quote</h2>
      <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps, your device, then how to reach you. Free diagnosis, written quote, warranty of up to 12 months.</p>
      <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-water-damage-repair-dubai" />
    </section>
    <RelatedArticles path="/macbook-water-damage-repair-dubai" />
    </PageShell>
  );
}
