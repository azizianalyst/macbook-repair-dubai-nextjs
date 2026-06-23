import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairEmiratesLiving";

export const metadata: Metadata = metaForPath("/macbook-repair-emirates-living");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-emirates-living" />
      <View />
    </>
  );
}
