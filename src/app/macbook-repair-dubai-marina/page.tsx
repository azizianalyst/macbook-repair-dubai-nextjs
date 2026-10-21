import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDubaiMarina";

export const metadata: Metadata = metaForPath("/macbook-repair-dubai-marina");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-dubai-marina" />
      <View />
    </>
  );
}
