import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3ScreenRepair";

export const metadata: Metadata = {
  title: "MacBook Pro M3 Screen Repair Cost Dubai 2026",
  description: "MacBook Pro M3 screen repair cost in Dubai 2026. mini-LED LCD replacement from AED 500. Cracked display, backlight fault, local dimming zones, and display…",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m3-screen-repair-cost-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
