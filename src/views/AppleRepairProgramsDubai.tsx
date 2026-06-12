"use client";
import { Link } from "@/lib/router-compat";
import { ShieldCheck, ExternalLink, MessageCircle, Phone, AlertCircle, CheckCircle2, Clock } from "lucide-react";

import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { Button } from "@/components/ui/button";

import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, webPage, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { NAP } from "@/content/site";

const PATH = "/apple-repair-programs-dubai";
const URL = `${SITE.url}${PATH}`;
const LAST_UPDATED = "May 2026";

const ACTIVE_PROGRAMS = [
  { program: "iPhone 12 / 12 Pro Display Module (extended in some regions)", models: "iPhone 12, 12 Pro", issue: "Touch unresponsive after iOS update - limited regional eligibility", until: "Rolling - check serial" },
  { program: "Apple Watch Ultra Action Button Programme", models: "Apple Watch Ultra (2022)", issue: "Action button intermittently unresponsive", until: "2026" },
  { program: "Mac Studio M1 Max Power Supply (limited)", models: "Mac Studio (2022) - narrow serial range", issue: "No-power / random shutdown", until: "2026" },
];

const ENDED_PROGRAMS = [
  { program: "iPhone 14 Plus Rear Camera Service Programme", models: "iPhone 14 Plus", issue: "Rear camera fails to switch on / preview freezes", ended: "April 2026" },
  { program: "Keyboard Service Programme (butterfly)", models: "MacBook (Retina) 2015-2017, MacBook Air 2018-2019, MacBook Pro 13/15 2016-2019", issue: "Sticking, repeating or unresponsive keys", ended: "2024-2025 (rolling per model)" },
  { program: "iPhone X Display Module Replacement", models: "iPhone X", issue: "Touch unresponsive or registering without contact", ended: "December 2020" },
  { program: "iPhone 11 Display Module Replacement", models: "iPhone 11", issue: "Touch issues after software update", ended: "September 2022" },
  { program: "iPhone 12 / 12 Pro Receiver Module", models: "iPhone 12, 12 Pro", issue: "No sound from receiver during calls", ended: "March 2023" },
  { program: '"Flexgate" - 13" MacBook Pro Display Backlight', models: "13\" MacBook Pro 2016", issue: "Backlight stripes / Stage Light effect", ended: "2021" },
  { program: '15" MacBook Pro Battery Recall', models: "15\" MacBook Pro 2015 (mid)", issue: "Battery may overheat / fire risk - recall, not programme", ended: "Replaced unit - recall closed" },
  { program: "iPhone 6s Unexpected Shutdown", models: "iPhone 6s (specific serial range)", issue: "Unexpected shutdown - battery cause", ended: "December 2018" },
  { program: "iPhone 7 No Service / Audio IC", models: "iPhone 7", issue: "'No Service' / loop / mic dead - audio IC", ended: "Both ended pre-2022" },
  { program: "iMac 27\" 1TB Hard Drive Recall", models: "iMac 27\" (Late 2012, October 2012 - April 2013)", issue: "Drive failure", ended: "2018" },
];

