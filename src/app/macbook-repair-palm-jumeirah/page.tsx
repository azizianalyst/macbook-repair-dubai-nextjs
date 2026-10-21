import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairPalmJumeirah";

export const metadata: Metadata = metaForPath("/macbook-repair-palm-jumeirah");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-palm-jumeirah" />
      <View />
    </>
  );
}
