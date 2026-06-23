import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5BatteryReplacement";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M5 battery replacement cost in Dubai 2026. M5 14-inch from AED 650, 16-inch from AED 700. When to replace, signs of battery failure, and what to…",
  openGraph: {
    title: "MacBook Pro M5 Battery Replacement Cost Dubai 2026: AED Prices and Guide",
    description:
      "M5 battery replacement in Dubai from AED 650. When to replace, signs of failure, same-day service.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-battery-replacement-cost-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 battery replacement, technician fitting new 70 Wh battery cell at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Battery Replacement Cost Dubai 2026",
    description:
      "M5 battery replacement from AED 650 in Dubai. When to replace and what to expect.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical:
      "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-battery-replacement-cost-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
