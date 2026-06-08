"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadHomeButtonRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Home Button Repair Dubai - AED 250 | iPad 9th Gen and Earlier"
      seoDescription="iPad home button repair Dubai. iPad 9th gen and earlier. Touch ID limits explained honestly. AED 250, 1 day, 90-day warranty."
      path="/ipad-home-button-repair-dubai"
      eyebrow="iPad home button"
      h1="iPad Home Button Repair Dubai"
      subtitle="Stuck or dead home button on iPad 9th gen or earlier. Honest about Touch ID - only Apple can re-pair the sensor. AED 250, 1 day."
      startingPrice={250}
      timeline="1 day"
      whatsappPrefill="Hi, my iPad home button isn't working - model:"
      breadcrumb={[
        { name: "Home",         path: "/" },
        { name: "iPad Repair",  path: "/ipad-screen-repair-dubai" },
        { name: "Home Button",  path: "/ipad-home-button-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPad mechanical and Touch ID repair" }}
      serviceName="iPad Home Button Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The same Touch ID truth from our iPhone page applies here</strong>: if we replace the home button on an iPad with Touch ID, the Touch ID function will not work on the new button. Apple pairs each fingerprint sensor to the logic board at manufacture; only Apple can re-pair, and they only do it via whole-device replacement. Anyone in Dubai claiming "Touch ID restored" is selling you false hope.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            What we deliver: AED 250 to restore the click and home function so you can press, double-press for app switcher, and triple-press for Accessibility. We set up AssistiveTouch on-screen for free during the same visit. Applies to iPad 9th gen, iPad Air 1/2/3, iPad mini 4/5, and iPad Pro 1st/2nd gen 9.7\"/10.5\"/12.9\".
          </p>
        </>
      }
      whatWeFix={[
        "Home button doesn't click",
        "Mushy or unresponsive press",
        "Stuck button after a drop",
        "Cracked home button glass",
        "Touch ID degraded by water (replace + AssistiveTouch)",
        "Home button after non-genuine screen install",
        "Click works but no action registered",
      ]}
      steps={[
        { title: "Diagnose mechanical vs flex",  body: "We test the original button under iPadOS diagnostics. Sometimes a software glitch mimics a hardware fault - ruled out free." },
        { title: "Open and replace",              body: "Screen lifted carefully (we don't tear the home-button flex - that's the rookie mistake on iPad 7/8/9)." },
        { title: "Calibrate + reseal",            body: "New button installed, click action calibrated. AssistiveTouch configured at no extra charge." },
        { title: "Function test",                 body: "Press, double-press, triple-press all verified. 90-day warranty card with the iPad." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new home button mechanism and flex.",
        "Does not cover Touch ID (impossible without Apple).",
        "Free re-fit if click softens within 90 days.",
      ]}
      faqs={[
        { q: "Which iPads still have a home button?", a: "iPad 9th gen and earlier (the standard iPad sold from 2010 to 2021). All current iPad mini, Air and Pro models use Touch ID in the power button or Face ID - see our iPad Power Button page for those." },
        { q: "Will Touch ID ever come back?", a: "No, not on a replaced button. Apple's Secure Enclave pairing is hardware-locked. AssistiveTouch on-screen is the only practical workaround - most customers tell us they forget Touch ID is gone within a week." },
        { q: "What if my iPad is too old for AssistiveTouch?", a: "Every iPad with a home button supports AssistiveTouch in Settings \u2192 Accessibility. We configure it for free as part of the repair." },
        { q: "Could it be a software issue?", a: "Yes, occasionally - about 8% of cases. Settings \u2192 Accessibility may have an unwanted toggle. We always check first; if it's settings, no charge." },
        { q: "Same day possible?", a: "We schedule next-day to ensure parts and a calm bench. Most iPads ready within 24 hours of drop-off." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad Power Button Repair",    href: "/ipad-power-button-repair-dubai", description: "Touch ID on newer iPads lives here." },
        { label: "iPad Screen Repair Dubai",    href: "/ipad-screen-repair-dubai",       description: "Often combined with home button work." },
        { label: "iPad Battery Replacement",    href: "/ipad-battery-replacement-dubai", description: "Same opening - combine to save labour." },
      ]}
      blogLink={{ label: "iPad home button vs power button Touch ID: what changed and why", href: "/blog" }}
    />
  );
}
