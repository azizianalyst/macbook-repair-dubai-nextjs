import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhone15Vs17RepairCost";

export const metadata: Metadata = metaForPath("/blog/iphone-15-vs-iphone-17-repair-cost-comparison");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-15-vs-iphone-17-repair-cost-comparison" />
      <View />
    </>
  );
}
