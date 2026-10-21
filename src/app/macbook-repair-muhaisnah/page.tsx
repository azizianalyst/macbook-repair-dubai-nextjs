import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairMuhaisnah";

export const metadata: Metadata = metaForPath("/macbook-repair-muhaisnah");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-muhaisnah" />
      <View />
    </>
  );
}
