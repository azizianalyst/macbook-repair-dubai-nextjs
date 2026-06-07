import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDIFC";

export const metadata: Metadata = metaForPath("/macbook-repair-difc");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-difc" />
      <View />
    </>
  );
}
