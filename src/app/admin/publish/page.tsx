import type { Metadata } from "next";
import PublishAdmin from "@/components/blocks/PublishAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Publish",
  robots: { index: false, follow: false },
};

export default function PublishPage() {
  return <PublishAdmin />;
}
