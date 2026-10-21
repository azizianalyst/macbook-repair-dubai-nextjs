import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelChargingPortRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-charging-port-repair-dubai", {
  title: "MacBook Air Intel USB-C Charging Port Repair Dubai",
  description: "MacBook Air Intel (2018-2020) USB-C port repair in Dubai: corrosion, bent tabs, debris. Same-day, 1-2 hours. Written warranty - get a free quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-charging-port-repair-dubai" />
      <View />
    </>
  );
}
