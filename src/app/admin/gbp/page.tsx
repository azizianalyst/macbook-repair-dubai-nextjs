import type { Metadata } from "next";
import GbpAdmin from "@/components/blocks/GbpAdmin";

export const metadata: Metadata = {
  title: "Google Business Profile",
  robots: { index: false, follow: false },
};

export default function GbpAdminPage() {
  return <GbpAdmin />;
}
