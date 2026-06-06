"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacPowerSupplyRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Power Supply Repair Dubai - No Power Fix | 055 741 3706"
      seoDescription="iMac PSU repair Dubai. Common 27-inch 2015-2020 no-power fault. PSU swap is standard. AED 400 labor + part. 1-2 days. Free home visit."
      path="/imac-power-supply-repair-dubai"
      eyebrow="iMac power supply"
      h1="iMac Power Supply Repair Dubai - The Common 'No Power' Fix"
      subtitle="iMac dead, no fan, no chime, power button does nothing? On 27-inch iMac 2015-2020 this is almost always the internal power supply unit (PSU) - a known failure point. Standard swap, original-spec part, 1-2 days."
      startingPrice={400}
      timeline="1-2 days"
      whatsappPrefill="Hi, my iMac won't turn on at all - model and year:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iMac Repair",         path: "/imac-screen-repair-dubai" },
        { name: "Power Supply Repair", path: "/imac-power-supply-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iMac board and power restoration" }}
      serviceName="iMac Power Supply Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>If a 27" iMac from 2015-2020 has gone completely dead - no fan spin, no chime, no light, nothing when you press power - the cause is almost always the PSU.</strong> Apple used a particular generation of internal power supply across these models that has a documented failure rate, and we see at least three or four every month.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            The fix is straightforward but does require display removal. The PSU sits behind the logic board on the right side of the iMac. We test the PSU with a known-good replacement first to confirm the diagnosis (logic board faults can present the same way), then swap in a properly-tested original-spec replacement. The iMac chimes back to life and the rest of the machine - display, board, drive - is untouched and unaffected.
          </p>
        </>
      }
      whatWeFix={[
        "iMac 27-inch 2015 / 2017 / 2019 / 2020 dead-on-arrival fault",
        "iMac that worked yesterday and is completely dead today",
        "Brief power flicker then nothing",
        "Fan spins for a second then stops, no chime",
        "Confirming PSU vs logic board cause (free diagnostic)",
        "Replacing failing PSU before complete failure",
      ]}
      steps={[
        { title: "Free diagnostic test",       body: "We test with a known-good PSU before quoting. If swapping it brings the iMac back, you need a PSU. If not, we move to logic-board diagnosis instead - no point selling you a PSU you don't need." },
        { title: "Source spec-correct part",   body: "We use original Apple PSUs reclaimed from donor boards or new aftermarket equivalents that meet the exact voltage and pin spec. Not generic PC supplies." },
        { title: "Display off, PSU swap",      body: "Standard iMac teardown - adhesive cut, display lifted, PSU module unscrewed and replaced. Total bench time about 90 minutes." },
        { title: "Boot and burn-in",           body: "iMac boots, runs through a 2-hour burn-in test (CPU + GPU load) to confirm the new PSU holds voltage under demand." },
        { title: "Reseal and verify",          body: "Fresh adhesive, display refit, overnight cure, final test before pickup." },
      ]}
      warrantyDays={180}
      warrantyBullets={[
        "6-month warranty on the PSU and the install.",
        "Free swap if the replacement PSU fails inside warranty.",
        "Free home pickup - iMacs are heavy, we collect and return.",
      ]}
      faqs={[
        { q: "How do I know it's the PSU and not something else?", a: "You don't, and you shouldn't guess. Logic board faults and CMOS battery issues can look identical. Our free diagnostic uses a known-good PSU as a test - if it brings the iMac back, you need a PSU. If it doesn't, you don't, and we tell you so." },
        { q: "Is this an Apple-original part?", a: "We use either pulled-original Apple PSUs from donor boards (preferred) or aftermarket replacements that meet the exact electrical spec. We tell you which one is going in your machine before we start." },
        { q: "Why is this AED 400 labor - isn't it just a swap?", a: "The labor includes display removal, adhesive cutting, careful reassembly with fresh adhesive and overnight cure, plus the diagnostic and burn-in. The actual PSU swap is fast - getting in and out of the iMac safely is the work." },
        { q: "Can the PSU be repaired instead of replaced?", a: "Sometimes - for the curious or for a 2009/2011 iMac where parts are scarce, we can replace failed capacitors on the PSU board (board-level service). On 2015+ machines a swap is faster, more reliable and similar cost." },
        { q: "Will my data be safe?", a: "Yes - the PSU sits separately from the storage. We don't touch the SSD or Fusion Drive. Your data is exactly where you left it when the iMac comes back to life." },
        { q: "Can you collect from my home or office?", a: "Yes, free across Dubai mainland. iMacs are awkward to box. We bring proper transport foam." },
      ]}
      reviewNames={["Ali Hassan", "Binod Shrestha", "Shah nawaz"]}
      related={[
        { label: "iMac Not Turning On",     href: "/imac-not-turning-on-dubai",     description: "Diagnosis hub for all no-power iMac faults." },
        { label: "iMac Logic Board Repair", href: "/imac-logic-board-repair-dubai", description: "If the PSU isn't the cause." },
        { label: "iMac Full Diagnostic",    href: "/imac-full-diagnostic-dubai",    description: "Free check first if you're unsure." },
      ]}
      blogLink={{ label: "iMac 27-inch 2015-2020 PSU failure - what's actually wearing out", href: "/blog/imac-not-turning-on-power-supply-issues" }}
    />
  );
}
