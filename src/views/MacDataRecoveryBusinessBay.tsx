"use client";
import { DataRecoveryAreaTemplate } from "@/components/blocks/DataRecoveryAreaTemplate";
import { DATA_RECOVERY_AREAS } from "@/content/data-recovery-areas";

const cfg = DATA_RECOVERY_AREAS.find((a) => a.slug === "business-bay")!;

export default function MacDataRecoveryBusinessBay() {
  return <DataRecoveryAreaTemplate cfg={cfg} />;
}
