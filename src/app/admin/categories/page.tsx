import type { Metadata } from "next";
import CategoriesAdmin from "@/components/blocks/CategoriesAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Categories",
  robots: { index: false, follow: false },
};

export default function CategoriesPage() {
  return <CategoriesAdmin />;
}
