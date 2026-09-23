import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3ScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-screen-repair-cost-dubai", {
  title: "MacBook Pro M3 Screen Repair Cost Dubai 2026",
  description: "MacBook Pro M3 screen repair in Dubai 2026 — mini-LED LCD replacement for cracked display, backlight fault and dimming zones. Message us on WhatsApp for a quote.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
