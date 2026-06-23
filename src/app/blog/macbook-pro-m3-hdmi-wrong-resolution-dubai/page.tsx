import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3HdmiResolution";

export const metadata: Metadata = {
  title: "MacBook Pro M3 HDMI Wrong Resolution Dubai 2026",
  description: "MacBook Pro M3 HDMI external display showing wrong resolution in Dubai? Blurry, overscan, or 1080p instead of 4K. HDMI 2.1 cable and display settings fix.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m3-hdmi-wrong-resolution-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-hdmi-wrong-resolution-dubai" />
      <View />
    </>
  );
}
