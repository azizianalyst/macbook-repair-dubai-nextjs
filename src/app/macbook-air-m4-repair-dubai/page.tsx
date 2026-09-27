import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM4Repair";

export const metadata: Metadata = metaFromFields("/macbook-air-m4-repair-dubai", {
  title: "MacBook Air M4 Repair Dubai — Screen, Battery & Logic Board",
  description: "MacBook Air M4 repair in Dubai for screen, battery and logic board faults. Independent Media City workshop since 2004, free pickup. WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m4-repair-dubai" />
      <View />
    </>
  );
}
