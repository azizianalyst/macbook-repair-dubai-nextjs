import type { Metadata } from "next";
import AdminLogin from "@/components/blocks/AdminLogin";
import { oauthConfigured } from "@/lib/google-oauth";

// Private owner tool — never index the login.
export const metadata: Metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  // Only show the Google button once OAuth env vars are set (server-side check).
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-5 py-2xl">
      <AdminLogin googleEnabled={oauthConfigured()} />
    </main>
  );
}
