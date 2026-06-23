import type { Metadata } from "next";
import { Suspense } from "react";
import KeywordHub from "@/components/blocks/KeywordHub";

export const metadata: Metadata = {
  title: "Keywords & Tracker",
  robots: { index: false, follow: false },
};

export default function KeywordsPage() {
  return (
    <Suspense>
      <KeywordHub />
    </Suspense>
  );
}
