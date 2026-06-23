"use client";
import { Star, MessageCircle, Phone, ShieldCheck, Check, Cpu, Battery, HardDrive, Wrench } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, breadcrumbs, itemList } from "@/lib/schema";
import { NAP } from "@/content/site";

const COVERED = [
  { title: "Logic board repair", body: "Board-level micro-soldering for no-power, boot-loop, power-rail and port faults Apple would only solve by swapping the whole board.", icon: Cpu },
  { title: "Battery replacement", body: "Swollen, draining or 'Service Recommended' batteries replaced with original-spec cells, load-tested before pickup.", icon: Battery },
  { title: "SSD & storage", body: "Failed or full storage replaced and upgraded, with data migration where the drive is still readable.", icon: HardDrive },
  { title: "Memory & components", body: "RAM, ports, fans, speakers, cameras and other components fixed individually instead of as a costly assembly swap.", icon: Wrench },
];

const FAQS = [
  { q: "What does out-of-warranty Apple repair mean?",
    a: "It means your device's standard warranty or AppleCare has expired, or the fault isn't covered (accidental, liquid or wear damage). We repair these at independent-shop prices - often far less than Apple's flat out-of-warranty service fee - with a written warranty up to 12 months on our work." },
  { q: "Do you honour AppleCare?",
    a: "We're an independent repair centre, not an Apple Authorised Service Provider, so we can't process an AppleCare claim for you. If your device still has active AppleCare for the specific fault, Apple is usually the cheaper route and we'll tell you so honestly. For everything outside AppleCare, we're typically about half the price." },
  { q: "Will using you void anything?",
    a: "If your AppleCare or warranty is already expired, there's nothing left to void. If it's still active, we'll always flag that before you commit so you can choose the best route. Our repairs use genuine or premium OEM parts and carry their own warranty of up to 12 months." },
  { q: "How much cheaper is out-of-warranty repair with you vs Apple?",
    a: "Apple's out-of-warranty service is usually a flat board/whole-unit fee. Because we repair at component level, a logic-board fix from AED 800 can replace an Apple quote of several thousand dirhams. You get an exact written quote after a free diagnosis - no obligation." },
  { q: "Are the parts genuine?",
    a: "Genuine Apple parts whenever they're available through verified channels. For vintage and obsolete models Apple no longer supplies, we fit premium OEM-factory parts and label them as such on your quote. Both carry the same warranty of up to 12 months." },
  { q: "What about data during a board repair?",
    a: "Repairs that don't touch the SSD keep your data intact. For logic-board work on T2/Apple-Silicon Macs we request a Time Machine backup first and offer a free backup station at the workshop. Where a board is recoverable, we preserve data wherever possible." },
];

export default function OutOfWarrantyRepair() {
  useSeo(
    {
      title: "Out-of-Warranty Apple Repair Dubai - Half the Apple Store Price",
      description:
        "Out-of-warranty & expired-AppleCare Apple repair in Dubai. Logic board, battery, SSD & component-level fixes at independent prices, genuine parts, warranty of up to 12 months. Call 055 741 3706.",
      path: "/out-of-warranty-apple-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "Out-of-Warranty Apple Repair Dubai",
        price: 200,
        timeline: "Same day to 5 days",
        warranty: "P1Y",
        url: "/out-of-warranty-apple-repair-dubai",
        description: "Out-of-warranty and expired-AppleCare repair for MacBook, iMac, iPhone and iPad in Dubai - component-level repairs at independent prices with genuine parts.",
      }),
      itemList({
        name: "Out-of-warranty Apple repairs",
        items: COVERED.map((i) => ({ name: i.title, url: "/out-of-warranty-apple-repair-dubai", description: i.body })),
      }),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Apple Repair", path: "/apple-repair-dubai" },
        { name: "Out-of-Warranty Repair", path: "/out-of-warranty-apple-repair-dubai" },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/out-of-warranty-apple-repair-dubai")?.src}
        imageAlt={topicForPath("/out-of-warranty-apple-repair-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="AppleCare & out-of-warranty · Dubai"
        title="Out-of-Warranty Apple Repair in Dubai"
        subtitle="Warranty expired or AppleCare run out? We repair MacBook, iMac, iPhone and iPad at component level - often half the Apple Store price, with genuine parts and a warranty of up to 12 months."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
          <span>·</span>
          <span>Genuine & OEM parts</span>
          <span>·</span>
          <span>Free diagnosis</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Out-of-Warranty Repair", path: "/out-of-warranty-apple-repair-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md">
          When your <strong>warranty or AppleCare has expired</strong> - or the fault simply isn't covered - Apple's out-of-warranty route is usually a flat fee to swap the whole logic board or unit. We do it differently: <strong>component-level repair</strong> fixes the single failed part, which is why our prices are typically about half. Every repair is genuine-or-OEM parts, written-quote-first, and backed by a warranty of up to 12 months.
        </p>
      </section>

      {/* What we cover */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Wrench size={28} className="text-accent" aria-hidden /> What we repair out of warranty
          </h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
            {COVERED.map((i) => {
              const Icon = i.icon;
              return (
                <article key={i.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <h3 className="text-[17px] font-bold mb-sm flex items-center gap-2"><Icon size={18} className="text-accent" aria-hidden /> {i.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed m-0">{i.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AppleCare vs us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <ShieldCheck size={28} className="text-accent" aria-hidden /> Still under AppleCare? Here's the honest advice
        </h2>
        <div className="grid gap-md md:grid-cols-2">
          <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
            <h3 className="text-[18px] font-bold mb-sm">Use Apple when…</h3>
            <ul className="space-y-2 text-[15px] text-text-muted">
              {["Your AppleCare is active and the fault is covered", "The repair is a known recall / service programme", "You need to keep a manufacturer service record"].map((t) => (
                <li key={t} className="flex gap-2"><Check size={18} className="text-accent mt-[2px] shrink-0" aria-hidden /> {t}</li>
              ))}
            </ul>
          </article>
          <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
            <h3 className="text-[18px] font-bold mb-sm">Use us when…</h3>
            <ul className="space-y-2 text-[15px] text-text-muted">
              {["Warranty / AppleCare has expired", "Liquid, accidental or wear damage Apple won't cover", "You want a component-level fix at roughly half the price"].map((t) => (
                <li key={t} className="flex gap-2"><Check size={18} className="text-accent mt-[2px] shrink-0" aria-hidden /> {t}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="text-[14px] text-text-muted mt-md">We'll always tell you which route is cheaper for your specific fault before you commit - even when that means sending you to Apple.</p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Out-of-warranty repair FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to bring your device</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Get an out-of-warranty quote in 4 minutes</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Send the model and a photo of the issue on WhatsApp. Free diagnosis, written quote, genuine parts and a warranty of up to 12 months.
          </p>
          <div className="relative flex flex-wrap gap-sm">
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
      </section>
      </div>
    </PageShell>
  );
}
