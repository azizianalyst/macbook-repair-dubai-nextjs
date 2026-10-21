import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM22023Repair";

export const metadata: Metadata = metaForPath("/mac-mini-m2-2023-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m2-2023-repair-dubai" />
      <View />
    </>
  );
}
