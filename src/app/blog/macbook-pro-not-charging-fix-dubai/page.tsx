import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProNotCharging";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-not-charging-fix-dubai", {
  title: "MacBook Pro Not Charging? Fix Guide Dubai 2026",
  description: "MacBook Pro not charging fix in Dubai? 6 causes, faulty cable, MagSafe port, charging IC, liquid damage, Dubai heat, with step-by-step solutions.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-not-charging-fix-dubai" />
      <View />
    </>
  );
}
