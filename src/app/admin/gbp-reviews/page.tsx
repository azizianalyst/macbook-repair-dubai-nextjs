import type { Metadata } from "next";
import GbpReviewsAdmin from "@/components/blocks/GbpReviewsAdmin";

export const metadata: Metadata = {
  title: "GBP Reviews",
  robots: { index: false, follow: false },
};

export default function GbpReviewsPage() {
  return <GbpReviewsAdmin />;
}
