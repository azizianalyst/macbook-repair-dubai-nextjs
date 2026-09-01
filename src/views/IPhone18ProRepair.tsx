"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhone18ProRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 18 Pro Repair Dubai - Ready From Launch Day | 055 741 3706"
      seoDescription="iPhone 18 Pro repair Dubai, ready from day one. Apple unveils it 9 Sept 2026 - we update this page with confirmed specs within 24 hours. WhatsApp for a price."
      path="/iphone-18-pro-repair-dubai"
      eyebrow="iPhone 18 Pro - expected 9 September 2026, before Apple's keynote"
      h1="iPhone 18 Pro Repair Dubai - Ready From Launch Day"
      subtitle="Apple unveils the iPhone 18 Pro on 9 September 2026. We update this page with confirmed specs within 24 hours of the keynote - message us on WhatsApp to be first in the queue once parts land."
      startingPrice={480}
      timeline="Same day once parts land"
      whatsappPrefill="Hi, I'm asking about iPhone 18 Pro repair ahead of the launch - can you tell me:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone 18 Pro", path: "/iphone-18-pro-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone 18 Pro Repair Dubai"
      quickAnswer={{
        question: "Has the iPhone 18 Pro launched, and can I book a repair yet?",
        answer:
          "Not yet - Apple unveils the iPhone 18 Pro on 9 September 2026. We can't repair a device that doesn't exist, but you can WhatsApp us now to register ahead of launch, and we update this page with confirmed specs, real turnaround times and parts availability within 24 hours of the keynote.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The iPhone 18 Pro hasn't launched yet - this page exists so you find us before you need us.</strong> Apple's "Surprise and shine" keynote is set for 9 September 2026 at Apple Park. Everything below marked "expected" is pre-announcement reporting, not confirmed by Apple. We rewrite this page with verified specs, real photos and actual parts lead times the day the keynote ends.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Expected specs (unconfirmed until 9 Sept 2026)</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Expected chip:</strong> Apple A20 Pro, reportedly Apple's first 2nm-process chip</li>
            <li>• <strong>Expected display:</strong> a smaller Pro alongside the 6.9-inch Pro Max, ProMotion OLED</li>
            <li>• <strong>Expected camera:</strong> 48 MP main with a rumoured variable-aperture lens</li>
            <li>• <strong>Expected connector:</strong> USB-C, improved modem for 5G</li>
            <li>• <strong>Launch strategy:</strong> Pro and Pro Max ship in September; the standard iPhone 18 reportedly moves to spring 2027</li>
          </ul>
          <p className="text-[14px] text-text-muted mb-lg">
            Sourced from pre-keynote reporting (MacRumors, Macworld) as of late August 2026. Apple has not confirmed any of the above - treat every figure as a rumour until 9 September.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md">What to expect from repairs in the first weeks</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            We can't tell you what breaks on a phone that doesn't exist yet, but eight generations of iPhone launches tell the same story: cracked displays are the overwhelming majority of week-one repairs, followed by battery and charging-port issues once the first few months of daily use catch up. We stock screen glass and batteries for every current flagship and prioritise sourcing 18 Pro parts the moment specs are confirmed - we've done this at every iPhone launch since 2004.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked display (the most common first-year repair on any new flagship)",
        "Battery health and replacement",
        "Charging port and connector faults",
        "Camera module failure",
        "Water and liquid damage",
        "Software and Apple ID / iCloud issues",
        "Cosmetic frame damage",
        "Data recovery",
      ]}
      steps={[
        { title: "WhatsApp us",            body: "Tell us your fault, or register ahead of launch so we reach out the moment we have parts." },
        { title: "Free pickup",            body: "Across Dubai mainland, once your device is in hand." },
        { title: "Diagnose + repair",      body: "Free diagnosis first, then a written quote before any work starts." },
        { title: "QC + return",            body: "Every function tested, signed warranty, free delivery back to you." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "12 months on parts and labour, same as every repair here.",
        "Applies from the day we confirm the iPhone 18 Pro's real specs and start stocking parts.",
        "Genuine or OEM-grade parts, and we'll tell you which before you agree to anything.",
      ]}
      faqs={[
        { q: "Has the iPhone 18 Pro actually launched?", a: "Not as of this page's last update. Apple's keynote is scheduled for 9 September 2026. We rewrite this page with confirmed specs, real photos and actual parts availability within 24 hours of the announcement." },
        { q: "Will you have screen and battery parts ready on day one?", a: "We can't promise day-one parts for a device that hasn't launched - no workshop honestly can. What we can tell you: for every iPhone generation since 2004 we've had screen and battery stock within days of release, and we start sourcing the moment Apple confirms the real specs." },
        { q: "Can I book a repair now?", a: "You can WhatsApp us now to register interest so we contact you as soon as we're ready, but we can't fix a phone that doesn't exist yet. Once the iPhone 18 Pro ships and you have a fault, message us and we'll quote it like any other model." },
        { q: "Where do the specs on this page come from?", a: "Pre-keynote industry reporting (MacRumors, Macworld), current as of late August 2026. None of it is confirmed by Apple. We flag every figure as expected/unconfirmed until the 9 September keynote, then replace it with the real specification." },
        { q: "What if the launch date changes?", a: "Apple's own reported plans have shifted before. If the date moves, we update this page and our WhatsApp status accordingly - message us if you want to check the latest before you plan around it." },
      ]}
      reviewNames={["Tim Quick", "Sergej Schlegel"]}
      related={[
        { label: "iPhone Repair Dubai",        href: "/iphone-repair-dubai",              description: "Every current iPhone generation, one hub." },
        { label: "iPhone 17 Pro Max Repair",   href: "/iphone-17-pro-max-repair-dubai",   description: "Today's flagship, in stock and serviced now." },
        { label: "iPhone Screen Repair Dubai", href: "/iphone-screen-repair-dubai",        description: "The most common first-year repair, every model." },
        { label: "iPhone Battery Replacement", href: "/iphone-battery-replacement-dubai",  description: "In-house replacement, written warranty." },
      ]}
    />
  );
}
