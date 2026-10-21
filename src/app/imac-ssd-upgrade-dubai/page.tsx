import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacSsdUpgrade";

export const metadata: Metadata = metaForPath("/imac-ssd-upgrade-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
