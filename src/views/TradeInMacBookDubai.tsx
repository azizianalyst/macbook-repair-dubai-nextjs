"use client";
import { Link } from "@/lib/router-compat";
import {
  Star, MessageCircle, Phone, Recycle, Banknote, Truck,
  Laptop, Smartphone, Tablet, Monitor, CheckCircle2,
  Gauge, Calendar, HardDrive, Cpu, Wrench, ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { TradeInEstimator } from "@/components/blocks/TradeInEstimator";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Reveal } from "@/components/blocks/Reveal";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, breadcrumbs } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { NAP } from "@/content/site";

const PATH = "/trade-in-macbook-dubai";

// What we buy / take in trade - honest device list, links to the real repair hubs.
const WE_BUY = [
  { icon: Laptop, label: "MacBook Pro & MacBook Air", note: "M5, M4, M3, M2, M1 and Intel models", href: "/" },
  { icon: Monitor, label: "iMac, Mac mini, Mac Studio & Mac Pro", note: "Apple Silicon and Intel desktops", href: "/imac-repair-dubai" },
  { icon: Smartphone, label: "iPhone", note: "Latest models back to older generations", href: "/iphone-repair-dubai" },
  { icon: Tablet, label: "iPad", note: "iPad Pro, Air, mini and standard iPad", href: "/ipad-repair-dubai" },
] as const;

// Factors that move a valuation - transparent, no fabricated payout figures.
const VALUATION_FACTORS = [
  { icon: Cpu, title: "Model & chip", body: "An Apple Silicon M5 or M4 MacBook holds far more value than an Intel model. We identify your exact model and chip first." },
  { icon: Calendar, title: "Age & generation", body: "Newer generations command higher trade-in credit. We benchmark against current Dubai resale demand, not a guess." },
  { icon: Gauge, title: "Condition", body: "Screen, casing, battery health and whether it powers on. Cosmetic wear is fine - we account for it honestly." },
  { icon: HardDrive, title: "Storage & specs", body: "RAM, SSD size and configuration matter. A 1TB / 16GB machine is worth more than a base unit of the same model." },
] as const;

const STEPS = [
  { n: "1", icon: MessageCircle, title: "Send your details", body: "WhatsApp us the device, model/era and condition - or use the estimator on this page. Photos help but are not required. You get a free, no-obligation valuation, usually within 10 minutes during shop hours." },
  { n: "2", icon: Truck, title: "Free collection or visit", body: "We arrange free collection anywhere in Dubai, or you drop in to our Dubai Media City workshop. Shafiq Ahmed and the team verify the device in person and confirm the offer on the spot." },
  { n: "3", icon: Banknote, title: "Same-day payment or credit", body: "Accept and you are paid the same day in cash or card - or apply the value as credit toward a newer Mac, a repair, or an upgrade. No hidden deductions after the fact." },
] as const;

const FAQS = [
  {
    q: "Can I trade in my old MacBook toward a newer model in Dubai?",
    a: "Yes. We assess your current Mac, give you a fair valuation, and apply that value as instant credit toward a newer model, an upgrade, or a repair. You can also take the value as same-day cash or card if you prefer. Tell us your model on WhatsApp and we'll confirm the trade-in credit before you commit.",
  },
  {
    q: "Do you buy faulty or broken Macs and iPhones?",
    a: "We do. Working or faulty, we buy and trade both. A cracked screen, dead battery, water damage or a Mac that won't power on still has value - we repair and refurbish in-house, so a fault that worries you is routine for us. Faulty devices are valued honestly, never written off to zero.",
  },
  {
    q: "How is my trade-in value calculated?",
    a: "Four things: the exact model and chip (an Apple Silicon M5/M4 is worth far more than an Intel model), the age/generation, the physical condition (screen, casing, battery health, whether it powers on), and the specs (RAM and SSD/storage size). We benchmark against real Dubai resale demand and confirm every figure with a technician - no lowball bot quotes.",
  },
  {
    q: "Is the valuation free and is there any obligation?",
    a: "The valuation is completely free with zero obligation. You only proceed if you're happy with the offer. There's no fee to get a quote, no charge for collection, and no pressure to sell.",
  },
  {
    q: "Do you collect the device, and how fast do I get paid?",
    a: "Yes - free collection across Dubai is included, or you can visit our Al Sufouh / Dubai Media City workshop. Once the device is verified in person and you accept, payment is same-day by cash or card, or applied immediately as credit toward your next Mac or a repair.",
  },
  {
    q: "Will my data be wiped before resale?",
    a: "Always. Every device we take in is securely erased and reset before it's refurbished or resold. We recommend you sign out of your Apple ID and back up your data first, and we'll guide you through it if you're unsure.",
  },
  {
    q: "Can I use the trade-in value toward a repair instead of an upgrade?",
    a: "Absolutely. The value of a device you no longer need can be applied as credit against a repair on another Mac, iPhone or iPad - for example, putting the trade-in value of an old MacBook toward a screen or battery on your main machine.",
  },
];

