import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioNotTurningOnService";

export const metadata: Metadata = metaForPath("/mac-studio-not-turning-on-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-not-turning-on-dubai" />
      <View />
    </>
  );
}
