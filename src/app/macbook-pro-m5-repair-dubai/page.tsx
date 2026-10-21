import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM5Repair";

export const metadata: Metadata = metaForPath("/macbook-pro-m5-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m5-repair-dubai" />
      <View />
    </>
  );
}
