"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneHeadphoneJackRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Headphone Jack Repair Dubai - AED 200 | iPhone 6S and Earlier"
      seoDescription="iPhone 3.5mm headphone jack repair Dubai. Lint clean often free. iPhone 6S and earlier only - newer models have no jack. AED 200, same day."
      path="/iphone-headphone-jack-repair-dubai"
      eyebrow="iPhone headphone jack"
      h1="iPhone Headphone Jack Repair Dubai"
      subtitle='Stuck headphone tip, dead audio, or "headphones plugged in" stuck on. iPhone 6S and earlier only - Apple removed the jack from iPhone 7 onwards. AED 200, same day.'
      startingPrice={200}
      timeline="Same day"
      whatsappPrefill="Hi, my iPhone headphone jack isn't working - model:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iPhone Repair",   path: "/iphone-repair-dubai" },
        { name: "Headphone Jack",  path: "/iphone-headphone-jack-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone audio and connector repair" }}
      serviceName="iPhone Headphone Jack Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Quick honesty:</strong> if you have an iPhone 7 or newer, your phone never had a headphone jack - Apple removed it. Use the Lightning-to-3.5mm or USB-C-to-3.5mm adapter (we sell genuine ones for AED 50, or buy from Apple). This page is for iPhone 6S, 6, SE 1st gen, and earlier - the last iPhones with a true 3.5mm jack.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Most "broken jack" cases on these older iPhones are pocket lint packed deep into the socket - we extract for free. About 30% need a new jack assembly because the spring contacts have worn or a snapped headphone tip is wedged inside. AED 200 for the full replacement, same day.
          </p>
        </>
      }
      whatWeFix={[
        "Lint or sand packed in the headphone socket (free clean)",
        "Snapped headphone tip stuck inside the jack",
        "Audio only in one channel when headphones plugged in",
        '"Headphones connected" stuck on the screen',
        "Crackling when the cable is moved",
        "No audio detection at all",
        "Jack failure after water exposure",
      ]}
      steps={[
        { title: "Free socket inspection",   body: "Microscope look inside the jack - most cases are debris. We extract with a fine pick, no charge." },
        { title: "Test with known-good cable", body: "If clean and still faulty, we plug in a working 3.5mm cable to confirm the socket itself, not your headphones." },
        { title: "Replace jack assembly",     body: "On iPhone 6/6S the jack is part of the charging-port flex. We swap the whole flex (includes free new charging port too). On older models the jack is its own module." },
        { title: "Audio test + warranty",     body: "Stereo, microphone (headphones with mic), volume controls. Warranty up to 12 months card with the phone." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the new jack module / flex.",
        "Excludes new debris ingress.",
        "Free re-clean if symptoms return within 12 months.",
      ]}
      faqs={[
        { q: "Why did Apple remove the headphone jack?", a: "Apple's stated reason was internal space for Taptic Engine and improved water resistance. Whether you agree or not, every iPhone from 7 onwards uses Lightning or (from iPhone 15) USB-C for wired audio. We sell adapters." },
        { q: "Will repairing my iPhone 6S jack make it sound worse?", a: "No. The DAC is on the logic board, not in the jack itself. Replacing the jack assembly restores the original analog signal path." },
        { q: "What if a headphone tip is broken inside?", a: "Bring it in. We extract snapped tips with a specialist tool - usually under 10 minutes, often free if you're already in for something else." },
        { q: "Should I just buy an adapter for a newer iPhone?", a: "Yes - Apple's Lightning or USB-C to 3.5mm adapter is the simplest path. AED 50 for genuine, works perfectly, no hardware risk." },
        { q: "Do you support Bluetooth audio setup?", a: "Yes - happy to pair Bluetooth headphones for free during any visit. Modern wired audio on iPhone 7+ is rare; most users have moved to Bluetooth." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Lightning Port Repair", href: "/iphone-lightning-port-repair-dubai", description: "iPhone 14 and earlier port issues." },
        { label: "iPhone Speaker Repair",        href: "/iphone-speaker-repair-dubai",        description: "If audio out via speaker is also bad." },
        { label: "iPhone Battery Replacement",   href: "/iphone-battery-replacement-dubai",   description: "Combine on the same older-model visit." },
      ]}
      blogLink={{ label: "Reviving an iPhone 6S in 2026: every repair worth doing", href: "/blog/iphone-repair-vs-replace-decision-guide" }}
    />
  );
}
