import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneSoftwareFix";

export const metadata: Metadata = metaForPath("/iphone-software-fix-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-software-fix-dubai" />
      <View />
    </>
  );
}
