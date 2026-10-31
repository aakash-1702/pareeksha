import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Noto_Serif_Devanagari } from "next/font/google";
import { buildSoftwareApplicationJsonLd, buildFaqPageJsonLd } from "@/lib/seo";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/utilities.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const instrumentSerif = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], weight: "400", display: "swap" });
const notoDevanagari = Noto_Serif_Devanagari({ variable: "--font-noto-devanagari", subsets: ["devanagari"], weight: "600", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pareeksha.com"),
  title: {
    default: "Pareeksha — The hiring stack for small teams",
    template: "%s | Pareeksha",
  },
  description:
    "Assessments, coding rounds, AI interviews and a built-in candidate CRM. Everything a small company needs to hire well, in one place.",
  openGraph: {
    title: "Pareeksha — The hiring stack for small teams",
    description:
      "Assessments, coding rounds, AI interviews and a built-in candidate CRM. Everything a small company needs to hire well, in one place.",
    url: "https://pareeksha.com",
    siteName: "Pareeksha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pareeksha — The hiring stack for small teams",
    description:
      "Assessments, coding rounds, AI interviews and a built-in candidate CRM.",
  },
  alternates: {
    canonical: "https://pareeksha.com",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${notoDevanagari.variable}`}
    >
      <head>
        {/* Theme script: runs before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch{}`,
          }}
        />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildSoftwareApplicationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqPageJsonLd()),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
