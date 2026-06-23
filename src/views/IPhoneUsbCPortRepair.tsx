"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneUsbCPortRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone USB-C Port Repair Dubai - iPhone 15+ | AED 400"
      seoDescription="iPhone USB-C port repair Dubai for iPhone 15, 16 and 17. Bent connectors, slow charging, Thunderbolt restored on Pro. AED 400, 1 day."
      path="/iphone-usb-c-port-repair-dubai"
      eyebrow="iPhone USB-C repair"
      h1="iPhone USB-C Port Repair Dubai (iPhone 15+)"
      subtitle="Bent USB-C pin, slow or intermittent charging, data transfer failing on Pro models - we replace the USB-C port with full Thunderbolt support. AED 400, 1 day."
      startingPrice={400}
      timeline="1 day"
      whatsappPrefill="Hi, my iPhone USB-C port needs repair - model (15, 16 or 17):"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "iPhone Repair",     path: "/iphone-repair-dubai" },
        { name: "USB-C Port Repair", path: "/iphone-usb-c-port-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone USB-C and Thunderbolt repair" }}
      serviceName="iPhone USB-C Port Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPhone 15 was the first iPhone with USB-C</strong> and from iPhone 15 Pro onwards the port supports Thunderbolt 3 (40 Gbps) for fast video and data transfer. The connector itself is mechanically more delicate than Lightning - pins bend more easily, especially when a cable is yanked sideways. AED 400 covers a full port replacement with Thunderbolt support intact on Pro models.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Free first step: we clean the port. About 35% of "broken USB-C" iPhones in Dubai are just packed with pocket lint, and a careful microscope clean restores fast charging at no charge. If the port itself is damaged, AED 400, 1 day, warranty of up to 12 months.
          </p>
        </>
      }
      whatWeFix={[
        "Charging cable feels loose or wobbly",
        "Slow charging (5W instead of 20W+)",
        "Bent USB-C pin from cable yanking",
        "Intermittent charging - works at certain angles only",
        "Thunderbolt data transfer failing (Pro models)",
        "DisplayPort out via USB-C not working",
        "After-water-damage USB-C corrosion",
        "Lint and sand packed deep in the port (free clean)",
      ]}
      steps={[
        { title: "Free microscope clean",   body: "We inspect at 40× magnification, extract any lint with a fine pick. About a third of cases solved here, no charge." },
        { title: "Bent pin diagnosis",       body: "If the cable still won't seat properly, we identify which pin is bent and whether it can be straightened (rare) or needs port replacement." },
        { title: "USB-C port replacement",   body: "OEM-grade Thunderbolt-capable port flex on Pro models, standard USB 2.0 port on base iPhone 15 / 16 / 17." },
        { title: "Charge + data verify",     body: "20W+ charge confirmed, Thunderbolt transfer tested at 40Gbps on Pro, DisplayPort to monitor verified. Warranty up to 12 months." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the new USB-C port flex and seal.",
        "Thunderbolt speeds preserved on Pro models.",
        "Excludes new water damage after the repair.",
      ]}
      faqs={[
        { q: "Will Thunderbolt still work after the repair?", a: "On iPhone 15 Pro / 16 Pro / 17 Pro models - yes, full 40Gbps Thunderbolt 3. We use the correct OEM-grade port (the base and Pro ports differ in pin assignment and we never substitute one for the other)." },
        { q: "Why does USB-C bend so easily compared to Lightning?", a: "USB-C is symmetrical with 24 pins on a thin tongue inside the connector. Yanking sideways or stepping on a connected cable bends the tongue. Lightning's solid male pin on the cable side made it more forgiving - an unfortunate trade-off." },
        { q: "Can you straighten a bent pin instead of replacing the port?", a: "Sometimes - if only one outer pin is slightly bent and not snapped. We charge AED 100 for a successful straighten and refund if we need to escalate to a full port replacement (AED 400)." },
        { q: "Will fast charging come back to original spec?", a: "Yes - full 20W on base models, 27W on Pro Max, with a compatible USB-C PD charger. We verify the actual wattage on a power meter before handover." },
        { q: "What about the iPhone 15's data speed limitation?", a: "Base iPhone 15 / 16 / 17 are USB 2.0 (480 Mbps). Pro models are Thunderbolt 3. We can't upgrade a base model to Thunderbolt - that's a logic-board limitation, not the port." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Charging Port Repair",  href: "/iphone-charging-port-repair-dubai",  description: "Hub page covering all charging fixes." },
        { label: "iPhone Lightning Port Repair", href: "/iphone-lightning-port-repair-dubai", description: "iPhone 14 and earlier ports." },
        { label: "iPhone Battery Replacement",   href: "/iphone-battery-replacement-dubai",   description: "Combine if charging issues persist." },
      ]}
      blogLink={{ label: "iPhone USB-C: every spec, speed and repair issue explained", href: "/blog/lightning-vs-usb-c-explained-2026" }}
    />
  );
}
