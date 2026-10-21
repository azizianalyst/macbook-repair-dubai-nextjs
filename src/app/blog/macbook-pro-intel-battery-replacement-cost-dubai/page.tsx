import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelBatteryReplacement";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-intel-battery-replacement-cost-dubai", {
  title: "MacBook Pro Intel Battery Replacement Cost Dubai 2026",
  description: "MacBook Pro Intel battery replacement in Dubai 2026 for 2016-2020 models. Same-day service, swollen battery urgent care. WhatsApp us for a quote.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
