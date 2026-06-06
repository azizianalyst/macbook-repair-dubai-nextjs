"use client";
import { LegalLayout, LegalSection } from "@/components/layout/LegalLayout";
import { useSeo } from "@/hooks/use-seo";
import { organization, webPage } from "@/lib/schema";

const LAST_UPDATED = "April 2026";
const ISO_DATE = "2026-04-01";

export default function Cookies() {
  useSeo(
    {
      title: "Cookie Policy - MacBook Repair Dubai",
      description:
        "The 4 cookies set by macbook-repair-dubai.ae, what each one does, and how to disable them. No advertising trackers. Updated April 2026.",
      path: "/cookies",
    },
    [organization(), webPage({
      title: "Cookie Policy",
      description: "Cookies set by MacBook Repair Dubai - essential and analytics only, no advertising trackers.",
      path: "/cookies",
      dateModified: ISO_DATE,
    })],
  );

  return (
    <LegalLayout
      title="Cookie Policy"
      pageLabel="Cookie Policy"
      pagePath="/cookies"
      lastUpdated={LAST_UPDATED}
      intro="Every cookie set by macbook-repair-dubai.ae, why it is set, how long it lives, and how to switch it off. Four cookies in total. No advertising or cross-site tracking pixels."
    >
      <LegalSection id="what" title="1. What is a cookie">
        <ul>
          <li>A cookie is a small text file (typically under 4 KB) that a website saves on your browser.</li>
          <li>Cookies remember preferences (language, dark mode), keep you signed in, and count anonymous page visits.</li>
          <li>This site does not use cookies for advertising, retargeting, or cross-site tracking.</li>
        </ul>
      </LegalSection>

      <LegalSection id="ours" title="2. Cookies set by this site">
        <h3>Essential cookies</h3>
        <table>
          <thead>
            <tr><th>Name</th><th>Purpose</th><th>Lifetime</th></tr>
          </thead>
          <tbody>
            <tr><td><code>mrd_consent</code></td><td>Remembers your cookie banner choice (accept or reject)</td><td>12 months</td></tr>
            <tr><td><code>mrd_session</code></td><td>Maintains the contact form session if you switch tabs while typing</td><td>Session (deleted on browser close)</td></tr>
          </tbody>
        </table>

        <h3>Analytics cookies (loaded only after consent)</h3>
        <table>
          <thead>
            <tr><th>Name</th><th>Purpose</th><th>Lifetime</th></tr>
          </thead>
          <tbody>
            <tr><td><code>_ga</code></td><td>Google Analytics 4 - distinguishes one anonymous browser from another</td><td>13 months</td></tr>
            <tr><td><code>_ga_&lt;ID&gt;</code></td><td>Google Analytics 4 - stores session state</td><td>13 months</td></tr>
          </tbody>
        </table>
        <p>
          Google Analytics 4 is configured with IP anonymisation (the last octet of every visitor IP is dropped before storage). No advertising features, no Google Signals, no cross-device user-ID linking.
        </p>

        <h3>What is NOT set</h3>
        <ul>
          <li>No Meta Pixel</li>
          <li>No TikTok Pixel</li>
          <li>No Google Ads conversion tracker</li>
          <li>No retargeting tags</li>
          <li>No third-party advertising cookies of any kind</li>
        </ul>
      </LegalSection>

      <LegalSection id="third-party" title="3. Third-party services">
        <ul>
          <li><strong>Google Analytics 4</strong> - usage statistics, anonymised. Privacy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</li>
          <li><strong>Google Maps embed</strong> on the Contact and Location pages - Google may set its own cookies if you interact with the embedded map. Privacy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</li>
          <li><strong>WhatsApp deep link</strong> (<code>wa.me</code>) - opens WhatsApp directly, no cookies set on this site.</li>
          <li>No other third-party services are loaded.</li>
        </ul>
      </LegalSection>

      <LegalSection id="disable" title="4. How to disable cookies">
        <p>Reject analytics cookies on the banner that appears on your first visit. Or disable cookies in your browser:</p>
        <ul>
          <li><strong>Safari (macOS):</strong> Safari → Settings → Privacy → "Block all cookies"</li>
          <li><strong>Safari (iOS):</strong> Settings → Safari → "Block All Cookies"</li>
          <li><strong>Chrome:</strong> Settings → Privacy and security → Third-party cookies → "Block all"</li>
          <li><strong>Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection → "Strict"</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies → enable "Block third-party cookies"</li>
          <li><strong>Opt out of Google Analytics across all sites:</strong> install the official browser add-on at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
        </ul>
        <p>Disabling essential cookies will not break the site, but the cookie banner will reappear on every visit.</p>
      </LegalSection>

      <LegalSection id="consent" title="5. Consent mechanism">
        <ul>
          <li>On your first visit, a cookie banner appears at the bottom of the screen with two equally weighted buttons: <strong>Accept analytics</strong> and <strong>Reject analytics</strong>.</li>
          <li>Analytics scripts do not load until "Accept analytics" is selected - this is opt-in, not opt-out, in line with EU GDPR Article 7.</li>
          <li>Your choice is stored in the <code>mrd_consent</code> cookie for 12 months.</li>
          <li>Change your mind at any time by clearing site data in your browser; the banner will reappear on the next visit.</li>
        </ul>
      </LegalSection>

      <LegalSection id="updated" title="6. Last updated">
        <p>This Cookie Policy was last reviewed and updated in {LAST_UPDATED}. Cookie inventory is audited every 6 months and after any change to third-party scripts.</p>
      </LegalSection>
    </LegalLayout>
  );
}
