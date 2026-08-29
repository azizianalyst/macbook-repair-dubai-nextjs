import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM1BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-m1-battery-replacement-dubai", {
  title: "MacBook Air M1 Battery Replacement Dubai — Request a Quote",
  description: "MacBook Air M1 battery replacement Dubai. 49.9 Wh cell, BMS re-pair included, same-day 2-hour service. Free diagnosis. Message us on WhatsApp for pricing.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m1-battery-replacement-dubai" />
      <View />
    </>
  );
}
