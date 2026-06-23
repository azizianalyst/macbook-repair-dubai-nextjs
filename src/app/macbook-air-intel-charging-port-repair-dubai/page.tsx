import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelChargingPortRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-charging-port-repair-dubai", {
  title: "MacBook Air Intel USB-C Charging Port Repair Dubai - From AED 280",
  description: "MacBook Air Intel (2018-2020) USB-C charging port repair Dubai from AED 280. Thunderbolt 3 port corrosion, bent tab, debris. Same-day 1-2 hours. 3-month warranty. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-charging-port-repair-dubai" />
      <View />
    </>
  );
}
