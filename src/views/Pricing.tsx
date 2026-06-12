"use client";
import { Search, ShieldCheck, Banknote, Clock, Check, X, Truck, Sparkles, AlertTriangle } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { WhatsAppCTA } from "@/components/blocks/WhatsAppCTA";
import { useSeo } from "@/hooks/use-seo";
import { faqPage, service as serviceSchema } from "@/lib/schema";
import { NAP } from "@/content/site";

// ---------- price tables (AED, verbatim from PROJECT_BRIEF § 10) ----------

type Row = { service: string; price: number; timeline: string; warranty: string };

const MACBOOK: Row[] = [
  { service: "Screen replacement (Air & Pro 13/14/15/16)", price: 780,  timeline: "Same day · 1-2 days", warranty: "3 months" },
  { service: "Battery replacement",                         price: 590,  timeline: "Same day · 2 hours", warranty: "3 months" },
  { service: "Keyboard replacement (full deck)",            price: 460,  timeline: "1-2 days",           warranty: "15 days" },
  { service: "Trackpad replacement",                        price: 460,  timeline: "Same day",           warranty: "12 months" },
  { service: "USB-C / Thunderbolt port repair",             price: 460,  timeline: "1-2 days",           warranty: "12 months" },
  { service: "Touch Bar replacement (2016-2019)",           price: 780,  timeline: "1-2 days",           warranty: "12 months" },
  { service: "Logic board repair (component-level)",        price: 1040, timeline: "2-5 days",           warranty: "15 days" },
  { service: "Water / liquid damage recovery",              price: 910,  timeline: "3-5 days",           warranty: "15 days" },
  { service: "Data recovery from dead MacBook",             price: 520,  timeline: "1-7 days",           warranty: "Data integrity guaranteed" },
  { service: "SSD upgrade (256 GB → 1 TB / 2 TB)",          price: 910,  timeline: "Same day",           warranty: "12 months + part warranty" },
  { service: "RAM upgrade (Intel models only)",             price: 520,  timeline: "Same day",           warranty: "12 months + part warranty" },
  { service: "Overheating / thermal repaste & clean",       price: 460,  timeline: "Same day · 2 hours", warranty: "12 months" },
  { service: "Hinge repair",                                price: 390,  timeline: "1-2 days",           warranty: "12 months" },
  { service: "Speaker replacement",                         price: 460,  timeline: "1-2 days",           warranty: "12 months" },
  { service: "FaceTime camera replacement",                 price: 460,  timeline: "1-2 days",           warranty: "12 months" },
];

const IMAC: Row[] = [
  { service: "iMac 21.5\" / 24\" / 27\" screen replacement", price: 1040, timeline: "2-4 days", warranty: "3 months" },
  { service: "Logic board repair",                            price: 1300, timeline: "3-5 days", warranty: "15 days" },
  { service: "SSD upgrade (Fusion → SSD)",                    price: 910,  timeline: "1-2 days", warranty: "12 months + part warranty" },
  { service: "Power supply replacement",                      price: 780,  timeline: "1-2 days", warranty: "12 months" },
  { service: "Fan / overheating repair",                      price: 520,  timeline: "Same day", warranty: "12 months" },
  { service: "macOS install / clean reinstall",               price: 390,  timeline: "Same day · 3 hours", warranty: "30 days" },
];

const MAC_DESKTOP: Row[] = [
  { service: "Mac mini logic board repair",       price: 1040, timeline: "2-4 days", warranty: "15 days" },
  { service: "Mac mini SSD upgrade",              price: 910,  timeline: "Same day", warranty: "12 months + part warranty" },
  { service: "Mac Studio diagnostics & repair",   price: 1040, timeline: "2-5 days", warranty: "12 months" },
  { service: "Mac Pro power supply replacement",  price: 1560, timeline: "3-5 days", warranty: "12 months" },
  { service: "Mac Pro GPU module repair",         price: 1950, timeline: "3-5 days", warranty: "12 months" },
];

const IPHONE: Row[] = [
  { service: "iPhone screen replacement (8 → 14)",        price: 460,  timeline: "40 minutes", warranty: "3 months" },
  { service: "iPhone screen replacement (15 / 15 Pro)",   price: 1040, timeline: "Same day",   warranty: "3 months" },
  { service: "iPhone battery replacement",                price: 330,  timeline: "30 minutes", warranty: "3 months" },
  { service: "iPhone back glass replacement",             price: 520,  timeline: "1 day",      warranty: "12 months" },
  { service: "iPhone charging port repair",               price: 390,  timeline: "Same day",   warranty: "12 months" },
  { service: "iPhone water damage recovery",              price: 650,  timeline: "2-3 days",   warranty: "15 days" },
];

