import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5ScreenRepair";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Screen Repair Cost Dubai 2026",
  description:
    "MacBook Pro M5 screen repair in Dubai 2026. OLED screen cracked, backlight failed, or display lines? Same-day repair available. Message us on WhatsApp for your price.",
  openGraph: {
    title: "MacBook Pro M5 Screen Repair Cost Dubai 2026: OLED Replacement",
    description:
      "M5 OLED screen cracked or showing lines in Dubai? Same-day repair, 12-month warranty. Message us on WhatsApp for your exact price.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-screen-repair-cost-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 OLED screen repair, technician replacing cracked display panel at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Screen Repair Cost Dubai 2026",
    description:
      "M5 OLED screen repair in Dubai 2026. Same-day service. Message us on WhatsApp for your price.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical:
      "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-screen-repair-cost-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
