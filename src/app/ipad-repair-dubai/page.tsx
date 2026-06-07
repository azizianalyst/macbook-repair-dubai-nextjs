import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadRepairHub";

export const metadata: Metadata = metaForPath("/ipad-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-repair-dubai" />
      <View />
    </>
  );
}
