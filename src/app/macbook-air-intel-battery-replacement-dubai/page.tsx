import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelBatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-battery-replacement-dubai", {
  title: "MacBook Air Intel Battery Replacement Dubai — Same Day",
  description: "MacBook Air Intel battery replacement in Dubai: new cell fitted same day, usually in 2 hours. No BMS re-pair needed. Free diagnosis, quote on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-battery-replacement-dubai" />
      <View />
    </>
  );
}
