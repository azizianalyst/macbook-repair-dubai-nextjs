import type { Metadata } from "next";
import LocationsAdmin from "@/components/blocks/LocationsAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Locations",
  robots: { index: false, follow: false },
};

export default function LocationsPage() {
  return <LocationsAdmin />;
}
