import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import BlogCategory from "@/views/BlogCategory";

export const metadata: Metadata = metaForPath("/blog/apple-news");
export default function Page() {
  return <BlogCategory slug="apple-news" />;
}
