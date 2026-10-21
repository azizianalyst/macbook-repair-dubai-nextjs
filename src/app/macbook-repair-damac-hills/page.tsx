import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDamacHills";

export const metadata: Metadata = metaForPath("/macbook-repair-damac-hills");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-damac-hills" />
      <View />
    </>
  );
}
