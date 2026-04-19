"use client";

import Script from "next/script";
import { useState, useEffect, createContext, useContext } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          element: string
        ) => void;
      };
    };
  }
}

const TranslateReadyContext = createContext(false);
const ChineseContext = createContext(false);
const SetChineseContext = createContext<((v: boolean) => void) | null>(null);
const TranslatingContext = createContext(false);
const SetTranslatingContext = createContext<((v: boolean) => void) | null>(null);

export function useIsChinese() {
  return useContext(ChineseContext);
}

/**
 * Renders the hidden Google Translate widget + script once.
 * Place in layout, not in navbar.
 */
export function GoogleTranslateProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [chinese, setChinese] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.cookie.includes("googtrans=/en/zh-CN");
  });
  const [translating, setTranslating] = useState(false);

  useEffect(() => {
    // Register callback before script loads so ?cb= finds it
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "zh-CN", autoDisplay: false },
        "google_translate_element"
      );
      setReady(true);
    };
  }, []);

  return (
    <TranslateReadyContext.Provider value={ready}>
      <ChineseContext.Provider value={chinese}>
        <SetChineseContext.Provider value={setChinese}>
          <TranslatingContext.Provider value={translating}>
            <SetTranslatingContext.Provider value={setTranslating}>
              <div id="google_translate_element" />
              <Script
                src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
              />
              <div
                style={{
                  opacity: translating ? 0.6 : 1,
                  pointerEvents: translating ? "none" : "auto",
                  transition: "opacity 150ms ease",
                }}
              >
                {children}
              </div>
            </SetTranslatingContext.Provider>
          </TranslatingContext.Provider>
        </SetChineseContext.Provider>
      </ChineseContext.Provider>
    </TranslateReadyContext.Provider>
  );
}

/**
 * Globe toggle button. Can be rendered multiple times (desktop + mobile).
 * Reads actual translation state from DOM, not local state.
 */
export function LanguageSwitcher() {
  const ready = useContext(TranslateReadyContext);
  const chinese = useContext(ChineseContext);
  const setChinese = useContext(SetChineseContext);
  const translating = useContext(TranslatingContext);
  const setTranslating = useContext(SetTranslatingContext);

  function toggle() {
    if (chinese) {
      // Clear googtrans cookie and reload to revert to English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
      window.location.reload();
      return;
    }

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (!select) return;

    setTranslating?.(true);

    select.value = "zh-CN";
    select.dispatchEvent(new Event("change"));

    // Wait for Google Translate to mutate the DOM before flipping <T> components
    const observer = new MutationObserver(() => {
      if (/[\u4e00-\u9fff]/.test(document.body.innerText)) {
        observer.disconnect();
        setChinese?.(true);
        setTranslating?.(false);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    // Fallback: flip anyway after 5s if GT never responds
    setTimeout(() => {
      observer.disconnect();
      setChinese?.(true);
      setTranslating?.(false);
    }, 5000);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={!ready || translating}
      className="notranslate flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      translate="no"
      aria-label={chinese ? "Switch to English" : "Switch to Chinese"}
    >
      {translating ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      )}
      {translating ? null : chinese ? "EN" : "中文"}
    </button>
  );
}
