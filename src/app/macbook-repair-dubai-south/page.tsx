import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDubaiSouth";

export const metadata: Metadata = metaForPath("/macbook-repair-dubai-south");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-dubai-south" />
      <View />
    </>
  );
}
