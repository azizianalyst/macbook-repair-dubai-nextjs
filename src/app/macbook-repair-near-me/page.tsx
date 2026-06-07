import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairNearMe";

export const metadata: Metadata = metaForPath("/macbook-repair-near-me");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-near-me" />
      <View />
    </>
  );
}
