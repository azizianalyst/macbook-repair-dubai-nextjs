import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProNotTurningOnService";

export const metadata: Metadata = metaForPath("/mac-pro-not-turning-on-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-not-turning-on-dubai" />
      <View />
    </>
  );
}
