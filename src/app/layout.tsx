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
  title: "RICH JOKEY INDI",
  description: "The Market is a Joke, if you don't have the Edge.",
  metadataBase: new URL("https://richjokeyindi.com"),
  icons: {
    icon: "/rji-logo-official.png",
    shortcut: "/rji-logo-official.png",
    apple: "/rji-logo-official.png",
  },
  openGraph: {
    title: "RICH JOKEY INDI",
    description: "Don't play the game, beat the house.",
    url: "https://richjokeyindi.com",
    siteName: "RICH JOKEY INDI",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "RICH JOKEY INDI | The Market is a Joke, if you don't have the Edge.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RICH JOKEY INDI",
    description: "The Market is a Joke, if you don't have the Edge.",
    images: ["/opengraph-image.png"],
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

