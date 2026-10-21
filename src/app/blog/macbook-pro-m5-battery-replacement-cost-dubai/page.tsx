import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5BatteryReplacement";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-battery-replacement-cost-dubai", {
  title: "MacBook Pro M5 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M5 battery replacement in Dubai (2026), 14 and 16-inch: when to replace, the warning signs, and what affects the cost. Free battery check.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
