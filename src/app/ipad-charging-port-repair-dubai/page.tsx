import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadChargingPortRepair";

export const metadata: Metadata = metaForPath("/ipad-charging-port-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-charging-port-repair-dubai" />
      <View />
    </>
  );
}
