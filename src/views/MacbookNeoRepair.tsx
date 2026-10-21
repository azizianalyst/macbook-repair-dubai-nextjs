"use client";
// MacBook Neo hub (13-inch, A18 Pro, announced 4 Mar 2026, on sale 11 Mar 2026).
// Facts only from docs/apple-lineup-2026-09-26.md: Apple newsroom (launch date, US + UAE list price),
// iFixit + AppleInsider teardown (6/10, 18-screw battery tray, no pairing warnings on display,
// trackpad, battery and Touch ID, 41-screw keyboard, soldered 8GB RAM + storage, pentalobe),
// Apple UAE repair widget (battery service price excl. VAT; AppleCare+ fees), owner reports.
// Spokes: A18 Pro board repair, screen, battery, keyboard.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

const SPOKES = [
  { href: "/macbook-neo-a18-repair-dubai",          title: "A18 Pro board repair",  note: "No power, liquid, data" },
  { href: "/macbook-neo-screen-repair-dubai",       title: "Screen repair",         note: "13-inch display" },
  { href: "/macbook-neo-battery-replacement-dubai", title: "Battery replacement",   note: "18-screw battery tray" },
  { href: "/macbook-neo-keyboard-repair-dubai",     title: "Keyboard repair",       note: "Keys, spills, replacement" },
];

