"use client";
import { Link } from "@/lib/router-compat";
import {
  Star, MessageCircle, Phone, Droplets, Cpu, PowerOff, MonitorX,
  Wallet, Truck, ClipboardCheck, Recycle, CheckCircle2, BadgeDollarSign,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { TradeInEstimator } from "@/components/blocks/TradeInEstimator";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, breadcrumbs } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { NAP } from "@/content/site";

const PATH = "/sell-faulty-macbook-dubai";

// Faults we still pay for - honest, no fabricated payout figures.
const FAULTS = [
  { title: "Water & liquid damage", body: "Spilled coffee, pool drops, corrosion, won't charge after liquid contact. Boards are often more recoverable than owners assume - we still buy them.", icon: Droplets },
  { title: "Dead logic board", body: "No power, boot-loops, three-beep / no-display faults, or an Apple quote of several thousand dirhams to swap the board. We buy the unit as-is.", icon: Cpu },
  { title: "Won't turn on", body: "No sign of life, black screen, or stuck on the Apple logo. Even a Mac that won't boot has real recoverable value in its chassis, screen and parts.", icon: PowerOff },
  { title: "Cracked screen & body", body: "Smashed display, dented lid, broken hinge or keyboard. Cosmetic and physical damage doesn't disqualify a device - we still make an offer.", icon: MonitorX },
];

// How it works - 3 steps.
const STEPS = [
  { title: "Tell us what you have", body: "Send the model, age, storage and what's wrong on WhatsApp - a photo helps. Working or faulty, we want to see it.", icon: MessageCircle },
  { title: "Get a free valuation", body: "Shafiq Ahmed sends a real, technician-confirmed offer - usually in under 10 minutes during shop hours. No lowball bots, no obligation.", icon: ClipboardCheck },
  { title: "Free collection, same-day payment", body: "Accept the offer and we collect free anywhere in Dubai. Get paid same day in cash or take it as credit against a repair or another device.", icon: Wallet },
];

// What we buy.
const WE_BUY = [
  "MacBook Pro & MacBook Air (Apple Silicon M5 / M4 / M3 / M2 / M1 and Intel)",
  "iMac, Mac mini, Mac Studio & Mac Pro",
  "iPhone - every model, screen-cracked or water-damaged included",
  "iPad - including charging-port and screen faults",
];

const FAQS = [
  { q: "Do you really buy MacBooks that don't turn on?",
    a: "Yes. A MacBook that won't power on still has real value - the screen, chassis, battery, ports and often the logic board itself are recoverable. We buy dead, water-damaged and cracked Macs that Apple and most buyers reject. Tell us the model and what happened and we'll send a free valuation." },
  { q: "What's a water-damaged MacBook worth?",
    a: "It depends on the model, age, storage and how far the corrosion has spread, but liquid damage is rarely a write-off to us. Because we repair at component level in-house, we can recover value others can't - so we pay more than a generic scrap buyer. Every offer is confirmed by a real technician, never a fixed bot figure." },
  { q: "How does the valuation work?",
    a: "Four things set the offer: the model, the device's age, its condition (working, minor damage, or faulty) and the storage capacity. Newer Apple Silicon Macs and higher-storage configs are worth the most, but even an older or faulty unit gets a fair, honest number. Send the details on WhatsApp for an exact quote." },
  { q: "Is collection really free across Dubai?",
    a: "Yes - free collection anywhere in Dubai once you accept the offer, at no cost to you. You don't need to leave home or office. We confirm a time on WhatsApp and come to you." },
  { q: "How and when do I get paid?",
    a: "Same day. Once we've collected and confirmed the device matches what you described, you're paid in cash or by transfer that day. You can also take the value as credit against a repair or toward another Apple device instead of cash." },
  { q: "Should I erase my data before selling a faulty Mac?",
    a: "If the Mac still boots, sign out of your Apple Account and erase it first - see our guide on erasing a Mac before giving it away. If it's dead or water-damaged and won't start, we'll handle the data securely and walk you through removing Activation Lock so the sale completes cleanly." },
  { q: "Is it better to repair my MacBook or sell it as faulty?",
    a: "Often a repair is the smarter move - a screen from AED 600, battery from AED 450 or data recovery from AED 400 can be far less than a new Mac and restore most of the value. We'll give you both numbers honestly: what the repair costs versus what we'd pay for it as-is, so you can choose. Start at our MacBook Repair Dubai page if you're unsure." },
];

