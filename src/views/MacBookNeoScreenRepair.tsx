"use client";
// MacBook Neo screen repair spoke (L5) - 12.9-inch Liquid Retina, A18 Pro, March 2026.
// Parts ramping as of mid-2026; 3-5 day turnaround. Check AppleCare+ first.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookNeoScreenRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Screen Repair Dubai - 12.9-inch Liquid Retina from AED 650"
      seoDescription="MacBook Neo screen repair Dubai from AED 650. 12.9-inch Liquid Retina display, A18 Pro (2026). Cracked glass, dead pixels, backlight failure. Free diagnosis. 3-month warranty. Call 055 741 3706."
      path="/macbook-neo-screen-repair-dubai"
      eyebrow="12.9-inch Liquid Retina · A18 Pro · 2026 · from AED 650"
      h1="MacBook Neo Screen Repair Dubai"
      subtitle="MacBook Neo 12.9-inch screen repair in Dubai. Cracked, dead pixels, backlight gone, lines? We replace the Liquid Retina panel from AED 650. At 6 months old, check AppleCare+ first."
      startingPrice={650}
      timeline="3-5 days (parts still ramping for 2026 model)"
      whatsappPrefill="Hi, I need MacBook Neo screen repair:"
      breadcrumb={[
        { name: "Home",               path: "/" },
        { name: "MacBook Repair",     path: "/macbook-repair-dubai" },
        { name: "MacBook Neo Repair", path: "/macbook-neo-repair-dubai" },
        { name: "Screen Repair",      path: "/macbook-neo-screen-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook and A-chip board-level repair" }}
      serviceName="MacBook Neo Screen Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            MacBook Neo ships with a <strong>12.9-inch Liquid Retina display</strong> at 2560 x 1600 resolution
            (224 ppi), 500 nits brightness, True Tone, and P3 wide colour. It is an IPS LCD panel - the same
            IPS Liquid Retina LCD used across the MacBook Air M2, M3, and M4 - not an OLED. That matters for repair: full-assembly
            replacement is required for cracked glass, dead pixels and backlight failure, the same approach as
            on the Air.
          </p>

          <div className="bg-bg-card border-l-4 border-accent rounded-md p-lg mb-lg">
            <h3 className="text-[18px] font-bold mb-sm">Is your Neo screen covered by AppleCare+?</h3>
            <p className="text-[15px] mb-sm">
              MacBook Neo launched in March 2026. At under 6 months old, it is almost certainly within Apple's
              standard 1-year warranty. If the original owner purchased AppleCare+, accidental damage to the screen
              is covered for a reduced service fee (typically AED 400 at Apple). We check warranty status in the first
              5 minutes of every visit, free of charge. If your machine is covered, we send you to Apple.
            </p>
            <p className="text-[15px]">
              Out of warranty? We replace the full Liquid Retina assembly from{" "}
              <strong>AED 650</strong> with a 3-month warranty.
            </p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">MacBook Neo display specs</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Size:</strong> 12.9 inches</li>
            <li>• <strong>Resolution:</strong> 2560 x 1600 pixels at 224 ppi</li>
            <li>• <strong>Peak brightness:</strong> 500 nits</li>
            <li>• <strong>Panel type:</strong> Liquid Retina IPS LCD (not OLED)</li>
            <li>• <strong>Colour:</strong> P3 wide colour, True Tone, sRGB</li>
            <li>• <strong>Refresh rate:</strong> 60 Hz (no ProMotion)</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability in Dubai</h2>
          <p className="text-[15px] mb-md text-text-muted">
            Liquid Retina assembly stock for the MacBook Neo arrived in Dubai in May 2026. Lead time from our
            supplier is 2 to 4 days, giving a total repair time of 3 to 5 days from the day you drop in the
            machine. We will confirm availability and exact timing when you WhatsApp us the serial number.
          </p>

          <p className="text-[15px] mb-md text-text-muted">
            Compare with the{" "}
            <Link to="/macbook-air-m4-screen-repair-dubai" className="text-accent hover:underline">
              MacBook Air M4 screen repair
            </Link>{" "}
            at AED 720, which has the same panel construction but mature parts stock (same-day turnaround).
            The Neo at AED 650 is slightly cheaper because it is a smaller 12.9-inch assembly.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked display glass - full Liquid Retina assembly replacement",
        "Dead pixels or pixel clusters",
        "Backlight failure - dim or dark screen with image visible",
        "Vertical or horizontal display lines (column/row driver failure)",
        "Screen separation or delamination",
        "Water damage to the display assembly",
      ]}
      steps={[
        {
          title: "Free diagnosis and warranty check",
          body: "We confirm whether the damage is display-only or involves the connector and logic board. Apple warranty / AppleCare+ checked before any work is quoted. If covered, we refer you to Apple at no charge.",
        },
        {
          title: "Full Liquid Retina assembly replacement",
          body: "The entire display assembly is replaced: panel, backlight, glass and cables as a single unit. Shafiq carries out the replacement under a controlled environment to prevent dust contamination.",
        },
        {
          title: "Colour calibration and full function test",
          body: "After replacement: brightness uniformity check, True Tone sensor verification, dead-pixel scan across all 2560 x 1600 pixels. Written 3-month warranty card on collection.",
        },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "3 months on parts and labour",
        "Dead pixels appearing after repair covered in full",
        "Backlight failure within warranty period covered",
        "Accidental damage after repair is not covered",
        "Claim: WhatsApp warranty card photo for free collection",
      ]}
      faqs={[
        {
          q: "Is MacBook Neo screen repair covered by AppleCare+?",
          a: "Very likely, if you bought it at or near the March 2026 launch. Apple's standard 1-year limited warranty covers manufacturing defects but not accidental drops or cracked glass. AppleCare+ adds accidental damage cover for a reduced fee per incident (typically around AED 400 at Apple). We check warranty status free of charge in the first 5 minutes of every visit.",
        },
        {
          q: "How does MacBook Neo screen repair cost compare to MacBook Air M4?",
          a: "MacBook Neo screen repair is AED 650. MacBook Air M4 (13.6-inch) screen repair is AED 720. The Neo is slightly cheaper because its 12.9-inch panel is smaller than the Air's 13.6-inch Liquid Retina display. Both are full Liquid Retina IPS panel replacements with the same 3-month warranty.",
        },
        {
          q: "Is the MacBook Neo screen OLED?",
          a: "No. The MacBook Neo uses a Liquid Retina IPS LCD display - not OLED. OLED on MacBooks is currently only available on the MacBook Pro 14-inch and 16-inch (M4 Pro / M4 Max, 2024). The Neo's Liquid Retina panel is the same IPS Liquid Retina LCD technology as the MacBook Air M2, M3, and M4 - excellent colour accuracy and brightness, but without OLED's per-pixel black levels or ProMotion refresh.",
        },
        {
          q: "Can individual pixels be repaired or does the whole panel need replacing?",
          a: "The entire panel assembly is replaced as a single unit. Individual pixel repair is not technically feasible on an IPS LCD at this display density (224 ppi). The replacement includes the glass, backlight and panel, which is why the price covers a complete Liquid Retina assembly rather than a spot repair.",
        },
      ]}
      reviewNames={["Ali Hassan", "Fatima Al Zaabi"]}
      related={[
        {
          label: "MacBook Neo Repair Dubai",
          href: "/macbook-neo-repair-dubai",
          description: "All MacBook Neo repairs - battery, keyboard, ports, water damage.",
        },
        {
          label: "MacBook Neo Battery Replacement Dubai",
          href: "/macbook-neo-battery-replacement-dubai",
          description: "A18 Pro battery replacement with BMS re-pair from AED 450.",
        },
        {
          label: "MacBook Screen Repair Dubai",
          href: "/macbook-screen-repair-dubai",
          description: "Screen repair for all MacBook models - Air, Pro and Intel.",
        },
      ]}
      blogLink={{ label: "MacBook Neo: Worth Buying in 2026?", href: "/blog/macbook-neo-worth-buying-2026" }}
    />
  );
}
