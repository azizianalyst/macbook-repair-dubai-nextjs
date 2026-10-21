import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDeira";

export const metadata: Metadata = metaForPath("/macbook-repair-deira");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-deira" />
      <View />
    </>
  );
}
