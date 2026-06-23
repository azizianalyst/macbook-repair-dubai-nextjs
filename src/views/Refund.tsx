"use client";
import { LegalLayout, LegalSection } from "@/components/layout/LegalLayout";
import { useSeo } from "@/hooks/use-seo";
import { organization, webPage } from "@/lib/schema";
import { NAP } from "@/content/site";

const LAST_UPDATED = "April 2026";
const ISO_DATE = "2026-04-01";

export default function Refund() {
  useSeo(
    {
      title: "Refund Policy - MacBook Repair Dubai",
      description:
        "Refund windows, no-fix-no-charge promise, and dispute resolution at MacBook Repair Dubai. Plain English. Updated April 2026.",
      path: "/refund",
    },
    [organization(), webPage({
      title: "Refund Policy",
      description: "Refund rules, redo windows, and dispute resolution for paid Apple repairs at MacBook Repair Dubai.",
      path: "/refund",
      dateModified: ISO_DATE,
    })],
  );

  return (
    <LegalLayout
      title="Refund Policy"
      pageLabel="Refund Policy"
      pagePath="/refund"
      lastUpdated={LAST_UPDATED}
      intro="When a refund is due, when a free redo applies instead, and how the dispute path works. Built around the no-fix-no-charge promise."
    >
      <LegalSection id="diagnosis" title="1. Diagnostic fee - always free">
        <ul>
          <li>The diagnosis is free in every case, for every device, no exceptions.</li>
          <li>Because nothing is charged for the diagnosis, nothing is refunded for it either.</li>
          <li>Walk-in customers receive a verbal price within 40 minutes for most issues; written WhatsApp quotes follow within 24 hours.</li>
        </ul>
      </LegalSection>

      <LegalSection id="no-fix" title="2. No fix, no charge">
        <ul>
          <li>If a board or part cannot be repaired, the price is AED 0.</li>
          <li>You may collect the device at any time during business hours.</li>
          <li>The diagnostic report is yours to keep - print copy on request - and can be used at any other repair shop.</li>
          <li>Two pre-authorised exceptions: data recovery on physically damaged drives, and liquid damage cleaning. In both cases the labour figure is sent on WhatsApp and approved in writing before work begins.</li>
        </ul>
      </LegalSection>

      <LegalSection id="windows" title="3. Refund and redo windows">
        <h3>Within 7 days of pickup</h3>
        <ul>
          <li>If the originally reported fault was not actually fixed: full refund of the repair price OR a free redo, your choice.</li>
          <li>Refund processed back to the original payment method within 3-7 business days.</li>
        </ul>
        <h3>Within 30 days of pickup</h3>
        <ul>
          <li>If the same part fails again with the same symptom: free redo using a new replacement part.</li>
          <li>If the same symptom but caused by a separate component, a quote is sent for the additional fault - the original repair price is not refunded because the original repair was successful.</li>
        </ul>
        <h3>Within 12 months of pickup (warranty period)</h3>
        <ul>
          <li>Free part replacement and free labour for any in-scope warranty claim.</li>
          <li>For battery work, the window is 3 months and the 80% capacity guarantee applies.</li>
          <li>Full warranty rules: see <a href="/warranty/">Warranty Policy</a>.</li>
        </ul>
      </LegalSection>

      <LegalSection id="non-refundable" title="4. Non-refundable cases">
        <ul>
          <li><strong>New damage caused by the customer</strong> after pickup - drops, spills, third-party tampering.</li>
          <li><strong>Buyer's regret</strong> on work that was clearly described, quoted, and approved on WhatsApp before the work was done.</li>
          <li><strong>Cosmetic preferences</strong> on aftermarket parts when the part type was disclosed in the WhatsApp quote.</li>
          <li><strong>Touch ID, Face ID, or True Tone</strong> features lost due to Apple's calibration lock - disclosed in writing before the repair.</li>
          <li><strong>Data loss during repair</strong> when the customer was advised to back up and chose not to.</li>
          <li><strong>Pickup and delivery fees</strong> for Sharjah and Abu Dhabi (AED 100 each way) are non-refundable once the trip is dispatched.</li>
        </ul>
      </LegalSection>

      <LegalSection id="process" title="5. How a refund is processed">
        <ol>
          <li>Send a WhatsApp message to {NAP.phoneDisplay} explaining the issue and quoting the invoice number.</li>
          <li>A technician responds within 4 business hours and arranges a free inspection - drop-off or pickup.</li>
          <li>The device is inspected, usually within 24 hours.</li>
          <li>If a refund is due, it is approved by the workshop manager (Shafiq) and processed via the original payment method.</li>
          <li>Refund timing: cash refunded on the spot in person; card refunded in 3-7 business days; bank transfer in 1-3 business days.</li>
          <li>A written confirmation of the refund is sent on WhatsApp.</li>
        </ol>
      </LegalSection>

      <LegalSection id="dispute" title="6. Dispute resolution">
        <ol>
          <li><strong>Step 1 - direct talk:</strong> message {NAP.phoneDisplay} or email <a href="mailto:info@macbook-repair-dubai.ae">info@macbook-repair-dubai.ae</a>. Most disputes resolve within 48 hours at this stage.</li>
          <li><strong>Step 2 - manager review:</strong> Shafiq personally reviews any case unresolved after 5 business days and replies in writing within 7 days.</li>
          <li><strong>Step 3 - Dubai Department of Economy & Tourism:</strong> file a complaint at consumerrights.ae or call 600 545 555. The workshop responds to all DET complaints within the 14-day statutory deadline.</li>
          <li><strong>Step 4 - Dubai Courts:</strong> as a last resort. The Dubai Courts have exclusive jurisdiction under our <a href="/terms/">Terms of Service</a>.</li>
        </ol>
      </LegalSection>

      <LegalSection id="updated" title="7. Last updated">
        <p>This Refund Policy was last reviewed and updated in {LAST_UPDATED}.</p>
      </LegalSection>
    </LegalLayout>
  );
}
