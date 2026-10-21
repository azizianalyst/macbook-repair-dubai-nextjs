import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairZabeel";

export const metadata: Metadata = metaForPath("/macbook-repair-zabeel");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-zabeel" />
      <View />
    </>
  );
}
