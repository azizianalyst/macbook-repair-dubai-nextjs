"use client";
import { LegalLayout, LegalSection } from "@/components/layout/LegalLayout";
import { useSeo } from "@/hooks/use-seo";
import { organization, webPage } from "@/lib/schema";
import { NAP } from "@/content/site";

const LAST_UPDATED = "April 2026";
const ISO_DATE = "2026-04-01";

export default function Warranty() {
  useSeo(
    {
      title: "Warranty Policy - MacBook Repair Dubai",
      description:
        "90-day written warranty on every Apple repair. What is covered, what is not, and how to make a warranty claim. Updated April 2026.",
      path: "/warranty",
    },
    [organization(), webPage({
      title: "Warranty Policy",
      description: "90-day written warranty on parts and workmanship for every Apple repair at MacBook Repair Dubai.",
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
      intro="A 90-day written warranty backs every paid repair. Some service categories carry a longer warranty. Read this page to know exactly what is covered, what is not, and how to claim - no small print, no surprises."
    >
      <LegalSection id="standard" title="1. The standard 90-day warranty">
        <ul>
          <li>Every paid repair is backed by a 90-day written warranty on parts and workmanship.</li>
          <li>The warranty starts on the date of pickup, printed on the invoice and recorded against the device serial number.</li>
          <li>The warranty travels with the device, not the customer - see the transfer rules below.</li>
          <li>Claim turnaround averages 24 hours from drop-off.</li>
        </ul>
      </LegalSection>

      <LegalSection id="covered" title="2. What is covered">
        <ul>
          <li><strong>Part failure:</strong> the replacement part fails within 90 days through no fault of the user.</li>
          <li><strong>Workmanship defects:</strong> the repair was not completed correctly - for example, a loose connector, an unbalanced trackpad, or backlight bleed on a freshly fitted screen.</li>
          <li><strong>Same-fault recurrence:</strong> the original symptom returns within 90 days. The repair is redone free of charge by the original technician where possible.</li>
          <li><strong>Cosmetic adhesion:</strong> if a screen or back glass lifts at the edges within 30 days, it is re-bonded free.</li>
        </ul>
      </LegalSection>

      <LegalSection id="not-covered" title="3. What is NOT covered">
        <ul>
          <li><strong>New physical damage</strong> after pickup - drops, cracks, dents, bent chassis.</li>
          <li><strong>New liquid damage</strong> - coffee spills, swimming-pool exposure, rain.</li>
          <li><strong>Tampering by a third party</strong> - if another shop or individual has opened the device after pickup, the warranty is void on the affected components.</li>
          <li><strong>Software issues unrelated to the repair</strong> - macOS or iOS bugs, third-party app crashes, malware, jailbreaks.</li>
          <li><strong>Battery wear</strong> below 80% capacity through normal use after 6 months on a battery replacement (see service-specific warranty below).</li>
          <li><strong>Missing or altered serial number</strong> on the device or invoice.</li>
          <li><strong>Repairs marked "no warranty"</strong> in writing on the WhatsApp quote - typically logic boards with prior corrosion damage and one-shot data recovery jobs.</li>
        </ul>
      </LegalSection>

      <LegalSection id="extended" title="4. Extended warranty">
        <ul>
          <li><strong>Battery+ option:</strong> a 6-month warranty on MacBook and iPhone batteries is included automatically - no extra fee.</li>
          <li><strong>Logic board peace-of-mind:</strong> for an additional AED 150 on the original repair, the 90-day board warranty extends to 6 months. Offered only on first-time board repairs.</li>
          <li>No extended warranty is sold separately after the original repair - the offer must be accepted at the time of the WhatsApp quote.</li>
        </ul>
      </LegalSection>

      <LegalSection id="claim" title="5. How to claim warranty">
        <ol>
          <li>Send a WhatsApp message to {NAP.phoneDisplay} within 90 days of the original pickup date. Include the device serial number, a description of the new symptom, and a photo or short video if relevant.</li>
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
            <tr><td>MacBook screen replacement</td><td>90 days</td><td>Covers panel, backlight, adhesion</td></tr>
            <tr><td>MacBook battery replacement</td><td>6 months</td><td>Includes 80% capacity guarantee</td></tr>
            <tr><td>iPhone battery replacement</td><td>6 months</td><td>Includes 80% capacity guarantee</td></tr>
            <tr><td>MacBook keyboard replacement</td><td>90 days</td><td>Covers any single key failure</td></tr>
            <tr><td>MacBook logic board repair</td><td>90 days</td><td>Extendable to 6 months for AED 150</td></tr>
            <tr><td>Water / liquid damage recovery</td><td>90 days on repaired components only</td><td>No warranty on a future spill</td></tr>
            <tr><td>iPad screen replacement</td><td>90 days</td><td>Covers panel and digitiser</td></tr>
            <tr><td>Data recovery</td><td>No warranty on data integrity</td><td>Standard industry practice</td></tr>
            <tr><td>SSD or RAM upgrade</td><td>90 days workmanship + manufacturer part warranty (1-5 years)</td><td>Manufacturer warranty handled directly with brand</td></tr>
            <tr><td>macOS reinstall / data transfer</td><td>30 days</td><td>Covers the install and basic configuration</td></tr>
          </tbody>
        </table>
      </LegalSection>

      <LegalSection id="transfer" title="7. Warranty transfer">
        <ul>
          <li>The warranty stays with the device serial number, not the original payer. If you sell the MacBook, the new owner can claim by presenting the original invoice.</li>
          <li>One transfer per repair is allowed, free of charge.</li>
          <li>The total warranty period does not extend on transfer - the original 90-day or 6-month clock continues from the original pickup date.</li>
          <li>Email <a href="mailto:info@macbook-repair-dubai.ae">info@macbook-repair-dubai.ae</a> with the invoice number and the new owner's name and phone to register the transfer.</li>
        </ul>
      </LegalSection>

      <LegalSection id="updated" title="8. Last updated">
        <p>This Warranty Policy was last reviewed and updated in {LAST_UPDATED}. Older versions are available on request.</p>
      </LegalSection>
    </LegalLayout>
  );
}
