"use client";
// /iphone-back-glass-repair-dubai. Rebuilt 2026-09-26 on IPhoneMoneyPage
// (docs/seo-master-plan-2026-09-26.md Phase 2.4, Phase 3 build 3).
// Targets: iphone back glass repair dubai · iphone x back glass replacement (#7 via a blog) ·
// iphone xs back glass replacement (#6 via a blog) · iphone 8 back glass replacement ·
// iphone xs max back glass · iphone back replacement. The By model section carries one H3 per model
// group, iPhone 6 to 18 Pro Max, each with a WhatsApp prefill (plan 2.4); no new model routes.
// Facts: glass backs from the iPhone 8 / X (the 6, 6s and 7 are aluminium); Apple's back glass
// estimate on recent models and the iPhone 18 Pro's aluminium unibody + Ceramic Shield back come
// from docs/apple-lineup-2026-09-26.md §4a-4b. Apple figures only in the "(Apple list)" form.
// Warranty: back glass is hardware work (site.ts: up to 12 months).
import IPhoneMoneyPage, { A, ByModelSection, PageSection, WhatsAppButton } from "@/components/blocks/IPhoneMoneyPage";
import { topicForPath } from "@/lib/page-images";
import { NAP } from "@/content/site";

const PATH = "/iphone-back-glass-repair-dubai";
const SERVICE = "iPhone back glass replacement";
const HERO = topicForPath(PATH);

