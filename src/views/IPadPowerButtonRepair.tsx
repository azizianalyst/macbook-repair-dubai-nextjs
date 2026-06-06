"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadPowerButtonRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Power Button Repair Dubai - Touch ID | AED 300"
      seoDescription="iPad power button repair Dubai. Top-edge button with Touch ID on iPad Air 4+, mini 6+, iPad 10/11. Honest Touch ID limits. AED 300, 1 day."
      path="/ipad-power-button-repair-dubai"
      eyebrow="iPad power button"
      h1="iPad Power Button Repair Dubai"
      subtitle="Top-edge power button stuck, mushy or dead - and on iPad Air 4+, mini 6+, iPad 10/11 it also handles Touch ID. Same honest limits apply. AED 300, 1 day."
      startingPrice={300}
      timeline="1 day"
      whatsappPrefill="Hi, my iPad power button isn't working - model:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPad Repair",   path: "/ipad-screen-repair-dubai" },
        { name: "Power Button",  path: "/ipad-power-button-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPad mechanical and Touch ID repair" }}
      serviceName="iPad Power Button Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>From iPad Air 4 (2020) onwards</strong>, Apple moved Touch ID into the top-edge power button - a clever space saver but it means the power button assembly is now a Touch ID sensor too. When the button fails, the same Apple Secure Enclave pairing rule applies: a replacement button restores click but cannot restore Touch ID. We tell you this before opening the iPad.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            On iPad models without Touch ID in the power button (iPad Pro with Face ID, iPad Air 1/2/3, iPad mini 1-5, iPad 1-9), the repair is purely mechanical - no Touch ID to worry about. AED 300 covers either case, 1-day turnaround, 90-day warranty.
          </p>
        </>
      }
      whatWeFix={[
        "Power button doesn't click",
        "Mushy or unresponsive press",
        "Sticks down after a drop",
        "Touch ID degraded on Air 4+, mini 6+, iPad 10/11 (replace + passcode setup)",
        "Wake / sleep not triggering",
        "Side+volume screenshot combo failing",
        "After-impact button alignment",
        "Corrosion on button after water exposure",
      ]}
      steps={[
        { title: "Click + Touch ID test",       body: "We feel the click and verify Touch ID enrol still works on the original button. Confirms which fault you're dealing with." },
        { title: "Open + frame check",           body: "Battery disconnect, screen lift carefully on iPad Pro / Air. Frame around the button checked for impact deformation." },
        { title: "Replace power button assembly",body: "OEM-grade button + flex installed. On Touch ID models we install but cannot re-pair the sensor - passcode-only thereafter." },
        { title: "Function tests",               body: "Wake, sleep, screenshot combo, hold for power off all verified. 90-day warranty card with the iPad." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new power button assembly and click mechanism.",
        "Does not cover Touch ID on integrated models (impossible without Apple).",
        "Free re-fit if click softens within 90 days.",
      ]}
      faqs={[
        { q: "Which iPads have Touch ID in the power button?", a: "iPad Air 4 (2020) onwards, iPad mini 6 (2021) onwards, and iPad 10th/11th gen. Every other modern iPad either uses Face ID (iPad Pro M-series) or has no biometrics (iPad Pro 9.7\"/10.5\"/12.9\" 1st gen)." },
        { q: "Why can\u2019t Touch ID be re-paired?", a: "Same answer as iPhone: Apple's Secure Enclave is hardware-paired to the original Touch ID sensor at manufacture. The pairing key is stored inside the Secure Enclave and never exposed. No third party can re-pair, including specialised lab equipment." },
        { q: "Will Apple Pay still work?", a: "Yes for in-app purchases via passcode. For physical Apple Pay on iPad (web checkout etc.), passcode is the fallback once Touch ID is unavailable." },
        { q: "What about the iPad Pro power button - just mechanical?", a: "Yes, iPad Pro M4 and earlier with Face ID have a purely mechanical power button. Cleaner repair, same AED 300 price. We tell you which you have based on model." },
        { q: "Could software cause stuck wake?", a: "Rarely - about 5% of cases. We always force-restart and update iPadOS before opening the iPad. If it's software, no charge." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad Home Button Repair",     href: "/ipad-home-button-repair-dubai", description: "For iPad 9th gen and earlier." },
        { label: "iPad Battery Replacement",    href: "/ipad-battery-replacement-dubai",description: "Combine on the same opening." },
        { label: "iPad Full Diagnostic",        href: "/ipad-full-diagnostic-dubai",    description: "Free 25-point check." },
      ]}
      blogLink={{ label: "Touch ID in the power button: how Apple pulled it off (and what breaks)", href: "/blog" }}
    />
  );
}
