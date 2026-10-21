import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDubaiCreekHarbour";

export const metadata: Metadata = metaForPath("/macbook-repair-dubai-creek-harbour");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-dubai-creek-harbour" />
      <View />
    </>
  );
}
