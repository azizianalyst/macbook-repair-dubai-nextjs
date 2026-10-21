import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioNoDisplayService";

export const metadata: Metadata = metaForPath("/mac-studio-no-display-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-no-display-dubai" />
      <View />
    </>
  );
}
