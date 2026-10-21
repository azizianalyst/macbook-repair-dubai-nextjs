import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairOudMetha";

export const metadata: Metadata = metaForPath("/macbook-repair-oud-metha");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-oud-metha" />
      <View />
    </>
  );
}
