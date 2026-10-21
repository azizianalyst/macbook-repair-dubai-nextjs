import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacRepairCost";

export const metadata: Metadata = metaForPath("/mac-repair-cost-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-repair-cost-dubai" />
      <View />
    </>
  );
}
