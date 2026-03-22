import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AquaCBD | Premium Water Soluble CBD – Colorado Certified, 99.9% Pure",
  description:
    "AquaCBD delivers 99.9% pure, Colorado-certified water soluble CBD to the UK. Up to 5x more bioavailable than CBD oil. Rigorously tested for pesticides, heavy metals & mould. Coming soon – join the waitlist.",
  keywords: [
    "water soluble CBD UK",
    "best CBD UK",
    "Colorado CBD",
    "99.9% pure CBD",
    "CBD bioavailability",
    "water soluble CBD",
    "CBD drops UK",
    "premium CBD UK",
    "certified CBD",
    "CBD isolate UK",
  ],
  openGraph: {
    title: "AquaCBD | Premium Water Soluble CBD – Colorado Certified",
    description:
      "99.9% pure, Colorado-certified water soluble CBD. Up to 5x more bioavailable than oil-based CBD. Coming to the UK.",
    url: "https://www.watersolublecbd.co.uk",
    siteName: "AquaCBD",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaCBD | Premium Water Soluble CBD",
    description:
      "99.9% pure Colorado-certified CBD. Water soluble = your body actually absorbs it.",
  },
  alternates: {
    canonical: "https://www.watersolublecbd.co.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AquaCBD",
              url: "https://www.watersolublecbd.co.uk",
              description:
                "Premium water soluble CBD sourced from Colorado, USA. 99.9% pure, fully certified and lab tested.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
