import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairNearMeDubai";

export const metadata: Metadata = metaForPath("/macbook-repair-near-me-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-near-me-dubai" />
      <View />
    </>
  );
}