// Offer / Service JSON-LD for the buy/trade service (literal - distinct from repair Service helper).
const buyServiceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE.url}${PATH}#buyservice`,
  name: "We Buy Faulty & Damaged Apple Devices in Dubai",
  serviceType: "Used & faulty Apple device buying / trade-in",
  description:
    "We buy faulty, water-damaged, cracked and dead Apple devices - MacBook, iMac, Mac mini, iPhone and iPad - across Dubai. Free valuation, free collection and same-day cash payment or repair credit.",
  provider: { "@id": `${SITE.url}/#localbusiness`, sameAs: "https://maps.app.goo.gl/eg8RhTxBg8nFLnWN9" },
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
  },
  url: `${SITE.url}${PATH}`,
  category: "Used Electronics Buyer",
  acceptedPaymentMethod: [
    { "@type": "PaymentMethod", name: "Cash" },
    { "@type": "PaymentMethod", name: "Credit" },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    description:
      "Free technician-confirmed valuation for working or faulty Apple devices, free collection across Dubai, and same-day payment in cash or repair credit.",
    availability: "https://schema.org/InStock",
    areaServed: { "@type": "City", name: "Dubai" },
    acceptedPaymentMethod: [
      { "@type": "PaymentMethod", name: "Cash" },
      { "@type": "PaymentMethod", name: "Credit" },
    ],
  },
};

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Apple Repair", path: "/apple-repair-dubai" },
  { name: "Sell a Faulty MacBook", path: PATH },
];

