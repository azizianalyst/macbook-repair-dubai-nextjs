"use client";
// /ipad-screen-repair-dubai/ - rebuilt 2026-09-26 (SEO master plan, Phase 3 build 5).
// Targets: ipad screen repair, ipad screen repair dubai, ipad screen replacement dubai,
// ipad screen repair near me, ipad screen repair dubai cost, ipad pro lcd repair,
// ipad air screen replacement, broken ipad screen, ipad screen not working.
// Facts: src/content/ipad-cluster.ts (Apple spec wording + Apple UAE fees, attributed).
// No prices of ours anywhere - quotes go through WhatsApp.
import type { ReactNode } from "react";
import { MessageCircle, Search, ShieldCheck, Truck, Wallet } from "lucide-react";
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
import GlassWarrantyNotice from "@/components/blocks/GlassWarrantyNotice";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT, TEAM } from "@/content/site";
import { CURRENT_IPADS, OLDER_IPAD_PAGES, APPLE_IPAD_FEES, APPLE_FEES_SOURCE, ipadWa } from "@/content/ipad-cluster";

const PATH = "/ipad-screen-repair-dubai";
const H1 = "iPad Screen Repair Dubai";
const PREFILL = "Hi, my iPad screen is damaged. Model:";
const TECH = TEAM.find((t) => t.name === "Shafeeq")!;

const inlineLink = "text-accent underline underline-offset-2";

const SYMPTOMS: { title: string; body: ReactNode }[] = [
  {
    title: "Cracked glass, picture and touch still fine",
    body: "The panel under the glass works. On a standard iPad that is a glass-and-digitiser job; on a laminated iPad it is still a full assembly.",
  },
  {
    title: "Touch not working, dead zones or ghost touches",
    body: "Part of the screen ignores your finger, or the iPad taps on its own: the digitiser. With no drop or damage, we check software first.",
  },
  {
    title: "Lines, dark spots or flicker",
    body: (
      <>
        These come from the display panel or its cable, not the glass. Our guide to{" "}
        <Link to="/blog/ipad-screen-lines-dark-spots/" className={inlineLink}>lines and dark spots on an iPad screen</Link>{" "}
        explains which ones a new screen fixes.
      </>
    ),
  },
  {
    title: "Black screen, but the iPad is still on",
    body: "Sounds but no picture: the panel or backlight, the display cable, or the board. We confirm which before quoting a screen.",
  },
  {
    title: "Apple Pencil skips or stops in one area",
    body: "Pencil sensing sits in the digitiser, so drop damage leaves dead strips. A new screen fixes it; we test Pencil tracking before return.",
  },
  {
    title: "Screen lifting after a repair elsewhere",
    body: "Usually missing adhesive or a bent bracket. We strip, clean and re-seal it, quoting once we see inside.",
  },
];

const STEPS = [
  { title: "Send the model and a photo", body: "WhatsApp a photo and the model from Settings → General → About. We reply with the likely repair and a quote." },
  { title: "Free diagnosis", body: "Walk in to Concord Tower or book a free Dubai pickup. We confirm the faulty part and put the quote in writing." },
  { title: "Replacement and testing", body: "The screen is heated and lifted with plastic tools, the new part fitted on fresh adhesive, then touch, Pencil, True Tone, cameras and Face ID or Touch ID are tested." },
  { title: "Return with warranty", body: "Collect it or we deliver free in Dubai, with a written screen warranty of 90 days." },
];

