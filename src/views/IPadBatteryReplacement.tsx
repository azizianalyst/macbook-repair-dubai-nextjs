"use client";
// /ipad-battery-replacement-dubai/ - rebuilt 2026-09-26 (SEO master plan, Phase 3 build 5).
// Targets: ipad battery replacement dubai, ipad battery replacement, ipad battery replacement
// cost, apple ipad battery price in uae, ipad air battery replacement, can ipad batteries be
// replaced. Apple's UAE battery fees are quoted from src/content/ipad-cluster.ts with
// "(Apple list)" attribution; our own price is never shown - quotes go through WhatsApp.
// Warranty wording from src/content/site.ts: battery = 3 months (the 80% capacity guarantee is MacBook & iPhone only).
import { MessageCircle, Search, ShieldCheck, MapPin, Wallet, AlertTriangle } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { PageMeta } from "@/components/blocks/PageMeta";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { StatBand } from "@/components/blocks/StatBand";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
import { StepList } from "@/components/blocks/StepList";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { TechnicianBadge } from "@/components/blocks/TechnicianBadge";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { FloatingBookingCard } from "@/components/blocks/FloatingBookingCard";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT, TEAM } from "@/content/site";
import { CURRENT_IPADS, OLDER_IPAD_PAGES, APPLE_IPAD_FEES, APPLE_FEES_SOURCE, ipadWa } from "@/content/ipad-cluster";

const PATH = "/ipad-battery-replacement-dubai";
const H1 = "iPad Battery Replacement Dubai";
const PREFILL = "Hi, my iPad battery needs replacing. Model:";
// Roster title: "Lead technician · screens, batteries, water damage".
const TECH = TEAM.find((t) => t.name === "Shafiq")!;

const inlineLink = "text-accent underline underline-offset-2";

const SIGNS = [
  "It no longer lasts the day it used to, on the same apps and brightness.",
  "It shuts down at 20-30%, or the percentage jumps from 40% to single figures.",
  "It only stays on while plugged in, or runs warm and slow while charging.",
  "It stays on the red battery icon after an hour on a known-good cable and adapter.",
];

const STEPS = [
  { title: "Tell us the model and symptoms", body: "WhatsApp the model and what the battery does. We reply with a quote and you walk in to our Media City workshop." },
  { title: "Bench test", body: "Capacity, cycle count, the charging port and the charging circuit are checked, so we know the battery is the cause before replacing it." },
  { title: "Display off, cell out", body: "Controlled heat softens the display adhesive, the screen is lifted, and the glued cell is released with isopropyl and plastic tools." },
  { title: "New cell, new adhesive", body: "The replacement cell goes in, the display is re-seated on a fresh adhesive frame and pressed so it sits flush." },
  { title: "Charge test and return", body: "We charge it, check the new reading and run the iPad through its functions, then return it with the written warranty." },
];

const FAQS = [
  {
    q: "How much does iPad battery replacement cost in Dubai?",
    a: "It depends on the model: an iPad (A16) cell and an iPad Pro 13-inch (M5) cell are different parts with different labour. Send your model on WhatsApp for a written quote. For comparison, Apple's own UAE battery fees for current models are listed on this page, excluding VAT.",
  },
  {
    q: "Can every iPad battery be replaced?",
    a: "Yes, on every model we work on, from older iPads back to the iPad 2 through to the iPad Pro (M5). What changes is the effort: laminated and OLED displays need more care to remove, and cells for the oldest and newest models may need ordering first.",
  },
  {
    q: "Will I lose my data?",
    a: "No. Replacing the battery does not touch storage and we do not reset the iPad. If it still turns on, back it up to iCloud or a computer first anyway; that is good practice before any repair.",
  },
  {
    q: "Is a swollen iPad battery dangerous?",
    a: "Yes. A swollen lithium cell is pushing the display or case apart and can fail. Stop using and charging the iPad, keep it out of a hot car and direct sun, and bring it in to the workshop. Do not press the screen back down.",
  },
  {
    q: "My iPad won't turn on. Is it the battery?",
    a: "Possibly, but a worn charging port, a charging-circuit fault or a dead display can look identical. Leave it on a known-good charger for an hour; if nothing changes, bring it in. Diagnosis is free, and we don't quote a battery until we have confirmed it is the cause.",
  },
  {
    q: "How long does iPad battery replacement take?",
    a: "For most models, when the cell is in stock, the same day or the next day. For the newest iPad Pro and iPad Air, and for very old models, we check stock first and confirm the timing on WhatsApp before you drop off.",
  },
];

