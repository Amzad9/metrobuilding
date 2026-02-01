import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Metro Building Solutions LLC - Remodeling & Multi-Family Construction | North Ridgeville, OH",
  description: "Trusted remodeling and multi-family construction company in North Ridgeville, Ohio. 6 years of experience delivering quality residential remodeling and construction services.",
  keywords: "remodeling, multi-family dwellings, construction, North Ridgeville Ohio, residential remodeling, general contractor, home renovation, construction services",
  authors: [{ name: "Metro Building Solutions LLC" }],
  openGraph: {
    title: "Metro Building Solutions LLC - Remodeling & Construction Services",
    description: "Trusted remodeling and multi-family construction company serving North Ridgeville, Ohio with 6 years of experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
