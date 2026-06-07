import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairBusinessBay";

export const metadata: Metadata = metaForPath("/macbook-repair-business-bay");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-business-bay" />
      <View />
    </>
  );
}
