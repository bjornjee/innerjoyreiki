"use client";

import { useSearchParams } from "next/navigation";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/constants";

type Prefill = {
  subject: string;
  body: string;
};

const PREFILLS = {
  "healing-session": {
    subject: "Reiki healing session enquiry",
    body: "Hi, I'd like to book a Reiki healing session. ",
  },
  workshop: {
    subject: "Reiki workshop enquiry",
    body: "Hi, I'd like to register for a Reiki workshop. Date I'm interested in: ",
  },
  "reiki-share": {
    subject: "Reiki Share RSVP",
    body: "Hi, I'd like to reserve a spot at the next Reiki Share. ",
  },
} as const;

const DEFAULT_PREFILL: Prefill = {
  subject: "Hello from innerjoyreiki.com",
  body: "",
};

type TypeValue = keyof typeof PREFILLS;

function isTypeValue(v: string | null): v is TypeValue {
  return v !== null && v in PREFILLS;
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors cursor-pointer";

export function ContactChannels() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const prefill: Prefill = isTypeValue(typeParam) ? PREFILLS[typeParam] : DEFAULT_PREFILL;

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    prefill.subject,
  )}&body=${encodeURIComponent(prefill.body)}`;
  const whatsappHref = prefill.body
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(prefill.body)}`
    : WHATSAPP_URL;

  return (
    <div className="flex flex-col gap-3">
      <a
        href={mailtoHref}
        aria-label={`Email innerjoy reiki at ${CONTACT_EMAIL}`}
        className={`${buttonBase} bg-accent text-foreground hover:bg-accent-light`}
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        Email
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message innerjoy reiki on WhatsApp"
        className={`${buttonBase} border border-border text-foreground hover:border-primary-light hover:text-primary-light`}
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
