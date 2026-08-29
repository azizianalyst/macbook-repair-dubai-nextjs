import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM5BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m5-battery-replacement-dubai", {
  title: "MacBook Pro M5 Battery Replacement Dubai — Free Diagnosis",
  description: "MacBook Pro M5 Pro/Max battery replacement Dubai. BMS re-pair included. OLED display model (2025). Check Apple warranty first. Free diagnosis. Message us on WhatsApp for a price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m5-battery-replacement-dubai" />
      <View />
    </>
  );
}
