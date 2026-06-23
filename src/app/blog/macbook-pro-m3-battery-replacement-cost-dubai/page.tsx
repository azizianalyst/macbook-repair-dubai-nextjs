import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3BatteryReplacement";

export const metadata: Metadata = {
  title: "MacBook Pro M3 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M3 battery replacement cost in Dubai 2026. When to replace, battery health check, swollen battery signs, and AED prices. M3 battery from AED 550.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m3-battery-replacement-cost-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
