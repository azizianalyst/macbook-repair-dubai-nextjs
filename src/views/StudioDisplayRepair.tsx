"use client";
// Studio Display repair. Added 2026-09-24 after a lineup audit found Apple's Studio
// Display had no repair page - only the generic /apple-display-repair-dubai.
//
// DELIBERATELY NO SPEC CLAIMS beyond what is verifiable: panel size/chip/brightness are
// stated nowhere here, because Apple's 2026 refresh specs could not be confirmed from a
// primary source and this site has already been bitten once by publishing unverified
// "expected" specs as fact. The repair content below is true for every Studio Display
// generation, which is what a visitor with a broken one actually needs.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function StudioDisplayRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="Studio Display Repair Dubai - Screen, Backlight & Power"
      seoDescription="Apple Studio Display repair in Dubai - cracked panel, backlight failure, no power, Thunderbolt and speaker faults. Free diagnosis, written quote before any work."
      path="/studio-display-repair-dubai"
      eyebrow="Apple Studio Display repair · Dubai Media City"
      h1="Studio Display Repair Dubai"
      subtitle="Cracked glass, dead backlight, no power, or a Thunderbolt port that will not hold a connection? We repair Apple Studio Displays at component level. Free diagnosis, written quote before any work starts."
      // 0, not an invented figure: the number is never rendered (the Hero shows
      // "Price on request") and deriveServiceQuickAnswer reads 0 as "no published
      // starting price", producing the accurate "starts with a free diagnosis" copy.
      // A fabricated number here would be a latent falsehood waiting to leak.
      startingPrice={0}
      timeline="Typically 2-4 days, panel dependent"
      whatsappPrefill="Hi, I need a Studio Display repair - the fault is:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "Apple Display",  path: "/apple-display-repair-dubai" },
        { name: "Studio Display", path: "/studio-display-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Display and logic board repair" }}
      serviceName="Studio Display Repair Dubai"
      reviewNames={["Saeed Alam", "Daniel Vyskoc"]}
      intro={
        <p className="text-[18px] leading-relaxed mb-md">
          A <strong>Studio Display</strong> is a sealed, laminated panel with its own logic board,
          power supply and speaker array - which is why a fault that looks like &ldquo;the screen is
          broken&rdquo; is often a backlight, power or connection problem that costs far less to fix
          than a panel swap. We diagnose which it is before quoting, and we tell you when a
          replacement makes more financial sense than a repair.
        </p>
      }
      whatWeFix={[
        "Cracked or shattered front glass",
        "Backlight failure - image visible under a torch but no illumination",
        "No power, or the display does not wake from sleep",
        "Flickering, banding or uneven brightness",
        "Dead pixels, vertical lines or a half-black panel",
        "Thunderbolt or USB-C ports that drop the connection",
        "Speaker, microphone or built-in camera faults",
        "Stand and tilt mechanism play or seizure",
      ]}
      steps={[
        { title: "Free diagnosis", body: "We confirm whether the fault is the panel, the backlight, the power supply, or the host connection. A display that shows an image under a torch has a backlight fault, not a dead panel - a much cheaper repair." },
        { title: "Written quote first", body: "You get the exact figure on WhatsApp before any work begins. If a replacement display is the better value, we say so rather than selling you a repair." },
        { title: "Component-level repair", body: "Backlight driver, power supply and port work is done at board level under a microscope. Panel replacement is only recommended when the panel itself is genuinely at fault." },
        { title: "Bench test before return", body: "Every repaired display is run through brightness uniformity, dead-pixel and port-stability checks, and left on soak test before it goes back to you." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day warranty on replaced display components.",
        "Free re-diagnosis if the original fault returns.",
        "No fix, no charge - if we cannot repair it you do not pay for the attempt.",
      ]}
      faqs={[
        { q: "Can you repair a Studio Display, or does Apple replace the whole unit?", a: "Many faults are repairable at component level. Apple's standard route for an out-of-warranty display fault is whole-unit replacement, which is why an independent component-level repair is usually the cheaper option. We tell you honestly when the panel itself has failed and replacement is the sensible call." },
        { q: "My Studio Display shows a faint image only under a bright light. What is that?", a: "That is a classic backlight failure - the panel and logic board are working, but the illumination behind them is not. It is one of the cheaper Studio Display faults to fix because the panel does not need replacing." },
        { q: "The display keeps disconnecting from my Mac. Is that the cable or the display?", a: "Test another Thunderbolt cable and another port on the Mac first - that rules out the two cheapest causes in a minute. If it still drops, the display's port or its internal connection is the likely fault, and both are repairable." },
        { q: "How long does a Studio Display repair take in Dubai?", a: "Most board-level and backlight repairs are done in two to four days. Panel replacements depend on part availability - we confirm the realistic timeline in your written quote rather than promising same-day on a part we may not hold." },
        { q: "How much does a Studio Display repair cost?", a: "It depends entirely on which component has failed, so we do not publish a figure that would be wrong for your fault. Diagnosis is free and you get the exact price in writing on WhatsApp before any work begins." },
      ]}
    />
  );
}
