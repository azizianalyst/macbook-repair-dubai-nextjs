"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogMacBookRepairWarrantyExplained() {
  return (
    <BlogPostTemplate
      seoTitle="MacBook Repair Warranty Explained: Dubai 2026 (Up to 12 Months)"
      seoDescription="Exactly how our tiered MacBook repair warranty works - 12 months on hardware, 3 months on batteries and screens, 15 days on board and liquid work - and how to claim."
      path="/blog/macbook-repair-warranty-explained"
      wide
      toc={[
        { id: "quick-answer", label: "Quick answer" },
        { id: "warranty-tiers", label: "The warranty tiers" },
        { id: "what-covered", label: "What the warranty covers" },
        { id: "what-not-covered", label: "What's NOT covered" },
        { id: "how-to-claim", label: "How to claim warranty" },
        { id: "apple-vs-ours", label: "Apple warranty vs ours" },
        { id: "applecare-interaction", label: "AppleCare+ interaction" },
        { id: "battery-warranty", label: "Battery warranty" },
        { id: "why-periods-differ", label: "Why periods differ" },
        { id: "transferability", label: "Warranty transferability" },
      ]}
      category="Trust · Warranty"
      h1="MacBook Repair Warranty Explained - Dubai 2026"
      hook="Up to 12 months, depending on the repair. Here's exactly which tier your repair falls in (and what isn't covered)."
      quickAnswer="Our MacBook repair warranty is tiered by repair type: 12 months on most hardware (trackpad, ports, SSD/RAM, hinge, speakers), 3 months on batteries and screens, and 15 days on logic-board, liquid-damage and software work. It covers the part we replaced and our workmanship - not new damage or unrelated failures. Bring the receipt to claim; same-day re-service in most cases."
      author={{ name: "Shafiq", role: "Senior MacBook technician" }}
      datePublished="2026-04-28"
      dateModified="2026-06-13"
      readingMinutes={9}
      featuredImageAlt="MacBook Repair Warranty Explained. MacBook repair warranty receipt and service policy explained"
      body={
        <>
          <h2 id="quick-answer">MacBook Repair Warranty Explained. Quick answer</h2>
          <p>
            We give a written warranty of <strong>up to 12 months, depending on the repair</strong>.
            Most hardware replacements carry the full 12 months; batteries and screens carry{" "}
            <strong>3 months</strong>; keyboard replacements and complex board-level or
            liquid-damage work carry <strong>15 days</strong>. In every tier the warranty covers the
            specific component we replaced and the workmanship around it - and it travels with the
            device, so if you sell the MacBook the buyer is covered for the remainder.
          </p>

          <h2 id="warranty-tiers">The warranty tiers</h2>
          <BlogPriceTable
            caption="Warranty period by repair type"
            headers={["Repair type", "Warranty", "Why this period"]}
            rows={[
              { model: "Trackpad, charging port, SSD/RAM upgrade, hinge, fan, speaker, Touch Bar", apple: "12 months", ours: "New hardware with low, predictable failure rates - we can stand behind it for a year." },
              { model: "Battery replacement", apple: "3 months + 80% capacity guarantee", ours: "Batteries are consumables; 3 months is long enough to catch any defective cell." },
              { model: "Screen replacement (MacBook, iMac, iPad, iPhone)", apple: "3 months", ours: "Covers panel defects - dead pixels, backlight, True Tone faults. New impact damage is a new event." },
              { model: "Keyboard replacement", apple: "15 days", ours: "Long enough to surface any assembly or flex-cable issue from the swap." },
              { model: "Logic board, GPU, liquid damage, data recovery", apple: "15 days", ours: "Board-level and corrosion work depends on the condition of the surrounding board, which we don't control." },
              { model: "Software, macOS reinstall, virus removal, diagnostics", apple: "15 days", ours: "Software state changes the moment the machine is back in use." },
              { model: "iCloud / network unlocks", apple: "No parts warranty", ours: "Account-level services - nothing physical is installed." },
            ]}
          />

          <h2 id="what-covered">What the warranty covers</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Part defect</strong> - if the component we installed fails on its own within its tier period, we replace it free.</li>
            <li><strong>Workmanship</strong> - anything that became loose, mis-seated, or stopped working as a direct consequence of our repair (e.g. a connector we touched).</li>
            <li><strong>Re-diagnosis</strong> - if the same symptom returns, we re-diagnose at no charge regardless of cause.</li>
            <li><strong>Pickup &amp; delivery for warranty service</strong> - free across Dubai, even if the original repair was walk-in.</li>
          </ul>

          <h2 id="what-not-covered">What's NOT covered</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>New physical damage</strong> - fresh drops, dents, cracked screens after delivery.</li>
            <li><strong>New liquid damage</strong> - a coffee spill last week is a separate event.</li>
            <li><strong>Unrelated failures</strong> - if we replaced the screen and three months later the SSD dies, that's a new repair.</li>
            <li><strong>Software / macOS issues</strong> not caused by our hardware work.</li>
            <li><strong>Tampering</strong> - if another shop opened the MacBook after us, warranty is void.</li>
            <li><strong>Consumables</strong> - keycaps removed by user, lost screws after self-opening, etc.</li>
          </ul>

          <h2 id="how-to-claim">How to claim warranty</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>WhatsApp +971 55 741 3706 with your repair receipt number and a short description of the issue.</li>
            <li>We confirm the warranty status against our database within minutes.</li>
            <li>Drop the MacBook at Concord Tower or book free pickup.</li>
            <li>Re-diagnosis the same day. If covered, repaired and returned within 24-48 hours typically.</li>
            <li>You don't pay anything for covered work - including the new part.</li>
          </ol>

          <h2 id="apple-vs-ours">Apple warranty vs our warranty</h2>
          <BlogPriceTable
            caption="Coverage comparison"
            headers={["Aspect", "Apple 1-year warranty", "Our repair warranty"]}
            rows={[
              { model: "Duration", apple: "12 months from purchase", ours: "Up to 12 months from repair, tiered by repair type" },
              { model: "Scope", apple: "Whole device - manufacturing defects only", ours: "The part we replaced + our workmanship" },
              { model: "Accidental damage", apple: "Not covered (need AppleCare+)", ours: "Not covered" },
              { model: "Liquid damage", apple: "Not covered (need AppleCare+)", ours: "Not covered" },
              { model: "Where to claim", apple: "Apple-Authorised Service Provider only", ours: "Our workshop or free pickup" },
              { model: "Turnaround", apple: "Often 5-10 business days", ours: "Same-day or 24-48 hours" },
            ]}
          />

          <h2 id="applecare-interaction">AppleCare+ interaction with our repairs</h2>
          <p>
            <strong>Important</strong>: any third-party repair (including ours) typically voids
            AppleCare+ for the device. If your MacBook is under AppleCare+ and the issue is covered
            (battery &lt; 80% health, manufacturing defect), use AppleCare+ first - it's already paid
            for. Come to us when AppleCare+ has expired, the issue isn't covered, or the deductible is
            higher than our price. Our customers most often arrive after AppleCare+ ends or after
            Apple has quoted a logic-board replacement at AED 6,000+ - see our{" "}
            <Link to="/blog/iphone-repair-vs-applecare-which-better" className="text-accent font-semibold hover:underline">
              repair vs AppleCare+ math
            </Link>
            .
          </p>

          <h2 id="battery-warranty">Battery warranty (3 months + capacity guarantee)</h2>
          <p>
            Batteries are consumables - but a quality replacement battery should last well over a
            year. We provide a <strong>3-month</strong> warranty on every battery we install, covering
            premature capacity loss (&lt; 80% within 3 months), swelling, or failure to charge. Cycle
            count is logged at install via{" "}
            <code>system_profiler SPPowerDataType</code> for objective comparison at claim time.
          </p>

          <h2 id="why-periods-differ">Why the periods differ by repair type</h2>
          <p>
            A single flat number would either short-change you on hardware (where a year is easy to
            stand behind) or over-promise on board-level work (where the outcome depends on how far
            corrosion or a power fault has already spread through a board we didn't build). Tying the
            period to the repair type is the honest version: long cover where failure rates are low
            and measurable, shorter cover where the surrounding hardware - not our work - is the real
            risk. The full written terms are on our{" "}
            <Link to="/warranty" className="text-accent font-semibold hover:underline">
              warranty page
            </Link>
            .
          </p>

          <h2 id="transferability">Warranty transferability</h2>
          <p>
            Yes - the warranty is on the <em>device</em> (matched by serial number), not the
            customer. If you sell the MacBook on Dubizzle or to a friend within the warranty period,
            the buyer gets the remainder. Just hand them the receipt. This is a real selling point
            when listing a refurbished MacBook - see our{" "}
            <Link to="/blog/should-i-buy-refurbished-macbook-dubai" className="text-accent font-semibold hover:underline">
              refurbished MacBook buying guide
            </Link>{" "}
            for how buyers view this.
          </p>
        </>
      }
      faqs={[
        { q: "What if the part fails just after the warranty period ends?", a: "We'll still look at it. Most shops would refuse, but we honour goodwill claims close to expiry - particularly if the failure mode is clearly a part defect (e.g. dead pixel column on a screen, sudden battery swell). Worst case, we offer the replacement at our cost price." },
        { q: "Do I need the original receipt to claim?", a: "Strongly preferred but not strictly required - we keep digital records by serial number for 5 years. Bring the device, we'll look it up. Receipt speeds the process." },
        { q: "Why is the logic-board warranty only 15 days?", a: "Board-level repair fixes the failed circuit, but the rest of the board has lived the same life - heat cycles, liquid exposure, power surges. We can guarantee our joint and the component we replaced; we can't guarantee a neighbouring chip won't fail next month. 15 days catches anything related to our work." },
        { q: "Is warranty work logged in Apple's system?", a: "No, because we are not an Apple-Authorised Service Provider - Apple doesn't recognise third-party repair history. The warranty is between you and us, backed by our own records and 21-year track record." },
        { q: "What if I damage the MacBook a week after pickup?", a: "Honest answer - that's a new repair, not a warranty claim. We'll quote at our normal price. We'll also offer a 10% repeat-customer discount on the new work." },
        { q: "Does warranty cover labour as well as parts?", a: "Yes - both. If we have to open the MacBook again to fix a covered issue, the labour is included. There is no surprise charge during a warranty claim." },
        { q: "How is your warranty better than Apple Service Center for out-of-warranty MacBooks?", a: "Apple's out-of-warranty repair carries a 90-day warranty on the part and labour. Ours runs up to 12 months on hardware repairs. Add price (we're typically 50-70% of Apple's quote), turnaround (same-day vs 5-10 days), and free pickup, and the comparison usually favours independent repair." },
      ]}
      relatedLinks={[
        { label: "Warranty page", href: "/warranty", description: "Full written warranty terms." },
        { label: "Repair vs AppleCare+", href: "/blog/iphone-repair-vs-applecare-which-better", description: "When AppleCare+ is the better path." },
        { label: "Refurbished MacBook guide", href: "/blog/should-i-buy-refurbished-macbook-dubai", description: "How transferable warranty raises resale value." },
      ]}
    />
  );
}
