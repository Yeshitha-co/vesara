import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Y S Creations | Premium Spices & Dry Fruits Wholesale Supplier",
  description:
    "Y S Creations, Bengaluru — trusted B2B wholesale supplier of premium spices, dry fruits and food ingredients for hotels, restaurants and distributors across South India.",
  keywords: "spices supplier, dry fruits wholesale, food ingredients, HORECA supplier, Bengaluru spices, bulk supplier",
  openGraph: {
    title: "Y S Creations | Premium Spices & Dry Fruits",
    description: "Crafted from the Finest Origins — your trusted wholesale partner.",
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
        <meta name="theme-color" content="#141414" />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-gray-900 antialiased">{children}</body>
    </html>
  );
}