const IPAD: Row[] = [
  { service: "iPad screen / digitiser (mini / Air / 9-10)", price: 460,  timeline: "1 day",  warranty: "3 months" },
  { service: "iPad Pro 11\" screen + LCD",                   price: 1170, timeline: "1-2 days", warranty: "3 months" },
  { service: "iPad Pro 12.9\" screen + LCD",                 price: 1560, timeline: "1-2 days", warranty: "3 months" },
  { service: "iPad battery replacement",                     price: 520,  timeline: "1 day",  warranty: "3 months" },
  { service: "iPad charging port repair",                    price: 460,  timeline: "Same day", warranty: "12 months" },
];

const ALL_TABLES: { id: string; title: string; subtitle: string; rows: Row[] }[] = [
  { id: "macbook", title: "MacBook pricing", subtitle: "Air, Pro 13\", 14\", 15\", 16\" - Intel through M5.", rows: MACBOOK },
  { id: "imac",    title: "iMac pricing", subtitle: "21.5\", 24\", 27\" - including Retina 5K.", rows: IMAC },
  { id: "mac-desktop", title: "Mac mini, Studio & Pro pricing", subtitle: "All desktop Macs from 2014 onward.", rows: MAC_DESKTOP },
  { id: "iphone",  title: "iPhone pricing", subtitle: "iPhone 8 through iPhone 16 Pro Max.", rows: IPHONE },
  { id: "ipad",    title: "iPad pricing", subtitle: "iPad mini, Air, standard, and Pro 11\"/12.9\".", rows: IPAD },
];

const HOW_PRICING_WORKS = [
  { icon: Search,      title: "Free diagnosis",     body: "Walk in or send a WhatsApp. The technician opens the device and finds the actual fault - no charge, even if you walk away." },
  { icon: Banknote,    title: "Quote before repair", body: "Final price in writing on WhatsApp before any screwdriver moves. Approve, decline, or take the device back - your call." },
  { icon: ShieldCheck, title: "No fix, no charge",  body: "If a board can't be saved or a part isn't available, you owe AED 0. The diagnosis report is yours to keep." },
  { icon: Clock,       title: "12-month warranty",    body: "Every repair carries a written 12-month warranty on parts and workmanship. Same fault back inside 12 months, redone free." },
];

const COMPARISON = [
  { row: "Diagnosis fee",          us: "AED 0 (free)",            apple: "AED 200-350" },
  { row: "Turnaround time",        us: "Same day to 5 days",      apple: "5-14 days (sent to Ireland for some repairs)" },
  { row: "Free pickup & delivery", us: "Yes - across Dubai",      apple: "No - drop-off only" },
  { row: "Warranty",               us: "12 months written",         apple: "12 months" },
  { row: "MacBook screen repair",  us: "From AED 780",            apple: "AED 1,400-2,200" },
  { row: "MacBook battery",        us: "From AED 590",            apple: "AED 750-950" },
  { row: "Component-level repair", us: "Yes - board repair down to chip level", apple: "No - full board swap only" },
  { row: "Out-of-warranty Macs",   us: "Yes - including Intel models back to 2012", apple: "Limited - vintage models refused" },
];

