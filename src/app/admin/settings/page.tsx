import type { Metadata } from "next";
import SettingsAdmin from "@/components/blocks/SettingsAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Site Settings",
  robots: { index: false, follow: false },
};

export default function SettingsPage() {
  return <SettingsAdmin />;
}
