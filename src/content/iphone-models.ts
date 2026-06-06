// canonical iPhone models list. used by every iPhone hub page for pricing tables.
// dates approximate launch year; "current line" reflects April 2026.

export type IPhoneModel = {
  family: string;            // group label
  name: string;              // display
  released: number;          // year
  connector: "Lightning" | "USB-C";
  faceId: boolean;
};

export const IPHONE_MODELS: IPhoneModel[] = [
  // serviceable line: iPhone 13 and newer
  { family: "13",      name: "iPhone 13 mini / 13",     released: 2021, connector: "Lightning", faceId: true  },
  { family: "13",      name: "iPhone 13 Pro / Pro Max", released: 2021, connector: "Lightning", faceId: true  },
  { family: "SE",      name: "iPhone SE (3rd gen)",     released: 2022, connector: "Lightning", faceId: false },
  { family: "14",      name: "iPhone 14 / 14 Plus",     released: 2022, connector: "Lightning", faceId: true  },
  { family: "14",      name: "iPhone 14 Pro / Pro Max", released: 2022, connector: "Lightning", faceId: true  },
  // USB-C era
  { family: "15",      name: "iPhone 15 / 15 Plus",     released: 2023, connector: "USB-C",     faceId: true  },
  { family: "15",      name: "iPhone 15 Pro / Pro Max", released: 2023, connector: "USB-C",     faceId: true  },
  { family: "16",      name: "iPhone 16 / 16 Plus",     released: 2024, connector: "USB-C",     faceId: true  },
  { family: "16",      name: "iPhone 16 Pro / Pro Max", released: 2024, connector: "USB-C",     faceId: true  },
  { family: "16",      name: "iPhone 16e",              released: 2025, connector: "USB-C",     faceId: true  },
  // 2025-2026 line
  { family: "17",      name: "iPhone 17",               released: 2025, connector: "USB-C",     faceId: true  },
  { family: "17",      name: "iPhone Air",              released: 2025, connector: "USB-C",     faceId: true  },
  { family: "17",      name: "iPhone 17 Pro",           released: 2025, connector: "USB-C",     faceId: true  },
  { family: "17",      name: "iPhone 17 Pro Max",       released: 2025, connector: "USB-C",     faceId: true  },
  { family: "17",      name: "iPhone 17e",              released: 2026, connector: "USB-C",     faceId: true  },
];

export const IPHONE_REVIEW_NAMES = [
  "Saeed Alam",
  "Tim Quick",
  "Sergej Schlegel",
  "Wellington Academy",
  "Anatoliy Tarasenko",   // iPad-nearby Apple device sentiment
];

// related iPhone hubs for cross-linking. each page picks 3 that are NOT itself.
export const IPHONE_HUBS = [
  { slug: "/iphone-screen-repair-dubai",         label: "iPhone Screen Repair",         desc: "OLED & LCD from AED 460. Same-day on most models." },
  { slug: "/iphone-battery-replacement-dubai",   label: "iPhone Battery Replacement",   desc: "From AED 330. Genuine cells, BMS pairing." },
  { slug: "/iphone-charging-port-repair-dubai",  label: "iPhone Charging Port Repair",  desc: "Lightning & USB-C. From AED 330, same day." },
  { slug: "/iphone-back-glass-repair-dubai",     label: "iPhone Back Glass Repair",     desc: "Laser removal. MagSafe + wireless coil saved." },
  { slug: "/iphone-camera-repair-dubai",         label: "iPhone Camera Repair",         desc: "Rear, ultra-wide, telephoto, LiDAR. From AED 460." },
  { slug: "/iphone-water-damage-repair-dubai",   label: "iPhone Water Damage Repair",   desc: "Ultrasonic cleaning. 24-hour window matters." },
  { slug: "/iphone-data-recovery-dubai",         label: "iPhone Data Recovery",         desc: "iCloud first, chip-off when needed." },
  { slug: "/iphone-network-unlock-dubai",        label: "iPhone Network Unlock",        desc: "Carrier unlock, IMEI-based. No jailbreak." },
  { slug: "/iphone-icloud-unlock-dubai",         label: "iPhone iCloud Unlock",         desc: "Honest help: ownership documentation, Apple liaison." },
  { slug: "/iphone-software-fix-dubai",          label: "iPhone Software Repair",       desc: "Stuck boot, recovery, DFU, downgrades." },
  { slug: "/iphone-face-id-repair-dubai",         label: "iPhone Face ID Repair",        desc: "Sensor work where calibration allows. Honest about limits." },
];
