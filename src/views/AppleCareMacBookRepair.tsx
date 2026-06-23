"use client";
import { Link } from "@/lib/router-compat";
import { Star, MessageCircle, Phone, ShieldCheck, Check, Search, Wrench, Battery, Cpu, HardDrive } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, breadcrumbs, itemList } from "@/lib/schema";
import { NAP } from "@/content/site";

const COVERED = [
  { title: "Battery replacement", body: "Once AppleCare runs out, a swollen or 'Service Recommended' battery is a quick fix here - original-spec cell, cycle count reset, load-tested before pickup. Battery work from AED 590.", icon: Battery },
  { title: "Screen repair", body: "Cracked panel or backlight gone after your cover ended. We fit A-grade Retina panels that match the original brightness and P3 colour, from AED 780.", icon: Wrench },
  { title: "Logic board repair", body: "Board-level micro-soldering for no-power, boot-loop and port faults that Apple would only solve by swapping the whole board for a flat fee.", icon: Cpu },
  { title: "SSD & storage", body: "Failed or full storage replaced and upgraded on AppleCare-expired Macs, with data migration where the drive is still readable.", icon: HardDrive },
];

const FAQS = [
  { q: "Are you an Apple Authorised Service Provider?",
    a: "No. We're an independent Apple repair specialist in Concord Tower, Dubai Media City, working on Apple hardware since 2004. We're not an AASP, so we can't process an Apple warranty or AppleCare claim for you. What we do is repair AppleCare-expired and out-of-warranty Macs at component level, under our own written warranty up to 12 months." },
  { q: "Will a third-party repair void my AppleCare?",
    a: "It can. Apple may decline future warranty or AppleCare cover on parts we've touched, and a non-genuine part can affect a later claim. So if your Mac still has active AppleCare for the specific fault, we'll tell you honestly to use Apple first. Once your cover has expired, there's nothing left to void and we're typically about half the price." },
  { q: "Do you repair AppleCare-expired Macs?",
    a: "Yes - that's most of what we do. When AppleCare or the standard warranty has run out, you're paying out of pocket either way, and Apple's out-of-warranty fee is usually a flat board or whole-unit swap. We fix the single failed part instead, which is why the bill is far lower. Free diagnosis first, then a written quote." },
  { q: "How do I check if my MacBook is still under warranty?",
    a: "Open Apple's coverage checker at checkcoverage.apple.com and enter your serial number, or go to System Settings, then General, then About to see the serial. Apple gives every Mac a standard one-year limited warranty from purchase; AppleCare+ extends that to three years if you bought it. WhatsApp us the serial on 055 741 3706 and we'll read the status with you." },
  { q: "Is the diagnosis free?",
    a: "Yes. Bring the Mac to Media City or arrange free pickup across Dubai mainland, and we diagnose the fault at no charge. You get an exact written quote before any work starts, and there's no obligation to proceed. No fix, no charge - if we can't repair it, you pay nothing." },
  { q: "Do you use genuine Apple parts?",
    a: "Genuine Apple parts whenever they're available through verified channels. For vintage and obsolete models Apple no longer supplies, we fit high-grade compatible parts and label them as such on your quote. Both are covered by the same written warranty up to 12 months on our work." },
  { q: "What warranty do you give on the repair?",
    a: "Every repair carries a written warranty up to 12 months, with three months on batteries. That covers the part we fitted and the workmanship. It's our own warranty, not Apple's - we're independent - but if the same fault comes back inside the window, we sort it at no extra cost." },
  { q: "Can you help if Apple quoted a high out-of-warranty price?",
    a: "That's exactly the case we see most. Apple's out-of-warranty service tends to be a flat fee to replace the whole board or unit, often several thousand dirhams. A component-level logic-board fix here starts from AED 1,040. Send us Apple's quote and the model on WhatsApp and we'll tell you in a few minutes whether we can beat it." },
  { q: "Is the standard Apple warranty the same as AppleCare?",
    a: "No. Every new Mac comes with a one-year limited warranty against manufacturing faults, included free. AppleCare+ is a paid plan you add at or near purchase that extends cover to three years and adds accidental-damage repairs for a fee. Neither covers normal wear, and both can lapse - which is when most customers come to us." },
];