const PRICING_FAQS = [
  { q: "Why is your MacBook screen repair from AED 780 when the Apple Store quotes AED 1,800?",
    a: "Two reasons. First, component-level repair: when only the LCD panel is damaged, the team replaces the panel alone instead of swapping the entire display assembly. Second, no Apple Store overhead - Concord Tower rent is a fraction of a Mall of the Emirates retail unit." },
  { q: "Are the prices listed final?",
    a: "The prices are starting prices for the most common fault on the most common model. After the free diagnosis, you receive a final price on WhatsApp. 80% of repairs land within 10% of the listed price." },
  { q: "Do prices include VAT?",
    a: "Yes. Every price on this page is the all-in amount you pay. AED 780 means AED 780 - no 5% added at checkout." },
  { q: "What payment methods do you accept?",
    a: "Cash (AED), Visa, Mastercard, Apple Pay, Samsung Pay, and bank transfer to Emirates NBD. Payment on collection only - never before the repair is approved." },
  { q: "Do you offer a discount for multiple devices?",
    a: "For 3 or more devices in one drop-off (common with corporate clients in Media City and JLT), the labour component drops 15%. WhatsApp Shafiq with the model list for a fixed quote." },
  { q: "Is the AED 910 water damage price guaranteed to fix the MacBook?",
    a: "No. Liquid damage recovery is 80-90% successful, not 100%. The AED 910 covers ultrasonic cleaning, corrosion treatment, and component replacement up to 4 chips. If the board is unrecoverable, you pay AED 0 and receive the data recovery quote separately." },
  { q: "Why is the iPhone 15 screen so much more than the iPhone 14?",
    a: "Apple changed the display assembly on iPhone 15 - the panel now ships paired with the True Tone IC. Aftermarket panels lose True Tone. Genuine OEM panels for iPhone 15 cost the workshop AED 720 wholesale, which sets the AED 1,040 customer price." },
  { q: "Do the prices change for older Intel MacBooks?",
    a: "Most repairs cost the same. Two exceptions: full display assemblies on 2016-2019 Touch Bar Pros run AED 1,820 (instead of AED 780 for panel-only) because the entire lid swaps as one unit. RAM upgrades are AED 520 - Apple Silicon RAM is soldered and can't be upgraded." },
  { q: "What's the cheapest way to fix a slow, old MacBook?",
    a: "SSD upgrade plus a fresh macOS install - AED 910 + AED 390 = AED 1,300 total. A 2015 MacBook Air with a 256 GB SSD swap and a clean install runs noticeably faster than a 2018 model with a failing 128 GB drive." },
  { q: "Is data recovery extra on top of the repair price?",
    a: "Recovery from a working drive in a working MacBook: included free. Recovery from a dead drive or water-damaged board: AED 520 minimum, up to AED 2,600 for chip-off forensic recovery on T2/M-series boards." },
  { q: "Do you charge for pickup and delivery?",
    a: "Free across Dubai Mainland - Marina, JLT, Downtown, Business Bay, Palm, JBR, and the rest. Sharjah and Abu Dhabi pickup runs AED 100 each way. Pickup window: Monday to Saturday, 9 am to 5 pm." },
  { q: "What happens if the same fault returns inside the warranty?",
    a: "Bring the device back, no questions asked. The original technician - usually Shafiq for MacBook board work or Usman for iPhone screens - re-opens the unit and redoes the repair free of charge. Average warranty claim turnaround: 24 hours." },
];

