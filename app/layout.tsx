import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huruma Global Support Initiative - Empowering Communities in Uganda",
      description: "Huruma Global Support Initiative (HGSI) is a dynamic social enterprise committed to transforming lives in marginalized communities through education, economic empowerment, and sustainable development.",
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
        className={`${inter.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
