"use client";
// MacBook Neo battery replacement spoke (L5) - A18 Pro, 18-hour rated battery, March 2026.
// BMS re-pair included. Very likely still under Apple warranty at 6 months old.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookNeoBatteryReplacement() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Battery Replacement Dubai - From AED 450"
      seoDescription="MacBook Neo battery replacement Dubai from AED 450. A18 Pro MacBook (March 2026), 18-hour rated life. BMS re-pair included. Check AppleCare+ before booking. Free diagnosis. Call 055 741 3706."
      path="/macbook-neo-battery-replacement-dubai"
      eyebrow="A18 Pro · 2026 · 18-hour battery · BMS re-pair included"
      h1="MacBook Neo Battery Replacement Dubai"
      subtitle="MacBook Neo battery replacement in Dubai from AED 450. At 6 months old it is almost certainly under Apple warranty - we check before touching anything. If out of warranty: BMS re-pair included."
      startingPrice={450}
      timeline="3-5 days (parts building)"
      whatsappPrefill="Hi, I need MacBook Neo battery replacement:"
      breadcrumb={[
        { name: "Home",                    path: "/" },
        { name: "MacBook Repair",          path: "/macbook-repair-dubai" },
        { name: "MacBook Neo Repair",      path: "/macbook-neo-repair-dubai" },
        { name: "Battery Replacement",     path: "/macbook-neo-battery-replacement-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook and A-chip board-level repair" }}
      serviceName="MacBook Neo Battery Replacement Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            The MacBook Neo's A18 Pro chip is remarkably power-efficient - the same A18 Pro silicon found in the
            iPhone 16 Pro, designed from the ground up for battery longevity. Apple rates the Neo at{" "}
            <strong>18 hours</strong> of wireless web browsing, the highest rated life on any MacBook in Apple's
            current lineup. In normal student use (documents, web, streaming) most owners see 12 to 16 hours on
            a charge.
          </p>

          <div className="bg-bg-card border-l-4 border-accent rounded-md p-lg mb-lg">
            <h3 className="text-[18px] font-bold mb-sm">Check warranty and software before booking a battery swap</h3>
            <p className="text-[15px] mb-sm">
              MacBook Neo launched in March 2026. At under 6 months old, rapid battery drain is far more often a
              software issue than a failing cell. Background app refresh, screen brightness, iCloud sync and
              Apple Intelligence workloads (running on-device LLMs) are the most common culprits. We run a
              free battery health check - if the design capacity is above 85% and cycle count is under 100, we
              will tell you and help you optimise the software settings instead of fitting a new battery.
            </p>
            <p className="text-[15px]">
              If the battery genuinely needs replacing, the machine is almost certainly still within Apple's
              1-year warranty - battery defects are covered at no charge by Apple. We check warranty status
              first, always.
            </p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Why BMS re-pair is required on A-chip Macs</h2>
          <p className="text-[15px] mb-md text-text-muted">
            Like all Apple Silicon Macs, the MacBook Neo uses a Battery Management System (BMS) that is
            firmware-paired to the logic board. After a battery swap, the new cell must be re-paired to the board
            so macOS reports accurate capacity, cycle count, and health. Without BMS re-pair, the system may
            show "Service Recommended" immediately after a new battery is fitted, or the health reading may be
            inaccurate. This step is included in the AED 450 price and takes approximately 4 hours on the bench.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">How to check MacBook Neo battery health</h2>
          <p className="text-[15px] mb-md text-text-muted">
            On macOS Sequoia or later: go to Apple menu, System Settings, Battery, then click the "i" icon next
            to Battery Health. A healthy Neo should show "Normal" and maximum capacity above 95% in its first
            six months. If you see "Service Recommended" or capacity below 80%, WhatsApp us a screenshot and we will
            advise whether it qualifies for a warranty claim or a paid replacement. See also the general{" "}
            <Link to="/macbook-battery-replacement-dubai" className="text-accent hover:underline">
              MacBook battery replacement
            </Link>{" "}
            page for all models.
          </p>
        </>
      }
      whatWeFix={[
        "Battery replacement with BMS firmware re-pair - AED 450",
        "Battery health assessment and capacity report - free",
        '"Service Recommended" status after confirming out-of-warranty',
        "Sudden shutdown at 20-40% charge",
        "MacBook Neo not charging - MagSafe 3 and USB-C charging diagnostic",
        "Battery draining fast - software audit included before recommending replacement",
      ]}
      steps={[
        {
          title: "Free battery health check and warranty verification",
          body: "We read the design capacity, cycle count and Apple warranty status in the first 5 minutes. If the battery is healthy and the problem is software, we fix the software. If the machine is under warranty, we refer you to Apple.",
        },
        {
          title: "Battery replacement and BMS re-pair",
          body: "Old battery removed, new OEM-matched cell fitted, BMS firmware re-paired to the A18 Pro logic board. The BMS re-pair is what makes macOS read the new battery correctly.",
        },
        {
          title: "Charge cycle verification",
          body: "Full charge, partial discharge and capacity verification cycle run on the bench. Confirmed capacity reading shown before collection. 3-month warranty card with cell batch number issued.",
        },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "3 months on the replacement cell and labour",
        "80% capacity guarantee within 90 days at under 200 cycles",
        "BMS firmware issues within the warranty period fixed free",
        "Physical damage and liquid damage not covered",
        "Claim: WhatsApp warranty card photo - free same-day collection",
      ]}
      faqs={[
        {
          q: "Is MacBook Neo battery failure covered by AppleCare+?",
          a: "MacBook Neo launched in March 2026. If the machine was bought at or near launch, Apple's standard 1-year warranty covers manufacturing defects including a battery that holds less than 80% of its original capacity. AppleCare+ extends coverage to 3 years and also covers accidental damage. We check warranty status free of charge before every repair - if you are covered, we refer you to Apple.",
        },
        {
          q: "What is BMS re-pair and why is it needed on MacBook Neo?",
          a: "BMS stands for Battery Management System. On every Apple Silicon Mac - including the MacBook Neo - the BMS firmware is cryptographically paired to the logic board at the factory. When the battery is replaced, the new cell must be re-paired using Apple diagnostics so macOS can read accurate capacity, cycle count, and health data. Without re-pair, the system reports the old battery's data, or shows an immediate 'Service Recommended' warning. BMS re-pair is included in our AED 450 price and takes about 4 hours on the bench.",
        },
        {
          q: "MacBook Neo battery draining fast - is it the battery or software?",
          a: "At under 6 months old with a cycle count under 100, rapid drain is almost always software. The most common causes on the Neo: Apple Intelligence running on-device LLMs in the background, high screen brightness, iCloud Photos syncing a large library, or background app refresh from newly installed apps. We run a free battery health check - if the cell is healthy we identify and fix the software issue at no charge. We only recommend a replacement when the hardware genuinely needs it.",
        },
        {
          q: "How do I check MacBook Neo battery health?",
          a: "Go to Apple menu, System Settings, Battery, then click the information icon next to Battery Health. You will see the current maximum capacity as a percentage and a status of Normal or Service Recommended. A Neo under 6 months old should read above 95%. If it reads below 80% or shows Service Recommended, WhatsApp us a screenshot of that screen - include the model name and purchase date - and we will advise whether it is a warranty claim or a paid replacement.",
        },
      ]}
      reviewNames={["Ahmad Khalid", "James Mitchell"]}
      related={[
        {
          label: "MacBook Neo Repair Dubai",
          href: "/macbook-neo-repair-dubai",
          description: "All MacBook Neo repairs - screen, keyboard, ports, water damage.",
        },
        {
          label: "MacBook Neo Screen Repair Dubai",
          href: "/macbook-neo-screen-repair-dubai",
          description: "12.9-inch Liquid Retina screen replacement from AED 650.",
        },
        {
          label: "MacBook Pro Battery Replacement Dubai",
          href: "/macbook-pro-battery-replacement-dubai",
          description: "Pro battery replacement - 14-inch and 16-inch from AED 500.",
        },
      ]}
      blogLink={{ label: "MacBook Neo: Worth Buying in 2026?", href: "/blog/macbook-neo-worth-buying-2026" }}
    />
  );
}
