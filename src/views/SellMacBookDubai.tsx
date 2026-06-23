"use client";
import { Link } from "@/lib/router-compat";
import {
  Star,
  MessageCircle,
  Phone,
  Banknote,
  Truck,
  ClipboardCheck,
  Laptop,
  Smartphone,
  Tablet,
  Monitor,
  Wrench,
  Gauge,
  CalendarClock,
  HardDrive,
  CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { Reveal } from "@/components/blocks/Reveal";
import { TradeInEstimator } from "@/components/blocks/TradeInEstimator";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { conversionSiblings } from "@/lib/related-services";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, breadcrumbs } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { NAP } from "@/content/site";

const PATH = "/sell-macbook-dubai";

// What we buy - Apple device families, working or faulty.
const WHAT_WE_BUY = [
  {
    icon: Laptop,
    title: "MacBook Pro & MacBook Air",
    body: "Every Apple-silicon and Intel model - from the newest M5, M5 Pro and M5 Max down to older Retina and Intel MacBooks. Cracked screen, dead battery or water damage? Still cash in your pocket.",
  },
  {
    icon: Monitor,
    title: "iMac, Mac mini, Mac Studio & Mac Pro",
    body: "Desktop Macs of any generation. We collect bulky iMacs and Studio set-ups from your home or office so you never have to move them yourself.",
  },
  {
    icon: Smartphone,
    title: "iPhone",
    body: "From the latest iPhone back through older models. Cracked glass, swollen battery, no service or won't power on - we still make a real offer.",
  },
  {
    icon: Tablet,
    title: "iPad",
    body: "iPad Pro, Air, mini and standard iPad, with or without Pencil and keyboard. Even a shattered screen or a tablet stuck on the Apple logo has value.",
  },
  {
    icon: Wrench,
    title: "Faulty & spares-or-repair",
    body: "Logic-board faults, liquid damage, no-boot, no-display, Activation-Lock-free units - our workshop refurbishes what others reject, so faulty devices still pay.",
  },
];

// How valuation works - the honest factors a real technician weighs.
const VALUATION_FACTORS = [
  {
    icon: Laptop,
    title: "Model & chip",
    body: "An M5 MacBook Pro is worth far more than an Intel one. We identify the exact model, chip (M5 / M4 / M3 / M2 / M1 or Intel) and GPU so the offer reflects what your machine really is.",
  },
  {
    icon: CalendarClock,
    title: "Age & release year",
    body: "Newer devices hold the most resale value. We factor in the release year and how long Apple will keep supporting it with macOS, iOS and watchOS updates.",
  },
  {
    icon: Gauge,
    title: "Condition",
    body: "Working and clean earns the most. Minor wear, cracked glass, a tired battery or a non-booting board each adjust the figure - but every grade still gets a real, honest number.",
  },
  {
    icon: HardDrive,
    title: "Storage & specs",
    body: "Storage size, RAM and any upgrades matter. A 1TB / 32GB MacBook is worth more than a base model, and we account for that instead of quoting one flat price.",
  },
];

// 3-step process.
const STEPS = [
  {
    icon: MessageCircle,
    title: "1 · Tell us what you have",
    body: "Send the model, rough age and condition on WhatsApp, or use the valuation tool below. A photo of the screen and back helps us be precise. Shafiq Ahmed and the team reply with an indicative offer fast.",
  },
  {
    icon: Truck,
    title: "2 · Free collection across Dubai",
    body: "Happy with the number? We arrange free pickup anywhere in Dubai, or you drop in to our workshop. No charge for collection - it is part of the service whether you sell or not.",
  },
  {
    icon: Banknote,
    title: "3 · Inspect & paid same day",
    body: "We verify the device in front of you, confirm the final figure, and pay the same day - cash or instant bank transfer. Prefer to trade up? Put the value straight toward a repair or another device.",
  },
];

