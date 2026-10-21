import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM5BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m5-battery-replacement-dubai", {
  title: "MacBook Pro M5 Battery Replacement Dubai — Free Diagnosis",
  description: "MacBook Pro M5, M5 Pro and M5 Max battery replacement in Dubai. BMS re-pair included. Check Apple warranty first. Free diagnosis, quote on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m5-battery-replacement-dubai" />
      <View />
    </>
  );
}
