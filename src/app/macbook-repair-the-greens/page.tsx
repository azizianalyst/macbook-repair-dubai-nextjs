import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairTheGreens";

export const metadata: Metadata = metaForPath("/macbook-repair-the-greens");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-the-greens" />
      <View />
    </>
  );
}
