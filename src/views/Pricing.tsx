"use client";
import { Search, ShieldCheck, Banknote, Clock, Check, X, Truck, Sparkles, AlertTriangle } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { WhatsAppCTA } from "@/components/blocks/WhatsAppCTA";
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
import GlassWarrantyNotice from "@/components/blocks/GlassWarrantyNotice";
import { NAP } from "@/content/site";
import { PRICE_ROWS_BY_GROUP, type PriceRow } from "@/content/prices.generated";

// ---------- price tables ----------
// Rows come from the admin price store via the build-time generator (scripts/gen-prices.cjs →
// src/content/prices.generated.ts). The same data feeds the /pricing JSON-LD Offers
// (pricing-services.ts), so the visible prices and the structured data can never drift.
// Edit prices in /admin/prices, then rebuild to apply.

type Row = PriceRow;

const ALL_TABLES: { id: string; title: string; subtitle: string; rows: Row[] }[] = [
  { id: "macbook", title: "MacBook pricing", subtitle: "Air, Pro 13\", 14\", 15\", 16\" - Intel through M5.", rows: PRICE_ROWS_BY_GROUP.macbook ?? [] },
  { id: "imac",    title: "iMac pricing", subtitle: "21.5\", 24\", 27\" - including Retina 5K.", rows: PRICE_ROWS_BY_GROUP.imac ?? [] },
  { id: "mac-desktop", title: "Mac mini, Studio & Pro pricing", subtitle: "All desktop Macs from 2014 onward.", rows: PRICE_ROWS_BY_GROUP["mac-desktop"] ?? [] },
  { id: "iphone",  title: "iPhone pricing", subtitle: "iPhone 8 through iPhone 16 Pro Max.", rows: PRICE_ROWS_BY_GROUP.iphone ?? [] },
  { id: "ipad",    title: "iPad pricing", subtitle: "iPad mini, Air, standard, and Pro 11\"/12.9\".", rows: PRICE_ROWS_BY_GROUP.ipad ?? [] },
];

const HOW_PRICING_WORKS = [
  { icon: Search,      title: "Free diagnosis",     body: "Walk in or send a WhatsApp. The technician opens the device and finds the actual fault - no charge, even if you walk away." },
  { icon: Banknote,    title: "Quote before repair", body: "Final price in writing on WhatsApp before any screwdriver moves. Approve, decline, or take the device back - your call." },
  { icon: ShieldCheck, title: "No fix, no charge",  body: "If a board can't be saved or a part isn't available, you owe AED 0. The diagnosis report is yours to keep." },
  { icon: Clock,       title: "Up to 12-month warranty",    body: "Written warranty up to 12 months - 12 months on most hardware, 3 months on batteries, 15 days on software, board, liquid-damage and data work. Same fault back inside the period, redone free." },
];

const COMPARISON = [
  { row: "Diagnosis fee",          us: "AED 0 (free)",            apple: "AED 200-350" },
  { row: "Turnaround time",        us: "Same day to 5 days",      apple: "5-14 days (sent to Ireland for some repairs)" },
  { row: "Free pickup & delivery", us: "Yes - across Dubai",      apple: "No - drop-off only" },
  { row: "Warranty",               us: "Up to 12 months (by repair)",         apple: "90 days on repairs" },
  { row: "MacBook screen repair",  us: "From AED 600",            apple: "AED 1,400-2,200" },
  { row: "MacBook battery",        us: "From AED 590",            apple: "AED 750-950" },
  { row: "Component-level repair", us: "Yes - board repair down to chip level", apple: "No - full board swap only" },
  { row: "Out-of-warranty Macs",   us: "Yes - including Intel models back to 2012", apple: "Limited - vintage models refused" },
];

