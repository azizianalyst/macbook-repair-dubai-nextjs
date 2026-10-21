"use client";
import { withSlash } from "@/lib/utils";
import { Star, MessageCircle, Phone, Check, MapPin, Wrench, Headphones } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, breadcrumbs, itemList } from "@/lib/schema";
import { NAP, REVIEW_COUNT_LABEL, RATING_LABEL } from "@/content/site";

const STEPS = [
  { title: "WhatsApp us the model, fault and area", body: "Send your MacBook model, what it's doing and where you are to 055 741 3706. A photo of the screen or the error helps. We tell you straight away if it sounds like a job for a visit or for the bench." },
  { title: "We check the technicians' diary", body: "Onsite visits run around the workshop, so they depend on a technician being free. If one is, we give you a time. If not, we say so and point you at the faster route." },
  { title: "You get the visit charge before booking", body: "Onsite repair is a paid service. We quote the charge on WhatsApp first, and nothing is booked until you say yes." },
  { title: "The technician works at your desk", body: "Diagnosis, macOS faults and quick software fixes get done where the MacBook sits. You watch, ask questions and keep working on something else." },
  { title: "Hardware goes to the bench", body: "Screens, batteries, keyboards, ports, liquid damage and board-level work need the parts, tools and test rigs at Concord Tower. For those you walk the MacBook in or courier it to us." },
];

const ONSITE_OK = [
  { title: "Diagnosis at your desk", body: "We find out what's actually wrong before anyone talks about parts, so you know whether it's a software fix or a bench job." },
  { title: "macOS crashes and boot loops", body: "Kernel panics, a Mac stuck on the Apple logo or a failed update are often software. Those can usually be sorted on the spot." },
  { title: "Slow Macs and full storage", body: "Clearing a full startup disk, removing junk login items and checking what's eating memory. No parts, no screwdriver." },
];

const BENCH_ONLY = [
  { title: "Screen replacement", body: "A display swap needs a clean bench and the right panel in hand. See MacBook screen repair." },
  { title: "Battery replacement", body: "Batteries are glued in and a swollen cell needs careful handling. See MacBook battery replacement." },
  { title: "Keyboard, trackpad and ports", body: "Dead or sticky keys, an unresponsive trackpad and USB-C or MagSafe faults are hardware repairs done at the workshop." },
  { title: "Liquid damage and board-level work", body: "Corrosion cleaning and component work on the logic board happen at the bench, not on a client's desk." },
];

const ROUTES = [
  { title: "Walk in", body: "Our workshop is Office #45, 10th Floor, Concord Tower, Dubai Media City. No appointment for a diagnosis. Mon-Thu and Sat 9 am-7 pm, Friday 9 am-12 pm and 2 pm-7 pm, Sunday closed." },
  { title: "Courier it from inside Dubai", body: "Book any same-day courier app, hand the MacBook to the driver and WhatsApp us the tracking link. If you can't come in, it's the quickest way to reach the bench, with no waiting on us." },
  { title: "Courier it from another emirate", body: "From Abu Dhabi, Sharjah or further out, book a courier to send it to us. It takes longer than same day. When the repair is done we send it back by courier, arranged on WhatsApp." },
];

