import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacOsReinstallDesktop";

export const metadata: Metadata = metaForPath("/mac-os-reinstall-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-os-reinstall-dubai" />
      <View />
    </>
  );
}
