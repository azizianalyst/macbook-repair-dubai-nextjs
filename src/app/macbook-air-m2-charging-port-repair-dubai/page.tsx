import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM2ChargingPortRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m2-charging-port-repair-dubai", {
  title: "MacBook Air M2 Charging Port Repair Dubai - MagSafe 3 from AED 220",
  description: "MacBook Air M2, M3, and M4 charging port repair Dubai. MagSafe 3 board replacement from AED 220. USB-C port also repairable. Same-day 1-2 hours. 3-month warranty. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m2-charging-port-repair-dubai" />
      <View />
    </>
  );
}
