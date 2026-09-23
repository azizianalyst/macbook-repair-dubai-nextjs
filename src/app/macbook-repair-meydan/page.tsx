import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairMeydan";

export const metadata: Metadata = metaForPath("/macbook-repair-meydan");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-meydan" />
      <View />
    </>
  );
}
