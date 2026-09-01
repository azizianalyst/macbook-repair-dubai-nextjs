"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookScreenRepairNearMeDubai() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Screen Repair Near Me Dubai - Free Pickup, Same-Day | 055 741 3706"
      seoDescription="MacBook screen repair near me in Dubai. Free door-to-door pickup, same-day on most models. Concord Tower, Media City. Message us on WhatsApp for a price."
      path="/macbook-screen-repair-near-me-dubai"
      eyebrow="MacBook screen repair, near you - free pickup across Dubai"
      h1="MacBook Screen Repair Near Me Dubai"
      subtitle="One workshop in Media City, and a free door-to-door courier that turns 'near me' into anywhere in Dubai Mainland - same-hour pickup from six areas, same-day from the rest."
      startingPrice={600}
      timeline="Same-day on most models"
      whatsappPrefill="Hi, my MacBook screen is cracked/faulty and I need a nearby pickup - my area is:"
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
          "Our workshop is in Concord Tower, Dubai Media City, but 'near me' matters less than you'd think - free door-to-door pickup covers all of Dubai Mainland, same-hour from Marina, JLT, Internet City, Knowledge Village and Al Barsha, same-day from Downtown, Business Bay, JBR and Palm Jumeirah. Message us on WhatsApp with your area and we'll confirm the exact pickup window.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Searching "MacBook screen repair near me" usually means you want it fixed today, not the nearest address on a map.</strong> We're a single Concord Tower workshop in Dubai Media City - no branches - but the free door-to-door courier does the same job a branch network would, without the overhead that inflates branch pricing. Tell us your area on WhatsApp and we'll confirm your pickup window before you commit to anything.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">How "near me" actually works here</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Same-hour pickup:</strong> Dubai Marina, JLT, Internet City, Knowledge Village, Al Barsha</li>
            <li>• <strong>Same-day pickup:</strong> Downtown, Business Bay, JBR, Palm Jumeirah</li>
            <li>• <strong>Next-morning pickup:</strong> Mirdif, Arabian Ranches, Silicon Oasis, and the rest of Dubai Mainland</li>
            <li>• <strong>Walk-in:</strong> Concord Tower, Office 45, 10th floor, Dubai Media City - opposite Media City Metro</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">What we actually fix on a MacBook screen</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Cracked glass, dead pixels, backlight failure (including Flexgate on 2016-2019 models), flickering, dark patches down one edge, and lines across the display. We replace the panel for every MacBook Air and Pro generation, Intel through M5, and most screens are done the same day the courier collects it.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked or shattered MacBook display glass",
        "Flickering or dimming screen",
        "Dead pixels or lines across the display",
        "Flexgate backlight cable failure (2016-2019 models)",
        "Dark patches or uneven brightness",
        "Screen not turning on despite the machine powering up",
      ]}
      steps={[
        { title: "WhatsApp your area",  body: "Tell us where you are in Dubai and what's wrong - we confirm your pickup window in minutes." },
        { title: "Free pickup",         body: "Same-hour, same-day or next-morning depending on your area - see the list above." },
        { title: "Diagnose + repair",   body: "Free diagnosis first, then a written quote. Most screens replaced the same day." },
        { title: "Free delivery back",  body: "Tested, warrantied, and returned to the same address - no need to come to us." },
      ]}
      glassNotice
      warrantyDays={365}
      warrantyBullets={[
        "12 months on parts and labour.",
        "Dead pixels, ghost touch and backlight faults covered.",
        "Genuine or OEM-grade panels - we tell you which before you agree to anything.",
      ]}
      faqs={[
        { q: "Do you actually have a branch near me, or just one workshop?", a: "One workshop - Concord Tower, Dubai Media City. No branches. The free door-to-door pickup and delivery is how we cover 'near me' without the overhead a branch network adds to your bill." },
        { q: "How fast is pickup from my area?", a: "Same-hour from Dubai Marina, JLT, Internet City, Knowledge Village and Al Barsha. Same-day from Downtown, Business Bay, JBR and Palm Jumeirah. Next-morning from Mirdif, Arabian Ranches, Silicon Oasis and the wider Dubai Mainland. Message us your area for an exact window." },
        { q: "Is the screen repair really done the same day?", a: "Yes, for most MacBook Air and Pro models we hold panel stock for - same day from pickup to delivery. A handful of low-demand or discontinued panels run 2-3 days; we tell you which before you commit." },
        { q: "Can I just walk in instead of waiting for pickup?", a: "Yes - Concord Tower, Office 45, 10th floor, Dubai Media City, opposite Media City Metro. Open Monday to Saturday, 9am to 10pm. Free diagnosis while you wait." },
        { q: "What if my screen issue turns out to be a board fault, not the glass?", a: "We diagnose free before quoting anything. If the backlight circuit or a board component is the actual fault rather than the panel itself, we tell you and quote that repair instead - never a screen swap that wouldn't fix it." },
      ]}
      reviewNames={["Pauline Georgiadis", "Lloyd Stevens"]}
      related={[
        { label: "MacBook Screen Repair Dubai",  href: "/macbook-screen-repair-dubai",     description: "The full service page - every model, every panel type." },
        { label: "MacBook Repair Near Me Dubai",  href: "/macbook-repair-near-me-dubai",    description: "Every area we cover and pickup timing, not just screens." },
        { label: "MacBook Repair Dubai",          href: "/macbook-repair-dubai",            description: "Every MacBook repair service, one hub." },
      ]}
    />
  );
}
