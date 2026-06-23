import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-repair-dubai", {
  title: "MacBook Air Intel Repair Dubai — Screen, Battery & Board",
  description: "MacBook Air Intel repair Dubai. 2017 to 2020 models (A1466, A1932, A2179). Screen from AED 500, battery from AED 450. Free diagnosis, same-day service.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-repair-dubai" />
      <View />
    </>
  );
}
