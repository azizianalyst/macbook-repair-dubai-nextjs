"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneLightningPortRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Lightning Port Repair Dubai - AED 300 or FREE Clean"
      seoDescription="iPhone Lightning port repair Dubai. Free port clean first - most cases don't need a new port. Replacement AED 300 if needed. iPhone 14 and earlier."
      path="/iphone-lightning-port-repair-dubai"
      eyebrow="iPhone Lightning port"
      h1="iPhone Lightning Port Repair Dubai (iPhone 14 and earlier)"
      subtitle="Cable wobbles, charging stops, or your phone keeps disconnecting? It's almost always lint - and we clean for free. Most iPhones don't need a new port. Same day."
      startingPrice={300}
      timeline="Same day"
      whatsappPrefill="Hi, my iPhone Lightning port isn't charging properly - model:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iPhone Repair",       path: "/iphone-screen-repair-dubai" },
        { name: "Lightning Port",      path: "/iphone-lightning-port-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone charging and audio repair" }}
      serviceName="iPhone Lightning Port Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The honest first move on any "broken" iPhone Lightning port: clean it, free.</strong> About 70% of iPhones we see for charging issues in Dubai have pocket lint, sand or pet hair packed into the port - the cable physically can't seat fully against the contacts. We extract debris under a microscope, plug in our test cable, and 7 times out of 10 you walk out with a working iPhone and no bill.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            If the port itself is corroded, bent or has snapped contacts, replacement is AED 300 - same-day on iPhone 5 through 14. We use OEM-grade Lightning port flex (which on most models also includes the bottom microphone). 90-day warranty.
          </p>
        </>
      }
      whatWeFix={[
        "Free Lightning port clean (most cases)",
        "Cable wobbles inside the port",
        "Charging only at certain cable angles",
        "Slow charging or no charging",
        '"This accessory may not be supported" warning',
        "Bottom microphone dead at the same time as charging issues",
        "Lightning audio (headphones with adapter) failing",
        "Corroded port after pool / pocket-water exposure",
      ]}
      steps={[
        { title: "Free microscope inspection", body: "We look inside the port at 40× magnification. If it's lint or sand, we extract carefully and test charging - usually no charge." },
        { title: "Test with verified cable",    body: "If the clean doesn't fix it, we plug in our bench-tested Apple cable to confirm the issue is the port and not your cable." },
        { title: "Port flex replacement",       body: "OEM-grade Lightning port flex (includes bottom mic on most models). Battery disconnect, install, reseat speaker grille." },
        { title: "Charge + audio + mic verify", body: "Confirm fast-charge speed, lightning audio (with adapter), bottom mic for calls and Voice Memos. 90-day warranty card." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new Lightning port flex and seal.",
        "Bottom microphone replaced as part of the same flex on most models.",
        "Excludes new debris ingress or water damage after repair.",
      ]}
      faqs={[
        { q: "How can I tell if mine just needs a clean?", a: "Two signs: the cable feels like it doesn't fully click in (something blocking it), or charging works at one angle but not another. Both point to debris. Bring it in - clean is free." },
        { q: "Why do shops charge AED 250+ for what's just lint?", a: "Honestly, because they can. We've decided cleaning is part of the diagnostic and shouldn't be billed. We make our money on the customers who genuinely need a port - and on the goodwill from the ones who don't." },
        { q: "Will the bottom microphone be replaced too?", a: "On iPhone 7 and later, the Lightning port and bottom microphone share a flex cable - replacing one replaces the other, no extra charge. If your bottom mic was also dying, this is a free fix." },
        { q: "What if it's actually water damage?", a: "We'll see corrosion under the microscope and tell you. Water-damaged ports may also have killed nearby logic-board traces - we run a free water-damage assessment in that case (separate page on this site) before quoting." },
        { q: "Same day for sure?", a: "Yes. Walk-in by 1 PM, collect by 6 PM. Or WhatsApp for free pickup across Dubai mainland." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Charging Port Repair",  href: "/iphone-charging-port-repair-dubai",  description: "Hub for all charging port issues." },
        { label: "iPhone USB-C Port Repair",     href: "/iphone-usb-c-port-repair-dubai",     description: "iPhone 15 and later." },
        { label: "iPhone Battery Replacement",   href: "/iphone-battery-replacement-dubai",   description: "Combine on the same visit." },
      ]}
      blogLink={{ label: "iPhone won't charge? 70% of the time it's lint - here's how to check", href: "/blog/iphone-not-charging-7-fixes" }}
    />
  );
}
