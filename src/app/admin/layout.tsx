import type { Metadata } from "next";
import AdminShell from "@/components/blocks/AdminShell";

// wp-admin–style chrome for the whole owner area. The shell renders the login screen bare.
export const metadata: Metadata = {
  title: { default: "Admin", template: "%s · Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
