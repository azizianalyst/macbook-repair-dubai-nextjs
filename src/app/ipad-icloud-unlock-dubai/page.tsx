import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadIcloudUnlock";

export const metadata: Metadata = metaForPath("/ipad-icloud-unlock-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-icloud-unlock-dubai" />
      <View />
    </>
  );
}
