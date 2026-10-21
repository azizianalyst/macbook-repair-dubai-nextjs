import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairJumeirah";

export const metadata: Metadata = metaForPath("/macbook-repair-jumeirah");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-jumeirah" />
      <View />
    </>
  );
}
