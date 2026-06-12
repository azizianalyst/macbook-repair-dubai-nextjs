import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairBurDubai";

export const metadata: Metadata = metaForPath("/macbook-repair-bur-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-bur-dubai" />
      <View />
    </>
  );
}
