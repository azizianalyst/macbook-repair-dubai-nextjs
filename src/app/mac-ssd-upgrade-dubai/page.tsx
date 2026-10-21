import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacSsdUpgrade";

export const metadata: Metadata = metaForPath("/mac-ssd-upgrade-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
