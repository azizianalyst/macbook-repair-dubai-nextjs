import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM62026Repair";

export const metadata: Metadata = metaForPath("/mac-mini-m6-2026-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m6-2026-repair-dubai" />
      <View />
    </>
  );
}
