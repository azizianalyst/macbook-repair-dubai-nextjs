import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2ScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-screen-repair-cost-dubai", {
  title: "MacBook Pro M2 Screen Repair Cost Dubai 2026",
  description: "MacBook Pro M2 screen repair in Dubai 2026. M2 13-inch uses IPS LCD; M2 Pro/Max 14/16-inch mini-LED. Same-day service, all models. Message us on WhatsApp for pricing.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
