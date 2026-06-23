import type { Metadata } from "next";
import SocialAdmin from "@/components/blocks/SocialAdmin";

export const metadata: Metadata = { title: "Social publishing", robots: { index: false, follow: false } };

export default function SocialAdminPage() {
  return <SocialAdmin />;
}
