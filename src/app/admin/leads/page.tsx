import type { Metadata } from "next";
import LeadsAdmin from "@/components/blocks/LeadsAdmin";

// Private owner tool — keep it out of search indexes.
export const metadata: Metadata = {
  title: "Leads admin",
  robots: { index: false, follow: false },
};

export default function LeadsAdminPage() {
  return <LeadsAdmin />;
}
