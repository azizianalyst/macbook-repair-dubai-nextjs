import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairInternationalCity";

export const metadata: Metadata = metaForPath("/macbook-repair-international-city");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-international-city" />
      <View />
    </>
  );
}
