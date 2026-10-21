"use client";
// /iphone-screen-repair-dubai: REPAIR intent. Rebuilt 2026-09-26 on IPhoneMoneyPage
// (docs/seo-master-plan-2026-09-26.md Phase 2.1 screen pair, 2.4, Phase 3 build 3).
// Targets: iphone screen repair · iphone screen repair dubai · iphone screen replacement dubai ·
// iphone screen repair near me · iphone display · iphone screen · cracked iphone screen · fix broken
// iphone screen · iphone lcd repair · iphone x screen glass, plus the old-model terms (6, 6 Plus, 6s,
// 7 Plus, 8, 11, 11 Pro screen replacement) in the By model section.
// Cost intent lives on /iphone-screen-repair-cost-dubai (Apple's list prices by model): this page
// carries no price table and links there instead. Symptoms live on /blog/iphone-screen-problems-dubai.
// Display type verified per model: LCD on the 6-8, SE (2nd/3rd), XR and 11; OLED on the X, XS,
// 11 Pro and every iPhone from the 12 on. iPhone 18 Pro facts: docs/apple-lineup-2026-09-26.md §4b.
// Warranty from site.ts: 90 days on screens.
import IPhoneMoneyPage, { A, ByModelSection, PageSection, WhatsAppButton } from "@/components/blocks/IPhoneMoneyPage";
import { topicForPath } from "@/lib/page-images";
import { NAP } from "@/content/site";

const PATH = "/iphone-screen-repair-dubai";
const SERVICE = "iPhone screen repair";
const HERO = topicForPath(PATH);

