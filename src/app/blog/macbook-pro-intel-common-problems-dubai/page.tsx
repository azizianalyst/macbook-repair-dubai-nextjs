import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelProblems";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-intel-common-problems-dubai", {
  title: "MacBook Pro Intel Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro Intel common problems in Dubai: butterfly keyboard failure, AMD GPU solder cracks, Flexgate and T2 faults, all repairable. WhatsApp us today.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-common-problems-dubai" />
      <View />
    </>
  );
}
