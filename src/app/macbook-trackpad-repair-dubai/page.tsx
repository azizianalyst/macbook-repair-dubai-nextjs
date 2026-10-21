import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookTrackpadRepair";

export const metadata: Metadata = metaForPath("/macbook-trackpad-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-trackpad-repair-dubai" />
      <View />
    </>
  );
}
