import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5ScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-screen-repair-cost-dubai", {
  title: "MacBook Pro M5 Screen Repair Cost Dubai 2026",
  description: "MacBook Pro M5 screen repair in Dubai 2026. OLED screen cracked, backlight failed, or display lines? Same-day repair available. Message us on WhatsApp for your price.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
