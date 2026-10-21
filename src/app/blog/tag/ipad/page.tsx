import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import BlogTag from "@/views/BlogTag";

export const metadata: Metadata = {
  ...metaForPath("/blog/tag/ipad"),
  robots: { index: false, follow: true },
};
export default function Page() {
  return <BlogTag slug="ipad" />;
}
