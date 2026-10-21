import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookTouchIDRepair";

export const metadata: Metadata = metaForPath("/macbook-touch-id-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-touch-id-repair-dubai" />
      <View />
    </>
  );
}
