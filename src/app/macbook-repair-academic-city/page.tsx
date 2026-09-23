import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairAcademicCity";

export const metadata: Metadata = metaForPath("/macbook-repair-academic-city");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-academic-city" />
      <View />
    </>
  );
}
