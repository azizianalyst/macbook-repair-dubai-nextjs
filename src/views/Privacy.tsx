"use client";
import { LegalLayout, LegalSection } from "@/components/layout/LegalLayout";
import { useSeo } from "@/hooks/use-seo";
import { organization, webPage } from "@/lib/schema";
import { NAP } from "@/content/site";

const LAST_UPDATED = "April 2026";
const ISO_DATE = "2026-04-01";

export default function Privacy() {
  useSeo(
    {
      title: "Privacy Policy - MacBook Repair Dubai",
      description:
        "How MacBook Repair Dubai collects, uses, and protects customer data. UAE PDPL and GDPR compliant. Updated April 2026.",
      path: "/privacy",
    },
    [organization(), webPage({
      title: "Privacy Policy",
      description: "Customer data practices for MacBook Repair Dubai under UAE PDPL and GDPR.",
      path: "/privacy",
      dateModified: ISO_DATE,
    })],
  );

  return (
    <LegalLayout
      title="Privacy Policy"
      pageLabel="Privacy Policy"
      pagePath="/privacy"
      lastUpdated={LAST_UPDATED}
      intro="What data MacBook Repair Dubai collects, why it is collected, how long it is kept, and the rights you hold over it under the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) and the EU GDPR."
    >
      <LegalSection id="who" title="1. Who we are">
        <p>
          MacBook Repair Dubai is the trading name of an independent Apple repair workshop registered in the Emirate of Dubai. The business has operated continuously since 10 October 2004.
        </p>
        <ul>
          <li><strong>Trading name:</strong> {NAP.name}</li>
          <li><strong>Address:</strong> {NAP.street}, {NAP.area}, {NAP.city}, {NAP.country}</li>
          <li><strong>Phone:</strong> {NAP.phoneDisplay}</li>
          <li><strong>WhatsApp:</strong> {NAP.phoneDisplay}</li>
          <li><strong>Email:</strong> info@macbook-repair-dubai.ae</li>
          <li><strong>Data controller:</strong> Shafiq (Workshop Manager) is the named contact for all data requests.</li>
        </ul>
      </LegalSection>

      <LegalSection id="data-collected" title="2. What data we collect">
        <p>Three categories. Nothing outside this list is recorded.</p>
        <h3>Contact details</h3>
        <ul>
          <li>Name (first name plus last initial accepted for repair tickets)</li>
          <li>Mobile number, used for WhatsApp updates and pickup coordination</li>
          <li>Email address, only when a printed invoice is requested</li>
          <li>Pickup or delivery address, only when free door-to-door service is requested</li>
        </ul>
        <h3>Device data</h3>
        <ul>
          <li>Device model, year, and serial number (recorded on the repair ticket)</li>
          <li>Reported fault and a brief diagnostic note from the technician</li>
          <li>Parts replaced and the warranty expiry date</li>
          <li><strong>Not collected:</strong> Apple ID, iCloud password, device passcode, or contents of files on the device</li>
        </ul>
        <h3>Website analytics</h3>
        <ul>
          <li>Google Analytics 4 with IP anonymisation enabled</li>
          <li>Page paths visited, referrer, browser type, country (no city-level location)</li>
          <li>Cookie consent banner records your choice - see the Cookie Policy</li>
          <li>No advertising pixels, no Meta Pixel, no third-party retargeting tags</li>
        </ul>
      </LegalSection>

      <LegalSection id="how-used" title="3. How we use your data">
        <ul>
          <li><strong>Generate a repair quote</strong> - your model and fault description are used to send a price on WhatsApp, usually within 4 minutes during business hours.</li>
          <li><strong>Run the repair</strong> - name and phone are linked to the device on the workshop ticket.</li>
          <li><strong>Send pickup confirmation</strong> - one WhatsApp message when the device is ready.</li>
          <li><strong>Post-repair check-in</strong> - exactly one follow-up message 7 days after pickup. No marketing list, no newsletter, no second message unless you reply.</li>
          <li><strong>Verify warranty claims</strong> - the repair ticket and serial number are used to confirm the 12-month warranty applies.</li>
          <li><strong>Improve the website</strong> - anonymised analytics are reviewed monthly to fix slow pages and broken links.</li>
        </ul>
      </LegalSection>

      <LegalSection id="retention" title="4. How long data is kept">
        <ul>
          <li><strong>Customer repair records:</strong> 3 years from pickup date, then permanently deleted from the workshop database.</li>
          <li><strong>Printed invoices and warranty cards:</strong> 5 years in a locked cabinet at the Concord Tower office, as required by UAE Federal Tax Authority regulations.</li>
          <li><strong>WhatsApp message history:</strong> retained on the business phone for 12 months, then deleted in batches.</li>
          <li><strong>Google Analytics data:</strong> 14 months, then auto-deleted by Google per the property setting.</li>
          <li><strong>Email enquiries:</strong> 24 months, then archived offline for a further 12 months for warranty reference.</li>
        </ul>
      </LegalSection>

      <LegalSection id="sharing" title="5. Who your data is shared with">
        <p>Data is shared only with parties strictly required to deliver the repair. Your data is never sold. There is no marketing list and no third-party advertising integration.</p>
        <ul>
          <li><strong>Payment processors:</strong> Network International, Visa, and Mastercard receive the card transaction data when you pay by card. Cash payments leave no third-party trail.</li>
          <li><strong>Apple Inc.:</strong> serial numbers are sometimes checked against Apple's GSX database to confirm warranty status before quoting. Your name is not sent.</li>
          <li><strong>Courier partner:</strong> for free pickup and delivery, the courier sees only your name, address, and phone.</li>
          <li><strong>Google LLC:</strong> anonymous analytics events only (see Cookie Policy).</li>
          <li><strong>Legal authorities:</strong> data is disclosed only when compelled by a Dubai Court order or a Dubai Police request that complies with UAE law.</li>
        </ul>
      </LegalSection>

      <LegalSection id="your-rights" title="6. Your rights">
        <p>Under UAE PDPL and GDPR you have the following rights, exercisable free of charge by sending a message to the contact at the bottom of this page. A response is sent within 30 days.</p>
        <ul>
          <li><strong>Access:</strong> request a copy of all personal data held about you.</li>
          <li><strong>Correction:</strong> ask for any inaccurate detail to be corrected.</li>
          <li><strong>Deletion:</strong> ask for your record to be deleted, except where retention is required by UAE tax law (5-year invoice retention).</li>
          <li><strong>Portability:</strong> receive your data in a structured, machine-readable format (CSV).</li>
          <li><strong>Objection:</strong> opt out of the single 7-day follow-up message at any time.</li>
          <li><strong>Withdraw consent:</strong> for analytics, by clearing cookies or selecting "Reject" on the consent banner.</li>
          <li><strong>Lodge a complaint:</strong> with the UAE Data Office (dataoffice.gov.ae) or, for EU residents, with your national data protection authority.</li>
        </ul>
      </LegalSection>

      <LegalSection id="cookies" title="7. Cookies">
        <p>
          A short cookie banner appears on first visit. The full list of cookies set by this website,
          with the option to disable each, is documented in the <a href="/cookies">Cookie Policy</a>.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="8. Contact for data requests">
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@macbook-repair-dubai.ae">info@macbook-repair-dubai.ae</a></li>
          <li><strong>Phone (English / Russian / Arabic):</strong> <a href={`tel:${NAP.phoneE164}`}>{NAP.phoneDisplay}</a></li>
          <li><strong>WhatsApp:</strong> <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">{NAP.phoneDisplay}</a></li>
          <li><strong>In person:</strong> {NAP.street}, {NAP.area}, Monday - Saturday, 9 am - 10 pm</li>
        </ul>
      </LegalSection>

      <LegalSection id="updated" title="9. Last updated">
        <p>This Privacy Policy was last reviewed and updated in {LAST_UPDATED}. Material changes are posted on this page with a 30-day notice on the homepage banner.</p>
      </LegalSection>
    </LegalLayout>
  );
}
