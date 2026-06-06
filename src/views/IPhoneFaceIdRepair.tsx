"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneFaceIdRepair() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Face ID Repair Dubai - Honest Success Rates | From AED 450"
      seoDescription="iPhone Face ID repair Dubai from AED 450. Sensor work where calibration allows. Apple Store can't repair Face ID - we sometimes can. Honest about limits."
      path="/iphone-face-id-repair-dubai"
      eyebrow="iPhone Face ID Repair"
      h1="iPhone Face ID Repair Dubai"
      subtitle="Face ID broken after a drop or screen swap? Apple Store policy is whole-device replacement. We can sometimes repair the dot projector or IR camera - honest about success rates per fault."
      startingPrice={450}
      timeline="1-3 days"
      whatsappPrefill="Face ID issue - model, what happened, error message: "
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "Face ID, dot projector & sensor calibration" }}
      serviceName="iPhone Face ID Repair"
      pricingRows={[
        { model: "Face ID diagnosis only (free if no fix possible)", price: 0,   timeline: "Same day" },
        { model: "Sensor stack transfer (after screen swap)",         price: 250, timeline: "Same day" },
        { model: "Flood illuminator replacement",                     price: 450, timeline: "1-2 days" },
        { model: "IR camera replacement (success ~50%)",              price: 800, timeline: "2-3 days" },
        { model: "Dot projector - limited success",                   price: 1200, timeline: "3 days" },
        { model: "Full TrueDepth assembly transfer (rare)",           price: 1500, timeline: "3 days" },
      ]}
      pricingCaption="No-fix-no-charge applies. Customer pays only on confirmed working Face ID. Honest success rates published below - no false promises."
      intro={
        <>
          <p className="text-[17px] text-on-primary leading-relaxed">
            iPhone Face ID repair in Dubai is the most over-promised and under-delivered repair in the industry. The honest reality: Apple designed Face ID to be paired between three components - the dot projector, the IR camera, and the device's Secure Enclave. The pairing happens once at the factory and cannot officially be re-done by anyone outside Apple. Apple Store's policy on Face ID failure is whole-device replacement - they don't repair Face ID at all. The workshop sometimes can, but success depends entirely on which component failed and which model the iPhone is. The workshop publishes real success rates rather than vague promises.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed mt-md">
            What works reliably: transferring the original sensor stack from a broken screen onto a new screen during a screen swap (this is "Face ID preservation" - 95% success rate). What works sometimes: replacing the flood illuminator alone (~70% success - easier because it's less tightly paired). What works rarely: replacing the IR camera (~50% - pairing tools have improved but not always succeed). What barely works: dot projector replacement (~30% - Apple binds this most tightly to the Secure Enclave). The workshop charges only when Face ID is confirmed working - no-fix-no-charge applies on every Face ID job.
          </p>
        </>
      }
      honestyCallout={
        <div className="text-[15px] text-on-primary leading-relaxed space-y-md">
          <p>
            <strong>Why Face ID is hard to repair:</strong> Apple's TrueDepth system has three optical components (flood illuminator, IR camera, dot projector) that are factory-calibrated and cryptographically paired with the Secure Enclave. Replacing any of them requires re-pairing - Apple has not shared the pairing tools publicly. The community has reverse-engineered partial solutions, but success varies by model and by which component is being replaced.
          </p>
          <p>
            <strong>Real success rates (workshop's tracked stats over the last 18 months):</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sensor stack transfer during screen swap: <strong>95%+</strong> success</li>
            <li>Flood illuminator replacement: <strong>~70%</strong> success</li>
            <li>IR camera replacement (iPhone X to 13): <strong>~50%</strong> success</li>
            <li>IR camera replacement (iPhone 14 onward): <strong>~30%</strong> success - Apple tightened pairing</li>
            <li>Dot projector replacement: <strong>~30%</strong> success on any model - most tightly bound</li>
          </ul>
          <p>
            <strong>What we won't promise:</strong> a guaranteed Face ID restoration on a phone where the dot projector is the failed component. The workshop will quote, attempt, and only charge if Face ID actually works after. If it doesn't, you pay nothing and the workshop returns the phone with whatever was repairable (e.g. screen, ambient light sensor, proximity sensor).
          </p>
          <p>
            <strong>Honest alternatives:</strong> if Face ID can't be restored, iOS still works - just with passcode entry and Touch-ID-style biometric absent. Many customers live with this rather than pay AED 1,400+ for an Apple service-unit swap. The workshop's job is to help you decide.
          </p>
        </div>
      }
      problems={[
        { title: "Face ID stopped working after a screen swap (done elsewhere)", body: "Sensor stack wasn't transferred from the original screen. Workshop opens the phone, retrieves the original sensors, transfers correctly. AED 250, same day. 95% success when the original sensors are intact." },
        { title: "'Face ID is not available, try setting up later'", body: "iOS error indicating one of the TrueDepth sensors isn't responding. Free diagnosis identifies which one - sometimes a dirty notch (free clean), sometimes flood illuminator (AED 450), sometimes IR camera (AED 800)." },
        { title: "Face ID worked, then stopped after a drop", body: "Most common: dot projector damaged. Workshop checks all three components - sometimes only the flood illuminator is broken (good news, 70% success). Diagnosis is free, quote given before any work." },
        { title: "Move iPhone Lower / Higher message - never recognises face", body: "Geometry of the dot projector pattern may be off due to lens damage or alignment shift. Calibration sometimes possible (AED 350); replacement rarely successful." },
        { title: "Face ID slow but eventually works", body: "Usually a software issue first. Reset Face ID (Settings > Face ID & Passcode > Reset Face ID), set up again. If still slow, dot projector dust accumulation - free clean. If still slow, hardware degradation - discuss whether worth repairing." },
        { title: "Face ID fails only in dark or bright sunlight", body: "Flood illuminator (dark) or IR camera (bright) failing. Component-level replacement, AED 450 to AED 800." },
        { title: "After water damage, Face ID broken", body: "Water can corrode any of the three sensors. Honest assessment: if dot projector survived, recovery is possible (~70%). If dot projector took water, success rate drops to ~30%. Free diagnosis confirms which." },
        { title: "After back glass repair, Face ID broken", body: "Should not happen - Face ID hardware is in the front, not the back. If a back glass repair killed Face ID, the rear repair was done badly (heat damage to the front-facing flex). Workshop diagnoses and fixes if recoverable." },
        { title: "Bought a refurbished iPhone, Face ID 'unsupported on this iPhone'", body: "Refurbisher swapped the screen or sensors without proper pairing. Workshop attempts re-pairing - success ~50%. If fails, refund and customer keeps phone with passcode-only." },
        { title: "iPhone X (oldest Face ID phone) - Face ID died of age", body: "After 5-7 years, dot projector lasers degrade. Replacement on iPhone X has the highest success rate of any Face ID repair (~70%) because pairing was looser in the first generation. AED 1,200, 3 days." },
      ]}
      steps={[
        { title: "WhatsApp model + Face ID error message", body: "Tell us what iOS says exactly. Photo of the error helps. Quote and likely success rate (per the table above) within 30 minutes." },
        { title: "Free walk-in diagnosis", body: "Workshop opens the phone under microscope, tests each TrueDepth component individually with a Face ID tester tool. Identifies which sensor failed - and confirms whether repair is feasible." },
        { title: "Quote with honest success rate", body: "Workshop quotes the price AND the realistic success rate for the specific failure mode. Customer decides whether to proceed or live with passcode-only." },
        { title: "Component replacement + pairing attempt", body: "Failed sensor replaced, pairing attempted with Apple Configurator 2 plus reverse-engineered pairing tools. Process takes 2 to 6 hours per attempt." },
        { title: "Test in Settings > Face ID & Passcode", body: "Customer attempts to set up Face ID. If successful: charge as quoted. If unsuccessful: phone returned with no charge for the attempted repair (only AED 100 diagnostic if the original component was replaced unsuccessfully)." },
        { title: "30-day warranty if Face ID is restored", body: "Same-day to 3 days depending on component. Warranty covers re-failure within 30 days - beyond that, the new component is paired and behaves like factory part." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "No-fix-no-charge: if Face ID isn't restored after the repair attempt, only the AED 100 diagnostic is charged.",
        "Covered: re-failure of the replaced component within 30 days, pairing failure that surfaces after handover.",
        "Not covered: new physical damage, water damage post-repair, software glitches unrelated to the hardware repair.",
        "Apple does not service Face ID - there is no Apple warranty alternative for this repair.",
      ]}
      comparisonRows={[
        ["Apple's official approach",   "Whole-device service swap (does not repair Face ID)", "AED 1,400 to AED 2,800 service unit"],
        ["Workshop's approach",         "Component-level repair attempt with no-fix-no-charge", "Service unit (full price)"],
        ["Sensor stack transfer (screen repair)", "AED 250, 95% success",                      "Yes - included in genuine repair"],
        ["Flood illuminator replacement","AED 450, ~70% success",                              "Not offered"],
        ["IR camera replacement",       "AED 800, ~50% success",                               "Not offered"],
        ["Dot projector replacement",   "AED 1,200, ~30% success (honest)",                    "Not offered"],
        ["Free pre-quote diagnosis",    "Yes - confirms feasibility before charging",          "No - diagnostic fee"],
        ["No-fix-no-charge",            "Yes - only diagnostic fee if attempt fails",          "No - full service price"],
        ["Warranty",                    "30 days when successful",                             "90 days on service unit"],
      ]}
      faqs={[
        { q: "Can you actually repair Face ID?", a: "Sometimes, depending on which component failed. Sensor stack transfer during a screen swap: 95% success. Flood illuminator replacement: ~70%. IR camera replacement: ~50%. Dot projector replacement: ~30%. The workshop publishes real tracked success rates and only charges when Face ID is confirmed working - no-fix-no-charge applies." },
        { q: "Why won't Apple repair Face ID?", a: "Apple's design ties the TrueDepth components to the Secure Enclave through factory pairing that hasn't been made available outside Apple. Apple's official policy is whole-device replacement when Face ID fails - costing AED 1,400 to AED 2,800. The workshop's component-level approach is the only repair-and-keep-your-phone alternative in Dubai." },
        { q: "How much does Face ID repair cost?", a: "Diagnosis is free. Sensor stack transfer (after screen swap): AED 250. Flood illuminator: AED 450. IR camera: AED 800. Dot projector: AED 1,200. Full TrueDepth assembly transfer: AED 1,500. No-fix-no-charge - if the repair attempt doesn't restore Face ID, only the AED 100 diagnostic is charged." },
        { q: "Can I just live without Face ID?", a: "Yes - many customers choose to. iOS works with passcode entry instead. Apple Pay, app sign-ins, and password autofill all fall back to passcode. The phone is fully functional, just with the extra step of typing the passcode. Many customers prefer this to paying AED 1,400+ for a service unit." },
        { q: "My screen was replaced and now Face ID doesn't work - can you fix it?", a: "Yes - most likely the previous repair didn't transfer the sensor stack from the original screen. The workshop opens the phone, retrieves the original sensors, transfers them correctly. AED 250, same day, 95% success rate. This is the most reliable Face ID repair we offer." },
        { q: "How do you know which component failed?", a: "Bench Face ID tester tool checks each component (flood illuminator, IR camera, dot projector) individually. The tester reports which sensor isn't responding - and the workshop quotes accordingly. Free diagnosis takes 30 minutes." },
        { q: "Why is dot projector replacement only 30% success?", a: "Apple binds the dot projector most tightly to the Secure Enclave's pairing data. Even with a perfectly working replacement projector, the pairing tools available outside Apple often fail to register the new component. The workshop is honest about this - many shops claim 90%+ success on dot projector swaps; the real number across the industry is closer to 30-50%." },
        { q: "Is the success rate higher on older iPhones?", a: "Yes - iPhone X (the first Face ID model) has looser pairing than later models. Apple tightened the pairing protocol on iPhone XS, then again on iPhone 14. iPhone X dot projector replacement: ~70% success. iPhone 14 dot projector replacement: ~30% success." },
        { q: "Will Face ID work on a refurbished iPhone where someone swapped parts?", a: "Often not - refurbishers commonly swap screens or cameras without proper sensor pairing, breaking Face ID. The workshop attempts re-pairing on these - success ~50%. If it fails, refund and customer keeps the phone with passcode-only function." },
        { q: "Does the workshop work on Touch ID too?", a: "Yes - Touch ID home-button repair on iPhone 6, 7, 8, SE 2, SE 3. Note: replacing the home button itself disables Touch ID (Apple's anti-tamper protection - same issue as Face ID). The original home button must be transferred. AED 250 to AED 350 same day, 95% success when original button is intact." },
      ]}
      reviewNames={["Saeed Alam", "Tim Quick", "Wellington Academy"]}
      relatedSlugs={["/iphone-screen-repair-dubai", "/iphone-camera-repair-dubai", "/iphone-back-glass-repair-dubai"]}
    />
  );
}