const PRICING_FAQS = [
  { q: "Why is your MacBook screen repair from AED 600 when the Apple Store quotes AED 1,800?",
    a: "Two reasons. First, component-level repair: when only the LCD panel is damaged, the team replaces the panel alone instead of swapping the entire display assembly. Second, no Apple Store overhead - Concord Tower rent is a fraction of a Mall of the Emirates retail unit." },
  { q: "Are the prices listed final?",
    a: "The prices are starting prices for the most common fault on the most common model. After the free diagnosis, you receive a final price on WhatsApp. 80% of repairs land within 10% of the listed price." },
  { q: "Do prices include VAT?",
    a: "Yes. Every price on this page is the all-in amount you pay. AED 600 means AED 600 - no 5% added at checkout." },
  { q: "What payment methods do you accept?",
    a: "Cash (AED), Visa, Mastercard, Apple Pay, Samsung Pay, and bank transfer to Emirates NBD. Payment on collection only - never before the repair is approved." },
  { q: "Do you offer a discount for multiple devices?",
    a: "For 3 or more devices in one drop-off (common with corporate clients in Media City and JLT), the labour component drops 15%. WhatsApp Shafiq with the model list for a fixed quote." },
  { q: "Is the AED 299 starting price guaranteed to fix a water-damaged MacBook?",
    a: "No. Liquid damage recovery is 80-90% successful, not 100%. The AED 299 starting price covers the ultrasonic clean; heavier corrosion treatment and component replacement (up to 4 chips) is quoted after the free diagnosis. If the board is unrecoverable, you pay AED 0 and receive the data recovery quote separately." },
  { q: "Why is the iPhone 15 screen so much more than the iPhone 14?",
    a: "Apple changed the display assembly on iPhone 15 - the panel now ships paired with the True Tone IC. Aftermarket panels lose True Tone. Genuine OEM panels for iPhone 15 cost the workshop AED 720 wholesale, which sets the AED 1,040 customer price." },
  { q: "Do the prices change for older Intel MacBooks?",
    a: "Most repairs cost the same. Two exceptions: full display assemblies on 2016-2019 Touch Bar Pros run AED 1,820 (instead of AED 600 for panel-only) because the entire lid swaps as one unit. RAM upgrades are AED 400 - Apple Silicon RAM is soldered and can't be upgraded." },
  { q: "What's the cheapest way to fix a slow, old MacBook?",
    a: "SSD upgrade labour plus a fresh macOS install - AED 600 + AED 300 = AED 900 (plus the drive). A 2015 MacBook Air with a 256 GB SSD swap and a clean install runs noticeably faster than a 2018 model with a failing 128 GB drive." },
  { q: "Is data recovery extra on top of the repair price?",
    a: "Recovery from a working drive in a working MacBook: included free. Recovery from a dead drive or water-damaged board: AED 299 minimum, up to AED 2,600 for chip-off forensic recovery on T2/M-series boards." },
  { q: "Do you charge for pickup and delivery?",
    a: "Free across Dubai Mainland - Marina, JLT, Downtown, Business Bay, Palm, JBR, and the rest. Sharjah and Abu Dhabi pickup runs AED 100 each way. Pickup window: Monday to Saturday, 9 am to 5 pm." },
  { q: "What happens if the same fault returns inside the warranty?",
    a: "Bring the device back, no questions asked. The original technician - usually Shafiq for MacBook board work or Usman for iPhone screens - re-opens the unit and redoes the repair free of charge. Average warranty claim turnaround: 24 hours." },
];

