"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneWaterDamageRepair() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Water Damage Repair Dubai - Ultrasonic Clean | From AED 350"
      seoDescription="iPhone water damage repair Dubai from AED 350. Ultrasonic clean, corrosion removal, 24-hour window matters. iPhone 6 to 17. WhatsApp 055 741 3706 now."
      path="/iphone-water-damage-repair-dubai"
      eyebrow="iPhone Water Damage Repair"
      h1="iPhone Water Damage Repair Dubai"
      subtitle="IP68 isn't bulletproof. Pool, sea, coffee, toilet. The 24-hour window matters more than the water type. Ultrasonic clean, corrosion removal, sealed back-glass workaround."
      startingPrice={350}
      timeline="Same day · 1-3 days"
      whatsappPrefill="URGENT - iPhone water damage. Model + when it happened: "
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "Water damage & micro-soldering" }}
      serviceName="iPhone Water Damage Repair"
      pricingRows={[
        { model: "iPhone 6 / 7 / 8 / SE - clean only",      price: 350, timeline: "Same day" },
        { model: "iPhone X / XR / 11 - clean + light corrosion", price: 450, timeline: "1 day" },
        { model: "iPhone 12 / 13 - clean + IC reflow",      price: 550, timeline: "1-2 days" },
        { model: "iPhone 14 / 15 - clean + component replace", price: 700, timeline: "2 days" },
        { model: "iPhone 16 / 17 - clean + Apple Silicon BGA", price: 850, timeline: "2-3 days" },
        { model: "Sea-water (any model) - extended treatment",  price: 950, timeline: "3 days" },
      ]}
      pricingCaption="No-fix-no-charge applies. If the phone can't be saved, only the diagnostic AED 100 is charged for unrecoverable phones."
      intro={
        <>
          <p className="text-[17px] text-on-primary leading-relaxed">
            iPhone water damage repair in Dubai starts at AED 350 with the no-fix-no-charge guarantee - if the phone can't be saved, only the AED 100 diagnostic is charged. The single biggest factor in success is time. Within 4 hours of contact, success rate is around 90%. Within 24 hours, around 70%. Beyond 72 hours, corrosion has spread across the logic board and success drops below 30%. The workshop opens at 9 am Mon-Sat; outside hours WhatsApp the photo and the phone will be collected first thing.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed mt-md">
            IP68 (rated for 6m water for 30 minutes on iPhone 12+) is not a guarantee. Apple's small print specifies fresh water at room temperature, no soap, no pressure, no salt, and a fully sealed device. Beach water has salt and abrasive sand. Pool water has chlorine. Coffee has sugar. Wine has acid. Hot water vapourises and pushes past the silicone seals. Any drop or repair history breaks the IP68 rating entirely. The workshop sees IP68-rated phones with water damage every week. Do not rely on the rating once water has actually entered.
          </p>
        </>
      }
      problems={[
        { title: "Phone fell in the pool, screen now black", body: "Backlight short or display flex corroded. Same-day clean + flex inspection. AED 350 to AED 700 depending on model. Don't try to charge - that's how the logic board dies." },
        { title: "Coffee or juice spill - sticky residue inside", body: "Sugar conducts when wet. Ultrasonic bath in 99% isopropyl removes residue cleanly. AED 350 to AED 700 same day. Sweet drinks are worse than plain water." },
        { title: "Sea water - saltwater is the worst case", body: "Salt is a corrosive electrolyte. Even 30 seconds in the sea creates corrosion paths across PCB traces. Extended treatment with deionised water bath, ultrasonic clean, then isopropyl. AED 950, 3 days." },
        { title: "Phone says 'Liquid Detected in Lightning/USB-C Connector'", body: "Sensor inside the port detected moisture. Don't charge. Air-dry 24 hours, then the warning usually clears. If it persists or charging stays disabled, sensor itself is corroded - port flex swap, AED 250 to AED 550." },
        { title: "Speaker muffled after water", body: "Water inside the speaker mesh. Ultrasonic clean of the speaker module restores 95% of these - AED 200 standalone. If membrane is torn, speaker swap, AED 250 to AED 350." },
        { title: "Phone works but battery drains 50% overnight", body: "Parasitic current path from corrosion across the BMS. Ultrasonic clean + corrosion removal + battery replacement. AED 450 to AED 750." },
        { title: "Phone won't power on after spill", body: "Multiple possible failures - battery, charging IC, PMIC, Tristar. Free open-and-inspect diagnosis under microscope. Quote given before any work. No-fix-no-charge applies." },
        { title: "Camera fogged from the inside", body: "Moisture under the rear lens cover. Lens cover removal, internal dry-out, reseal. AED 250 to AED 400. If left, the lens stack rusts and the camera module needs full replacement." },
        { title: "Face ID stopped working after a spill", body: "Flood illuminator or IR camera water-damaged. Sometimes a clean restores it; sometimes the IR camera needs replacement (rare and difficult - read the Face ID page for the honest assessment)." },
        { title: "Phone bought used, suspected water damage history", body: "LCI (liquid contact indicator) inside the SIM tray turns red after water exposure. Free check on every walk-in. Helps decide whether to insure or trade in." },
      ]}
      steps={[
        { title: "Stop charging immediately + power off", body: "Charging a wet iPhone is the #1 cause of total loss. Hold power+volume to force off if needed. Place on a towel - never in rice (it absorbs moisture but pushes starch dust into the speaker grilles)." },
        { title: "WhatsApp now - even at 11 pm", body: "Photo of the phone + when and what type of water. Reply within 30 minutes to confirm collection. Workshop opens 9 am Mon-Sat; emergency drop-off can be arranged outside hours." },
        { title: "Open within 1 hour of arrival", body: "Battery disconnected to stop short circuits. Logic board removed. Photographed under microscope to document corrosion before any cleaning starts." },
        { title: "Ultrasonic cleaning bath", body: "Logic board placed in 99% isopropyl alcohol bath in an ultrasonic cleaner at 40kHz for 8 minutes. Removes water, residue, and surface corrosion without damaging components." },
        { title: "Component-level inspection + repair", body: "Each chip checked under 40x microscope. Corroded resistors, capacitors, or ICs reflowed or replaced. Quote given before component replacement begins." },
        { title: "Reassemble + 24-hour soak test", body: "Phone reassembled, charged on bench, soak-tested for 24 hours. All sensors verified (Face ID, cameras, ambient light, proximity, gyro, GPS)." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "Covered: cleaning quality, soldered components installed during the repair, recurrence of the same fault within 30 days.",
        "Not covered: new water exposure, latent corrosion that surfaces beyond 30 days (water damage can keep evolving), unrelated faults.",
        "Water damage repair carries a 30-day warranty (not 90 days like other repairs) because the long-term outcome depends on how much corrosion was inside before the repair.",
      ]}
      comparisonRows={[
        ["Apple's official position", "Whole-device swap - water damage not covered under warranty", "AED 1,400 to AED 2,800 service unit"],
        ["Workshop method",            "Open, ultrasonic clean, micro-solder",                       "Whole-device replacement"],
        ["Save your data?",            "Yes - original logic board kept",                            "No - service unit, data lost"],
        ["Save your IMEI?",            "Yes - original device kept",                                 "No - new IMEI on service unit"],
        ["Save your Face ID?",         "Yes - original sensors retained",                            "Yes - new device"],
        ["No-fix-no-charge",           "Yes - only AED 100 diagnostic",                              "No - full service price"],
        ["Time-sensitive (4-24h matters)", "Yes - emergency same-day handling",                      "Genius Bar appointment 1-3 days"],
        ["Warranty on repair",          "30 days written",                                           "90 days on service unit"],
      ]}
      faqs={[
        { q: "How much does iPhone water damage repair cost in Dubai?", a: "From AED 350 for a clean-only on older iPhones. AED 450 to AED 700 if light corrosion needs reflowing. AED 850 for iPhone 16/17 because the Apple Silicon BGA work is more complex. Sea water treatment is AED 950 across all models. No-fix-no-charge applies - only AED 100 diagnostic if the phone can't be saved." },
        { q: "How quickly should I bring my water-damaged iPhone in?", a: "Within 4 hours for the best outcome (90% success). Within 24 hours is good (70% success). After 72 hours success drops below 30% as corrosion spreads. WhatsApp the photo immediately even outside business hours - emergency same-day handling can be arranged." },
        { q: "Should I put my iPhone in rice?", a: "No. Rice absorbs ambient moisture but cannot reach water already inside the phone, and rice dust gets into the speaker grilles and Lightning/USB-C port. Best home action: power off immediately, do not charge, place on a towel, bring it to the workshop within 24 hours." },
        { q: "My iPhone is IP68-rated - why did it get water-damaged?", a: "IP68 is rated for fresh water at room temperature with the device fully sealed. The rating doesn't apply to: pool water (chlorine), sea water (salt + sand), hot water (vapourises past seals), soda or coffee (sugar/acid). The rating also degrades with every drop or repair. Apple does not honour warranty for water damage - the LCI inside the SIM tray confirms exposure." },
        { q: "What does the ultrasonic cleaning do?", a: "The logic board is placed in 99% isopropyl alcohol inside a 40kHz ultrasonic cleaner. Microscopic cavitation bubbles dislodge water, residue, and corrosion from under chip packages and inside connectors - places no manual cleaning can reach. 8 minutes is the standard cycle; sea-water cases get two cycles." },
        { q: "Will my data survive water damage repair?", a: "Yes in most cases - the workshop keeps the original logic board, so the storage chips and Secure Enclave stay intact. iCloud backup is still recommended before any repair, but in 80%+ of water-damage tickets the phone boots after cleaning and data is fully accessible." },
        { q: "Can you save a phone that fell in the sea?", a: "Often yes, if brought in fast. Sea-water treatment uses a deionised water rinse (to dissolve salt) before the isopropyl bath. Even a 30-second sea swim creates corrosion that's harder to remove than 30 minutes in fresh water. AED 950, 3 days, no-fix-no-charge." },
        { q: "What's the warranty on water damage repair?", a: "30 days, not the standard 90, because water damage keeps evolving - corrosion that wasn't visible during the repair can surface weeks later. The 30 days covers the workshop's cleaning quality and any soldered components installed. Beyond 30 days, the same phone may develop new faults from latent corrosion." },
        { q: "What about water damage on the speaker only?", a: "Speaker-only water damage from a beach day is common. Standalone speaker module clean (AED 200) restores most cases. If the membrane is torn, speaker swap is AED 250 to AED 350. Same day." },
        { q: "Can I keep using a phone that survived a spill?", a: "If it powers on and basic functions work, yes - but get it professionally opened and cleaned within a week. Internal corrosion continues to spread silently. A phone that survives a spill but isn't cleaned often fails 6 to 18 months later from accumulated corrosion." },
      ]}
      reviewNames={["Janna Nurahmetova", "Daniel Layzell", "Yuki Koga", "Knight A. Shakir"]}
      relatedSlugs={["/iphone-screen-repair-dubai", "/iphone-data-recovery-dubai", "/iphone-charging-port-repair-dubai"]}
    />
  );
}
