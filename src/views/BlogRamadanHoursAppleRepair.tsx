"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogRamadanHoursAppleRepair() {
  return (
    <BlogPostTemplate
      seoTitle="Ramadan Hours - Apple Repair Dubai 2026 (Feb 17 - Mar 19)"
      seoDescription="Ramadan 2026 hours for our Dubai workshop: opening times, the iftar pause, Eid closures, and how Apple Store Dubai Mall hours changed. WhatsApp us today."
      path="/blog/ramadan-hours-apple-repair-dubai"
      wide
      toc={[
        { id: "standard-vs-ramadan", label: "Standard vs Ramadan hours" },
        { id: "iftar-timing", label: "Iftar timing" },
        { id: "pickup-delivery", label: "Pickup and delivery (ended)" },
        { id: "apple-store-hours", label: "Apple Store Dubai Mall hours" },
        { id: "mall-traffic", label: "Mall traffic considerations" },
        { id: "why-we-stay-open", label: "Why we stay open" },
      ]}
      category="Seasonal · Hours"
      h1="Ramadan Hours - Apple Repair Dubai 2026"
      hook="Ramadan 2026 runs Feb 17 - March 19. Our hours adjust slightly. Here's what's different."
      quickAnswer="During Ramadan 2026 (17 Feb - 19 Mar) our workshop opens 10 am - 4 pm and 8 pm - 1 am, closed for iftar 5:30-7:30 pm. WhatsApp was monitored throughout. Apple Store Dubai Mall typically runs 10 am - 1 am."
      author={{ name: "Usman", role: "Senior iPhone technician" }}
      datePublished="2026-04-29"
      dateModified="2026-10-15"
      readingMinutes={6}
      featuredImageAlt="Ramadan Hours Apple Repair Dubai. Ramadan 2026 working hours - MacBook Repair Dubai workshop schedule"
      body={
        <>
          <p className="border border-border/70 bg-bg-card rounded-md p-md">
            <strong>Update, 15 October 2026:</strong> Ramadan 2026 is over and we've kept this page as a record of how we worked that month. The pickup and delivery service it mentions has since ended. Today you can walk in to Concord Tower, Dubai Media City (Mon-Thu and Sat 9 am-7 pm, Friday 9 am-12 pm and 2 pm-7 pm, Sunday closed), or send your device by a courier you book. See{" "}
            <Link to="/blog/free-pickup-delivery-dubai-how-it-works" className="text-accent font-semibold hover:underline">how to get your Mac to us now</Link>.
          </p>
          <h2 id="standard-vs-ramadan">Ramadan Hours Apple Repair Dubai. Standard hours vs Ramadan hours</h2>
          <BlogPriceTable
            caption="Working hours - standard vs Ramadan 2026"
            headers={["Day", "Standard hours", "Ramadan 2026 hours", "Notes"]}
            rows={[
              { model: "Monday", apple: "9 am - 10 pm", ours: "10 am - 4 pm + 8 pm - 1 am", note: "Closed 5:30-7:30 (iftar)" },
              { model: "Tuesday", apple: "9 am - 10 pm", ours: "10 am - 4 pm + 8 pm - 1 am", note: "Same" },
              { model: "Wednesday", apple: "9 am - 10 pm", ours: "10 am - 4 pm + 8 pm - 1 am", note: "Same" },
              { model: "Thursday", apple: "9 am - 10 pm", ours: "10 am - 4 pm + 8 pm - 1 am", note: "Often busy late evening" },
              { model: "Friday", apple: "9 am - 10 pm", ours: "10 am - 4 pm + 9 pm - 1 am", note: "Late open after Tarawih" },
              { model: "Saturday", apple: "9 am - 10 pm", ours: "10 am - 4 pm + 8 pm - 1 am", note: "Same" },
              { model: "Sunday", apple: "Closed", ours: "Closed", note: "Weekly closure" },
            ]}
          />

          <h2 id="iftar-timing">Iftar timing - workshop closed 5:30 - 7:30 pm</h2>
          <p>
            During Ramadan 2026 (17 February - 19 March) the workshop closes for iftar from <strong>5:30 pm to 7:30 pm</strong> daily. Sunset (Maghrib) shifts from approximately 6:14 pm at the start of Ramadan to 6:33 pm by the end. The 2-hour window covers the call to prayer, breaking the fast, and Maghrib prayer.
          </p>
          <p>
            If you arrive at the workshop during iftar hours, please use the WhatsApp number (<a href="https://wa.me/971557413706" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">+971 55 741 3706</a>) - a team member will message you back as soon as iftar ends and confirm a 7:30 pm or 8 pm window.
          </p>

          <h2 id="pickup-delivery">Pickup and delivery during Ramadan (since ended)</h2>
          <p>
            During Ramadan 2026 we ran pickups around the iftar pause, with a morning slot and an evening slot after 8 pm. That service ended on 15 October 2026. If you need to get a Mac or iPhone to us today, walk in or book your own courier, and{" "}
            <Link to="/blog/free-pickup-delivery-dubai-how-it-works" className="text-accent font-semibold hover:underline">this guide to sending your device in</Link>{" "}
            walks through both.
          </p>

          <h2 id="apple-store-hours">Apple Store Dubai Mall - Ramadan hours</h2>
          <p>
            Apple Store at Dubai Mall typically operates extended evening hours during Ramadan to match mall traffic patterns:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Sun-Wed:</strong> 10 am - 1 am.</li>
            <li><strong>Thu-Sat:</strong> 10 am - 2 am.</li>
            <li>Genius Bar appointments often available late - but waitlists balloon after iftar (8-11 pm peak).</li>
          </ul>
          <p>
            Apple Store Mall of the Emirates follows similar patterns. Always verify on the day via{" "}
            <a href="https://www.apple.com/ae/retail/dubaimall/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">apple.com/ae</a> - Ramadan hours can shift mid-month.
          </p>

          <h2 id="mall-traffic">Mall traffic considerations</h2>
          <p>
            Dubai Mall and Mall of the Emirates run their busiest week of the entire year during the last 10 days of Ramadan (around Eid shopping). Genius Bar wait times routinely exceed 2 hours. If you need a quick repair before Eid travel, our workshop in Dubai Media City has zero mall traffic and same-day turnaround on most repairs - see our{" "}
            <Link to="/" className="text-accent font-semibold hover:underline">MacBook repair hub</Link>.
          </p>

          <h2 id="why-we-stay-open">Why we stay open during Ramadan</h2>
          <p>
            Our team has rotated Ramadan shifts since 2004. Customers depend on us for urgent repairs that can't wait a month - work laptops with deadlines, kids' school iPads, parents' iPhones for Eid travel. The split-shift schedule (morning + post-iftar) gives the team rest during the fast and serves customers when they're actually awake and out of the house.
          </p>
          <p>
            Eid Al Fitr 2026 (3-day public holiday around 20-22 March, exact dates announced by UAE moonsighting committee): workshop closed Eid Day 1, open reduced hours (12 pm - 8 pm) Day 2 and 3. WhatsApp monitored throughout for emergencies.
          </p>
        </>
      }
      faqs={[
        { q: "Can I drop off my MacBook during iftar?", a: "Not in person. During Ramadan 2026 the workshop closed from 5:30 to 7:30 pm, so the best move was to WhatsApp us and come in before iftar or after 7:30 pm." },
        { q: "Are repair times longer during Ramadan?", a: "Same-day repairs (battery, screen, port) remain same-day if dropped off before 3 pm. Logic-board work is unaffected - turnaround stays at 3-7 days." },
        { q: "Do prices change during Ramadan?", a: "No - pricing is identical to non-Ramadan rates. We do run an Eid promotion in the last week (10% off battery and screen replacements) - announced on our Facebook." },
        { q: "Do you still offer pickup and delivery?", a: "No. Our pickup and delivery service ended on 15 October 2026. Walk in to Concord Tower, Dubai Media City, or book your own courier and WhatsApp us the tracking link so we know it's on the way." },
        { q: "Are you closed all of Eid Al Fitr?", a: "Closed Eid Day 1 only. Days 2 and 3 we open 12 pm - 8 pm (reduced). WhatsApp is monitored throughout the Eid holiday for emergencies." },
      ]}
      relatedLinks={[
        { label: "How to get your Mac to us now", href: "/blog/free-pickup-delivery-dubai-how-it-works", description: "Walk in, or send it by a courier you book." },
        { label: "MacBook repair hub Dubai", href: "/", description: "All MacBook services, prices, and turnaround." },
        { label: "Contact us", href: "/contact", description: "Workshop location, WhatsApp, phone." },
      ]}
    />
  );
}
