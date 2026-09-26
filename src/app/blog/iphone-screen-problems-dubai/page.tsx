import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneScreenProblems";

export const metadata: Metadata = metaFromFields("/blog/iphone-screen-problems-dubai", {
  title: "iPhone Screen Problems? Black Spots, Lines & Touch Fixes",
  description: "Black spot, lines, yellow or grey tint, black screen or touch not working on your iPhone? What is a setting, what is the display, and when to repair it.",
  publishedTime: "2026-09-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-screen-problems-dubai" />
      <View />
    </>
  );
}
