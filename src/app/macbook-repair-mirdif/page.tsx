import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairMirdif";

export const metadata: Metadata = metaForPath("/macbook-repair-mirdif");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-mirdif" />
      <View />
    </>
  );
}
