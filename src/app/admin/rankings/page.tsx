import type { Metadata } from "next";
import RankingsDashboard from "@/components/blocks/RankingsDashboard";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Rankings admin",
  robots: { index: false, follow: false },
};

export default function RankingsAdminPage() {
  return <RankingsDashboard />;
}