const FAQS = [
  { q: "How do I check if my Apple device qualifies for a free repair programme?",
    a: "Three quick options. (1) Visit apple.com/support/exchange_repair and enter your device's serial number. (2) Search Google for '[your model] repair program apple'. (3) Bring or WhatsApp your device to us - we'll check the serial against every active and recently ended Apple programme, free of charge, and tell you honestly if Apple should fix it for free." },
  { q: "My MacBook Pro 2018 keyboard is sticking. Is the Keyboard Service Programme still valid?",
    a: "The Keyboard Service Programme covered MacBooks for 4 years from the original purchase date. For most affected models that window has now closed (2024-2025 rolling). Check your serial on Apple's site first. If ineligible, we replace the top case (which includes keyboard, battery and trackpad) for AED 700-950 depending on model, with a 15-day warranty." },
  { q: "My iPhone 11 has touch issues. Can I still get free Apple repair?",
    a: "The iPhone 11 Display Module Replacement Programme ended in September 2022. We replace genuine-quality display modules from AED 500 with a 3-month written warranty - typically 60-90 minutes in the workshop. We can confirm the issue is the digitizer (not a deeper logic-board fault) before charging anything." },
  { q: "My MacBook Pro 2016 has Flexgate (Stage Light effect). Can Apple still help?",
    a: "Apple's Display Backlight Service Programme for the 13\" MacBook Pro (2016) ended in 2021. We offer two routes: (a) replace just the flex cable for AED 600 if the display panel is intact, or (b) full display assembly for AED 800 if the panel is also damaged. Both come with a 3-month warranty." },
  { q: "Are you an Apple Authorised Service Provider?",
    a: "No. We are an independent Apple repair specialist with 21 years of experience, not an AASP. That means we cannot honour Apple's warranty or in-warranty programmes ourselves - but we will tell you if Apple should fix your device for free, and we'll handle any work that falls outside Apple's coverage." },
  { q: "Why do you recommend Apple first when my device is eligible for a free programme?",
    a: "Honesty wins long-term customers. If Apple will fix your device for free, that's the best outcome for you. We'd rather lose one job today and earn your trust for the next 10 years of repairs across your household and office. Roughly 5% of devices we check qualify for a free Apple programme - we send those customers straight to Apple." },
  { q: "What happens if Apple refuses my programme repair?",
    a: "Common reasons: serial number outside the eligible range, accidental damage flagged by Apple's diagnostic, or the programme has expired. In any of those cases bring the device back to us - we can repair the same fault out-of-pocket with transparent pricing and a 12-month warranty, often the same day." },
  { q: "Are there any active programmes for iPad or Apple Watch in 2026?",
    a: "Apple Watch Ultra (2022) Action Button Programme is currently active (rolling). iPad-specific programmes have not been active since 2022. We track Apple's announcement page weekly and update this list quarterly - last refreshed " + LAST_UPDATED + "." },
  { q: "Can I bring a device that Apple refused to repair under a programme?",
    a: "Yes - this is one of our most common repair categories. If Apple's bench refused service due to liquid damage, third-party part history, or a hairline frame bend, we can usually still repair it at the component level. Free diagnosis, written quote, no-fix-no-charge if we cannot complete the repair." },
];

const SCENARIOS = [
  { q: "MacBook Pro 2018 sticking keyboard.",
    a: "Apple's Keyboard Service Programme has now ended for most 2018 models. We replace the full top case (keyboard + battery + trackpad) for AED 700, 15-day warranty, 1-2 day turnaround." },
  { q: "iPhone 11 touch unresponsive.",
    a: "Programme ended September 2022. We replace the display module from AED 500, 60-90 minutes in the workshop, 3-month warranty." },
  { q: "13\" MacBook Pro 2016 backlight stripes (Flexgate).",
    a: "Programme ended 2021. Cable-only repair AED 600; full display AED 800. Both with 3-month warranty." },
  { q: "iPhone 12 receiver dead during calls.",
    a: "Programme ended March 2023. Receiver replacement AED 350 with 12-month warranty, returned same day." },
];

