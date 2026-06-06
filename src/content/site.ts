// canonical site data - change here, propagates everywhere

export const NAP = {
  name: "MacBook Repair Dubai",
  street: "Office #45, 10th Floor, Concord Tower",
  area: "Al Sufouh, Dubai Media City",
  city: "Dubai",
  country: "United Arab Emirates",
  phoneDisplay: "055 741 3706",
  phoneE164: "+971557413706",
  whatsappUrl: "https://wa.me/971557413706",
  facebook: "https://www.facebook.com/macbookrepairdubai.ae/",
  founded: "10 October 2004",
  yearsInBusiness: 21,
} as const;

// Review totals - bump when site crosses 200+, 225+, 250+, etc.
export const REVIEW_COUNT = 215;
export const REVIEW_AVERAGE = 5.0;

export const HOURS = [
  { day: "Monday",    open: "9 am - 10 pm" },
  { day: "Tuesday",   open: "9 am - 10 pm" },
  { day: "Wednesday", open: "9 am - 10 pm" },
  { day: "Thursday",  open: "9 am - 10 pm" },
  { day: "Friday",    open: "9 am - 10 pm" },
  { day: "Saturday",  open: "9 am - 10 pm" },
  { day: "Sunday",    open: "Closed" },
] as const;

// top services for nav + footer
export const TOP_SERVICES = [
  { label: "MacBook Screen Repair",     href: "/macbook-screen-repair-dubai",       price: 780 },
  { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai", price: 590 },
  { label: "MacBook Keyboard Replacement", href: "/macbook-keyboard-repair-dubai", price: 460 },
  { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", price: 1040 },
  { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", price: 910 },
  { label: "MacBook Trackpad Repair",   href: "/macbook-trackpad-repair-dubai",     price: 460 },
  { label: "iMac Screen Repair",        href: "/imac-screen-repair-dubai",          price: 1040 },
  { label: "iPhone Screen Repair",      href: "/iphone-screen-repair-dubai",        price: 460 },
  { label: "iPad Screen Repair",        href: "/ipad-screen-repair-dubai",          price: 460 },
  { label: "Data Recovery",             href: "/mac-data-recovery-dubai",               price: 520 },
] as const;

export const DEVICE_FAMILIES = [
  { label: "MacBook",     href: "/mac-repair-dubai" },
  { label: "iMac",        href: "/imac-repair-dubai" },
  { label: "Mac mini",    href: "/mac-mini-repair-dubai" },
  { label: "iPhone",      href: "/iphone-repair-dubai" },
  { label: "iPad",        href: "/ipad-repair-dubai" },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/apple-repair-dubai" },
  { label: "Devices",  href: "/apple-repair-dubai" },
  { label: "Reviews",  href: "/reviews" },
  { label: "Blog",     href: "/blog" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
] as const;

export const USPS = [
  { label: "Free diagnosis",       icon: "Search" },
  { label: "No fix, no charge",    icon: "ShieldCheck" },
  { label: "Same-day service",     icon: "Clock" },
  { label: "Free pickup in Dubai", icon: "Truck" },
  { label: "Since 2004",           icon: "Award" },
  { label: "215+ five-star reviews", icon: "Star" },
] as const;
