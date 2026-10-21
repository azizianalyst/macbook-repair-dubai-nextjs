import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacRepairCost";

export const metadata: Metadata = metaForPath("/imac-repair-cost-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-repair-cost-dubai" />
      <View />
    </>
  );
}
