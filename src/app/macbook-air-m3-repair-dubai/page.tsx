import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM3Repair";

export const metadata: Metadata = metaFromFields("/macbook-air-m3-repair-dubai", {
  title: "MacBook Air M3 Repair Dubai — Screen, Battery & Logic Board",
  description: "MacBook Air M3 repair in Dubai: screen, battery and logic board repairs at our Media City workshop. Free diagnosis, free pickup. Message us on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m3-repair-dubai" />
      <View />
    </>
  );
}
