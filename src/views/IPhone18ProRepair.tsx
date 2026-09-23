"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhone18ProRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 18 Pro Repair Dubai - Free Diagnosis, Same-Day"
      seoDescription="iPhone 18 Pro repair in Dubai - screen, battery, charging port and logic board. Free diagnosis, written quote before any work. WhatsApp us for current parts availability."
      path="/iphone-18-pro-repair-dubai"
      eyebrow="iPhone 18 Pro - board-level repair in Dubai Media City"
      h1="iPhone 18 Pro Repair Dubai"
      subtitle="Screen, battery, charging port and board-level repair for the iPhone 18 Pro at our Concord Tower workshop. Message us on WhatsApp and we will confirm current parts availability and turnaround before you book."
      startingPrice={480}
      timeline="Same day on most faults"
      whatsappPrefill="Hi, I need an iPhone 18 Pro repair - can you tell me:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone 18 Pro", path: "/iphone-18-pro-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone 18 Pro Repair Dubai"
      quickAnswer={{
        question: "Can you repair an iPhone 18 Pro in Dubai?",
        answer:
          "Yes. Message us on WhatsApp with the fault and we will confirm current parts availability and turnaround before you book. On any recently released iPhone, genuine parts reach independent workshops in stages, so it is worth checking rather than assuming.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPhone 18 Pro repair, handled at board level in Dubai Media City.</strong> </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Specification highlights</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Chip:</strong> Apple A20 Pro on a 2nm process - 6-core CPU with integrated Neural Accelerators, 7-core GPU, dual 16-core Neural Engine</li>
            <li>• <strong>Camera:</strong> 48MP Fusion Main with a variable aperture</li>
            <li>• <strong>Cooling:</strong> next-generation vapor chamber, Apple&apos;s highest sustained performance in an iPhone</li>
            <li>• <strong>Design:</strong> a smaller Dynamic Island</li>
            <li>• <strong>Software:</strong> ships with iOS 27</li>
            <li>• <strong>Availability:</strong> announced 9 September 2026, shipping since 18 September 2026. There is no standard iPhone 18 this cycle - it moves to spring 2027</li>
          </ul>
          <p className="text-[14px] text-text-muted mb-lg">
            Specifications confirmed by Apple at the 9 September 2026 announcement. Confirm the exact configuration of your handset with us before booking — parts and availability differ by model and region.</p>
          <h2 className="text-[24px] md:text-[28px] mb-md">What we see most on a new iPhone generation</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Across eight generations of iPhone launches the pattern is consistent: cracked displays are the overwhelming majority of week-one repairs, followed by battery and charging-port issues once the first few months of daily use catch up. We stock screen glass and batteries for every current flagship and prioritise sourcing 18 Pro parts the moment specs are confirmed - we've done this at every iPhone launch since 2004.
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
        { q: "Can you repair an iPhone 18 Pro in Dubai?", a: "Yes. Message us on WhatsApp with the fault and we will confirm current parts availability and turnaround before you book. On any recently released iPhone, genuine parts reach independent workshops in stages." },
        { q: "Do you use genuine parts on the iPhone 18 Pro?", a: "We source parts through authorised supply channels and tell you which grade of part your quote covers before any work starts. If Apple is the better route for your fault, for example an in-warranty or programme-eligible repair, we will say so." },
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
