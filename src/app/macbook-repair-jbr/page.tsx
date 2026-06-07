import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairJBR";

export const metadata: Metadata = metaForPath("/macbook-repair-jbr");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-jbr" />
      <View />
    </>
  );
}
