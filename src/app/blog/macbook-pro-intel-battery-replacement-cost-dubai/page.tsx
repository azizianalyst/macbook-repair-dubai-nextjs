import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelBatteryReplacement";

export const metadata: Metadata = {
  title: "MacBook Pro Intel Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro Intel battery replacement cost in Dubai 2026. 2016-2020 Intel MacBook Pro from AED 400. Same-day service. Swollen battery urgent care.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-intel-battery-replacement-cost-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
