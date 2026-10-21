import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadMini6Repair";

export const metadata: Metadata = metaForPath("/ipad-mini-6-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-mini-6-repair-dubai" />
      <View />
    </>
  );
}
