import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3BatteryReplacement";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-battery-replacement-cost-dubai", {
  title: "MacBook Pro M3 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M3 battery replacement cost in Dubai (2026): when to replace, how to read battery health, and what drives the price. Free battery check.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
