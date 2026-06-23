"use client";
// MacBook Neo A18 Pro repair hub (L3) - Apple's first A-chip MacBook, March 2026, $599.
// Sits under /macbook-neo-repair-dubai as a chip-specific spoke; links to the screen/battery/keyboard L5 pages.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookNeoA18RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo A18 Pro Repair Dubai - First A-Chip MacBook 2026"
      seoDescription="MacBook Neo A18 Pro repair Dubai (March 2026). Apple's $599 student MacBook with the A18 Pro chip from iPhone 16 Pro. Screen AED 650, battery AED 450. Free diagnosis. Warranty up to 12 months (3 months on screens and batteries; 15 days on board, liquid and data work). Call 055 741 3706."
      path="/macbook-neo-a18-repair-dubai"
      eyebrow="Apple A18 Pro · March 2026 · $599 · student MacBook"
      h1="MacBook Neo A18 Pro Repair Dubai - 2026"
      subtitle="MacBook Neo is Apple's most affordable Mac ever - A18 Pro, 12.9-inch display, $599. At under 6 months old, check AppleCare+ first. If out of warranty: screen AED 650, battery AED 450."
      startingPrice={250}
      timeline="Same day (diagnosis) · 3-5 days (screen/battery)"
      whatsappPrefill="Hi, I have a MacBook Neo (A18 Pro, 2026) and need help with:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "MacBook Repair",    path: "/macbook-repair-dubai" },
        { name: "MacBook Neo Repair", path: "/macbook-neo-repair-dubai" },
        { name: "A18 Pro Repair",    path: "/macbook-neo-a18-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook and A-chip board-level repair" }}
      serviceName="MacBook Neo A18 Pro Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook Neo (A18 Pro, 2026) repair in Dubai: screen from AED 650, battery from AED 450, with
            free diagnosis and a warranty up to 12 months (3 months on screens and batteries; 15 days on board, liquid and data work).</strong> What makes the MacBook Neo different from a MacBook Air?
            The Neo runs an <strong>A18 Pro chip</strong> - the same silicon inside the iPhone 16 Pro - rather than
            Apple's M-series laptop chip. That single difference explains the $599 price: the A18 Pro is a mobile chip,
            not a full desktop-class Mac chip. Practical trade-offs include 1 USB-C/Thunderbolt 4 (single port), a 12.9-inch
            Liquid Retina LCD (not OLED), and 8 GB of soldered RAM that cannot be upgraded. For students, writers and
            first-time Mac buyers, it delivers a real Mac experience at a real price. For video editors and developers
            who need Thunderbolt, a MacBook Air M4 or MacBook Pro is the right choice.
          </p>

          <div className="bg-bg-card border-l-4 border-accent rounded-md p-lg mb-lg">
            <h3 className="text-[18px] font-bold mb-sm">Check AppleCare+ before you book a repair</h3>
            <p className="text-[15px] mb-sm">
              MacBook Neo launched in March 2026. At under 6 months old, it is very likely still under Apple's standard
              1-year limited warranty, and may have AppleCare+ if the original buyer purchased it. We always verify warranty
              status before touching anything. If your machine is covered, we tell you straight and send you to Apple - we
              do not charge for the diagnosis visit.
            </p>
            <p className="text-[15px]">
              Out of warranty? We repair the MacBook Neo from AED 250 for a diagnosis, AED 650 for a screen replacement
              and AED 450 for a battery swap. See the full{" "}
              <Link to="/macbook-neo-repair-dubai" className="text-accent font-semibold hover:underline">
                MacBook Neo repair page
              </Link>{" "}
              for all service options.
            </p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">MacBook Neo A18 Pro - what we repair</h2>
          <p className="text-[15px] mb-md text-text-muted">
            Parts availability for a March 2026 machine is still ramping. Screen and battery stock arrived in May 2026.
            Most screen and battery repairs complete in 3 to 5 days. Diagnosis and port repair are often same-day.
          </p>

          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-lg">
            <table className="w-full text-[14px] min-w-[520px]">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="px-md py-sm font-semibold text-accent">Service</th>
                  <th className="px-md py-sm font-semibold text-accent">Price (AED)</th>
                  <th className="px-md py-sm font-semibold text-accent">Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-md py-sm font-medium text-text">
                    <Link to="/macbook-neo-screen-repair-dubai" className="text-accent hover:underline">Screen replacement (12.9-inch Liquid Retina)</Link>
                  </td>
                  <td className="px-md py-sm font-semibold text-accent">650</td>
                  <td className="px-md py-sm text-text-muted">3-5 days</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-md py-sm font-medium text-text">
                    <Link to="/macbook-neo-battery-replacement-dubai" className="text-accent hover:underline">Battery replacement (BMS re-pair included)</Link>
                  </td>
                  <td className="px-md py-sm font-semibold text-accent">450</td>
                  <td className="px-md py-sm text-text-muted">3-5 days</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-md py-sm font-medium text-text">USB-C/Thunderbolt 4 port repair</td>
                  <td className="px-md py-sm font-semibold text-accent">400</td>
                  <td className="px-md py-sm text-text-muted">Same day</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-md py-sm font-medium text-text">MagSafe 3 board replacement</td>
                  <td className="px-md py-sm font-semibold text-accent">350</td>
                  <td className="px-md py-sm text-text-muted">Same day</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-md py-sm font-medium text-text">
                    <Link to="/macbook-neo-keyboard-repair-dubai" className="text-accent hover:underline">Keyboard repair (key cap or top-case)</Link>
                  </td>
                  <td className="px-md py-sm font-semibold text-accent">From 300</td>
                  <td className="px-md py-sm text-text-muted">Same day - 3 days</td>
                </tr>
                <tr>
                  <td className="px-md py-sm font-medium text-text">Water damage assessment + board clean</td>
                  <td className="px-md py-sm font-semibold text-accent">250</td>
                  <td className="px-md py-sm text-text-muted">Same day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      }
      whatWeFix={[
        "Screen / display replacement - 12.9-inch Liquid Retina from AED 650",
        "Battery replacement with BMS re-pair - AED 450",
        "USB-C/Thunderbolt 4 port repair - AED 400",
        "MagSafe 3 board replacement - AED 350",
        "Water damage assessment and ultrasonic board clean - AED 250",
        "Logic board diagnosis (A18 Pro) - free estimate",
      ]}
      steps={[
        {
          title: "Free diagnosis and warranty check",
          body: "Bring in the Neo or book a free pickup. We run a full hardware diagnostic and check Apple warranty / AppleCare+ status before quoting anything. If it is covered, we tell you and send you to Apple at no charge.",
        },
        {
          title: "Repair with genuine or OEM parts",
          body: "Parts approved by Shafiq after inspection. Screen is full Liquid Retina assembly. Battery cells are matched to the A18 Pro BMS. All repairs are documented with photos.",
        },
        {
          title: "Full test and return",
          body: "Display calibration, battery charge cycle verification, port function test, and a written warranty card handed over with the machine - warranty up to 12 months (3 months on screens and batteries; 15 days on board, liquid and data work).",
        },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Up to 12 months on most hardware repairs (keyboard, ports, hinge, fan, speaker, SSD/RAM).",
        "3 months on screen and battery replacements.",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
      ]}
      faqs={[
        {
          q: "Is my MacBook Neo still under Apple warranty?",
          a: "Very likely yes. MacBook Neo launched in March 2026. Apple's standard limited warranty runs 12 months from purchase date, so a machine bought at launch is covered until at least March 2027. If the original owner also purchased AppleCare+, coverage extends to 3 years. We check warranty status in the first 5 minutes of every visit - free of charge. If you are covered, we refer you to Apple.",
        },
        {
          q: "Does MacBook Neo have Thunderbolt?",
          a: "The MacBook Neo has 1 USB-C/Thunderbolt 4 port plus MagSafe 3 for charging and a 3.5mm headphone jack. The single Thunderbolt 4 port handles data and display output. If you need multiple Thunderbolt ports for high-speed storage arrays or multiple external displays, a MacBook Air or MacBook Pro with more Thunderbolt ports is the better choice.",
        },
        {
          q: "Can MacBook Neo RAM or SSD be upgraded?",
          a: "No. Both the 8GB (or 16GB) unified memory and the 256GB or 512GB SSD are soldered directly to the A18 Pro logic board. There are no upgrade slots. Buy the configuration you need at purchase. If your Neo is running out of space, we can advise on external SSD options that work over the USB-C ports.",
        },
        {
          q: "How does MacBook Neo A18 Pro repair compare to M-chip Mac repair?",
          a: "The A18 Pro is a mobile chip - the same design used in the iPhone 16 Pro. Board-level repair techniques overlap closely with iPhone logic board repair, which Shafiq has been doing since 2011. The key practical difference for repair is parts availability: the Neo is a March 2026 machine, so screen and battery stock only reached Dubai in May 2026. Most repairs are 3 to 5 days rather than same-day. MagSafe 3 and port work is typically same-day.",
        },
      ]}
      reviewNames={["David Chen", "Priya Nair"]}
      related={[
        {
          label: "MacBook Neo Repair Dubai",
          href: "/macbook-neo-repair-dubai",
          description: "All MacBook Neo repairs in one place - screen, battery, keyboard, water damage.",
        },
        {
          label: "MacBook Neo Screen Repair Dubai",
          href: "/macbook-neo-screen-repair-dubai",
          description: "12.9-inch Liquid Retina screen replacement from AED 650. 3-month warranty.",
        },
        {
          label: "MacBook Neo Battery Replacement Dubai",
          href: "/macbook-neo-battery-replacement-dubai",
          description: "A18 Pro battery replacement from AED 450. BMS re-pair included.",
        },
      ]}
      blogLink={{ label: "MacBook Neo: Worth Buying in 2026?", href: "/blog/macbook-neo-worth-buying-2026" }}
    />
  );
}
