import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProOverheating";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-overheating-fix-dubai", {
  title: "MacBook Pro Overheating Fix Dubai: M1 to M5 Guide 2026",
  description: "MacBook Pro overheating fix in Dubai? 6 causes, CPU throttling, fan clog, thermal paste, Dubai heat damage, with step-by-step solutions. Message us on WhatsApp.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-overheating-fix-dubai" />
      <View />
    </>
  );
}
