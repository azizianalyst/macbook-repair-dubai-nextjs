import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5WifiSlow";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-wifi-slow-fix-dubai", {
  title: "MacBook Pro M5 Wi-Fi Slow Fix Dubai 2026",
  description: "MacBook Pro M5 Wi-Fi slow in Dubai? MCS/NSS 0 kernel error, slow speeds on 6GHz, drops after sleep. Step-by-step Wi-Fi fix guide for M5 in UAE.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-wifi-slow-fix-dubai" />
      <View />
    </>
  );
}
