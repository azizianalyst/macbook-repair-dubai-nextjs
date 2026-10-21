"use client";
// /iphone-screen-repair-cost-dubai: COST intent. Rebuilt 2026-09-26 on IPhoneMoneyPage
// (docs/seo-master-plan-2026-09-26.md Phase 2.1 screen pair, 2.4, Phase 3 build 3).
// Targets: iphone screen repair cost (#2, protect) · iphone x screen replacement cost dubai (#5) ·
// iphone screen repair dubai price · iphone screen repair dubai cost · iphone screen replacement cost ·
// how much does it cost to fix an iphone screen · iphone 11 display price · iphone screen price.
// Kept apart from /iphone-screen-repair-dubai (repair intent: how, parts, Face ID, by-model H3s):
// this page is only about price, and its "by model" is the price-reference table below.
// NO AED figure of ours anywhere. Apple's UAE out-of-warranty estimates come from
// docs/apple-lineup-2026-09-26.md §4a (support.apple.com/en-ae, read 26 Sep 2026, excl. VAT), re-checked in
// docs/apple-prices-ae-2026-10-09.md, and
// every figure sits on the same source line as "(Apple list)" so audit-prices-src passes.
import IPhoneMoneyPage, { A, DataTable, PageSection, WhatsAppButton, waHref } from "@/components/blocks/IPhoneMoneyPage";
import { topicForPath } from "@/lib/page-images";

const PATH = "/iphone-screen-repair-cost-dubai";
const HERO = topicForPath(PATH);