export default function IPhoneBackGlassRepair() {
  return (
    <IPhoneMoneyPage
      path={PATH}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone Back Glass Repair", path: PATH },
      ]}
      hero={{
        eyebrow: "iPhone back glass repair · Dubai Media City",
        title: "iPhone Back Glass Replacement in Dubai: iPhone 8 to iPhone 18 Pro Max",
        subtitle:
          "Cracked or shattered rear glass on any glass-back iPhone, from the iPhone 8 and X to the iPhone 18 Pro. Your own phone, board and data stay yours, and the written quote comes first.",
        image: HERO?.src ?? "/images/topics/iphone-back-glass-repair-dubai.jpg",
        imageAlt: HERO?.alt ?? "iPhone back glass repair Dubai",
      }}
      quickAnswer={{
        question: "Can you replace a cracked iPhone back glass in Dubai?",
        answer:
          "Yes. We replace cracked back glass on every iPhone with a glass back, from the iPhone 8 and iPhone X to the iPhone 18 Pro Max, at our workshop in Dubai Media City. Your phone keeps its own logic board, battery and data. Diagnosis is free, and the written quote comes on WhatsApp before any work.",
      }}
      reviewer={{ name: "Hamza", role: "iPhone & iPad technician" }}
      takeaways={[
        "Every iPhone from the iPhone 8 and X has a glass back; the iPhone 6, 6s and 7 are aluminium.",
        "On the iPhone 8 to 13 and the 14 Pro models, the glass is bonded to the frame and removed by laser.",
        "The iPhone 14, 14 Plus and the iPhone 15 and 16 families have a back glass that comes off as its own panel.",
        "Back glass on recent models is AED 615 (Apple list), excluding VAT.",
        "We test wireless charging, and MagSafe from the iPhone 12, before handover.",
        "Back glass is hardware work, with a written warranty of up to 12 months.",
      ]}
      faqHeading="iPhone back glass repair: common questions"
      faqs={[
        { q: "How much does iPhone back glass replacement cost in Dubai?", a: "It depends on the model and the part. For reference, back glass on recent models such as the iPhone 16 to 18 Pro Max is AED 615 (Apple list), excluding VAT. WhatsApp your model and a photo for our written quote." },
        { q: "Can you fix iPhone X or XS back glass without replacing the whole phone?", a: "Yes. On the iPhone X, XS and XS Max we replace only the glass: the old glass is removed from the frame by laser and new glass is bonded in. Your phone keeps its own logic board, battery, Face ID and data." },
        { q: "Is it safe to keep using an iPhone with cracked back glass?", a: "For a short time, but it's not ideal. The crack lets moisture and dust inside, loose glass can cut, and wireless charging can become unreliable as the damage spreads. Cover sharp edges with clear tape and book the repair soon." },
        { q: "Will wireless charging and MagSafe work after the repair?", a: "They should. The charging and MagSafe parts stay in the phone, and we test wireless charging, and MagSafe from the iPhone 12, before handover. If the drop already damaged a coil, the free diagnosis shows it first." },
        { q: "Will my iPhone still be water resistant?", a: "We can't guarantee it after opening a phone, and Apple's warranty never covers liquid damage anyway. We fit new adhesive and seals where the model uses them, but treat the phone with care around water afterwards." },
      ]}
      leadHeading="Get your iPhone back glass quote"
      cta={{
        headline: "Send your model and a photo of the back",
        description: "Free diagnosis, a written quote before work, and your own phone back with new glass.",
        prefill: "Hi, iPhone back glass replacement quote please. Model: ",
      }}
      related={[
        { label: "iPhone screen repair", to: "/iphone-screen-repair-dubai" },
        { label: "iPhone back glass repair cost", to: "/blog/iphone-back-glass-repair-cost-dubai" },
        { label: "iPhone camera repair", to: "/iphone-camera-repair-dubai" },
        { label: "iPhone repair Dubai", to: "/iphone-repair-dubai" },
        { label: "iPhone water damage repair", to: "/iphone-water-damage-repair-dubai" },
        { label: "iPhone screen repair cost", to: "/iphone-screen-repair-cost-dubai" },
      ]}
      sources={[
        { label: "Apple UAE: iPhone repair estimates", href: "https://support.apple.com/en-ae/iphone/repair/screen-replacement", note: "Includes back glass. Excluding VAT, read 26 Sep 2026." },
        { label: "Apple UAE: iPhone 18 Pro specs", href: "https://www.apple.com/ae/iphone-18-pro/specs/", note: "Aluminium unibody and Ceramic Shield back." },
      ]}
      reviewNames={["Wellington Academy", "Tim Quick", "B Parker"]}
    >
      <PageSection id="why" eyebrow="Why fix it" title="Why a cracked iPhone back glass is worth fixing">
        <p>
          Back glass is more than looks. It covers the wireless charging coil and, from the iPhone 12, the MagSafe
          magnets. Once it cracks, water and dust resistance is compromised, and sharp edges can cut a hand or snag a
          pocket.
        </p>
        <p>
          A cracked camera lens cover is a separate part: see <A to="/iphone-camera-repair-dubai">iPhone camera repair</A>.
          Screen broken too? The <A to="/iphone-screen-repair-dubai">iPhone screen repair</A> page covers that side, and
          we quote both together.
        </p>
      </PageSection>

      <PageSection id="how" eyebrow="How we do it" title="How iPhone back glass replacement works">
        <ul>
          <li>
            <strong>Bonded glass</strong> (iPhone 8 to 13, 14 Pro and 14 Pro Max): the glass is glued to the frame. We
            remove it with a laser machine that breaks down the adhesive, clean the frame and bond new glass. The phone
            keeps its own board, battery, Face ID and data.
          </li>
          <li>
            <strong>Removable back panel</strong> (iPhone 14, 14 Plus, and the iPhone 15 and 16 families): Apple
            redesigned the inside so the back glass comes off as its own part, which makes the job cleaner.
          </li>
          <li>
            <strong>iPhone 17 Pro and 18 Pro:</strong> an aluminium unibody. On the 18 Pro the back is a Ceramic Shield
            panel around the MagSafe area, colour-matched to the frame.
          </li>
        </ul>
        <p>
          After fitting, we test wireless charging, MagSafe where fitted, the cameras and the flash.
        </p>
      </PageSection>

      <PageSection id="cost" eyebrow="Cost" title="iPhone back glass replacement cost: Apple's price and ours">
        <p>
          Back glass on the iPhone 16, 16e, 17, 17e, Air, 17 Pro and 18 Pro models is AED 615 (Apple list), excluding VAT.
        </p>
        <p>
          With the screen broken too, the pair on an iPhone 18 Pro is AED 1,619 (Apple list).
        </p>
        <p>
          For older models, and for our price on any iPhone, WhatsApp the model and a photo of the back. Our{" "}
          <A to="/blog/iphone-back-glass-repair-cost-dubai">back glass cost guide</A> explains what moves the price.
        </p>
        <div>
          <WhatsAppButton text="Hi, iPhone back glass replacement quote please. Model: " label="WhatsApp your back glass quote" />
        </div>
      </PageSection>

      <ByModelSection
        id="by-model"
        title="iPhone back glass replacement by model"
        service={SERVICE}
        intro={<p>Tap WhatsApp on your model for a quote.</p>}
        groups={[
          { name: "iPhone 6, 6s and 7", heading: "iPhone 6, 6s and 7: aluminium back", body: <>No back glass to replace: these have an aluminium back. For a bent or dented housing, WhatsApp photos and we tell you what&apos;s possible.</> },
          { name: "iPhone 8 and 8 Plus", heading: "iPhone 8 and 8 Plus back glass replacement", body: <>Glass back added for wireless charging. Bonded to the frame, so it is removed by laser.</> },
          { name: "iPhone X", heading: "iPhone X back glass replacement", body: <>Bonded glass over the charging coil. Your phone keeps its own board, battery and Face ID.</> },
          { name: "iPhone XS and XS Max", heading: "iPhone XS and XS Max back glass replacement", body: <>Same bonded design as the X; the XS Max glass is larger, so tell us which you have.</> },
          { name: "iPhone XR and iPhone 11 family", heading: "iPhone XR and iPhone 11 back glass replacement", body: <>Bonded glass. We confirm the colour and finish for your model before you book.</> },
          { name: "iPhone SE (2nd and 3rd gen)", body: <>iPhone 8-style bonded glass back. Colour confirmed on WhatsApp first.</> },
          { name: "iPhone 12 and 13 families", body: <>Bonded glass over the charging and MagSafe parts. We check MagSafe accessories snap on and charge.</> },
          { name: "iPhone 14, 14 Plus, 14 Pro and 14 Pro Max", body: <>The 14 and 14 Plus were the first with a removable back panel; the 14 Pro models stay bonded.</> },
          { name: "iPhone 15, 16 and 16e", body: <>The iPhone 15 and 16 families use a removable back panel. Back glass on the 16, 16e and 16 Pro Max is AED 615 (Apple list).</> },
          { name: "iPhone 17, 17e and iPhone Air", modelPage: "/iphone-air-repair-dubai", body: <>Back glass is AED 615 (Apple list) on each. Apple&apos;s warranty doesn&apos;t cover a crack; AppleCare+ does, for a fee.</> },
          { name: "iPhone 17 Pro and 17 Pro Max", modelPage: "/iphone-17-pro-repair-dubai", body: <>Aluminium unibody; back glass is AED 615 (Apple list). We confirm part and colour availability first.</> },
          { name: "iPhone 18 Pro and 18 Pro Max", modelPage: "/iphone-18-pro-repair-dubai", body: <>Ceramic Shield back, colour-matched to the aluminium frame. Back glass is AED 615 (Apple list); check AppleCare+ first.</> },
        ]}
      />

      <PageSection id="warranty" eyebrow="Warranty and pickup" title="Warranty, pickup and what to do before you come in">
        <p>
          <strong>Warranty:</strong> back glass is hardware work, with a written warranty of up to 12 months on the part
          and our fit. A new crack from a drop is accidental damage and isn&apos;t covered. See the{" "}
          <A to="/warranty">warranty terms</A>.
        </p>
        <p>
          <strong>Before you come in:</strong> back up the phone, and put clear tape over sharp cracks.
        </p>
        <p>
          <strong>Getting it to us:</strong> walk in at {NAP.street}, {NAP.area}, or book free pickup anywhere in Dubai.
          Abu Dhabi and Sharjah customers use courier collection to our Dubai workshop.
        </p>
      </PageSection>
    </IPhoneMoneyPage>
  );
}
