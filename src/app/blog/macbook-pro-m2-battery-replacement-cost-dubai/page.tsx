import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2BatteryReplacement";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-battery-replacement-cost-dubai", {
  title: "MacBook Pro M2 Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro M2 battery cost guide for Dubai: replace below 80% health or past 900 cycles, on the 13-inch, M2 Pro and M2 Max. WhatsApp us for a quote.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
