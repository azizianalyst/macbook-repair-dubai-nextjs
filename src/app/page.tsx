import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Home";

export const metadata: Metadata = metaForPath("/");

export default function Page() {
  return (
    <>
      <PageSchema path="/" />
      <View />
    </>
  );
}
