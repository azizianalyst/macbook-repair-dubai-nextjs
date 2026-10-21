import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookCameraRepair";

export const metadata: Metadata = metaForPath("/macbook-camera-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-camera-repair-dubai" />
      <View />
    </>
  );
}
