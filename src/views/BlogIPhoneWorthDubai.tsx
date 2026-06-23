"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogIPhoneWorthDubai() {
  return (
    <BlogPostTemplate
      seoTitle="How Much Is My iPhone Worth in Dubai 2026? Resale Guide"
      seoDescription="Current Dubai resale prices for every iPhone model - mint, good, cracked. Compare Dubizzle, Apple Trade-In, and our cash buy-back. Updated April 2026."
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
      quickAnswer="In April 2026 Dubai, mint resale runs from AED 4,200 (iPhone 17 Pro Max) to AED 1,800 (iPhone 14 Pro Max). A cracked screen cuts value 30-50%; battery below 80% cuts another 15%. Dubizzle pays the most but is slow, we pay 10-15% less for instant cash, and Apple Trade-In pays 30-40% below market."
      author={{ name: "Shafiq", role: "Senior iPhone technician" }}
      datePublished="2026-04-27"
      dateModified="2026-04-27"
      readingMinutes={11}
      featuredImageAlt="How Much Is My iPhone Worth Dubai, iPhone resale price guide Dubai 2026 - all models"
      body={
        <>
          <h2 id="top-5-models">How Much Is My iPhone Worth Dubai. Quick answer - top 5 models, current Dubai resale</h2>
          <p>
            Prices below assume mint condition (no cracks, ≥85% battery health, original box, no iCloud lock).
            Dubizzle "asking" prices are 15-20% higher than what actually sells; we list realistic sold prices.
          </p>
          <BlogPriceTable
            caption="Top 5 iPhones - Dubai resale (mint, April 2026)"
            headers={["Model", "Dubizzle (sold)", "Our buy-back (cash today)", "Apple Trade-In UAE"]}
            rows={[
              { model: "iPhone 17 Pro Max 256 GB", ours: "AED 4,200", apple: "AED 3,700", note: "AED 2,800" },
              { model: "iPhone 17 Pro 256 GB", ours: "AED 3,400", apple: "AED 3,000", note: "AED 2,300" },
              { model: "iPhone 16 Pro Max 256 GB", ours: "AED 3,000", apple: "AED 2,650", note: "AED 2,000" },
              { model: "iPhone 15 Pro Max 256 GB", ours: "AED 2,400", apple: "AED 2,100", note: "AED 1,500" },
              { model: "iPhone 14 Pro Max 256 GB", ours: "AED 1,800", apple: "AED 1,550", note: "AED 1,100" },
            ]}
          />

          <h2 id="full-resale-table">Full table - every iPhone, every condition (April 2026)</h2>
          <BlogPriceTable
            caption="Full Dubai resale table by model + condition (mid-tier storage)"
            headers={["Model", "Mint (AED)", "Good (AED)", "Cracked screen (AED)"]}
            rows={[
              { model: "iPhone 17 Pro Max", ours: "4,200", apple: "3,700", note: "2,400" },
              { model: "iPhone 17 Pro", ours: "3,400", apple: "3,000", note: "2,000" },
              { model: "iPhone Air", ours: "3,000", apple: "2,650", note: "1,800" },
              { model: "iPhone 17", ours: "2,400", apple: "2,100", note: "1,400" },
              { model: "iPhone 17e", ours: "1,800", apple: "1,550", note: "1,000" },
              { model: "iPhone 16 Pro Max", ours: "3,000", apple: "2,650", note: "1,800" },
              { model: "iPhone 16 Pro", ours: "2,500", apple: "2,200", note: "1,500" },
              { model: "iPhone 16 Plus", ours: "2,000", apple: "1,750", note: "1,200" },
              { model: "iPhone 16", ours: "1,800", apple: "1,550", note: "1,050" },
              { model: "iPhone 15 Pro Max", ours: "2,400", apple: "2,100", note: "1,400" },
              { model: "iPhone 15 Pro", ours: "2,000", apple: "1,750", note: "1,200" },
              { model: "iPhone 15 Plus", ours: "1,600", apple: "1,400", note: "950" },
              { model: "iPhone 15", ours: "1,400", apple: "1,200", note: "850" },
              { model: "iPhone 14 Pro Max", ours: "1,800", apple: "1,550", note: "1,050" },
              { model: "iPhone 14 Pro", ours: "1,500", apple: "1,300", note: "900" },
              { model: "iPhone 14", ours: "1,100", apple: "950", note: "650" },
              { model: "iPhone 13 Pro Max", ours: "1,400", apple: "1,200", note: "800" },
              { model: "iPhone 13 / 13 mini", ours: "850", apple: "700", note: "450" },
              { model: "iPhone 12 Pro Max", ours: "1,000", apple: "850", note: "550" },
              { model: "iPhone 12 / mini", ours: "650", apple: "550", note: "350" },
              { model: "iPhone 11 Pro Max", ours: "750", apple: "600", note: "400" },
              { model: "iPhone 11", ours: "500", apple: "400", note: "250" },
              { model: "iPhone XS Max", ours: "450", apple: "350", note: "200" },
              { model: "iPhone X / XR", ours: "350", apple: "280", note: "150" },
              { model: "iPhone SE (3rd gen, 2022)", ours: "550", apple: "450", note: "300" },
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
            headers={["Model", "Apple Trade-In (AED)", "Our offer (AED)", "Difference"]}
            rows={[
              { model: "iPhone 17 Pro Max", ours: "2,800", apple: "3,700", note: "+AED 900 with us" },
              { model: "iPhone 16 Pro Max", ours: "2,000", apple: "2,650", note: "+AED 650 with us" },
              { model: "iPhone 15 Pro Max", ours: "1,500", apple: "2,100", note: "+AED 600 with us" },
              { model: "iPhone 14 Pro Max", ours: "1,100", apple: "1,550", note: "+AED 450 with us" },
              { model: "iPhone 13 Pro Max", ours: "800", apple: "1,200", note: "+AED 400 with us" },
              { model: "iPhone 12 Pro Max", ours: "550", apple: "850", note: "+AED 300 with us" },
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
            A cracked screen on iPhone 16 Pro Max drops resale from AED 3,000 to AED 1,800 - a AED 1,200
            hit. Our screen replacement on the same model is AED 950 with 3-month warranty. So if you
            replace before selling, you net AED 250 more. We do this calculation at our shop and
            sometimes recommend the repair, sometimes don't (depends on model and your timeline).
          </p>

          <h2 id="battery-health-value">Battery health under 80% reduces value by 15%</h2>
          <p>
            Buyers see "Battery Service" warning and assume the worst. Replacing the battery before sale
            usually pays for itself: iPhone 15 Pro Max battery service AED 280 from us, recovers AED 360
            of resale value. Net gain: AED 80 plus a faster sale. See{" "}
            <Link to="/iphone-battery-replacement-dubai" className="text-accent font-semibold hover:underline">
              iPhone battery replacement Dubai
            </Link>.
          </p>

          <h2 id="maximize-sale-price">How to maximize sale price (5 steps)</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Clean thoroughly - microfibre cloth + isopropyl 70% on frame and ports.</li>
            <li>Find original box, cable, SIM tray pin (raises price AED 100-200).</li>
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
        { q: "Will you buy an iPhone with cracked screen and bad battery?", a: "Yes - we buy in any condition. Pricing reflects the repair cost we'll absorb before reselling. A cracked iPhone 16 Pro Max with 76% battery still gets AED 1,400-1,600 from us today." },
        { q: "Do you accept iPhones bought from US, India, or other regions?", a: "Yes, but at 10-15% lower than UAE-spec models. UAE buyers prefer UAE-warranty iPhones (no FaceTime restrictions, no carrier lock risk). US dual-SIM physical models actually do better than UAE eSIM-only." },
        { q: "Do I need the original box to sell?", a: "No, but with box + cable + earphones (if applicable) you'll get AED 100-200 more. The IMEI sticker on the box also reassures buyers about authenticity." },
        { q: "Can I sell my iPhone if it's still on AppleCare+ subscription?", a: "Yes - AppleCare+ transfers free to the new owner. This actually adds AED 100-200 to your resale price. Tell the buyer to register their address with Apple after purchase." },
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
