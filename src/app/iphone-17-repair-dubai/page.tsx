import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone17Repair";

export const metadata: Metadata = metaForPath("/iphone-17-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-17-repair-dubai" />
      <View />
    </>
  );
}
