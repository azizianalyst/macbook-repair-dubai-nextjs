import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookKeyboardRepair";

export const metadata: Metadata = metaForPath("/macbook-keyboard-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-keyboard-repair-dubai" />
      <View />
    </>
  );
}
