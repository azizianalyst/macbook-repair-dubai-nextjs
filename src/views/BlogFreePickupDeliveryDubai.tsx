"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogFreePickupDeliveryDubai() {
  return (
    <BlogPostTemplate
      seoTitle="Free MacBook Pickup & Delivery Dubai - How It Works (2026)"
      seoDescription="Free MacBook pickup across Dubai. WhatsApp, courier within 2 hours, repair, and door-step return. Full process, payment options, and outside-Dubai logistics."
      path="/blog/free-pickup-delivery-dubai-how-it-works"
      category="Trust · Logistics"
      h1="Free MacBook Pickup & Delivery Dubai - How It Works"
      hook="Free across all Dubai. WhatsApp us. Our courier comes within 2 hours. Repair done. Returns to you."
      quickAnswer="WhatsApp +971 55 741 3706 with your model and issue. Our courier arrives within 2 hours across Dubai (free for repairs over AED 800, AED 50 otherwise). You hand over the device and ID, we diagnose, send a written quote within 30 minutes, then repair and return on approval. Pay on delivery by card, cash or transfer."
      author={{ name: "Shafiq", role: "Operations lead" }}
      datePublished="2026-04-28"
      dateModified="2026-04-28"
      readingMinutes={9}
      featuredImageAlt="Free MacBook pickup and delivery service across Dubai - process flow"
      body={
        <>
          <h2>Quick answer</h2>
          <p>
            For Marina, JBR, JLT, Downtown, Business Bay, Palm, Mirdif, Al Barsha, Silicon Oasis,
            International City, Sports City, and everywhere else in Dubai - we'll come to you. The
            full cycle is typically 24-48 hours from pickup to return.
          </p>

          <h2>Coverage area</h2>
          <p>
            <strong>Free or AED 50 within Dubai</strong>: every district from Jebel Ali in the south
            to Al Mamzar in the north. Includes the islands (Palm, Bluewaters, Deira Islands).
          </p>
          <p>
            <strong>Outside Dubai</strong>: Sharjah, Ajman, Abu Dhabi, RAK - paid logistics via
            Aramex, Quiqup, or our own van for high-value devices. Cost AED 80-250 round-trip
            depending on emirate and urgency.
          </p>

          <h2>How to book - one WhatsApp message</h2>
          <p>
            Send WhatsApp to <strong>+971 55 741 3706</strong> with:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>MacBook (or device) model and approximate year.</li>
            <li>Brief issue description ("won't turn on", "screen cracked", "battery dies in 2 hours").</li>
            <li>Pickup address.</li>
            <li>Preferred time window (we can usually be there within 2 hours, 9am-10pm Mon-Sat).</li>
          </ul>
          <p>
            We confirm within 5 minutes with courier name, ETA, and a price range from your
            description.
          </p>

          <h2>What we collect</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>The device itself.</li>
            <li>Charger / power adapter (helpful for diagnosing power issues).</li>
            <li>Any specific accessory related to the issue (e.g. cracked screen protector, broken keycaps).</li>
            <li>Photo of your Emirates ID or passport (matching the booking - to confirm chain of custody).</li>
          </ul>
          <p>
            We do <strong>not</strong> ask for your Apple ID password, login passcode, or any
            payment up front. The courier is uniformed, carries company ID, and signs a handover
            receipt.
          </p>

          <h2>Receipt and tracking</h2>
          <p>
            At handover the courier issues a printed handover receipt with:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Device serial number (read from the chassis).</li>
            <li>Cosmetic condition notes + photographs (we photograph all sides before the device leaves your sight).</li>
            <li>Booking number - track status by sending the number to WhatsApp.</li>
            <li>Estimated diagnosis-complete timestamp.</li>
          </ul>

          <h2>Diagnosis happens at the workshop</h2>
          <p>
            Within 30-60 minutes of arrival at Concord Tower the device is on a senior technician's
            bench. Diagnosis is{" "}
            <Link to="/blog/transparent-repair-pricing-explained" className="text-accent-bright font-semibold hover:underline">
              free
            </Link>{" "}
            and includes hardware test, battery health, SMART status (where applicable), and a
            quoted repair plan.
          </p>

          <h2>Quote sent via WhatsApp</h2>
          <p>
            You'll receive: the diagnosis summary, the recommended repair, line-itemised quote (parts
            tier + labour + total), and ETA for completion. You can approve, decline, or request the
            device returned at no charge.
          </p>

          <h2>Approval before any work</h2>
          <p>
            We do nothing beyond diagnosis without your written approval (WhatsApp "approved" is
            enough - we save the message thread). If you decline, the device is returned free of
            charge by the same courier, usually within 24 hours.
          </p>

          <h2>Delivery back to your door</h2>
          <p>
            Once repaired and quality-checked, we WhatsApp you and arrange a return slot. Same
            courier, same handover signature, same care.
          </p>

          <h2>Payment options</h2>
          <BlogPriceTable
            caption="Payment methods at delivery"
            headers={["Method", "Available?", "Notes"]}
            rows={[
              { model: "Card on delivery (Visa / MasterCard)", ours: "Yes - POS terminal carried", apple: "Most popular" },
              { model: "Bank transfer (Emirates NBD, ENBD, ADCB, etc.)", ours: "Yes - pay before courier arrives", apple: "Settlement confirmed before handover" },
              { model: "Cash AED", ours: "Yes - exact change appreciated", apple: "Receipt issued" },
              { model: "Apple Pay / Google Pay", ours: "Yes via NFC card terminal", apple: "Same as card" },
              { model: "Tabby / Tamara (split into 4)", ours: "Yes for repairs > AED 1,000", apple: "Approved at WhatsApp stage" },
              { model: "Crypto (USDT / BTC)", ours: "Case-by-case for high-value repairs", apple: "Pre-arranged only" },
            ]}
          />

          <h2>Outside Dubai</h2>
          <p>
            <strong>Sharjah</strong>: AED 80 round-trip via our weekly van. Pickup days Mon &amp; Thu.
          </p>
          <p>
            <strong>Abu Dhabi &amp; Al Ain</strong>: AED 200-250 round-trip via Aramex insured. 2-3
            day total turnaround.
          </p>
          <p>
            <strong>Northern Emirates (Ajman, RAK, UAQ, Fujairah)</strong>: AED 120-180 round-trip,
            same Aramex insured route.
          </p>
        </>
      }
      faqs={[
        { q: "Is the courier insured for high-value MacBooks?", a: "Yes - every pickup is insured up to AED 30,000 device value via our courier insurance. For devices above that (e.g. fully-spec'd Mac Pro), we send our own van with two staff and additional declared-value cover." },
        { q: "What if I'm not home when the courier arrives?", a: "WhatsApp us - we re-schedule for free. We won't leave a device with a security guard or concierge unless you explicitly authorise it in writing." },
        { q: "How fast is 'free pickup within 2 hours'?", a: "9am-10pm Mon-Sat, ~95% of pickups happen within 2 hours of confirmation. Outside those hours we book the next morning. Friday afternoon is the slowest window - allow 3-4 hours." },
        { q: "Do you pickup from offices / co-working spaces?", a: "Yes - DIFC, ADGM, In5, AstroLabs, Letswork, Nest, etc. The courier signs in at reception and meets you at your desk or the lobby - your choice." },
        { q: "Can I track the courier?", a: "Yes - once dispatched, we send a Google Maps live-location link to your WhatsApp. Active until handover." },
        { q: "What if I change my mind after pickup?", a: "Up until repair work begins, you can call it off - device returned free, no charges. Once parts have been ordered or the device opened, we charge only the parts cost (not labour, not pickup)." },
      ]}
      relatedLinks={[
        { label: "Contact us", href: "/contact", description: "WhatsApp, phone, address, hours." },
        { label: "Transparent pricing", href: "/blog/transparent-repair-pricing-explained", description: "How quotes are built." },
        { label: "No-fix-no-charge", href: "/blog/no-fix-no-charge-policy-explained", description: "Pickup + diagnosis are free even if no fix." },
      ]}
    />
  );
}