const FAQS = [
  { q: "Is onsite MacBook repair in Dubai free?",
    a: "No. Onsite repair is a paid service. A technician comes to your home or office when one is free, and we quote the visit charge on WhatsApp before anything is booked. Diagnosis at our Concord Tower workshop is still free if you walk in or courier the MacBook to us." },
  { q: "How do I book a technician to visit?",
    a: "WhatsApp 055 741 3706 with your MacBook model, the fault and your area. We check whether a technician is free, tell you the charge for the visit and agree a time. Nothing is booked until you confirm on WhatsApp." },
  { q: "How soon can a technician come to me?",
    a: "It depends on whether a technician is free that day, so we don't promise a time until we've checked. If you need the MacBook looked at quickly, walking in to Concord Tower or sending it by a same-day courier is usually faster than waiting for a visit." },
  { q: "What can you fix at my home or office?",
    a: "Diagnosis, macOS crashes, boot loops caused by software, failed updates, slow Macs and full storage. These need no parts, so the technician can usually sort them at your desk while you carry on with your day." },
  { q: "What has to go to the workshop?",
    a: "Anything that needs parts or the board opened up: screen and battery replacement, keyboards, trackpads, charging ports, liquid damage and board-level repair. Those need the tools, parts and test benches at our Dubai Media City workshop, so you walk the MacBook in or courier it to us." },
  { q: "Can I courier my MacBook to you instead?",
    a: "Yes. Inside Dubai, book any same-day courier app, hand the MacBook to the driver and WhatsApp us the tracking link. It's the fastest option if you can't come in yourself. We diagnose it free and quote on WhatsApp before any work starts." },
  { q: "I'm in Abu Dhabi or another emirate. What are my options?",
    a: "Book a courier to send the MacBook to us. It takes longer than a same-day Dubai courier, so plan for that. Once the repair is done we send it back to you by courier, and we arrange the return with you on WhatsApp." },
  { q: "Do I need an appointment to walk in?",
    a: "Not for a diagnosis. Come to Office #45, 10th Floor, Concord Tower, Dubai Media City, Monday to Thursday and Saturday 9 am to 7 pm, or Friday 9 am to 12 pm and 2 pm to 7 pm. We're closed on Sunday." },
  { q: "Is the diagnosis free?",
    a: "Yes, at the workshop. We tell you what's wrong and quote the repair on WhatsApp before we touch it, and if we can't fix it you don't pay. The only extra charge is the onsite visit itself, which we quote before you book." },
  { q: "What warranty comes with the repair?",
    a: "Every repair carries our own written warranty, up to 2 years on hardware, covering the parts we fitted and our workmanship. The warranty is the same whether the job was done at your desk or on our bench." },
];

