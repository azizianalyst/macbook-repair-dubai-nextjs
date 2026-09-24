import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairJumeirahGolfEstates";

export const metadata: Metadata = metaForPath("/macbook-repair-jumeirah-golf-estates");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-jumeirah-golf-estates" />
      <View />
    </>
  );
}
