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
  title: "InnerJoy Reiki",
  description: "InnerJoy Reiki — Find stillness. Restore balance.",
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
        <GoogleTranslateProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <BottomBar />
        </GoogleTranslateProvider>
      </body>
    </html>
  );
}
