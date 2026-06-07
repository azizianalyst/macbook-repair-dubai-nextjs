import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookPro14M52025Repair";

export const metadata: Metadata = metaForPath("/macbook-pro-14-m5-2025-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-14-m5-2025-repair-dubai" />
      <View />
    </>
  );
}
