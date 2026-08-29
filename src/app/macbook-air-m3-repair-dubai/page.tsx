import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM3Repair";

export const metadata: Metadata = metaFromFields("/macbook-air-m3-repair-dubai", {
  title: "MacBook Air M3 Repair Dubai 2024 — Screen, Battery & Logic Board",
  description: "MacBook Air M3 repair Dubai — screen, battery & logic board. Free diagnosis, same-day service, free pickup. 21 years Apple experience. WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m3-repair-dubai" />
      <View />
    </>
  );
}
