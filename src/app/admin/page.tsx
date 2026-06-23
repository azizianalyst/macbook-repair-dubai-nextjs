import type { Metadata } from "next";
import AdminDashboard from "@/components/blocks/AdminDashboard";

// Private owner home (dashboard). Gated by proxy.ts (session cookie) + noindex.
export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminHome() {
  return <AdminDashboard />;
}
