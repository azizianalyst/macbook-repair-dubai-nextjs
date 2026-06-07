import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProM2Ultra2023Repair";

export const metadata: Metadata = metaForPath("/mac-pro-m2-ultra-2023-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-m2-ultra-2023-repair-dubai" />
      <View />
    </>
  );
}
