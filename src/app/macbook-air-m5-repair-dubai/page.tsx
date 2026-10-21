import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM5Repair";

export const metadata: Metadata = metaFromFields("/macbook-air-m5-repair-dubai", {
  title: "MacBook Air M5 Repair Dubai — Screen, Battery & Logic Board",
  description: "MacBook Air M5 repair in Dubai: screen, battery and logic board work at Concord Tower, Media City. Free diagnosis, no fix no fee. WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m5-repair-dubai" />
      <View />
    </>
  );
}
