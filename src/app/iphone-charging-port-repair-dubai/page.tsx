import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneChargingPortRepair";

export const metadata: Metadata = metaForPath("/iphone-charging-port-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-charging-port-repair-dubai" />
      <View />
    </>
  );
}
