import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadSmartConnectorRepair";

export const metadata: Metadata = metaForPath("/ipad-smart-connector-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-smart-connector-repair-dubai" />
      <View />
    </>
  );
}
