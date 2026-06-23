import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProNoDisplayService";

export const metadata: Metadata = metaForPath("/mac-pro-no-display-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-no-display-dubai" />
      <View />
    </>
  );
}
