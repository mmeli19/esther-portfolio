import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Esther M. Burnett — Project Manager & Software Engineer",
  description:
    "Portfolio of Esther M. Burnett — Project Manager, Software Engineer, U.S. Army Veteran, and former D1/D2 student-athlete. Building thoughtful products and leading high-performing teams.",
  keywords: [
    "Esther Burnett",
    "Project Manager",
    "Software Engineer",
    "MBA",
    "Palo Alto Networks",
    "U.S. Army",
    "Portfolio",
  ],
  authors: [{ name: "Esther M. Burnett" }],
  openGraph: {
    title: "Esther M. Burnett — Project Manager & Software Engineer",
    description:
      "Portfolio of Esther M. Burnett — Project Manager, Software Engineer, U.S. Army Veteran, former D1/D2 student-athlete.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans">{children}</body>
    </html>
  );
}
