import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ContextForge – Make any repo AI-agent ready",
    template: "%s – ContextForge",
  },
  description:
    "Registry-powered CLI that installs curated AI-agent instruction packs into existing codebases. Works with Codex, Claude Code, Cursor, and GitHub Copilot.",
  openGraph: {
    title: "ContextForge – Make any repo AI-agent ready",
    description:
      "Install curated instruction packs for AI coding agents from one registry-powered CLI.",
    url: "https://contextforge.org",
    siteName: "ContextForge",
    type: "website",
  },
  metadataBase: new URL("https://contextforge.org"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} h-full`}
    >
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
