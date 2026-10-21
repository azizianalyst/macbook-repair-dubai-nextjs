import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneScreenRepairCostDubai";

export const metadata: Metadata = metaForPath("/iphone-screen-repair-cost-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
