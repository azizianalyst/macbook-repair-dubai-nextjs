import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2ScreenRepair";

export const metadata: Metadata = {
  title: "MacBook Pro M2 Screen Repair Cost Dubai 2026",
  description: "MacBook Pro M2 screen repair cost in Dubai 2026. M2 13-inch uses IPS LCD. M2 Pro/Max 14/16-inch uses mini-LED. Same-day repair from AED 450. All models covered.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m2-screen-repair-cost-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
