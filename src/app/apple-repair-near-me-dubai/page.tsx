import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AppleRepairNearMe";

export const metadata: Metadata = metaForPath("/apple-repair-near-me-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/apple-repair-near-me-dubai" />
      <View />
    </>
  );
}
