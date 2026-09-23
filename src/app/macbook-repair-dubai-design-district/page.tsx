import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDubaiDesignDistrict";

export const metadata: Metadata = metaForPath("/macbook-repair-dubai-design-district");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-dubai-design-district" />
      <View />
    </>
  );
}
