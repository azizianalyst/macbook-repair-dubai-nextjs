import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookAir15M32024Repair";

export const metadata: Metadata = metaForPath("/macbook-air-15-m3-2024-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-15-m3-2024-repair-dubai" />
      <View />
    </>
  );
}
