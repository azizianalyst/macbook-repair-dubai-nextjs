import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookPro14M42024Repair";

export const metadata: Metadata = metaForPath("/macbook-pro-14-m4-2024-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-14-m4-2024-repair-dubai" />
      <View />
    </>
  );
}