export default function Pricing() {
  // JSON-LD is server-rendered so it reaches crawlable HTML: the priced Service/Offer graph
  // (from PRICING_SERVICES) + LocalBusiness come from <PageSchema path="/pricing"> (see
  // src/lib/page-schema.ts), and FAQPage from <FAQAccordion injectSchema> below. This used to
  // be injected client-side via useSeo and never reached the prerendered HTML. The price
  // tables (MACBOOK/IMAC/…) and PRICING_SERVICES must stay in lockstep. Title/description:
  // App Router Metadata API.
  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="service"
        tone="dark"
        eyebrow="Full price list"
        title="Transparent Pricing: No Hidden Fees"
        subtitle="Every price below is an estimated starting price for the most common fault on the most common model. Your exact price is confirmed in writing after a free diagnosis. Quote before repair, warranty included."
      />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      </section>

      {/* How pricing works */}
      <section aria-labelledby="how-pricing" className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 id="how-pricing" className="text-[28px] md:text-[32px] mb-md">How our pricing works</h2>
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
          {HOW_PRICING_WORKS.map(({ icon: Icon, title, body }) => (
            <article key={title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex flex-col gap-sm">
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
            <a key={t.id} href={`#${t.id}`} className="text-accent underline underline-offset-2">{t.title.replace(" pricing", "")}</a>
          ))}
        </nav>
      </section>

      {/* Pricing tables */}
      {ALL_TABLES.map((t) => (
        <PriceSection key={t.id} id={t.id} title={t.title} subtitle={t.subtitle} rows={t.rows} />
      ))}

      {/* What's included */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl grid gap-xl md:grid-cols-2">
        <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl">
          <h2 className="text-[24px] mb-md flex items-center gap-sm">
            <Check size={24} className="text-whatsapp" aria-hidden /> What's included in every repair
          </h2>
          <ul className="space-y-sm text-[15px] text-text leading-relaxed">
            {[
              "Genuine Apple parts when available, premium-grade aftermarket otherwise",
              "Written warranty up to 12 months on parts and workmanship (15 days to 12 months by repair)",
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

        <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl">
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

      {/* Broken-glass warranty notice (highlighted) */}
      <div className="mx-auto max-w-content px-5 md:px-6 mt-2xl">
        <GlassWarrantyNotice device="screen" />
      </div>

      {/* Comparison table */}
      <section aria-labelledby="vs-apple" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 id="vs-apple" className="text-[28px] md:text-[32px] mb-sm">
          MacBook Repair Dubai vs Apple Store
        </h2>
        <p className="text-[16px] text-text-muted mb-md max-w-[70ch]">
          Apple Store prices below are sourced from a same-day quote run on a 2021 MacBook Pro 14" M1 Pro at the Mall of the Emirates Apple Store, December 2025.
        </p>
        {/* Mobile: stack each row so the Apple Store column is never hidden off-screen. */}
        <ul className="md:hidden flex flex-col gap-sm">
          {COMPARISON.map((c) => (
            <li key={c.row} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
              <p className="font-semibold text-text mb-xs">{c.row}</p>
              <p className="text-[14px]"><span className="font-semibold text-accent">Us:</span> <span className="mono text-accent">{c.us}</span></p>
              <p className="text-[14px] text-text-muted"><span className="font-semibold">Apple Store:</span> <span className="mono">{c.apple}</span></p>
            </li>
          ))}
        </ul>
        <ScrollHintTable className="hidden md:block border border-border rounded-md bg-bg-alt" fadeClass="from-bg-alt">
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
        </ScrollHintTable>
      </section>

      {/* FAQ */}
      <section aria-labelledby="pricing-faq" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 id="pricing-faq" className="text-[28px] md:text-[32px] mb-md">Pricing FAQ</h2>
        <FAQAccordion items={PRICING_FAQS} injectSchema tone="dark" />
      </section>

      {/* Final CTA */}
      <section className="mt-3xl" style={{ background: "#2C3137" }}>
        <div className="mx-auto max-w-content px-5 md:px-6 py-[56px] flex flex-col items-start gap-md">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold">Get your price</p>
          <h2 className="text-white text-[28px] md:text-[34px] font-bold max-w-[28ch] leading-tight">
            Send the model number, get a price in minutes
          </h2>
          <p className="text-on-primary-muted text-[16px] max-w-[60ch] leading-relaxed">
            Shafiq replies on WhatsApp typically within 4 minutes during business hours
            (9 am to 10 pm, Monday to Saturday). Or call {NAP.phoneDisplay}.
          </p>
          <WhatsAppCTA
            message="Hi Shafiq, I'd like a price quote for an Apple repair. Model: "
            label="Send model on WhatsApp"
            size="lg"
          />
        </div>
      </section>
      </div>
      <RelatedArticles path="/pricing" />
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
      {/* Mobile: stacked cards so the price is always visible (never clipped off-screen). */}
      <ul className="md:hidden flex flex-col gap-sm">
        {rows.map((r) => (
          <li key={r.service} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
            <p className="font-semibold text-text">{r.service}</p>
            <div className="mt-xs flex items-baseline justify-between gap-md">
              <span className="mono font-semibold text-accent text-[16px]">AED {r.price}</span>
              <a
                href={`${NAP.whatsappUrl}?text=${encodeURIComponent(`Hi Shafiq, quote please for: ${r.service}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1 text-whatsapp font-semibold hover:underline whitespace-nowrap text-[14px]"
              >
                Get price
              </a>
            </div>
            <p className="mt-xs text-[13px] text-text-muted">
              <span className="mono">{r.timeline}</span> · {r.warranty} warranty
            </p>
          </li>
        ))}
      </ul>
      <ScrollHintTable className="hidden md:block border border-border rounded-md bg-bg-alt" fadeClass="from-bg-alt">
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
      </ScrollHintTable>
      <p className="mt-sm text-[12px] text-text-faint mono flex items-center gap-2">
        <Sparkles size={12} aria-hidden /> Free pickup & delivery across Dubai
        <span className="text-text-faint">·</span>
        <Truck size={12} aria-hidden /> Same-day return on most repairs
      </p>
    </section>
  );
}
