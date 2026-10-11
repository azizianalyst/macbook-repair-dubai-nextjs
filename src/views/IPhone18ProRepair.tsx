"use client";
// iPhone 18 Pro (6.3") model page. Launched facts only, every one traceable to
// docs/apple-lineup-2026-09-26.md (Apple newsroom + apple.com/ae specs, iFixit teardown as
// reported by 9to5Mac / AppleInsider / The Register, Apple UAE out-of-warranty widget).
// Brand-new model: never claim parts are in stock - availability is confirmed on WhatsApp.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IPhone18ProRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 18 Pro Repair Dubai - Screen, Battery & Camera"
      seoDescription="iPhone 18 Pro repair in Dubai: screen, battery, back glass and variable-aperture camera. Free diagnosis, written quote first. WhatsApp 055 741 3706."
      path="/iphone-18-pro-repair-dubai"
      eyebrow="iPhone 18 Pro · on sale 18 Sep 2026 · A20 Pro · aluminium unibody"
      h1="iPhone 18 Pro Repair Dubai"
      subtitle="Screen, battery, back glass, camera and board repair for Apple's newest 6.3-inch Pro iPhone, at our Concord Tower workshop in Dubai Media City. It is a brand-new model, so we confirm part availability and turnaround on WhatsApp before you book."
      startingPrice={0}
      timeline="Free diagnosis same day · repair time confirmed with your quote"
      whatsappPrefill="Hi, I have an iPhone 18 Pro and need help with:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone 18 Pro", path: "/iphone-18-pro-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "screens, batteries and iPhone repair" }}
      serviceName="iPhone 18 Pro Repair Dubai"
      quickAnswer={{
        question: "Can you repair an iPhone 18 Pro in Dubai?",
        answer:
          "Yes. We repair the iPhone 18 Pro at our Dubai Media City workshop: screen, battery, back glass, camera and board faults, with a free diagnosis and a written quote first. It went on sale in the UAE on 18 September 2026, so we confirm part availability on WhatsApp before you book. Check Apple warranty or AppleCare+ first.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPhone 18 Pro repair in Dubai, from a workshop that opens iPhones every day.</strong>{" "}
            Apple announced the iPhone 18 Pro on 9 September 2026 and the UAE was in the first wave: pre-orders
            opened on 12 September and phones were in stores on 18 September. It succeeds the iPhone 17 Pro, which
            Apple discontinued on 9 September. If you are still on a 17 Pro, our{" "}
            <Link to="/iphone-17-pro-repair-dubai" className="text-accent font-semibold hover:underline">iPhone 17 Pro repair</Link>{" "}
            page covers it. Below is what actually changed inside the 18 Pro, what the first teardown found, and how
            that shapes a repair on our bench.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">iPhone 18 Pro: the facts that matter for repair</h2>
          <ul className="space-y-1 text-[15px] mb-md">
            <li>• <strong>Chip:</strong> A20 Pro, built on a 2nm process.</li>
            <li>• <strong>Body:</strong> an aluminium unibody, not titanium. Ceramic Shield 2 covers the front, and the back is a Ceramic Shield panel with a MagSafe cut-out, colour-matched to the frame.</li>
            <li>• <strong>Main camera:</strong> 48MP Fusion Main with a variable aperture that runs from f/1.48 to f/4.</li>
            <li>• <strong>Face ID:</strong> the infrared camera now sits under the display.</li>
            <li>• <strong>SIM:</strong> the UAE model is eSIM only (e&amp; and du), so there is no physical SIM tray.</li>
            <li>• <strong>Storage:</strong> 256GB to 2TB. Colours: black, silver, glacier and burgundy.</li>
            <li>• <strong>UAE price:</strong> Apple lists it from AED 5,099.</li>
          </ul>
          <p className="text-[14px] text-text-muted mb-lg">
            Source: Apple&apos;s iPhone 18 Pro announcement and the apple.com/ae specifications page, September 2026.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">What the iFixit teardown means for an 18 Pro repair</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            iFixit&apos;s teardown of the iPhone 18 Pro series gave it a provisional 7 out of 10 for repairability.
            That is a fair score, but the details decide how a repair goes:
          </p>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Battery:</strong> it sits in a tray held by 13 screws, with no glue. That makes a{" "}
              <Link to="/iphone-battery-replacement-dubai" className="text-accent underline underline-offset-2 hover:no-underline">battery swap</Link>{" "}
              more controlled than on older iPhones that relied on pull-tab adhesive.</li>
            <li>• <strong>The display is still the way in.</strong> Almost every internal repair starts by lifting the
              screen. On 3 of the 4 units iFixit opened, the white plastic display frame broke or lifted, and that frame
              is part of what keeps water out.</li>
            <li>• <strong>Variable-aperture camera:</strong> the new six-blade aperture cannot be repaired at component
              level. If the blades stick, the fix is a complete main camera assembly, not a clean-up.</li>
            <li>• <strong>Camera modules</strong> are removable, which keeps{" "}
              <Link to="/iphone-camera-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">camera replacement</Link>{" "}
              straightforward once the part is available.</li>
            <li>• <strong>USB-C port:</strong> replacing it takes a lot of disassembly, so we test cables, clean the
              port and check charging on the bench before we ever quote a port replacement.</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Why resealing matters on the 18 Pro</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Because the display frame proved fragile in the teardown, we treat every 18 Pro opening as a sealing job as
            well as a repair. We inspect the frame for cracks or lift before the new screen goes on, fit fresh adhesive
            instead of reusing the old seal, and let it cure under pressure before testing. No independent workshop can
            re-certify Apple&apos;s IP68 rating, so we never call an opened iPhone waterproof, but a sound frame and a
            new seal give it the best chance. Face ID&apos;s infrared camera also sits behind the panel now, so we test
            Face ID before and after any screen work and tell you the result.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Apple&apos;s out-of-warranty prices, for reference</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            Apple publishes out-of-warranty estimates for the iPhone 18 Pro on its UAE support site. They exclude VAT,
            and Apple notes that authorised service providers set their own fees. Our own price is quoted on WhatsApp
            after we see the phone and confirm the part.
          </p>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-md">
            <table className="w-full text-[14px] min-w-[420px]">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="px-md py-sm font-semibold">iPhone 18 Pro repair</th>
                  <th className="px-md py-sm font-semibold">Apple UAE estimate (excl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="px-md py-sm">Screen replacement</td><td className="px-md py-sm">AED 1,279 (Apple list)</td></tr>
                <tr className="border-b border-border"><td className="px-md py-sm">Battery</td><td className="px-md py-sm">AED 499 (Apple list)</td></tr>
                <tr className="border-b border-border"><td className="px-md py-sm">Back glass</td><td className="px-md py-sm">AED 615 (Apple list)</td></tr>
                <tr><td className="px-md py-sm">Rear camera</td><td className="px-md py-sm">AED 989 (Apple list)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-text-muted mb-lg">
            Source: support.apple.com/en-ae, read on 26 September 2026. Apple can change these at any time. Our{" "}
            <Link to="/blog/iphone-18-pro-screen-replacement-cost-uae/" className="text-accent underline underline-offset-2 hover:no-underline">iPhone 18 Pro screen replacement cost guide</Link>{" "}
            breaks these figures down, and for how screen costs compare across models, see{" "}
            <Link to="/iphone-screen-repair-cost-dubai" className="text-accent underline underline-offset-2 hover:no-underline">iPhone screen repair cost in Dubai</Link>.
            If your phone is under Apple&apos;s warranty or AppleCare+, Apple is usually the right first stop, and we
            will tell you so.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Early reports: Face ID freezing</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Since launch, some owners have reported the phone freezing or restarting after a failed Face ID attempt,
            especially when unlocking apps that are locked with Face ID, and a smaller number report touchscreen
            freezes. The reports are limited in scope and widely suspected to be an iOS 27 software bug, with iOS
            27.0.1 expected to fix the Face ID problem. Update before paying for any hardware repair. Our{" "}
            <Link to="/blog/iphone-18-pro-face-id-freezing" className="text-accent font-semibold hover:underline">iPhone 18 Pro Face ID freezing guide</Link>{" "}
            covers what to try first and when it is worth bringing the phone in.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked or unresponsive display, resealed with fresh adhesive after a frame check",
        "Battery replacement (screw-in battery tray, no glue)",
        "Cracked Ceramic Shield back panel",
        "Main camera faults, including a stuck variable aperture (full assembly)",
        "Charging faults: cable, port clean and bench test before any port swap",
        "Face ID and touch faults: software checked first, then hardware",
        "Water and liquid damage assessment",
        "Data recovery from a phone that will not start",
      ]}
      steps={[
        { title: "WhatsApp us",        body: "Send the model and a photo or short video of the fault. We confirm part availability and a quote before you visit." },
        { title: "Warranty check",     body: "We check Apple warranty and AppleCare+ status first. If Apple should fix it, we tell you." },
        { title: "Diagnose + repair",  body: "Free diagnosis, then a written quote. No work starts until you approve it." },
        { title: "QC + return",        body: "Display, touch, Face ID, cameras, charging and seal checked before the phone goes back to you." },
      ]}
      warrantyDays={365}
      warrantyHeadline
      warrantyBullets={[
        "Screens: 90 days on the part and the fitting.",
        "Batteries: 3 months, with an 80% capacity guarantee.",
        "Other hardware, such as cameras and ports: up to 12 months.",
        "Board, liquid-damage, software and data work: 15 days.",
      ]}
      faqs={[
        {
          q: "Can you repair an iPhone 18 Pro in Dubai?",
          a: "Yes. We repair screens, batteries, back glass, cameras, charging faults and liquid damage on the iPhone 18 Pro at our Dubai Media City workshop. Because it only went on sale on 18 September 2026, we confirm part availability and turnaround on WhatsApp before you book, rather than promising stock we have not seen.",
        },
        {
          q: "How much does Apple charge for an iPhone 18 Pro screen replacement in the UAE?",
          a: "Apple lists an out-of-warranty screen replacement for the iPhone 18 Pro at AED 1,279, excluding VAT, on its UAE support site. Apple lists the battery at AED 499 and back glass at AED 615. Our price is quoted on WhatsApp after we see the phone and confirm the part.",
        },
        {
          q: "Is the iPhone 18 Pro titanium?",
          a: "No. The iPhone 18 Pro has an aluminium unibody, with Ceramic Shield 2 on the front and a Ceramic Shield back panel. Aluminium scuffs more easily than titanium, as iPhone 17 Pro owners found, so we assess frame damage from photos before we quote any cosmetic work.",
        },
        {
          q: "My iPhone 18 Pro camera is stuck or blurry. Can the aperture be fixed?",
          a: "The main camera has a new six-blade variable aperture, and iFixit found it cannot be repaired at component level. A stuck aperture means replacing the whole main camera assembly. Before that, we rule out software, the lens cover and case interference, and we confirm the part on WhatsApp first.",
        },
        {
          q: "Will my iPhone 18 Pro still be water-resistant after a screen repair?",
          a: "We reseal every screen repair with fresh adhesive and check the display frame, which lifted or broke on 3 of 4 units in iFixit's teardown. No independent workshop can re-certify Apple's IP68 rating, so we never promise water resistance after opening a phone, but a sound frame and a new seal give it the best protection.",
        },
        {
          q: "Should I take my iPhone 18 Pro to Apple instead?",
          a: "If the phone is under Apple's one-year warranty or AppleCare+ and the fault is covered, Apple is usually the better route and we will say so. Come to us for out-of-warranty damage, a quote without an appointment wait, or data recovery. We are an independent workshop, not an Apple Authorised Service Provider.",
        },
      ]}
      reviewNames={["Tim Quick", "B Parker"]}
      related={[
        { label: "iPhone 18 Pro Max Repair",   href: "/iphone-18-pro-max-repair-dubai",   description: "The 6.9-inch model: same A20 Pro and the same teardown notes." },
        { label: "iPhone Back Glass Repair",   href: "/iphone-back-glass-repair-dubai",   description: "Cracked Ceramic Shield back panels, every current model." },
        { label: "iPhone Screen Repair Dubai", href: "/iphone-screen-repair-dubai",       description: "Screen replacement with a frame check and a fresh seal." },
      ]}
      blogLink={{ label: "iPhone 18 Pro Face ID freezing: fix it or repair it?", href: "/blog/iphone-18-pro-face-id-freezing" }}
    />
  );
}
