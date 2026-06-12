import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadScreenRepairCost";

export const metadata: Metadata = metaForPath("/blog/ipad-screen-repair-cost-dubai-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-screen-repair-cost-dubai-2026" />
      <View />
    </>
  );
}
