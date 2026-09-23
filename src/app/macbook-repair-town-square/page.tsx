import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairTownSquare";

export const metadata: Metadata = metaForPath("/macbook-repair-town-square");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-town-square" />
      <View />
    </>
  );
}
