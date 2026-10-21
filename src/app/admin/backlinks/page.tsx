import type { Metadata } from "next";
import BacklinksAdmin from "@/components/blocks/BacklinksAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Backlinks admin",
  robots: { index: false, follow: false },
};

export default function BacklinksAdminPage() {
  return <BacklinksAdmin />;
}
