import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM3ScreenFlickering";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m3-screen-flickering-dubai", {
  title: "MacBook Air M3 Screen Flickering Dubai? Causes & Fix 2026",
  description: "MacBook Air M3 screen flickering in Dubai? True Tone conflicts, display cable, software bugs, backlight issues. Free diagnosis, same-day repair. WhatsApp us for a price.",
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m3-screen-flickering-dubai" />
      <View />
    </>
  );
}