/** Per-model WhatsApp link for the price table: the quote request arrives with the model named. */
function Quote({ model }: { model: string }) {
  return (
    <a
      href={waHref(`Hi, iPhone screen repair price please. Model: ${model}`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp a screen repair quote for ${model}`}
      className="inline-flex items-center min-h-[44px] font-semibold text-accent hover:underline"
    >
      WhatsApp
    </a>
  );
}

export default function IPhoneScreenRepairCostDubai() {
  return (
    <IPhoneMoneyPage
      path={PATH}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone Screen Repair Cost", path: PATH },
      ]}
      hero={{
        eyebrow: "iPhone screen repair cost · Dubai",
        title: "How Much Does iPhone Screen Repair Cost in Dubai?",
        subtitle:
          "What sets the price of an iPhone screen replacement, Apple's own UAE list prices model by model as a reference, and how to get our written quote on WhatsApp.",
        image: HERO?.src ?? "/images/topics/iphone-screen-repair-dubai.jpg",
        imageAlt: HERO?.alt ?? "iPhone screen repair cost Dubai",
      }}
      quickAnswer={{
        question: "How much does it cost to fix an iPhone screen in Dubai?",
        answer:
          "It depends on the model, OLED or LCD, and the part grade. Apple's UAE list price runs from AED 889 (Apple list) for an iPhone 16e or 17e screen to AED 1,499 (Apple list) for a Pro Max, excluding VAT. For our price, WhatsApp your model: diagnosis is free and the quote is written.",
      }}
      reviewer={{ name: "Hamza", role: "iPhone & iPad technician" }}
      takeaways={[
        "Four things set the price: the model, OLED or LCD, the part grade, and any other damage from the same drop.",
        "iPhone 16e to 18 Pro Max screens run from AED 889 (Apple list) to AED 1,499 (Apple list), excluding VAT.",
        "LCD iPhones (6 to 8, SE, XR and 11) generally cost less to re-screen than OLED models.",
        "With AppleCare+, Apple's accidental-damage fee is lower than its out-of-warranty price, so check your cover first.",
        "We quote per model on WhatsApp rather than publishing a list, because part costs and availability change.",
        "Your quote names the part grade, the price and the 90-day screen warranty before any work starts.",
      ]}
      faqHeading="iPhone screen repair cost: common questions"
      faqs={[
        { q: "Why does an OLED iPhone screen cost more than an LCD one?", a: "OLED panels are more complex to make than LCD, which is why an iPhone 11 Pro screen costs more than an iPhone 11 one; ProMotion on later Pro models adds more. A very cheap quote for an OLED iPhone is often an LCD panel." },
        { q: "Do Apple's prices include VAT?", a: "No. Apple's UAE estimates exclude VAT, so the amount you pay Apple is higher than the figure shown. Our WhatsApp quote states the full amount you pay, so you can compare like with like." },
        { q: "Is it worth fixing an old iPhone screen?", a: "Usually, if the rest of the phone is healthy. Check Battery Health too: below 80%, a screen and battery in one visit saves a second trip. If the phone has other faults, we say so at the free diagnosis, before you spend anything." },
        { q: "Do you charge for a quote or a diagnosis?", a: "No. The WhatsApp quote and the diagnosis at the workshop are free. If the diagnosis finds more damage than the photo showed, we re-quote before doing anything, and you pay only once you have approved the work." },
        { q: "Does Apple's warranty cover a cracked iPhone 18 Pro screen?", a: "No. Apple's one-year warranty covers defects, not accidental damage. AppleCare+ covers accidental damage for a fee. Without it, an 18 Pro screen is AED 1,279 (Apple list), excluding VAT; our quote comes on WhatsApp." },
      ]}
      leadHeading="Get our iPhone screen repair price"
      cta={{
        headline: "Send your iPhone model for a screen price",
        description: "Free quote and diagnosis, the part grade named in writing, and a 90-day screen warranty.",
        prefill: "Hi, iPhone screen repair price please. Model: ",
      }}
      related={[
        { label: "iPhone screen repair Dubai", to: "/iphone-screen-repair-dubai" },
        { label: "iPhone 18 Pro screen replacement cost", to: "/blog/iphone-18-pro-screen-replacement-cost-uae" },
        { label: "iPhone screen problems guide", to: "/blog/iphone-screen-problems-dubai" },
        { label: "iPhone back glass repair", to: "/iphone-back-glass-repair-dubai" },
        { label: "iPhone battery replacement", to: "/iphone-battery-replacement-dubai" },
        { label: "iPhone repair or AppleCare+?", to: "/blog/iphone-repair-vs-applecare-which-better" },
      ]}
      sources={[
        { label: "Apple UAE: iPhone screen repair estimates", href: "https://support.apple.com/en-ae/iphone/repair/screen-replacement", note: "Out-of-warranty estimates, excluding VAT. Read 26 Sep 2026." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
    >
      <PageSection id="drivers" eyebrow="What sets the price" title="What decides the cost of an iPhone screen repair">
        <ul>
          <li><strong>Model and size.</strong> A Pro Max panel is larger and costs more than a standard or mini screen.</li>
          <li><strong>OLED or LCD.</strong> OLED costs more to make, so an iPhone 11 Pro screen costs more than an iPhone 11 one.</li>
          <li><strong>Part grade.</strong> Genuine Apple costs the most; a quality-tested alternative costs less. The grade is on your quote.</li>
          <li><strong>Other damage.</strong> A bent frame, a cracked back or liquid inside changes the job. The free diagnosis finds it before you pay.</li>
        </ul>
        <p>
          How the repair is done, and what it means for Face ID and True Tone, is on the{" "}
          <A to="/iphone-screen-repair-dubai">iPhone screen repair</A> page. This page is about the price.
        </p>
      </PageSection>

      <PageSection id="by-model" eyebrow="Price by model" title="iPhone screen replacement price by model">
        <p>
          Apple publishes out-of-warranty estimates for the UAE: Apple&apos;s prices, not ours, excluding VAT. Tap
          WhatsApp on any row for our written quote on that model.
        </p>
        <DataTable
          caption="iPhone screen replacement price reference by model: Apple's UAE estimates and a WhatsApp quote link"
          head={["Model", "Display", "Apple UAE screen estimate", "Our quote"]}
          rows={[
            ["iPhone 6 / 6 Plus", "LCD", "—", <Quote key="q" model="iPhone 6 / 6 Plus" />],
            ["iPhone 6s / 6s Plus", "LCD", "—", <Quote key="q" model="iPhone 6s / 6s Plus" />],
            ["iPhone 7 / 7 Plus", "LCD", "—", <Quote key="q" model="iPhone 7 / 7 Plus" />],
            ["iPhone 8 / 8 Plus", "LCD", "—", <Quote key="q" model="iPhone 8 / 8 Plus" />],
            ["iPhone SE (2nd / 3rd gen)", "LCD", "—", <Quote key="q" model="iPhone SE (2nd / 3rd gen)" />],
            ["iPhone X", "OLED", "—", <Quote key="q" model="iPhone X" />],
            ["iPhone XS / XS Max", "OLED", "—", <Quote key="q" model="iPhone XS / XS Max" />],
            ["iPhone XR", "LCD", "—", <Quote key="q" model="iPhone XR" />],
            ["iPhone 11", "LCD", "—", <Quote key="q" model="iPhone 11" />],
            ["iPhone 11 Pro / 11 Pro Max", "OLED", "—", <Quote key="q" model="iPhone 11 Pro / 11 Pro Max" />],
            ["iPhone 12 family", "OLED", "—", <Quote key="q" model="iPhone 12" />],
            ["iPhone 13 family", "OLED", "—", <Quote key="q" model="iPhone 13" />],
            ["iPhone 14 family", "OLED", "—", <Quote key="q" model="iPhone 14" />],
            ["iPhone 15", "OLED", "AED 1,079 (Apple list)", <Quote key="q" model="iPhone 15" />],
            ["iPhone 15 Plus / 15 Pro", "OLED", "AED 1,279 (Apple list)", <Quote key="q" model="iPhone 15 Plus / 15 Pro" />],
            ["iPhone 15 Pro Max", "OLED", "AED 1,499 (Apple list)", <Quote key="q" model="iPhone 15 Pro Max" />],
            ["iPhone 16e", "OLED", "AED 889 (Apple list)", <Quote key="q" model="iPhone 16e" />],
            ["iPhone 16", "OLED", "AED 1,079 (Apple list)", <Quote key="q" model="iPhone 16" />],
            ["iPhone 16 Plus / 16 Pro", "OLED", "AED 1,279 (Apple list)", <Quote key="q" model="iPhone 16 Plus / 16 Pro" />],
            ["iPhone 16 Pro Max", "OLED", "AED 1,499 (Apple list)", <Quote key="q" model="iPhone 16 Pro Max" />],
            ["iPhone 17e", "OLED", "AED 889 (Apple list)", <Quote key="q" model="iPhone 17e" />],
            ["iPhone 17", "OLED", "AED 1,279 (Apple list)", <Quote key="q" model="iPhone 17" />],
            ["iPhone Air", "OLED", "AED 1,279 (Apple list)", <Quote key="q" model="iPhone Air" />],
            ["iPhone 17 Pro", "OLED", "AED 1,279 (Apple list)", <Quote key="q" model="iPhone 17 Pro" />],
            ["iPhone 17 Pro Max", "OLED", "AED 1,499 (Apple list)", <Quote key="q" model="iPhone 17 Pro Max" />],
            ["iPhone 18 Pro", "OLED", "AED 1,279 (Apple list)", <Quote key="q" model="iPhone 18 Pro" />],
            ["iPhone 18 Pro Max", "OLED", "AED 1,499 (Apple list)", <Quote key="q" model="iPhone 18 Pro Max" />],
          ]}
          note="Apple figures read from support.apple.com/en-ae on 26 September 2026 and re-checked on 9 October 2026, excluding VAT; Apple can change them at any time. A dash means we did not record an Apple figure for that model; Apple's estimate tool shows the current one."
        />
        <p>
          Screen and back both broken? The pair is AED 1,849 (Apple list) on a 17 Pro Max or 18 Pro Max.
        </p>
        <p>
          On a 16e or 17e, the same pair is AED 1,229 (Apple list), excluding VAT.
        </p>
      </PageSection>

      <PageSection id="models" eyebrow="Most-asked models" title="Screen replacement cost for the most-asked models">
        <h3>iPhone X screen replacement cost in Dubai</h3>
        <p>
          The iPhone X was the first OLED iPhone, so its screen costs more than an LCD model of the same age. Apple&apos;s
          UAE estimates we recorded start at the iPhone 16e, so for the X our WhatsApp quote is the practical reference.
          At this age many owners choose a quality OLED over a genuine panel; ask for both and compare. The XS and XS Max
          work the same way.
        </p>
        <h3>iPhone 11 display price</h3>
        <p>
          The iPhone 11 uses an LCD, so its display costs less than the OLED screens on the 11 Pro and 11 Pro Max. iOS
          may flag a non-genuine display on the 11; the phone still works, and your quote names the grade.
        </p>
        <h3>iPhone 6, 6 Plus and 7 Plus screen replacement cost</h3>
        <p>
          These LCD models are the least expensive to re-screen. If the battery is also worn, ask for a screen and{" "}
          <A to="/iphone-battery-replacement-dubai">battery</A> quote together.
        </p>
        <h3>iPhone 18 Pro screen replacement cost</h3>
        <p>
          The 18 Pro screen is AED 1,279 (Apple list) and the 18 Pro Max screen AED 1,499 (Apple list), excluding VAT.
        </p>
        <p>
          The <A to="/blog/iphone-18-pro-screen-replacement-cost-uae">iPhone 18 Pro screen cost guide</A> goes deeper.
        </p>
      </PageSection>

      <PageSection id="applecare" eyebrow="AppleCare+" title="AppleCare+, Apple's warranty and when Apple is cheaper">
        <p>
          Apple&apos;s standard one-year warranty covers defects, not a cracked screen. AppleCare+ covers accidental
          damage for a service fee lower than Apple&apos;s out-of-warranty price, so if you have it, use it; check at
          checkcoverage.apple.com. Without it, compare Apple&apos;s list price above with our written quote.
        </p>
      </PageSection>

      <PageSection id="our-price" eyebrow="Our price" title="How to get our iPhone screen repair price">
        <ol>
          <li>WhatsApp your model (Settings &gt; General &gt; About) and a photo of the screen.</li>
          <li>We reply with a price for each available grade, genuine and quality-tested.</li>
          <li>The free diagnosis confirms nothing else is damaged; nothing starts until you approve the written quote.</li>
          <li>Your new screen carries a 90-day warranty on the part and our workmanship.</li>
        </ol>
        <div>
          <WhatsAppButton text="Hi, iPhone screen repair price please. Model: " label="Get our screen price on WhatsApp" />
        </div>
      </PageSection>
    </IPhoneMoneyPage>
  );
}
