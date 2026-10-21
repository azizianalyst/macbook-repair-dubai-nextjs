import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogAppleRepairCostReport2026";

export const metadata: Metadata = metaForPath("/blog/apple-repair-cost-dubai");

// Dataset JSON-LD rendered server-side (static HTML) so AI crawlers, which don't run JS -
// see the "original data study" signal that drives AEO/GEO citations. Aggregated, anonymised;
// no customer data, no cost/margin. URL is evergreen (no year) so it ranks year over year;
// the year lives in the title/H1/content and is refreshed annually.
const DATASET_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Apple Device Repair Cost Data. Dubai, 2023–2026",
  description: "Aggregated, anonymised pricing from 500 completed Apple device repairs (MacBook, iPhone, iPad, iMac) at an independent Dubai workshop between 2023 and 2026:…",
  url: "https://macbook-repair-dubai.ae/blog/apple-repair-cost-dubai/",
  creator: { "@type": "Organization", name: "MacBook Repair Dubai", url: "https://macbook-repair-dubai.ae/" },
  temporalCoverage: "2023/2026",
  spatialCoverage: { "@type": "Place", name: "Dubai, United Arab Emirates" },
  measurementTechnique: "Aggregated invoice records of completed repairs (customer-paid selling price, incl. VAT)",
  variableMeasured: ["Repair type", "Device model", "Customer-paid price (AED)", "Fault frequency"],
  license: "https://macbook-repair-dubai.ae/image-usage-license/",
  isAccessibleForFree: true,
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/apple-repair-cost-dubai" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DATASET_SCHEMA) }}
      />
      <View />
    </>
  );
}
