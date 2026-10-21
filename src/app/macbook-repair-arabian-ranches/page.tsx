import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairArabianRanches";

export const metadata: Metadata = metaForPath("/macbook-repair-arabian-ranches");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-arabian-ranches" />
      <View />
    </>
  );
}
