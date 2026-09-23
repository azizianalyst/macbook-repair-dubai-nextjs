import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4WifiDropping";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-wifi-dropping-dubai", {
  title: "MacBook Pro M4 Wi-Fi Dropping Dubai 2026",
  description: "MacBook Pro M4 Wi-Fi dropping in Dubai? Disconnects after sleep, slow on 6GHz, or connection not restored after wake. Step-by-step fix guide for UAE networks.",
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
