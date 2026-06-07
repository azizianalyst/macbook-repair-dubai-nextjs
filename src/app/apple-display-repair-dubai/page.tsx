import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AppleDisplayRepair";

export const metadata: Metadata = metaForPath("/apple-display-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/apple-display-repair-dubai" />
      <View />
    </>
  );
}
