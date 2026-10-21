import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairHub";

export const metadata: Metadata = metaForPath("/macbook-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-dubai" />
      <View />
    </>
  );
}
