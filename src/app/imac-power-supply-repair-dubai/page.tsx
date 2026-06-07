import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacPowerSupplyRepair";

export const metadata: Metadata = metaForPath("/imac-power-supply-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-power-supply-repair-dubai" />
      <View />
    </>
  );
}
