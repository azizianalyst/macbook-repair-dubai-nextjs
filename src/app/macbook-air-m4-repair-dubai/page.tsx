import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM4Repair";

export const metadata: Metadata = metaFromFields("/macbook-air-m4-repair-dubai", {
  title: "MacBook Air M4 Repair Dubai 2025 — Screen, Battery & Logic Board",
  description: "MacBook Air M4 repair Dubai — screen, battery & logic board. Free diagnosis, same-day service, free pickup. Message us on WhatsApp for today's price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m4-repair-dubai" />
      <View />
    </>
  );
}
