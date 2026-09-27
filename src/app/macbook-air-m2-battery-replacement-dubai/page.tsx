import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM2BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-m2-battery-replacement-dubai", {
  title: "MacBook Air M2 Battery Replacement Dubai — Request a Quote",
  description: "MacBook Air M2 battery replacement in Dubai for 13-inch and 15-inch models, BMS re-pair included. Free diagnosis, 3-month warranty. WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m2-battery-replacement-dubai" />
      <View />
    </>
  );
}
