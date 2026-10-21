import type { Metadata } from "next";
import ReviewsAdmin from "@/components/blocks/ReviewsAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Reviews admin",
  robots: { index: false, follow: false },
};

export default function ReviewsAdminPage() {
  return <ReviewsAdmin />;
}
