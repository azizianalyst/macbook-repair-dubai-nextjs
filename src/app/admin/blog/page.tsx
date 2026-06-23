import type { Metadata } from "next";
import BlogAdmin from "@/components/blocks/BlogAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Blog admin",
  robots: { index: false, follow: false },
};

export default function BlogAdminPage() {
  return <BlogAdmin />;
}
