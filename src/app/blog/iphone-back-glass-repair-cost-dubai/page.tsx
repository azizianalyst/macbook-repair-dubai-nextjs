import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneBackGlassRepairCost";

export const metadata: Metadata = metaForPath("/blog/iphone-back-glass-repair-cost-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-back-glass-repair-cost-dubai" />
      <View />
    </>
  );
}
