import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM42024Repair";

export const metadata: Metadata = metaForPath("/mac-mini-m4-2024-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m4-2024-repair-dubai" />
      <View />
    </>
  );
}