const FAQS = [
  {
    q: "Can you replace just the glass on my iPad?",
    a: "On non-laminated models, yes: every standard iPad up to the current iPad (A16), the first iPad Air and iPad mini 1 to 3, provided the LCD works. On iPad Air 2 and later, iPad mini 4 and later and every iPad Pro, we replace the full display assembly.",
  },
  {
    q: "Will my data be erased during a screen replacement?",
    a: "No. The screen stores no data and we do not reset the iPad to replace it. If the iPad still works, a backup before any repair is still sensible.",
  },
  {
    q: "Will Apple Pencil, Touch ID, Face ID and True Tone still work?",
    a: "Pencil tracking comes with the new digitiser and is tested. Face ID and top-button Touch ID are separate from the screen; on home-button iPads the original button moves to the new glass, so Touch ID keeps working. If your part affects True Tone, the quote says so first.",
  },
  {
    q: "How long does an iPad screen replacement take?",
    a: "Screens for common older models are often in stock and fitted within a day. Panels for the newest iPad Pro and iPad Air are usually ordered for your model and take a few working days. We confirm the date on WhatsApp first.",
  },
  {
    q: "Is it worth repairing an iPad screen, or should I buy a new iPad?",
    a: "For a current or recent iPad, a new screen usually costs far less than a new iPad, and your data stays put. For an older model near the end of iPadOS support, we say so plainly. The diagnosis is free either way.",
  },
  {
    q: "Do you repair iPad screens for customers outside Dubai?",
    a: "Yes. Pickup and delivery are free anywhere in Dubai. From Sharjah or Abu Dhabi we arrange courier collection, usually 1 to 2 days door to door. Message your location on WhatsApp.",
  },
];

