import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4WifiDropping";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-wifi-dropping-dubai", {
  title: "MacBook Pro M4 Wi-Fi Dropping Dubai 2026",
  description: "MacBook Pro M4 Wi-Fi dropping in Dubai? Fixes for disconnects after sleep and 6GHz band drops, and when antenna repair is needed. WhatsApp us for a quote.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-wifi-dropping-dubai" />
      <View />
    </>
  );
}
