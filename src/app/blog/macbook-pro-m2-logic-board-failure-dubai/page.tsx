import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2LogicBoardFailure";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-logic-board-failure-dubai", {
  title: "MacBook Pro M2 Logic Board Failure Dubai 2026",
  description: "MacBook Pro M2 suddenly dead? Why M2 Pro and M2 Max boards fail at 2-4 years old with charging and power IC faults, and what to do next. WhatsApp us today.",
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
