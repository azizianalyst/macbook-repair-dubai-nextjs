import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM5BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m5-battery-replacement-dubai", {
  title: "MacBook Pro M5 Battery Replacement Dubai — From AED 600",
  description: "MacBook Pro M5 Pro/Max battery replacement Dubai from AED 600. BMS re-pair included. OLED display model (2025). Check Apple warranty first. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m5-battery-replacement-dubai" />
      <View />
    </>
  );
}
