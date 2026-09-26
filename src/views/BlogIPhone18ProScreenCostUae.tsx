"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { NAP } from "@/content/site";

// Facts: docs/apple-lineup-2026-09-26.md §1 (launch, UAE first wave), §4a (Apple UAE
// out-of-warranty estimates read 26 Sep 2026, excl. VAT), §4b (iFixit
// iPhone 18 Pro teardown). Every AED figure below is Apple's, attributed on the same line.
const WA = `${NAP.whatsappUrl}?text=${encodeURIComponent(
  "Hi, I need an iPhone 18 Pro screen replacement quote. Model (Pro or Pro Max) and damage: ",
)}`;

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function BlogIPhone18ProScreenCostUae() {
  return (
    <BlogPostTemplate
      seoTitle="iPhone 18 Pro Screen Replacement Cost in the UAE (2026)"
      seoDescription="What Apple charges in the UAE to replace an iPhone 18 Pro or Pro Max screen, how it compares with other iPhones, and what changes an independent quote."
      path="/blog/iphone-18-pro-screen-replacement-cost-uae"
      wide
      toc={[
        { id: "key-takeaways", label: "Key takeaways" },
        { id: "apple-price", label: "What Apple charges" },
        { id: "warranty", label: "Warranty and AppleCare+" },
        { id: "compare", label: "Compared with other iPhones" },
        { id: "independent-quote", label: "What changes an independent quote" },
        { id: "apple-or-independent", label: "Apple or an independent workshop?" },
        { id: "after-crack", label: "What to do after a crack" },
      ]}
      category="Cost guide · iPhone 18 Pro"
      h1="iPhone 18 Pro Screen Replacement Cost in the UAE: Apple's Price and Your Options"
      hook="Cracked the screen on a phone you bought a few days ago? Here is exactly what Apple lists in the UAE for an iPhone 18 Pro and 18 Pro Max screen, how that compares with the rest of the lineup, and what to weigh before you choose where to fix it."
      quickAnswer="Apple lists an out-of-warranty iPhone 18 Pro screen replacement at AED 1,279 and the 18 Pro Max at AED 1,499, excluding VAT, on its UAE support site. Apple's fee for screen plus back glass is AED 1,619 and AED 1,849. AppleCare+ replaces those fees with a fixed charge. For an independent quote, WhatsApp us your model."
      author={{ name: "Shafiq", role: "Lead screen and battery technician" }}
      datePublished="2026-09-26"
      dateModified="2026-09-26"
      readingMinutes={9}
      featuredImageAlt="iPhone repair guide infographic from MacBook Repair Dubai, smartphone engineering illustration"
      body={
        <>
          <h2 id="key-takeaways">Key takeaways</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>Apple lists AED 1,279 (iPhone 18 Pro) and AED 1,499 (iPhone 18 Pro Max) for an out-of-warranty screen, excluding VAT.</li>
            <li>Those are the same screen fees Apple lists for the iPhone 17 Pro and 17 Pro Max, so the new model did not raise the screen price.</li>
            <li>A cracked screen is accidental damage. Apple&apos;s one-year limited warranty does not cover it, but AppleCare+ does, for a fixed service fee.</li>
            <li>On this model the display is the entry point for most repairs, Face ID&apos;s infrared camera sits under it, and the display frame is fragile. Screen work needs care.</li>
            <li>With AppleCare+, Apple is usually the cheaper route. Without it, compare Apple&apos;s published price with an independent quote before you decide.</li>
          </ul>

          <h2 id="apple-price">How much does Apple charge to replace an iPhone 18 Pro screen in the UAE?</h2>
          <p>
            Apple publishes out-of-warranty estimates on its UAE support site. We read them on 26 September 2026,
            eight days after the iPhone 18 Pro and 18 Pro Max went on sale in the UAE. All figures below are
            Apple&apos;s, in dirhams, excluding VAT.
          </p>
          <table>
            <thead>
              <tr><th>Repair (Apple, out of warranty)</th><th>iPhone 18 Pro (6.3&quot;)</th><th>iPhone 18 Pro Max (6.9&quot;)</th></tr>
            </thead>
            <tbody>
              <tr><td>Screen</td><td>AED 1,279 (Apple list)</td><td>AED 1,499 (Apple list)</td></tr>
              <tr><td>Screen and back glass</td><td>AED 1,619 (Apple list)</td><td>AED 1,849 (Apple list)</td></tr>
              <tr><td>Back glass only</td><td>AED 615 (Apple list)</td><td>AED 615 (Apple list)</td></tr>
              <tr><td>Battery</td><td>AED 499 (Apple list)</td><td>AED 499 (Apple list)</td></tr>
              <tr><td>Rear camera</td><td>AED 989 (Apple list)</td><td>AED 989 (Apple list)</td></tr>
              <tr><td>Other damage</td><td>AED 3,279 (Apple list)</td><td>AED 3,479 (Apple list)</td></tr>
            </tbody>
          </table>
          <p>
            Apple states that the estimated fees are for out-of-warranty service from Apple and are subject to
            VAT. Authorised service providers set their own fees, and Apple can change its prices at any time, so
            check the live figure on Apple&apos;s site before you book.
          </p>

          <h2 id="warranty">Does the Apple warranty or AppleCare+ cover a cracked iPhone 18 Pro screen?</h2>
          <p>
            Apple&apos;s one-year limited warranty covers manufacturing defects, not accidents. A screen that
            cracked because the phone was dropped is accidental damage, so without AppleCare+ the out-of-warranty
            price above applies even on a phone that is only days old.
          </p>
          <p>
            AppleCare+ changes the maths. It replaces the list price with a fixed service fee for accidental
            damage. Our 26 September snapshot of Apple&apos;s UAE pricing did not include the AppleCare+ fee for
            the 18 Pro, so check the fee for your own plan in Apple&apos;s support pages before paying anyone.
          </p>
          <p>
            If you bought the phone in the last few days and have not added AppleCare+ yet, look at whether Apple
            still lets you add it. For a phone with a four-figure screen price, it is usually worth it.
          </p>

          <h2 id="compare">How does the iPhone 18 Pro screen price compare with other iPhones?</h2>
          <p>Same source, same date, Apple&apos;s out-of-warranty fees excluding VAT:</p>
          <table>
            <thead>
              <tr><th>Model</th><th>Screen</th><th>Screen and back</th><th>Battery</th></tr>
            </thead>
            <tbody>
              <tr><td>iPhone 18 Pro Max</td><td>AED 1,499 (Apple list)</td><td>AED 1,849 (Apple list)</td><td>AED 499 (Apple list)</td></tr>
              <tr><td>iPhone 18 Pro</td><td>AED 1,279 (Apple list)</td><td>AED 1,619 (Apple list)</td><td>AED 499 (Apple list)</td></tr>
              <tr><td>iPhone Air</td><td>AED 1,279 (Apple list)</td><td>AED 1,619 (Apple list)</td><td>AED 465 (Apple list)</td></tr>
              <tr><td>iPhone 17 Pro Max</td><td>AED 1,499 (Apple list)</td><td>AED 1,849 (Apple list)</td><td>AED 465 (Apple list)</td></tr>
              <tr><td>iPhone 17 Pro</td><td>AED 1,279 (Apple list)</td><td>AED 1,619 (Apple list)</td><td>AED 465 (Apple list)</td></tr>
              <tr><td>iPhone 17</td><td>AED 1,279 (Apple list)</td><td>AED 1,619 (Apple list)</td><td>AED 385 (Apple list)</td></tr>
              <tr><td>iPhone 17e</td><td>AED 889 (Apple list)</td><td>AED 1,229 (Apple list)</td><td>AED 385 (Apple list)</td></tr>
              <tr><td>iPhone 16</td><td>AED 1,079 (Apple list)</td><td>AED 1,429 (Apple list)</td><td>AED 385 (Apple list)</td></tr>
            </tbody>
          </table>
          <p>Three things stand out:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>No screen price rise.</strong> The 18 Pro and 18 Pro Max carry the same screen fees as the 17 Pro and 17 Pro Max they replaced. The 17 Pro models were discontinued on 9 September 2026 but remain very common in Dubai.</li>
            <li><strong>The battery fee did rise.</strong> Apple lists AED 499 for an 18 Pro battery against AED 465 for the 17 Pro.</li>
            <li><strong>The iPhone Air, 17 and 18 Pro share a screen fee.</strong> Apple lists AED 1,279 for all three, while the cheapest current screen is the iPhone 17e at AED 889 (Apple list).</li>
          </ul>

          <h2 id="independent-quote">What changes an independent iPhone 18 Pro screen quote?</h2>
          <p>
            Apple&apos;s price is one fixed figure. An independent quote depends on the phone in front of us. For
            the 18 Pro, these are the factors that move it:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Genuine or alternative panel.</strong> A genuine Apple display and a quality alternative are different parts at different prices. We tell you which one we are fitting before any work; our <Link to="/blog/genuine-parts-vs-quality-alternative-explained">genuine vs alternative parts guide</Link> explains the trade-offs.</li>
            <li><strong>Face ID under the display.</strong> iFixit&apos;s teardown found that Face ID&apos;s infrared camera now sits under the display. The screen comes off right over part of the Face ID system, so the job is slower and Face ID has to be tested before the phone goes back.</li>
            <li><strong>The display frame and seal.</strong> The white plastic display frame broke or lifted on 3 of the 4 units iFixit opened, which risks the IP68 seal. A careful repair checks the frame and reseals the display rather than just pressing a new panel in.</li>
            <li><strong>What else the drop damaged.</strong> A cracked back as well as a cracked front changes the job, which is why Apple lists screen and back as a separate combined fee. If the rear camera took the hit, note that iFixit found the new variable-aperture camera is not repairable at component level: a stuck aperture means replacing the whole main camera assembly.</li>
            <li><strong>Part availability.</strong> The phone went on sale on 18 September 2026. We confirm which parts we can source for your model and colour when you message, rather than promise a turnaround we cannot keep.</li>
          </ul>

          <h2 id="apple-or-independent">Should I use Apple or an independent workshop for an iPhone 18 Pro screen?</h2>
          <p>An honest summary, from a workshop that is not Apple:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>You have AppleCare+:</strong> go to Apple. The fixed AppleCare+ fee will almost always beat any out-of-pocket repair.</li>
            <li><strong>You want a genuine Apple display fitted by Apple:</strong> Apple&apos;s price is published and predictable, which is worth something on a brand-new phone.</li>
            <li><strong>No AppleCare+, and you want options:</strong> get an independent quote and compare it with Apple&apos;s published figure. Ask what part is being fitted, how the display is resealed, and what the warranty covers.</li>
            <li><strong>The phone also has other damage, or Face ID stopped after a previous repair:</strong> a diagnosis first, then a quote, is the safer order.</li>
          </ul>
          <p>
            MacBook Repair Dubai is an independent Apple repair workshop in Concord Tower, Dubai Media City, not an
            Apple Authorised Service Provider. Screen work carries a written warranty; the terms are on our{" "}
            <Link to="/warranty">warranty page</Link>. See{" "}
            <Link to="/iphone-screen-repair-cost-dubai">iPhone screen repair cost in Dubai</Link> for every other
            model, and <Link to="/iphone-18-pro-repair-dubai">iPhone 18 Pro repair</Link> for the rest of what we
            do on this phone. If your 18 Pro is freezing after Face ID rather than cracked, read{" "}
            <Link to="/blog/iphone-18-pro-face-id-freezing">iPhone 18 Pro Face ID freezing</Link> first.
          </p>

          <h2 id="after-crack">What should I do right after cracking an iPhone 18 Pro screen?</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li><strong>Back it up now.</strong> A cracked screen can stop responding to touch without warning. Back up to iCloud while you still can.</li>
            <li><strong>Check Face ID and touch.</strong> Note whether Face ID, the whole touchscreen and the front camera still work. It helps whoever quotes the repair.</li>
            <li><strong>Keep it dry.</strong> With the glass cracked, treat the water resistance as gone until the display is replaced and resealed.</li>
            <li><strong>Cover sharp edges.</strong> A clear protector or tape over the crack helps contain glass splinters.</li>
            <li><strong>Check your coverage.</strong> Look up AppleCare+ status in Settings, General, About, or on Apple&apos;s coverage page, before paying anyone.</li>
          </ol>
          <p>
            <a href={WA} {...ext}><strong>WhatsApp us on {NAP.phoneDisplay}</strong></a> with your model, a photo
            of the damage and whether Face ID still works. We will reply with a quote, the part options and
            current availability. Our price is always a quote for your phone, never a guess.
          </p>

          <p className="text-[14px]">
            <strong>Sources (checked 26 September 2026):</strong>{" "}
            <a href="https://support.apple.com/en-ae/iphone/repair/screen-replacement" {...ext}>Apple UAE iPhone screen repair pricing</a>,{" "}
            <a href="https://www.apple.com/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/" {...ext}>Apple Newsroom</a>,{" "}
            <a href="https://9to5mac.com/2026/09/20/ifixit-tears-down-iphone-18-pro-explores-variable-aperture-finds-concerning-repair-issue/" {...ext}>9to5Mac on the iFixit teardown</a>,{" "}
            <a href="https://www.theregister.com/personal-tech/2026/09/21/skip-the-upgrade-iphone-18-pro-aperture-about-as-unrepairable-as-it-gets-ifixit-finds/5297970" {...ext}>The Register</a>,{" "}
            <a href="https://www.macrumors.com/2026/09/09/apple-discontinues-iphone-17-pro-max/" {...ext}>MacRumors on the 17 Pro discontinuation</a>.
          </p>
        </>
      }
      faqs={[
        {
          q: "How much is an iPhone 18 Pro screen replacement at Apple in the UAE?",
          a: "Apple lists AED 1,279 for an iPhone 18 Pro screen and AED 1,499 for the 18 Pro Max, excluding VAT, as out-of-warranty estimates on its UAE support site (checked 26 September 2026). Apple's fee for screen plus back glass is AED 1,619 and AED 1,849. AppleCare+ replaces these with a fixed service fee.",
        },
        {
          q: "Is the iPhone 18 Pro screen more expensive to replace than the iPhone 17 Pro?",
          a: "No. Apple lists the same screen fees for both generations: AED 1,279 for the 18 Pro and 17 Pro, and AED 1,499 for the 18 Pro Max and 17 Pro Max, excluding VAT. The battery fee did rise, with Apple listing AED 499 for the 18 Pro against AED 465 for the 17 Pro.",
        },
        {
          q: "Does Apple's warranty cover a cracked iPhone 18 Pro screen?",
          a: "No. Apple's one-year limited warranty covers manufacturing defects, and a cracked screen from a drop is accidental damage. AppleCare+ does cover accidental damage for a fixed service fee, which is usually far lower than the out-of-warranty price. Check your coverage before paying for a repair anywhere.",
        },
        {
          q: "Can an independent shop replace an iPhone 18 Pro screen without breaking Face ID?",
          a: "Yes, with care. iFixit found that Face ID's infrared camera now sits under the iPhone 18 Pro display, and that the plastic display frame broke or lifted on 3 of 4 teardown units. A careful repair removes the screen without stressing those parts, reseals the display and tests Face ID before return.",
        },
        {
          q: "How do I get an iPhone 18 Pro screen quote from MacBook Repair Dubai?",
          a: "WhatsApp us on 055 741 3706 with your model (Pro or Pro Max), a photo of the damage and whether Face ID still works. We reply with a quote that explains the part options for your model, and current availability. Diagnosis is free, and nothing is done without your approval.",
        },
      ]}
      relatedLinks={[
        { label: "iPhone screen repair cost Dubai", href: "/iphone-screen-repair-cost-dubai", description: "Screen repair costs for every iPhone model, quoted on WhatsApp." },
        { label: "iPhone 18 Pro repair Dubai", href: "/iphone-18-pro-repair-dubai", description: "Screen, battery, charging port and board-level repair for the 18 Pro." },
        { label: "iPhone 18 Pro Max repair Dubai", href: "/iphone-18-pro-max-repair-dubai", description: "Repairs for the 6.9-inch iPhone 18 Pro Max." },
        { label: "iPhone 18 Pro Face ID freezing", href: "/blog/iphone-18-pro-face-id-freezing", description: "What was reported in September 2026 and what to try first." },
      ]}
    />
  );
}
