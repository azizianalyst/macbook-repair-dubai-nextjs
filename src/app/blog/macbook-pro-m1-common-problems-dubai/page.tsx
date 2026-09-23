import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-common-problems-dubai", {
  title: "MacBook Pro M1 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M1 common problems in Dubai? Touch Bar failure, battery swelling on 4-5 year old units, charging IC faults, kernel panics.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-common-problems-dubai" />
      <View />
    </>
  );
}
