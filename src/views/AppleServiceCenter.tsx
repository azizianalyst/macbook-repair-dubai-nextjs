"use client";
// /apple-service-center-dubai - targets the "apple service center" navigational cluster
// (apple service center / dubai / near me / abu dhabi / sharjah / authorized / appointment).
// Rebuilt 2026-09-26 (SEO master plan Phase 3 build 8). The prominent "independent, not Apple
// Authorised" disclaimer is the point of the page: it answers the searcher honestly, explains
// their real options (Apple Store, authorised provider, independent), and offers the independent
// route for out-of-warranty work. Prior "faithful WordPress rebuild" version is in git history;
// its unsourced claims (24/7 WhatsApp, "only genuine parts", "best technicians in the UAE",
// same-day badges) were dropped. No prices of ours; no Apple Watch / AirPods service.
import { ShieldAlert, Store, BadgeCheck, Wrench, Check, ExternalLink, CalendarClock, Truck, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { PRESETS } from "@/data/form-presets";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { topicForPath } from "@/lib/page-images";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { CtaBand } from "@/components/blocks/CtaBand";
import { NAP, REVIEW_COUNT } from "@/content/site";

const PATH = "/apple-service-center-dubai";
const WA_QUOTE = `${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, I'd like a quote from your independent Apple service center. Device and model: . Fault: ")}`;
const linkCls = "text-accent underline underline-offset-2 hover:no-underline";

// The three real routes to Apple service in Dubai. Ours is one of them, not a substitute for Apple.
const OPTIONS: { icon: LucideIcon; title: string; body: string; best: string }[] = [
  {
    icon: Store,
    title: "Apple Store (Genius Bar)",
    body: "Apple's own stores in Dubai, such as those at The Dubai Mall and Mall of the Emirates, repair devices at the Genius Bar, usually by appointment through the Apple Support app.",
    best: "Best for faults covered by Apple's warranty or AppleCare+.",
  },
  {
    icon: BadgeCheck,
    title: "Apple Authorised Service Provider",
    body: "Companies Apple authorises to repair its products with Apple's parts and processes. Apple's repair site lists the ones near you.",
    best: "Also a good route for covered faults, and when you want Apple's process.",
  },
  {
    icon: Wrench,
    title: "Independent specialist (that's us)",
    body: "Not authorised by Apple. Free diagnosis, component-level repair where the fault allows, and genuine parts where available or quality-tested parts otherwise, disclosed before work starts.",
    best: "Best for out-of-warranty faults, older Macs, board-level and data-first repairs.",
  },
];

const COMPARISON: { label: string; us: string; them: string }[] = [
  { label: "Who does the repair", us: "Our own technicians at one workshop in Dubai Media City", them: "Apple, or a company Apple authorises" },
  { label: "Getting seen", us: "Walk in Monday to Saturday, 9 am to 10 pm, or free pickup across Dubai mainland", them: "Usually by appointment, booked through Apple Support" },
  { label: "Under warranty or AppleCare+", us: "We send you to Apple: a covered repair there is free or a set fee", them: "The right place for a covered fault" },
  { label: "Out of warranty", us: "Component-level repair where the fault allows it", them: "Usually a module or whole-unit replacement" },
  { label: "Parts", us: "Genuine where available, quality-tested otherwise, disclosed before work", them: "Apple parts" },
  { label: "Price", us: "Free diagnosis, then a written quote on WhatsApp", them: "Apple publishes UAE estimates for common repairs" },
  { label: "Warranty on the repair", us: "Up to 12 months, depending on the repair", them: "Set by Apple or the provider" },
];

// Compact, link-first service list - every href is a live route (routes.generated.ts).
const SERVICE_GROUPS: { device: string; hub: string; items: { label: string; href: string }[] }[] = [
  { device: "MacBook", hub: "/", items: [
    { label: "Screen repair", href: "/macbook-screen-repair-dubai" },
    { label: "Battery replacement", href: "/macbook-battery-replacement-dubai" },
    { label: "Keyboard repair", href: "/macbook-keyboard-repair-dubai" },
    { label: "Charging port repair", href: "/macbook-charging-port-repair-dubai" },
    { label: "Logic board repair", href: "/macbook-logic-board-repair-dubai" },
    { label: "Water damage repair", href: "/macbook-water-damage-repair-dubai" },
    { label: "Data recovery", href: "/macbook-data-recovery-dubai" },
  ] },
  { device: "iMac and desktop Macs", hub: "/imac-repair-dubai", items: [
    { label: "iMac repair", href: "/imac-repair-dubai" },
    { label: "iMac screen repair", href: "/imac-screen-repair-dubai" },
    { label: "Mac mini repair", href: "/mac-mini-repair-dubai" },
    { label: "Mac Studio repair", href: "/mac-studio-repair-dubai" },
    { label: "Mac Pro repair", href: "/mac-pro-repair-dubai" },
  ] },
  { device: "iPhone", hub: "/iphone-repair-dubai", items: [
    { label: "Screen repair", href: "/iphone-screen-repair-dubai" },
    { label: "Battery replacement", href: "/iphone-battery-replacement-dubai" },
    { label: "Back glass repair", href: "/iphone-back-glass-repair-dubai" },
    { label: "Charging port repair", href: "/iphone-charging-port-repair-dubai" },
    { label: "Water damage repair", href: "/iphone-water-damage-repair-dubai" },
  ] },
  { device: "iPad", hub: "/ipad-repair-dubai", items: [
    { label: "Screen repair", href: "/ipad-screen-repair-dubai" },
    { label: "Battery replacement", href: "/ipad-battery-replacement-dubai" },
    { label: "Charging port repair", href: "/ipad-charging-port-repair-dubai" },
  ] },
];

const PREP = [
  "Back up first: iCloud or a computer backup for an iPhone or iPad, Time Machine for a Mac that still starts.",
  "Have your passcode or Mac login ready, because checking a repair usually needs the device unlocked.",
  "Don't erase the device before you bring it in. We diagnose with your data in place and ask before anything is erased.",
];

const FAQS = [
  { q: "Is MacBook Repair Dubai an official or Apple Authorised Service Center?",
    a: "No. We are an independent Apple repair workshop in Dubai Media City: not Apple, not an Apple Store and not an Apple Authorised Service Provider. If Apple's warranty or AppleCare+ covers your fault, we will tell you to go to Apple. For out-of-warranty and board-level repairs, we are an independent alternative." },
  { q: "Where is the nearest Apple service center to me in Dubai?",
    a: "Apple's locator on support.apple.com/repair shows the nearest Apple Store and authorised providers for your location. If an independent repair suits you, our workshop is in Concord Tower, Dubai Media City, across from the Media City Metro station, open Monday to Saturday from 9 am to 10 pm, with free pickup across Dubai mainland." },
  { q: "Do I need an appointment?",
    a: "No. Walk in during opening hours or book a free pickup. Sending the model and fault on WhatsApp first helps us check part availability before you travel. Diagnosis is free, and nothing is repaired until you approve the written quote." },
  { q: "My device is under warranty. Should I go to Apple instead?",
    a: "Usually, yes. If Apple's warranty or AppleCare+ covers the fault, Apple or an authorised provider repairs it free or for a set fee, and we will say so rather than quote you. Accidental damage, expired warranties and older models are where independent repair makes more sense." },
  { q: "Do you have an Apple service center in Abu Dhabi or Sharjah?",
    a: "No. We have one workshop, in Dubai Media City, and no branches. For Macs we arrange free courier collection: Sharjah collections are usually same day, and Abu Dhabi collections are next day with a typical 1-2 day round trip. For an iPhone or iPad outside Dubai, message us first on WhatsApp." },
  { q: "Do you repair Apple Watch or AirPods?",
    a: "No. Apple Watch, AirPods, Apple TV and HomePod are not repaired here, and we do not take them in to send elsewhere. Apple services them directly: start at support.apple.com/repair. We repair MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad." },
];

export default function AppleServiceCenter() {
  const reviews = pickReviews(["Aron", "Дмитрий Строков", "Iryna Buchynska"], { devices: reviewDevicesForPath(PATH), min: 3, seed: PATH });
  // Organization, LocalBusiness and the Service node are server-rendered by <PageSchema>.

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={topicForPath(PATH)?.src}
          imageAlt={topicForPath(PATH)?.alt}
          variant="device"
          tone="dark"
          eyebrow="Independent Apple Service Center - Not Apple Authorised"
          title="Apple Service Center Dubai: an Independent Alternative for Mac, iPhone and iPad"
          subtitle="Not Apple, and not an Apple Authorised Service Provider: an independent repair workshop in Dubai Media City. Free diagnosis, a written quote before any work, no appointment needed."
          ctaLabel="WhatsApp the workshop"
        />

        {/* The disclaimer, stated as plainly as the page title is searched */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl" aria-label="Independent service disclaimer">
          <div className="border border-border/70 border-l-4 border-l-accent bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex gap-md max-w-[85ch]">
            <ShieldAlert size={28} className="text-accent shrink-0 mt-1" aria-hidden />
            <p className="text-[16px] text-text leading-relaxed m-0">
              <strong>Please read first:</strong> MacBook Repair Dubai is not an Apple Store, not Apple, and not an Apple Authorised Service Provider. If your device is covered by Apple's warranty or AppleCare+, Apple is usually the better route, and{" "}
              <a href="https://support.apple.com/repair" target="_blank" rel="noopener noreferrer" className={linkCls}>support.apple.com/repair <ExternalLink size={13} className="inline" aria-hidden /></a>{" "}
              is where to start. For everything else, we are an independent option in Dubai Media City.
            </p>
          </div>
        </section>

        <QuickAnswer
          tone="dark"
          question="Is this an official Apple service center?"
          answer="No. MacBook Repair Dubai is an independent Apple repair workshop in Dubai Media City, not Apple and not an Apple Authorised Service Provider. We repair Mac, iPhone and iPad with no appointment needed. If Apple's warranty or AppleCare+ covers your fault, we will tell you to go to Apple instead."
        />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[
            { name: "Home", path: "/" },
            { name: "Apple Service Center Dubai", path: PATH },
          ]} />
        </section>

        {/* Options */}
        <section aria-labelledby="options" className="mx-auto max-w-content px-5 md:px-6 mt-2xl">
          <h2 id="options" className="text-[28px] md:text-[32px] mb-sm">Your options for Apple service in Dubai</h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mb-lg">
            People searching for an Apple service center usually want one of three things: Apple itself, a provider Apple authorises, or someone who can simply fix the device. Here is what each one is, and when it is the right choice.
          </p>
          <div className="grid gap-md md:grid-cols-3">
            {OPTIONS.map(({ icon: Icon, title, body, best }) => (
              <article key={title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex flex-col">
                <Icon size={28} className="text-accent mb-md" aria-hidden />
                <h3 className="text-[19px] font-bold mb-sm">{title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed mb-md">{body}</p>
                <p className="text-[14px] text-text font-medium mt-auto m-0">{best}</p>
              </article>
            ))}
          </div>
          <p className="text-[14px] text-text-faint mt-md max-w-[80ch]">
            Apple's current UAE store list is at <a href="https://www.apple.com/ae/retail/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">apple.com/ae/retail</a>. Apple's own UAE repair estimates are compared on our <Link to="/apple-repair-dubai" className={linkCls}>Apple repair Dubai</Link> page.
          </p>
        </section>

        {/* Authorised near me */}
        <section aria-labelledby="authorised" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="authorised" className="text-[28px] md:text-[32px] mb-md">Looking for an Apple authorized service center near you?</h2>
          <div className="max-w-[75ch] space-y-md text-[16px] text-text-muted leading-relaxed">
            <p className="m-0">
              We are not one, so we will not pretend otherwise. To find an Apple authorized service center in Dubai, use Apple's locator on <a href="https://support.apple.com/repair" target="_blank" rel="noopener noreferrer" className={linkCls}>support.apple.com/repair</a> or the Apple Support app, which lists Apple Stores and authorised providers near you. Apple's coverage check at <a href="https://checkcoverage.apple.com/" target="_blank" rel="noopener noreferrer" className={linkCls}>checkcoverage.apple.com</a> tells you whether your serial number is still under warranty or AppleCare+.
            </p>
            <p className="m-0">
              If the device is out of warranty, Apple has quoted a whole-module replacement for a fault that could be fixed on the board, or the model is too old for Apple to service, a free second opinion from an independent workshop is worth having. Our guides to <Link to="/out-of-warranty-apple-repair-dubai" className={linkCls}>out-of-warranty Apple repair</Link> and <Link to="/applecare-macbook-repair-dubai" className={linkCls}>AppleCare vs independent MacBook repair</Link> explain the trade-offs.
            </p>
          </div>
        </section>

        {/* Appointment overflow */}
        <section aria-labelledby="appointment" className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 id="appointment" className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <CalendarClock size={28} className="text-accent shrink-0" aria-hidden /> Can't get an Apple service center appointment in Dubai?
            </h2>
            <div className="max-w-[75ch] space-y-md text-[16px] text-text-muted leading-relaxed">
              <p className="m-0">
                Apple's Genius Bar works mainly by appointment, and in the weeks after a launch (the iPhone 18 Pro went on sale on 18 September 2026) the next free slot at a busy mall store can be days away. If the device is under warranty, waiting for Apple is usually still worth it: a covered repair costs you nothing.
              </p>
              <p className="m-0">
                If it is out of warranty or the damage is accidental, you do not need an appointment here: walk in Monday to Saturday, 9 am to 10 pm, or book free pickup across Dubai mainland. Our guide on <Link to="/blog/apple-repair-appointment-dubai" className={linkCls}>what to do when you can't get an Apple repair appointment in Dubai</Link> covers both routes step by step.
              </p>
            </div>
          </div>
        </section>

        {/* Independent vs Apple / authorised */}
        <section aria-labelledby="compare" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="compare" className="text-[28px] md:text-[32px] mb-sm">Independent repair vs Apple or an authorised center</h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">An honest side-by-side, including where Apple is the better call.</p>
          <ul className="md:hidden flex flex-col gap-sm list-none p-0 m-0">
            {COMPARISON.map((r) => (
              <li key={r.label} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
                <p className="font-semibold text-text mb-sm">{r.label}</p>
                <p className="text-[14px] text-text mb-xs"><span className="font-semibold text-accent">Independent (us):</span> {r.us}</p>
                <p className="text-[14px] text-text-muted m-0"><span className="font-semibold">Apple / authorised:</span> {r.them}</p>
              </li>
            ))}
          </ul>
          <div className="hidden md:block overflow-x-auto rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03]">
            <table className="w-full text-[14px]">
              <caption className="sr-only">Independent repair at MacBook Repair Dubai compared with Apple or an Apple Authorised Service Provider</caption>
              <thead>
                <tr className="text-left border-b border-border">
                  <th scope="col" className="px-md py-md w-[24%]"><span className="sr-only">Factor</span></th>
                  <th scope="col" className="px-md py-md font-semibold text-accent">Independent (MacBook Repair Dubai)</th>
                  <th scope="col" className="px-md py-md font-semibold text-text-muted">Apple Store or authorised provider</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? "bg-bg-alt" : ""}>
                    <th scope="row" className="px-md py-md text-left font-semibold align-top text-text">{r.label}</th>
                    <td className="px-md py-md align-top text-text"><span className="flex gap-2"><Check size={16} className="shrink-0 mt-0.5 text-accent" aria-hidden /> {r.us}</span></td>
                    <td className="px-md py-md align-top text-text-muted">{r.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Other emirates */}
        <section aria-labelledby="emirates" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="emirates" className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Truck size={28} className="text-accent shrink-0" aria-hidden /> Apple service center in Abu Dhabi or Sharjah?
          </h2>
          <div className="max-w-[75ch] space-y-md text-[16px] text-text-muted leading-relaxed">
            <p className="m-0">
              We have one workshop, in Dubai Media City, and no branch in Abu Dhabi, Sharjah or any other emirate. What we do offer is free courier collection for Macs. In Sharjah a courier usually collects the same day; from Abu Dhabi, collection is the next day and the round trip typically takes 1-2 days. The details are on <Link to="/macbook-repair-abu-dhabi" className={linkCls}>MacBook repair Abu Dhabi</Link> and <Link to="/macbook-repair-sharjah" className={linkCls}>MacBook repair Sharjah</Link>.
            </p>
            <p className="m-0">
              For an iPhone or iPad outside Dubai, WhatsApp us first for the quickest option. Apple's own stores and authorised providers in Abu Dhabi and Sharjah are in the locator on support.apple.com/repair.
            </p>
          </div>
        </section>

        {/* What we repair */}
        <section aria-labelledby="services" className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 id="services" className="text-[28px] md:text-[32px] mb-sm">What our independent Apple service center repairs</h2>
            <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
              Macs are most of our work, with iPhone and iPad alongside. Apple Watch, AirPods, Apple TV and HomePod are not repaired here. The full overview is on <Link to="/apple-repair-dubai" className={linkCls}>Apple repair Dubai</Link>.
            </p>
            <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_GROUPS.map((g) => (
                <article key={g.device} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <h3 className="text-[18px] font-bold mb-sm"><Link to={g.hub} className="text-text hover:text-accent">{g.device} repair</Link></h3>
                  <ul className="grid gap-1.5 list-none p-0 m-0">
                    {g.items.map((it) => (
                      <li key={it.href}><Link to={it.href} className="text-[14px] text-text-muted hover:text-accent">{it.label}</Link></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Prep */}
        <section aria-labelledby="prep" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="prep" className="text-[28px] md:text-[32px] mb-md">Before you hand over any Apple device</h2>
          <ul className="space-y-2 max-w-[75ch] list-none p-0 m-0">
            {PREP.map((p) => (
              <li key={p} className="flex gap-sm text-[16px] text-text-muted leading-relaxed"><CheckCircle2 size={18} className="text-accent shrink-0 mt-1" aria-hidden /> {p}</li>
            ))}
          </ul>
          <p className="text-[15px] text-text-muted leading-relaxed max-w-[75ch] mt-md">
            Warranty on our repairs depends on the job: up to 12 months on hardware, 3 months with an 80% capacity guarantee on batteries, 90 days on screens, and 15 days on keyboard, software, logic-board, liquid-damage and data work. See the <Link to="/warranty" className={linkCls}>warranty page</Link>, and check <Link to="/apple-repair-programs-dubai" className={linkCls}>Apple's repair programs</Link> in case your fault is one Apple fixes free.
          </p>
        </section>

        {/* Reviews */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-sm">Customer reviews</h2>
            <p className="text-[16px] text-text-muted mb-lg">From our {REVIEW_COUNT}+ Google reviews. <Link to="/reviews" className={linkCls}>Read them all</Link>.</p>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Apple service center Dubai: frequently asked questions</h2>
          <FAQAccordion items={FAQS} injectSchema />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Where to find us</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free quote</h2>
        <LeadForm preset={PRESETS.repair} sourcePath={PATH} defaultDeviceType="MacBook" />
      </section>

      <CtaBand
        eyebrow="Independent, not Apple Authorised"
        headline="Out of warranty? Get a technician's opinion today"
        description="Send the model and fault on WhatsApp. Free diagnosis, written quote before any work, no fix no charge."
        whatsappLabel="WhatsApp for a quote"
        whatsappHref={WA_QUOTE}
        className="mt-3xl"
      />

      <RelatedArticles path={PATH} />
    </PageShell>
  );
}
