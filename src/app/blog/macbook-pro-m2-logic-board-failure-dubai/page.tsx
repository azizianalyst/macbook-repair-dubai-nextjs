import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2LogicBoardFailure";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-logic-board-failure-dubai", {
  title: "MacBook Pro M2 Logic Board Failure Dubai 2026",
  description: "MacBook Pro M2 suddenly dead in Dubai? M2 Pro and M2 Max logic board charging IC failures at 2-4 years old. Symptoms, diagnosis, and component-level repair…",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-logic-board-failure-dubai" />
      <View />
    </>
  );
}
