import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BestMacBookRepairDubai";

export const metadata: Metadata = metaForPath("/best-macbook-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/best-macbook-repair-dubai" />
      <View />
    </>
  );
}
