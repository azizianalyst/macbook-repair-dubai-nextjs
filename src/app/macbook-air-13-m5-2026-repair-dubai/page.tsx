import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookAir13M52026Repair";

export const metadata: Metadata = metaForPath("/macbook-air-13-m5-2026-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-13-m5-2026-repair-dubai" />
      <View />
    </>
  );
}
