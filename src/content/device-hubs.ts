// device hub registries for iPad, iMac and Mac desktops.
// each hub page picks 3 related slugs for cross-linking (not itself).

export type DeviceHub = { slug: string; label: string; desc: string };

export const IPAD_HUBS: DeviceHub[] = [
  { slug: "/ipad-screen-repair-dubai",         label: "iPad Screen Repair",         desc: "Laminated displays, Pencil-ready. Message us for a quote." },
  { slug: "/ipad-battery-replacement-dubai",   label: "iPad Battery Replacement",   desc: "Glued cells, careful removal. Message us for a quote." },
  { slug: "/ipad-charging-port-repair-dubai",  label: "iPad Charging Port Repair",  desc: "USB-C and Lightning. Same day. Message us for a quote." },
  { slug: "/ipad-water-damage-repair-dubai",   label: "iPad Water Damage Repair",   desc: "Ultrasonic clean, board rework. Message us for a quote." },
];

export const IMAC_HUBS: DeviceHub[] = [
  { slug: "/imac-screen-repair-dubai",      label: "iMac Screen Repair",      desc: "24\" M-series and 27\" Intel 5K. Message us for a quote." },
  { slug: "/imac-logic-board-repair-dubai", label: "iMac Logic Board Repair", desc: "Component-level rework, GPU and PSU. Message us for a quote." },
  { slug: "/imac-not-turning-on-dubai",     label: "iMac Not Turning On",     desc: "Power supply, SMC, T2 and startup faults. Free diagnosis." },
];

export const MAC_HUBS: DeviceHub[] = [
  { slug: "/mac-mini-repair-dubai",   label: "Mac Mini Repair",   desc: "M1, M2, M4 and Intel Mac Mini. Message us for a quote." },
  { slug: "/mac-studio-repair-dubai", label: "Mac Studio Repair", desc: "M1/M2 Max & Ultra, M3 Ultra, M4 Max. Message us for a quote." },
  { slug: "/mac-pro-repair-dubai",    label: "Mac Pro Repair",    desc: "M2 Ultra and 2019 Intel tower. Message us for a quote." },
];

// device-family metadata used by the generic page template
export type DeviceFamily = {
  key: "ipad" | "imac" | "mac";
  hubLabel: string;        // breadcrumb text
  hubPath: string;         // breadcrumb href
  noun: string;            // "iPad", "iMac"
  pluralNoun: string;      // "iPads", "iMacs"
  hubs: DeviceHub[];
};

export const DEVICE_FAMILY: Record<DeviceFamily["key"], DeviceFamily> = {
  ipad: {
    key: "ipad",
    hubLabel: "iPad Repair",
    hubPath: "/ipad-repair-dubai",
    noun: "iPad",
    pluralNoun: "iPads",
    hubs: IPAD_HUBS,
  },
  imac: {
    key: "imac",
    hubLabel: "iMac Repair",
    hubPath: "/imac-repair-dubai",
    noun: "iMac",
    pluralNoun: "iMacs",
    hubs: IMAC_HUBS,
  },
  mac: {
    key: "mac",
    hubLabel: "Mac Desktop Repair",
    hubPath: "/apple-repair-dubai",
    noun: "Mac",
    pluralNoun: "Macs",
    hubs: MAC_HUBS,
  },
};
