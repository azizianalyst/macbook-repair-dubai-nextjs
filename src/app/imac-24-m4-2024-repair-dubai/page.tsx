import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Imac24M42024Repair";

export const metadata: Metadata = metaForPath("/imac-24-m4-2024-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-24-m4-2024-repair-dubai" />
      <View />
    </>
  );
}
