"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogIPhoneRepairVsReplace() {
  return (
    <BlogPostTemplate
      seoTitle="iPhone Repair or Replace? Decision Guide 2026 (Dubai)"
      seoDescription="iPhone repair vs replace, Dubai 2026. Rule of thumb: repair if cost is under 50% of resale value. Model-by-model matrix from iPhone 6 to 17 Pro Max."
      path="/blog/iphone-repair-vs-replace-decision-guide"
      category="Cost guide · iPhone"
      h1="iPhone Repair or Replace? Decision Guide 2026"
      hook="Spend AED 600 on a screen repair, or AED 3,599 on a new iPhone 17? Here's the math, model by model, in April 2026 Dubai prices."
      quickAnswer="Repair if the cost is under 50% of your iPhone's current resale value. In Dubai April 2026 that means: iPhone 6/7/8 - usually replace; iPhone 11/12 - repair if minor; iPhone 13/14 - definitely repair; iPhone 15/16/17 - almost always repair unless multiple major issues at once."
      author={{ name: "Ali", role: "Lead iPhone diagnostic technician" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={11}
      featuredImageAlt="iPhone repair vs replace decision matrix - old and new iPhones on a workbench in Dubai"
      body={
        <>
          <h2>The decision matrix - at a glance</h2>
          <p>
            Use the table below to find your iPhone, see the typical resale value in Dubai right
            now (April 2026), the typical repair cost for a single major issue (screen or battery),
            and the recommendation. The rule: <strong>repair if total repair cost is under 50%
            of resale value.</strong>
          </p>
          <BlogPriceTable
            caption="iPhone repair-vs-replace decision matrix - Dubai April 2026"
            headers={["Model", "Used resale (AED)", "Single repair (AED)", "Recommendation"]}
            rows={[
              { model: "iPhone 6 / 6s / 6 Plus / 6s Plus", ours: "150-400", apple: "350-400", note: "Replace (cost ≥ value)" },
              { model: "iPhone 7 / 7 Plus",      ours: "400-600",   apple: "400-450", note: "Borderline - repair only if battery-only" },
              { model: "iPhone 8 / 8 Plus / SE 1/2", ours: "500-800", apple: "400-500", note: "Repair if single issue" },
              { model: "iPhone X / XS / XR",     ours: "700-1,200", apple: "550-700", note: "Repair (under 50% rule)" },
              { model: "iPhone 11 / 11 Pro",     ours: "900-1,800", apple: "600-750", note: "Repair" },
              { model: "iPhone 12 / 12 Pro",     ours: "1,200-2,200", apple: "700-800", note: "Repair" },
              { model: "iPhone 13 / 13 Pro",     ours: "1,500-2,800", apple: "750-900", note: "Definitely repair" },
              { model: "iPhone 14 / 14 Pro",     ours: "1,900-3,200", apple: "750-950", note: "Definitely repair" },
              { model: "iPhone 15 / 15 Pro",     ours: "2,200-3,800", apple: "750-1,000", note: "Definitely repair" },
              { model: "iPhone 16 / 16 Pro",     ours: "2,800-4,400", apple: "800-1,050", note: "Definitely repair" },
              { model: "iPhone 17 / 17 Pro",     ours: "3,200-5,000", apple: "850-1,200", note: "Definitely repair" },
              { model: "iPhone 17 Pro Max",      ours: "4,200-5,800", apple: "1,400",      note: "Definitely repair" },
              { model: "iPhone Air",             ours: "3,800-5,200", apple: "1,100",      note: "Definitely repair" },
            ]}
          />
          <p className="text-[13px] text-on-primary-muted mono">
            Used pricing range = Dubai market (Dubizzle, OpenSooq, Carrefour electronics trade-in)
            April 2026. Lower bound = damaged/issued; upper bound = clean unit, original box, full
            history.
          </p>

          <h2>iPhone 6 / 7 / 8 - almost always replace (parts scarce, value low)</h2>
          <p>
            The iPhone 6 turned 12 years old this year. The 7 turned 10. The 8 turned 9. Used
            resale on a working iPhone 6 in Dubai right now is AED 150-400. A screen repair is
            AED 350. A battery is AED 250. Doing both is AED 600 on a phone worth AED 200. The
            math is brutal.
          </p>
          <p>
            <strong>Exception:</strong> a battery-only repair on a clean iPhone 8 (AED 250 on a
            phone worth AED 600-800) is fine. We'll do it. But if the phone has a cracked screen
            <em>and</em> a tired battery <em>and</em> Touch ID issues - we'll honestly tell you
            it's time to upgrade. A used iPhone 12 in Dubai is now AED 1,200, fits the same
            ecosystem, and runs every current app.
          </p>

          <h2>iPhone 11 / 12 - repair if minor, replace if multiple issues</h2>
          <p>
            iPhone 11 (2019) and 12 (2020) hit the sweet spot in 2026: still very usable, parts
            cheap, repair costs reasonable. A AED 600 screen + AED 300 battery is AED 900 on a
            phone worth AED 1,500-2,200. Comfortable repair territory.
          </p>
          <p>
            Where we'd push back: if you bring in an iPhone 11 with cracked front <em>and</em>
            back glass <em>and</em> a swollen battery <em>and</em> a wobbly Lightning port - that's
            AED 1,500+ in repairs on a AED 1,000 phone. At that point a used iPhone 13 (AED 1,800)
            is the better call.
          </p>

          <h2>iPhone 13 / 14 - definitely repair (still 60-70% of original value)</h2>
          <p>
            Both lines are still in the "comfortably modern" zone. iPhone 14 Pro launched at
            AED 4,599; today's used market is AED 2,800-3,200 - that's 65% of original value
            after 4 years. A typical AED 800 repair is 25% of resale value. Easy yes.
          </p>
          <p>
            Special case: <em>if your iPhone 14 Pro has the rare always-on display burn-in issue</em>
            (we see about 1 a month, after 3+ years of always-on use), the screen repair is
            AED 950. Still worth it.
          </p>

          <h2>iPhone 15 / 16 / 17 - always repair unless multiple major damages</h2>
          <p>
            For phones still in or near Apple's current line, repair is almost always the answer.
            New replacement cost (AED 3,599 for iPhone 17, AED 5,999 for 17 Pro Max) is so much
            higher than any single repair that the math is rarely close. Even three repairs on a
            17 Pro Max (screen + battery + back glass = AED 2,250) is half the replacement cost.
          </p>
          <p>
            The genuine exception: water damage that's left the phone mostly unrecoverable
            <em>and</em> screen broken <em>and</em> rear camera failed. At AED 3,000+ in repairs
            with no guarantee, AppleCare+ replacement (if you have it) at AED 379 is better.
            Without AppleCare+, this is the rare case where replace beats repair on a phone less
            than 2 years old.
          </p>

          <h2>Resale value - where to actually sell in Dubai 2026</h2>
          <p>
            For accurate current value, check three places:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Dubizzle</strong> - best for individual sales; expect 7-14 days to find a buyer</li>
            <li><strong>Apple Trade-In</strong> (apple.com/ae/shop/trade-in) - fastest, but 30-40% below market value</li>
            <li><strong>Carrefour iCity / Sharaf DG trade-in</strong> - instant, ~25% below Dubizzle</li>
            <li><strong>Local phone-souk dealer</strong> (Naif, Mall of Emirates) - instant cash, 20-30% below market</li>
          </ul>

          <h2>Apple Trade-In values vs sell privately in Dubai</h2>
          <p>
            Real-world example, April 2026: clean iPhone 14 Pro Max 256GB.
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Apple Trade-In offer: AED 1,800 (credit toward new Apple purchase)</li>
            <li>Sharaf DG trade-in cash: AED 1,950</li>
            <li>Dubizzle realistic listing: AED 2,800-3,000 (sells in 5-10 days)</li>
            <li>Phone souk dealer cash: AED 2,200-2,400 (instant)</li>
          </ul>
          <p>
            If you have time, sell privately. If you need cash today and want to skip the back-and-
            forth, a souk dealer beats Apple by AED 400+. Apple Trade-In is convenient but
            consistently the lowest offer.
          </p>

          <h2>What to do next</h2>
          <p>
            Not sure which side of the line your iPhone falls on?{" "}
            <Link to="/iphone-full-diagnostic-dubai" className="text-accent-bright font-semibold hover:underline">
              Free 30-minute iPhone diagnostic
            </Link>{" "}
            - we tell you exactly what's wrong, what it costs to fix, and our honest read on
            repair vs replace. Or browse{" "}
            <Link to="/iphone-repair-dubai" className="text-accent-bright font-semibold hover:underline">
              every iPhone model
            </Link>{" "}
            for model-specific pricing.
          </p>
        </>
      }
      faqs={[
        { q: "What's the rule of thumb for iPhone repair vs replace?", a: "Repair if total repair cost is under 50% of the phone's current resale value. So a AED 750 screen repair on an iPhone 13 worth AED 2,200 is an easy yes (34%). A AED 600 repair on an iPhone 7 worth AED 500 is an easy no (120%)." },
        { q: "Should I repair my iPhone 8 in 2026?", a: "Battery-only repair on a clean unit - yes, AED 250 on a AED 600-800 phone. Multiple issues - no. iPhone 8 is now 9 years old and the parts ecosystem is shrinking. A used iPhone 12 in Dubai is AED 1,200 and a much better long-term bet." },
        { q: "Does AppleCare+ change the repair-vs-replace math?", a: "Yes, dramatically. AppleCare+ accidental damage service fee is AED 379 for screen/back glass, AED 1,200 for any other damage. If you have it active, almost any repair becomes 'use AppleCare+'. Without it, our pricing is competitive on every model." },
        { q: "What's the best place to sell a used iPhone in Dubai?", a: "Dubizzle for highest price (5-10 days to sell). Sharaf DG / Carrefour for instant trade-in (~25% below Dubizzle). Phone souk dealers (Naif) for instant cash (~20% below). Apple Trade-In is the convenient but lowest option." },
        { q: "Should I repair an iPhone with multiple issues?", a: "Add up all the repairs. If total < 50% of resale, repair. If total > 50% of resale, consider replacing. A single AED 750 fix on a 13 Pro is a no-brainer; AED 2,200 of repairs on the same phone is the line where replacement makes sense." },
        { q: "Is repair always cheaper than replacement?", a: "On any iPhone less than 4 years old: almost always yes. On iPhone 6/7 (8+ years old): often no - repair cost matches or exceeds market value. We give you the honest math at the free diagnostic - no upsell." },
      ]}
      relatedLinks={[
        { label: "Free iPhone diagnostic", href: "/iphone-full-diagnostic-dubai", description: "30-minute diagnostic - we tell you what's wrong and what it costs." },
        { label: "Every iPhone model we repair", href: "/iphone-repair-dubai", description: "44 model pages with current pricing." },
        { label: "iPhone screen repair cost guide", href: "/blog/iphone-screen-repair-cost-dubai-2026", description: "The single biggest line item in any repair-vs-replace calc." },
      ]}
    />
  );
}