export default function IPhoneScreenRepair() {
  return (
    <IPhoneMoneyPage
      path={PATH}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone Screen Repair", path: PATH },
      ]}
      hero={{
        eyebrow: "iPhone screen repair · Dubai Media City",
        title: "iPhone Screen Repair Dubai: Cracked Screen and Display Replacement",
        subtitle:
          "Cracked glass, a black display, lines or dead touch. OLED and LCD screens for every iPhone from the 6 to the 18 Pro Max, with the part grade on a written quote.",
        image: HERO?.src ?? "/images/topics/iphone-screen-repair-dubai.jpg",
        imageAlt: HERO?.alt ?? "iPhone screen repair Dubai",
      }}
      quickAnswer={{
        question: "Where can I get my iPhone screen repaired in Dubai?",
        answer:
          "At our independent workshop in Concord Tower, Dubai Media City. We replace cracked and faulty iPhone screens on every model from the iPhone 6 to the iPhone 18 Pro Max, OLED or LCD to match the original. Diagnosis is free, the written quote names the part grade, and screens carry a 90-day warranty.",
      }}
      reviewer={{ name: "Shafiq" }}
      takeaways={[
        "The iPhone 6 to 8, SE, XR and 11 use LCD screens; the X, XS, 11 Pro and every iPhone from the 12 use OLED.",
        "A cracked screen is replaced as one assembly: glass, touch layer and display are bonded together.",
        "We quote genuine Apple and quality-tested screens where both exist, and name the grade in writing.",
        "On the iPhone 11 and later, iOS can flag a non-genuine screen. We tell you beforehand.",
        "On the iPhone 18 Pro, Face ID's infrared camera sits under the display.",
        "Screens carry a 90-day warranty, and you can walk in without an appointment.",
      ]}
      faqHeading="iPhone screen repair: common questions"
      faqs={[
        { q: "How much does iPhone screen repair cost in Dubai?", a: "It depends on the model, OLED or LCD, and the part grade. Apple's UAE list prices by model are on our iPhone screen repair cost page for reference. For our price, WhatsApp your model and a photo; the written quote comes before any work." },
        { q: "Can you fix my iPhone screen the same day?", a: "Often, yes, when the part is in stock for a common model. The newest models may need the part ordered, and water damage or a bent frame adds time. We confirm timing on WhatsApp before you travel." },
        { q: "Will Face ID and True Tone work after a screen replacement?", a: "Face ID should: its core parts stay in the phone, and we test it before handover. True Tone depends on the display's calibration data; we carry it over where the model and part allow, and tell you first if we can't." },
        { q: "Can you replace just the cracked glass?", a: "No. We replace the full display assembly on every model, LCD or OLED, because the glass, touch layer and display are bonded at the factory and separating them risks the panel. Your written quote names the part grade before any work starts." },
        { q: "Should I go to Apple instead?", a: "If you have AppleCare+, usually yes: Apple's accidental-damage fee is lower than its out-of-warranty price. Apple's standard warranty doesn't cover a crack. Without AppleCare+, or on an older model, an independent repair is the practical choice." },
      ]}
      leadHeading="Get your iPhone screen repair quote"
      cta={{
        headline: "Send your iPhone model and a photo of the screen",
        description: "Free diagnosis, a written quote that names the part grade, and a 90-day screen warranty.",
        prefill: "Hi, iPhone screen repair quote please. Model: ",
      }}
      related={[
        { label: "iPhone screen repair cost", to: "/iphone-screen-repair-cost-dubai" },
        { label: "iPhone screen problems guide", to: "/blog/iphone-screen-problems-dubai" },
        { label: "iPhone back glass repair", to: "/iphone-back-glass-repair-dubai" },
        { label: "iPhone repair Dubai", to: "/iphone-repair-dubai" },
        { label: "iPhone battery replacement", to: "/iphone-battery-replacement-dubai" },
        { label: "iPhone Face ID repair", to: "/iphone-face-id-repair-dubai" },
        { label: "iPhone water damage repair", to: "/iphone-water-damage-repair-dubai" },
      ]}
      sources={[
        { label: "Apple UAE: iPhone screen repair", href: "https://support.apple.com/en-ae/iphone/repair/screen-replacement", note: "Out-of-warranty estimates, excluding VAT." },
        { label: "iFixit's iPhone 18 Pro teardown (9to5Mac)", href: "https://9to5mac.com/2026/09/20/ifixit-tears-down-iphone-18-pro-explores-variable-aperture-finds-concerning-repair-issue/", note: "Display access and under-display Face ID." },
      ]}
      reviewNames={["Tim Quick", "Wellington Academy", "B Parker"]}
    >
      <PageSection id="what" eyebrow="What we replace" title="iPhone screen replacement: OLED or LCD, matched to your model">
        <p>
          A cracked iPhone screen is replaced as a complete display assembly, because the glass, touch layer and panel
          are bonded at the factory. On an iPhone X, for example, cracked screen glass is laminated to the OLED, and
          separating them risks the panel.
        </p>
        <ul>
          <li><strong>LCD</strong> (iPhone LCD repair): iPhone 6 to 8 and their Plus models, SE (2nd and 3rd gen), XR and 11.</li>
          <li><strong>OLED</strong>: iPhone X, XS, XS Max, 11 Pro, 11 Pro Max, and every iPhone from the 12 on.</li>
        </ul>
        <p>
          Lines, black spots, a yellow tint or dead touch can also be a setting or a board fault. Our{" "}
          <A to="/blog/iphone-screen-problems-dubai">iPhone screen problems guide</A> helps you tell them apart.
        </p>
      </PageSection>

      <PageSection id="grades" eyebrow="Genuine or alternative" title="Genuine Apple screen or a quality alternative?">
        <p>
          We quote both where both exist. A <strong>genuine Apple screen</strong> matches the original exactly and costs
          more. A <strong>quality-tested alternative</strong> costs less; beware very cheap offers for OLED iPhones, as
          some are LCD panels, thicker and dimmer. Your quote names the panel type. Apple&apos;s UAE list prices by
          model are on the <A to="/iphone-screen-repair-cost-dubai">iPhone screen repair cost</A> page.
        </p>
      </PageSection>

      <PageSection id="face-id" eyebrow="True Tone and Face ID" title="True Tone, Face ID and the genuine-display message">
        <p>
          <strong>True Tone</strong> (iPhone 8 and later) uses calibration data tied to the original display. We carry it
          over where the model and part allow, and tell you before you approve if it can&apos;t be.
        </p>
        <p>
          <strong>Face ID</strong> parts are paired to the logic board. We move the sensors on the old screen across and
          test Face ID before handover. On the <strong>iPhone 18 Pro</strong>, iFixit found the infrared camera now sits
          under the display, and the display frame lifted on 3 of 4 teardown units, so we confirm the part first.
        </p>
        <p>
          On the iPhone 11 and later, iOS may list a non-genuine display under Parts and Service History; the screen
          still works normally.
        </p>
      </PageSection>

      <PageSection id="process" eyebrow="How it works" title="How we fix a broken iPhone screen">
        <ol>
          <li><strong>WhatsApp the model</strong> (Settings &gt; General &gt; About) and a photo.</li>
          <li><strong>Free diagnosis</strong> confirms it&apos;s the screen, not the board.</li>
          <li><strong>Written quote:</strong> grade, price and timing. Nothing starts until you approve.</li>
          <li><strong>Replace and test</strong> touch, True Tone, Face ID or Touch ID, earpiece and proximity sensor.</li>
        </ol>
        <p>
          Common models are often done the same day when the part is in stock; the newest may need it ordered.
        </p>
      </PageSection>

      <ByModelSection
        id="by-model"
        title="iPhone screen replacement by model"
        service={SERVICE}
        intro={<p>Tap WhatsApp on your model for a quote.</p>}
        groups={[
          { name: "iPhone 6 and 6 Plus", heading: "iPhone 6 and iPhone 6 Plus screen replacement", body: <>LCD. Your original Home button moves across, since Touch ID is paired to the logic board.</> },
          { name: "iPhone 6s and 6s Plus", heading: "iPhone 6s and 6s Plus screen replacement", body: <>LCD with 3D Touch, tested on the new screen. Home button transferred for Touch ID.</> },
          { name: "iPhone 7 and 7 Plus", heading: "iPhone 7 and 7 Plus screen replacement", body: <>LCD touch screen replacement. The solid-state Home button is transferred and tested.</> },
          { name: "iPhone 8, 8 Plus and SE (2nd and 3rd gen)", heading: "iPhone 8, 8 Plus and iPhone SE screen replacement", body: <>LCD with True Tone, which first shipped on the iPhone 8, 8 Plus and X. We tell you if it carries over.</> },
          { name: "iPhone X, XS and XS Max", heading: "iPhone X and XS screen replacement", body: <>The first OLED iPhones. Cracked iPhone X screen glass means a full OLED assembly.</> },
          { name: "iPhone XR and iPhone 11", heading: "iPhone XR and iPhone 11 screen replacement", body: <>Both LCD. The iPhone 11 checks whether its display is genuine.</> },
          { name: "iPhone 11 Pro and 11 Pro Max", heading: "iPhone 11 Pro and 11 Pro Max screen replacement", body: <>OLED. Alternative panels vary widely here, so the type is on your quote.</> },
          { name: "iPhone 12 and 13 (including mini)", body: <>All OLED. The 13 Pro models need a ProMotion-capable panel.</> },
          { name: "iPhone 14 and 15 families", body: <>OLED, with the Dynamic Island on the 14 Pro models and every iPhone 15.</> },
          { name: "iPhone 16 family and 16e", modelPage: "/iphone-16-repair-dubai", body: <>OLED. If yours has AppleCare+, compare Apple&apos;s accidental-damage fee first.</> },
          { name: "iPhone 17, 17e and iPhone Air", modelPage: "/iphone-air-repair-dubai", body: <>OLED. Apple&apos;s warranty doesn&apos;t cover a crack; AppleCare+ does, for a fee.</> },
          { name: "iPhone 17 Pro and 17 Pro Max", modelPage: "/iphone-17-pro-repair-dubai", body: <>OLED. Discontinued in September 2026 and widely used; we confirm the part first.</> },
          { name: "iPhone 18 Pro and 18 Pro Max", modelPage: "/iphone-18-pro-repair-dubai", body: <>On sale since 18 September 2026. Under-display Face ID camera, so the part is confirmed before quoting.</> },
        ]}
      />

      <PageSection id="near-me" eyebrow="Walk in or send it by courier" title="iPhone screen repair near me in Dubai">
        <p>
          <strong>Walk in</strong> at {NAP.street}, {NAP.area}, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site.
          WhatsApp a photo first for a quote. Coming from <strong>Abu Dhabi or Sharjah</strong>, where we have no branch? Book any
          same-day courier app, hand the phone over, and WhatsApp us the tracking link. See the <A to="/iphone-repair-near-me-dubai">iPhone repair near me</A> page
          for the areas we cover.
        </p>
      </PageSection>

      <PageSection id="warranty" eyebrow="Warranty" title="Screen warranty: 90 days">
        <p>
          Every screen we fit carries a 90-day warranty on the part and our workmanship. A new crack from a drop is
          accidental damage and isn&apos;t covered. Full terms: <A to="/warranty">warranty page</A>. Back cracked too?
          See <A to="/iphone-back-glass-repair-dubai">iPhone back glass repair</A>.
        </p>
        <div>
          <WhatsAppButton text="Hi, iPhone screen repair quote please. Model: " label="WhatsApp your screen quote" />
        </div>
      </PageSection>
    </IPhoneMoneyPage>
  );
}
