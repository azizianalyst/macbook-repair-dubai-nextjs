"use client";
// iPhone 18 Pro Max (6.9") model page. Launched facts only, every one traceable to
// docs/apple-lineup-2026-09-26.md (Apple newsroom + apple.com/ae specs, iFixit teardown as
// reported by 9to5Mac / AppleInsider / The Register, Apple UAE out-of-warranty widget).
// Brand-new model: never claim parts are in stock - availability is confirmed on WhatsApp.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IPhone18ProMaxRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 18 Pro Max Repair Dubai - Screen & Battery"
      seoDescription="iPhone 18 Pro Max repair in Dubai: 6.9-inch screen, battery, back glass and camera. Free diagnosis, written quote first. WhatsApp 055 741 3706."
      path="/iphone-18-pro-max-repair-dubai"
      eyebrow="iPhone 18 Pro Max · 6.9-inch · on sale 18 Sep 2026 · A20 Pro"
      h1="iPhone 18 Pro Max Repair Dubai"
      subtitle="Screen, battery, back glass, camera and board repair for Apple's 6.9-inch Pro iPhone, at our Concord Tower workshop in Dubai Media City. It only reached UAE stores on 18 September 2026, so we confirm part availability on WhatsApp before you book."
      startingPrice={0}
      timeline="Free diagnosis same day · repair time confirmed with your quote"
      whatsappPrefill="Hi, I have an iPhone 18 Pro Max and need help with:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "iPhone Repair",     path: "/iphone-repair-dubai" },
        { name: "iPhone 18 Pro Max", path: "/iphone-18-pro-max-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "screens, batteries and iPhone repair" }}
      serviceName="iPhone 18 Pro Max Repair Dubai"
      quickAnswer={{
        question: "Can you repair an iPhone 18 Pro Max in Dubai?",
        answer:
          "Yes. We repair the iPhone 18 Pro Max in Dubai Media City: the 6.9-inch screen, battery, back glass, cameras and board faults, after a free diagnosis and a written quote. Apple's out-of-warranty screen estimate is AED 1,499 (Apple list), excluding VAT. It is a new model, so we confirm part availability on WhatsApp before you book.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPhone 18 Pro Max repair in Dubai, starting with the part most owners call about: the 6.9-inch screen.</strong>{" "}
            Apple announced it on 9 September 2026. UAE pre-orders opened on 12 September and it reached stores on
            18 September, in the first wave of countries. It succeeds the iPhone 17 Pro Max, which Apple discontinued
            on 9 September; if yours is the older model, see{" "}
            <Link to="/iphone-17-pro-max-repair-dubai" className="text-accent font-semibold hover:underline">iPhone 17 Pro Max repair</Link>.
            This page covers what is new inside the 18 Pro Max, what iFixit found when it opened one, and what that
            means when it lands on our bench.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">What Apple changed on the 18 Pro Max</h2>
          <ul className="space-y-1 text-[15px] mb-md">
            <li>• <strong>Display:</strong> 6.9 inches, with Ceramic Shield 2 on the front.</li>
            <li>• <strong>Chip:</strong> A20 Pro on a 2nm process, shared with the 6.3-inch iPhone 18 Pro.</li>
            <li>• <strong>Frame and back:</strong> an aluminium unibody, not titanium, with a colour-matched Ceramic Shield back panel and a MagSafe cut-out.</li>
            <li>• <strong>Camera:</strong> a 48MP Fusion Main camera whose aperture varies from f/1.48 to f/4.</li>
            <li>• <strong>Face ID:</strong> its infrared camera has moved under the display.</li>
            <li>• <strong>eSIM only</strong> in the UAE (e&amp; and du), so there is no SIM tray to fail or corrode.</li>
            <li>• <strong>UAE price:</strong> Apple lists it from AED 5,499, in black, silver, glacier or burgundy, with 256GB to 2TB of storage.</li>
          </ul>
          <p className="text-[14px] text-text-muted mb-lg">
            Source: Apple&apos;s iPhone 18 Pro and iPhone 18 Pro Max announcement and apple.com/ae specifications, September 2026.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Inside the 18 Pro Max: the teardown in repair terms</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            iFixit scored the iPhone 18 Pro series a provisional 7 out of 10. Here is what each finding means for
            the owner of a damaged Pro Max:
          </p>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Screen first, always.</strong> The display remains the entry point for nearly every repair,
              and the white plastic display frame broke or lifted on 3 of 4 teardown units. On a 6.9-inch panel that
              frame runs a long way around the edge, which is why we inspect all of it before a new screen goes on.</li>
            <li>• <strong>Screwed-in battery.</strong> The battery tray is held by 13 screws with no glue, so a{" "}
              <Link to="/iphone-battery-replacement-dubai" className="text-accent hover:underline">battery replacement</Link>{" "}
              does not involve prying a cell off adhesive.</li>
            <li>• <strong>Aperture blades are not serviceable.</strong> The six-blade variable aperture cannot be
              repaired at component level; a stuck aperture means a whole new main camera assembly. The camera modules
              themselves are removable.</li>
            <li>• <strong>USB-C is deep inside.</strong> A port replacement needs extensive disassembly, so we rule
              out cables, lint and software before recommending one.</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">How we handle a Pro Max screen repair</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            We test touch, display and Face ID before we open anything, so you know what worked on arrival. The old
            seal is cleaned off completely, the display frame is checked for cracks or lift, and the new{" "}
            <Link to="/iphone-screen-repair-dubai" className="text-accent hover:underline">screen</Link>{" "}
            is fitted with fresh adhesive and cured under pressure. Because the Face ID infrared camera now sits under
            the panel, Face ID is tested again afterwards and we tell you the result. We never describe an
            opened phone as waterproof; nobody outside Apple can re-certify the IP68 rating.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Apple&apos;s UAE prices for the 18 Pro Max, as a benchmark</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            These are Apple&apos;s published out-of-warranty estimates for the iPhone 18 Pro Max in the UAE. They
            exclude VAT, and Apple notes that authorised service providers set their own fees. We quote on WhatsApp.
          </p>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-md">
            <table className="w-full text-[14px] min-w-[420px]">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="px-md py-sm font-semibold">iPhone 18 Pro Max repair</th>
                  <th className="px-md py-sm font-semibold">Apple UAE estimate (excl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="px-md py-sm">Screen replacement</td><td className="px-md py-sm">AED 1,499 (Apple list)</td></tr>
                <tr className="border-b border-border"><td className="px-md py-sm">Screen and back together</td><td className="px-md py-sm">AED 1,849 (Apple list)</td></tr>
                <tr className="border-b border-border"><td className="px-md py-sm">Back glass</td><td className="px-md py-sm">AED 615 (Apple list)</td></tr>
                <tr className="border-b border-border"><td className="px-md py-sm">Rear camera</td><td className="px-md py-sm">AED 989 (Apple list)</td></tr>
                <tr><td className="px-md py-sm">Battery</td><td className="px-md py-sm">AED 499 (Apple list)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-text-muted mb-lg">
            Source: support.apple.com/en-ae, read on 26 September 2026; Apple can change these at any time. The
            screen estimate is higher than the 6.3-inch model&apos;s, as it was for the iPhone 17 Pro Max. More on{" "}
            <Link to="/iphone-screen-repair-cost-dubai" className="text-accent hover:underline">iPhone screen repair costs in Dubai</Link>.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Freezing after Face ID? Update first</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Some iPhone 18 Pro and Pro Max owners have reported freezes and restarts after a failed Face ID attempt,
            especially when opening apps locked with Face ID, plus a few touchscreen freezes and a handful of reports
            of paint peeling on the frame. The freezes look limited in scope and are widely suspected to be an iOS 27
            bug; iOS 27.0.1 is expected to fix the Face ID problem. Read our{" "}
            <Link to="/blog/iphone-18-pro-face-id-freezing" className="text-accent font-semibold hover:underline">iPhone 18 Pro Face ID freezing guide</Link>{" "}
            before you pay for any hardware repair, and raise frame paint issues with Apple while the phone is under warranty.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked 6.9-inch display, fitted with a fresh seal after a full frame check",
        "Battery replacement (13-screw battery tray, no adhesive)",
        "Cracked Ceramic Shield back panel",
        "Stuck or faulty variable-aperture main camera (assembly replacement)",
        "Charging and USB-C faults, diagnosed before any port swap",
        "Touch and Face ID faults: software ruled out first",
        "Liquid damage assessment",
        "Data recovery from a dead or boot-looping phone",
      ]}
      steps={[
        { title: "WhatsApp us",        body: "Send a photo or short video of the fault. We confirm part availability and a quote before you visit." },
        { title: "Warranty check",     body: "Apple warranty and AppleCare+ status checked first; if Apple should fix it, we say so." },
        { title: "Diagnose + repair",  body: "Free diagnosis and a written quote. Nothing is opened until you approve." },
        { title: "QC + return",        body: "Display, touch, Face ID, all cameras, charging and the new seal tested before return." },
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
          q: "Can you fix an iPhone 18 Pro Max screen in Dubai?",
          a: "Yes. We replace the 6.9-inch display at our Dubai Media City workshop, check the display frame iFixit found fragile, and reseal the phone with fresh adhesive. The model only reached UAE stores on 18 September 2026, so we confirm the part on WhatsApp before you visit rather than assume it is on the shelf.",
        },
        {
          q: "What does Apple charge to replace an iPhone 18 Pro Max screen in the UAE?",
          a: "Apple lists an out-of-warranty iPhone 18 Pro Max screen replacement at AED 1,499, excluding VAT, and screen plus back together at AED 1,849. Those figures come from Apple's UAE support site on 26 September 2026. Our own quote comes on WhatsApp once we have seen the damage.",
        },
        {
          q: "How is the iPhone 18 Pro Max battery fitted?",
          a: "iFixit found the battery sits in a tray held by 13 screws, with no glue. That is good news for battery service: the cell comes out without prying against adhesive, which lowers the risk of damage during removal. Battery replacements carry our 3-month warranty with an 80% capacity guarantee.",
        },
        {
          q: "Is the iPhone 18 Pro Max the same inside as the iPhone 18 Pro?",
          a: "They share the A20 Pro chip, the aluminium unibody, the Ceramic Shield front and back, the variable-aperture 48MP main camera and under-display Face ID. The Pro Max has the larger 6.9-inch display, and Apple's UAE screen estimate is higher at AED 1,499 against AED 1,279 for the Pro.",
        },
        {
          q: "My iPhone 18 Pro Max freezes after Face ID fails. Is it broken?",
          a: "Probably not. Owners have reported this since launch, and it is widely suspected to be an iOS 27 bug that iOS 27.0.1 is expected to fix. Install updates first. If freezes continue after updating, or Face ID stops working entirely, bring it in for a free diagnosis.",
        },
      ]}
      reviewNames={["B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone 18 Pro Repair",       href: "/iphone-18-pro-repair-dubai",       description: "The 6.3-inch model: same chip, same teardown findings." },
        { label: "iPhone Camera Repair Dubai", href: "/iphone-camera-repair-dubai",       description: "Main camera assemblies, including variable-aperture faults." },
        { label: "iPhone Battery Replacement", href: "/iphone-battery-replacement-dubai", description: "Battery swaps with a written 3-month warranty." },
      ]}
      blogLink={{ label: "iPhone 18 Pro Face ID freezing: fix it or repair it?", href: "/blog/iphone-18-pro-face-id-freezing" }}
    />
  );
}
