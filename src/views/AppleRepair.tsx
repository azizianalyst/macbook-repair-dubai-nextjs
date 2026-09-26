"use client";
// /apple-repair-dubai - the umbrella "apple repair dubai / apple repair / near me" page.
// Rebuilt 2026-09-26 (SEO master plan §2.3 #3): the homepage ranked #7 for "apple repair dubai"
// while this page sat at #59, and 86 retired Apple Watch / AirPods URLs 301 here - so the page
// states plainly what is and is not repaired in-house. Truth gate: device list, warranty tiers
// (site.ts), parts policy and Apple's UAE estimates (docs/apple-lineup-2026-09-26.md §4a, each
// figure attributed) only. No price of ours anywhere - quotes go through WhatsApp.
import {
  Laptop, Monitor, HardDrive, Smartphone, Tablet, Ban, ArrowRight, ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { TakeawaysByline } from "@/components/blocks/TakeawaysByline";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { CtaBand } from "@/components/blocks/CtaBand";
import { useSeo } from "@/hooks/use-seo";
import { itemList } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT, TEAM } from "@/content/site";

const PATH = "/apple-repair-dubai";
const FOUNDER = TEAM[0]; // Abdul Aziz - roster is the single source for name + years

const WA_QUOTE = `${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, I'd like an Apple repair quote. Device and model: . Fault: ")}`;

type Family = {
  name: string;
  href: string;
  icon: LucideIcon;
  models: string;
  body: string;
  links: { label: string; href: string }[];
};

// The seven device families repaired in-house. Nothing else is listed on purpose.
const FAMILIES: Family[] = [
  {
    name: "MacBook repair",
    href: "/",
    icon: Laptop,
    models: "MacBook Neo, MacBook Air and MacBook Pro - Intel models through M5",
    body: "Screens, batteries, keyboards, USB-C charging faults, liquid damage and logic-board repair. Board faults are traced to the failed component where the board allows it, instead of swapping the whole board.",
    links: [
      { label: "MacBook screen repair", href: "/macbook-screen-repair-dubai" },
      { label: "MacBook battery replacement", href: "/macbook-battery-replacement-dubai" },
      { label: "Logic board repair", href: "/macbook-logic-board-repair-dubai" },
    ],
  },
  {
    name: "iMac repair",
    href: "/imac-repair-dubai",
    icon: Monitor,
    models: "21.5-inch and 27-inch Intel iMacs, and the 24-inch iMac up to M4",
    body: "Cracked or dim displays, no power, slow Fusion Drive models that need an SSD, and logic-board faults. The display is held in with adhesive, so it is resealed with fresh adhesive after every opening.",
    links: [
      { label: "iMac screen repair", href: "/imac-screen-repair-dubai" },
    ],
  },
  {
    name: "Mac mini, Mac Studio and Mac Pro repair",
    href: "/mac-mini-repair-dubai",
    icon: HardDrive,
    models: "Mac mini, Mac Studio, and Mac Pro from 2013 to M2 Ultra",
    body: "No-power faults, storage problems, overheating and board repair. Apple discontinued the Mac Pro in March 2026 with no successor; we still repair it. For the Mac mini M6 and new Mac Studio, on sale since 22 September 2026, we confirm part availability on WhatsApp first.",
    links: [
      { label: "Mac Studio repair", href: "/mac-studio-repair-dubai" },
      { label: "Mac Pro repair", href: "/mac-pro-repair-dubai" },
    ],
  },
  {
    name: "iPhone repair",
    href: "/iphone-repair-dubai",
    icon: Smartphone,
    models: "Older iPhones through the iPhone 17 range, iPhone Air and iPhone 18 Pro",
    body: "Screens, batteries, back glass, charging ports, cameras, Face ID and liquid damage. An iPhone 18 Pro (on sale 18 September 2026) is normally still under Apple's warranty, so we check that first and confirm part availability before quoting.",
    links: [
      { label: "iPhone screen repair", href: "/iphone-screen-repair-dubai" },
      { label: "iPhone battery replacement", href: "/iphone-battery-replacement-dubai" },
    ],
  },
  {
    name: "iPad repair",
    href: "/ipad-repair-dubai",
    icon: Tablet,
    models: "iPad, iPad mini, iPad Air and iPad Pro, including iPad Air M4 and iPad Pro M5",
    body: "Cracked glass, displays, batteries, charging ports and board faults. On the iPad Air, mini and Pro the glass is laminated to the display, so a cracked front usually means a new display assembly.",
    links: [
      { label: "iPad screen repair", href: "/ipad-screen-repair-dubai" },
      { label: "iPad battery replacement", href: "/ipad-battery-replacement-dubai" },
    ],
  },
];

