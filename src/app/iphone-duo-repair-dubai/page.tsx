import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneDuoRepair";

// STAGED PAGE (Phase 4.2, docs/seo-master-plan-2026-09-26.md). Built before launch from
// Apple-verified facts only (docs/apple-lineup-2026-09-26.md). Not linked from anywhere yet.
// PUBLISH 2026-10-23: remove noindex when iPhone Duo goes on sale
export const metadata: Metadata = {
  ...metaFromFields("/iphone-duo-repair-dubai", {
    title: "iPhone Duo Repair Dubai - Foldable Screen & Hinge Help",
    description: "iPhone Duo repair in Dubai: inner and outer screens, hinge, battery and data. AppleCare+ checked first, free diagnosis. WhatsApp 055 741 3706.",
  }),
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-duo-repair-dubai" />
      <View />
    </>
  );
}
