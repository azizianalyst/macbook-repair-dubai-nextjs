import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4ExternalMonitor";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-external-monitor-not-detected-dubai", {
  title: "MacBook Pro M4 External Monitor Not Detected Dubai 2026",
  description: "MacBook Pro M4 external monitor not detected in Dubai? Thunderbolt 5 dock firmware issues, display limit (M4 Pro=2, M4 Max=4), and Detect Displays fix.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-external-monitor-not-detected-dubai" />
      <View />
    </>
  );
}
