import type { Metadata } from "next";
import GbpPostsAdmin from "@/components/blocks/GbpPostsAdmin";

export const metadata: Metadata = {
  title: "GBP Posts",
  robots: { index: false, follow: false },
};

export default function GbpPostsPage() {
  return <GbpPostsAdmin />;
}
