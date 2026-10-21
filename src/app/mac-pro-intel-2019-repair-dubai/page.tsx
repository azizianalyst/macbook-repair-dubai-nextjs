import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProIntel2019Repair";

export const metadata: Metadata = metaForPath("/mac-pro-intel-2019-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-intel-2019-repair-dubai" />
      <View />
    </>
  );
}
