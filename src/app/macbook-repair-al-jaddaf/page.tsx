import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairAlJaddaf";

export const metadata: Metadata = metaForPath("/macbook-repair-al-jaddaf");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-al-jaddaf" />
      <View />
    </>
  );
}