export default function Pricing() {
  // Build one Service schema entry per priced row (capped at 30 to stay under
  // the JSON-LD payload limits Googlebot accepts cleanly).
  const services = [
    serviceSchema({ name: "MacBook Screen Repair Dubai",        price: 780, timeline: "Same day", warranty: "P3M", url: "/macbook-screen-repair-dubai" }),
    serviceSchema({ name: "MacBook Battery Replacement Dubai",  price: 590, timeline: "2 hours",  warranty: "P3M", url: "/macbook-battery-replacement-dubai" }),
    serviceSchema({ name: "MacBook Keyboard Replacement Dubai", price: 460, timeline: "1-2 days", warranty: "P15D", url: "/macbook-keyboard-repair-dubai" }),
    serviceSchema({ name: "MacBook Trackpad Repair Dubai",      price: 460, timeline: "Same day", warranty: "P1Y" }),
    serviceSchema({ name: "MacBook USB-C Port Repair Dubai",    price: 460, timeline: "1-2 days", warranty: "P1Y" }),
    serviceSchema({ name: "MacBook Touch Bar Replacement",      price: 780, timeline: "1-2 days", warranty: "P1Y" }),
    serviceSchema({ name: "MacBook Logic Board Repair Dubai",   price: 1040, timeline: "2-5 days", warranty: "P15D", url: "/macbook-logic-board-repair-dubai" }),
    serviceSchema({ name: "MacBook Water Damage Repair Dubai",  price: 910, timeline: "3-5 days", warranty: "P15D", url: "/macbook-water-damage-repair-dubai" }),
    serviceSchema({ name: "MacBook Data Recovery Dubai",        price: 520, timeline: "1-7 days", warranty: "P15D", url: "/mac-data-recovery-dubai" }),
    serviceSchema({ name: "MacBook SSD Upgrade Dubai",          price: 910, timeline: "Same day", warranty: "P1Y" }),
    serviceSchema({ name: "MacBook Hinge Repair Dubai",         price: 390, timeline: "1-2 days", warranty: "P1Y" }),
    serviceSchema({ name: "iMac Screen Repair Dubai",           price: 1040, timeline: "2-4 days", warranty: "P3M", url: "/imac-screen-repair-dubai" }),
    serviceSchema({ name: "iMac Logic Board Repair Dubai",      price: 1300, timeline: "3-5 days", warranty: "P15D" }),
    serviceSchema({ name: "iMac SSD Upgrade Dubai",             price: 910, timeline: "1-2 days", warranty: "P1Y" }),
    serviceSchema({ name: "Mac mini Repair Dubai",              price: 1040, timeline: "2-4 days", warranty: "P1Y" }),
    serviceSchema({ name: "macOS Install / Reinstall Dubai",    price: 390, timeline: "3 hours",  warranty: "P15D" }),
    serviceSchema({ name: "iPhone Screen Repair Dubai",         price: 460, timeline: "40 minutes", warranty: "P3M", url: "/iphone-screen-repair-dubai" }),
    serviceSchema({ name: "iPhone Battery Replacement Dubai",   price: 330, timeline: "30 minutes", warranty: "P3M" }),
    serviceSchema({ name: "iPad Screen Repair Dubai",           price: 460, timeline: "1 day",     warranty: "P3M", url: "/ipad-screen-repair-dubai" }),
  ];

  useSeo(
    {
      title: "MacBook Repair Prices Dubai - Full Price List from AED 330",
      description:
        "Transparent pricing for all Apple repairs in Dubai. MacBook screen from AED 780, battery from AED 590, water damage from AED 910. Free diagnosis. Call 055 741 3706.",
      path: "/pricing",
    },
    [...services, faqPage(PRICING_FAQS)],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="service"
        tone="dark"
        eyebrow="Full price list"
        title="Transparent Pricing - No Hidden Fees"
        subtitle="Every price below is what you pay. Free diagnosis first, quote before repair, warranty included."
      />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      </section>

      {/* How pricing works */}
      <section aria-labelledby="how-pricing" className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 id="how-pricing" className="text-[28px] md:text-[32px] mb-md">How our pricing works</h2>
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
          {HOW_PRICING_WORKS.map(({ icon: Icon, title, body }) => (
            <article key={title} className="border border-border bg-bg-card rounded-md p-lg flex flex-col gap-sm">
              <Icon size={28} className="text-accent" aria-hidden />
              <h3 className="text-[18px] font-bold">{title}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
        <p className="text-[15px] text-text-muted mt-lg max-w-[72ch]">
          Prefer an instant estimate for your exact model? Try our{" "}
          <Link to="/macbook-repair-cost-calculator-dubai" className="text-accent font-semibold hover:underline">MacBook repair cost calculator</Link>{" "}
          - pick your device and repair to see a starting price in seconds.
        </p>
      </section>

      {/* Quick-jump nav */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-2xl">
        <nav aria-label="Jump to pricing section" className="flex flex-wrap gap-2 text-[13px] mono">
          <span className="text-text-faint">Jump to:</span>
          {ALL_TABLES.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="text-accent hover:underline">{t.title.replace(" pricing", "")}</a>
          ))}
        </nav>
      </section>

      {/* Pricing tables */}
      {ALL_TABLES.map((t) => (
        <PriceSection key={t.id} id={t.id} title={t.title} subtitle={t.subtitle} rows={t.rows} />
      ))}

      {/* What's included */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl grid gap-xl md:grid-cols-2">
        <article className="border border-border bg-bg-card rounded-md p-xl">
          <h2 className="text-[24px] mb-md flex items-center gap-sm">
            <Check size={24} className="text-whatsapp" aria-hidden /> What's included in every repair
          </h2>
          <ul className="space-y-sm text-[15px] text-text leading-relaxed">
            {[
              "Genuine Apple parts when available, premium-grade aftermarket otherwise",
              "12-month written warranty on parts and workmanship",
              "Free pickup and delivery across Dubai Mainland",
              "Full diagnostic test and post-repair quality check",
              "Free internal cleaning, dust removal, and thermal repaste on MacBook repairs",
              "Original packaging or protective box for safe transport",
              "Itemised invoice with serial number and parts used",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="text-whatsapp shrink-0 mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="border border-border bg-bg-card rounded-md p-xl">
          <h2 className="text-[24px] mb-md flex items-center gap-sm">
            <X size={24} className="text-error" aria-hidden /> What's NOT included (honest list)
          </h2>
          <ul className="space-y-sm text-[15px] text-text leading-relaxed">
            {[
              "Replacement parts for discontinued models (some pre-2012 Macs no longer have OEM stock)",
              "T2 and M-series Secure Enclave bypass - encrypted data on dead boards may be unrecoverable",
              "100% liquid damage success rate - actual recovery rate is 80-90% depending on exposure time",
              "Warranty on accidental damage during normal use after pickup",
              "Replacement of cosmetic dents, scratches, or chassis damage (cosmetic-only repair quoted separately)",
              "Refunds on parts already installed if you change your mind after approval",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <X size={18} className="text-error shrink-0 mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-md text-[13px] text-text-muted italic flex items-start gap-2">
            <AlertTriangle size={14} className="shrink-0 mt-0.5 text-accent" aria-hidden />
            Honesty matters more than a pitch. Better to know the limits up front than discover them on day 5.
          </p>
        </article>
      </section>

      {/* Comparison table */}
      <section aria-labelledby="vs-apple" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 id="vs-apple" className="text-[28px] md:text-[32px] mb-sm">
          MacBook Repair Dubai vs Apple Store
        </h2>
        <p className="text-[16px] text-text-muted mb-md max-w-[70ch]">
          Apple Store prices below are sourced from a same-day quote run on a 2021 MacBook Pro 14" M1 Pro at the Mall of the Emirates Apple Store, December 2025.
        </p>
        <div className="overflow-x-auto border border-border rounded-md bg-bg-alt">
          <table className="w-full text-[14px] min-w-[640px]">
            <caption className="sr-only">Pricing and service comparison: MacBook Repair Dubai vs Apple Store Dubai</caption>
            <thead className="bg-bg-card">
              <tr className="text-left">
                <th scope="col" className="px-md py-sm font-semibold">Item</th>
                <th scope="col" className="px-md py-sm font-semibold text-accent">MacBook Repair Dubai</th>
                <th scope="col" className="px-md py-sm font-semibold text-text-muted">Apple Store Dubai</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((c, i) => (
                <tr key={c.row} className={i % 2 ? "bg-bg-alt" : ""}>
                  <td className="px-md py-sm font-semibold">{c.row}</td>
                  <td className="px-md py-sm mono text-accent">{c.us}</td>
                  <td className="px-md py-sm mono text-text-muted">{c.apple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="pricing-faq" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 id="pricing-faq" className="text-[28px] md:text-[32px] mb-md">Pricing FAQ</h2>
        <FAQAccordion items={PRICING_FAQS} injectSchema tone="dark" />
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl pb-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="relative flex flex-col items-start gap-md">
          <h2 className="text-text text-[28px] md:text-[32px] max-w-[28ch]">
            Send the model number - get a price in minutes
          </h2>
          <p className="text-text-muted text-[16px] max-w-[60ch]">
            Shafiq replies on WhatsApp typically within 4 minutes during business hours
            (9 am - 10 pm, Monday to Saturday). Or call {NAP.phoneDisplay}.
          </p>
          <WhatsAppCTA
            message="Hi Shafiq, I'd like a price quote for an Apple repair. Model: "
            label="Send model on WhatsApp"
            size="lg"
          />
          </div>
        </div>
      </section>
      </div>
    </PageShell>
  );
}

// ---------- price section helper ----------
function PriceSection({
  id, title, subtitle, rows,
}: { id: string; title: string; subtitle: string; rows: Row[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-content px-5 md:px-6 mt-2xl scroll-mt-24">
      <h2 id={`${id}-h`} className="text-[24px] md:text-[28px]">{title}</h2>
      <p className="text-[15px] text-text-muted mb-md">{subtitle}</p>
      <div className="overflow-x-auto border border-border rounded-md bg-bg-alt">
        <table className="w-full text-[14px] min-w-[720px]">
          <caption className="sr-only">{title} - starting prices, timelines, and warranty terms.</caption>
          <thead className="bg-bg-card">
            <tr className="text-left">
              <th scope="col" className="px-md py-sm font-semibold">Service</th>
              <th scope="col" className="px-md py-sm font-semibold">Starting price</th>
              <th scope="col" className="px-md py-sm font-semibold">Timeline</th>
              <th scope="col" className="px-md py-sm font-semibold">Warranty</th>
              <th scope="col" className="px-md py-sm font-semibold text-right">Quote</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.service} className={i % 2 ? "bg-bg-alt" : ""}>
                <td className="px-md py-sm">{r.service}</td>
                <td className="px-md py-sm mono font-semibold text-accent whitespace-nowrap">AED {r.price}</td>
                <td className="px-md py-sm mono text-text-muted whitespace-nowrap">{r.timeline}</td>
                <td className="px-md py-sm text-text-muted">{r.warranty}</td>
                <td className="px-md py-sm text-right">
                  <a
                    href={`${NAP.whatsappUrl}?text=${encodeURIComponent(`Hi Shafiq, quote please for: ${r.service}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-whatsapp font-semibold hover:underline whitespace-nowrap"
                  >
                    Get price
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-sm text-[12px] text-text-faint mono flex items-center gap-2">
        <Sparkles size={12} aria-hidden /> Free pickup & delivery across Dubai
        <span className="text-text-faint">·</span>
        <Truck size={12} aria-hidden /> Same-day return on most repairs
      </p>
    </section>
  );
}
