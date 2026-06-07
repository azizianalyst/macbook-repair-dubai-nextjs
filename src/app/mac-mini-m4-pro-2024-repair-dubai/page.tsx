import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM4Pro2024Repair";

export const metadata: Metadata = metaForPath("/mac-mini-m4-pro-2024-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m4-pro-2024-repair-dubai" />
      <View />
    </>
  );
}
