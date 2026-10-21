"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogIPhoneWorthDubai() {
  return (
    <BlogPostTemplate
      seoTitle="How Much Is My iPhone Worth in Dubai 2026? Resale Guide"
      seoDescription="What every iPhone is worth in Dubai - mint, good, cracked. Compare Dubizzle, Apple Trade-In and our cash buy-back. Message us for today's exact offer."
      path="/blog/how-much-is-my-iphone-worth-dubai"
      wide
      toc={[
        { id: "top-5-models", label: "Top 5 models" },
        { id: "full-resale-table", label: "Full resale table" },
        { id: "where-to-sell", label: "Where to sell" },
        { id: "apple-trade-in-pricing", label: "Apple Trade-In pricing" },
        { id: "condition-grading", label: "Condition grading" },
        { id: "cracked-screen-value", label: "Cracked screen value" },
        { id: "battery-health-value", label: "Battery health value" },
        { id: "maximize-sale-price", label: "Maximize sale price" },
        { id: "icloud-lock-check", label: "iCloud lock check" },
      ]}
      category="Resale guide · iPhone"
      h1="How Much Is My iPhone Worth - Dubai 2026 Resale Guide"
      hook="Your iPhone has resale value - even cracked. Here's what each model gets in Dubai right now."
      quickAnswer="In Dubai, the newest Pro Max models hold the most resale value and older models the least. A cracked screen cuts value 30-50%; battery below 80% cuts another 15%. Dubizzle pays the most but is slow, we pay a little less for instant cash, and Apple Trade-In pays well below market. Message us on WhatsApp for today's exact offer on your model."
      author={{ name: "Shafiq", role: "Senior iPhone technician" }}
      datePublished="2026-04-27"
      dateModified="2026-04-27"
      readingMinutes={11}
      featuredImageAlt="How Much Is My iPhone Worth Dubai, iPhone resale price guide Dubai 2026 - all models"
      body={
        <>
          <h2 id="top-5-models">How Much Is My iPhone Worth Dubai. Quick answer - top 5 models, current Dubai resale</h2>
          <p>
            Values below assume mint condition (no cracks, ≥85% battery health, original box, no iCloud lock).
            Dubizzle "asking" prices are 15-20% higher than what actually sells. Message us on WhatsApp for
            today's exact buy-back offer on your model.
          </p>
          <BlogPriceTable
            caption="Top 5 iPhones - Dubai resale (mint, April 2026)"
            headers={["Model", "Dubizzle (sold)", "Our buy-back (cash today)", "Apple Trade-In UAE"]}
            rows={[
              { model: "iPhone 17 Pro Max 256 GB", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 17 Pro 256 GB", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 16 Pro Max 256 GB", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 15 Pro Max 256 GB", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 14 Pro Max 256 GB", ours: "Price on request", apple: "Price on request", note: "Price on request" },
            ]}
          />

          <h2 id="full-resale-table">Full table - every iPhone, every condition (April 2026)</h2>
          <BlogPriceTable
            caption="Full Dubai resale table by model + condition (mid-tier storage)"
            headers={["Model", "Mint", "Good", "Cracked screen"]}
            rows={[
              { model: "iPhone 17 Pro Max", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 17 Pro", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone Air", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 17", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 17e", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 16 Pro Max", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 16 Pro", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 16 Plus", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 16", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 15 Pro Max", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 15 Pro", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 15 Plus", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 15", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 14 Pro Max", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 14 Pro", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 14", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 13 Pro Max", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 13 / 13 mini", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 12 Pro Max", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 12 / mini", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 11 Pro Max", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone 11", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone XS Max", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone X / XR", ours: "Price on request", apple: "Price on request", note: "Price on request" },
              { model: "iPhone SE (3rd gen, 2022)", ours: "Price on request", apple: "Price on request", note: "Price on request" },
            ]}
          />

          <h2 id="where-to-sell">Where to sell in Dubai - three options</h2>
          <h3>1. Dubizzle (highest price, slowest, scam risk)</h3>
          <p>
            Dubizzle is the UAE's largest classifieds site. Listing is free. You'll get the highest price
            (10-20% above buy-back shops) but expect 1-4 weeks of messages, no-shows, and lowball offers.
            Common scams: fake bank-transfer screenshots, "send it to my courier first", and Dirham-vs-INR
            currency confusion. Always meet in a Dubai Mall food court or Dubai Police-designated
            transaction zone, accept cash only, and verify notes with a UV pen.
          </p>
          <h3>2. Us - instant cash, 10-15% below Dubizzle</h3>
          <p>
            Bring the iPhone to our Concord Tower workshop in Dubai Media City. We test it on the bench
            (battery health, Face ID, cameras, all buttons, network), confirm no iCloud lock, and pay
            cash within 30 minutes. We also accept cracked, water-damaged, and even bricked iPhones at
            a parts-value price - our{" "}
            <Link to="/iphone-repair-dubai" className="text-accent font-semibold hover:underline">
              iPhone repair team
            </Link>{" "}
            harvests usable parts.
          </p>
          <h3>3. Apple Trade-In (lowest, most convenient)</h3>
          <p>
            Available at Apple Dubai Mall and Mall of the Emirates. Apple's algorithm pays 30-40% below
            market. The upside: instant credit applied to a new iPhone purchase, paperwork handled, no
            buyer to deal with. Best if you're upgrading anyway and value an extra Saturday.
          </p>

          <h2 id="apple-trade-in-pricing">Apple Trade-In Dubai - current pricing (April 2026)</h2>
          <BlogPriceTable
            caption="Apple Trade-In UAE values - mint condition (April 2026)"
            headers={["Model", "Apple Trade-In", "Our offer", "Difference"]}
            rows={[
              { model: "iPhone 17 Pro Max", ours: "Price on request", apple: "Price on request", note: "We pay more" },
              { model: "iPhone 16 Pro Max", ours: "Price on request", apple: "Price on request", note: "We pay more" },
              { model: "iPhone 15 Pro Max", ours: "Price on request", apple: "Price on request", note: "We pay more" },
              { model: "iPhone 14 Pro Max", ours: "Price on request", apple: "Price on request", note: "We pay more" },
              { model: "iPhone 13 Pro Max", ours: "Price on request", apple: "Price on request", note: "We pay more" },
              { model: "iPhone 12 Pro Max", ours: "Price on request", apple: "Price on request", note: "We pay more" },
            ]}
          />

          <h2 id="condition-grading">Condition grading explained</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Mint</strong>: no scratches visible at arm's length, ≥90% battery, original box + cable, no repairs.</li>
            <li><strong>Excellent</strong>: 1-2 micro-scratches on frame, 85-89% battery, used a case its whole life.</li>
            <li><strong>Good</strong>: visible scuffs on frame edges, 80-84% battery, no cracks anywhere.</li>
            <li><strong>Fair</strong>: minor screen scratches under light, 75-80% battery, cosmetic dents.</li>
            <li><strong>Cracked</strong>: any glass damage front or back, regardless of internals.</li>
          </ul>

          <h2 id="cracked-screen-value">Cracked screen reduces value by 30-50%</h2>
          <p>
            A cracked screen on an iPhone 16 Pro Max takes a big bite out of resale value. Our screen
            replacement on the same model comes with a 3-month warranty and often costs less than the
            resale hit, so replacing before selling can leave you ahead. We do this calculation at our
            shop and sometimes recommend the repair, sometimes don't (depends on model and your
            timeline) - message us on WhatsApp for the exact numbers on your iPhone.
          </p>

          <h2 id="battery-health-value">Battery health under 80% reduces value by 15%</h2>
          <p>
            Buyers see "Battery Service" warning and assume the worst. Replacing the battery before sale
            usually pays for itself: on an iPhone 15 Pro Max, our battery service typically recovers more
            resale value than it costs, so you net a small gain plus a faster sale. Message us on WhatsApp
            for today's exact battery price on your model. See{" "}
            <Link to="/iphone-battery-replacement-dubai" className="text-accent font-semibold hover:underline">
              iPhone battery replacement Dubai
            </Link>.
          </p>

          <h2 id="maximize-sale-price">How to maximize sale price (5 steps)</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Clean thoroughly - microfibre cloth + isopropyl 70% on frame and ports.</li>
            <li>Find original box, cable, SIM tray pin (noticeably raises the price buyers will pay).</li>
            <li>Replace battery if under 85% - pays for itself.</li>
            <li>Photograph in daylight, all 6 sides + screen-on shot of Settings → About.</li>
            <li>Title: "iPhone 16 Pro Max 256GB Black Titanium UAE Apple Warranty Mint" - model + storage + colour + region first.</li>
          </ol>

          <h2 id="icloud-lock-check">iCloud lock - check before selling (and before buying)</h2>
          <p>
            An iCloud-locked iPhone has zero resale value beyond parts. Sign out of iCloud (Settings →
            [Your Name] → Sign Out) before handing over. Buyers will check via Settings → General →
            About → Activation Lock = "Off". See our full{" "}
            <Link to="/blog/icloud-locked-iphone-what-to-do" className="text-accent font-semibold hover:underline">
              iCloud lock guide
            </Link>.
          </p>
        </>
      }
      faqs={[
        { q: "Why does Dubizzle 'asking price' look higher than your buy-back?", a: "Asking price is what sellers list at - actual sold prices are 15-20% lower after negotiation. We pay near the realistic sold price, minus our 10-15% margin for instant cash, no-show risk, and warranty obligation when we resell." },
        { q: "Will you buy an iPhone with cracked screen and bad battery?", a: "Yes - we buy in any condition. Pricing reflects the repair cost we'll absorb before reselling. A cracked iPhone 16 Pro Max with 76% battery still has solid value - message us on WhatsApp for today's exact offer." },
        { q: "Do you accept iPhones bought from US, India, or other regions?", a: "Yes, but at 10-15% lower than UAE-spec models. UAE buyers prefer UAE-warranty iPhones (no FaceTime restrictions, no carrier lock risk). US dual-SIM physical models actually do better than UAE eSIM-only." },
        { q: "Do I need the original box to sell?", a: "No, but with box + cable + earphones (if applicable) you'll get a noticeably better price. The IMEI sticker on the box also reassures buyers about authenticity." },
        { q: "Can I sell my iPhone if it's still on AppleCare+ subscription?", a: "Yes - AppleCare+ transfers free to the new owner. This actually adds to your resale price. Tell the buyer to register their address with Apple after purchase." },
        { q: "What's the best time of year to sell my iPhone in Dubai?", a: "August-September, right before the new iPhone launch. Resale prices peak then because new-iPhone buyers want cash from their old device fast. November (post-launch) drops 10-15% on previous-gen models." },
      ]}
      relatedLinks={[
        { label: "Best way to sell iPhone Dubai", href: "/blog/best-way-to-sell-old-iphone-dubai", description: "Dubizzle vs Apple Trade-In vs us - full comparison." },
        { label: "Factory reset iPhone before selling", href: "/blog/how-to-factory-reset-iphone-before-selling", description: "5 critical steps to wipe properly." },
        { label: "Best refurbished iPhone Dubai", href: "/blog/best-refurbished-iphone-dubai", description: "If you're upgrading from your old one." },
      ]}
    />
  );
}
