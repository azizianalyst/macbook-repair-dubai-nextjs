"use client";
import { Star, MessageCircle, Phone, CheckCircle2, Wrench, Zap } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";

const MACBOOK_MODELS = [
  { label: "MacBook Air", href: "/macbook-air-repair-dubai", desc: "M1 · M2 · M3 · M4 · M5 · Intel" },
  { label: "MacBook Pro 14\"", href: "/macbook-pro-repair-dubai", desc: "M1 Pro/Max through M5 Pro/Max" },
  { label: "MacBook Pro 16\"", href: "/macbook-pro-repair-dubai", desc: "M1 Pro/Max through M5 Pro/Max" },
  { label: "MacBook Pro 13\"", href: "/macbook-pro-13-m1-2020-repair-dubai", desc: "Intel 2019–2020 · M1 · M2" },
];

const SERVICES = [
  { icon: Wrench, label: "Screen Repair", href: "/macbook-screen-repair-dubai", price: "From AED 499" },
  { icon: Zap, label: "Battery Replacement", href: "/macbook-battery-replacement-dubai", price: "From AED 450" },
  { icon: Wrench, label: "Keyboard Repair", href: "/macbook-keyboard-repair-dubai", price: "From AED 350" },
  { icon: Wrench, label: "Charging Port Repair", href: "/macbook-charging-port-repair-dubai", price: "From AED 300" },
  { icon: Wrench, label: "Water Damage Repair", href: "/macbook-water-damage-repair-dubai", price: "From AED 600" },
  { icon: Wrench, label: "Logic Board Repair", href: "/macbook-logic-board-repair-dubai", price: "From AED 800" },
  { icon: Wrench, label: "SSD Upgrade", href: "/macbook-ssd-upgrade-dubai", price: "From AED 700" },
  { icon: Wrench, label: "Data Recovery", href: "/macbook-data-recovery-dubai", price: "From AED 500" },
  { icon: Wrench, label: "Trackpad Repair", href: "/macbook-trackpad-repair-dubai", price: "From AED 350" },
  { icon: Wrench, label: "Hinge Repair", href: "/macbook-hinge-repair-dubai", price: "From AED 400" },
  { icon: Wrench, label: "Overheating Fix", href: "/macbook-overheating-fix-dubai", price: "From AED 200" },
  { icon: Wrench, label: "RAM Upgrade", href: "/macbook-ram-upgrade-dubai", price: "From AED 600" },
];

const FAQS: FAQ[] = [
  {
    q: "How much does MacBook repair cost in Dubai?",
    a: "MacBook repair in Dubai starts from AED 200 for a fan clean / overheating fix, AED 350 for keyboard or trackpad repair, AED 450 for battery replacement, AED 499 for screen repair, and AED 800 for logic board work. All prices are confirmed in writing on WhatsApp before any work begins. Free diagnosis, no charge if you decide not to proceed.",
  },
  {
    q: "How long does MacBook repair take in Dubai?",
    a: "Most MacBook repairs are same-day: battery replacement takes 1–2 hours, screen repair 2–4 hours, keyboard repair 2–3 hours. Logic board and water-damage repairs take 3–5 days due to component-level work and burn-in testing. WhatsApp us the model and fault for a confirmed time estimate.",
  },
  {
    q: "Do you repair all MacBook models in Dubai?",
    a: "Yes, we repair every MacBook Apple has made, from Intel models (2010 onward) through M1, M2, M3, M4, and M5 chips. This includes MacBook Air (11\", 13\", 15\") and MacBook Pro (13\", 14\", 16\"). Apple-vintage and obsolete models are also accepted since our repairs are independent of Apple warranty status.",
  },
  {
    q: "Do you use genuine Apple parts for MacBook repair?",
    a: "We use genuine Apple parts where available through authorised supply channels, and A-grade OEM-spec parts where they are not. The quote we send on WhatsApp before work starts specifies exactly which part type your repair will use, so there are no surprises.",
  },
  {
    q: "Is there a warranty on MacBook repair in Dubai?",
    a: "Yes, every MacBook repair carries a written warranty of up to 12 months on the parts and labour, depending on the repair type. Battery replacements carry a 3-month warranty; screen and keyboard repairs carry 6 months; logic board repairs carry up to 12 months.",
  },
  {
    q: "Can you repair a MacBook that Apple refused to fix?",
    a: "Yes. As an independent Apple specialist we perform component-level logic board repair that Apple does not offer at its Genius Bar. Many MacBooks Apple quotes as BER (beyond economical repair) are repairable at our workshop from AED 800. Send us a WhatsApp with the fault description for an honest assessment.",
  },
  {
    q: "Do you offer free pickup for MacBook repair in Dubai?",
    a: "Yes, free pickup and delivery anywhere on Dubai mainland, with same-hour collection for liquid-damage emergencies. WhatsApp 055 741 3706 and a courier is typically with you within 1–2 hours. You can also walk in to our Concord Tower workshop in Dubai Media City.",
  },
];

function CallButtons() {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden /> WhatsApp Us
        </a>
      </Button>
      <Button asChild variant="secondary" size="lg">
        <a href={`tel:${NAP.phoneE164}`}>
          <Phone aria-hidden /> Call Now
        </a>
      </Button>
    </div>
  );
}

