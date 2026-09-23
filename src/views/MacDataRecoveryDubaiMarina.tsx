"use client";
import { DataRecoveryAreaTemplate } from "@/components/blocks/DataRecoveryAreaTemplate";
import { DATA_RECOVERY_AREAS } from "@/content/data-recovery-areas";

const cfg = DATA_RECOVERY_AREAS.find((a) => a.slug === "dubai-marina")!;

export default function MacDataRecoveryDubaiMarina() {
  return <DataRecoveryAreaTemplate cfg={cfg} />;
}
