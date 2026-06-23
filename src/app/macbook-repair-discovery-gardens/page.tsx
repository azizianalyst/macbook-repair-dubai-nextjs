import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDiscoveryGardens";

export const metadata: Metadata = metaForPath("/macbook-repair-discovery-gardens");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-discovery-gardens" />
      <View />
    </>
  );
}
