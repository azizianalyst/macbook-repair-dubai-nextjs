import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneScreenRepairCost";

export const metadata: Metadata = metaForPath("/blog/iphone-screen-repair-cost-dubai-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-screen-repair-cost-dubai-2026" />
      <View />
    </>
  );
}
