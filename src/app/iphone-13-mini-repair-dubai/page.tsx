import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone13MiniRepair";

export const metadata: Metadata = metaForPath("/iphone-13-mini-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-13-mini-repair-dubai" />
      <View />
    </>
  );
}
