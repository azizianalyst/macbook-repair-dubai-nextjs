import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneBackGlassRepair";

export const metadata: Metadata = metaForPath("/iphone-back-glass-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-back-glass-repair-dubai" />
      <View />
    </>
  );
}
