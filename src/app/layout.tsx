import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google"; // Fonts restored
import Link from "next/link";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffect from "@/components/BackgroundEffect";
import Scanline from "@/components/Scanline";
import StructuredData from "@/components/StructuredData";
import { GoogleAnalytics } from "@next/third-parties/google"; // Analytics restored
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mukulgoel.dev"),
  title: {
    default: "Mukul Goel | Full-Stack & Mobile Engineer",
    template: "%s | Mukul Goel"
  },
  description: "Bespoke digital experiences crafted with precision and speed. Specializing in Next.js, Flutter, and high-impact fintech solutions.",
  keywords: ["Mukul Goel", "Full-Stack Engineer", "Mobile Architect", "Flutter Developer", "Next.js Expert", "Goa Software Engineer", "Fintech Developer", "Web3 Architect"],
  authors: [{ name: "Mukul Goel", url: "https://github.com/mklgoell" }],
  creator: "Mukul Goel",
  publisher: "Mukul Goel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Mukul Goel | Full-Stack & Mobile Engineer",
    description: "Bespoke digital experiences crafted with precision and speed.",
    url: "https://mukulgoel.dev",
    siteName: "Mukul Goel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mukul Goel | Bespoke Digital Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukul Goel | Full-Stack & Mobile Engineer",
    description: "Bespoke digital experiences crafted with precision and speed.",
    creator: "@mklgoell",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  themeColor: "#020617",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mukul Goel",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${outfit.variable} font-sans bg-[#020617] text-[#f8fafc] antialiased relative`}
      >
        <Preloader />
        <StructuredData />
        <CustomCursor />
        <BackgroundEffect />
        <Scanline />
        {/* Animated Grainy overlay */}
        <div className="noise-overlay" />
        {children}
        <GoogleAnalytics gaId="G-RHNN6MHRDG" />
      </body>
    </html>
  );
}
