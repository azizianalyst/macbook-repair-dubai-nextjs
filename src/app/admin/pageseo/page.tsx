import type { Metadata } from "next";
import PageSeoAdmin from "@/components/blocks/PageSeoAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Page SEO admin",
  robots: { index: false, follow: false },
};

export default function PageSeoAdminPage() {
  return <PageSeoAdmin />;
}