export default function MacBookRepairHub() {
  useSeo(
    {
      title: "MacBook Repair Dubai. All Models, Same-Day | Since 2004",
      description:
        "MacBook repair Dubai. Air, Pro, Intel & M-series. Screen from AED 499, battery AED 450, logic board AED 800. Free diagnosis, free pickup, warranty up to 12 months.",
      path: "/macbook-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image="/images/topics/macbook-repair-dubai-pickup.jpg"
          imageAlt="MacBook repair Dubai, technician repairing MacBook Pro on bench at Concord Tower workshop"
          variant="device"
          tone="dark"
          eyebrow="Independent Apple specialists since 2004"
          title="MacBook Repair Dubai"
          subtitle="Every MacBook repaired. Air, Pro, Intel through M5. Screen, battery, keyboard, logic board, water damage and data recovery. Free diagnosis. Free pickup across Dubai."
        >
          <div className="mt-sm flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 40,000+ Apple devices fixed since 2004</span>
            <span>·</span>
            <span>OEM parts</span>
            <span>·</span>
            <span>Warranty up to 12 months</span>
          </div>
          <div className="mt-md">
            <CallButtons />
          </div>
        </Hero>

        <USPStrip />

        <BreadcrumbTrail
          trail={[
            { name: "Home", path: "/" },
            { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
          ]}
        />
      </div>

      <div className="container mx-auto max-w-5xl px-md py-xl space-y-2xl">

        {/* Quick answer */}
        <QuickAnswer
          question="Where can I get my MacBook repaired in Dubai?"
          answer="MacBook Repair Dubai repairs every MacBook. Air and Pro, Intel through M5, at its Concord Tower workshop in Dubai Media City. Screen repair starts from AED 499, battery from AED 450, logic board from AED 800. Free diagnosis, free citywide pickup, OEM parts, and written warranty up to 12 months. In business since 2004."
        />

        {/* Models */}
        <section>
          <h2 className="text-2xl font-bold mb-md">MacBook Models We Repair</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
            {MACBOOK_MODELS.map((m) => (
              <Link
                key={m.href + m.label}
                to={m.href}
                className="flex flex-col gap-1 rounded-lg border border-border bg-bg p-md hover:border-accent transition-colors"
              >
                <span className="font-semibold text-text">{m.label}</span>
                <span className="text-sm text-text-muted">{m.desc}</span>
              </Link>
            ))}
          </div>
          <p className="mt-sm text-sm text-text-muted">
            Don't see your model?{" "}
            <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
              WhatsApp us
            </a>{" "}
           , we repair every MacBook Apple has made since 2010, including vintage and obsolete models.
          </p>
        </section>

        {/* Services + pricing */}
        <section>
          <h2 className="text-2xl font-bold mb-md">MacBook Repair Services &amp; Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-sm">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="flex flex-col gap-1 rounded-lg border border-border bg-bg p-md hover:border-accent transition-colors"
              >
                <span className="font-semibold text-text">{s.label}</span>
                <span className="text-sm text-accent font-mono">{s.price}</span>
              </Link>
            ))}
          </div>
          <p className="mt-sm text-sm text-text-muted">
            All prices include parts, labour, and a written warranty. Exact quote confirmed on WhatsApp before work starts. No hidden fees.
          </p>
        </section>

        {/* Why us */}
        <section>
          <h2 className="text-2xl font-bold mb-md">Why Choose Us for MacBook Repair in Dubai</h2>
          <ul className="space-y-sm">
            {[
              "Independent Apple specialists since 2004, 21 years experience, 40,000+ devices repaired.",
              "Component-level logic board repair Apple's Genius Bar doesn't offer, saves you thousands versus a replacement unit.",
              "Free diagnosis, no charge, no obligation, written quote on WhatsApp before we touch your MacBook.",
              "Same-day turnaround on most repairs: battery, screen, keyboard, charging port done in hours not days.",
              "Free pickup and delivery across Dubai mainland, same-hour collection for liquid-damage emergencies.",
              "OEM and genuine Apple parts, clearly labelled on your quote.",
              "Written warranty up to 12 months on parts and labour.",
              "No fix, no charge, if we can't repair it, you pay nothing.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-sm">
                <CheckCircle2 size={18} className="text-accent mt-[2px] shrink-0" aria-hidden />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-bg-alt border border-border p-lg text-center space-y-sm">
          <h2 className="text-2xl font-bold">Get Your MacBook Repaired Today</h2>
          <p className="text-text-secondary">
            WhatsApp us your MacBook model and fault, we'll reply with a fixed price quote in minutes.
            Walk-ins welcome at Concord Tower, Dubai Media City.
          </p>
          <CallButtons />
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-bold mb-md">MacBook Repair Dubai. FAQ</h2>
          <FAQAccordion tone="dark" items={FAQS} injectSchema />
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-xl font-bold mb-sm">Related Services</h2>
          <div className="flex flex-wrap gap-sm text-sm">
            {[
              { label: "MacBook Air Repair Dubai", href: "/macbook-air-repair-dubai" },
              { label: "MacBook Pro Repair Dubai", href: "/macbook-pro-repair-dubai" },
              { label: "MacBook Screen Repair Dubai", href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai" },
              { label: "MacBook Water Damage Repair Dubai", href: "/macbook-water-damage-repair-dubai" },
              { label: "MacBook Data Recovery Dubai", href: "/macbook-data-recovery-dubai" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
              { label: "iPhone Repair Dubai", href: "/iphone-repair-dubai" },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="text-accent underline underline-offset-2 hover:text-accent/80">
                {l.label}
              </Link>
            ))}
          </div>
        </section>

        <LocationBlock />
      </div>
      <RelatedArticles path="/macbook-repair-dubai" />
    </PageShell>
  );
}
