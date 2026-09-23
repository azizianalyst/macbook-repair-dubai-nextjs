import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4ScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-screen-repair-cost-dubai", {
  title: "MacBook Pro M4 Screen Repair Cost Dubai 2026",
  description: "MacBook Pro M4 screen repair in Dubai 2026. First OLED on MacBook Pro: cracked display, lines, or flickering. Message us on WhatsApp for today's exact price.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
