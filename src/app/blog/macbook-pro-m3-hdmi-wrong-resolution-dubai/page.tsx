import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3HdmiResolution";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-hdmi-wrong-resolution-dubai", {
  title: "MacBook Pro M3 HDMI Wrong Resolution Dubai 2026",
  description: "MacBook Pro M3 HDMI external display showing wrong resolution in Dubai? Blurry, overscan, or 1080p instead of 4K. HDMI 2.1 cable and display settings fix.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-hdmi-wrong-resolution-dubai" />
      <View />
    </>
  );
}
