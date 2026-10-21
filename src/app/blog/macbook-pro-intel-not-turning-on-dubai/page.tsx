import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelNotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-intel-not-turning-on-dubai", {
  title: "MacBook Pro Intel Not Turning On Dubai 2026 — Fix Guide",
  description: "MacBook Pro Intel won't turn on in Dubai? Dead vs black screen, SMC reset, deep discharge and random-shutdown fixes. Free diagnosis — WhatsApp us.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-not-turning-on-dubai" />
      <View />
    </>
  );
}