export default function OnsiteMacBookRepair() {
  useSeo(
    {
      title: "Onsite MacBook Repair Dubai. Paid Visits, When Available",
      description:
        "Onsite MacBook repair in Dubai: a paid technician visit when one is free, with the charge quoted on WhatsApp first. Or walk in to Media City. Book now.",
      path: "/onsite-macbook-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "Onsite MacBook Repair Dubai",
        warranty: "P2Y",
        url: "/onsite-macbook-repair-dubai",
        description: "Paid onsite MacBook repair in Dubai: a technician visits your home or office when one is free, with the charge quoted on WhatsApp before booking. Diagnosis and software fixes on site; hardware and board-level repairs at the Dubai Media City workshop.",
      }),
      itemList({
        name: "What we can fix onsite",
        items: ONSITE_OK.map((i) => ({ name: i.title, url: "/onsite-macbook-repair-dubai", description: i.body })),
      }),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "MacBook Repair", path: "/apple-repair-dubai" },
        { name: "Onsite Repair", path: "/onsite-macbook-repair-dubai" },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/onsite-macbook-repair-dubai")?.src}
        imageAlt={topicForPath("/onsite-macbook-repair-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Onsite MacBook Repair · Dubai"
        title="Onsite MacBook Repair in Dubai, at Your Home or Office"
        subtitle="A technician comes to you when one is free. It's a paid visit, and we quote the charge on WhatsApp before you book. Hardware jobs still come to our Media City bench."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> {RATING_LABEL} · {REVIEW_COUNT_LABEL} reviews</span>
          <span>·</span>
          <span>Visit charge quoted first</span>
          <span>·</span>
          <span>Repairing Apple hardware since 2004</span>
        </p>
      </Hero>

      <QuickAnswer
        tone="dark"
        question="Do you come to my home or office for MacBook repair?"
        answer="Yes, when one of our technicians is available. Onsite MacBook repair is a paid visit, and we quote the charge on WhatsApp before you book. Diagnosis and software fixes happen at your desk. Screens, batteries and board work need our Concord Tower bench, so walk in or courier the MacBook to us."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "MacBook Repair", path: "/apple-repair-dubai" },
          { name: "Onsite Repair", path: "/onsite-macbook-repair-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md">
          <strong>Onsite MacBook repair in Dubai</strong> means one of our technicians comes to your home or office instead of you coming to us. It's a <strong>paid visit</strong>, and it only happens when a technician is free from the workshop. We tell you the charge on WhatsApp before anything is booked, so there's no surprise on the day.
        </p>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[75ch] m-0">
          A visit suits a Mac that won't boot past the logo, a failed macOS update or a laptop you can't take off the desk for a day. If the fault turns out to be hardware, the MacBook needs our bench at Concord Tower, Dubai Media City. You can walk it in or send it by courier, and diagnosis there is free.
        </p>
      </section>

      {/* How onsite works */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Headphones size={28} className="text-accent" aria-hidden /> How does onsite MacBook repair work?
          </h2>
          <ol className="grid gap-md md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <span className="mono text-[13px] text-accent">Step {i + 1}</span>
                <h3 className="text-[17px] font-bold mb-sm mt-1">{s.title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What can and can't be done on site */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Check size={28} className="text-accent" aria-hidden /> What can a technician fix at your desk?
        </h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Jobs that need no parts. If the screen's cracked or the battery's swollen, a visit won't fix it, and we'd rather tell you that on WhatsApp than charge you for the trip.
        </p>
        <div className="grid gap-md md:grid-cols-3">
          {ONSITE_OK.map((i) => (
            <article key={i.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <h3 className="text-[17px] font-bold mb-sm flex items-start gap-2"><Check size={18} className="text-accent mt-1 shrink-0" aria-hidden /> {i.title}</h3>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{i.body}</p>
            </article>
          ))}
        </div>

        <h2 className="text-[28px] md:text-[32px] mt-3xl mb-md flex items-center gap-sm">
          <Wrench size={28} className="text-accent" aria-hidden /> Which repairs have to come to the workshop?
        </h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Anything that means opening the case. The two we see most are <Link to="/macbook-screen-repair-dubai" className="text-accent underline underline-offset-2">MacBook screen repair</Link> and <Link to="/macbook-battery-replacement-dubai" className="text-accent underline underline-offset-2">MacBook battery replacement</Link>, and both are done at Concord Tower.
        </p>
        <div className="grid gap-md md:grid-cols-2">
          {BENCH_ONLY.map((i) => (
            <article key={i.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <h3 className="text-[17px] font-bold mb-sm flex items-start gap-2"><Wrench size={18} className="text-accent mt-1 shrink-0" aria-hidden /> {i.title}</h3>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{i.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Other ways to reach the bench */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <MapPin size={28} className="text-accent" aria-hidden /> No technician free? How else can you get your MacBook to us?
          </h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            Most customers don't wait for a visit. These two routes get the MacBook onto the bench sooner. The full walk-through is in <Link to="/blog/free-pickup-delivery-dubai-how-it-works" className="text-accent underline underline-offset-2">how to get your Mac to us by courier or in person</Link>, and <Link to="/macbook-repair-near-me-dubai" className="text-accent underline underline-offset-2">MacBook repair near me</Link> has drive notes for each part of Dubai.
          </p>
          <div className="grid gap-md md:grid-cols-3">
            {ROUTES.map((r) => (
              <article key={r.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[17px] font-bold mb-sm flex items-start gap-2"><MapPin size={18} className="text-accent mt-1 shrink-0" aria-hidden /> {r.title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{r.body}</p>
              </article>
            ))}
          </div>
          <p className="text-[15px] text-text-muted leading-relaxed max-w-[70ch] mt-lg m-0">
            Not sure which to pick? <Link to="/contact" className="text-accent underline underline-offset-2">Contact us</Link> with your model and the fault and we'll tell you which route makes sense.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Onsite MacBook repair FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where we're based</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Ask for an onsite visit on WhatsApp</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Send your MacBook model, the fault and your area. We'll check if a technician is free and quote the visit before you book. If it's a bench job, we'll say so.
          </p>
          <div className="relative flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={withSlash(NAP.whatsappUrl)} target="_blank" rel="noopener noreferrer">
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
      {/* Lead form (template-audit 2026-09-24: page shipped with none) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free quote</h2>
        <LeadForm preset={PRESETS.repair} sourcePath="/onsite-macbook-repair-dubai" defaultDeviceType="MacBook" />
      </section>

      <RelatedArticles path="/onsite-macbook-repair-dubai" />
    </PageShell>
  );
}
