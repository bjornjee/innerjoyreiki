"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const FORMSPREE_URL = "https://formspree.io/f/your-form-id";

type Status = "idle" | "sending" | "sent" | "error";

const TYPE_OPTIONS = [
  { value: "healing-session", label: "Reiki Healing Session" },
  { value: "workshop", label: "Reiki Workshop" },
  { value: "reiki-share", label: "Reiki Share" },
] as const;

type TypeValue = (typeof TYPE_OPTIONS)[number]["value"];

function isTypeValue(v: string | null): v is TypeValue {
  return v !== null && TYPE_OPTIONS.some((opt) => opt.value === v);
}

const fieldClass =
  "mt-1 block w-full rounded-xl border border-text-muted/30 bg-white px-4 py-3 text-sm text-foreground placeholder:text-text-muted/50 transition-colors focus:outline-none focus-visible:border-hero-text/60 focus-visible:ring-2 focus-visible:ring-hero-text/40";

const selectClass = `${fieldClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%235d574f%22><path fill-rule=%22evenodd%22 d=%22M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.4a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%22/></svg>')] bg-[length:18px_18px] bg-[right_0.75rem_center] bg-no-repeat pr-10`;

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type");
  const defaultType: TypeValue | "" = isTypeValue(initialType) ? initialType : "";

  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-text-muted">
          Thank you for reaching out. I&apos;ll get back to you within 1–2
          business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 cursor-pointer text-sm font-medium text-primary-light hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={fieldClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-foreground">
          Type of Service / Event
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue={defaultType}
          className={selectClass}
        >
          <option value="" disabled>
            Choose one…
          </option>
          {TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
          placeholder="How can I help you? For workshops, please indicate the date you're registering for."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
