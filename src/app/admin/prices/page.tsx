import type { Metadata } from "next";
import { Suspense } from "react";
import PricesHub from "@/components/blocks/PricesHub";

export const metadata: Metadata = {
  title: "Prices",
  robots: { index: false, follow: false },
};

export default function PricesPage() {
  return (
    <Suspense>
      <PricesHub />
    </Suspense>
  );
}