// Offer/Service JSON-LD literal for the buy/trade service.
const tradeInOffer = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE.url}${PATH}#service`,
  name: "MacBook & Apple Device Trade-In Dubai",
  serviceType: "Apple device buyback and trade-in",
  description:
    "Trade in or sell your Apple device in Dubai - MacBook, iMac, Mac mini, iPhone and iPad, working or faulty. Free valuation, free collection across Dubai, same-day cash, card or store credit toward a newer model.",
  provider: { "@id": `${SITE.url}/#localbusiness` },
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
  },
  url: SITE.url + PATH,
  category: "Electronics Buyback & Trade-In",
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock",
    acceptedPaymentMethod: [
      "http://purl.org/goodrelations/v1#Cash",
      "http://purl.org/goodrelations/v1#ByBankTransferInAdvance",
      "http://purl.org/goodrelations/v1#PaymentMethodCreditCard",
    ],
    areaServed: "Dubai",
    seller: { "@id": `${SITE.url}/#localbusiness` },
    itemOffered: {
      "@type": "Service",
      name: "Apple device trade-in & buyback",
    },
  },
};

export default function TradeInMacBookDubai() {
  useSeo(
    {
      title: "MacBook Trade-In Dubai - Upgrade for Less, Instant Credit",
      description:
        "Trade in your old Mac, iPhone or iPad in Dubai - working or faulty. Free valuation, free collection, same-day cash or instant credit toward a newer model. WhatsApp 055 741 3706.",
      path: PATH,
    },
    [
      localBusiness(),
      organization(),
      tradeInOffer,
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Apple Repair", path: "/apple-repair-dubai" },
        { name: "Trade-In & Upgrade Your Mac", path: PATH },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/trade-in-macbook-dubai")?.src}
        imageAlt={topicForPath("/trade-in-macbook-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Trade-In & Buyback · Dubai"
        title="Trade-In & Upgrade Your Mac in Dubai"
        subtitle="Trade in your old Mac toward a newer model - we assess it, value it fairly, and credit your device. Working or faulty, we buy both. Free valuation, free collection across Dubai, same-day payment or instant upgrade credit."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 215+ reviews</span>
          <span>·</span>
          <span>40,000+ Apple devices serviced</span>
          <span>·</span>
          <span>21+ years in Dubai</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Trade-In & Upgrade Your Mac", path: PATH },
        ]} />
      </section>

      {/* Answer-first intro */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl quick-answer">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md" itemProp="text">
          <strong>Yes - you can trade in your old Mac toward a newer model in Dubai, and you don't need it to be in perfect shape.</strong>{" "}
          We assess your current device, give you a fair valuation, and apply that value as instant credit toward an upgrade - or pay you the same day in cash or card if you'd rather just sell. We take MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad, <strong>working or faulty</strong>. Because we repair and refurbish everything in-house, a cracked screen, dead battery or water-damaged board doesn't write your device off - it just factors into an honest offer.
        </p>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[75ch]">
          The same Dubai workshop that has serviced Apple hardware since 2004 handles every valuation. Need a repair instead of an upgrade? See <Link to="/" className="text-accent underline underline-offset-2">MacBook repair in Dubai</Link>, or explore <Link to="/apple-repair-dubai" className="text-accent underline underline-offset-2">all Apple repair services</Link>.
        </p>
      </section>

      {/* Estimator */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <Reveal>
          <TradeInEstimator tone="dark" heading="Get your free trade-in valuation" />
        </Reveal>
      </section>

      {/* What we buy */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Recycle size={28} className="text-accent" aria-hidden /> What we buy & take in trade
          </h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            If it's an Apple device, we're interested - across every generation, from the newest Apple Silicon M5 machines to older Intel models. Tap any device to see the matching repair hub.
          </p>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {WE_BUY.map((d) => (
              <Link
                key={d.label}
                to={d.href}
                className="group border border-border bg-bg-card rounded-md p-lg flex items-start gap-md motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <d.icon size={24} className="text-accent mt-0.5 shrink-0" aria-hidden />
                <span>
                  <span className="block text-[17px] font-bold text-text">{d.label}</span>
                  <span className="block text-[14px] text-text-muted leading-relaxed mt-0.5">{d.note}</span>
                  <span className="mt-sm inline-flex items-center gap-1 text-[13px] mono text-accent">
                    View repairs <ArrowRight size={13} className="motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How valuation works */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Gauge size={28} className="text-accent" aria-hidden /> How your valuation works
        </h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          We don't run a black-box pricing bot. A real technician identifies your device and weighs four factors, then confirms a fair figure benchmarked against current Dubai resale demand.
        </p>
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
          {VALUATION_FACTORS.map((f) => (
            <article key={f.title} className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[17px] font-bold mb-sm flex items-center gap-2">
                <f.icon size={18} className="text-accent shrink-0" aria-hidden /> {f.title}
              </h3>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Working or faulty */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6 grid gap-xl lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <Wrench size={28} className="text-accent" aria-hidden /> Working or faulty - we buy both
            </h2>
            <p className="text-[16px] text-text leading-relaxed max-w-[60ch] mb-md">
              Other buyers reject anything with a fault, or slash the offer to almost nothing. We don't. We're an Apple repair workshop first, so faults we see every day - a cracked screen, swollen battery, water damage, a Mac that won't boot - are routine, not deal-breakers.
            </p>
            <p className="text-[16px] text-text-muted leading-relaxed max-w-[60ch] m-0">
              That means a faulty device gets a genuine, fair valuation rather than being written off to zero. If your machine is still working, even better - but never throw out an old Mac because you think it's "too broken" to be worth anything.
            </p>
          </div>
          <ul className="grid gap-sm">
            {[
              "Cracked or dead screens",
              "Swollen or non-charging batteries",
              "Liquid / water-damaged boards",
              "Macs that won't power on or boot",
              "Keyboard, trackpad and port faults",
              "Cosmetic dents, scratches and wear",
            ].map((item) => (
              <li key={item} className="border border-border bg-bg-card rounded-md p-md flex items-center gap-sm text-[15px] text-text">
                <CheckCircle2 size={18} className="text-accent shrink-0" aria-hidden /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Truck size={28} className="text-accent" aria-hidden /> How it works - 3 simple steps
        </h2>
        <div className="grid gap-md md:grid-cols-3 mt-lg">
          {STEPS.map((s) => (
            <article key={s.n} className="border border-border bg-bg-card rounded-md p-lg flex flex-col">
              <div className="flex items-center gap-sm mb-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent mono text-[16px] font-semibold">{s.n}</span>
                <s.icon size={20} className="text-accent" aria-hidden />
              </div>
              <h3 className="text-[18px] font-bold mb-sm">{s.title}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed m-0">{s.body}</p>
            </article>
          ))}
        </div>
        <p className="text-[15px] text-text-muted leading-relaxed max-w-[70ch] mt-lg">
          Prefer to combine a trade-in with a fix on another device? Put the value of an old Mac toward a{" "}
          <Link to="/macbook-screen-repair-dubai" className="text-accent underline underline-offset-2">screen repair</Link> or{" "}
          <Link to="/macbook-battery-replacement-dubai" className="text-accent underline underline-offset-2">battery replacement</Link> on your main machine.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Trade-in & buyback FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where we're based</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="relative flex flex-col items-start gap-md">
          <h2 className="text-text text-[28px] md:text-[32px] max-w-[34ch]">Get your free trade-in valuation today</h2>
          <p className="text-text-muted text-[16px] max-w-[60ch]">
            Tell us your device, model and condition - working or faulty - and Shafiq Ahmed will send a fair offer the same day. Free collection across Dubai, same-day cash, card or instant upgrade credit. No fee, no obligation.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
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