export default function IPadScreenRepair() {
  const reviews = pickReviews(
    ["Anatoliy Tarasenko", "Shah nawaz", "David Boulos", "vinay menon", "Ahsan Shahbaz"],
    { devices: reviewDevicesForPath(PATH), min: 2, seed: PATH },
  );
  useSeo({ title: H1, description: "", path: PATH }, [pageWithSpeakable({ url: SITE.url + PATH, name: H1 })]);

  return (
    <PageShell hideContactCta>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          variant="service"
          tone="dark"
          eyebrow="iPad screen repair · Dubai Media City"
          title={H1}
          subtitle="Cracked glass, dead touch, lines or dark spots. We replace the part your iPad needs: glass and digitiser on a standard iPad, the laminated display on Air, mini and Pro."
          timeline="1-5 working days, by model"
          ctaLabel="WhatsApp your iPad model"
          sidecar={
            <FloatingBookingCard
              sticky={false}
              tone="dark"
              service="iPad Screen Repair"
              startingPrice={0}
              timeline="1-5 working days, by model"
              whatsappMessage={PREFILL}
            />
          }
        >
          <PageMeta author={`${TECH.name}, ${TECH.specialisation}`} />
        </Hero>

        <QuickAnswer
          tone="dark"
          question="Can a cracked iPad screen be repaired in Dubai?"
          answer="Yes. On a standard iPad, including the current A16, cracked touch glass can usually be replaced on its own if the display works. On iPad Air 2 or later, iPad mini 4 or later and every iPad Pro, glass and display are laminated, so the whole assembly is replaced. Diagnosis is free and screens carry a warranty of 90 days."
        />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <ul className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md py-md px-lg flex flex-wrap items-center justify-center gap-x-xl gap-y-sm text-[14px] font-medium">
            <li className="flex items-center gap-sm"><Search size={16} className="text-accent" aria-hidden /> Free diagnosis</li>
            <li className="flex items-center gap-sm"><Wallet size={16} className="text-accent" aria-hidden /> Written quote before any work</li>
            <li className="flex items-center gap-sm"><ShieldCheck size={16} className="text-accent" aria-hidden /> Screen warranty: 90 days</li>
            <li className="flex items-center gap-sm"><Truck size={16} className="text-accent" aria-hidden /> Free pickup across Dubai</li>
          </ul>
        </section>

        <StatBand
          stats={[
            { stat: `${NAP.yearsInBusiness}+`, label: "Years in Dubai" },
            { stat: `${REVIEW_COUNT}+`, label: "Google reviews" },
            { stat: "Free", label: "Diagnosis" },
            { stat: "90 days", label: "Screen warranty" },
          ]}
        />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[
            { name: "Home", path: "/" },
            { name: "iPad Repair", path: "/ipad-repair-dubai" },
            { name: "iPad Screen Repair", path: PATH },
          ]} />
        </section>

        <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <div className="flex flex-col gap-3xl">

            {/* Current models first */}
            <section>
              <SectionHeading
                eyebrow="Current models first"
                title="Which iPad do you have?"
                sub={<>Settings → General → About → Model Name. Tap Model Number for the A-number (for example A1822), also printed on the case.</>}
              />
              <ScrollHintTable className="border border-border rounded-md bg-bg-alt" fadeClass="from-bg-alt">
                <table className="w-full text-[14px] min-w-[720px]">
                  <caption className="sr-only">Current iPad models and what a cracked screen means for each</caption>
                  <thead className="bg-bg-card">
                    <tr className="text-left">
                      <th className="px-md py-sm font-semibold">Model (Apple line-up, Sep 2026)</th>
                      <th className="px-md py-sm font-semibold">Display</th>
                      <th className="px-md py-sm font-semibold">Laminated?</th>
                      <th className="px-md py-sm font-semibold">What a crack usually means</th>
                      <th className="px-md py-sm font-semibold">Quote</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CURRENT_IPADS.map((m, i) => (
                      <tr key={m.name} className={i % 2 ? "bg-bg-alt" : ""}>
                        <td className="px-md py-sm font-semibold align-top">
                          {m.name}
                          <span className="block font-normal text-[13px]">
                            {m.pages.map((p, j) => (
                              <span key={p.href}>{j > 0 && " · "}<Link to={p.href} className="text-accent underline underline-offset-2 hover:no-underline">{p.label}</Link></span>
                            ))}
                          </span>
                        </td>
                        <td className="px-md py-sm align-top">{m.display}</td>
                        <td className="px-md py-sm align-top">{m.laminated ? "Yes" : "No"}</td>
                        <td className="px-md py-sm align-top text-text-muted">
                          {m.laminated
                            ? m.panel === "Tandem OLED"
                              ? "Full OLED display assembly. Nano-texture glass (a 1TB and 2TB option) must be matched."
                              : "Full display assembly: glass, digitiser and LCD are one part."
                            : "Glass and digitiser only if the LCD works; LCD as well if it shows lines or black patches."}
                        </td>
                        <td className="px-md py-sm align-top">
                          <a href={ipadWa(`Hi, my ${m.name} screen is damaged.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent font-semibold hover:underline whitespace-nowrap">
                            <MessageCircle size={14} aria-hidden /> WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollHintTable>
            </section>

            {/* Laminated vs non-laminated */}
            <section className="max-w-[72ch]">
              <h2 className="text-[28px] md:text-[32px] mb-md">Laminated vs non-laminated iPad screens: why it changes the repair</h2>
              <p className="text-[16px] leading-relaxed mb-md">
                An iPad screen has three layers: cover glass, touch digitiser, and the panel that makes the picture (LCD, or tandem OLED on the M4 and M5 iPad Pro). A <strong>laminated</strong> screen bonds them into one part; a <strong>non-laminated</strong> one has the glass and digitiser above a separate LCD.
              </p>
              <p className="text-[16px] leading-relaxed mb-md text-text-muted">
                That decides what you pay for. Cracked glass over a healthy LCD on a non-laminated iPad needs only glass and digitiser. On a laminated iPad we replace the whole assembly: glass-only refurbishing exists, but we don't offer it, because a failed separation destroys the panel.
              </p>
              <ul className="text-[15px] leading-relaxed list-disc pl-5 space-y-1">
                <li><strong>Non-laminated:</strong> every standard iPad, from the original to the current iPad (A16), plus the first iPad Air and iPad mini 1 to 3.</li>
                <li><strong>Laminated:</strong> iPad Air 2 and later, iPad mini 4 and later, and every iPad Pro.</li>
              </ul>
            </section>

            {/* Symptoms */}
            <section>
              <SectionHeading
                eyebrow="Diagnosis"
                title="Digitiser, LCD or OLED: which part is broken?"
                sub="Match the symptom to the part. We confirm it on the bench first."
              />
              <div className="grid gap-md md:grid-cols-2">
                {SYMPTOMS.map((s) => (
                  <article key={s.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                    <h3 className="text-[16px] font-bold mb-sm">{s.title}</h3>
                    <p className="text-[14px] text-text-muted leading-relaxed">{s.body}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Pro, Air, mini */}
            <section className="max-w-[72ch]">
              <h2 className="text-[28px] md:text-[32px] mb-md">iPad Pro, iPad Air and iPad mini screen replacement</h2>
              <h3 className="text-[18px] font-bold mb-sm">iPad Pro: tandem OLED, mini-LED or LCD</h3>
              <p className="text-[16px] leading-relaxed mb-md">
                M4 and M5 models use Apple's Ultra Retina XDR tandem OLED, with nano-texture glass as a 1TB and 2TB option that the replacement must match. The 12.9-inch M1 and M2 use mini-LED Liquid Retina XDR; the 11-inch M1 and M2 and earlier Pros a standard LCD. None is a glass-only repair. See{" "}
                <Link to="/ipad-pro-11-m5-repair-dubai/" className={inlineLink}>iPad Pro 11" M5</Link>,{" "}
                <Link to="/ipad-pro-13-m5-repair-dubai/" className={inlineLink}>iPad Pro 13" M5</Link> and{" "}
                <Link to="/ipad-pro-12.9-m2-repair-dubai/" className={inlineLink}>iPad Pro 12.9" M2</Link>.
              </p>
              <h3 className="text-[18px] font-bold mb-sm">iPad Air and iPad mini</h3>
              <p className="text-[16px] leading-relaxed text-text-muted">
                Every Air from the Air 2 and every mini from the mini 4 uses a fully laminated LCD, so a crack means a full assembly. The iPad Air (M4) went on sale in March 2026, so we confirm we can get its panel before you book; newest iPad Pro panels are ordered for your model too.
              </p>
            </section>

            {/* Older generations */}
            <section>
              <SectionHeading
                eyebrow="By generation"
                title="Screen replacement for older iPads"
                sub="Parts for the oldest models are sourced per job, so we confirm availability on WhatsApp first."
              />
              <ul className="grid gap-sm md:grid-cols-2 text-[15px] leading-relaxed mb-lg">
                <li className="border border-border/70 bg-bg-card rounded-md p-md"><strong>iPad 5th to 10th gen</strong> (A1822 and later): non-laminated; glass and LCD replaced separately.</li>
                <li className="border border-border/70 bg-bg-card rounded-md p-md"><strong>iPad 2, 3 and 4:</strong> non-laminated, separate glass and LCD.</li>
                <li className="border border-border/70 bg-bg-card rounded-md p-md"><strong>iPad Air (A1474) and Air 2 (A1566):</strong> the first Air is non-laminated; the Air 2 needs a full assembly.</li>
                <li className="border border-border/70 bg-bg-card rounded-md p-md"><strong>iPad mini and early iPad Pro</strong> (9.7", 10.5", 12.9" A1584): mini 1 to 3 are non-laminated; mini 4, 5 and the Pros are laminated.</li>
              </ul>
              <ul className="flex flex-wrap gap-2">
                {OLDER_IPAD_PAGES.map((p) => (
                  <li key={p.href}>
                    <Link to={p.href} className="inline-flex items-center px-3 py-2 border border-border/70 bg-bg-card rounded-md text-[13px] text-accent hover:border-accent/40">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Cost */}
            <section className="max-w-[72ch]">
              <h2 className="text-[28px] md:text-[32px] mb-md">How much does iPad screen repair cost in Dubai?</h2>
              <p className="text-[16px] leading-relaxed mb-md">
                We don't publish a price list: "iPad screen repair" can mean glass on an iPad 9 or a tandem OLED panel on an iPad Pro (M5). Price depends on lamination, LCD or OLED, screen size, and a genuine or quality-tested part. Send the model and a photo on WhatsApp; the quote comes back in writing before anything is opened.
              </p>
              <p className="text-[16px] leading-relaxed mb-sm text-text-muted">
                For reference, Apple's UAE out-of-warranty list for iPad has no separate screen fee, only battery service and "other damage":
              </p>
              <ul className="text-[15px] leading-relaxed list-disc pl-5 space-y-1 mb-sm">
                {APPLE_IPAD_FEES.map((f) => (
                  <li key={f.model}>{f.model}: other damage {f.otherDamage}</li>
                ))}
              </ul>
              <p className="text-[13px] text-text-muted mono mb-md">{APPLE_FEES_SOURCE}</p>
              <p className="text-[16px] leading-relaxed">
                Our <Link to="/blog/ipad-screen-repair-cost-dubai/" className={inlineLink}>iPad screen repair cost guide</Link> explains the price drivers in more depth.
              </p>
            </section>

            {/* Process */}
            <section>
              <SectionHeading eyebrow="Our process" title="How the screen repair works" />
              <StepList steps={STEPS} tone="dark" />
            </section>

            {/* Warranty */}
            <section>
              <SectionHeading eyebrow="Guarantee" title="What warranty comes with a new iPad screen?" />
              <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg text-[15px] leading-relaxed">
                <p className="mb-sm">
                  Screen replacements carry a written warranty of <strong>90 days</strong>. It covers the part and our work: dead pixels, touch or Pencil faults, lifting edges.
                </p>
                <p>
                  To claim, WhatsApp the warranty card to {NAP.phoneDisplay}. Full terms are on the <Link to="/warranty/" className={inlineLink}>warranty page</Link>.
                </p>
              </div>
              <div className="mt-md"><GlassWarrantyNotice device="screen" /></div>
            </section>

            <section className="bg-bg-alt border-y border-border rounded-md p-lg">
              <h2 className="text-[22px] mb-md">Who works on your iPad screen?</h2>
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
              <h2 className="text-[28px] md:text-[32px] mb-md">iPad screen repair FAQ</h2>
              <FAQAccordion items={FAQS} injectSchema />
            </section>

            <section>
              <h2 className="text-[28px] md:text-[32px] mb-md">iPad screen repair near me</h2>
              <p className="text-[16px] leading-relaxed mb-lg max-w-[72ch] text-text-muted">
                One workshop, not a chain: {NAP.street}, {NAP.area}. From Media City, JLT, Marina or Al Barsha, walk in (message first so we can check the part); anywhere else in Dubai we collect free. See also{" "}
                <Link to="/apple-repair-near-me-dubai/" className={inlineLink}>Apple repair near me</Link>.
              </p>
              <LocationBlock tone="dark" />
            </section>

            <section>
              <RelatedServices
                tone="dark"
                items={[
                  { label: "iPad Repair Dubai", href: "/ipad-repair-dubai/", description: "Every iPad repair we do, current models first." },
                  { label: "iPad Battery Replacement", href: "/ipad-battery-replacement-dubai/", description: "Glued cells removed safely, display re-sealed." },
                  { label: "iPad Water Damage Repair", href: "/ipad-water-damage-repair-dubai/", description: "Liquid under the screen: clean, inspect, then quote." },
                ]}
              />
              <p className="mt-md text-[14px] text-text-muted">
                Also: <Link to="/ipad-charging-port-repair-dubai/" className={inlineLink}>iPad charging port repair</Link> ·{" "}
                <Link to="/ipad-data-recovery-dubai/" className={inlineLink}>iPad data recovery</Link> ·{" "}
                <Link to="/blog/ipad-screen-lines-dark-spots/" className={inlineLink}>lines and dark spots guide</Link>
              </p>
              <div className="mt-lg">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={ipadWa(PREFILL)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp a photo of the screen</a>
                </Button>
              </div>
            </section>
          </div>
        </div>

        <CtaBand
          className="mt-3xl"
          eyebrow="Cracked iPad screen?"
          headline="Send the model and a photo on WhatsApp"
          description="Free diagnosis, a written quote first, free pickup across Dubai, screen warranty of 90 days."
          whatsappHref={ipadWa(PREFILL)}
        />
      </div>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free iPad screen quote</h2>
        <LeadForm preset={PRESETS.repair} sourcePath={PATH} defaultDeviceType="iPad" />
      </section>

      <RelatedArticles path={PATH} />
    </PageShell>
  );
}
