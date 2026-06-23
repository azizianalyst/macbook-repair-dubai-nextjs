"use client";
import { LegalLayout, LegalSection } from "@/components/layout/LegalLayout";
import GlassWarrantyNotice from "@/components/blocks/GlassWarrantyNotice";
import { useSeo } from "@/hooks/use-seo";
import { organization, webPage } from "@/lib/schema";
import { NAP } from "@/content/site";

const LAST_UPDATED = "June 2026";
const ISO_DATE = "2026-06-10";

export default function Warranty() {
  useSeo(
    {
      title: "Warranty Policy - MacBook Repair Dubai",
      description:
        "Warranty of up to 12 months on Apple repairs, depending on the repair. What is covered, what is not, and how to make a claim. Updated June 2026.",
      path: "/warranty",
    },
    [organization(), webPage({
      title: "Warranty Policy",
      description: "Written warranty of up to 12 months on Apple repairs at MacBook Repair Dubai - the period depends on the repair.",
      path: "/warranty",
      dateModified: ISO_DATE,
    })],
  );

  return (
    <LegalLayout
      title="Warranty Policy"
      pageLabel="Warranty Policy"
      pagePath="/warranty"
      lastUpdated={LAST_UPDATED}
      intro="Every paid repair is backed by a written warranty - the period depends on the repair, from 15 days up to 12 months. Read this page to know exactly what is covered, what is not, and how to claim - no small print, no surprises."
    >
      <div className="mb-lg"><GlassWarrantyNotice device="screen or glass" /></div>
      <LegalSection id="standard" title="1. How long your warranty lasts">
        <ul>
          <li><strong>Hardware repairs</strong> - keyboard, trackpad, charging port, Touch Bar, hinge, fan, speaker, and SSD/RAM upgrades - carry a written warranty of <strong>up to 12 months</strong> on parts and workmanship.</li>
          <li><strong>Screen replacements</strong> depend on the panel grade you choose: <strong>15 days</strong> on high-grade aftermarket panels and <strong>up to 3 months</strong> on genuine Apple panels. Both are bench-tested; the grade and its warranty are confirmed on your WhatsApp quote before any work.</li>
          <li><strong>Battery replacements</strong> (MacBook and iPhone) are covered for <strong>3 months</strong>, with an 80% capacity guarantee.</li>
          <li><strong>Software work, diagnostics, data recovery, and logic-board and liquid-damage repairs</strong> carry a <strong>15-day</strong> warranty, because their long-term outcome is harder to guarantee.</li>
          <li>Your exact warranty period is printed on the invoice and recorded against the device serial number. It starts on the date of pickup.</li>
          <li>The warranty travels with the device, not the customer - see the transfer rules below.</li>
          <li>Claim turnaround averages 24 hours from drop-off.</li>
          <li><strong>Apple's warranty and AppleCare are separate from ours.</strong> The periods above are <em>our</em> repair warranty. If your device is still covered by Apple's standard one-year warranty or by AppleCare / AppleCare+ (up to about 3 years on a Mac), that is Apple's cover on the device itself and is claimed through Apple - not us. We are an independent specialist (not an Apple Authorized Service Provider), so if your device is still in Apple cover we will tell you, because for a covered fault you may be better off going to Apple.</li>
        </ul>
      </LegalSection>

      <LegalSection id="covered" title="2. What is covered">
        <ul>
          <li><strong>Part failure:</strong> the replacement part fails within the warranty period through no fault of the user.</li>
          <li><strong>Workmanship defects:</strong> the repair was not completed correctly - for example, a loose connector, an unbalanced trackpad, or backlight bleed on a freshly fitted screen.</li>
          <li><strong>Same-fault recurrence:</strong> the original symptom returns within the warranty period. The repair is redone free of charge by the original technician where possible.</li>
          <li><strong>Cosmetic adhesion:</strong> if a screen or back glass lifts at the edges within 30 days, it is re-bonded free.</li>
        </ul>
      </LegalSection>

      <LegalSection id="not-covered" title="3. What is NOT covered">
        <ul>
          <li><strong>New physical damage</strong> after pickup - drops, cracks, dents, bent chassis.</li>
          <li><strong>New liquid damage</strong> - coffee spills, swimming-pool exposure, rain.</li>
          <li><strong>Tampering by a third party</strong> - if another shop or individual has opened the device after pickup, the warranty is void on the affected components.</li>
          <li><strong>Software issues unrelated to the repair</strong> - macOS or iOS bugs, third-party app crashes, malware, jailbreaks.</li>
          <li><strong>Battery wear</strong> below 80% capacity through normal use after 3 months on a battery replacement (see service-specific warranty below).</li>
          <li><strong>Missing or altered serial number</strong> on the device or invoice.</li>
          <li><strong>Repairs marked "no warranty"</strong> in writing on the WhatsApp quote - typically logic boards with prior corrosion damage and one-shot data recovery jobs.</li>
        </ul>
      </LegalSection>

      <LegalSection id="extended" title="4. Extended warranty">
        <ul>
          <li><strong>Battery+ option:</strong> a 3-month warranty on MacBook and iPhone batteries is included automatically - no extra fee.</li>
          <li><strong>Logic board peace-of-mind:</strong> logic-board and liquid-damage repairs carry a 15-day warranty as standard; for an additional AED 150 on the original repair you can extend it to 6 months. Offered only on first-time board repairs.</li>
          <li>No extended warranty is sold separately after the original repair - the offer must be accepted at the time of the WhatsApp quote.</li>
        </ul>
      </LegalSection>

      <LegalSection id="claim" title="5. How to claim warranty">
        <ol>
          <li>Send a WhatsApp message to {NAP.phoneDisplay} within the warranty period shown on your invoice (15 days to 12 months, depending on the service). Include the device serial number, a description of the new symptom, and a photo or short video if relevant.</li>
          <li>A technician confirms within 4 business hours whether the symptom is in scope.</li>
          <li>Drop the device at {NAP.street}, {NAP.area}, or use the free pickup service.</li>
          <li>Bring the original invoice or quote the invoice number - the workshop also keeps a copy linked to the serial number.</li>
          <li>Inspection is free. If the symptom is in scope, the repair is redone free, usually within 24 hours.</li>
          <li>If the symptom is out of scope, a quote for the new fault is sent on WhatsApp before any work begins.</li>
        </ol>
      </LegalSection>

      <LegalSection id="by-service" title="6. Warranty by service type">
        <table>
          <thead>
            <tr>
              <th>Service category</th>
              <th>Warranty period</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>MacBook screen replacement</td><td>15 days (aftermarket) to 3 months (genuine)</td><td>Covers panel, backlight, adhesion</td></tr>
            <tr><td>MacBook battery replacement</td><td>3 months</td><td>Includes 80% capacity guarantee</td></tr>
            <tr><td>iPhone battery replacement</td><td>3 months</td><td>Includes 80% capacity guarantee</td></tr>
            <tr><td>MacBook keyboard replacement</td><td>15 days</td><td>Covers any single key failure</td></tr>
            <tr><td>MacBook logic board repair</td><td>15 days</td><td>Extendable to 6 months for AED 150</td></tr>
            <tr><td>Water / liquid damage recovery</td><td>15 days on repaired components only</td><td>No warranty on a future spill</td></tr>
            <tr><td>iPad screen replacement</td><td>15 days (aftermarket) to 3 months (genuine)</td><td>Covers panel and digitiser</td></tr>
            <tr><td>Data recovery</td><td>15 days on the repair work</td><td>No guarantee on data integrity (industry standard)</td></tr>
            <tr><td>SSD or RAM upgrade</td><td>12 months workmanship + manufacturer part warranty (1-5 years)</td><td>Manufacturer warranty handled directly with brand</td></tr>
            <tr><td>macOS reinstall / data transfer</td><td>15 days</td><td>Covers the install and basic configuration</td></tr>
          </tbody>
        </table>
      </LegalSection>

      <LegalSection id="transfer" title="7. Warranty transfer">
        <ul>
          <li>The warranty stays with the device serial number, not the original payer. If you sell the MacBook, the new owner can claim by presenting the original invoice.</li>
          <li>One transfer per repair is allowed, free of charge.</li>
          <li>The total warranty period does not extend on transfer - the original clock (15 days, 6 months or 12 months) continues from the original pickup date.</li>
          <li>Email <a href="mailto:info@macbook-repair-dubai.ae">info@macbook-repair-dubai.ae</a> with the invoice number and the new owner's name and phone to register the transfer.</li>
        </ul>
      </LegalSection>

      <LegalSection id="updated" title="8. Last updated">
        <p>This Warranty Policy was last reviewed and updated in {LAST_UPDATED}. Older versions are available on request.</p>
      </LegalSection>
    </LegalLayout>
  );
}
