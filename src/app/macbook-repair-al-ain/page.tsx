import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairAlAin";

export const metadata: Metadata = metaForPath("/macbook-repair-al-ain");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-al-ain" />
      <View />
    </>
  );
}
