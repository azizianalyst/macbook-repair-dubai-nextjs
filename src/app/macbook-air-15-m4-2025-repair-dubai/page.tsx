import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookAir15M42025Repair";

export const metadata: Metadata = metaForPath("/macbook-air-15-m4-2025-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-15-m4-2025-repair-dubai" />
      <View />
    </>
  );
}
