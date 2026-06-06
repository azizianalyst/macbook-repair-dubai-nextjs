"use client";
import { LegalLayout, LegalSection } from "@/components/layout/LegalLayout";
import { useSeo } from "@/hooks/use-seo";
import { organization, webPage } from "@/lib/schema";
import { NAP } from "@/content/site";

const LAST_UPDATED = "April 2026";
const ISO_DATE = "2026-04-01";

export default function Terms() {
  useSeo(
    {
      title: "Terms of Service - MacBook Repair Dubai",
      description:
        "Service terms for repairs at MacBook Repair Dubai: free diagnosis, no-fix-no-charge, parts policy, pricing, and Dubai jurisdiction. Updated April 2026.",
      path: "/terms",
    },
    [organization(), webPage({
      title: "Terms of Service",
      description: "Repair service terms, parts policy, pricing rules, and governing law for MacBook Repair Dubai.",
      path: "/terms",
      dateModified: ISO_DATE,
    })],
  );

  return (
    <LegalLayout
      title="Terms of Service"
      pageLabel="Terms of Service"
      pagePath="/terms"
      lastUpdated={LAST_UPDATED}
      intro="The terms that apply when you book any repair with MacBook Repair Dubai. Plain English where possible. By dropping off a device or approving a quote on WhatsApp, you accept these terms."
    >
      <LegalSection id="services" title="1. Services we provide">
        <ul>
          <li>Component-level repair for MacBook (Air, Pro, Intel and Apple Silicon M1-M5)</li>
          <li>iMac, Mac mini, Mac Studio, and Mac Pro repair and upgrades</li>
          <li>iPhone screen, battery, board, and water-damage repair</li>
          <li>iPad screen, battery, and charging port repair</li>
          <li>Data recovery from working and non-booting drives</li>
          <li>Free pickup and delivery across Dubai Mainland</li>
        </ul>
      </LegalSection>

      <LegalSection id="diagnosis" title="2. Free diagnosis & no-fix-no-charge">
        <ul>
          <li>The initial diagnosis is free for every device, every customer, no exceptions.</li>
          <li>A written quote is sent to your WhatsApp number before any work begins.</li>
          <li>If a board or part cannot be repaired, you owe AED 0 - no diagnostic fee, no inspection charge, no labour fee.</li>
          <li>You may collect the unrepaired device at any time during business hours.</li>
          <li>Two exceptions where a fee may apply: (a) data recovery attempts on physically damaged drives where labour is quoted in writing in advance; (b) liquid damage cases where the cleaning step has already been authorised in writing.</li>
        </ul>
      </LegalSection>

      <LegalSection id="parts" title="3. Parts policy">
        <ul>
          <li><strong>Genuine Apple parts</strong> are fitted whenever the part is currently sold by Apple wholesale or available through verified channels.</li>
          <li><strong>Quality-grade aftermarket parts</strong> (OEM or premium third-party) are clearly labelled on the WhatsApp quote and on the printed invoice.</li>
          <li>Aftermarket parts carry the same 90-day warranty as genuine parts.</li>
          <li>Some Touch ID, Face ID, and True Tone features are tied to the original Apple part by Apple's calibration servers and may not work after replacement. The technician will state this in writing before the repair.</li>
          <li>Old parts removed during the repair are returned to you on request, except where Apple recycling regulations require recovery (lithium-ion batteries).</li>
        </ul>
      </LegalSection>

      <LegalSection id="warranty" title="4. Warranty">
        <p>
          A 90-day written warranty applies to every paid repair. The full terms - what is and is not covered, how to claim, and the warranty period for each repair type - are listed on the dedicated <a href="/warranty">Warranty Policy</a> page.
        </p>
      </LegalSection>

      <LegalSection id="customer" title="5. Customer responsibilities">
        <ul>
          <li><strong>Back up your data before drop-off.</strong> The workshop will make commercially reasonable efforts to preserve data, but is not liable for data loss during repair. A free Time Machine backup station is available in the office for walk-in customers.</li>
          <li><strong>Disclose prior repairs.</strong> If the device has been opened before - by Apple, by another shop, or by a friend - say so. Hidden prior repairs may void the warranty on the new repair.</li>
          <li><strong>Provide an unlock method.</strong> For repairs requiring power-on testing, provide either the device passcode or sign a written test-in-locked-state waiver. Apple ID and iCloud passwords are never requested.</li>
          <li><strong>Collect within 60 days.</strong> See the abandonment policy below.</li>
          <li><strong>Pay the agreed price.</strong> Payment is due on collection. Cash, card, Apple Pay, and bank transfer are accepted.</li>
        </ul>
      </LegalSection>

      <LegalSection id="pricing" title="6. Pricing & quote validity">
        <ul>
          <li>All prices are quoted in UAE Dirhams (AED) and include 5% VAT.</li>
          <li>Written quotes sent on WhatsApp are valid for 7 calendar days from the message timestamp.</li>
          <li>If a quote expires, a fresh diagnosis may be required at no charge.</li>
          <li>If, during the repair, a second fault is discovered (for example, a failed SSD found during a screen repair), work stops and a revised quote is sent for written approval before any extra cost is incurred.</li>
          <li>Quoted timelines are good-faith estimates based on parts in stock. Delays of more than 24 hours beyond the quoted timeline are communicated on WhatsApp.</li>
        </ul>
      </LegalSection>

      <LegalSection id="abandonment" title="7. Device abandonment policy">
        <ul>
          <li>Devices not collected within 60 days of the "ready for pickup" WhatsApp message are considered abandoned.</li>
          <li>Three reminder messages are sent: at day 14, day 30, and day 50.</li>
          <li>After day 60, the device may be sold to recover unpaid repair costs and storage fees, in line with UAE Civil Transactions Law Article 415.</li>
          <li>Any sale proceeds in excess of the unpaid balance are held for 12 months for the customer to claim, then donated to a registered Dubai charity.</li>
        </ul>
      </LegalSection>

      <LegalSection id="liability" title="8. Limitation of liability">
        <ul>
          <li>Liability is capped at the amount paid for the specific repair giving rise to the claim.</li>
          <li>The workshop is not liable for indirect, consequential, or business-loss damages.</li>
          <li>Liability for data loss is limited to a free best-effort recovery attempt; reimbursement of third-party recovery costs is excluded.</li>
          <li>Nothing in these terms limits liability for fraud, gross negligence, or any liability that cannot be excluded under UAE law.</li>
        </ul>
      </LegalSection>

      <LegalSection id="ip" title="9. Intellectual property and use of this website">
        <p>
          All content on this website - the text, prices, repair guides, FAQs, images, code, page structure and design - is the property of {NAP.name} and is protected by copyright.
        </p>
        <ul>
          <li>You may view this site and share links to it for personal, non-commercial use only.</li>
          <li>You may not copy, scrape, republish, mirror, or clone any part of this site, in whole or in part, by any automated or manual means.</li>
          <li>Automated crawling or data extraction by SEO, competitor-analysis, or scraping tools is not permitted and is actively blocked.</li>
          <li>Search engines and AI assistants may index and cite this content for the sole purpose of surfacing {NAP.name} in search results and answers.</li>
          <li>Unauthorised copies and clones are pursued through DMCA and hosting-provider takedown notices and under UAE law. Report infringement to <a href="mailto:info@macbook-repair-dubai.ae">info@macbook-repair-dubai.ae</a>.</li>
        </ul>
      </LegalSection>

      <LegalSection id="law" title="10. Governing law">
        <p>
          These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai. Any dispute that cannot be resolved through good-faith discussion within 30 days will be referred to the Dubai Courts, which have exclusive jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to these terms">
        <ul>
          <li>Material changes are posted on this page with a 30-day notice on the homepage banner.</li>
          <li>The version active when you approved your repair quote is the version that governs that repair, even if these terms change later.</li>
          <li>Older versions are available on request by emailing <a href="mailto:info@macbook-repair-dubai.ae">info@macbook-repair-dubai.ae</a>.</li>
        </ul>
      </LegalSection>

      <LegalSection id="updated" title="12. Last updated">
        <p>
          These Terms of Service were last reviewed and updated in {LAST_UPDATED}. Questions? Call {NAP.phoneDisplay} or visit {NAP.street}, {NAP.area} during business hours.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
