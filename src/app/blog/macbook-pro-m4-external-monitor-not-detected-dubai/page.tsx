import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4ExternalMonitor";

export const metadata: Metadata = {
  title: "MacBook Pro M4 External Monitor Not Detected Dubai 2026",
  description: "MacBook Pro M4 external monitor not detected in Dubai? Thunderbolt 5 dock firmware issues, display limit (M4 Pro=2, M4 Max=4), and Detect Displays fix.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-external-monitor-not-detected-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-external-monitor-not-detected-dubai" />
      <View />
    </>
  );
}
