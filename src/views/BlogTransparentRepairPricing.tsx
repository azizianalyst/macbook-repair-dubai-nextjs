"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogTransparentRepairPricing() {
  return (
    <BlogPostTemplate
      seoTitle="Transparent Repair Pricing - How We Quote (Dubai 2026)"
      seoDescription="The exact formula behind our repair quotes: parts + labour + 10% margin. Free diagnosis, no-fix-no-charge, no surprises. Read the full breakdown."
      path="/blog/transparent-repair-pricing-explained"
      category="Trust · Pricing"
      h1="How We Calculate Repair Quotes - Full Transparency"
      hook="Our quote = parts + labour + 10% margin + 0% surprises. Here's the breakdown."
      quickAnswer="A repair quote at MacBook Repair Dubai is built from: (1) part cost at the tier you choose, (2) labour at AED 100-250 per technician-hour depending on complexity, (3) a flat ~10% workshop margin. Diagnosis is free. Quote is fixed before work starts. No-fix-no-charge - you only pay if we solve your problem."
      author={{ name: "Ali", role: "Workshop manager" }}
      datePublished="2026-04-28"
      dateModified="2026-04-28"
      readingMinutes={9}
      featuredImageAlt="Transparent repair pricing breakdown - parts, labour, margin"
      body={
        <>
          <h2>Quick answer</h2>
          <p>
            Most Dubai repair shops give an "estimate" that becomes a different number when you
            collect. We give a <strong>quote</strong> - fixed, written, agreed in advance. The number
            comes from a simple formula, not a market guess. Here's exactly what's inside it.
          </p>

          <h2>Parts cost</h2>
          <p>
            We buy at wholesale from audited Tier 2 OEM-equivalent suppliers (see our{" "}
            <Link to="/blog/genuine-parts-vs-quality-alternative-explained" className="text-accent font-semibold hover:underline">
              parts policy
            </Link>
            ). The quote line shows the part name, tier, and our cost +
            margin. If you choose Tier 3 aftermarket to save money, the line item changes accordingly.
          </p>
          <BlogPriceTable
            caption="Sample part costs (workshop cost vs your quote line)"
            headers={["Part", "Workshop cost", "Your quote line"]}
            rows={[
              { model: "iPhone 15 Pro screen (Tier 2)", apple: "AED 720", ours: "AED 850" },
              { model: "MacBook Air M2 battery (Tier 2)", apple: "AED 380", ours: "AED 450" },
              { model: "iPhone 14 charging port (Tier 2)", apple: "AED 90", ours: "AED 110" },
              { model: "MacBook Pro 14 M3 keyboard assembly", apple: "AED 1,400", ours: "AED 1,650" },
            ]}
          />

          <h2>Labour time (per service breakdown)</h2>
          <p>
            Labour is billed at <strong>AED 100-250 per hour</strong> depending on technician
            seniority and tooling complexity. Quick reference:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>iPhone screen / battery</strong>: 30-45 min × AED 150/hr ≈ AED 75-110.</li>
            <li><strong>MacBook battery (glued)</strong>: 75-90 min × AED 200/hr ≈ AED 250-300.</li>
            <li><strong>MacBook screen assembly</strong>: 60-90 min × AED 200/hr ≈ AED 200-300.</li>
            <li><strong>Logic-board micro-soldering</strong>: 2-6 hours × AED 250/hr ≈ AED 500-1,500.</li>
            <li><strong>Liquid damage cleaning</strong>: 90 min - 4 hours depending on extent.</li>
          </ul>

          <h2>Why we offer free diagnosis</h2>
          <p>
            Diagnosis is the part where most shops trap you - pay AED 200 to find out what's wrong,
            non-refundable, and then they hold the device hostage until you accept their (inflated)
            repair price. We don't do that. Free diagnosis means:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>You pay nothing to learn what's wrong.</li>
            <li>You take the device back even if you don't proceed.</li>
            <li>You can compare our quote to other shops freely.</li>
          </ul>
          <p>
            We absorb the diagnosis cost (typically 30-60 min of technician time) into the workshop
            margin on jobs we win. About 88% of customers proceed after a free diagnosis, which makes
            the math work.
          </p>

          <h2>What's included in the quote</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>The part(s) at the tier you chose.</li>
            <li>All labour required for the planned repair.</li>
            <li>Adhesives, screws, gaskets, calibration tools.</li>
            <li>Post-repair quality check + battery / display diagnostic.</li>
            <li>Pickup &amp; delivery if you opted in.</li>
            <li>The 12-month warranty.</li>
          </ul>

          <h2>What's NOT included</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Hidden additional damage discovered mid-repair</strong> - e.g. opening the MacBook reveals corrosion behind the screen we didn't see externally. We <em>stop</em>, photograph it, send you a revised quote, and only proceed with your written re-approval.</li>
            <li><strong>Out-of-scope upsells</strong> - we won't surprise-bill you for "while we're in there, we replaced the speakers too".</li>
            <li><strong>Data recovery</strong> - quoted separately if needed.</li>
          </ul>

          <h2>How we explain quote variations</h2>
          <p>
            Sometimes two customers with the same model get different quotes - usually because one
            chose Tier 2 and the other chose Tier 3, or the second device had additional damage. The
            quote always shows the line items so the difference is visible.
          </p>

          <h2>No-fix-no-charge policy</h2>
          <p>
            If we cannot solve your problem, you pay <strong>nothing</strong> - not even diagnosis,
            not even pickup. Read the full policy in our{" "}
            <Link to="/blog/no-fix-no-charge-policy-explained" className="text-accent font-semibold hover:underline">
              no-fix-no-charge breakdown
            </Link>
            .
          </p>

          <h2>'Estimates' vs 'quotes' - we give quotes</h2>
          <BlogPriceTable
            caption="Estimate vs Quote - the language matters"
            headers={["Aspect", "Estimate (most shops)", "Quote (us)"]}
            rows={[
              { model: "Binding?", apple: "No - can change at pickup", ours: "Yes - fixed before work starts" },
              { model: "Format", apple: "Verbal or text message", ours: "Written, line-itemised, on receipt" },
              { model: "Variance at pickup", apple: "Often +20-50%", ours: "0% unless we re-quoted in writing" },
              { model: "Surprise additions", apple: "Common", ours: "Never without written re-approval" },
            ]}
          />
        </>
      }
      faqs={[
        { q: "What if the repair turns out to be more complex than the quote covers?", a: "We stop, photograph the additional issue, message you with a revised quote, and only proceed if you approve in writing (WhatsApp counts). If you decline, we re-assemble the device free and you owe nothing extra." },
        { q: "Why is your margin only ~10%? That seems low.", a: "Volume + retention. We do 1,500+ repairs a month with 60%+ repeat / referral business. Lower per-job margin works at our scale and reputation. Pop-up shops need 40-60% per job because they don't get repeat customers." },
        { q: "Can I get a quote without bringing the device in?", a: "We can give a price range from photos and a description over WhatsApp, but the firm quote requires a 10-minute physical diagnosis. Most often the WhatsApp range is accurate within 10-15%." },
        { q: "Do you price-match other Dubai shops?", a: "Sometimes yes, but only against legitimate quotes from other reputable shops (with receipt, address, warranty). We won't match a kiosk quote that uses Tier 3 parts and 30-day warranty." },
        { q: "Is the quote inclusive of VAT?", a: "Yes - all our quotes are VAT-inclusive (5% UAE VAT). The receipt breaks out the VAT separately for business customers who need it." },
        { q: "Can I see the old part you removed?", a: "Yes - always. We return removed parts (battery, screen, board, etc.) on request as proof. If you don't want them, we recycle through certified e-waste channels." },
      ]}
      relatedLinks={[
        { label: "Pricing page", href: "/pricing", description: "Published prices for every common repair." },
        { label: "Genuine parts vs alternatives", href: "/blog/genuine-parts-vs-quality-alternative-explained", description: "How tier choice affects your quote line." },
        { label: "No-fix-no-charge explained", href: "/blog/no-fix-no-charge-policy-explained", description: "Full policy detail." },
      ]}
    />
  );
}
