import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProScreenCost";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-screen-replacement-cost-dubai", {
  title: "MacBook Pro Screen Replacement Cost Dubai: 2026 Price Guide",
  description: "MacBook Pro screen replacement cost in Dubai explained by model, M1 to M5 and Intel, vs Apple Store. Same-day service. Message us on WhatsApp for your exact quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-screen-replacement-cost-dubai" />
      <View />
    </>
  );
}
