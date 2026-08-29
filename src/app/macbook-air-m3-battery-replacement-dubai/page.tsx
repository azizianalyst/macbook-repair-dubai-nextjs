import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM3BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-m3-battery-replacement-dubai", {
  title: "MacBook Air M3 Battery Replacement Dubai — Same Day",
  description: "MacBook Air M3 battery replacement Dubai (13-inch and 15-inch). BMS re-pair included. Same-day service. Free diagnosis. Message us on WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m3-battery-replacement-dubai" />
      <View />
    </>
  );
}
