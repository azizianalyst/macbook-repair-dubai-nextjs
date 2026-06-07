import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Contact";

export const metadata: Metadata = metaForPath("/contact");

export default function Page() {
  return (
    <>
      <PageSchema path="/contact" />
      <View />
    </>
  );
}
