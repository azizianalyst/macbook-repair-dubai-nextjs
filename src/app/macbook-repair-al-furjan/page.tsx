import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairAlFurjan";

export const metadata: Metadata = metaForPath("/macbook-repair-al-furjan");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-al-furjan" />
      <View />
    </>
  );
}
