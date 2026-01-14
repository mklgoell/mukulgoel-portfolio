import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffect from "@/components/BackgroundEffect";
import Scanline from "@/components/Scanline";
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
  title: "Mukul Goel | Full-Stack & Mobile Engineer",
  description: "Bespoke digital experiences crafted with precision and speed.",
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
        <CustomCursor />
        <BackgroundEffect />
        <Scanline />
        {/* Animated Grainy overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
