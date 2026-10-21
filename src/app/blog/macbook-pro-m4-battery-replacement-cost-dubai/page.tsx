import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4BatteryReplacement";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-battery-replacement-cost-dubai", {
  title: "MacBook Pro M4 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M4 battery replacement cost in Dubai 2026. When to replace, swollen battery warning signs, and what to expect after replacement.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
