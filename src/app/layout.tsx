import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { BottomBar } from "@/components/bottom-bar";
import { GoogleTranslateProvider } from "@/components/language-switcher";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "innerjoy reiki",
  description:
    "innerjoy reiki — reconnect with your inner wisdom, step fully into your true potential and experience joy within.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-1/2 focus:top-2 focus:z-50 focus:-translate-x-1/2 focus:rounded-full focus:bg-hero-text focus:px-4 focus:py-2 focus:text-sm focus:text-hero-bg focus:shadow-lg"
        >
          Skip to content
        </a>
        <GoogleTranslateProvider>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <BottomBar />
        </GoogleTranslateProvider>
      </body>
    </html>
  );
}
