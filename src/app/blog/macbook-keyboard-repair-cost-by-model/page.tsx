import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookKeyboardRepairCost";

export const metadata: Metadata = metaForPath("/blog/macbook-keyboard-repair-cost-by-model");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-keyboard-repair-cost-by-model" />
      <View />
    </>
  );
}