export default function AppleRepairProgramsDubai() {
  useSeo(
    {
      title: "Apple Free Repair Programs Dubai - Check If You Qualify",
      description:
        "Apple offers free repairs for specific defects on certain models. Butterfly keyboard, Flexgate, iPhone 11 display issues. We help check your eligibility.",
      path: PATH,
    },
    [
      organization(),
      localBusiness(),
      webPage({
        title: "Apple Free Repair Programs Dubai",
        description: "Independent guide to Apple's active and recently ended repair programmes - check eligibility for free repair before paying anywhere.",
        path: PATH,
        dateModified: "2026-04-15",
        datePublished: "2024-09-01",
      }),
      pageWithSpeakable({ url: URL, name: "Apple Free Repair Programs Dubai" }),
      serviceSchema({
        name: "Apple repair programme eligibility check",
        price: 0,
        timeline: "Same day",
        warranty: "P1Y",
        url: PATH,
        description: "Free 30-minute diagnostic check against every active and recently ended Apple repair programme. Independent guidance - we'll tell you if Apple should fix your device for free.",
      }),
      // BreadcrumbList is emitted by the rendered <BreadcrumbTrail> - don't duplicate it here.
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/apple-repair-programs-dubai")?.src}
        imageAlt={topicForPath("/apple-repair-programs-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Independent eligibility guide"
        title="Apple Free Repair Programs - Are You Eligible?"
        subtitle="Apple sometimes fixes specific defects for free, even on out-of-warranty devices. Check eligibility before paying anywhere - including us."
        ctaLabel="Free eligibility check"
      />


      <QuickAnswer
        tone="dark"
        question="Are you eligible for a free Apple repair programme?"
        answer="Apple offers free repair programmes for specific defects on certain models. Programmes cover MacBook butterfly keyboards (2015-2019), iPhone 11 / iPhone X display modules, Apple Watch Ultra Action Button (active), and others. Check whether your device qualifies before paying for repair anywhere."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Apple Repair Programs", path: PATH }]} />
      </section>

      {/* 1. What */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">What are Apple Repair Programmes?</h2>
        <div className="max-w-[72ch] space-y-md text-[16px] text-text leading-relaxed">
          <p>
            An Apple Repair Programme (sometimes called a Service Programme, Quality Programme or Exchange Programme) is Apple's quiet acknowledgement that a known manufacturing defect affected a specific model and serial range. When a programme is open, Apple - or an Apple Authorised Service Provider - repairs the affected fault at no charge to the customer, usually for 4 to 5 years from the date the model first went on sale, regardless of the standard 1-year warranty or AppleCare+ coverage.
          </p>
          <p>
            Programmes do not cover unrelated faults, accidental damage, water damage, or work performed by third-party shops that left the device in a non-original state. They also do not extend the standard warranty - once the programme window closes, the same defect is back on you to pay for. That is precisely the gap we fill: we repair the same physical fault after Apple's coverage window expires, at independent prices, with our own 12-month written warranty.
          </p>
          <p>
            We are not Apple Authorised. We list Apple's programmes here as a public service so you don't pay us - or anyone - for a repair Apple should be doing for free. About 5 in every 100 devices we diagnose qualify for an active or recently extended programme; we send those customers straight to Apple Dubai or Apple Mall of the Emirates with a printed eligibility note.
          </p>
        </div>
      </section>

      {/* 2. Active */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm flex items-center gap-sm">
          <CheckCircle2 size={28} className="text-accent" aria-hidden /> Currently active programmes ({LAST_UPDATED})
        </h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-md">
          These programmes are accepting eligible devices at Apple service points worldwide as of {LAST_UPDATED}. Eligibility is decided by serial number, not model name alone - always verify on Apple's site before travelling.
        </p>
        <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
          <table className="w-full text-[14px] min-w-[620px]">
            <caption className="sr-only">Active Apple repair programmes as of {LAST_UPDATED}.</caption>
            <thead className="bg-bg-card">
              <tr className="text-left">
                <th className="px-md py-sm font-semibold">Programme</th>
                <th className="px-md py-sm font-semibold">Models</th>
                <th className="px-md py-sm font-semibold">Issue</th>
                <th className="px-md py-sm font-semibold">Free until</th>
              </tr>
            </thead>
            <tbody>
              {ACTIVE_PROGRAMS.map((p, i) => (
                <tr key={p.program} className={i % 2 ? "bg-bg-alt" : ""}>
                  <td className="px-md py-sm font-semibold">{p.program}</td>
                  <td className="px-md py-sm">{p.models}</td>
                  <td className="px-md py-sm text-text-muted">{p.issue}</td>
                  <td className="px-md py-sm mono text-accent">{p.until}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-text-muted mt-sm">
          Source: <a href="https://support.apple.com/repair" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">support.apple.com/repair</a>. Re-checked {LAST_UPDATED}.
        </p>
      </section>

      {/* 3. Ended */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm flex items-center gap-sm">
            <AlertCircle size={28} className="text-accent" aria-hidden /> Recently ended programmes (still useful to know)
          </h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-md">
            These programmes have closed but the underlying defects still affect thousands of devices in Dubai. Knowing the model + symptom helps us quote you accurately for an out-of-pocket repair.
          </p>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
            <table className="w-full text-[14px] min-w-[640px]">
              <caption className="sr-only">Recently closed Apple repair programmes - for reference.</caption>
              <thead className="bg-bg-card">
                <tr className="text-left">
                  <th className="px-md py-sm font-semibold">Programme</th>
                  <th className="px-md py-sm font-semibold">Models</th>
                  <th className="px-md py-sm font-semibold">Issue</th>
                  <th className="px-md py-sm font-semibold">Ended</th>
                </tr>
              </thead>
              <tbody>
                {ENDED_PROGRAMS.map((p, i) => (
                  <tr key={p.program} className={i % 2 ? "bg-bg-alt" : ""}>
                    <td className="px-md py-sm font-semibold">{p.program}</td>
                    <td className="px-md py-sm">{p.models}</td>
                    <td className="px-md py-sm text-text-muted">{p.issue}</td>
                    <td className="px-md py-sm mono text-text">{p.ended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. How to check */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">How to check if your device qualifies</h2>
        <ol className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "1. Apple's site", b: "Go to support.apple.com/repair and search your model name plus 'service programme'. Apple lists every active programme with serial-number eligibility checkers." },
            { t: "2. Search by model", b: 'Google "[your exact model] repair program apple". Apple\'s pages rank first; ignore third-party blogs that may list expired programmes as active.' },
            { t: "3. Apple Store visit", b: "Walk into Apple Mall of the Emirates or Apple Dubai Mall with the device and a Genius Bar booking. They run the diagnostic on Apple's bench tools." },
            { t: "4. Bring it to us", b: "WhatsApp 055 741 3706 or walk into Concord Tower Media City. We check eligibility free of charge - and tell you honestly if Apple should fix it free." },
          ].map((s) => (
            <li key={s.t} className="border border-border bg-bg-card rounded-md p-lg">
              <p className="font-bold text-[16px] mb-1">{s.t}</p>
              <p className="text-[14px] text-text-muted leading-relaxed">{s.b}</p>
            </li>
          ))}
        </ol>
        <p className="text-[14px] text-text-muted mt-md max-w-[72ch]">
          Useful Apple link: <a href="https://support.apple.com/repair" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center gap-1">support.apple.com/repair <ExternalLink size={12} aria-hidden /></a>
        </p>
      </section>

      {/* 5. Why Apple first */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6 max-w-[72ch]">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <ShieldCheck size={28} className="text-accent" aria-hidden /> Why we recommend Apple first (when applicable)
          </h2>
          <ul className="space-y-md text-[16px] text-text leading-relaxed list-disc pl-lg">
            <li><strong>We are independent, not Apple Authorised.</strong> If Apple covers your device under a programme, that route gives you a free repair plus Apple's own 12-month warranty on the work - better value than paying us.</li>
            <li><strong>Honest referral builds trust.</strong> The customers we send to Apple come back to us when their next device - or their child's, partner's, parent's - falls outside coverage. That is how we have stayed in business for 21 years.</li>
            <li><strong>We are here for the rest.</strong> Out-of-warranty repairs, post-programme defects, devices Apple declined for liquid damage or third-party history, board-level work Apple does not perform - that is our specialism.</li>
            <li><strong>No bait-and-switch.</strong> We will not pretend a programme has expired to win the job. The eligibility check we run is the same Apple uses: serial number against the published serial range, on Apple's own published page.</li>
          </ul>
        </div>
      </section>

      {/* 6. After programme */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl max-w-[72ch]">
        <h2 className="text-[28px] md:text-[32px] mb-md">What if the programme has ended?</h2>
        <p className="text-[16px] text-text leading-relaxed">
          The defect does not disappear when Apple's coverage window closes. We continue to repair every fault that was once covered by an Apple programme - typically AED 600 to AED 1,500 depending on the part, with a 12-month written warranty and same-day turnaround for most common jobs. In many cases our turnaround is faster than Apple's because we keep the affected parts in stock for the high-volume programmes (butterfly keyboards, iPhone 11 displays, MacBook Pro 2016 flex cables).
        </p>
        <div className="grid gap-md md:grid-cols-3 mt-lg">
          <Link to="/macbook-keyboard-repair-dubai" className="border border-border bg-bg-card rounded-md p-md hover:border-accent">
            <p className="font-bold text-[15px]">MacBook keyboard repair</p>
            <p className="text-[13px] text-text-muted mt-1">Butterfly era top-case replacement - from AED 700</p>
          </Link>
          <Link to="/iphone-screen-repair-dubai" className="border border-border bg-bg-card rounded-md p-md hover:border-accent">
            <p className="font-bold text-[15px]">iPhone display module</p>
            <p className="text-[13px] text-text-muted mt-1">iPhone X / 11 touch issues - from AED 500</p>
          </Link>
          <Link to="/macbook-screen-repair-dubai" className="border border-border bg-bg-card rounded-md p-md hover:border-accent">
            <p className="font-bold text-[15px]">MacBook display / Flexgate</p>
            <p className="text-[13px] text-text-muted mt-1">Flex cable AED 600 · Full display AED 800</p>
          </Link>
        </div>
        <p className="text-[14px] text-text-muted mt-md">
          Background reading: <Link to="/blog/macbook-flexgate-explained" className="text-accent hover:underline">Flexgate explained</Link> · <Link to="/blog/macbook-keyboard-repair-cost-by-model" className="text-accent hover:underline">MacBook keyboard repair cost guide</Link> · <Link to="/blog/macbook-repair-warranty-explained" className="text-accent hover:underline">How our 12-month warranty works</Link>.
        </p>
      </section>

      {/* 7. Scenarios */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Common scenarios</h2>
        <div className="grid gap-md md:grid-cols-2">
          {SCENARIOS.map((s) => (
            <article key={s.q} className="border border-border bg-bg-card rounded-md p-lg">
              <p className="font-bold text-[16px] mb-1">{s.q}</p>
              <p className="text-[14px] text-text-muted leading-relaxed">{s.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 8. CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="relative flex flex-col items-start gap-md">
          <h2 className="text-text text-[28px] md:text-[32px] max-w-[32ch]">Don't pay for repairs without checking first</h2>
          <p className="text-text-muted text-[16px] max-w-[64ch]">
            Bring or send your device first. Free 30-minute diagnostic. We'll tell you honestly if Apple should fix it for free - even if that means we don't get the job.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Send a serial number
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

      {/* 9. FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Frequently asked questions</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* 10. Last updated */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="bg-bg-card border-l-4 border-accent rounded-md p-lg max-w-[72ch] flex items-start gap-sm">
          <Clock size={20} className="text-accent mt-1 shrink-0" aria-hidden />
          <div>
            <p className="font-bold text-[15px] mb-1">Last updated: {LAST_UPDATED}</p>
            <p className="text-[14px] text-text-muted leading-relaxed">
              We update this page quarterly as Apple announces new programmes and old ones expire. Spotted an inaccuracy or a programme we've missed? <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Tell us on WhatsApp</a> and we'll correct it within 24 hours.
            </p>
          </div>
        </div>
      </section>
      </div>
    </PageShell>
  );
}
