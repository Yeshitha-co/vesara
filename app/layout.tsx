import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VESARA | Premium Spices & Dry Fruits Wholesale Supplier",
  description: "Y S Creations - Trusted B2B wholesale supplier of premium spices, dry fruits, and food ingredients for hotels, restaurants, and distributors across South India.",
  keywords: "spices supplier, dry fruits wholesale, food ingredients, HORECA supplier, premium spices, bulk supplier",
  openGraph: {
    title: "VESARA | Premium Spices & Dry Fruits",
    description: "Your trusted partner for premium spices and dry fruits",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B3A3A" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
