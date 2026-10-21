import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogBestMacBookForStudents";

export const metadata: Metadata = metaForPath("/blog/best-macbook-for-students-dubai-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/best-macbook-for-students-dubai-2026" />
      <View />
    </>
  );
}
