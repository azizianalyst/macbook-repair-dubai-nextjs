import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairProductionCity";

export const metadata: Metadata = metaForPath("/macbook-repair-production-city");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-production-city" />
      <View />
    </>
  );
}