// Apple's own UAE out-of-warranty estimates, excl. VAT, read from support.apple.com/en-ae on
// 26 Sep 2026 (docs/apple-lineup-2026-09-26.md §4a). Every figure carries its attribution on the
// same line so both price gates recognise it as Apple's, never ours.
const APPLE_ESTIMATES: { repair: string; apple: string; warranty: string }[] = [
  { repair: "iPhone 18 Pro Max screen", apple: "AED 1,499 (Apple list)", warranty: "90 days" },
  { repair: "iPhone 18 Pro screen", apple: "AED 1,279 (Apple list)", warranty: "90 days" },
  { repair: "iPhone 17 Pro battery", apple: "AED 465 (Apple list)", warranty: "3 months + 80% capacity guarantee" },
  { repair: "MacBook Neo battery", apple: "AED 589 (Apple list)", warranty: "3 months + 80% capacity guarantee" },
  { repair: "MacBook Air 13\" (M5) battery", apple: "AED 689 (Apple list)", warranty: "3 months + 80% capacity guarantee" },
  { repair: "MacBook Pro 16\" (M5 Pro / M5 Max) battery", apple: "AED 959 (Apple list)", warranty: "3 months + 80% capacity guarantee" },
  { repair: "iPad Air 11\" (M4) battery", apple: "AED 499 (Apple list)", warranty: "3 months + 80% capacity guarantee" },
];

const STEPS = [
  { t: "Send the model and fault on WhatsApp", b: "A photo helps. We tell you what is likely involved." },
  { t: "Free diagnosis", b: "Walk in or use free pickup. We find the actual fault, not just the symptom." },
  { t: "Written quote, then your approval", b: "The price is confirmed in writing before any work starts. If a part is not genuine Apple, the quote says so." },
  { t: "Repair, test and warranty", b: "Tested before it goes back, with a written warranty for the repair type. No fix, no charge." },
];

const FAQS = [
  { q: "Are you an Apple Authorised Service Provider?",
    a: "No. MacBook Repair Dubai is an independent Apple repair shop with no authorisation from Apple. If Apple's warranty or AppleCare+ covers your fault, Apple or an authorised provider is the right choice, and we will say so. For out-of-warranty, older-model and board-level repairs, independent is often more practical." },
  { q: "Do you repair Apple Watch, AirPods, Apple TV or HomePod?",
    a: "No. We do not repair Apple Watch, AirPods, Apple TV or HomePod in-house, and we do not take them in to send elsewhere. Apple services them directly: start at support.apple.com/repair. We repair MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad." },
  { q: "How much does an Apple repair cost in Dubai?",
    a: "It depends on the model, the part and whether the fault is on the board. We do not publish a price list: send the model and fault on WhatsApp, and after a free diagnosis you get the exact price in writing before any work starts. Apple's own UAE estimates are in the table above for comparison." },
  { q: "Do you use genuine Apple parts?",
    a: "Genuine Apple parts where they are available, and quality-tested parts where they are not. The written quote tells you which one your repair will use before you approve it." },
  { q: "Can you repair the newest models, like the iPhone 18 Pro or MacBook Neo?",
    a: "Yes, but check with us first. A device this new is normally still under Apple's warranty, which covers manufacturing faults free. For accidental damage on the latest iPhone, the iPhone Duo (on sale 23 October 2026) or a MacBook Neo, we confirm part availability on WhatsApp before we quote." },
  { q: "What warranty do your Apple repairs carry?",
    a: "It depends on the repair: up to 12 months on hardware, 3 months with an 80% capacity guarantee on batteries, 90 days on screens, and 15 days on keyboard, software, logic-board, liquid-damage and data work. It is given in writing; full terms are on our warranty page." },
];

