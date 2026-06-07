import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairRasAlKhaimah";

export const metadata: Metadata = metaForPath("/macbook-repair-ras-al-khaimah");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-ras-al-khaimah" />
      <View />
    </>
  );
}
