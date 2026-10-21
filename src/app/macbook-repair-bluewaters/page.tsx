import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairBluewaters";

export const metadata: Metadata = metaForPath("/macbook-repair-bluewaters");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-bluewaters" />
      <View />
    </>
  );
}
