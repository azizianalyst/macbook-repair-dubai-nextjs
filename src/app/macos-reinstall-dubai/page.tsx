import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacOsReinstall";

export const metadata: Metadata = metaForPath("/macos-reinstall-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macos-reinstall-dubai" />
      <View />
    </>
  );
}
