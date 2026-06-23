import type { Metadata } from "next";
import TeamAdmin from "@/components/blocks/TeamAdmin";

export const metadata: Metadata = { title: "Team & Roles admin", robots: { index: false, follow: false } };

export default function TeamAdminPage() {
  return <TeamAdmin />;
}
