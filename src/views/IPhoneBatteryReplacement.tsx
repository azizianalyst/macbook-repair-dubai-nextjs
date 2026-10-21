"use client";
// /iphone-battery-replacement-dubai. Rebuilt 2026-09-26 (plan Phase 2.3 #2, 2.4, Phase 3 build 2).
// Targets: iphone battery replacement (#7) · apple battery replacement (#6) · iphone battery
// replacement dubai · replace iphone battery dubai · iphone battery replacement cost · iphone battery
// price · iphone battery replacement near me · per-model battery terms (6s, 7, X, XS Max, 11 ...).
// Our price is never shown; Apple's UAE estimates (docs/apple-lineup-2026-09-26.md §4a) only as
// "AED X (Apple list)". Warranty wording from site.ts: 3 months with an 80% capacity guarantee.
import IPhoneMoneyPage, { A, ByModelSection, DataTable, PageSection, WhatsAppButton } from "@/components/blocks/IPhoneMoneyPage";
import { topicForPath } from "@/lib/page-images";

const PATH = "/iphone-battery-replacement-dubai";
const SERVICE = "iPhone battery replacement";
const HERO = topicForPath(PATH);

export default function IPhoneBatteryReplacement() {
  return (
    <IPhoneMoneyPage
      path={PATH}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone Battery Replacement", path: PATH },
      ]}
      hero={{
        eyebrow: "iPhone battery replacement",
        title: "iPhone Battery Replacement Dubai: iPhone 6 to iPhone 18 Pro Max",
        subtitle:
          "Battery health under 80%, sudden shutdowns, a swollen battery or a phone that no longer lasts the day. Honest advice on genuine and quality batteries, and a 3-month warranty with an 80% capacity guarantee.",
        image: HERO?.src ?? "/images/topics/iphone-battery-replacement-dubai.jpg",
        imageAlt: HERO?.alt ?? "iPhone battery replacement Dubai",
      }}
      quickAnswer={{
        question: "When should I replace my iPhone battery, and where in Dubai?",
        answer:
          "Replace it when Settings > Battery > Battery Health shows Maximum Capacity below 80%, when iOS warns about peak performance, or when the phone shuts down unexpectedly. We replace batteries on every iPhone from the 6 to the 18 Pro Max at Concord Tower, Dubai Media City, with a 3-month warranty and an 80% capacity guarantee.",
      }}
      reviewer={{ name: "Shafiq" }}
      takeaways={[
        "Apple treats a battery at or below 80% of its original capacity as worn and due for service.",
        "Send a screenshot of Settings > Battery > Battery Health with your model.",
        "On the iPhone XS, XR and later, iOS checks whether a battery is genuine; we tell you beforehand what Settings will show.",
        "A swollen battery is urgent: stop charging, don't press the screen back down, and bring it in.",
        "Apple lists AED 385 to AED 499 for batteries on the iPhone 16 to 18 Pro Max, excluding VAT. Our quote for your model comes on WhatsApp.",
        "3-month warranty with an 80% capacity guarantee, and a written quote before work.",
      ]}
      faqHeading="iPhone battery replacement: common questions"
      faqs={[
        { q: "How much does iPhone battery replacement cost in Dubai?", a: "It depends on the model and on the battery grade: genuine Apple or a quality-tested cell. For reference, Apple lists AED 385 for an iPhone 16 or 17 battery and AED 499 for an iPhone 18 Pro (Apple list, excluding VAT). WhatsApp your model for our written quote." },
        { q: "How long does an iPhone battery replacement take?", a: "Most battery swaps are done while you wait or the same day when the battery is in stock. Newer models such as the iPhone 18 Pro may need the part ordered, so we confirm availability on WhatsApp first." },
        { q: "Will Battery Health show the new capacity after the replacement?", a: "With a genuine Apple battery, or where the original battery's data can be carried over, iOS shows the new capacity. On the iPhone XS, XR and later, some replacement cells trigger an 'Important Battery Message' and hide the percentage, though the battery works normally. We tell you which to expect first." },
        { q: "Is it safe to keep using a swollen iPhone battery?", a: "No. A swollen battery can push the screen out, crack the display and, in rare cases, overheat. Stop charging it, don't press on the screen, and bring it to our Media City workshop." },
        { q: "Should I use AppleCare+ instead?", a: "If your iPhone has AppleCare+ and the battery holds less than 80% of its original capacity, Apple replaces it at no charge, so use that. The same goes for a battery defect under Apple's one-year warranty. We are the better option once that coverage ends." },
        { q: "Do you offer iPhone battery replacement near me or outside Dubai?", a: "Walk in at Concord Tower in Dubai Media City, no appointment needed. From Abu Dhabi or Sharjah, book any same-day courier app to send the iPhone to us and WhatsApp the tracking link." },
      ]}
      leadHeading="Get your iPhone battery quote"
      cta={{
        headline: "Send your model and a Battery Health screenshot",
        description: "Free diagnosis, a written quote before work, and a 3-month battery warranty with an 80% capacity guarantee.",
        prefill: "Hi, iPhone battery replacement quote please. Model: ",
      }}
      related={[
        { label: "iPhone repair Dubai", to: "/iphone-repair-dubai" },
        { label: "iPhone screen repair", to: "/iphone-screen-repair-dubai" },
        { label: "iPhone charging port repair", to: "/iphone-charging-port-repair-dubai" },
        { label: "iPhone battery health guide", to: "/blog/iphone-battery-health-when-to-replace" },
        { label: "iPhone water damage repair", to: "/iphone-water-damage-repair-dubai" },
        { label: "iPhone 16 Pro battery capacity", to: "/iphone-16-pro-battery-capacity" },
      ]}
      sources={[
        { label: "Apple UAE: iPhone battery service", href: "https://support.apple.com/en-ae/iphone/repair/battery-replacement", note: "Out-of-warranty estimates, excluding VAT. Read 26 Sep 2026." },
      ]}
      reviewNames={["Saeed Alam", "Wellington Academy", "Henry Choong", "marouane Ayadi"]}
    >
      <PageSection id="when" eyebrow="Battery health" title="When should you replace your iPhone battery?">
        <p>
          Apple designs iPhone batteries to keep up to 80% of their original capacity after 500 complete charge cycles
          (iPhone 14 and earlier) or 1,000 cycles (iPhone 15 and later). Replace yours when you see:
        </p>
        <ul>
          <li><strong>Maximum Capacity below 80%</strong> in Settings &gt; Battery &gt; Battery Health.</li>
          <li>A <strong>peak performance</strong> note about an unexpected shutdown, or a &quot;Service&quot; recommendation.</li>
          <li>The phone <strong>switches off at 20 to 40%</strong>, or needs charging twice a day.</li>
          <li>The screen <strong>lifting</strong> at one edge: a swollen battery.</li>
        </ul>
        <p>
          Dubai heat matters: Apple recommends ambient temperatures up to 35°C, so a phone left in a summer car ages
          faster. Our <A to="/blog/iphone-battery-health-when-to-replace">iPhone battery health guide</A> explains how
          to read these numbers.
        </p>
      </PageSection>

      <PageSection id="genuine" eyebrow="Genuine or quality cell" title="Genuine Apple battery, quality cell, and the 'Important Battery Message'">
        <p>
          From the iPhone XS and XR onward, iOS checks whether the battery is a genuine Apple part. If it can&apos;t
          verify it, Settings shows an &quot;Important Battery Message&quot; and hides the health percentage. Apple says
          this doesn&apos;t affect using the phone, but owners planning to sell usually want the reading.
        </p>
        <p>
          So we quote a genuine Apple battery and a quality-tested cell where both exist. Where the original
          battery&apos;s data can be carried over, the health reading keeps working. Your written quote names the grade
          and what Settings will show.
        </p>
      </PageSection>

      <PageSection id="cost" eyebrow="Cost" title="iPhone battery replacement cost: Apple's UAE prices and our quote">
        <p>
          For &quot;Apple battery replacement&quot; prices, Apple&apos;s own UAE out-of-warranty estimates are the reference.
          They exclude VAT:
        </p>
        <DataTable
          caption="Apple's UAE iPhone battery service estimates, excluding VAT"
          head={["Model", "Apple's battery estimate"]}
          minWidth={360}
          rows={[
            ["iPhone 18 Pro / 18 Pro Max", "AED 499 (Apple list)"],
            ["iPhone 17 Pro / 17 Pro Max / Air", "AED 465 (Apple list)"],
            ["iPhone 16 Pro Max", "AED 465 (Apple list)"],
            ["iPhone 17 / 17e / 16 / 16e", "AED 385 (Apple list)"],
          ]}
          note="Source: support.apple.com/en-ae, read 26 September 2026. Subject to VAT; Apple may change these at any time."
        />
        <p>
          For older models, and for our price on any iPhone, WhatsApp the model. We quote both battery grades side by
          side, including fitting, new adhesive and testing.
        </p>
        <WhatsAppButton text="Hi, iPhone battery price please. Model: " label="Ask our battery price on WhatsApp" />
      </PageSection>

      <PageSection id="process" eyebrow="How we do it" title="How we replace an iPhone battery">
        <ol>
          <li><strong>Check first:</strong> Battery Health and charging, so a port or software fault isn&apos;t mistaken for wear.</li>
          <li><strong>Open safely</strong> with gentle heat and the correct screws.</li>
          <li><strong>Remove the old battery</strong> by its pull tabs, adhesive release or screws, without bending it.</li>
          <li><strong>Fit and seal:</strong> new battery, new adhesive, new seal where the model has one.</li>
          <li><strong>Test:</strong> charging, the health reading, Face ID or Touch ID, cameras and speakers.</li>
        </ol>
      </PageSection>

      <ByModelSection
        id="by-model"
        title="iPhone battery replacement by model"
        service={SERVICE}
        intro={<p>What to expect on each generation. Tap WhatsApp on your model for a quote.</p>}
        groups={[
          { name: "iPhone 6, 6 Plus, 6s and 6s Plus", heading: "iPhone 6 and iPhone 6s battery replacement", body: <>Wear shows as shutdowns at 20 to 40%, or iOS slowing the phone to prevent them. A new battery fixes both.</> },
          { name: "iPhone 7 and 7 Plus", heading: "iPhone 7 and 7 Plus battery replacement", body: <>Same performance management as the 6s, so a slow iPhone 7 often feels quicker with a new battery. No genuine-battery check.</> },
          { name: "iPhone 8 and 8 Plus", body: <>Battery Health keeps reading after a quality replacement: the 8 predates Apple&apos;s genuine-battery check.</> },
          { name: "iPhone SE (2nd and 3rd gen)", body: <>iPhone 8 body, but iOS runs the genuine-battery check. We tell you which option keeps the health reading.</> },
          { name: "iPhone X", heading: "iPhone X battery replacement", body: <>The last model without the battery check. If an original iPhone X battery shows under 80%, it&apos;s due.</> },
          { name: "iPhone XS, XS Max and XR", body: <>The first models with the battery check. Where possible we carry the original battery&apos;s data over to avoid the message.</> },
          { name: "iPhone 11, 11 Pro and 11 Pro Max", body: <>Settings can also list the battery under Parts and Service History. Tell us if that matters for resale.</> },
          { name: "iPhone 12 and 13 (including mini)", body: <>Many are on their second battery. The minis have small batteries, so owners notice wear first.</> },
          { name: "iPhone 14, 14 Plus, 14 Pro and 14 Pro Max", body: <>Rated for about 80% capacity at 500 cycles, so a heavily used 14 can be due sooner than its age suggests.</> },
          { name: "iPhone 15, 15 Plus, 15 Pro and 15 Pro Max", body: <>Rated for about 80% at 1,000 cycles. iOS can cap charging at 80%; check that before assuming wear.</> },
          { name: "iPhone 16 family and 16e", body: <>Apple lists AED 385 for the 16 or 16e and AED 465 for the 16 Pro Max (Apple list, excluding VAT).</> },
          { name: "iPhone 17, 17e and iPhone Air", body: <>Apple lists AED 385 for the 17 and 17e and AED 465 for the Air (Apple list). Many are still under Apple&apos;s warranty.</> },
          { name: "iPhone 17 Pro and 17 Pro Max", modelPage: "/iphone-17-pro-repair-dubai", body: <>Apple lists AED 465 (Apple list). Discontinued in September 2026, and early units are now leaving Apple&apos;s one-year warranty.</> },
          { name: "iPhone 18 Pro and 18 Pro Max", modelPage: "/iphone-18-pro-repair-dubai", body: <>Apple lists AED 499 (Apple list). iFixit found a screwed-in battery tray with no glue, but the display is still the way in. Still under Apple&apos;s warranty; we confirm parts on WhatsApp.</> },
        ]}
      />

      <PageSection id="warranty" eyebrow="Warranty" title="Battery warranty: 3 months with an 80% capacity guarantee">
        <p>
          Every battery we fit carries a 3-month warranty with an 80% capacity guarantee, covering the cell and our
          workmanship, not new drops or liquid damage. Cracked screen too? See{" "}
          <A to="/iphone-screen-repair-dubai">iPhone screen repair</A> or the <A to="/iphone-repair-dubai">iPhone repair hub</A>.
        </p>
      </PageSection>
    </IPhoneMoneyPage>
  );
}
