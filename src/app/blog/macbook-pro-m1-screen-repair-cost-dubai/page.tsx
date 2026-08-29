import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1ScreenRepair";

export const metadata: Metadata = {
  title: "MacBook Pro M1 Screen Repair Cost Dubai 2026",
  description: "MacBook Pro M1 screen repair in Dubai 2026. M1 13-inch IPS LCD and M1 Pro/Max 14/16-inch mini-LED displays. Same-day service — WhatsApp us for your exact price.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-screen-repair-cost-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
