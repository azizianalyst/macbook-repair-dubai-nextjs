import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM3Repair";

export const metadata: Metadata = metaForPath("/macbook-pro-m3-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m3-repair-dubai" />
      <View />
    </>
  );
}
