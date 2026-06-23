import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookColorDistortion";

export const metadata: Metadata = metaForPath("/what-causes-color-distortion-on-macbook-screens");

export default function Page() {
  return (
    <>
      <PageSchema path="/what-causes-color-distortion-on-macbook-screens" />
      <View />
    </>
  );
}
