import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneBatteryReplacement";

export const metadata: Metadata = {
  title: "iPhone Battery Replacement Cost Dubai 2026",
  description: "iPhone battery replacement in Dubai by model. Independent Apple specialist, genuine cells, 3-month warranty. Message us on WhatsApp for your exact price.",
  openGraph: {
    title: "iPhone Battery Replacement Cost Dubai 2026: Prices by Model",
    description: "iPhone battery replacement in Dubai by model. Independent Apple specialist, genuine cells, 3-month warranty. Message us on WhatsApp for your exact price.",
    url: "https://macbook-repair-dubai.ae/blog/iphone-battery-replacement-cost-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iPhone battery replacement cost Dubai, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone Battery Replacement Cost Dubai 2026: Prices by Model",
    description: "iPhone battery replacement in Dubai by model. Independent Apple specialist, genuine cells, 3-month warranty. Message us on WhatsApp for your exact price.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/iphone-battery-replacement-cost-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
