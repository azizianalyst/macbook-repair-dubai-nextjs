import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5ScreenRepair";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Screen Repair Cost Dubai 2026",
  description:
    "MacBook Pro M5 screen repair cost in Dubai 2026. OLED screen cracked, backlight failed, or display lines. Replacement from AED 700. Same-day repair available.",
  openGraph: {
    title: "MacBook Pro M5 Screen Repair Cost Dubai 2026: OLED Replacement Prices",
    description:
      "M5 OLED screen cracked or showing lines in Dubai? Replacement from AED 700. Same-day repair, 12-month warranty.",
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
      "M5 OLED screen repair cost in Dubai 2026: from AED 700. Same-day service.",
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
