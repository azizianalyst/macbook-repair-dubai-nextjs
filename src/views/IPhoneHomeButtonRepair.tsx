"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneHomeButtonRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Home Button Repair Dubai - AED 200 | Same-Day | 055 741 3706"
      seoDescription="iPhone home button repair Dubai for iPhone 6, 7, 8 and SE. Honest about Touch ID - only Apple can restore it. AED 200, same day. Call 055 741 3706."
      path="/iphone-home-button-repair-dubai"
      eyebrow="iPhone home button repair"
      h1="iPhone Home Button Repair Dubai"
      subtitle="Stuck, mushy or completely dead home button on your iPhone 6, 7, 8 or SE. We'll get the click back, same day, AED 200. Read on for the honest truth about Touch ID."
      startingPrice={200}
      timeline="Same day"
      whatsappPrefill="Hi, my iPhone home button isn't working - model:"
      breadcrumb={[
        { name: "Home",         path: "/" },
        { name: "iPhone Repair",path: "/iphone-repair-dubai" },
        { name: "Home Button",  path: "/iphone-home-button-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone Home Button Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Honest disclosure first.</strong> If your home button is broken on an iPhone 7 or later, we can replace the button so it clicks again - but <strong>Touch ID will not work on the new button</strong>. Apple pairs each fingerprint sensor to the logic board at the factory. Only Apple themselves can re-pair a new sensor (and they only do it under warranty by replacing the whole phone). Anyone in Dubai promising "Touch ID restored" is lying. We won't.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            What we <em>can</em> do: restore the click and the home function so you can press, double-press for app switcher and triple-press for Accessibility. For Touch ID, we set up AssistiveTouch on-screen during the same visit at no extra charge. AED 200, same day.
          </p>
        </>
      }
      whatWeFix={[
        "Home button doesn't click at all",
        "Mushy or unresponsive press",
        "Click works but doesn't register the action",
        "Stuck button after a drop",
        "Cracked home button glass on iPhone 6/6S/SE",
        "Touch ID degraded by water - replace button + AssistiveTouch setup",
        "After-screen-repair home button calibration",
      ]}
      steps={[
        { title: "Confirm the fault",       body: "We test the original button under iOS diagnostics. Sometimes a software glitch mimics a hardware fault - we rule that out first, free of charge." },
        { title: "Open and replace",        body: "Pentalobe screws out, screen lifted carefully (we don't tear the home-button flex on iPhone 7/8 - that's the rookie mistake)." },
        { title: "Calibrate & seal",        body: "New button installed, click action calibrated, waterproof gasket reseated on iPhone 7+." },
        { title: "AssistiveTouch setup",    body: "Free configuration of on-screen home button so you don't lose the function. We hand the phone back working." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new home button mechanism and flex.",
        "Does not cover Touch ID (impossible without Apple).",
        "Free re-fit if the click softens within 90 days.",
      ]}
      faqs={[
        { q: "Why can't anyone restore Touch ID after the original button breaks?", a: "Apple uses a Secure Enclave that's hardware-paired to the original Touch ID sensor at manufacture. The pairing key never leaves the chip. Any swapped sensor is rejected by iOS. This is a security feature, not a repair limitation." },
        { q: "What about Apple - can they restore it?", a: "Only by giving you a replacement device under AppleCare or out-of-warranty service. They do not transfer or re-pair sensors at the component level." },
        { q: "Is AssistiveTouch a good substitute?", a: "Honestly, yes - most customers tell us they forget Touch ID is gone within a week. The on-screen button does double-press, triple-press, Siri, Apple Pay (via Face ID on newer iPhones, or passcode on iPhone 6/7/8)." },
        { q: "Which iPhones still have a home button?", a: "iPhone 6, 6S, 7, 8, SE (1st, 2nd and 3rd gen). iPhone X and later have no physical home button." },
        { q: "Can you fix it the same day?", a: "Yes. Drop in by 1 PM and collect by 6 PM, or WhatsApp for free pickup across Dubai." },
        { q: "How long does the new button last?", a: "Indefinitely under normal use. We use OEM-grade buttons from the same supplier base as Apple. Our 90-day warranty covers any mechanical failure." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Screen Repair Dubai",     href: "/iphone-screen-repair-dubai",     description: "OLED and LCD swaps from AED 350." },
        { label: "iPhone Battery Replacement",     href: "/iphone-battery-replacement-dubai", description: "OEM-cell batteries from AED 220." },
        { label: "iPhone Face ID Repair",          href: "/iphone-face-id-repair-dubai",     description: "Honest assessment for iPhone X+." },
      ]}
      blogLink={{ label: "Touch ID after repair: the honest truth nobody in Dubai will tell you", href: "/blog/iphone-screen-replaced-but-issues-after" }}
    />
  );
}
