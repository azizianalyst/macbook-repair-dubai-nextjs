import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacOsReinstall";

export const metadata: Metadata = metaForPath("/imac-os-reinstall-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-os-reinstall-dubai" />
      <View />
    </>
  );
}
