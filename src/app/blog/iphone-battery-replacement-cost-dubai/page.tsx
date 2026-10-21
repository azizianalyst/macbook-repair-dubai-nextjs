import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneBatteryReplacement";

export const metadata: Metadata = metaFromFields("/blog/iphone-battery-replacement-cost-dubai", {
  title: "iPhone Battery Replacement Cost Dubai 2026",
  description: "iPhone battery replacement in Dubai by model. Independent Apple specialist, genuine cells, 3-month warranty. Message us on WhatsApp for your exact price.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
