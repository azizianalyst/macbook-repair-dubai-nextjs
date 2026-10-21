import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone13Repair";

export const metadata: Metadata = metaForPath("/iphone-13-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-13-repair-dubai" />
      <View />
    </>
  );
}
