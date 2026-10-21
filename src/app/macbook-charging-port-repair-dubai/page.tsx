import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookChargingPortRepair";

export const metadata: Metadata = metaForPath("/macbook-charging-port-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-charging-port-repair-dubai" />
      <View />
    </>
  );
}
