import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM5Repair";

export const metadata: Metadata = metaFromFields("/macbook-air-m5-repair-dubai", {
  title: "MacBook Air M5 Repair Dubai 2026 — Screen, Battery & Logic Board",
  description: "MacBook Air M5 repair Dubai — screen, battery & logic board. Free diagnosis, same-day service, free pickup. WhatsApp us for today's price. 21 years' experience.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m5-repair-dubai" />
      <View />
    </>
  );
}
