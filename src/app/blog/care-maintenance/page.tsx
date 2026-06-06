import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import BlogCategory from "@/views/BlogCategory";

export const metadata: Metadata = metaForPath("/blog/care-maintenance");
export default function Page() {
  return <BlogCategory slug="care-maintenance" />;
}
