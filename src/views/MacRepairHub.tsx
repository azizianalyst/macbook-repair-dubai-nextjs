"use client";
// Mac Repair Dubai - faithful rebuild of the original WordPress /mac-repair-dubai page
// (user chose "faithful copy of my page", 2026-06-01). Prior desktop-Mac hub version
// is preserved in git history. Content reproduced from the old page; new dark theme.
import { Star, MessageCircle, Phone, Laptop, Monitor, HardDrive, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";

const DEVICES = [
  { label: "MacBook Air", href: "/macbook-air-repair-dubai", icon: Laptop },
  { label: "MacBook Pro", href: "/macbook-pro-repair-dubai", icon: Laptop },
  { label: "iMac", href: "/imac-repair-dubai", icon: Monitor },
  { label: "Mac Pro", href: "/mac-pro-repair-dubai", icon: HardDrive },
  { label: "Mac mini", href: "/mac-mini-repair-dubai", icon: HardDrive },
  { label: "Mac Studio", href: "/mac-studio-repair-dubai", icon: HardDrive },
];

const PICKUP_AREAS = [
  "Palm Jumeirah", "Jumeirah Village Circle", "Jumeirah Lake Towers", "Umm Suqeim",
  "Arabian Ranches", "Dubailand", "Greens", "Internet City", "Silicon Oasis",
];

// AEO answer capsule + FAQs (FAQPage schema via FAQAccordion injectSchema). Figures kept
// consistent with the homepage FAQ (since 2004, 90-day warranty, free pickup, OEM/genuine parts).
const HUB_QA = {
  question: "Where can I get my Mac repaired in Dubai?",
  answer:
    "MacBook Repair Dubai repairs every Mac — MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio and Mac Pro, from Intel through M5 — at its Concord Tower workshop in Dubai Media City. Services cover screen, battery, SSD, logic-board and water-damage repair, with free diagnosis, free citywide pickup, OEM parts and a 90-day written warranty, in business since 2004.",
};

const HUB_FAQS: FAQ[] = [
  { q: "How much does Mac repair cost in Dubai?", a: "Mac repair at MacBook Repair Dubai is priced by the fault and model, after a free diagnosis. As a guide, screen repair starts from AED 600, battery replacement from AED 450, and component-level logic board repair from AED 800. The exact price is confirmed in writing on WhatsApp before any work begins, and all prices are VAT-inclusive." },
  { q: "Which Mac models do you repair?", a: "MacBook Repair Dubai services every Mac: MacBook Air and MacBook Pro (11\", 13\", 14\", 15\", 16\"), iMac, Mac mini, Mac Studio and Mac Pro. This covers Intel, M1, M2, M3, M4 and M5 chips, plus models Apple lists as vintage or obsolete, since 2004." },
  { q: "How long does a Mac repair take?", a: "Most Mac repairs are same-day. Screen and battery jobs finish in about 2 to 4 hours, while logic board and water-damage work takes 3 to 5 days because it includes a burn-in test. WhatsApp the model to 055 741 3706 for a confirmed timeline." },
  { q: "Do you use genuine Apple parts for Mac repair?", a: "MacBook Repair Dubai uses genuine Apple parts where available and A-grade OEM-spec parts where they are not, and labels which your repair uses on the WhatsApp quote before work starts. Every Mac repair carries a 90-day written warranty on parts and labour." },
  { q: "Do you offer free pickup and delivery for Mac repair in Dubai?", a: "Yes. MacBook Repair Dubai offers free pickup and delivery anywhere on Dubai mainland, with same-hour collection for liquid-damage emergencies. WhatsApp 055 741 3706 and a courier is usually with you within a couple of hours, or visit the Concord Tower workshop in Dubai Media City." },
  { q: "Can you repair a Mac that is out of warranty or bought abroad?", a: "Yes. MacBook Repair Dubai is an independent Apple specialist and repairs out-of-warranty Macs and units bought anywhere in the world at the same prices, since the repair does not depend on local Apple warranty status. Component-level board repair Apple does not offer is available from AED 800." },
];

const SERVICES = [
  "Quick diagnostics.",
  "Repair and replace Mac screen, batteries, connectors and ports, logic board, keyboard, no-power issues, and more.",
  "Replacement of damaged components.",
  "Restoration of functionality and services.",
  "Contact our service centre if you're experiencing a problem with your MacBook and need it repaired urgently. In the next hour, you can have a working MacBook!",
];

function CallButtons() {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant="secondary" size="lg">
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function MacRepairHub() {
  useSeo(
    {
      title: "Mac Repair Dubai - Expert MacBook, iMac & Mac Studio Fix",
      description:
        "Reliable Mac repair in Dubai for MacBook, iMac & Mac Studio. Expert Apple technicians provide screen, battery, SSD & logic board repairs.",
      path: "/mac-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="device"
        tone="dark"
        eyebrow="Apple Mac specialist"
        title="Apple Mac Repair Dubai"
        subtitle="Reliable Mac repair in Dubai for MacBook, iMac, Mac mini, Mac Pro and Mac Studio. Expert Apple technicians handle screen, battery, SSD and logic board repairs using OEM parts."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Expert Apple technicians</span>
          <span>·</span>
          <span>OEM parts</span>
          <span>·</span>
          <span>Free pickup & delivery across Dubai</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Mac Repair", path: "/mac-repair-dubai" },
        ]} />
      </section>

      {/* Answer-first capsule (AEO/BLUF) — quotable Mac-repair answer high on the page. */}
      <QuickAnswer tone="dark" question={HUB_QA.question} answer={HUB_QA.answer} />

      {/* Devices we repair */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Which Mac do you need repaired?</h2>
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {DEVICES.map((d) => (
            <Link key={d.href} to={d.href} className="group border border-border bg-bg-card rounded-md p-lg flex items-center gap-md hover:border-accent/40 hover:bg-bg-alt transition-colors">
              <d.icon size={28} className="text-accent flex-shrink-0" aria-hidden />
              <span className="text-[18px] font-bold text-text group-hover:text-accent transition-colors">{d.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Mac services */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h3 className="text-[18px] font-bold mb-sm text-text">Popular Mac services &amp; upgrades</h3>
        <div className="flex flex-wrap gap-sm">
          {[
            { label: "SSD upgrade", href: "/mac-ssd-upgrade-dubai" },
            { label: "Mac mini RAM upgrade", href: "/mac-mini-ram-upgrade-dubai" },
            { label: "Mac Pro GPU repair", href: "/mac-pro-gpu-repair-dubai" },
            { label: "Setup & data migration", href: "/mac-setup-data-migration-dubai" },
            { label: "Activation lock unlock", href: "/mac-activation-lock-unlock-dubai" },
          ].map((s) => (
            <Link key={s.href} to={s.href} className="rounded-full border border-border bg-bg-card px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">{s.label}</Link>
          ))}
        </div>
      </section>

      {/* Is it possible to repair */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Is it possible to repair the MacBook?</h2>
        <div className="space-y-md text-[16px] text-text-muted leading-relaxed max-w-[75ch]">
          <p>A faulty MacBook is often repairable. Technicians can fix software bugs, hardware problems, and damaged components. Our MacBook repair services can restore your device's functionality - whether a malfunctioning screen, logic board, or overheating issues.</p>
          <p>Our expertise covers screens, keyboards, speakers, and fans. We also specialise in batteries, and offer motherboard and body repair. Our highly professional technicians are experts at handling Apple Mac water-damaged devices.</p>
        </div>
      </section>

      {/* Apple Service Center */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Apple Service Center</h2>
          <div className="space-y-md text-[16px] text-text-muted leading-relaxed max-w-[75ch]">
            <p>Our comprehensive Apple repairs are available for both the warranty period and after warranty. Using OEM parts, our team of professionals will ensure that all devices are restored to full functionality. Your data is also kept secure.</p>
            <p>Our dedicated service centre uses advanced hardware diagnosis through the Service Toolkit while adhering to brand guidelines. We prioritise personalised service throughout the repair process, and you'll be kept informed and engaged until the problem is resolved.</p>
          </div>
          <div className="mt-lg border border-border bg-bg-card rounded-md p-lg">
            <p className="flex items-center gap-sm text-[15px] font-semibold text-text mb-sm"><MapPin size={18} className="text-accent" aria-hidden /> FREE pickup &amp; delivery across Dubai</p>
            <ul className="flex flex-wrap gap-2">
              {PICKUP_AREAS.map((a) => (
                <li key={a} className="px-3 py-1 border border-border bg-bg-card rounded-md text-[13px] text-text-muted">{a}</li>
              ))}
            </ul>
          </div>
          <div className="mt-lg"><CallButtons /></div>
        </div>
      </section>

      {/* Near me */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">MacBook Repair Near Me in Dubai</h2>
        <div className="space-y-md text-[16px] text-text-muted leading-relaxed max-w-[75ch]">
          <p>Each client's situation is different, and we'll help you solve your problem - whether an urgent Mac Pro repair or a MacBook Air repair. We'll deliver the device back to you after it has been repaired. In a short time, our certified laptop engineers can perform cleaning, software installation, or repairs on any laptop. After a MacBook repair, an official warranty is provided for all services rendered and spare parts used.</p>
          <p>Our experienced technicians meticulously repair any type of MacBook. We have a large stock of spare parts and extensive experience, which guarantees a rapid solution. Our competitive advantage is our ability to provide professional services at an affordable price.</p>
          <p>The best masters in Dubai will save and restore your device. The most common models we service are the MacBook Pro and MacBook Air.</p>
        </div>
      </section>

      {/* Professional services */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Professional MacBook Repair Services</h2>
          <p className="text-[16px] text-text-muted max-w-[75ch] mb-lg">MacBook Repair Dubai is a trusted company that guarantees all its services. Even complex work to fix an Apple MacBook is done in the shortest time possible.</p>
          <ol className="space-y-md max-w-[80ch]">
            {SERVICES.map((s, i) => (
              <li key={i} className="flex gap-md">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-[15px] text-text-muted leading-relaxed pt-1">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* High quality low price */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">High Quality and Low Price</h2>
        <div className="space-y-md text-[16px] text-text-muted leading-relaxed max-w-[75ch]">
          <p>Is your Apple MacBook not working? Call our service centre for Mac repairs in Dubai on {NAP.phoneDisplay}. We offer high-quality repairs of MacBooks and other popular brands.</p>
          <p>MacBook Repair Dubai has more than {NAP.yearsInBusiness} years of experience and professionals who have serviced Macs since 2004. Our engineers first diagnose the Mac, then explain the possible causes and costs of repair. Our workshop offers Mac repair at prices that will surprise you.</p>
          <p>We guarantee excellent work quality thanks to our highly qualified specialists and special equipment.</p>
        </div>
        <ul className="mt-md grid gap-sm sm:grid-cols-2 max-w-[80ch]">
          {[`${NAP.yearsInBusiness}+ years of Apple repair experience`, "Free written diagnosis before any work", "OEM parts with official warranty", "Affordable, surprising prices"].map((b) => (
            <li key={b} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {b}</li>
          ))}
        </ul>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to Find Us</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* FAQ — FAQPage schema injected by FAQAccordion for rich results + AI extraction */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Mac Repair Dubai — FAQ</h2>
        <FAQAccordion items={HUB_FAQS} injectSchema tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Need your Mac repaired urgently?</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Contact our service centre and, in many cases, you can have a working Mac within the hour. WhatsApp or call for a free written diagnosis.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    <RelatedArticles path="/mac-repair-dubai" />
    </PageShell>
  );
}
