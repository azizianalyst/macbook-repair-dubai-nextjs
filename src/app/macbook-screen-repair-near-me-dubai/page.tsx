import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookScreenRepairNearMeDubai";

export const metadata: Metadata = metaForPath("/macbook-screen-repair-near-me-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-screen-repair-near-me-dubai" />
      <View />
    </>
  );
}