export default function IPadBatteryReplacement() {
  const reviews = pickReviews(
    ["Anatoliy Tarasenko", "Henry Choong", "Seyed Moulana", "marouane Ayadi", "Ana Undricova"],
    { devices: reviewDevicesForPath(PATH), min: 2, seed: PATH },
  );
  useSeo({ title: H1, description: "", path: PATH }, [pageWithSpeakable({ url: SITE.url + PATH, name: H1 })]);

  return (
    <PageShell hideContactCta>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          variant="service"
          tone="dark"
          eyebrow="iPad battery replacement · Dubai Media City"
          title={H1}
          subtitle="Short battery life, shutdowns at 20-30%, a case that has started to bulge. We test the battery first, then replace the glued cell and re-seal the display with fresh adhesive."
          timeline="Usually same or next day"
          ctaLabel="WhatsApp your iPad model"
          sidecar={
            <FloatingBookingCard
              sticky={false}
              tone="dark"
              service="iPad Battery Replacement"
              startingPrice={0}
              timeline="Usually same or next day"
              whatsappMessage={PREFILL}
            />
          }
        >
          <PageMeta author={`${TECH.name}, ${TECH.specialisation}`} />
        </Hero>

        <QuickAnswer
          tone="dark"
          question="Can an iPad battery be replaced in Dubai?"
          answer="Yes. Every iPad battery is glued inside the case under the display, so the screen is lifted, the cell released and the display re-sealed with fresh adhesive. We test capacity and charging first, quote in writing on WhatsApp, and fit the new cell with a 3-month written warranty."
        />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <ul className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md py-md px-lg flex flex-wrap items-center justify-center gap-x-xl gap-y-sm text-[14px] font-medium">
            <li className="flex items-center gap-sm"><Search size={16} className="text-accent" aria-hidden /> Free battery test</li>
            <li className="flex items-center gap-sm"><Wallet size={16} className="text-accent" aria-hidden /> Written quote before any work</li>
            <li className="flex items-center gap-sm"><ShieldCheck size={16} className="text-accent" aria-hidden /> 3-month written warranty</li>
            <li className="flex items-center gap-sm"><MapPin size={16} className="text-accent" aria-hidden /> Walk-in workshop, Media City</li>
          </ul>
        </section>

        <StatBand
          stats={[
            { stat: `${NAP.yearsInBusiness}+`, label: "Years in Dubai" },
            { stat: `${REVIEW_COUNT}+`, label: "Google reviews" },
            { stat: "Free", label: "Battery test" },
            { stat: "3 months", label: "Battery warranty" },
          ]}
        />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[
            { name: "Home", path: "/" },
            { name: "iPad Repair", path: "/ipad-repair-dubai" },
            { name: "iPad Battery Replacement", path: PATH },
          ]} />
        </section>

        <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <div className="flex flex-col gap-3xl">

            {/* Signs */}
            <section className="max-w-[72ch]">
              <h2 className="text-[28px] md:text-[32px] mb-md">Signs your iPad battery needs replacing</h2>
              <ul className="text-[16px] leading-relaxed list-disc pl-5 space-y-1 mb-md">
                {SIGNS.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <div role="note" className="flex gap-3 rounded-md border border-warning/40 bg-warning/10 p-4 mb-md">
                <AlertTriangle size={20} className="text-warning shrink-0 mt-0.5" aria-hidden />
                <p className="text-[15px] leading-relaxed">
                  <strong>Screen lifting or case bulging?</strong> That is a swollen battery. Stop using and charging the iPad and message us; do not press the screen back down.
                </p>
              </div>
              <p className="text-[16px] leading-relaxed text-text-muted">
                Fast drain is not always the battery: a stuck app, heavy background sync or a failing port can look the same. Our{" "}
                <Link to="/blog/ipad-battery-drain-dubai/" className={inlineLink}>iPad battery drain guide</Link> covers the software checks, and if the iPad won't charge at all, start with{" "}
                <Link to="/blog/why-is-my-ipad-not-charging/" className={inlineLink}>why an iPad stops charging</Link>.
              </p>
            </section>

            {/* Test first */}
            <section className="max-w-[72ch]">
              <h2 className="text-[28px] md:text-[32px] mb-md">How we check the battery before replacing it</h2>
              <p className="text-[16px] leading-relaxed mb-md">
                Apple says an iPad battery is designed to retain up to 80% of its original capacity at 1,000 complete charge cycles. An iPad run down and recharged every day reaches that count in under three years, and it shows as the symptoms above.
              </p>
              <p className="text-[16px] leading-relaxed text-text-muted">
                Depending on the model and iPadOS version, Settings may not show a battery-health figure the way an iPhone does, so we measure on the bench: capacity against design, cycle count, and whether the charging port and charging circuit deliver what they should. If the battery is healthy, we tell you and look for the real cause. You don't pay for a cell you don't need.
              </p>
            </section>

            {/* Apple's UAE fees */}
            <section>
              <SectionHeading
                eyebrow="Reference prices"
                title="What Apple charges for an iPad battery in the UAE"
                sub="Apple publishes out-of-warranty battery fees for current iPads on its UAE support site. These are Apple's figures, not ours; our quote comes per model on WhatsApp."
              />
              <ScrollHintTable className="border border-border rounded-md bg-bg-alt max-w-[720px] mx-auto" fadeClass="from-bg-alt">
                <table className="w-full text-[14px] min-w-[420px]">
                  <caption className="sr-only">Apple UAE out-of-warranty iPad battery service fees, excluding VAT</caption>
                  <thead className="bg-bg-card">
                    <tr className="text-left">
                      <th className="px-md py-sm font-semibold">Model</th>
                      <th className="px-md py-sm font-semibold">Apple battery service, UAE (excl. VAT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {APPLE_IPAD_FEES.map((f, i) => (
                      <tr key={f.model} className={i % 2 ? "bg-bg-alt" : ""}>
                        <td className="px-md py-sm font-semibold">{f.model}</td>
                        <td className="px-md py-sm">{f.battery}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollHintTable>
              <p className="text-[13px] text-text-muted mt-sm mono text-center max-w-[720px] mx-auto">
                {APPLE_FEES_SOURCE} Check Apple's page for other models.
              </p>
              <p className="text-[15px] text-text-muted mt-md text-center">
                More on what drives the price in our{" "}
                <Link to="/blog/ipad-battery-replacement-cost-dubai/" className={inlineLink}>iPad battery replacement cost guide</Link>.
              </p>
            </section>

            {/* Why it takes care */}
            <section className="max-w-[72ch]">
              <h2 className="text-[28px] md:text-[32px] mb-md">Why iPad battery replacement takes more care than a phone</h2>
              <p className="text-[16px] leading-relaxed mb-md">
                An iPad has no back door. The battery is glued to the case under the display, so the screen comes off first, and that is the most delicate step of the job, especially on laminated and tandem OLED displays. The adhesive under the cell is softened with controlled heat and isopropyl, the cell is lifted with plastic tools (never metal near a lithium cell), and the display goes back on a new adhesive frame.
              </p>
              <p className="text-[16px] leading-relaxed text-text-muted">
                Rushing any of that is how screens crack and cells get punctured. If your screen is already cracked, it may not survive being lifted; we tell you that before we start, and{" "}
                <Link to="/ipad-screen-repair-dubai/" className={inlineLink}>iPad screen repair</Link> covers the options.
              </p>
            </section>

            {/* By generation */}
            <section>
              <SectionHeading
                eyebrow="Current and older models"
                title="Battery replacement for every iPad generation"
                sub="Cells for the newest and the oldest models are checked against your model before booking, and we confirm stock on WhatsApp."
              />
              <div className="grid gap-md md:grid-cols-2 mb-lg">
                <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm">Current line-up</h3>
                  <ul className="text-[14px] text-text-muted leading-relaxed space-y-1">
                    {CURRENT_IPADS.map((m) => (
                      <li key={m.name}>
                        {m.name}:{" "}
                        {m.pages.map((p, j) => (
                          <span key={p.href}>{j > 0 && " · "}<Link to={p.href} className="text-accent underline underline-offset-2">{p.label}</Link></span>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm">Older iPads</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">
                    iPad 5 to 10 (A1822 and later), iPad Air and Air 2 (A1474, A1566), iPad mini 4 and 5, earlier iPad Pro models, and older iPads back to the iPad 2. Cells for the oldest models are sourced per job, which can add a few days.
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {OLDER_IPAD_PAGES.map((p) => (
                  <li key={p.href}>
                    <Link to={p.href} className="inline-flex items-center px-3 py-2 border border-border/70 bg-bg-card rounded-md text-[13px] text-accent hover:border-accent/40">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section>
              <SectionHeading eyebrow="Our process" title="How the battery replacement works" />
              <StepList steps={STEPS} tone="dark" />
            </section>

            {/* Warranty */}
            <section>
              <SectionHeading eyebrow="Guarantee" title="What warranty comes with a new iPad battery?" />
              <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg text-[15px] leading-relaxed">
                <p className="mb-sm">
                  Battery replacements carry a <strong>3-month written warranty</strong>. It covers the cell and our work, including the display seal; it does not cover new liquid or impact damage.
                </p>
                <p>
                  To claim, WhatsApp the warranty card to {NAP.phoneDisplay}. Full terms are on the <Link to="/warranty/" className={inlineLink}>warranty page</Link>.
                </p>
              </div>
            </section>

            <section className="bg-bg-alt border-y border-border rounded-md p-lg">
              <h2 className="text-[22px] mb-md">Who replaces your iPad battery?</h2>
              <TechnicianBadge tone="dark" name={TECH.name} years={TECH.years} specialisation={TECH.specialisation} />
            </section>

            {reviews.length > 0 && (
              <section>
                <SectionHeading
                  eyebrow="What customers say"
                  title="Real iPad-repair reviews"
                  sub={<>Verbatim from Google. <Link to="/reviews/" className="text-accent font-semibold hover:underline">Read all {REVIEW_COUNT}+ →</Link></>}
                />
                <ReviewGrid reviews={reviews} tone="dark" />
              </section>
            )}

            <section>
              <h2 className="text-[28px] md:text-[32px] mb-md">iPad battery replacement FAQ</h2>
              <FAQAccordion items={FAQS} injectSchema />
            </section>

            <section>
              <h2 className="text-[28px] md:text-[32px] mb-md">Where to bring your iPad</h2>
              <p className="text-[16px] leading-relaxed mb-lg max-w-[72ch] text-text-muted">
                One workshop: {NAP.street}, {NAP.area}. Walk in with the iPad, no appointment needed; it is across from Media City Metro, with parking on site. Can't come in? Book any same-day courier app, hand the iPad to the driver, and WhatsApp us the tracking link.
              </p>
              <LocationBlock tone="dark" />
            </section>

            <section>
              <RelatedServices
                tone="dark"
                items={[
                  { label: "iPad Repair Dubai", href: "/ipad-repair-dubai/", description: "Every iPad repair we do, current models first." },
                  { label: "iPad Charging Port Repair", href: "/ipad-charging-port-repair-dubai/", description: "Loose or dead USB-C and Lightning ports." },
                  { label: "iPad Screen Repair", href: "/ipad-screen-repair-dubai/", description: "Glass, digitiser or full laminated display." },
                ]}
              />
              <div className="mt-lg">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={ipadWa(PREFILL)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp your iPad model</a>
                </Button>
              </div>
            </section>
          </div>
        </div>

        <CtaBand
          className="mt-3xl"
          eyebrow="Battery not lasting?"
          headline="Send your iPad model on WhatsApp"
          description="Free battery test, a written quote before any work, walk-in at Media City, and a 3-month written warranty."
          whatsappHref={ipadWa(PREFILL)}
        />
      </div>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free iPad battery quote</h2>
        <LeadForm preset={PRESETS.repair} sourcePath={PATH} defaultDeviceType="iPad" />
      </section>

      <RelatedArticles path={PATH} />
    </PageShell>
  );
}
