import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BestAppleRepair";

export const metadata: Metadata = metaForPath("/best-apple-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/best-apple-repair-dubai" />
      <View />
    </>
  );
}
