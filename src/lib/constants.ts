export const SITE_NAME = "Innerjoy Reiki";
export const CONTACT_EMAIL = "enquiry@innerjoyreiki.com";
export const WHATSAPP_NUMBER = "6597953408";
export const WHATSAPP_DISPLAY = "+65 9795 3408";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Reiki Healing", href: "/healing" },
  { label: "Reiki Workshops", href: "/workshops" },
  { label: "Articles", href: "/articles" },
] as const;

export const FOOTER_NAV_LINKS = [
  { label: "Reiki Healing", href: "/healing" },
  { label: "Reiki Workshops", href: "/workshops" },
  { label: "Articles", href: "/articles" },
  { label: "Events", href: "/events" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;
