import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM12020Repair";

export const metadata: Metadata = metaForPath("/mac-mini-m1-2020-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m1-2020-repair-dubai" />
      <View />
    </>
  );
}
