import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM4BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-m4-battery-replacement-dubai", {
  title: "MacBook Air M4 Battery Replacement Dubai — Free Diagnosis",
  description: "MacBook Air M4 battery replacement in Dubai: 52.6 Wh 13-inch or 66.5 Wh 15-inch cell, BMS re-pair and calibration included, 3-month warranty. WhatsApp us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m4-battery-replacement-dubai" />
      <View />
    </>
  );
}
