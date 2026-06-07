import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniRamUpgrade";

export const metadata: Metadata = metaForPath("/mac-mini-ram-upgrade-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-ram-upgrade-dubai" />
      <View />
    </>
  );
}
