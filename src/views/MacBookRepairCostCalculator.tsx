"use client";
// Instant MacBook repair cost calculator page (gap-audit strategic wedge).
// Features the QuoteCalculator (real per-model pricing) on a dark, schema-rich landing page.
import { Link } from "@/lib/router-compat";
import { MessageCircle, Phone, Wallet } from "lucide-react";

import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { QuoteCalculator } from "@/components/blocks/QuoteCalculator";
import { Button } from "@/components/ui/button";

import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { NAP } from "@/content/site";

const PATH = "/macbook-repair-cost-calculator-dubai";
const TITLE = "MacBook Repair Cost Calculator Dubai - Instant Estimate";
const DESC =
  "Free instant MacBook repair cost calculator for Dubai. Pick your exact Mac or iPad model and the repair to see a real starting price in AED, then confirm on WhatsApp. Warranty up to 12 months.";

const FAQS = [
  { q: "How accurate is the repair cost estimate?", a: "The figure is our genuine published starting price for that exact model and repair, pulled from our real price data. It's a 'from' price, the final cost is fixed in writing after a free 20-minute diagnosis, because the exact fault and parts can change it." },
  { q: "Is the diagnosis really free?", a: "Yes. Diagnosis is free and takes about 20 minutes, and there's no charge if you decide not to proceed. You only pay once you approve a written quote." },
  { q: "Why don't you just show one fixed price?", a: "Because a fair price depends on your exact model and what's actually wrong. A screen on a MacBook Air M1 is not the same job as a 16-inch Pro. The calculator gives you the right starting point for your model instead of a vague 'from AED 99' headline." },
  { q: "Is independent repair cheaper than the Apple Store?", a: "For out-of-warranty repairs, usually yes, we repair at component and board level where Apple replaces the whole logic board. See our honest Apple Store vs independent comparison for the full picture." },
  { q: "Do you calculate iPhone repair costs too?", a: "iPhone pricing isn't in the calculator yet. WhatsApp us your iPhone model and we'll send a quote the same way." },
  { q: "Does the estimate include genuine Apple parts?", a: "We use genuine parts where they're available and high-grade OEM-spec parts where they aren't, and we tell you which your repair uses before we start. Both carry the written warranty up to 12 months." },
];

export default function MacBookRepairCostCalculator() {
  const url = `${SITE.url}${PATH}`;
  useSeo(
    { title: TITLE, description: DESC, path: PATH },
    [
      organization(),
      localBusiness(),
      pageWithSpeakable({ url, name: TITLE }),
      serviceSchema({
        name: "MacBook Repair Cost Estimate",
        price: 49,
        timeline: "Same day",
        warranty: "P1Y",
        url: PATH,
        description: "Instant MacBook and Mac repair cost estimate in Dubai by model and repair type, with free pickup and a written warranty up to 12 months.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
        image="/images/topics/macbook-repair-near-me.jpg"
        imageAlt="MacBook repair near me Dubai - workshop location and service radius infographic"
          variant="service"
          tone="dark"
          eyebrow="Instant quote"
          title="MacBook Repair Cost Calculator - Instant Dubai Price Estimate"
          subtitle="Pick your exact Mac or iPad model and the repair you need to see a real starting price in AED - no forms, no waiting. Then confirm the exact quote on WhatsApp after a free diagnosis."
          ctaLabel="Get a quote on WhatsApp"
        />

        <QuickAnswer
          tone="dark"
          question="How much does a MacBook repair cost in Dubai?"
          answer="It depends on your exact model and the repair. Use the calculator below for an instant starting price from our real published rates - diagnosis starts free, screen replacement from AED 600, battery from AED 450. The exact price is confirmed in writing after a free 20-minute diagnosis."
        />

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Repair cost calculator", path: PATH }]} />
        </section>

        {/* Calculator */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Wallet size={28} className="text-accent" aria-hidden /> Estimate your repair in seconds
          </h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mb-lg">
            Every price below comes from our real per-model rates - not a vague headline. Choose your device,
            model and repair to see the genuine starting price, then tap through to WhatsApp with it pre-filled.
          </p>
          <QuoteCalculator />
        </section>

        {/* What affects price */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">What changes the final price</h2>
          <div className="max-w-[78ch] space-y-md text-[16px] text-text-muted leading-relaxed">
            <p className="m-0">The calculator shows a <strong className="text-text">starting</strong> price. The exact figure depends on your specific model, how severe the fault is (a cracked outer glass costs less than a fully dead panel), and whether a genuine or high-grade OEM-spec part is used - we always tell you which before we start.</p>
            <p className="m-0">For the full published list see our <Link to="/pricing" className="text-accent underline underline-offset-2">transparent MacBook repair price list</Link>, and to decide between routes read <Link to="/where-to-repair-macbook-dubai" className="text-accent underline underline-offset-2">where to repair your MacBook in Dubai: Apple Store vs independent</Link>.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Repair cost - frequently asked questions</h2>
          <FAQAccordion items={FAQS} injectSchema />
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="bg-bg-card border border-border rounded-2xl p-xl md:p-2xl flex flex-col items-start gap-md">
            <h2 className="text-text text-[28px] md:text-[32px] max-w-[28ch] m-0">Got your estimate? Lock in the exact price.</h2>
            <p className="text-text-muted text-[16px] max-w-[60ch] m-0">
              WhatsApp your model and the repair - we confirm the exact price in writing after a free diagnosis, with free pickup across Dubai.
            </p>
            <div className="flex flex-wrap gap-sm">
              <Button asChild variant="whatsapp" size="lg">
                <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> Message on WhatsApp</a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
                <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <RelatedArticles path={PATH} />
    </PageShell>
  );
}