const FAQS = [
  {
    q: "Do you really buy Apple devices that are broken or won't turn on?",
    a: "Yes. We buy faulty and dead Apple devices every day - cracked screens, swollen batteries, liquid damage, logic-board faults and units that won't power on. As an Apple repair workshop with 21+ years of experience, we can refurbish or harvest parts that resellers simply reject, so a broken Mac, iPhone or iPad is still worth real money to us.",
  },
  {
    q: "How do I get a valuation, and is it free?",
    a: "Valuation is completely free with no obligation. Send your model, rough age and condition on WhatsApp to 055 741 3706 (a quick photo of the screen and the back of the device helps), or use the trade-in tool on this page. We reply with an indicative offer, then confirm the exact figure after a quick inspection.",
  },
  {
    q: "How is the price decided?",
    a: "Every offer is set by a real technician - never a lowball bot. We weigh the exact model and chip (M5, M4, M3, M2, M1 or Intel), the release year and age, the condition, and the storage and RAM. A clean, working, high-spec device earns the most, but faulty units still get an honest number based on parts and refurbishment value.",
  },
  {
    q: "Do you collect the device, or do I have to come to you?",
    a: "Both. We offer free collection right across Dubai - including bulky iMacs and Mac Studio set-ups - so you never have to move heavy gear or take time off. You are also welcome to drop into our workshop. Either way, pickup is free whether or not you go ahead with the sale.",
  },
  {
    q: "When do I get paid?",
    a: "Same day. Once we have inspected the device and confirmed the final figure with you in person, we pay immediately - cash or instant bank transfer, your choice. There is no waiting period and no holding back your money.",
  },
  {
    q: "Can I trade my old device toward a repair or another one?",
    a: "Yes. Many customers put the value of an old Mac, iPhone or iPad straight toward repairing a current device or against another unit. Tell us what you want to do and we apply the trade-in value as credit on the spot.",
  },
  {
    q: "How do I wipe my data before selling?",
    a: "We always recommend signing out of your Apple ID, turning off Find My, and erasing the device first. Our step-by-step guides on how to erase a Mac before giving it away and how to factory reset an iPhone before selling walk you through it. If you are not sure, we will help you remove your account and securely wipe the device during inspection.",
  },
  {
    q: "Do you buy multiple devices or whole business fleets?",
    a: "Yes. We regularly buy several devices at once from individuals upgrading and from Dubai businesses retiring laptops, iPhones and iPads. Send us the list and quantities on WhatsApp and we will put together a single combined offer with free collection.",
  },
];

