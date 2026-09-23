import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairFestivalCity";

export const metadata: Metadata = metaForPath("/macbook-repair-festival-city");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-festival-city" />
      <View />
    </>
  );
}
