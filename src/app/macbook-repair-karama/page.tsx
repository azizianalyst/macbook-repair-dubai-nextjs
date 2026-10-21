import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairKarama";

export const metadata: Metadata = metaForPath("/macbook-repair-karama");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-karama" />
      <View />
    </>
  );
}
