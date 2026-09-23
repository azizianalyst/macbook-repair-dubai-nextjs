import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3WifiDropping";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-wifi-dropping-dubai", {
  title: "MacBook Pro M3 Wi-Fi Dropping Dubai 2026: 6GHz Fix Guide",
  description: "MacBook Pro M3 Wi-Fi dropping in Dubai? 6GHz band disconnects, slow speeds, or not reconnecting after sleep. Sonoma Wi-Fi fix and UAE router settings.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-wifi-dropping-dubai" />
      <View />
    </>
  );
}
