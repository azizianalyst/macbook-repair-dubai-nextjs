import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1BatteryReplacement";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-battery-replacement-cost-dubai", {
  title: "MacBook Pro M1 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M1 battery replacement in Dubai for M1 13-inch, M1 Pro 14-inch and M1 Max 16-inch. Free diagnosis, 3-month warranty. WhatsApp for a quote.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
