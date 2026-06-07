import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookBackToSchool";

export const metadata: Metadata = metaForPath("/blog/macbook-back-to-school-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-back-to-school-dubai" />
      <View />
    </>
  );
}
