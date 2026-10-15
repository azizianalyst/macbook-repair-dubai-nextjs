"use client";
// /iphone-repair-dubai: the iPhone hub. Rebuilt 2026-09-26 (plan Phase 2.3 #1 / Phase 3 build 1).
// Targets: iphone repair dubai · iphone repair near me · iphone repair · iphone fix dubai ·
// iphone service center dubai / near me · iphone repair abu dhabi (customer-booked courier, stated honestly).
// No prices of ours anywhere; Apple's UAE list prices only in the attributed "(Apple list)" form,
// read from support.apple.com/en-ae on 26 Sep 2026 (docs/apple-lineup-2026-09-26.md §4a).
// The iPhone 6-12 model pages were folded into this hub on purpose: their demand is served by the
// model-family list below, not by new routes.
import { Link } from "@/lib/router-compat";
import IPhoneMoneyPage, { A, DataTable, PageSection, WhatsAppButton } from "@/components/blocks/IPhoneMoneyPage";
import { NAP } from "@/content/site";

const PATH = "/iphone-repair-dubai";

const REPAIRS: { label: string; to: string; body: string }[] = [
  { label: "iPhone screen repair", to: "/iphone-screen-repair-dubai", body: "Cracked glass, lines, black spots or dead touch. OLED or LCD to match your model." },
  { label: "iPhone battery replacement", to: "/iphone-battery-replacement-dubai", body: "Battery health under 80%, sudden shutdowns or a swollen battery." },
  { label: "iPhone back glass repair", to: "/iphone-back-glass-repair-dubai", body: "Shattered rear glass on the iPhone 8 and later, including the iPhone 18 Pro." },
  { label: "Charging port repair", to: "/iphone-charging-port-repair-dubai", body: "Loose cable or no charging on Lightning and USB-C iPhones. Often it is lint, which we check first." },
  { label: "Camera repair", to: "/iphone-camera-repair-dubai", body: "Blurry or black camera, a buzzing lens, or a cracked lens cover." },
  { label: "Face ID repair", to: "/iphone-face-id-repair-dubai", body: "Face ID unavailable after a drop or liquid, diagnosed honestly, including pairing limits." },
  { label: "Water damage repair", to: "/iphone-water-damage-repair-dubai", body: "Pool, sea or a spilled drink. Switch it off, don't charge it, bring it in." },
  { label: "Logic board repair", to: "/iphone-logic-board-repair-dubai", body: "No power, no service or boot loops, repaired at component level." },
  { label: "Data recovery", to: "/iphone-data-recovery-dubai", body: "Photos and chats from an iPhone that won't turn on or has a dead screen." },
];

const MORE_REPAIRS: [string, string][] = [
  ["Speaker", "/iphone-speaker-repair-dubai"], ["Earpiece", "/iphone-earpiece-repair-dubai"], ["Microphone", "/iphone-microphone-repair-dubai"],
  ["Lightning port", "/iphone-lightning-port-repair-dubai"], ["USB-C port", "/iphone-usb-c-port-repair-dubai"], ["Power button", "/iphone-power-button-repair-dubai"],
  ["Volume buttons", "/iphone-volume-button-repair-dubai"], ["Home button", "/iphone-home-button-repair-dubai"], ["Vibration motor", "/iphone-vibration-motor-repair-dubai"],
  ["SIM tray", "/iphone-sim-tray-repair-dubai"], ["Wi-Fi and Bluetooth", "/iphone-wifi-bluetooth-repair-dubai"], ["NFC", "/iphone-nfc-repair-dubai"],
  ["Software fix", "/iphone-software-fix-dubai"], ["Full diagnostic", "/iphone-full-diagnostic-dubai"], ["Network unlock", "/iphone-network-unlock-dubai"],
  ["iCloud lock help", "/iphone-icloud-unlock-dubai"], ["Motherboard repair", "/iphone-motherboard-repair-dubai"], ["Headphone jack", "/iphone-headphone-jack-repair-dubai"],
];

