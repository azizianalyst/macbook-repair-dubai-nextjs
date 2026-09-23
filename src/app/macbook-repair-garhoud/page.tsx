import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairGarhoud";

export const metadata: Metadata = metaForPath("/macbook-repair-garhoud");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-garhoud" />
      <View />
    </>
  );
}
