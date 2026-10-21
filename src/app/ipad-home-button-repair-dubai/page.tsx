import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadHomeButtonRepair";

export const metadata: Metadata = metaForPath("/ipad-home-button-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-home-button-repair-dubai" />
      <View />
    </>
  );
}
