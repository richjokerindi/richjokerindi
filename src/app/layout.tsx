import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RICH JOKER INDI",
  description: "The Market is a Joke, if you don't have the Edge.",
  metadataBase: new URL("https://richjoker.ezos.my"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand-tab-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand-tab-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RICH JOKER INDI",
    description: "Don't play the game, beat the house.",
    url: "https://richjoker.ezos.my",
    siteName: "RICH JOKER INDI",
    images: [
      {
        url: "/rji-logo-official-v2.png",
        width: 1200,
        height: 1200,
        alt: "RICH JOKER INDI | The Market is a Joke, if you don't have the Edge.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RICH JOKER INDI",
    description: "The Market is a Joke, if you don't have the Edge.",
    images: ["/rji-logo-official-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

