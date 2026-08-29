import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5BatteryReplacement";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M5 battery replacement in Dubai 2026 for 14-inch and 16-inch. When to replace, signs of battery failure, same-day service — message us for your price.",
  openGraph: {
    title: "MacBook Pro M5 Battery Replacement Cost Dubai 2026: Guide and Quote",
    description:
      "M5 battery replacement in Dubai. When to replace, signs of failure, same-day service — message us on WhatsApp for your price.",
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
      "M5 battery replacement in Dubai. When to replace and what to expect — message us for your price.",
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
