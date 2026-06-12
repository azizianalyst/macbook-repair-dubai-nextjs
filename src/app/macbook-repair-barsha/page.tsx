import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairBarsha";

export const metadata: Metadata = metaForPath("/macbook-repair-barsha");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-barsha" />
      <View />
    </>
  );
}
