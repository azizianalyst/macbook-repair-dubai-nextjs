import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDubaiInvestmentPark";

export const metadata: Metadata = metaForPath("/macbook-repair-dubai-investment-park");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-dubai-investment-park" />
      <View />
    </>
  );
}
