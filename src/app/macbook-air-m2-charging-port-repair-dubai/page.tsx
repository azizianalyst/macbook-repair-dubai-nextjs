import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM2ChargingPortRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m2-charging-port-repair-dubai", {
  title: "MacBook Air M2 Charging Port Repair Dubai - MagSafe 3 Fix",
  description: "MacBook Air M2, M3, and M4 charging port repair Dubai. MagSafe 3 board replacement and USB-C port fix. Same-day 1-2 hours, 3-month warranty. WhatsApp us for your price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m2-charging-port-repair-dubai" />
      <View />
    </>
  );
}
