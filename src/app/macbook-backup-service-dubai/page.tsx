import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookBackupService";

export const metadata: Metadata = metaForPath("/macbook-backup-service-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-backup-service-dubai" />
      <View />
    </>
  );
}
