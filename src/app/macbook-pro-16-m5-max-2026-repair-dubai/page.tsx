import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookPro16M5Max2026Repair";

export const metadata: Metadata = metaForPath("/macbook-pro-16-m5-max-2026-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-16-m5-max-2026-repair-dubai" />
      <View />
    </>
  );
}