export default function SellFaultyMacBookDubai() {
  useSeo(
    {
      title: "Sell Faulty or Dead MacBook Dubai - We Buy Broken Apple",
      description:
        "Water-damaged, cracked, dead logic board or won't turn on? We buy faulty MacBook, iMac, iPhone & iPad across Dubai. Free valuation, free collection, same-day cash. WhatsApp 055 741 3706.",
      path: PATH,
    },
    [
      localBusiness(),
      organization(),
      buyServiceLd,
      breadcrumbs(CRUMBS),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/sell-faulty-macbook-dubai")?.src}
        imageAlt={topicForPath("/sell-faulty-macbook-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Buy & trade-in · faulty devices welcome · Dubai"
        title="We Buy Faulty & Damaged Apple Devices in Dubai"
        subtitle="Water-damaged, cracked, dead logic board, won't turn on? We still buy it. Recover real value from a MacBook, iMac, iPhone or iPad that other buyers reject - free valuation, free collection across Dubai, same-day payment."
        ctaLabel="Get my free valuation"
      >
        {/* Hero renders the CTA pair itself (ctaLabel above). Only the trust line goes here. */}
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 215+ reviews</span>
          <span>·</span>
          <span>Working or faulty</span>
          <span>·</span>
          <span>Free collection · same-day cash</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={CRUMBS} />
      </section>

      {/* Answer-first intro */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md">
          A <strong>faulty MacBook still has value</strong>. Whether it took a liquid spill, has a
          dead logic board, a cracked screen or simply won't turn on, we buy Apple devices that
          others write off - because we repair at component level in-house and can recover value
          a generic buyer can't. Tell us the model and what's wrong and you'll get a{" "}
          <strong>free, technician-confirmed valuation</strong>, <strong>free collection anywhere in Dubai</strong>{" "}
          and <strong>same-day payment in cash or repair credit</strong>. No obligation, no lowball bots - every
          offer is set by a real engineer, not an algorithm.
        </p>
        <p className="text-[15px] text-text-muted leading-relaxed max-w-[75ch] m-0">
          Not sure whether to sell or fix it? We'll give you both numbers honestly. Start at our{" "}
          <Link to="/" className="text-accent underline-offset-4 hover:underline font-medium">MacBook Repair Dubai</Link>{" "}
          page, or read on to see what we buy and how the valuation works.
        </p>
      </section>

      {/* Trade-in estimator */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-2xl">
        <TradeInEstimator tone="dark" heading="Get your free valuation - working or faulty" />
      </section>

      {/* What we buy */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <BadgeDollarSign size={28} className="text-accent" aria-hidden /> What we buy
          </h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[70ch] mb-lg">
            We buy the full Apple range, in any condition - pristine, scratched, smashed or completely dead.
          </p>
          <ul className="grid gap-sm md:grid-cols-2 max-w-[80ch]">
            {WE_BUY.map((t) => (
              <li key={t} className="flex gap-2 text-[15px] text-text">
                <CheckCircle2 size={20} className="text-accent mt-[2px] shrink-0" aria-hidden /> {t}
              </li>
            ))}
          </ul>
          <p className="text-[14px] text-text-muted mt-lg max-w-[70ch]">
            Browse the matching repair hubs if you'd rather fix and keep your device:{" "}
            <Link to="/" className="text-accent underline-offset-4 hover:underline">MacBook</Link>,{" "}
            <Link to="/iphone-repair-dubai" className="text-accent underline-offset-4 hover:underline">iPhone</Link> and{" "}
            <Link to="/ipad-repair-dubai" className="text-accent underline-offset-4 hover:underline">iPad</Link>.
          </p>
        </div>
      </section>

      {/* How valuation works */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <ClipboardCheck size={28} className="text-accent" aria-hidden /> How the valuation works
        </h2>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[70ch] mb-lg">
          Every offer is built from four honest factors - and confirmed by a real technician, never a
          fixed online figure:
        </p>
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Model", b: "The exact model and chip. Apple Silicon M5 / M4 / M3 Macs and current iPhone and iPad models hold the most value." },
            { t: "Age", b: "Newer devices are worth more, but we still pay fairly for older Intel Macs and previous-generation models." },
            { t: "Condition", b: "Working, minor damage, or faulty. Damage lowers the number - it never makes it zero. We buy dead and water-damaged units too." },
            { t: "Storage", b: "Higher SSD or storage capacity raises the offer. Tell us the configuration for an accurate quote." },
          ].map((f) => (
            <article key={f.t} className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[17px] font-bold mb-sm">{f.t}</h3>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{f.b}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Working or faulty - we buy both */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Recycle size={28} className="text-accent" aria-hidden /> Working or faulty - we buy both
          </h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[70ch] mb-lg">
            A clean, working Mac fetches the best price - but a faulty one is rarely worthless. These are the
            faults we still pay real money for:
          </p>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
            {FAULTS.map((f) => {
              const Icon = f.icon;
              return (
                <article key={f.title} className="border border-border bg-bg-card rounded-md p-lg">
                  <h3 className="text-[17px] font-bold mb-sm flex items-center gap-2">
                    <Icon size={18} className="text-accent" aria-hidden /> {f.title}
                  </h3>
                  <p className="text-[14px] text-text-muted leading-relaxed m-0">{f.body}</p>
                </article>
              );
            })}
          </div>
          <p className="text-[14px] text-text-muted mt-lg max-w-[70ch]">
            Think it's worth fixing instead? A{" "}
            <Link to="/" className="text-accent underline-offset-4 hover:underline">MacBook repair</Link>{" "}
            often costs far less than its recovered value - we'll tell you the honest comparison either way.
          </p>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg flex items-center gap-sm">
          <Truck size={28} className="text-accent" aria-hidden /> How it works - 3 simple steps
        </h2>
        <ol className="grid gap-md md:grid-cols-3 list-none p-0 m-0">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title} className="border border-border bg-bg-card rounded-md p-lg">
                <div className="flex items-center gap-2 mb-sm">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent text-[15px] font-bold shrink-0">{i + 1}</span>
                  <Icon size={20} className="text-accent" aria-hidden />
                </div>
                <h3 className="text-[18px] font-bold mb-sm">{s.title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Selling a faulty Apple device - FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Across Dubai - we come to you</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="relative flex flex-col items-start gap-md">
          <h2 className="text-text text-[28px] md:text-[32px] max-w-[32ch]">Turn a broken Apple device into cash today</h2>
          <p className="text-text-muted text-[16px] max-w-[62ch]">
            Send the model and a photo on WhatsApp. Free technician-confirmed valuation, free collection
            anywhere in Dubai, and same-day payment in cash or repair credit - working or faulty.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Get my free valuation
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
          </div>
        </div>
      </section>
      </div>
    </PageShell>
  );
}
