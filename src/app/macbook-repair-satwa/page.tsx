import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairSatwa";

export const metadata: Metadata = metaForPath("/macbook-repair-satwa");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-satwa" />
      <View />
    </>
  );
}
