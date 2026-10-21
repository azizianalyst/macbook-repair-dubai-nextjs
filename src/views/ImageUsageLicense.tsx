"use client";
import { LegalLayout, LegalSection } from "@/components/layout/LegalLayout";
import { useSeo } from "@/hooks/use-seo";
import { organization, webPage } from "@/lib/schema";
import { NAP } from "@/content/site";

const LAST_UPDATED = "June 2026";
const ISO_DATE = "2026-06-11";

// The backlink engine: our infographics are free to reuse, but ONLY with a
// followed link credit to the source page. Google Images surfaces this page
// via the ImageObject license/acquireLicensePage fields and the XMP
// WebStatement embedded in every file.
export default function ImageUsageLicense() {
  useSeo(
    {
      title: "Image Usage License - Free with Attribution",
      description:
        "Use MacBook Repair Dubai's engineering infographics free of charge on your website or article. One condition: a visible, followed link credit to the source page.",
      path: "/image-usage-license",
    },
    [organization(), webPage({
      title: "Image Usage License",
      description: "Reuse terms for MacBook Repair Dubai infographics: free with a followed link credit to the source page.",
      path: "/image-usage-license",
      dateModified: ISO_DATE,
    })],
  );

  return (
    <LegalLayout
      title="Image Usage License"
      pageLabel="Image License"
      pagePath="/image-usage-license"
      lastUpdated={LAST_UPDATED}
      intro="Every technical infographic on this site was commissioned and is owned by MacBook Repair Dubai (Azizi Technologies). You are welcome to reuse them - bloggers, journalists, teachers and repair communities do - under the simple terms below."
    >
      <LegalSection id="allowed" title="1. What you may do - free of charge">
        <ul>
          <li>Embed or republish any of our infographics in articles, blog posts, presentations, social media posts and educational material.</li>
          <li>Resize or compress the image, provided the watermark and embedded metadata remain intact.</li>
        </ul>
      </LegalSection>

      <LegalSection id="condition" title="2. The one condition: a visible link credit">
        <p>
          Each use must be accompanied by a visible credit that links (a normal, followed
          hyperlink - not <code>rel=&quot;nofollow&quot;</code>) to the page the image came from, or to
          our homepage. Example:
        </p>
        <p>
          <em>
            Image: <a href="https://macbook-repair-dubai.ae">MacBook Repair Dubai</a>
          </em>
        </p>
        <p>
          The source page URL is embedded in every file&apos;s metadata (XMP WebStatement), and each
          image carries our name and phone number in the watermark.
        </p>
      </LegalSection>

      <LegalSection id="not-allowed" title="3. What you may not do">
        <ul>
          <li>Remove, crop out or blur the watermark or strip the embedded copyright metadata.</li>
          <li>Claim the images as your own work, or resell / license them to third parties.</li>
          <li>Use the images to promote a competing repair service as if they depict that service.</li>
        </ul>
      </LegalSection>

      <LegalSection id="enforcement" title="4. Uncredited use">
        <p>
          We routinely run reverse-image searches. If an image is used without the link credit we
          will first contact you with a friendly request to add it. Where it is ignored, we reserve
          the right to issue a takedown notice under the UAE Copyright Law (Federal Decree-Law No.
          38 of 2021) and the DMCA for internationally hosted sites.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="5. Licensing contact">
        <ul>
          <li><strong>Owner:</strong> {NAP.name} (Azizi Technologies)</li>
          <li><strong>Address:</strong> {NAP.street}, {NAP.area}, {NAP.city}</li>
          <li><strong>Phone / WhatsApp:</strong> {NAP.phoneDisplay}</li>
          <li><strong>Email:</strong> info@macbook-repair-dubai.ae</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
