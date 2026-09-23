import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4HotLidClosed";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-gets-hot-lid-closed-dubai", {
  title: "MacBook Pro M4 Gets Hot with Lid Closed Dubai 2026",
  description: "MacBook Pro M4 overheating with lid closed in Dubai? Clamshell airflow restriction, Sequoia 15.0 fan delay bug fixed in 15.2, and Dubai heat headroom explained.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-gets-hot-lid-closed-dubai" />
      <View />
    </>
  );
}
