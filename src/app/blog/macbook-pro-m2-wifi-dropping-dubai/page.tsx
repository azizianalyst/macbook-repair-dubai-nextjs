import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2WifiDropping";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-wifi-dropping-dubai", {
  title: "MacBook Pro M2 Wi-Fi Dropping Dubai 2026: Ventura Fix Guide",
  description: "MacBook Pro M2 Wi-Fi dropping or slow in Dubai? M2 uses Wi-Fi 6 (no 6E). Ventura 13.x had known Wi-Fi stability bugs fixed in 13.3. Step-by-step fix guide.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-wifi-dropping-dubai" />
      <View />
    </>
  );
}
