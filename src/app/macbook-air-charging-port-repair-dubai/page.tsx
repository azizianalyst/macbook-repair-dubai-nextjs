import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirChargingPortRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-charging-port-repair-dubai", {
  title: "MacBook Air Charging Port Repair Dubai - MagSafe 3 & USB-C",
  description: "MacBook Air charging port repair in Dubai: MagSafe 3 board on M2-M4, USB-C port on Intel and M1. Same-day, 1-2 hours. Free diagnosis - call us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-charging-port-repair-dubai" />
      <View />
    </>
  );
}
