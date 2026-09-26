"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { NAP } from "@/content/site";

// Rewritten 2026-09-26: Apple announced the foldable as "iPhone Duo" on 9 Sep 2026. Every fact
// below comes from docs/apple-lineup-2026-09-26.md §1, §4a (Duo AppleCare+ fees), §4b (Duo
// materials, iFixit pre-launch opinion) and §7 (rumoured vs announced display sizes).
// The staged /iphone-duo-repair-dubai/ page is noindex until launch: do not link it from here.
const WA = `${NAP.whatsappUrl}?text=${encodeURIComponent(
  "Hi, do you repair the iPhone Duo? My question: ",
)}`;

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function BlogIPhoneFold2026() {
  return (
    <BlogPostTemplate
      seoTitle="iPhone Duo (iPhone Fold) in the UAE: Launch, Specs, Repair"
      seoDescription="Apple's foldable is the iPhone Duo. UAE pre-orders open 16 October and sales start 23 October 2026. Verified specs, AppleCare+ and the repair outlook."
      path="/blog/iphone-fold-2026-what-to-expect"
      wide
      toc={[
        { id: "key-takeaways", label: "Key takeaways" },
        { id: "what-announced", label: "What Apple announced" },
        { id: "uae-launch", label: "UAE dates and price" },
        { id: "specs", label: "Confirmed specs" },
        { id: "rumours-vs-reality", label: "Rumours vs what shipped" },
        { id: "repairability", label: "How repairable is it?" },
        { id: "applecare", label: "Is AppleCare+ worth it?" },
        { id: "our-support", label: "Will we repair the Duo?" },
      ]}
      category="Industry · iPhone Duo"
      h1="iPhone Duo (iPhone Fold) in the UAE: Launch Dates, Specs and Repair Outlook"
      hook="Before launch, the rumours called it the iPhone Fold. On 9 September 2026 Apple announced it as the iPhone Duo. Here is what is confirmed for the UAE, what the rumours got right and wrong, and what we know, and do not yet know, about repairing it."
      quickAnswer="Apple's foldable iPhone is the iPhone Duo, announced on 9 September 2026. UAE pre-orders open on 16 October and it goes on sale on 23 October. Apple's UAE price starts from AED 8,499. It has an A20 Pro chip, a 7.6-inch inner and 5.4-inch outer display, a titanium frame and IP68 water resistance."
      author={{ name: "Hamza", role: "Phone and tablet technician" }}
      datePublished="2026-04-26"
      dateModified="2026-09-26"
      readingMinutes={7}
      featuredImageAlt="iPhone repair guide infographic from MacBook Repair Dubai, smartphone engineering illustration"
      body={
        <>
          <p className="text-[14px] italic">
            <strong>Updated 26 September 2026.</strong> This article first covered the rumoured &quot;iPhone
            Fold&quot;. Apple has since announced the phone, so the rumour content has been replaced with the
            facts Apple and reputable outlets have published.
          </p>

          <h2 id="key-takeaways">Key takeaways</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>The foldable iPhone is real and it is called the iPhone Duo. Apple announced it at its 9 September 2026 event.</li>
            <li>The UAE is in the first wave: pre-orders from 16 October (4 p.m. UAE time), on sale 23 October 2026.</li>
            <li>Apple lists the Duo in the UAE from AED 8,499; the top configuration is about AED 13,599, per Gulf News.</li>
            <li>No teardown exists yet, so nobody can give it a repairability score. Treat any score you see before launch with suspicion.</li>
            <li>AppleCare+ fees are already published, including AED 349 (Apple list) for inner display damage. For a first-generation foldable, that is worth a serious look.</li>
          </ul>

          <h2 id="what-announced">Is the iPhone Fold real, and what did Apple announce?</h2>
          <p>
            Yes. Apple unveiled its first foldable iPhone on Wednesday 9 September 2026 at Apple Park, at the event
            it called &quot;Surprise and Shine&quot;. The name it chose is iPhone Duo, not iPhone Fold. The same event
            introduced the iPhone 18 Pro and iPhone 18 Pro Max, which went on sale on 18 September.
          </p>
          <p>
            The Duo is on a later schedule. Pre-orders open on Friday 16 October and the phone goes on sale on Friday
            23 October 2026 in more than 70 countries. Apple lists it at US$1,999 in the United States.
          </p>

          <h2 id="uae-launch">When can I buy the iPhone Duo in the UAE, and how much is it?</h2>
          <p>
            The UAE is in the first wave. Pre-orders open on 16 October at 4 p.m. UAE time, and the phone is on sale
            from 23 October, as reported by Gulf News.
            In the UAE, Apple lists the Duo from AED 8,499; the top configuration is about AED 13,599, per Gulf News.
          </p>
          <p>
            For comparison, Apple lists the iPhone 18 Pro in the UAE from AED 5,099 and the 18 Pro Max from AED 5,499.
            Both have been in UAE stores since 18 September.
          </p>

          <h2 id="specs">What are the iPhone Duo&apos;s confirmed specs?</h2>
          <table>
            <thead>
              <tr><th>Spec</th><th>iPhone Duo (confirmed by Apple)</th></tr>
            </thead>
            <tbody>
              <tr><td>Chip</td><td>A20 Pro</td></tr>
              <tr><td>Inner display</td><td>7.6 inches, with a nano-textured polymer layer</td></tr>
              <tr><td>Outer display</td><td>5.4 inches</td></tr>
              <tr><td>Frame and hinge cover</td><td>Grade 5 titanium</td></tr>
              <tr><td>Front glass</td><td>Ceramic Shield 2</td></tr>
              <tr><td>Back</td><td>Ceramic Shield</td></tr>
              <tr><td>Water resistance</td><td>IP68</td></tr>
              <tr><td>US price</td><td>From US$1,999</td></tr>
              <tr><td>Pre-order / on sale</td><td>16 October / 23 October 2026 (70+ countries)</td></tr>
            </tbody>
          </table>
          <p>
            It shares its chip, the A20 Pro, with the iPhone 18 Pro. Unlike the 18 Pro, which has an aluminium
            unibody, the Duo uses titanium for the frame and the hinge cover.
          </p>

          <h2 id="rumours-vs-reality">What did the rumours get right and wrong?</h2>
          <p>Only two rumoured details can be checked cleanly against what Apple announced:</p>
          <table>
            <thead>
              <tr><th></th><th>What the rumours said</th><th>What Apple announced</th></tr>
            </thead>
            <tbody>
              <tr><td>Name</td><td>&quot;iPhone Fold&quot; was the common nickname</td><td>iPhone Duo</td></tr>
              <tr><td>Display sizes</td><td>About 7.7&quot; inner and 5.3&quot; outer</td><td>7.6&quot; inner and 5.4&quot; outer</td></tr>
            </tbody>
          </table>
          <p>
            Our earlier version of this article listed many more leaked specifications, such as battery size,
            weight and camera details. We have removed them rather than guess which were right. Where Apple has not
            published a figure, we do not print one.
          </p>

          <h2 id="repairability">How repairable is the iPhone Duo?</h2>
          <p>
            Nobody knows yet, and anyone who claims otherwise is guessing. The phone does not ship until 23
            October, so no teardown exists. What we do have:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>iFixit&apos;s pre-launch view.</strong> On 9 September iFixit published an opinion piece saying it is skeptical about the Duo&apos;s repairability. Its concerns are dust getting into the hinge, the effort needed to replace the inner screen, and glued batteries. That is an informed opinion, not a teardown result.</li>
            <li><strong>No score exists.</strong> A &quot;2/10&quot; repairability score has appeared in at least one search summary. We could not find any source for it, and iFixit has not scored the Duo. Treat it as false until a real teardown is published.</li>
            <li><strong>No out-of-warranty prices yet.</strong> Apple&apos;s UAE support site lists AppleCare+ fees for the Duo, but no out-of-warranty repair prices.</li>
          </ul>
          <p>
            We will update this article when a proper teardown appears. Until then, the sensible assumption for any
            first-generation foldable is that the inner display and hinge are the parts to protect.
          </p>

          <h2 id="applecare">Should I buy AppleCare+ for the iPhone Duo?</h2>
          <p>
            For most buyers, it is worth serious consideration. Apple has already published the AppleCare+ fees for
            the Duo on its UAE support site:
          </p>
          <table>
            <thead>
              <tr><th>Damage (with AppleCare+)</th><th>Apple&apos;s fee</th></tr>
            </thead>
            <tbody>
              <tr><td>Front (outer) display</td><td>AED 99 (Apple list)</td></tr>
              <tr><td>Back glass</td><td>AED 99 (Apple list)</td></tr>
              <tr><td>Inner display</td><td>AED 349 (Apple list)</td></tr>
              <tr><td>Other accidental damage</td><td>AED 349 (Apple list)</td></tr>
              <tr><td>Battery service</td><td>AED 0 (Apple list)</td></tr>
            </tbody>
          </table>
          <p>
            Without AppleCare+ there is no published out-of-warranty price to compare against yet. What we can say
            honestly is that when you have AppleCare+, Apple&apos;s fixed fees are usually cheaper than paying for a
            repair anywhere else, including at an independent workshop like ours. On a phone this new and this
            expensive, and with a folding inner screen, the plan is the safer bet.
          </p>

          <h2 id="our-support">Will MacBook Repair Dubai repair the iPhone Duo?</h2>
          <p>
            Yes, we plan to support iPhone Duo repairs after launch. MacBook Repair Dubai is an independent Apple
            repair workshop in Concord Tower, Dubai Media City, not an Apple Authorised Service Provider. We are
            Mac-first and also repair iPhone and iPad. Until real teardowns and parts supply exist, we will not
            promise turnaround times or part options we cannot back up.
          </p>
          <p>
            If you are buying a Duo, or already have one on order,{" "}
            <a href={WA} {...ext}><strong>WhatsApp us on {NAP.phoneDisplay}</strong></a> and we will tell you what
            we can do for it and when. For every iPhone Apple already ships, including the iPhone 18 Pro, see our{" "}
            <Link to="/iphone-repair-dubai">iPhone repair</Link> and{" "}
            <Link to="/iphone-screen-repair-dubai">iPhone screen repair</Link> pages. If you are weighing the Duo
            against the 18 Pro, our{" "}
            <Link to="/blog/iphone-18-pro-screen-replacement-cost-uae">iPhone 18 Pro screen replacement cost
            guide</Link> shows what Apple charges when the Pro&apos;s screen breaks.
          </p>

          <p className="text-[14px]">
            <strong>Sources (checked 26 September 2026):</strong>{" "}
            <a href="https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/" {...ext}>Apple Newsroom: iPhone Duo</a>,{" "}
            <a href="https://gulfnews.com/technology/consumer-electronics/apple-launches-iphone-duo-iphone-18-pro-in-uae-prices-release-dates-revealed-1.500669064" {...ext}>Gulf News: UAE prices and dates</a>,{" "}
            <a href="https://www.macrumors.com/2026/09/09/apple-september-2026-event-recap/" {...ext}>MacRumors event recap</a>,{" "}
            <a href="https://www.ifixit.com/News/119205/will-the-iphone-duo-be-repairable-were-skeptical" {...ext}>iFixit pre-launch opinion</a>,{" "}
            <a href="https://support.apple.com/en-ae/iphone/repair/screen-replacement" {...ext}>Apple UAE iPhone repair pricing</a>.
          </p>
        </>
      }
      faqs={[
        {
          q: "Is the iPhone Fold the same as the iPhone Duo?",
          a: "Yes. \"iPhone Fold\" was the nickname used in rumours for Apple's first foldable iPhone. When Apple announced it on 9 September 2026, it named the phone iPhone Duo. It has a 7.6-inch inner display, a 5.4-inch outer display, an A20 Pro chip and a titanium frame and hinge cover.",
        },
        {
          q: "When does the iPhone Duo go on sale in the UAE?",
          a: "The UAE is in the first launch wave. Pre-orders open on Friday 16 October 2026 at 4 p.m. UAE time, and the iPhone Duo goes on sale on Friday 23 October 2026, the same day as in more than 70 countries worldwide.",
        },
        {
          q: "How much does the iPhone Duo cost in the UAE?",
          a: "Apple's UAE price for the iPhone Duo starts from AED 8,499, and the top configuration is about AED 13,599, as reported by Gulf News. In the United States Apple lists it from US$1,999. For comparison, the iPhone 18 Pro starts at AED 5,099 (Apple list) in the UAE.",
        },
        {
          q: "How much does AppleCare+ charge to fix an iPhone Duo inner screen?",
          a: "Apple lists an AppleCare+ fee of AED 349 for inner display damage on the iPhone Duo on its UAE support site. The outer display and back glass are AED 99 each (Apple list), other accidental damage is AED 349, and battery service is AED 0. Out-of-warranty prices had not been published at the time of writing.",
        },
        {
          q: "Can the iPhone Duo be repaired in Dubai?",
          a: "Apple has already published AppleCare+ repair fees for it, and we plan to support iPhone Duo repairs after it goes on sale on 23 October 2026. No teardown exists yet, so repair methods and parts supply are still unknown. WhatsApp MacBook Repair Dubai on 055 741 3706 to check what we can do for your Duo.",
        },
      ]}
      relatedLinks={[
        { label: "iPhone repair Dubai", href: "/iphone-repair-dubai", description: "Every iPhone Apple currently ships, repaired at our Dubai Media City workshop." },
        { label: "iPhone 18 Pro screen replacement cost (UAE)", href: "/blog/iphone-18-pro-screen-replacement-cost-uae", description: "Apple's UAE list prices for the 18 Pro and Pro Max screens." },
        { label: "iPhone repair vs AppleCare+ in the UAE", href: "/blog/iphone-repair-vs-applecare-which-better", description: "When AppleCare+ pays for itself, and when it does not." },
      ]}
    />
  );
}
