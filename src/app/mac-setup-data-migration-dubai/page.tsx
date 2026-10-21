import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacSetupConfiguration";

export const metadata: Metadata = metaForPath("/mac-setup-data-migration-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-setup-data-migration-dubai" />
      <View />
    </>
  );
}
