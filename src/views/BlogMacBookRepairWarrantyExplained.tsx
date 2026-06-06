"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogMacBookRepairWarrantyExplained() {
  return (
    <BlogPostTemplate
      seoTitle="MacBook Repair Warranty Explained: Dubai 2026 (90-Day Cover)"
      seoDescription="Exactly what our 90-day MacBook repair warranty covers, what isn't covered, how to claim, and how it compares to Apple's warranty and AppleCare+."
      path="/blog/macbook-repair-warranty-explained"
      category="Trust · Warranty"
      h1="MacBook Repair Warranty Explained - Dubai 2026"
      hook="90-day warranty on every repair. Here's exactly what's covered (and what isn't)."
      quickAnswer="Every MacBook repair we do carries a 90-day workmanship + parts warranty (6 months on batteries). It covers the part we replaced and the work we did. It does not cover new physical damage, new liquid spills, or unrelated failures. Bring the receipt to claim - same-day re-service in most cases."
      author={{ name: "Shafiq", role: "Senior MacBook technician" }}
      datePublished="2026-04-28"
      dateModified="2026-04-28"
      readingMinutes={9}
      featuredImageAlt="MacBook repair warranty receipt and service policy explained"
      body={
        <>
          <h2>Quick answer</h2>
          <p>
            Our standard MacBook repair warranty is <strong>90 days</strong> on the specific component
            we replaced and the workmanship around it. Batteries get an extended <strong>6-month</strong>{" "}
            warranty. The warranty travels with the device - if you sell the MacBook within the
            warranty period, the buyer is covered for the remainder.
          </p>

          <h2>What our 90-day warranty covers</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Part defect</strong> - if the screen, keyboard, battery, port, or board we installed fails on its own, we replace it free.</li>
            <li><strong>Workmanship</strong> - anything that became loose, mis-seated, or stopped working as a direct consequence of our repair (e.g. a connector we touched).</li>
            <li><strong>Re-diagnosis</strong> - if the same symptom returns, we re-diagnose at no charge regardless of cause.</li>
            <li><strong>Pickup &amp; delivery for warranty service</strong> - free across Dubai, even if the original repair was walk-in.</li>
          </ul>

          <h2>What's NOT covered</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>New physical damage</strong> - fresh drops, dents, cracked screens after delivery.</li>
            <li><strong>New liquid damage</strong> - a coffee spill last week is a separate event.</li>
            <li><strong>Unrelated failures</strong> - if we replaced the screen and three months later the SSD dies, that's a new repair.</li>
            <li><strong>Software / macOS issues</strong> not caused by our hardware work.</li>
            <li><strong>Tampering</strong> - if another shop opened the MacBook after us, warranty is void.</li>
            <li><strong>Consumables</strong> - keycaps removed by user, lost screws after self-opening, etc.</li>
          </ul>

          <h2>How to claim warranty</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>WhatsApp +971 55 741 3706 with your repair receipt number and a short description of the issue.</li>
            <li>We confirm the warranty status against our database within minutes.</li>
            <li>Drop the MacBook at Concord Tower or book free pickup.</li>
            <li>Re-diagnosis the same day. If covered, repaired and returned within 24-48 hours typically.</li>
            <li>You don't pay anything for covered work - including the new part.</li>
          </ol>

          <h2>Apple warranty vs our warranty</h2>
          <BlogPriceTable
            caption="Coverage comparison"
            headers={["Aspect", "Apple 1-year warranty", "Our 90-day warranty"]}
            rows={[
              { model: "Duration", apple: "12 months from purchase", ours: "90 days from repair (6 months batteries)" },
              { model: "Scope", apple: "Whole device - manufacturing defects only", ours: "The part we replaced + our workmanship" },
              { model: "Accidental damage", apple: "Not covered (need AppleCare+)", ours: "Not covered" },
              { model: "Liquid damage", apple: "Not covered (need AppleCare+)", ours: "Not covered" },
              { model: "Where to claim", apple: "Apple-Authorised Service Provider only", ours: "Our workshop or free pickup" },
              { model: "Turnaround", apple: "Often 5-10 business days", ours: "Same-day or 24-48 hours" },
            ]}
          />

          <h2>AppleCare+ interaction with our repairs</h2>
          <p>
            <strong>Important</strong>: any third-party repair (including ours) typically voids
            AppleCare+ for the device. If your MacBook is under AppleCare+ and the issue is covered
            (battery &lt; 80% health, manufacturing defect), use AppleCare+ first - it's already paid
            for. Come to us when AppleCare+ has expired, the issue isn't covered, or the deductible is
            higher than our price. Our customers most often arrive after AppleCare+ ends or after
            Apple has quoted a logic-board replacement at AED 6,000+ - see our{" "}
            <Link to="/blog/iphone-repair-vs-applecare-which-better" className="text-accent-bright font-semibold hover:underline">
              repair vs AppleCare+ math
            </Link>
            .
          </p>

          <h2>Battery warranty extension (6 months)</h2>
          <p>
            Batteries are consumables - but a quality replacement battery should last well over a
            year. We extend warranty to <strong>6 months</strong> on every battery we install, covering
            premature capacity loss (&lt; 80% within 6 months), swelling, or failure to charge. Cycle
            count is logged at install via{" "}
            <code>system_profiler SPPowerDataType</code> for objective comparison at claim time.
          </p>

          <h2>Why other shops offer 30 days only</h2>
          <p>
            Short warranties usually signal short-life parts. A 30-day warranty on a screen means the
            shop expects roughly 5-10% failure within the first month and doesn't want to be on the
            hook beyond that. We use higher-grade panels with documented failure rates &lt; 1% over 12
            months - which is why 90 days is comfortable for us, and why our re-service rate is under
            2% of jobs.
          </p>

          <h2>Warranty transferability</h2>
          <p>
            Yes - the warranty is on the <em>device</em> (matched by serial number), not the
            customer. If you sell the MacBook on Dubizzle or to a friend within the warranty period,
            the buyer gets the remainder. Just hand them the receipt. This is a real selling point
            when listing a refurbished MacBook - see our{" "}
            <Link to="/blog/should-i-buy-refurbished-macbook-dubai" className="text-accent-bright font-semibold hover:underline">
              refurbished MacBook buying guide
            </Link>{" "}
            for how buyers view this.
          </p>
        </>
      }
      faqs={[
        { q: "What if the part fails on day 91?", a: "We'll still look at it. Most shops would refuse, but we honour goodwill claims close to expiry - particularly if the failure mode is clearly a part defect (e.g. dead pixel column on a screen, sudden battery swell). Worst case, we offer the replacement at our cost price." },
        { q: "Do I need the original receipt to claim?", a: "Strongly preferred but not strictly required - we keep digital records by serial number for 5 years. Bring the device, we'll look it up. Receipt speeds the process." },
        { q: "Is warranty work logged in Apple's system?", a: "No, because we are not an Apple-Authorised Service Provider - Apple doesn't recognise third-party repair history. The warranty is between you and us, backed by our own records and 21-year track record." },
        { q: "What if I damage the MacBook a week after pickup?", a: "Honest answer - that's a new repair, not a warranty claim. We'll quote at our normal price. We'll also offer a 10% repeat-customer discount on the new work." },
        { q: "Does warranty cover labour as well as parts?", a: "Yes - both. If we have to open the MacBook again to fix a covered issue, the labour is included. There is no surprise charge during a warranty claim." },
        { q: "How is your warranty better than Apple Service Center for out-of-warranty MacBooks?", a: "Apple's out-of-warranty repair carries a 90-day warranty too - same duration as ours. The difference is price (we're typically 50-70% of Apple's quote), turnaround (same-day vs 5-10 days), and pickup service. The warranty itself is comparable." },
      ]}
      relatedLinks={[
        { label: "Warranty page", href: "/warranty", description: "Full written warranty terms." },
        { label: "Repair vs AppleCare+", href: "/blog/iphone-repair-vs-applecare-which-better", description: "When AppleCare+ is the better path." },
        { label: "Refurbished MacBook guide", href: "/blog/should-i-buy-refurbished-macbook-dubai", description: "How transferable warranty raises resale value." },
      ]}
    />
  );
}
