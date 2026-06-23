import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairBarshaHeights";

export const metadata: Metadata = metaForPath("/macbook-repair-barsha-heights");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-barsha-heights" />
      <View />
    </>
  );
}
