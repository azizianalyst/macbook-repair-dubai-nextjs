import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import BlogCategory from "@/views/BlogCategory";

export const metadata: Metadata = metaForPath("/blog/sell-trade-in");
export default function Page() {
  return <BlogCategory slug="sell-trade-in" />;
}
