"use client";
import DevicePageTemplate from "@/components/blocks/DevicePageTemplate";

export default function IPadWaterDamageRepair() {
  return (
    <DevicePageTemplate
      family="ipad"
      seoTitle="iPad Water Damage Repair Dubai - Same-Day Diagnosis | From AED 450"
      seoDescription="iPad water damage repair Dubai. Ultrasonic cleaning, board rework, battery and screen replacement when needed. Honest success-rate estimate. Call 055 741 3706."
      path="/ipad-water-damage-repair-dubai"
      eyebrow="iPad water damage"
      h1="iPad Water Damage Repair Dubai"
      subtitle="Spilled drink, pool dunk, beach day gone wrong. iPads usually recover better than iPhones - there's more space inside and the ports are accessible. Bring it in within 24 hours."
      startingPrice={450}
      timeline="1-3 days"
      whatsappPrefill="Hi, my iPad got wet - model:"
      technician={{ name: "Shafeeq", years: 12, specialisation: "iPad board-level water damage" }}
      serviceName="iPad Water Damage Repair"
      pricingRows={[
        { model: "Diagnosis + ultrasonic clean (no parts)",   price: 450,  timeline: "1 day" },
        { model: "Clean + battery replacement",               price: 800,  timeline: "1-2 days" },
        { model: "Clean + screen replacement",                price: 950,  timeline: "1-2 days" },
        { model: "Clean + charging port",                     price: 750,  timeline: "1 day" },
        { model: "Board-level component repair (typical)",    price: 1200, timeline: "2-3 days" },
        { model: "Major board rework (Pro, complex)",         price: 1800, timeline: "3 days" },
      ]}
      pricingCaption="Final price quoted only after the ultrasonic clean reveals the actual damage. No work done without your approval."
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            iPads are <strong>not water resistant</strong>. There is no IP rating on iPad, iPad Mini, iPad Air or any iPad Pro - only the very latest accessories. The good news: there's more interior space than an iPhone, the ports are easier to flush, and the success rate when treated within 24 hours is around <strong>80%</strong>. After 72 hours and corrosion sets in, it drops to about 50%.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Stop charging it now. Don't put it in rice - that does nothing for the corrosion already starting on the board. WhatsApp us, free same-day pickup, and we have it in the ultrasonic bath the same evening.
          </p>
        </>
      }
      problems={[
        { title: "iPad won't turn on after a spill", body: "Most common case. Either the battery protection has triggered (recoverable) or short on the main board (board-level repair). Diagnosis after clean." },
        { title: "Screen has water marks behind the glass", body: "Liquid is between the LCD layers. Cleaning won't remove it - display assembly replacement is the only fix. Often paired with a board clean." },
        { title: "Touch ghost-typing or unresponsive", body: "Moisture trapped under the digitiser. Screen out, ultrasonic clean, often the original screen still works after." },
        { title: "Charging port reads water present", body: "iPad detects moisture and refuses to charge. Port flush and dry. If port is corroded, replacement at AED 400 added." },
        { title: "Speakers crackle or are muffled", body: "Water in the speaker chambers. Mesh cleaned in ultrasonic, often restored without speaker swap. Otherwise AED 250 for a new speaker module." },
        { title: "Pool / sea water exposure", body: "Salt and chlorine are far worse than fresh water - corrosion starts within hours. Bring it in same day. We have higher success on freshwater spills than salt." },
      ]}
      steps={[
        { title: "Stop using it now", body: "Don't charge it, don't try to dry it with a hairdryer. Power off if you can. WhatsApp us a photo." },
        { title: "Free same-day pickup", body: "Time matters. Driver collects within hours across Dubai mainland." },
        { title: "Strip & visual inspection", body: "Battery disconnected first. Board pulled, photographed, water-damage indicators checked. You get the photos." },
        { title: "Ultrasonic bath", body: "Board cleaned in 99.9% isopropyl in a heated ultrasonic tank. Removes corrosion before it eats traces." },
        { title: "Component test & quote", body: "Board powered up under microscope. Failed components identified. Final quote sent for approval." },
        { title: "Repair + 30-day warranty", body: "Replace what's broken, reassemble with fresh adhesive, full function test. Delivered with warranty card." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Covers parts and labour on the components we replaced or repaired.",
        "Does not cover delayed-onset corrosion in untouched areas - water damage can re-emerge.",
        "Honest disclosure: liquid damage warranty is shorter than a clean repair because the device's long-term reliability cannot be guaranteed.",
      ]}
      comparisonRows={[
        ["Starting price",        "AED 450 (clean + diagnosis)",       "Often refused - quoted as whole-unit swap"],
        ["Same-day pickup",       "Yes - speed matters for water",     "Drop in yourself"],
        ["Board-level repair",    "Yes, microscope + ultrasonic",      "No - board swap or unit swap only"],
        ["Honest success rate",   "80% within 24h, 50% after 72h",     "Often declined as 'beyond economical repair'"],
        ["Data recovery first",   "Always - data attempt before parts", "Whole-unit swap means data lost"],
        ["Salt water cases",      "Handled - corrosion-aware process", "Often refused"],
        ["Warranty",              "30 days on the work performed",     "Limited / often none on liquid"],
      ]}
      faqs={[
        { q: "How fast do I need to bring my wet iPad in?", a: "Within 24 hours for the best result. Corrosion is silent - your iPad might still work the day of the spill, then die three days later as traces eat through. Faster cleaning, higher recovery rate. We pick up same day." },
        { q: "Should I put the iPad in rice?", a: "No. Rice absorbs surface moisture but doesn't touch the corrosion already starting on the logic board. By the time you fish it out three days later, the damage is done. Ultrasonic cleaning is the only real treatment." },
        { q: "Is iPad water damage cheaper than iPhone?", a: "Usually yes. There's more interior space, the components are spread out, and the ports are easier to access. Typical iPad water repair runs AED 450-1,200 versus AED 600-1,800 for iPhones." },
        { q: "What's the difference between fresh water and salt water?", a: "Salt water is much worse. Salt and chlorine accelerate corrosion - within hours, not days. Pool water is similar. We handle both, but the success rate on Gulf-water cases is lower than on a glass of water spilled at the desk." },
        { q: "Can you save my data?", a: "Often yes. If the storage chip survived, we can extract data even if the iPad doesn't fully recover. Data attempt comes first - before any parts are bought." },
        { q: "Are iPads water resistant at all?", a: "No iPad has an IP rating. Apple does not advertise water resistance on any iPad model. Splash protection is incidental - not designed-in." },
        { q: "What if the iPad is beyond repair?", a: "We tell you, with photos showing why. Diagnosis fee (AED 450) is the only charge. We can extract data to a USB drive at no extra cost if storage survived. No fix, no further charge." },
        { q: "Why is the warranty shorter on water repairs?", a: "Honest answer: liquid damage can have delayed effects in areas we didn't open. We warranty the work we did for 30 days, but cannot guarantee the device's long-term reliability. Most water repairs we've done are still running years later - but we won't promise what we can't control." },
      ]}
      reviewNames={["Janna Nurahmetova", "Yuki Koga", "Daniel Layzell", "Knight A. Shakir", "Daiana Dimitrova", "Anatoliy Tarasenko"]}
      relatedSlugs={[
        "/ipad-screen-repair-dubai",
        "/ipad-battery-replacement-dubai",
        "/ipad-charging-port-repair-dubai",
      ]}
      honestyCallout={
        <ul className="space-y-sm text-[15px] text-text">
          <li>• <strong>No iPad is waterproof.</strong> Not iPad, not iPad Pro, not iPad Air. Apple makes no IP claim on any iPad model.</li>
          <li>• <strong>Time matters more than money.</strong> 80% success within 24 hours. 50% after 72 hours. By day five, mostly data-recovery cases.</li>
          <li>• <strong>Don't charge it.</strong> Powering a wet board accelerates corrosion and can short components that would otherwise have survived.</li>
          <li>• <strong>We may decline.</strong> If the diagnosis shows the cost approaches the iPad's value, we'll say so and refund minus the diagnosis fee.</li>
        </ul>
      }
    />
  );
}