export default function MacbookNeoRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Repair Dubai - Screen, Battery & Keyboard"
      seoDescription="MacBook Neo repair in Dubai: screen, battery, keyboard, trackpad and liquid damage on Apple's A18 Pro MacBook. Free diagnosis. WhatsApp 055 741 3706."
      path="/macbook-neo-repair-dubai"
      eyebrow="MacBook Neo · 13-inch · A18 Pro · on sale since 11 March 2026"
      h1="MacBook Neo Repair Dubai"
      subtitle="Screen, battery, keyboard, trackpad and board repair for Apple's A18 Pro MacBook, at our Dubai Media City workshop. iFixit calls it the most repairable MacBook in 14 years. Free diagnosis and a written quote before any work."
      startingPrice={0}
      timeline="Free diagnosis same day · repair time confirmed with your quote"
      whatsappPrefill="Hi, I have a MacBook Neo and I need help with:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/macbook-repair-dubai" },
        { name: "MacBook Neo",    path: "/macbook-neo-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook screens, batteries and water damage" }}
      serviceName="MacBook Neo Repair Dubai"
      quickAnswer={{
        question: "Can you repair a MacBook Neo in Dubai?",
        answer:
          "Yes. We repair the MacBook Neo's screen, battery, keyboard, trackpad, Touch ID and liquid damage in Dubai Media City, after a free diagnosis and written quote. iFixit rates it 6/10, the most repairable MacBook in 14 years. For reference, Apple lists its battery service at AED 589, excluding VAT. We confirm parts on WhatsApp.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook Neo repair in Dubai, on the most repairable MacBook Apple has made in years.</strong>{" "}
            Apple announced the MacBook Neo on 4 March 2026 and put it on sale on 11 March. It is a 13-inch MacBook
            built around the A18 Pro, an iPhone-class A-series chip, where every other MacBook Apple sells today uses an
            M5-family chip. Apple lists it at US$599, or AED 2,599 in the UAE, well below the{" "}
            <Link to="/macbook-air-13-m5-2026-repair-dubai" className="text-accent font-semibold hover:underline">MacBook Air M5</Link>.
            Because it is only months old, most Neos are still inside Apple&apos;s one-year warranty, so we check
            coverage before we quote anything.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Why the MacBook Neo is easier to repair</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            iFixit&apos;s teardown gave the MacBook Neo 6 out of 10 and called it the most repairable MacBook in 14
            years. These are the findings that matter in a workshop:
          </p>
          <ul className="space-y-2 text-[15px] mb-md">
            <li>• <strong>Battery in a screwed tray.</strong> The battery sits in a tray held by 18 screws, so a{" "}
              <Link to="/macbook-neo-battery-replacement-dubai" className="text-accent underline underline-offset-2 hover:no-underline">MacBook Neo battery replacement</Link>{" "}
              is far simpler than on the MacBook Air M5 or MacBook Pro M5.</li>
            <li>• <strong>No parts-pairing warnings.</strong> The display, trackpad, battery and Touch ID can each be
              swapped without triggering parts-pairing warnings, so a replacement part is not flagged by macOS.</li>
            <li>• <strong>Keyboard on its own, but slow.</strong> The keyboard can be replaced separately, but it takes
              41 screws. That is why we try cleaning and single-key fixes before quoting a full{" "}
              <Link to="/macbook-neo-keyboard-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">MacBook Neo keyboard repair</Link>.</li>
            <li>• <strong>Soldered memory and storage.</strong> The 8GB of RAM and the storage are soldered to the logic
              board. There is no upgrade path, and a dead board is also a data problem.</li>
            <li>• <strong>Pentalobe screws</strong> close the case, so it needs the right drivers, not a kitchen-drawer
              screwdriver.</li>
          </ul>
          <p className="text-[15px] leading-relaxed mb-lg">
            Repairable does not mean parts are always on the shelf. The Neo is a 2026 model, so we confirm part
            availability and price on WhatsApp before you book.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">What owners are actually reporting</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            So far, no widespread hardware defect has been reported on the MacBook Neo. Most owner complaints are
            design limits rather than faults: there is no keyboard backlight, the base model has no Touch ID, and the
            8GB of memory is soldered. Some owners report scaling problems on external displays, which is worth
            checking in display settings before assuming a hardware fault. Apple publishes troubleshooting pages for
            MacBook Neo display and battery problems, and we work through the same checks before recommending any
            part.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Apple&apos;s UAE prices, for reference</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            For Mac laptops, Apple publishes only a battery price in the UAE; for screens and other damage it says it
            needs to inspect the machine. The figures below exclude VAT.
          </p>
          <ul className="space-y-1 text-[15px] mb-md">
            <li>• Out of warranty, Apple lists MacBook Neo battery service at AED 589.</li>
            <li>• With AppleCare+, Apple lists screen damage at AED 189 and enclosure damage at AED 189.</li>
            <li>• With AppleCare+, Apple lists other accidental damage at AED 579.</li>
          </ul>
          <p className="text-[14px] text-text-muted mb-lg">
            Source: support.apple.com/en-ae, read on 26 September 2026. Our own quote comes on WhatsApp after a free
            diagnosis.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">MacBook Neo repairs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg">
            {SPOKES.map((s) => (
              <Link key={s.href} to={s.href} className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
                <div className="font-semibold">{s.title}</div>
                <div className="text-text-muted text-[12px] mt-[2px]">{s.note}</div>
              </Link>
            ))}
          </div>
        </>
      }
      whatWeFix={[
        "Cracked or faulty 13-inch display",
        "Battery replacement (18-screw battery tray)",
        "Stuck or missing keys, and full keyboard replacement",
        "Trackpad faults",
        "Touch ID faults, on models that have Touch ID",
        "Charging and port faults",
        "Liquid damage and A18 Pro logic board repair",
        "Data recovery from a Neo that will not start",
      ]}
      steps={[
        { title: "WhatsApp the fault",  body: "Send \"MacBook Neo\" and a photo of the problem. We confirm part availability and a quote." },
        { title: "Warranty check",      body: "Free serial-number check. A factory fault inside Apple's one-year warranty goes to Apple, and we tell you so." },
        { title: "Diagnose + repair",   body: "Free diagnosis when you walk in to our Media City workshop. Written quote before any work." },
        { title: "Test + return",       body: "Display, keyboard, trackpad, charging and battery health checked before the Neo goes back to you." },
      ]}
      warrantyDays={730}
      warrantyHeadline
      warrantyBullets={[
        "Screens: 90 days on the part and the fitting.",
        "Batteries: 3 months, with an 80% capacity guarantee.",
        "Other hardware, such as the trackpad and ports: 15 days to 2 years.",
        "Keyboard, board, liquid-damage, software and data work: 15 days.",
      ]}
      faqs={[
        {
          q: "Can you repair a MacBook Neo in Dubai?",
          a: "Yes. We repair the MacBook Neo's display, battery, keyboard, trackpad, Touch ID, charging faults and liquid damage at our Dubai Media City workshop. It went on sale in March 2026, so we check Apple warranty status and confirm part availability on WhatsApp before you book.",
        },
        {
          q: "How much does Apple charge to replace a MacBook Neo battery?",
          a: "Apple lists MacBook Neo battery service at AED 589, excluding VAT, on its UAE support site. It is the only Neo repair price Apple publishes; screens and other damage need an inspection. Our battery replacements carry a 3-month warranty with an 80% capacity guarantee, and we quote on WhatsApp.",
        },
        {
          q: "Is the MacBook Neo easy to repair?",
          a: "Easier than any MacBook in years. iFixit scored it 6 out of 10: the battery sits in an 18-screw tray, and the display, trackpad, battery and Touch ID swap without parts-pairing warnings. The trade-offs are a 41-screw keyboard replacement and soldered memory and storage.",
        },
        {
          q: "Can I upgrade the RAM or storage on a MacBook Neo?",
          a: "No. iFixit's teardown confirmed the 8GB of memory and the storage are soldered to the logic board. Choose the configuration you need when you buy. If the board fails, getting your data back means repairing that board, which we cover on the MacBook Neo A18 Pro repair page.",
        },
        {
          q: "Why doesn't my MacBook Neo keyboard light up?",
          a: "Because the MacBook Neo has no keyboard backlight. It is one of the most common owner complaints, along with the base model having no Touch ID, but neither is a fault. A dark keyboard on a Neo is working as Apple designed it, so there is nothing to repair.",
        },
        {
          q: "Is my MacBook Neo still under Apple warranty?",
          a: "Very likely. It went on sale on 11 March 2026, so a Neo bought since then is inside Apple's one-year limited warranty for manufacturing defects. Accidental damage such as a crack or a spill needs AppleCare+. We check your serial number for free before quoting.",
        },
      ]}
      reviewNames={["Saeed Alam", "Polycarp"]}
      related={[
        { label: "MacBook Neo A18 Pro Repair",   href: "/macbook-neo-a18-repair-dubai",    description: "Board-level work: no power, liquid damage, data recovery." },
        { label: "MacBook Neo Screen Repair",    href: "/macbook-neo-screen-repair-dubai", description: "13-inch display replacement, AppleCare+ checked first." },
        { label: "MacBook Air M5 Repair Dubai",  href: "/macbook-air-13-m5-2026-repair-dubai", description: "The M5 model one step up from the Neo." },
      ]}
      blogLink={{ label: "MacBook Neo: worth buying in 2026?", href: "/blog/macbook-neo-worth-buying-2026" }}
    />
  );
}
