import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4BatteryReplacement";

export const metadata: Metadata = {
  title: "MacBook Pro M4 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M4 battery replacement cost in Dubai 2026. When to replace, swollen battery warning signs, and what to expect after replacement.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-battery-replacement-cost-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
