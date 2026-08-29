import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirChargingPortRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-charging-port-repair-dubai", {
  title: "MacBook Air Charging Port Repair Dubai - MagSafe 3 & USB-C",
  description: "MacBook Air charging port repair Dubai - MagSafe 3 board (M2/M3/M4) and USB-C port (Intel/M1). Same-day 1-2 hours, 3-month warranty. WhatsApp us for your price. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-charging-port-repair-dubai" />
      <View />
    </>
  );
}
