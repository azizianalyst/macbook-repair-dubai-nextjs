import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookTouchBarRepair";

export const metadata: Metadata = metaForPath("/macbook-touch-bar-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-touch-bar-repair-dubai" />
      <View />
    </>
  );
}
