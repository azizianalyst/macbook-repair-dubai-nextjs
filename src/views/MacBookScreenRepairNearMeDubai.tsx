"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookScreenRepairNearMeDubai() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Screen Repair Near Me Dubai - Same-Day, Walk In"
      seoDescription="MacBook screen repair near me in Dubai: walk in to Concord Tower, Media City, or send it by courier. Same-day on most models. WhatsApp us for a price."
      path="/macbook-screen-repair-near-me-dubai"
      eyebrow="MacBook screen repair, near the Palm Jumeirah tram stop"
      h1="MacBook Screen Repair Near Me Dubai"
      subtitle="One workshop in Media City, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. Walk in, or book a same-day courier yourself and the MacBook reaches us within the day."
      startingPrice={600}
      timeline="Same-day on most models"
      whatsappPrefill="Hi, my MacBook screen is cracked/faulty - model and what it looks like:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
        { name: "Screen Repair Near Me", path: "/macbook-screen-repair-near-me-dubai" },
      ]}
      technician={{ name: "Shafeeq", years: 12, specialisation: "MacBook display specialist" }}
      serviceName="MacBook Screen Repair Near Me Dubai"
      quickAnswer={{
        question: "Where's the nearest place to get my MacBook screen repaired in Dubai?",
        answer:
          "Our workshop is in Concord Tower, Dubai Media City, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. Walk in without an appointment, Monday to Saturday. If you can't get here, book any same-day courier app, hand the MacBook to the driver and WhatsApp us the tracking link. Send a photo of the screen first and we'll quote before you commit.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Searching "MacBook screen repair near me" usually means you want it fixed today, not the nearest address on a map.</strong> We're a single Concord Tower workshop in Dubai Media City, no branches. That keeps the overhead off your bill. Send a photo of the screen on WhatsApp, we quote, and you decide whether to walk in or send it over.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">How "near me" actually works here</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Walk in:</strong> Concord Tower, Office 45, 10th floor, Dubai Media City - near the Palm Jumeirah tram stop, parking on site</li>
            <li>• <strong>Send it by courier:</strong> book any same-day courier app, hand it over, WhatsApp us the tracking link</li>
            <li>• <strong>Quote first:</strong> WhatsApp a photo of the screen and the model before you set off</li>
            <li>• <strong>Onsite visit:</strong> paid, subject to technician availability, quoted on WhatsApp</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">What we actually fix on a MacBook screen</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Cracked glass, dead pixels, backlight failure (including Flexgate on 2016-2017 models), flickering, dark patches down one edge, and lines across the display. We replace the panel for every MacBook Air and Pro generation, Intel through M5, and most screens are done the same day they reach the bench.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked or shattered MacBook display glass",
        "Flickering or dimming screen",
        "Dead pixels or lines across the display",
        "Flexgate backlight cable failure (2016-2017 models)",
        "Dark patches or uneven brightness",
        "Screen not turning on despite the machine powering up",
      ]}
      steps={[
        { title: "WhatsApp a photo",    body: "Send the model and a photo of the screen. We quote in minutes." },
        { title: "Walk in or send it",  body: "Walk in to Concord Tower, or book a same-day courier yourself and send us the tracking link." },
        { title: "Diagnose + repair",   body: "Free diagnosis first, then a written quote. Most screens replaced the same day." },
        { title: "Collect it",          body: "Tested and warrantied. Collect it from the workshop, or we book a courier to bring it back." },
      ]}
      glassNotice
      warrantyDays={90}
      warrantyBullets={[
        "90 days on the panel and the fitting.",
        "Dead pixels, ghost touch and backlight faults covered.",
        "Genuine or OEM-grade panels - we tell you which before you agree to anything.",
      ]}
      faqs={[
        { q: "Do you actually have a branch near me, or just one workshop?", a: "One workshop - Concord Tower, Dubai Media City. No branches. It's a 3-minute walk from the Palm Jumeirah tram stop, with parking on site, and if you can't come over you can send the MacBook with a same-day courier you book." },
        { q: "Can I send my MacBook instead of coming in?", a: "Yes. Book any same-day courier app yourself, hand the MacBook to the driver and WhatsApp us the tracking link. It reaches us within the day, so you're not waiting on us to send anyone. Once it's fixed, collect it, or we book a courier to bring it back." },
        { q: "Is the screen repair really done the same day?", a: "Yes, for most MacBook Air and Pro models we hold panel stock for - same day from when it reaches the bench. A handful of low-demand or discontinued panels run 2-3 days; we tell you which before you commit." },
        { q: "Can I just walk in without an appointment?", a: "Yes - Concord Tower, Office 45, 10th floor, Dubai Media City, a 3-minute walk from the Palm Jumeirah tram stop. Open Mon-Thu and Sat 9am to 7pm, Friday 9am to 12pm and 2pm to 7pm, closed Sunday. Free diagnosis while you wait." },
        { q: "What if my screen issue turns out to be a board fault, not the glass?", a: "We diagnose free before quoting anything. If the backlight circuit or a board component is the actual fault rather than the panel itself, we tell you and quote that repair instead - never a screen swap that wouldn't fix it." },
      ]}
      reviewNames={["Pauline Georgiadis", "Lloyd Stevens"]}
      related={[
        { label: "MacBook Screen Repair Dubai",  href: "/macbook-screen-repair-dubai",     description: "The full service page - every model, every panel type." },
        { label: "MacBook Repair Near Me Dubai",  href: "/macbook-repair-near-me-dubai",    description: "How to reach the workshop from anywhere in Dubai, not just for screens." },
        { label: "MacBook Repair Dubai",          href: "/macbook-repair-dubai",            description: "Every MacBook repair service, one hub." },
      ]}
    />
  );
}