// Families newest first. A model with a page links to it; folded models (6 to 12) have none.
const FAMILIES: { family: string; models: [string, string | null][]; note?: string }[] = [
  { family: "iPhone 18 Pro", models: [["iPhone 18 Pro", "/iphone-18-pro-repair-dubai"], ["iPhone 18 Pro Max", "/iphone-18-pro-max-repair-dubai"]], note: "On sale in the UAE since 18 September 2026. We confirm part availability on WhatsApp." },
  { family: "iPhone 17 and iPhone Air", models: [["iPhone 17", "/iphone-17-repair-dubai"], ["iPhone 17e", "/iphone-17e-repair-dubai"], ["iPhone Air", "/iphone-air-repair-dubai"], ["iPhone 17 Pro", "/iphone-17-pro-repair-dubai"], ["iPhone 17 Pro Max", "/iphone-17-pro-max-repair-dubai"]] },
  { family: "iPhone 16", models: [["iPhone 16", "/iphone-16-repair-dubai"], ["iPhone 16 Plus", "/iphone-16-plus-repair-dubai"], ["iPhone 16 Pro", "/iphone-16-pro-repair-dubai"], ["iPhone 16 Pro Max", "/iphone-16-pro-max-repair-dubai"], ["iPhone 16e", "/iphone-16e-repair-dubai"]] },
  { family: "iPhone 15", models: [["iPhone 15", "/iphone-15-repair-dubai"], ["iPhone 15 Plus", "/iphone-15-plus-repair-dubai"], ["iPhone 15 Pro", "/iphone-15-pro-repair-dubai"], ["iPhone 15 Pro Max", "/iphone-15-pro-max-repair-dubai"]] },
  { family: "iPhone 14", models: [["iPhone 14", "/iphone-14-repair-dubai"], ["iPhone 14 Plus", "/iphone-14-plus-repair-dubai"], ["iPhone 14 Pro", "/iphone-14-pro-repair-dubai"], ["iPhone 14 Pro Max", "/iphone-14-pro-max-repair-dubai"]] },
  { family: "iPhone 13", models: [["iPhone 13 mini", "/iphone-13-mini-repair-dubai"], ["iPhone 13", "/iphone-13-repair-dubai"], ["iPhone 13 Pro", "/iphone-13-pro-repair-dubai"], ["iPhone 13 Pro Max", "/iphone-13-pro-max-repair-dubai"]] },
  { family: "iPhone 12", models: [["iPhone 12 mini", null], ["iPhone 12", null], ["iPhone 12 Pro", null], ["iPhone 12 Pro Max", null]] },
  { family: "iPhone 11", models: [["iPhone 11", null], ["iPhone 11 Pro", null], ["iPhone 11 Pro Max", null]] },
  { family: "iPhone X generation", models: [["iPhone X", null], ["iPhone XS", null], ["iPhone XS Max", null], ["iPhone XR", null]] },
  { family: "iPhone SE", models: [["iPhone SE (2nd gen)", null], ["iPhone SE (3rd gen)", "/iphone-se-3rd-gen-repair-dubai"]] },
  { family: "iPhone 6 to 8", models: [["iPhone 6 / 6 Plus", null], ["iPhone 6s / 6s Plus", null], ["iPhone 7 / 7 Plus", null], ["iPhone 8 / 8 Plus", null]] },
];

const chip = "inline-flex items-center min-h-[40px] px-3 py-2 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[14px]";

