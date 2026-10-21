import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookMaintenanceChecklist";

export const metadata: Metadata = metaForPath("/blog/macbook-maintenance-checklist-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-maintenance-checklist-dubai" />
      <View />
    </>
  );
}
