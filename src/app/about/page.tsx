import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/About";

export const metadata: Metadata = metaForPath("/about");

export default function Page() {
  return (
    <>
      <PageSchema path="/about" />
      <View />
    </>
  );
}
