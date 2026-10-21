import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookCleaningMaintenance";

export const metadata: Metadata = metaForPath("/macbook-cleaning-maintenance-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-cleaning-maintenance-dubai" />
      <View />
    </>
  );
}
