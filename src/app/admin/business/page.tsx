import type { Metadata } from "next";
import BusinessAdmin from "@/components/blocks/BusinessAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Business info admin",
  robots: { index: false, follow: false },
};

export default function BusinessAdminPage() {
  return <BusinessAdmin />;
}
