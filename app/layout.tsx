import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huruma Global Support Initiative - Empowering Communities in Uganda",
  description: "Huruma Global Support Initiative (HGSI) is a dynamic social enterprise committed to transforming lives in underserved communities through education, economic empowerment, and sustainable development.",
  keywords: "charity, NGO, Uganda, education, poverty alleviation, community development, social enterprise",
  authors: [{ name: "Huruma Global Support Initiative" }],
  openGraph: {
    title: "Huruma Global Support Initiative",
    description: "Empowering communities through education, economic empowerment, and sustainable development in Uganda.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huruma Global Support Initiative",
    description: "Empowering communities through education, economic empowerment, and sustainable development in Uganda.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
