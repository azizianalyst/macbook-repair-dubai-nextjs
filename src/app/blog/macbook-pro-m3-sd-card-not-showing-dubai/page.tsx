import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3SdCardNotShowing";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-sd-card-not-showing-dubai", {
  title: "MacBook Pro M3 SD Card Not Showing Dubai 2026",
  description: "MacBook Pro M3 SD card not showing? The Sonoma 14.0-14.3 reader bug, cards that vanish or copy slowly, and fixes to try first. WhatsApp if it’s hardware.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-sd-card-not-showing-dubai" />
      <View />
    </>
  );
}
