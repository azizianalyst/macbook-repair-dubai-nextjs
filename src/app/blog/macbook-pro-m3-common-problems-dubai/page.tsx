import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-common-problems-dubai", {
  title: "MacBook Pro M3 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M3 common problems in Dubai: Wi-Fi 6E drops, flicker at low brightness, MagSafe charging faults and M3 Pro throttling. WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-common-problems-dubai" />
      <View />
    </>
  );
}
