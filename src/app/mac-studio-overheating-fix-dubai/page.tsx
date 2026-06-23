import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioOverheatingFix";

export const metadata: Metadata = metaForPath("/mac-studio-overheating-fix-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-overheating-fix-dubai" />
      <View />
    </>
  );
}