export default function IPhoneRepairHub() {
  return (
    <IPhoneMoneyPage
      path={PATH}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Apple Repair", path: "/apple-repair-dubai" },
        { name: "iPhone Repair", path: PATH },
      ]}
      hero={{
        eyebrow: "iPhone repair · Dubai Media City",
        title: "iPhone Repair Dubai: iPhone 6 to iPhone 18 Pro Max",
        subtitle:
          "An independent iPhone workshop in Concord Tower, Dubai Media City. Screens, batteries, back glass, ports, cameras, water damage and board-level faults, with free diagnosis and a written quote on WhatsApp before any work.",
        image: "/images/topics/iphone-repair-hub-dubai.jpg",
        imageAlt: "iPhone repair Dubai - iPhone 17 Pro full teardown exploded-view engineering infographic",
      }}
      quickAnswer={{
        question: "Where can I get my iPhone repaired in Dubai?",
        answer:
          "At MacBook Repair Dubai, an independent Apple repair workshop in Office #45, Concord Tower, Dubai Media City. We repair every iPhone from the iPhone 6 to the iPhone 18 Pro Max: screens, batteries, back glass, charging ports, cameras, water damage and logic boards. Diagnosis is free, and you get a written quote on WhatsApp before any work starts.",
      }}
      reviewer={{ name: "Hamza" }}
      takeaways={[
        "Every iPhone generation from the iPhone 6 to the iPhone 18 Pro Max is repaired at our own Dubai Media City workshop.",
        "Diagnosis is free. You get a written quote on WhatsApp, and nothing is repaired until you approve it.",
        "We are independent, not an Apple Authorised Service Provider. If your iPhone is still under Apple warranty or AppleCare+, Apple is usually the better route, and we tell you so.",
        "Parts are genuine Apple where available and quality-tested alternatives otherwise. The grade is written on your quote before work starts.",
        "Warranty follows the repair: up to 12 months on hardware, 3 months on batteries with an 80% capacity guarantee, 90 days on screens.",
        "Walk in at Dubai Media City, or send the iPhone with a same-day courier you book. Abu Dhabi customers do the same; we have no Abu Dhabi branch.",
      ]}
      faqHeading="iPhone repair in Dubai: common questions"
      faqs={[
        { q: "How much does iPhone repair cost in Dubai?", a: "It depends on the model, the fault and the part grade you choose: an iPhone 8 battery and an iPhone 18 Pro Max screen are very different jobs. WhatsApp the model and a photo of the fault for a quote. Diagnosis is free and you approve the written price before any work." },
        { q: "Can you fix my iPhone the same day?", a: "Many screen and battery jobs on common models are finished the same day when the part is in stock. Water damage, board-level work and parts that must be ordered take longer, especially on the newest models. We confirm the timing on WhatsApp before you come in." },
        { q: "Do you repair iPhones from Abu Dhabi?", a: "Yes. We have no Abu Dhabi branch; every repair happens at our Dubai Media City workshop. WhatsApp the model and fault for a quote, then book any same-day courier app to send the iPhone to us and share the tracking link. When it is fixed, collect it in person or book a courier to bring it back." },
        { q: "Is MacBook Repair Dubai an Apple service center?", a: "No. We are an independent Apple repair workshop, not an Apple Store or an Apple Authorised Service Provider. We repair out-of-warranty iPhones, older models and board-level faults, and we tell you when Apple is the better choice, such as while your phone is under warranty or AppleCare+." },
        { q: "Will I lose my data during an iPhone repair?", a: "Screen, battery, back glass and port repairs don't erase the phone, but back up to iCloud or a computer first if it still works. For water-damaged or dead iPhones, we tell you whether the data can be recovered before any repair that could affect it." },
        { q: "Does an independent repair affect my Apple warranty?", a: "Apple can refuse warranty service for damage caused by a third-party repair. If your iPhone is still under Apple's warranty or AppleCare+, check with Apple first. Once it is out of warranty there is no Apple coverage left to lose, though Apple may decline to service a non-Apple part if you take the phone to them later." },
      ]}
      leadHeading="Get your iPhone repair quote"
      cta={{
        headline: "Send your iPhone model and a photo of the fault",
        description: "Free diagnosis, a written quote before any work, and a walk-in workshop in Dubai Media City.",
        prefill: "Hi, iPhone repair quote please. Model and fault: ",
      }}
      related={[
        { label: "iPhone screen repair Dubai", to: "/iphone-screen-repair-dubai" },
        { label: "iPhone screen repair cost", to: "/iphone-screen-repair-cost-dubai" },
        { label: "iPhone battery replacement", to: "/iphone-battery-replacement-dubai" },
        { label: "iPhone back glass repair", to: "/iphone-back-glass-repair-dubai" },
        { label: "iPhone repair near me", to: "/iphone-repair-near-me-dubai" },
        { label: "How to pick an iPhone repair shop", to: "/best-iphone-repair-dubai" },
        { label: "Apple repair Dubai", to: "/apple-repair-dubai" },
        { label: "iPad repair Dubai", to: "/ipad-repair-dubai" },
      ]}
      sources={[
        { label: "Apple UAE: iPhone screen and repair service estimates", href: "https://support.apple.com/en-ae/iphone/repair/screen-replacement", note: "Out-of-warranty estimates, excluding VAT. Read 26 Sep 2026." },
        { label: "Apple UAE: iPhone battery service", href: "https://support.apple.com/en-ae/iphone/repair/battery-replacement", note: "Battery estimates and AppleCare+ battery coverage." },
      ]}
      reviewNames={["Ali Hassan", "Saeed Alam", "Tim Quick"]}
    >
      <PageSection id="repairs" eyebrow="What we fix" title="iPhone repairs we do in Dubai">
        <p>
          Whether it&apos;s a quick iPhone fix or a board-level repair, each job below has its own page explaining how we
          do it. If your fault isn&apos;t listed, WhatsApp the symptom and we&apos;ll tell you honestly whether it&apos;s
          repairable before you travel.
        </p>
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3 max-w-none mt-xs">
          {REPAIRS.map((r) => (
            <div key={r.to} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
              <h3 className="!mt-0 mb-xs"><Link to={r.to} className="hover:text-accent">{r.label}</Link></h3>
              <p className="text-[15px]">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-sm font-semibold text-text">All iPhone repair types</p>
        <ul className="!list-none !pl-0 flex flex-wrap gap-2 max-w-none">
          {MORE_REPAIRS.map(([label, to]) => (
            <li key={to}><Link to={to} className={`${chip} text-accent hover:border-accent/40`}>{label}</Link></li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="models" eyebrow="Supported models" title="iPhone models we repair, from iPhone 6 to iPhone 18 Pro Max">
        <p>
          Newer models have their own repair pages; tap a model to open it. Older generations (iPhone 6 to 8, the X
          generation, 11 and 12) are repaired here too: WhatsApp the model and fault and we confirm the part first.
        </p>
        <div className="grid gap-sm max-w-none">
          {FAMILIES.map((f) => (
            <div key={f.family} className="rounded-md border border-border/70 bg-bg-card p-md">
              <h3 className="!mt-0 mb-xs text-[17px]">{f.family}</h3>
              <ul className="!list-none !pl-0 flex flex-wrap gap-2">
                {f.models.map(([name, to]) => (
                  <li key={name}>
                    {to ? (
                      <Link to={to} className={`${chip} text-accent hover:border-accent/40`}>{name}</Link>
                    ) : (
                      <span className={`${chip} text-text`}>{name}</span>
                    )}
                  </li>
                ))}
              </ul>
              {f.note && <p className="text-[14px] mt-xs">{f.note}</p>}
            </div>
          ))}
        </div>
        <p>
          iPod touch (7th gen) owners are covered on the <A to="/ipod-touch-7-repair-dubai">iPod touch repair page</A>.
          iPhone Duo, Apple&apos;s first foldable, goes on sale in the UAE on 23 October 2026; we will add Duo repairs
          once it is in customers&apos; hands.
        </p>
      </PageSection>

      <PageSection id="near-me" eyebrow="Walk in or send by courier" title="iPhone repair near me: how to reach our workshop">
        <p>
          <strong>Walk in.</strong> We are at {NAP.street}, {NAP.area}, a short drive from Internet City, JLT, Dubai
          Marina and Al Barsha. Message us first so the part is ready.
        </p>
        <p>
          <strong>Send it by courier.</strong> Can&apos;t come in? Book any same-day courier app, hand the iPhone to the
          driver and WhatsApp us the tracking link; it reaches us within the day. When it is fixed, collect it or book a
          courier back. Our{" "}
          <A to="/contact">contact page</A> has the workshop address and hours.
        </p>
        <p>
          <strong>iPhone repair from Abu Dhabi.</strong> We have no Abu Dhabi branch. Customers in Abu Dhabi and Sharjah
          send the iPhone to our Dubai bench with a courier they book, the same way. The{" "}
          <A to="/iphone-repair-near-me-dubai">iPhone repair near me</A> page has more on reaching the workshop.
        </p>
      </PageSection>

      <PageSection id="vs-apple" eyebrow="Independent vs Apple" title="Independent iPhone repair or an Apple service center in Dubai?">
        <p>
          Searching for an &quot;iPhone service center in Dubai&quot; usually means Apple itself or a workshop that repairs
          iPhones properly. We are the second kind. Apple publishes its UAE out-of-warranty prices, a fair reference
          point. These are Apple&apos;s estimates, not ours, and exclude VAT:
        </p>
        <DataTable
          caption="Apple's UAE out-of-warranty iPhone service estimates, excluding VAT"
          head={["Model", "Screen", "Battery", "Back glass"]}
          rows={[
            ["iPhone 18 Pro Max", "AED 1,499 (Apple list)", "AED 499 (Apple list)", "AED 615 (Apple list)"],
            ["iPhone 18 Pro", "AED 1,279 (Apple list)", "AED 499 (Apple list)", "AED 615 (Apple list)"],
            ["iPhone 17 Pro Max", "AED 1,499 (Apple list)", "AED 465 (Apple list)", "AED 615 (Apple list)"],
            ["iPhone Air", "AED 1,279 (Apple list)", "AED 465 (Apple list)", "AED 615 (Apple list)"],
            ["iPhone 17", "AED 1,279 (Apple list)", "AED 385 (Apple list)", "AED 615 (Apple list)"],
            ["iPhone 16", "AED 1,079 (Apple list)", "AED 385 (Apple list)", "AED 615 (Apple list)"],
            ["iPhone 16e", "AED 889 (Apple list)", "AED 385 (Apple list)", "AED 615 (Apple list)"],
          ]}
          note="Source: support.apple.com/en-ae, read 26 September 2026. Apple's estimates change without notice and are subject to VAT."
        />
        <p>
          <strong>Choose Apple</strong> while your iPhone is under Apple&apos;s warranty or AppleCare+, or if you want the
          repair recorded as an Apple service. <strong>Choose an independent workshop</strong> when the phone is out of
          warranty, an older model, or has a logic board fault. Apple&apos;s &quot;other damage&quot; estimate for an iPhone 18 Pro Max is AED 3,479 (Apple list);
          a board-level repair addresses the fault itself. Our price for your model comes on WhatsApp.
        </p>
        <div className="flex flex-wrap gap-sm">
          <WhatsAppButton text="Hi, can you compare your quote with Apple's price? Model and fault: " label="Get our quote on WhatsApp" />
        </div>
      </PageSection>

      <PageSection id="cost" eyebrow="Pricing" title="What does iPhone repair cost in Dubai?">
        <p>
          Four things set the price: the model, the part (a Pro Max OLED costs more than an iPhone 8 LCD), the grade
          (genuine Apple or a quality-tested alternative), and any other damage from the drop or spill. We quote in
          writing after a free diagnosis. For screens, the{" "}
          <A to="/iphone-screen-repair-cost-dubai">iPhone screen repair cost guide</A> breaks this down model by model.
        </p>
      </PageSection>

      <PageSection id="process" eyebrow="How it works" title="How an iPhone repair works with us">
        <ol>
          <li><strong>WhatsApp the model and fault.</strong> The model is in Settings &gt; General &gt; About; add a photo of any crack.</li>
          <li><strong>Free diagnosis.</strong> Walk in or send it by courier, and we confirm the cause.</li>
          <li><strong>Written quote.</strong> Price, part grade and timing. Nothing starts until you approve.</li>
          <li><strong>Repair and test.</strong> Touch, cameras, Face ID or Touch ID, speakers, charging and signal are checked.</li>
          <li><strong>Collect with a written warranty</strong> for the period that applies to your repair.</li>
        </ol>
      </PageSection>

      <PageSection id="parts" eyebrow="Parts and warranty" title="Genuine parts, honest grades and a written warranty">
        <p>
          We fit genuine Apple parts where available and quality-tested alternatives otherwise, and the grade is on
          your quote. On recent iPhones, iOS can flag a screen, battery or camera not installed through Apple&apos;s own
          process. The phone still works, and we tell you beforehand if yours will show that message.
        </p>
        <p>
          Warranty depends on the job: up to 12 months on hardware, 3 months on batteries with an 80% capacity
          guarantee, 90 days on screens, and 15 days on software, board-level and liquid-damage work. See the{" "}
          <A to="/warranty">warranty terms</A>.
        </p>
      </PageSection>
    </IPhoneMoneyPage>
  );
}