export default function AppleCareMacBookRepair() {
  useSeo(
    {
      title: "AppleCare & In-Warranty MacBook Repair Dubai",
      description:
        "In-warranty, AppleCare-eligible and AppleCare-expired MacBook repair guidance in Dubai. Independent Apple specialist, free diagnosis, warranty of up to 12 months. Call 055 741 3706.",
      path: "/applecare-macbook-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "AppleCare and In-Warranty MacBook Repair Dubai",
        price: 450,
        timeline: "Same day to 5 days",
        warranty: "P1Y",
        url: "/applecare-macbook-repair-dubai",
        description: "Independent MacBook repair in Dubai for AppleCare-expired and out-of-warranty Macs, with honest advice when an Apple Store route is better for in-warranty machines.",
      }),
      itemList({
        name: "AppleCare and out-of-warranty MacBook repairs",
        items: COVERED.map((i) => ({ name: i.title, url: "/applecare-macbook-repair-dubai", description: i.body })),
      }),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "MacBook Repair", path: "/apple-repair-dubai" },
        { name: "AppleCare & In-Warranty", path: "/applecare-macbook-repair-dubai" },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/applecare-macbook-repair-dubai")?.src}
        imageAlt={topicForPath("/applecare-macbook-repair-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="AppleCare & in-warranty · Dubai"
        title="AppleCare and In-Warranty MacBook Repair in Dubai"
        subtitle="We're an independent Apple specialist, not an Apple Authorised Service Provider. If your Mac is still covered we'll tell you honestly when Apple is the better route. For AppleCare-expired and out-of-warranty Macs, we repair at component level with a warranty of up to 12 months."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 215+ reviews</span>
          <span>·</span>
          <span>Independent specialist</span>
          <span>·</span>
          <span>Free diagnosis</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "MacBook Repair", path: "/apple-repair-dubai" },
          { name: "AppleCare & In-Warranty", path: "/applecare-macbook-repair-dubai" },
        ]} />
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md">
          <strong>MacBook Repair Dubai</strong> is an independent Apple repair workshop in Concord Tower, Dubai Media City, on the bench since 2004. We're not an Apple Authorised Service Provider, so we can't lodge an AppleCare or warranty claim for you. What we can do is be straight with you: if your Mac is still in cover, we'll point you to Apple so you don't risk it. If your AppleCare has expired, we'll fix the actual fault for a fraction of Apple's flat fee.
        </p>
        <p className="text-[16px] leading-relaxed max-w-[75ch] text-text-muted m-0">
          That honesty is the whole point of this page. People bring us in-warranty Macs all the time, and sometimes the right answer is "go to Apple". When the cover's gone, that's when we save you the most money - genuine parts where Apple still supplies them, high-grade compatible parts where it doesn't, and a written warranty up to 12 months on everything we touch.
        </p>
      </section>

      {/* Warranty explainer */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Search size={28} className="text-accent" aria-hidden /> Is my MacBook still under warranty?
          </h2>
          <div className="max-w-[78ch] space-y-md text-[16px] text-text-muted leading-relaxed">
            <p className="m-0">Every new Mac ships with a one-year limited warranty from Apple, free, covering manufacturing faults only. If you added AppleCare+ at purchase, that stretches the cover to three years and adds accidental-damage repairs for a set fee per incident. Neither plan covers normal wear, and both run out.</p>
            <p className="m-0">Checking is quick. Go to System Settings, then General, then About, and note your serial number. Type it into Apple's coverage page at checkcoverage.apple.com and it tells you the exact status and end date. Not sure how to read it? WhatsApp us the serial and we'll walk through it with you in a couple of minutes.</p>
          </div>
        </div>
      </section>

      {/* Apple vs us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <ShieldCheck size={28} className="text-accent" aria-hidden /> When to use Apple, and when to use us
        </h2>
        <div className="grid gap-md md:grid-cols-2">
          <article className="border border-border bg-bg-card rounded-md p-lg">
            <h3 className="text-[18px] font-bold mb-sm">Go to Apple when…</h3>
            <ul className="space-y-2 text-[15px] text-text-muted">
              {["Your AppleCare or warranty is active and the fault is covered", "The repair falls under a known recall or service programme", "You need an Apple service record kept on the machine"].map((t) => (
                <li key={t} className="flex gap-2"><Check size={18} className="text-accent mt-[2px] shrink-0" aria-hidden /> {t}</li>
              ))}
            </ul>
          </article>
          <article className="border border-border bg-bg-card rounded-md p-lg">
            <h3 className="text-[18px] font-bold mb-sm">Come to us when…</h3>
            <ul className="space-y-2 text-[15px] text-text-muted">
              {["Your AppleCare or warranty has expired", "Liquid, accidental or wear damage Apple won't cover for free", "Apple quoted a flat board or whole-unit fee you'd rather avoid"].map((t) => (
                <li key={t} className="flex gap-2"><Check size={18} className="text-accent mt-[2px] shrink-0" aria-hidden /> {t}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="text-[14px] text-text-muted mt-md">We'll tell you which route is cheaper for your fault before you commit - even when that means sending you back to Apple. More on this on our <Link to="/out-of-warranty-apple-repair-dubai" className="text-accent underline underline-offset-2">out-of-warranty Apple repair</Link> and <Link to="/apple-repair-programs-dubai" className="text-accent underline underline-offset-2">Apple repair programmes and recalls</Link> pages.</p>
      </section>

      {/* What we repair */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Wrench size={28} className="text-accent" aria-hidden /> What we repair on AppleCare-expired Macs
          </h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
            {COVERED.map((i) => {
              const Icon = i.icon;
              return (
                <article key={i.title} className="border border-border bg-bg-card rounded-md p-lg">
                  <h3 className="text-[17px] font-bold mb-sm flex items-center gap-2"><Icon size={18} className="text-accent" aria-hidden /> {i.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed m-0">{i.body}</p>
                </article>
              );
            })}
          </div>
          <p className="text-[14px] text-text-muted mt-md">Need a specific job? See <Link to="/macbook-battery-replacement-dubai" className="text-accent underline underline-offset-2">MacBook battery replacement</Link> and <Link to="/macbook-screen-repair-dubai" className="text-accent underline underline-offset-2">MacBook screen repair</Link> in Dubai.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">AppleCare and in-warranty repair FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to bring your MacBook</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Not sure if you're still covered? Ask us first</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Send your serial number and the fault on WhatsApp. We'll check your warranty status with you, tell you honestly whether Apple or our workshop is the better route, and quote in minutes. Free diagnosis, warranty of up to 12 months.
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
      <RelatedArticles path="/applecare-macbook-repair-dubai" />
    </PageShell>
  );
}
