import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookSafeModeRepair";

export const metadata: Metadata = metaForPath("/macbook-safe-mode-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-safe-mode-repair-dubai" />
      <View />
    </>
  );
}
