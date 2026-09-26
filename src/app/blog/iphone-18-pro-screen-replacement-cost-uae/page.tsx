import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhone18ProScreenCostUae";

export const metadata: Metadata = metaFromFields("/blog/iphone-18-pro-screen-replacement-cost-uae", {
  title: "iPhone 18 Pro Screen Replacement Cost in the UAE (2026)",
  description: "What Apple charges in the UAE to replace an iPhone 18 Pro or Pro Max screen, how it compares with other iPhones, and what changes an independent quote.",
  publishedTime: "2026-09-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-18-pro-screen-replacement-cost-uae" />
      <View />
    </>
  );
}
