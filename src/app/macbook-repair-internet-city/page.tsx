import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairInternetCity";

export const metadata: Metadata = metaForPath("/macbook-repair-internet-city");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-internet-city" />
      <View />
    </>
  );
}