const linkCls = "text-accent underline underline-offset-2 hover:no-underline";

export default function AppleRepair() {
  const reviews = pickReviews([], { min: 6, seed: PATH });

  // Organization, LocalBusiness and the Service node are server-rendered by <PageSchema>;
  // only the device-family list is added here.
  useSeo(
    { title: "Apple Repair Dubai", description: "Independent Apple repair in Dubai Media City.", path: PATH },
    [
      itemList({
        name: "Apple devices repaired at MacBook Repair Dubai",
        items: FAMILIES.map((f) => ({ name: f.name, url: f.href === "/" ? "/" : `${f.href}/`, description: f.models })),
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={topicForPath(PATH)?.src}
          imageAlt={topicForPath(PATH)?.alt}
          variant="device"
          tone="dark"
          eyebrow="Independent Apple repair · Dubai Media City"
          title="Apple Repair in Dubai for Mac, iPhone and iPad"
          subtitle="An independent Apple repair shop at Concord Tower, Dubai Media City. Mac, iPhone and iPad, diagnosed free and quoted in writing before any work starts."
          ctaLabel="WhatsApp your model"
        />

        <TakeawaysByline
          updated="September 2026"
          reviewer={`${FOUNDER.name}, Founder`}
          years={FOUNDER.years}
          items={[
            "Seven Apple device families repaired in-house: MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad.",
            "Apple Watch, AirPods, Apple TV and HomePod are not repaired here; Apple services those directly.",
            "We are independent, not Apple Authorised. If Apple's warranty or AppleCare+ covers the fault, we tell you to go to Apple.",
            "Diagnosis is free, the price is confirmed in writing before work starts, and there is no charge if we cannot fix it.",
            "Written warranty by repair type, from 15 days on board and software work up to 12 months on hardware.",
          ]}
        />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Apple Repair Dubai", path: PATH }]} />
        </section>

        <QuickAnswer
          tone="dark"
          question="Where can I get Apple repair in Dubai?"
          answer="MacBook Repair Dubai is an independent Apple repair workshop at Concord Tower, Dubai Media City, open since 2004. Today it fixes MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad. Diagnosis is free and you get a written quote on WhatsApp before work starts. We are not Apple Authorised and do not service Apple Watch or AirPods."
        />

        {/* Device families */}
        <section aria-labelledby="families" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="families" className="text-[28px] md:text-[32px] mb-md">Apple devices we repair in Dubai</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            Macs are most of our work, with iPhone and iPad alongside. Pick your device, or <a href={WA_QUOTE} target="_blank" rel="noopener noreferrer" className={linkCls}>send the model and fault on WhatsApp</a> for a quote.
          </p>
          <div className="grid gap-md md:grid-cols-2">
            {FAMILIES.map(({ name, href, icon: Icon, models, body, links }) => (
              <article key={name} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <div className="flex items-start gap-md">
                  <Icon size={28} className="text-accent shrink-0 mt-1" aria-hidden />
                  <div>
                    <h3 className="text-[20px] font-bold mb-1">
                      <Link to={href} className="text-text hover:text-accent">{name}</Link>
                    </h3>
                    <p className="text-[13px] text-text-faint mb-sm">{models}</p>
                  </div>
                </div>
                <p className="text-[15px] text-text-muted leading-relaxed mb-md">{body}</p>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-border/70 bg-bg px-3.5 py-1.5 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-accent">
                        {l.label} <ArrowRight size={13} className="text-accent" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="text-[15px] text-text-muted leading-relaxed max-w-[72ch] mt-lg">
            Apple screen repair runs across the range: <Link to="/macbook-screen-repair-dubai" className={linkCls}>MacBook screens</Link>, <Link to="/iphone-screen-repair-dubai" className={linkCls}>iPhone screens</Link>, <Link to="/ipad-screen-repair-dubai" className={linkCls}>iPad screens</Link>, <Link to="/imac-screen-repair-dubai" className={linkCls}>iMac displays</Link> and <Link to="/apple-display-repair-dubai" className={linkCls}>Apple Studio Display</Link> panels. For data on a Mac that will not start, see <Link to="/mac-data-recovery-dubai" className={linkCls}>Mac data recovery</Link>.
          </p>
        </section>

        {/* Honest scope note - 86 retired Watch/AirPods URLs redirect to this page */}
        <section aria-labelledby="not-repaired" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 border-l-4 border-l-accent bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg max-w-[80ch]">
            <h2 id="not-repaired" className="text-[22px] md:text-[26px] mb-sm flex items-center gap-sm">
              <Ban size={24} className="text-accent shrink-0" aria-hidden /> Apple Watch, AirPods, Apple TV and HomePod: not repaired here
            </h2>
            <p className="text-[16px] text-text-muted leading-relaxed m-0">
              If you followed a link here for Apple Watch or AirPods repair, the straight answer: we do not repair Apple Watch, AirPods, Apple TV or HomePod in-house, and we will not take them in to pass on. Apple services them directly; start at{" "}
              <a href="https://support.apple.com/repair" target="_blank" rel="noopener noreferrer" className={linkCls}>support.apple.com/repair <ExternalLink size={13} className="inline" aria-hidden /></a>{" "}
              to check coverage and book. For a Mac, iPhone or iPad, we can help.
            </p>
          </div>
        </section>

        {/* Independent vs Apple, anchored on Apple's own published UAE estimates */}
        <section aria-labelledby="vs-apple" className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 id="vs-apple" className="text-[28px] md:text-[32px] mb-md">Independent Apple repair vs Apple's own service</h2>
            <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mb-lg">
              Apple publishes UAE out-of-warranty estimates, and they make a fair benchmark: send us the same model and fault, then compare our written quote with Apple's figure.
            </p>
            <div className="overflow-x-auto rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03]">
              <table className="w-full text-[14px]">
                <caption className="sr-only">Apple's UAE repair estimates and our warranty</caption>
                <thead>
                  <tr className="text-left border-b border-border">
                    <th scope="col" className="px-md py-md font-semibold text-text">Repair</th>
                    <th scope="col" className="px-md py-md font-semibold text-text">Apple's UAE estimate (excl. VAT)</th>
                    <th scope="col" className="px-md py-md font-semibold text-accent">Our warranty</th>
                  </tr>
                </thead>
                <tbody>
                  {APPLE_ESTIMATES.map((r, i) => (
                    <tr key={r.repair} className={i % 2 ? "bg-bg-alt" : ""}>
                      <td className="px-md py-md align-top font-medium text-text">{r.repair}</td>
                      <td className="px-md py-md align-top text-text-muted mono">{r.apple}</td>
                      <td className="px-md py-md align-top text-text">{r.warranty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-text-faint mt-sm max-w-[80ch]">
              Source: Apple's repair pricing on support.apple.com/en-ae (<a href="https://support.apple.com/en-ae/iphone/repair/screen-replacement" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">iPhone</a>, <a href="https://support.apple.com/en-ae/mac-laptops/repair?services=service" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Mac laptops</a>), checked 26 September 2026; subject to VAT, and authorised providers set their own fees. Apple gives no figure for Mac laptop screens. Our price is quoted per model on WhatsApp after a free diagnosis.
            </p>

            <div className="grid gap-lg md:grid-cols-2 mt-2xl">
              <div>
                <h3 className="text-[20px] font-bold mb-sm">When Apple is the better choice</h3>
                <ul className="space-y-2 text-[15px] text-text-muted leading-relaxed list-disc pl-5">
                  <li>Apple's warranty or AppleCare+ covers the fault: that route is free or a set fee, and we will tell you to take it (see <Link to="/blog/applecare-vs-independent-repair-dubai" className={linkCls}>AppleCare vs independent repair</Link>).</li>
                  <li>Apple runs a <Link to="/apple-repair-programs-dubai" className={linkCls}>repair program</Link> for a known fault on your model.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[20px] font-bold mb-sm">When an independent repair makes sense</h3>
                <ul className="space-y-2 text-[15px] text-text-muted leading-relaxed list-disc pl-5">
                  <li><Link to="/out-of-warranty-apple-repair-dubai" className={linkCls}>Out of warranty</Link>, where a component-level fix can replace a whole-module swap.</li>
                  <li>Older Macs Apple classes as vintage or obsolete.</li>
                  <li>You want your data kept: we ask before anything is erased.</li>
                  <li>You would rather walk in than <Link to="/blog/apple-repair-appointment-dubai" className={linkCls}>wait for an Apple appointment</Link>.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Near me / how to reach the shop */}
        <section aria-labelledby="near-me" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="near-me" className="text-[28px] md:text-[32px] mb-md">Apple repair near me: one repair centre in Dubai Media City</h2>
          <div className="max-w-[75ch] space-y-md text-[16px] text-text-muted leading-relaxed">
            <p className="m-0">
              Our Apple repair shop is Office #45, 10th floor, Concord Tower, Al Sufouh, Dubai Media City, across from the Media City Metro station, with paid parking. Walk in Monday to Saturday, 9 am to 10 pm; on Sunday the workshop is closed, but WhatsApp us and we will book you in for Monday.
            </p>
            <p className="m-0">
              Need an Apple fix in Dubai but cannot come in? Pickup and delivery are free across Dubai mainland. Macs are collected by courier from <Link to="/macbook-repair-abu-dhabi" className={linkCls}>Abu Dhabi</Link> and <Link to="/macbook-repair-sharjah" className={linkCls}>Sharjah</Link> and repaired at the same bench; we have no branches. Area pickup details are on <Link to="/apple-repair-near-me-dubai" className={linkCls}>Apple repair near me</Link>. Looking for Apple's own service or an authorised centre? Read <Link to="/apple-service-center-dubai" className={linkCls}>our Apple service center page</Link>.
            </p>
          </div>
        </section>

        {/* Process */}
        <section aria-labelledby="process" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="process" className="text-[28px] md:text-[32px] mb-lg">How an Apple repair works here</h2>
          <ol className="grid gap-md md:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
            {STEPS.map((s, i) => (
              <li key={s.t} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <span aria-hidden className="inline-flex w-10 h-10 rounded-md bg-accent/10 text-accent font-bold text-[18px] items-center justify-center mb-md">{i + 1}</span>
                <h3 className="text-[17px] font-bold mb-1">{s.t}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{s.b}</p>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-text-muted leading-relaxed max-w-[75ch] mt-lg">
            Warranty terms for each repair type are on the <Link to="/warranty" className={linkCls}>warranty page</Link>.
          </p>
        </section>

        {/* Reviews (real, from the verified Google library) */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-sm">What customers say</h2>
            <p className="text-[16px] text-text-muted mb-lg">From our {REVIEW_COUNT}+ Google reviews. <Link to="/reviews" className={linkCls}>Read them all</Link>.</p>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Apple repair Dubai: common questions</h2>
          <FAQAccordion items={FAQS} injectSchema />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Where to find the workshop</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="apple-lead">
        <h2 id="apple-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get your Apple repair quote</h2>
        <LeadForm preset={PRESETS.repair} sourcePath={PATH} defaultDeviceType="MacBook" />
      </section>

      <CtaBand
        eyebrow="Apple repair quote"
        headline="Send your model and fault, get a written quote"
        description="Free diagnosis, no fix no charge."
        whatsappLabel="WhatsApp for a quote"
        whatsappHref={WA_QUOTE}
        className="mt-3xl"
      />

      <p className="mx-auto max-w-content px-5 md:px-6 mt-xl text-[15px] text-text-muted">
        Weighing up providers? Read <Link to="/best-apple-repair-dubai" className={linkCls}>what makes the best Apple repair centre in Dubai</Link>.
      </p>
      <RelatedArticles path={PATH} />
    </PageShell>
  );
}
