import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacRamUpgrade";

export const metadata: Metadata = metaForPath("/imac-ram-upgrade-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-ram-upgrade-dubai" />
      <View />
    </>
  );
}
