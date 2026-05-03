export const SITE_NAME = "innerjoy reiki";
export const CONTACT_EMAIL = "enquiry@innerjoyreiki.com";
// Placeholder — replace with the client's real WhatsApp number (E.164 digits, no +/spaces).
export const WHATSAPP_NUMBER = "6591234567";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const NAV_LINKS = [
  { label: "About Yin Ling", href: "/about" },
  { label: "What is Reiki", href: "/reiki" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;
