import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadPowerButtonRepair";

export const metadata: Metadata = metaForPath("/ipad-power-button-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-power-button-repair-dubai" />
      <View />
    </>
  );
}
