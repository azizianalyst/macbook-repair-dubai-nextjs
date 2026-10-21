import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogTransparentRepairPricing";

export const metadata: Metadata = metaForPath("/blog/transparent-repair-pricing-explained");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/transparent-repair-pricing-explained" />
      <View />
    </>
  );
}
