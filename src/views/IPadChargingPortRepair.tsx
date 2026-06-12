"use client";
import DevicePageTemplate from "@/components/blocks/DevicePageTemplate";

export default function IPadChargingPortRepair() {
  return (
    <DevicePageTemplate
      family="ipad"
      seoTitle="iPad Charging Port Repair Dubai - USB-C & Lightning | From AED 300"
      seoDescription="iPad charging port repair Dubai. USB-C and Lightning ports replaced. Smart Connector and wireless charging cases also covered. From AED 300. Call 055 741 3706."
      path="/ipad-charging-port-repair-dubai"
      eyebrow="iPad charging port repair"
      h1="iPad Charging Port Repair Dubai - USB-C & Lightning"
      subtitle="Charger only works at one angle, port wobbles, iPad won't charge at all. Port-only swap or charging-IC repair, depending on what the bench finds."
      startingPrice={300}
      timeline="Same day · 1 day"
      whatsappPrefill="Hi, my iPad charging port is broken - model:"
      technician={{ name: "Shafeeq", years: 12, specialisation: "iPad board & port specialist" }}
      serviceName="iPad Charging Port Repair"
      pricingRows={[
        { model: "iPad Lightning port (older models)",        price: 300, timeline: "Same day" },
        { model: "iPad USB-C port (Air 4+, Mini 6+, all Pro)", price: 400, timeline: "Same day" },
        { model: "iPad Pro USB-C with Thunderbolt (M1+)",     price: 500, timeline: "1 day" },
        { model: "Smart Connector repair",                    price: 350, timeline: "Same day" },
        { model: "Charging IC / Tristar repair (board level)", price: 550, timeline: "1-2 days" },
        { model: "Diagnosis only",                            price: 0,   timeline: "Same day" },
      ]}
      pricingCaption="Free diagnosis confirms whether it's the port itself or the charging IC on the board before any work."
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            iPads use one of three connectors. <strong>Lightning</strong> on every iPad up to iPad 9. <strong>USB-C</strong> on every iPad Air from gen 4, Mini from gen 6, every iPad Pro since 2018, and the iPad 10 onwards. Newer iPad Pros add Thunderbolt over USB-C - same physical port, more pins doing more work, and pricier when damaged.
            </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            The Smart Connector on Pro and Air models is a separate three-pin contact for keyboard cases. It can fail on its own without the main port being touched. We test all three on every charging-port job.
          </p>
        </>
      }
      problems={[
        { title: "Cable only works wiggled at an angle", body: "Inner pins of the port are bent or worn. Port replacement, same day on most models." },
        { title: "iPad won't charge at all", body: "Could be port, cable, charger, or charging IC. Free diagnosis isolates which. We don't quote a port until we've confirmed it." },
        { title: "Charger gets hot but iPad doesn't fill", body: "Power negotiation between the iPad and charger is failing. Usually charging IC, sometimes Tristar chip. Board-level repair." },
        { title: "Lint or sand jammed in the port", body: "Dubai-specific. We pick out compacted dust without scratching the contacts. Often this alone fixes it. Free if no parts needed." },
        { title: "Smart Connector keyboard not detected", body: "Magic Keyboard or Folio not recognised. Smart Connector contacts oxidised or damaged. Separate repair from the main port." },
        { title: "USB-C accessories not recognised", body: "Hub, SSD or display works on a Mac but not the iPad Pro. Often a single damaged USB-C pin. Port swap restores Thunderbolt and DisplayPort modes." },
      ]}
      steps={[
        { title: "WhatsApp the model + symptom", body: "Tell us which iPad and what it does (or doesn't do) when plugged in. Quote in minutes." },
        { title: "Free pickup", body: "Driver collects across Dubai mainland." },
        { title: "Free diagnosis", body: "Test cable, port, voltage at the charging IC, and Smart Connector. You see the actual fault before approving the repair." },
        { title: "Port replacement or board work", body: "Most jobs are a flex-cable port swap (same day). Board-level IC repair takes a microscope and 1-2 days." },
        { title: "Full charge cycle test", body: "Wired charge from 0 to 100, fast-charge negotiation test, accessory test. Smart Connector tested with a Magic Keyboard." },
        { title: "Free delivery + warranty card", body: "Back to you with the 30-day written warranty." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the new port, charging IC if replaced, and Smart Connector contacts.",
        "Excludes damage from third-party fast chargers above iPad spec.",
        "Free re-fit if any wobble develops in the first 30 days.",
      ]}
      comparisonRows={[
        ["Starting price",        "AED 300",                          "AED 1,200+ (whole-unit swap)"],
        ["Same-day option",       "Yes, most models",                 "No - usually 7+ days"],
        ["Free diagnosis",        "Yes, before any work",             "Diagnostic fee may apply"],
        ["Board-level capability", "Yes - microscope IC repair",      "Whole-unit swap only"],
        ["Smart Connector covered", "Yes, separate quote if needed", "Whole-unit swap"],
        ["Data preserved",        "Always",                           "Restore from backup"],
        ["Warranty",              "30 days written",                  "12 months on new unit"],
      ]}
      faqs={[
        { q: "Why doesn't my iPad charge anymore?", a: "Five possible causes: the cable, the charger, the port pins, the charging IC, or the battery. Free diagnosis tells us which. About 60% of charging issues are a cheap cable - we'll never charge for a part you don't need." },
        { q: "Should I try a different cable first?", a: "Yes. And a different brick. If the iPad charges with another cable, you saved AED 300. If it doesn't, the port or IC is the issue. Either way, we don't charge for the diagnosis." },
        { q: "What's the difference between USB-C and Thunderbolt on iPad Pro?", a: "Same physical port, different controller. Thunderbolt 4 on M1 and newer iPad Pros adds 40 Gb/s data and external display support. The replacement port has more pins - that's why it costs more." },
        { q: "Can dust really stop charging?", a: "Yes. Dubai's lint and fine sand pack into the port over months. We extract it with non-conductive picks. If that solves it, no charge." },
        { q: "Is the Smart Connector the same as the charging port?", a: "No. Smart Connector is a separate three-pin contact strip on the side of iPad Pro and Air. It powers keyboards and folios. It can fail on its own - different repair, different price (AED 350)." },
        { q: "My iPad charges but very slowly. Is the port damaged?", a: "Usually the charging IC has lost a fast-charge pin. iPad falls back to 5W trickle charging. Board-level IC repair fixes it. AED 550, 1-2 days." },
        { q: "Will MagSafe or wireless charging work after?", a: "iPads don't have MagSafe and most don't support wireless charging. Apple Pencil charges wirelessly via the magnetic side contact - that's separate from the main port and isn't affected." },
        { q: "Can you save the data if the port is dead?", a: "Yes. We can power the iPad from the battery side directly to back up to a Mac, even with no working port. Data first, repair second." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Daniel Vyskoc", "Linda Banannou", "Akshay Dalal"]}
      relatedSlugs={[
        "/ipad-screen-repair-dubai",
        "/ipad-battery-replacement-dubai",
        "/ipad-water-damage-repair-dubai",
      ]}
    />
  );
}
