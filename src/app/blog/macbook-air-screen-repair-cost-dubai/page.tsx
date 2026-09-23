import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-screen-repair-cost-dubai", {
  title: "MacBook Air Screen Repair Cost Dubai 2026: Prices by Model",
  description: "MacBook Air screen repair cost in Dubai, broken down by M1, M2 and M3 model. Free diagnosis, same-day repair. WhatsApp us for your exact price.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
