"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacOverheatingFix() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Overheating Fix Dubai - Fan Clean, Thermal Paste | 055 741 3706"
      seoDescription="iMac overheating fix Dubai. Fan cleaning (Dubai dust!), thermal paste refresh, GPU cooling, fan replacement. AED 350. 1 day. Free home visit."
      path="/imac-overheating-fix-dubai"
      eyebrow="iMac overheating"
      h1="iMac Overheating Fix Dubai - Fan Clean & Thermal Refresh"
      subtitle="Loud fans, warm casing and CPU throttling on an older iMac is almost always one thing - Dubai dust packed into the cooling fins behind the logic board. We open, deep-clean, replace thermal paste and pads, and your iMac runs quiet again."
      startingPrice={350}
      timeline="1 day"
      whatsappPrefill="Hi, my iMac is overheating / loud fans - model and year:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iMac Repair",         path: "/imac-repair-dubai" },
        { name: "Overheating Fix",     path: "/imac-overheating-fix-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iMac thermal restoration" }}
      serviceName="iMac Overheating Fix"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Dubai's combination of fine dust and 12 months of air-conditioning is brutal on iMac cooling.</strong> A 2017 or 2019 iMac that's been sitting on a desk for five years almost always has a thick mat of dust across the heatsink fins behind the display - exactly where the fan is trying to push air through. The result: the fan spins flat-out, the casing gets hot to touch and the CPU throttles down to half its rated speed.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            The fix isn't expensive but it does require display removal, which is the same delicate process we do for SSD upgrades. Once open, we vacuum the dust, replace the dried-out thermal paste between CPU/GPU and heatsink, swap any compressed thermal pads, and inspect the fan bearing. The iMac comes back quiet, cool and running at full speed - usually 20-30% faster in benchmarks because throttling is gone.
          </p>
        </>
      }
      whatWeFix={[
        "Constant loud fan even at idle",
        "Casing too hot to touch on the back",
        "CPU throttling - slower than benchmarks suggest it should be",
        "Random shutdowns under load (Lightroom, Final Cut, video calls)",
        "Worn fan bearings causing rattle or grinding",
        "Aged thermal paste cracked or pumped-out",
      ]}
      steps={[
        { title: "Confirm thermal cause",     body: "We run intelTM (or powermetrics on M-series) to confirm CPU/GPU temps under load and prove throttling is happening." },
        { title: "Display removal",            body: "Same careful adhesive cutting as our SSD upgrade - display lifts off without cracking." },
        { title: "Vacuum + brush clean",       body: "Heatsink fins, fan blades and intake/exhaust paths cleaned of dust. Compressed air alone doesn't do it on a Dubai-aged iMac - needs proper brush work." },
        { title: "Thermal paste + pads",       body: "Old paste removed with isopropyl, fresh Arctic MX-6 or Honeywell PTM7950 applied. Thermal pads replaced where compressed." },
        { title: "Reseal and verify",          body: "Display refit with fresh adhesive, cure overnight, then a 30-minute load test to confirm temps are 15-25°C lower than before." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day warranty on the thermal work and adhesive seal.",
        "Free re-clean if the same dust issue returns inside 6 months (it shouldn't).",
        "Free home visit option for the pickup and drop-off - iMacs are heavy.",
      ]}
      faqs={[
        { q: "Why is dust such a big deal in Dubai?", a: "Fine sand combined with constant AC means dust circulates indoors year-round. iMacs sit on desks and pull air through the bottom intake. Five years of this builds a felt-like mat across the heatsink that no amount of compressed air can clear without opening the machine." },
        { q: "Can I just blow it out with compressed air?", a: "It rarely works on iMacs. The fins are deep behind the logic board and the dust mat is usually too compacted. You'll move surface dust around but the choke point stays choked. Has to be opened to clean properly." },
        { q: "Will my iMac actually be faster afterwards?", a: "Almost always - usually 20-40% faster in sustained workloads because the CPU stops throttling. Final Cut renders, Lightroom exports and Logic mixes all benefit visibly." },
        { q: "Is there any risk to opening the iMac?", a: "On older iMacs the display adhesive is the only delicate part - we've done hundreds and we use the proper Apple-spec strips on reassembly. Risk to the logic board itself is very low." },
        { q: "What about a 24-inch M-series iMac?", a: "Fans almost never need this on M1/M2/M3/M4 because the chip runs cool by design. If yours is loud, it's usually software (a runaway process) - we'll diagnose for free first." },
        { q: "Can you do this at my home?", a: "Pickup and drop-off yes - the actual paste work needs our bench and a dust-free area for display reassembly, so the unit comes to the workshop for a day." },
      ]}
      reviewNames={["Shah nawaz", "Binod Shrestha", "Ali Hassan"]}
      related={[
        { label: "iMac Fan Cleaning",       href: "/imac-fan-cleaning-dubai",       description: "Lighter version - clean only, no paste swap." },
        { label: "iMac Full Diagnostic",    href: "/imac-full-diagnostic-dubai",    description: "Free check including thermal readings." },
        { label: "iMac Logic Board Repair", href: "/imac-logic-board-repair-dubai", description: "If overheating already caused damage." },
      ]}
      blogLink={{ label: "Why Dubai iMacs throttle - the dust and AC combo explained", href: "/blog/imac-not-turning-on-power-supply-issues" }}
    />
  );
}
