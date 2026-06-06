"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneChargingPortRepair() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Charging Port Repair Dubai - Lightning & USB-C | From AED 250"
      seoDescription="iPhone charging port repair Dubai from AED 250. Lightning & USB-C, bent pins, water damage, intermittent charge. iPhone 6 to 17. Same-day. WhatsApp 055 741 3706."
      path="/iphone-charging-port-repair-dubai"
      eyebrow="iPhone Charging Port Repair"
      h1="iPhone Charging Port Repair Dubai - USB-C & Lightning"
      subtitle="Phone won't charge? Cable falls out? Bent pins? Lightning (pre-iPhone 15) and USB-C (15+). Same-day port flex swap, 90-day warranty."
      startingPrice={250}
      timeline="Same day · 1 day"
      whatsappPrefill="Hi, iPhone charging port repair quote please. Model: "
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "Charging port & Face ID flex" }}
      serviceName="iPhone Charging Port Repair"
      pricingRows={[
        { model: "iPhone 6 / 6s / 7 / 8 / SE (Lightning)",  price: 250, timeline: "Same day" },
        { model: "iPhone X / XR / XS / 11 (Lightning)",     price: 300, timeline: "Same day" },
        { model: "iPhone 12 / 13 (Lightning)",              price: 350, timeline: "Same day" },
        { model: "iPhone 14 / 14 Pro (Lightning)",          price: 400, timeline: "Same day" },
        { model: "iPhone 15 / 15 Pro (USB-C)",              price: 450, timeline: "Same day · 1 day" },
        { model: "iPhone 16 / 16 Pro / 16e (USB-C)",        price: 500, timeline: "Same day · 1 day" },
        { model: "iPhone 17 line (USB-C)",                  price: 550, timeline: "1 day" },
      ]}
      pricingCaption="Pro Max sizes add AED 50. Charging IC repair (logic board) AED 450 separately if port swap doesn't restore charging."
      intro={
        <>
          <p className="text-[17px] text-on-primary leading-relaxed">
            iPhone charging port repair in Dubai starts at AED 250 and finishes the same day on most Lightning models. The split between Lightning and USB-C matters: every iPhone before the iPhone 15 (so iPhone 6 through iPhone 14 Pro Max) uses the Apple Lightning connector - a small, simple flex cable that's straightforward to swap. From the iPhone 15 forward, Apple moved to USB-C - a different mechanical assembly with a separate FPC, four extra solder points, and tighter bond tolerance. The workshop has been fitting Lightning ports since 2014 and USB-C ports since the iPhone 15 launched in September 2023.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed mt-md">
            Two confusions to clear up. First, "the port" on every iPhone since the iPhone 7 is on a flex cable - not soldered to the logic board - so a port swap is a flex swap, no micro-soldering required. Second, on the iPhone X and later, the same flex carries the Face ID home-button line, the microphone, and the antenna feed-line. A botched port repair can break Face ID. The workshop tests Face ID before and after every port job and shows the proximity-sensor calibration on the bench.
          </p>
        </>
      }
      problems={[
        { title: "Cable falls out unless held at an angle", body: "Worn pins inside the port - most common after 18+ months of daily charging. Port-flex swap restores secure fit. AED 250 to AED 550 depending on model." },
        { title: "Phone says 'Liquid Detected in Lightning Connector'", body: "Sensor inside the port detects moisture and disables fast charging. Sometimes the sensor fails after a previous spill - replacement port flex restores normal charging without the warning. AED 250 to AED 400." },
        { title: "Bent pins inside the port", body: "Visible damage from forcing a USB-C plug into a Lightning port (or vice versa). Port flex must be replaced - the pins are not individually serviceable. AED 250 to AED 550, same day." },
        { title: "Charges only on certain cables", body: "Some pins still functional - phone negotiates 5W charging with the working pins. Full port swap restores 20W fast charge. AED 250 to AED 550." },
        { title: "iPhone 15/16/17 USB-C wobbles in port", body: "USB-C connectors are physically larger and the FPC bond is tighter. A drop on a connected cable can shear the bond. Port flex replacement, AED 450 to AED 550." },
        { title: "Phone charges wirelessly but not via cable", body: "Cable port is dead but the wireless charging coil (separate component) is fine. Port flex swap restores wired charging. Wireless coil itself is rarely the issue when only wired charging is broken." },
        { title: "Microphone doesn't work during calls (callee can't hear you)", body: "On iPhone 7 and later, the bottom microphone shares the port flex. Port replacement restores microphone. Often a 2-in-1 ticket - customer comes in for charging, leaves with mic fixed too." },
        { title: "Charging IC failure on the logic board", body: "Port flex tested OK but phone still won't charge. The Tristar (Lightning) or VL161 (USB-C) IC on the logic board is failing. Component-level repair, AED 450, 1 day. Free diagnosis to confirm." },
        { title: "iPhone 17 Air port hot during charging", body: "Air's slim chassis runs warmer during 20W charging. Apple's design - not a fault. Worth checking only if temperatures exceed 42 °C (test on the bench)." },
        { title: "Port works but phone reports 'Not Charging'", body: "Software bug or genuine power-delivery negotiation failure. iOS reset (force restart, then DFU restore) fixes 30% of cases. Hardware diagnosis confirms whether port flex or charging IC needs work." },
      ]}
      steps={[
        { title: "WhatsApp model + symptom", body: "Send the model and describe the issue (cable falls out / dead / liquid warning). Quote back in 4 minutes." },
        { title: "Free pickup or walk in", body: "Pickup anywhere on Dubai mainland or walk into the workshop. On-the-spot port test takes 5 minutes." },
        { title: "Port-flex swap on the bench", body: "Screen lifted at 70 °C, battery disconnected, port flex screws removed (taptic engine and speaker first), port swapped, all connectors reseated." },
        { title: "Face ID and mic verification", body: "Face ID re-tested with proximity sensor. Bottom microphone tested on a recorded call. Antenna feed-line continuity checked with multimeter." },
        { title: "Charge test from 0% to 20%", body: "Phone charged on a 20W Apple charger. Negotiation verified. Heat profile checked. No throttling, no warnings." },
        { title: "Free delivery + 90-day warranty", body: "Same day for Lightning, same/next day for USB-C. Warranty card includes port batch and antenna continuity test result." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covered: port flex defects, microphone failure caused by the part, antenna signal loss tied to the flex.",
        "Not covered: liquid damage post-repair, new physical damage, charging IC failure unrelated to port flex.",
        "If charging IC turns out to be the cause after a port swap, the port flex price is credited toward the IC repair.",
      ]}
      comparisonRows={[
        ["Repair window",                "Same day for Lightning",               "5 to 10 business days, mail-in"],
        ["iPhone 11 port",               "AED 300",                              "Whole-unit swap AED 1,400+"],
        ["iPhone 14 Pro port",           "AED 400",                              "Whole-unit swap AED 1,800+"],
        ["iPhone 16 Pro USB-C port",     "AED 500",                              "Whole-unit swap AED 2,100+"],
        ["Component-level board repair", "Yes - AED 450 if needed",              "No, board swap only"],
        ["Free pickup in Dubai",         "Yes",                                  "No"],
        ["Face ID preserved",            "Yes - tested before/after",            "Yes"],
        ["Vintage models",               "Yes - back to iPhone 6",               "Refused"],
        ["Warranty",                     "90 days written",                      "90 days"],
      ]}
      faqs={[
        { q: "How much does iPhone charging port repair cost in Dubai?", a: "From AED 250 for iPhone 6 through 8 and SE. AED 300 to AED 400 for X through 14 Pro. AED 450 to AED 550 for iPhone 15, 16, 17 (USB-C). Pro Max sizes add AED 50. If the port flex tests fine but the phone still won't charge, the issue is the charging IC on the logic board - AED 450 component-level repair, 1 day." },
        { q: "Why won't my iPhone charge?", a: "Most common: port full of pocket lint (try a wooden toothpick first). Next: worn or bent pins inside the port - port flex swap. Next: charging IC on the logic board has failed - board-level repair. Free diagnosis confirms which one in 5 minutes." },
        { q: "How long does iPhone charging port repair take?", a: "Same day on Lightning models - 60 to 90 minutes on the bench. iPhone 15, 16 USB-C is same day if stock is on the shelf, otherwise 1 day. iPhone 17 line is 1 day because the USB-C flex is special-ordered." },
        { q: "Will my microphone still work after port repair?", a: "Yes - better than before in most cases. The bottom microphone shares the same flex as the charging port from iPhone 7 onward. A worn or damaged port flex often means a damaged microphone too. Port swap fixes both." },
        { q: "What about the 'Liquid Detected' warning?", a: "iOS 14+ shows this warning when the port sensor detects moisture. Drying the port for 24 hours clears it 60% of the time. If the warning persists with a dry port, the sensor itself has failed - port flex replacement removes it. AED 250 to AED 550." },
        { q: "Can I just clean the port myself?", a: "Yes - try a wooden toothpick or dry compressed air first. Never use a metal pin (you'll bend the contacts). Never use water or alcohol inside the port. If gentle cleaning doesn't help within 10 minutes, bring it in." },
        { q: "Does the iPhone 15 USB-C port carry power and data the same way as Lightning?", a: "Yes for power (20W standard, 27W on Pro models with PD 3.0). Data is faster - USB 3.2 Gen 2 on iPhone 15 Pro and 16 Pro (10 Gbps), USB 2.0 on iPhone 15 / 15 Plus / 16 / 16 Plus (480 Mbps). The workshop replacement port matches the original spec." },
        { q: "Will replacing the port affect Face ID?", a: "Only if the repair is done badly. The Face ID home-button signal line runs across the port flex - disconnecting it cleanly is critical. The workshop tests Face ID before and after every port repair. If Face ID was working before, it's working after." },
        { q: "What if my phone still doesn't charge after the port is replaced?", a: "Then the issue is the charging IC on the logic board - Tristar U2 (Lightning) or VL161 (USB-C). Component-level micro-soldering, AED 450, 1 day. The port flex price is credited toward this repair so the customer pays AED 450 total, not both." },
        { q: "Do you fix charging issues on iPad with USB-C?", a: "Yes - iPad Pro, Air, and mini USB-C port repair from AED 350. Same workshop, same Shafiq, same warranty. WhatsApp the iPad model for a quote." },
      ]}
      reviewNames={["Saeed Alam", "Tim Quick", "Wellington Academy"]}
      relatedSlugs={["/iphone-water-damage-repair-dubai", "/iphone-battery-replacement-dubai", "/iphone-face-id-repair-dubai"]}
    />
  );
}
