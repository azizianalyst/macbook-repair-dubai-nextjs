import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5ExternalMonitor";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-external-monitor-not-working-dubai", {
  title: "MacBook Pro M5 External Monitor Not Working Dubai 2026",
  description: "MacBook Pro M5 external monitor not working in Dubai? Third display not detected, dock drops, fullscreen goes black.",
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
