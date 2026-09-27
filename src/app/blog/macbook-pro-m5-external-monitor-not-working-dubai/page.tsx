import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5ExternalMonitor";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-external-monitor-not-working-dubai", {
  title: "MacBook Pro M5 External Monitor Not Working Dubai 2026",
  description: "MacBook Pro M5 external monitor not working? Third display limits, Thunderbolt 5 dock drops and the Tahoe fullscreen black bug explained. WhatsApp us.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-external-monitor-not-working-dubai" />
      <View />
    </>
  );
}
