"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";
import { Link } from "@/lib/router-compat";
import { ProseSection, ModelNotes } from "@/components/blocks/ServiceExtraSections";
import { TEAM } from "@/content/site";

// Technician byline comes from the TEAM roster (TRUST-CLAIMS.md), never typed per page.
const TECH = TEAM.find((t) => t.name === "Shafiq")!;

export default function IPhoneWaterDamageRepair() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Water Damage Repair Dubai: No Fix, No Charge"
      seoDescription="Water-damaged iPhone? Switch it off, don't charge it, skip the rice. Free diagnosis, ultrasonic board cleaning and corrosion repair in Dubai. WhatsApp us now."
      path="/iphone-water-damage-repair-dubai"
      eyebrow="iPhone Water Damage Repair"
      h1="iPhone Water Damage Repair Dubai"
      subtitle="Pool, sea, shower or a spilled drink. Switch it off, don't charge it and skip the rice. Free diagnosis, ultrasonic board cleaning and corrosion repair at Dubai Media City."
      startingPrice={179}
      timeline="Same day · 1-3 days"
      whatsappPrefill="URGENT - iPhone water damage. Model + what liquid + when: "
      technician={{ name: TECH.name, years: TECH.years, specialisation: TECH.specialisation }}
      serviceName="iPhone Water Damage Repair Dubai"
      quickAnswer={{
        question: "How do you fix a water-damaged iPhone?",
        answer:
          "Switch it off, don't charge it and skip the rice. Water left inside corrodes the logic board, so the reliable fix is to open the phone, disconnect the battery, clean the board ultrasonically and replace corroded parts. Diagnosis at our Dubai Media City workshop is free, and the repair carries a 15-day written warranty.",
      }}
      takeaways={[
        "Power off and don't charge: current through a wet board is what turns a clean-up into a board repair.",
        "Apple advises against drying an iPhone in rice; small rice particles can damage it.",
        "Water resistance is tested in fresh water in a lab and fades with wear. Apple's warranty doesn't cover liquid damage.",
        "Salt water, pool water and sugary drinks corrode faster than fresh water, so sooner is better.",
      ]}
      pricingRows={[
        { model: "iPhone 6 / 7 / 8 / SE - clean only",           price: 179, timeline: "Same day" },
        { model: "iPhone X / XR / 11 - clean + light corrosion", price: 450, timeline: "1 day" },
        { model: "iPhone 12 / 13 - clean + component repair",    price: 550, timeline: "1-2 days" },
        { model: "iPhone 14 / 15 - clean + component repair",    price: 700, timeline: "2 days" },
        { model: "iPhone 16 / 17 / 18 Pro - clean + board work", price: 850, timeline: "2-3 days" },
        { model: "Sea water (any model) - extended treatment",   price: 950, timeline: "3 days" },
      ]}
      pricingCaption="No fix, no charge: if the phone can't be brought back, you pay nothing for the attempt. Every price is quoted in writing after the free diagnosis."
      intro={
        <>
          <p className="text-[17px] text-text leading-relaxed">
            iPhone water damage repair in Dubai is a race against corrosion, not against the water. Once liquid gets past the seals, the minerals, salt, chlorine or sugar it carried stay on the logic board after the water evaporates, and any current flowing through them, from the battery or a charger, eats connectors and components. That is why a phone that seems fine after a swim can fail weeks later.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mt-md">
            Bring it to Concord Tower, Dubai Media City, or book free pickup across Dubai mainland. We open the phone, disconnect the battery, inspect the board under a microscope, clean it ultrasonically and replace what has failed, with a written quote before any component work. If the phone can&apos;t be saved and you need the photos, see <Link to="/iphone-data-recovery-dubai" className="text-accent font-semibold hover:underline">iPhone data recovery</Link>.
          </p>
        </>
      }
      problems={[
        { title: "iPhone won't turn on after water damage", body: "Don't keep pressing or charging it. Usual causes are a shorted power line, a corroded battery connector or a failed charging circuit, confirmed under the microscope before any quote." },
        { title: "Keeps restarting after water damage", body: "Corrosion on a part the phone checks at start-up, often a sensor on the charging-port flex, or unstable power from a wet battery connector. Cleaning plus replacing that part usually ends the loop." },
        { title: "Black screen, but it rings or vibrates", body: "The display connector or the screen has taken water. Cleaning the connector sometimes restores the picture; otherwise the screen is replaced." },
        { title: "'Liquid Detected' when you plug in", body: "Unplug and let it dry. If the alert keeps coming back once the phone is dry, the port is corroded and needs cleaning or replacement." },
        { title: "Muffled speaker or microphone", body: "Water in the mesh often clears as it dries. If sound stays muffled or crackles after a day, the mesh or speaker is cleaned or replaced." },
        { title: "Fogged camera, dead Face ID, fast drain", body: "Moisture under the lens, a corroded Face ID flex, or corrosion leaking current overnight. Each starts with opening and cleaning the phone." },
      ]}
      sections={
        <>
          <ProseSection
            eyebrow="First hour"
            title="How to fix a water-damaged iPhone: what to do right now"
            sub="You can limit the damage at home. You can't clean the board at home."
          >
            <ol>
              <li><strong>Switch it off.</strong> If it still works, back up to iCloud over Wi-Fi first, then power off. If it&apos;s already off, leave it off.</li>
              <li><strong>Don&apos;t charge it</strong>, by cable or wireless, until it has been checked.</li>
              <li><strong>Dry the outside.</strong> Remove the case, wipe it with a lint-free cloth, then tap it gently with the port facing down to let water out.</li>
              <li><strong>No heat, no air blasts, no swabs.</strong> Skip hairdryers, compressed air and cotton buds in the port; Apple warns against all three.</li>
              <li><strong>Skip the rice.</strong> Apple advises against it because small rice particles can damage the phone, and rice can&apos;t pull water out from under the chips.</li>
              <li><strong>Bring it in soon</strong>, even if it seems to work. Corrosion continues after the phone dries.</li>
            </ol>
            <p>
              A splash of sea water or a drink on a sealed, water-resistant iPhone (iPhone 7 or later) is different: Apple&apos;s guidance is to rinse the outside with tap water and dry it. A phone that went under, or a phone with a cracked screen or back, needs opening.
            </p>
          </ProseSection>

          <ProseSection eyebrow="Honest answer" title="Can a water-damaged iPhone be fixed?">
            <p>
              Often, yes, but nobody can promise before opening it. The outcome depends on what the liquid was, how long the phone stayed on or was charged while wet, and which parts corrosion has reached. A phone that won&apos;t turn on after water damage may need only a cleaned battery connector, or it may need a failed power component replaced by <Link to="/iphone-logic-board-repair-dubai">board-level repair</Link>.
            </p>
            <p>
              What we do promise: a free diagnosis, a written quote before any component work, and no charge if we can&apos;t fix it.
            </p>
          </ProseSection>

          <ProseSection eyebrow="Indicator and warranty" title="iPhone water damage indicator, warranty and AppleCare+">
            <p>
              Every iPhone has liquid contact indicators that turn red when wet. On models with a SIM tray, one is visible inside the SIM slot with a torch. eSIM-only models, such as the iPhone Air and the UAE iPhone 18 Pro, have no tray, so the indicators only show once the phone is opened.
            </p>
            <p>
              Apple&apos;s one-year limited warranty does not cover liquid damage, and Apple notes that splash and water resistance can decrease with normal wear. AppleCare+ covers accidental damage, including liquid, for a service fee, so check Settings &gt; General &gt; AppleCare &amp; Warranty before paying for a repair.
            </p>
          </ProseSection>

          <ModelNotes
            title="iPhone water damage by model"
            sub="Water-resistance ratings are measured in fresh water, in a lab. Pool chlorine, salt, soap and hot water are outside that test."
            items={[
              {
                title: "iPhone 6 and 6s water damage",
                body: "No official water-resistance rating, so any real soaking reaches the board. Treat every spill as urgent and don't charge the phone.",
                prefill: "Hi, iPhone 6 / 6s water damage. What liquid + when: ",
              },
              {
                title: "iPhone 7 water damage (also 8, X, XR, SE)",
                body: "IP67: tested to 1 metre for 30 minutes. Seals age, and a pool dive or sea swim goes beyond what the rating promises. On older phones, check the SIM-slot indicator.",
                prefill: "Hi, iPhone 7 water damage repair please. Model + what liquid + when: ",
              },
              {
                title: "iPhone 11 water damage (also XS)",
                body: "IP68: 2 metres for the XS and 11, 4 metres for the 11 Pro, for 30 minutes. It often shows as a muffled speaker, a 'Liquid Detected' alert or a phone that won't charge.",
                prefill: "Hi, iPhone 11 water damage. Model + symptom: ",
              },
              {
                title: "iPhone 12 to iPhone 16",
                body: "IP68 to 6 metres for 30 minutes. Any earlier screen, battery or back-glass repair weakens the seals, so treat a repaired phone as splash-resistant only.",
                prefill: "Hi, iPhone 12-16 water damage. Model + what liquid + when: ",
              },
              {
                title: "iPhone 17, 17 Pro and iPhone Air",
                body: "IP68 to 6 metres for 30 minutes, the same rating as the 12 to 16. The iPhone Air is eSIM-only, so there is no SIM tray to check with a torch. After any repair that opens the phone, treat it as splash-resistant only.",
                prefill: "Hi, iPhone 17 / iPhone Air water damage. Model + what liquid + when: ",
              },
              {
                title: "iPhone 18 Pro and 18 Pro Max",
                body: "eSIM-only in the UAE, so there's no SIM tray to check. iFixit found the display frame can lift during screen removal, which matters for resealing after any opening.",
                prefill: "Hi, iPhone 18 Pro water damage. Model + what liquid + when: ",
              },
            ]}
          />
        </>
      }
      steps={[
        { title: "Power off, don't charge, WhatsApp us", body: "Send the model, the liquid and when it happened. Outside opening hours, message anyway and we arrange drop-off or pickup." },
        { title: "Free diagnosis", body: "Battery disconnected first to stop further corrosion; the board is inspected and photographed under a microscope." },
        { title: "Ultrasonic cleaning", body: "The board is cleaned in an isopropyl ultrasonic bath to lift residue from under chips and inside connectors. Salt-water phones get an extra pre-clean." },
        { title: "Component repair after your OK", body: "Corroded or shorted parts are replaced by micro-soldering once you approve the written quote." },
        { title: "Reassembly and full test", body: "Screen, cameras, Face ID or Touch ID, speakers, microphones, charging, Wi-Fi and cellular checked before handover." },
        { title: "Collect with a written warranty", body: "15 days on the repair. No fix, no charge." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Covered for 15 days: the cleaning and the components replaced, if the same fault returns.",
        "Not covered: new liquid exposure, or corrosion elsewhere on the board that appears later. Liquid damage can keep developing after a repair, which is why this warranty is shorter than our hardware warranty.",
        "No fix, no charge: if we can't bring the phone back, you pay nothing for the attempt.",
      ]}
      comparisonRows={[
        ["Liquid damage under the standard warranty", "Repaired as a paid job, no fix no charge",        "Not covered by Apple's one-year limited warranty"],
        ["Approach",                                  "Open, clean and repair your own board",           "Service quote after inspection"],
        ["'Other damage' estimate, iPhone 17",        "Quote on WhatsApp",                               "Apple lists AED 2,639, excl. VAT (Sep 2026)"],
        ["'Other damage' estimate, iPhone 18 Pro",    "Quote on WhatsApp",                               "Apple lists AED 3,279, excl. VAT (Sep 2026)"],
        ["Your data",                                 "Stays on your own board if the board survives",   "Back up first; follow Apple's service advice"],
        ["Free pickup in Dubai",                      "Yes, Dubai mainland",                             "No"],
        ["Warranty on the repair",                    "15 days written",                                 "Apple's service warranty"],
      ]}
      faqs={[
        { q: "How do I fix a water-damaged iPhone at home?", a: "You can limit the damage, not repair it. Switch it off, don't charge it, tap water out with the port facing down and leave it somewhere dry with airflow. Skip rice and heat. Water that got inside keeps corroding the board, so have it opened and cleaned soon, even if it seems to work." },
        { q: "Can a water-damaged iPhone be fixed?", a: "Often, yes, but nobody can promise before opening it. It depends on the liquid, how long the phone stayed on or charged while wet, and what corrosion reached. Diagnosis is free, you get a written quote before component work, and if we can't fix it you pay nothing." },
        { q: "Why does my iPhone keep restarting after water damage?", a: "A restart loop after a spill usually means corrosion on a part the phone checks at start-up, such as a sensor on the charging-port flex, or unstable power from a wet battery connector. Cleaning the board and replacing the corroded flex or component normally stops it." },
        { q: "Does Apple's warranty cover iPhone water damage?", a: "No. Apple's one-year limited warranty excludes liquid damage, and Apple notes water resistance can decrease with normal wear. AppleCare+ does cover accidental damage, including liquid, for a service fee, so check Settings > General > AppleCare & Warranty before paying for a repair." },
        { q: "Should I put my wet iPhone in rice?", a: "No. Apple advises against it because small rice particles can damage the phone, and rice can't draw water from under the chips anyway. Leave it switched off somewhere dry with airflow and bring it in." },
        { q: "How much does iPhone water damage repair cost in Dubai?", a: "It depends on the model and how far corrosion has spread: a clean-only job costs least, component replacement more, and salt water usually needs the most work. Diagnosis is free, you approve a written quote first, and no fix means no charge. WhatsApp your model and what happened." },
      ]}
      reviewNames={["Janna Nurahmetova", "Daniel Layzell", "Yuki Koga", "Knight A. Shakir"]}
      relatedSlugs={["/iphone-data-recovery-dubai", "/iphone-charging-port-repair-dubai", "/iphone-camera-repair-dubai"]}
      relatedExtra={[
        { label: "iPhone logic board repair", href: "/iphone-logic-board-repair-dubai", description: "When corrosion has killed a chip: component-level micro-soldering." },
        { label: "Water damage: the first 24 hours", href: "/blog/iphone-water-damage-action-plan", description: "A step-by-step action plan for a wet iPhone." },
      ]}
    />
  );
}