// Offer/Service JSON-LD literal for the buy/trade service. Built inline (not via the
// repair-oriented service() helper) so we can set acceptedPaymentMethod, areaServed
// and an AED Offer for a *buying* service rather than a repair price.
const buyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE.url}${PATH}#buy-service`,
  serviceType: "Buy & trade-in of used Apple devices",
  name: "Sell or Trade In Your Apple Device in Dubai",
  description:
    "We buy and trade in used Apple devices in Dubai - MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad, working or faulty. Free valuation, free collection across Dubai and same-day payment or store credit.",
  provider: {
    "@id": `${SITE.url}/#localbusiness`,
    sameAs: "https://maps.app.goo.gl/eg8RhTxBg8nFLnWN9",
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
  },
  url: `${SITE.url}${PATH}`,
  category: "Electronics Buyer",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${SITE.url}${PATH}`,
    servicePhone: NAP.phoneE164,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock",
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    acceptedPaymentMethod: [
      { "@type": "PaymentMethod", name: "Cash" },
      { "@type": "PaymentMethod", name: "Credit card" },
      "http://purl.org/goodrelations/v1#Cash",
      "http://purl.org/goodrelations/v1#ByBankTransferInAdvance",
    ],
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AED",
      description:
        "Each offer is individually valued by a technician based on model, age, condition and storage. Free valuation, no obligation, paid same day.",
    },
  },
};

const BREADCRUMB_TRAIL = [
  { name: "Home", path: "/" },
  { name: "Apple Repair", path: "/apple-repair-dubai" },
  { name: "Sell Your Apple Device", path: PATH },
];

export default function SellMacBookDubai() {
  useSeo(
    {
      title: "Sell Your MacBook / Apple Device Dubai - Instant Valuation, Same-Day Cash",
      description:
        "Sell your Mac, iPhone or iPad in Dubai - even if damaged. Free instant valuation, free pickup across Dubai and paid same day. We buy working & faulty devices.",
      path: PATH,
    },
    [
      localBusiness(),
      organization(),
      buyServiceSchema,
      breadcrumbs(BREADCRUMB_TRAIL),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/sell-macbook-dubai")?.src}
        imageAlt={topicForPath("/sell-macbook-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Sell or Trade In · Dubai"
        title="Sell Your Apple Device in Dubai"
        subtitle="Sell your Mac, iPhone or iPad in Dubai - even if it's damaged. Free instant valuation, free pickup anywhere in Dubai, and paid same day. We buy working and faulty devices alike."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1">
            <Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews
          </span>
          <span>·</span>
          <span>Free collection across Dubai</span>
          <span>·</span>
          <span>Paid same day - cash or transfer</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={BREADCRUMB_TRAIL} />
      </section>

      {/* Answer-first intro + estimator */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="grid gap-xl lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[18px] leading-relaxed max-w-[70ch] mb-md">
                Want to <strong>sell your MacBook, iMac, iPhone or iPad in Dubai</strong>?
                Send us the model and condition and we'll give you a free, honest valuation in minutes -
                then collect the device free of charge anywhere in Dubai and pay you the same day, by cash
                or instant bank transfer. There's no obligation, and you don't even need a working device:
                cracked, water-damaged or dead,{" "}
                <Link to="/sell-faulty-macbook-dubai" className="text-accent underline underline-offset-2">
                  <strong>we buy faulty Apple devices too</strong>
                </Link>.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <p className="text-[16px] text-text-muted leading-relaxed max-w-[70ch] mb-md">
                We're not a faceless buy-back website. We're a Dubai Apple repair workshop that has serviced
                Apple hardware for <strong>21+ years</strong> and repaired <strong>40,000+ devices</strong>,
                led by senior technician <strong>Shafiq Ahmed</strong>. That means we understand exactly what
                your device is worth - and we can refurbish or reuse parts from machines that resellers reject,
                so you get a fair figure instead of a lowball offer.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[16px] text-text-muted leading-relaxed max-w-[70ch] m-0">
                Upgrading after a repair quote? You can also{" "}
                <Link to="/trade-in-macbook-dubai" className="text-accent underline underline-offset-2">
                  trade your old Mac toward a repair or another device
                </Link>{" "}
                - we'll apply the value as credit on the spot.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <TradeInEstimator tone="dark" heading="Get your free valuation" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we buy */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm flex items-center gap-sm">
            <Laptop size={28} className="text-accent" aria-hidden /> What we buy
          </h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            If Apple made it, we'll buy it - working or faulty. Here's what we take, with free collection
            anywhere in Dubai.
          </p>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_BUY.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="border border-border bg-bg-card rounded-md p-lg"
                >
                  <h3 className="text-[18px] font-bold mb-sm flex items-start gap-2">
                    <Icon size={20} className="text-accent mt-0.5 shrink-0" aria-hidden />
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-text-muted leading-relaxed m-0">{item.body}</p>
                </article>
              );
            })}
          </div>
          <p className="text-[15px] text-text-muted max-w-[72ch] mt-lg m-0">
            Looking for a specific device hub? Browse{" "}
            <Link to="/" className="text-accent underline underline-offset-2">
              MacBook
            </Link>
            ,{" "}
            <Link to="/iphone-repair-dubai" className="text-accent underline underline-offset-2">
              iPhone
            </Link>
            ,{" "}
            <Link to="/ipad-repair-dubai" className="text-accent underline underline-offset-2">
              iPad
            </Link>
            ,{" "}
            and{" "}
            <Link to="/imac-repair-dubai" className="text-accent underline underline-offset-2">
              iMac
            </Link>{" "}
            - and ask about selling on any of them.
          </p>
        </div>
      </section>

      {/* How valuation works */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm flex items-center gap-sm">
          <Gauge size={28} className="text-accent" aria-hidden /> How valuation works
        </h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
          We don't quote one flat price for "a MacBook". A real technician values your specific device
          against four honest factors so the offer reflects what you actually own.
        </p>
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
          {VALUATION_FACTORS.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="border border-border bg-bg-card rounded-md p-lg"
              >
                <h3 className="text-[17px] font-bold mb-sm flex items-center gap-2">
                  <Icon size={18} className="text-accent shrink-0" aria-hidden />
                  {f.title}
                </h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{f.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Working or faulty */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm flex items-center gap-sm">
            <Wrench size={28} className="text-accent" aria-hidden /> Working or faulty - we buy both
          </h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            Most buy-back sites only want pristine devices. As a full repair workshop, we see value where
            others see junk - so a damaged device still puts money in your pocket.
          </p>
          <div className="grid gap-md md:grid-cols-2">
            <article className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[18px] font-bold mb-sm flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent shrink-0" aria-hidden />
                Working & good condition
              </h3>
              <p className="text-[15px] text-text-muted leading-relaxed m-0">
                Clean, fully working devices earn the top valuation. We test the screen, battery health,
                ports and key functions, confirm the figure, and pay you the same day. Bring the charger
                and any accessories to push the offer higher.
              </p>
            </article>
            <article className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[18px] font-bold mb-sm flex items-center gap-2">
                <Wrench size={18} className="text-accent shrink-0" aria-hidden />
                Faulty, cracked or dead
              </h3>
              <p className="text-[15px] text-text-muted leading-relaxed m-0">
                Cracked, dead or liquid-damaged - we still make a real offer, because we refurbish and
                harvest parts in-house. Full details, typical faulty-unit valuations and what to check
                before selling are on our dedicated{" "}
                <Link to="/sell-faulty-macbook-dubai" className="text-accent underline underline-offset-2">
                  sell a faulty MacBook
                </Link>{" "}
                page.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm flex items-center gap-sm">
          <ClipboardCheck size={28} className="text-accent" aria-hidden /> How it works
        </h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
          Selling your device takes three simple steps - and the valuation and collection are always free.
        </p>
        <div className="grid gap-md md:grid-cols-3">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="border border-border bg-bg-card rounded-md p-lg flex flex-col"
              >
                <Icon size={26} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[18px] font-bold mb-sm">{s.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed m-0">{s.body}</p>
              </article>
            );
          })}
        </div>
        <p className="text-[15px] text-text-muted max-w-[72ch] mt-lg m-0">
          Planning to sell? Read our guides on{" "}
          <Link
            to="/how-to-erase-all-data-on-my-mac-before-giving-it-away"
            className="text-accent underline underline-offset-2"
          >
            erasing your Mac before giving it away
          </Link>{" "}
          and{" "}
          <Link
            to="/blog/how-to-factory-reset-iphone-before-selling"
            className="text-accent underline underline-offset-2"
          >
            factory-resetting your iPhone before selling
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Selling your Apple device - FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* More options, sell / trade-in / protect (cross-links the conversion cluster) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <RelatedServices items={conversionSiblings("/sell-macbook-dubai")} tone="dark" heading="More ways we can help" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where we're based</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div className="relative flex flex-col items-start gap-md">
          <h2 className="text-text text-[28px] md:text-[32px] max-w-[34ch]">
            Get your free valuation now - paid the same day
          </h2>
          <p className="text-text-muted text-[16px] max-w-[62ch]">
            Send your model and condition on WhatsApp (a photo helps) and we'll reply with your offer fast.
            Free collection across Dubai, no obligation, working or faulty. Cash or instant transfer the same day.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" data-track="whatsapp-sell-cta">
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
      <RelatedArticles path={PATH} />
    </PageShell>
  );
}
