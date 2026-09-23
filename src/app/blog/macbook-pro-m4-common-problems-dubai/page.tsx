import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-common-problems-dubai", {
  title: "MacBook Pro M4 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M4 common problems in Dubai? First OLED display issues, Thunderbolt 5 faults, memory pressure on 16GB M4. Expert fixes and repair — message us for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-common-problems-dubai" />
      <View />
    </>
  );
}
