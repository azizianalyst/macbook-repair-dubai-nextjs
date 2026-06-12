"use client";
import DevicePageTemplate from "@/components/blocks/DevicePageTemplate";

export default function IMacLogicBoardRepair() {
  return (
    <DevicePageTemplate
      family="imac"
      seoTitle="iMac Logic Board Repair Dubai - From AED 1,000 | Component-Level | Call 055 741 3706"
      seoDescription={`iMac logic board repair Dubai. Component-level rework on 27" Intel and 24" M-series. Power delivery, GPU, T2 chip, SoC limits explained. From AED 1,000.`}
      path="/imac-logic-board-repair-dubai"
      eyebrow="iMac logic board repair"
      h1="iMac Logic Board Repair Dubai"
      subtitle="Component-level rework where it's possible, board swap where it isn't. Power delivery, GPU failure, T2 chip lockup. From AED 1,000, complex jobs to AED 2,500."
      startingPrice={1000}
      timeline="3-5 days"
      whatsappPrefill="Hi, my iMac won't behave properly - symptoms:"
      technician={{ name: "Mohammed", years: 14, specialisation: "Apple board-level micro-soldering" }}
      serviceName="iMac Logic Board Repair"
      pricingRows={[
        { model: `iMac 27" Intel (2017-2020) - power circuit`, price: 1300, timeline: "3-4 days" },
        { model: `iMac 27" Intel (2017-2020) - GPU rework`,    price: 1950, timeline: "4-5 days" },
        { model: `iMac 27" Intel (2017-2020) - full board`,    price: 3250, timeline: "5-7 days" },
        { model: `iMac 24" M1 / M3 / M4 - port + power`,        price: 1560, timeline: "3-4 days" },
        { model: `iMac 24" M-series - SoC fault`,               price: 3250, timeline: "5-7 days" },
        { model: `iMac Pro 27" (2017) - board work`,            price: 3250, timeline: "5-7 days" },
      ]}
      pricingCaption="Component-level rework where SoC and PMIC are healthy. SoC failure on M-series often means a full board swap - we'll tell you upfront."
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            iMac logic boards fail in three patterns: <strong>power delivery</strong> (no boot, fans only), <strong>GPU failure</strong> (boots to a black or distorted screen), and <strong>T2 or SoC lockup</strong> (chime, backlight, but no display handoff). Each has a different fix and a different price.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            On 2017-2020 27" Intel iMacs we work at component level - replacing the failed PMIC, MOSFET, capacitor or buck converter on the board itself. That's a 3-5 day job and saves you AED 1,950+ versus a full board swap. GPU rework on the discrete AMD Radeon Pro chip is also viable in many cases.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            On 24" M-series iMacs the situation is harder. The SoC integrates CPU, GPU, RAM and Neural Engine on a single die. <strong>If the SoC dies, the board is dead.</strong> No micro-soldering can recover it. The realistic fixes are around the SoC: power delivery, ports, T2 secure subsystem on early Intel models. We'll always tell you which side of that line your fault sits on, and refund the diagnostic if a board swap is the only path and you'd rather replace the iMac.
          </p>
        </>
      }
      problems={[
        { title: "No power, no chime, no fan", body: "PMIC or input-side fault. Common on 2017-2019 27\" iMacs after a power surge or PSU failure. Component-level rework AED 1,300-1,950." },
        { title: "Fan spins, no display", body: "Boot completes but display handoff fails - usually GPU on Intel 27\" iMacs (Radeon Pro 575/580). Reflow rarely lasts; we replace the GPU itself with reballed stock. AED 1,950." },
        { title: "Three beeps at startup", body: "RAM detection failure. On 27\" Intel models RAM is user-replaceable from the rear hatch - we test stick-by-stick and reseat. If the RAM controller on the board has failed, board work needed." },
        { title: "T2 chip lockup (Intel 2018+)", body: "iMac chimes, fans run, backlight comes on, then nothing - T2 secure subsystem fault. Specialised JTAG repair, AED 2,340. Data preserved." },
        { title: "USB-C / Thunderbolt port dead", body: "PD controller or retimer fault. Component-level fix AED 780-1,170 depending on which port and which controller chip." },
        { title: "Fan running at 100% from boot", body: "Sensor or SMC fault on Intel iMacs; thermal sensor fault on M-series. Usually a board-level fix, sometimes a reseat. Diagnosed first." },
      ]}
      steps={[
        { title: "WhatsApp the symptoms", body: "Tell us exactly what happens - chime, fan, screen. We give a likely cause and a price range before pickup." },
        { title: "Free pickup", body: "Driver collects, soft-padded box. Dubai mainland, no charge." },
        { title: "Diagnosis (24 hours)", body: "Power-rail check, scope on the relevant lines, identify the failed component. Open quote, no work without sign-off." },
        { title: "Component-level rework", body: "Failed chip removed under a microscope, pads cleaned, replacement reballed and placed. IR rework station, controlled thermal profile." },
        { title: "Bench burn-in 48 hr", body: "Stress test under load - CPU, GPU, ports, sensors. Catches intermittents before delivery." },
        { title: "Free delivery + warranty card", body: "Back to you with a written 12-month warranty and a photo log of the work done." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Covers the specific repair performed and adjacent rails on the same circuit.",
        "Excludes new failures elsewhere on the board (separate fault).",
        "Free re-work if the same fault returns within 12 months.",
      ]}
      comparisonRows={[
        ["Starting price",          "AED 1,300",                          "AED 4,500+ (whole-board swap)"],
        ["Component-level option",  "Yes - saves the original board",     "No - board-swap only"],
        ["GPU rework (Intel)",      "AED 1,950 with reballed chip",       "Not offered - board swap only"],
        ["Diagnostic fee",          "Free - refunded if you don't proceed", "AED 250-400 typical"],
        ["Lead time",               "3-5 days standard",                  "1-2 weeks"],
        ["Data on the SSD",         "Untouched on Intel; T2 paired carefully", "Often unit replacement"],
        ["Warranty",                "12 months written, dated",             "12 months"],
      ]}
      faqs={[
        { q: `Why is component-level repair cheaper than a board swap?`, a: `Because we replace the actual failed part - a USD 5 chip, USD 30 GPU, USD 8 PMIC - instead of the entire USD 800+ logic board. The labour is high (microscope, hot-air station, JTAG) but it still works out at half to a third of board-swap pricing.` },
        { q: "Can you fix any iMac logic board?", a: "No, and we're honest about that. On M-series iMacs (24\" M1/M3/M4) the SoC integrates CPU, GPU and RAM on one die. If the SoC fails, no micro-soldering recovers it. We'll diagnose, tell you, and not charge for the diagnosis." },
        { q: `What's the GPU failure on 27" 2017-2020 iMacs?`, a: "Radeon Pro 575/580 chips on those models have a known fragile solder bond - Apple even ran a service programme for some serials. We replace the GPU with a reballed unit, full reflow profile. Lasts as long as a new board." },
        { q: "Will my data be safe during board work?", a: "On 27\" Intel iMacs the SSD is a separate blade - your data is untouched. On T2-equipped models (2018+ Intel and iMac Pro) the SSD is encrypted with the board's secure key, so we have to keep the original board paired to the original SSD. We document this in the work log." },
        { q: "Why does T2 chip work cost more?", a: "T2 repair needs JTAG hardware, a paired backup of the secure enclave, and a much slower diagnostic process. Done wrong, the SSD becomes unreadable forever. The AED 1,800 reflects the time and the equipment, not arbitrary mark-up." },
        { q: "Can you fix an iMac that was already worked on by someone else?", a: "Yes - we see plenty of botched repairs. Diagnostic still free, but we'll document any pre-existing damage (lifted pads, missing components, wrong solder) before quoting. Sometimes the previous attempt limits what's recoverable." },
        { q: "How long do component-level repairs last?", a: "When done with proper hot-air, controlled profiles and quality replacement parts: as long as the original board would have. We use reballed Apple-spec chips, not aftermarket. The 12-month warranty is paperwork - the actual lifespan is years." },
        { q: "Should I just buy a new iMac instead?", a: "Sometimes yes. If your 2017 iMac needs AED 2,500 of board work and a new screen, we'll tell you straight - a refurbished M3 24\" iMac is a better buy. Honest advice is the foundation of the workshop." },
      ]}
      reviewNames={["joseph manalili", "Shah nawaz", "Ali Hassan"]}
      relatedSlugs={[
        "/imac-screen-repair-dubai",
        "/imac-not-turning-on-dubai",
      ]}
    />
  );
}
