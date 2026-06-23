import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1BatteryReplacement";

export const metadata: Metadata = {
  title: "MacBook Pro M1 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M1 battery replacement cost in Dubai 2026. M1 13-inch from AED 550. M1 Pro 14-inch from AED 600. M1 Max 16-inch from AED 650. Same-day service.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-battery-replacement-cost-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
