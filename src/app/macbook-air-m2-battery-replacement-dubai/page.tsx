import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM2BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-m2-battery-replacement-dubai", {
  title: "MacBook Air M2 Battery Replacement Dubai — Request a Quote",
  description: "MacBook Air M2 battery replacement Dubai (13-inch & 15-inch), BMS re-pair included. Same-day service. Free diagnosis. WhatsApp us for today's price. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m2-battery-replacement-dubai" />
      <View />
    </>
  );
}
