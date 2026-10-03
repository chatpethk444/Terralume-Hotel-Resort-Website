import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F6F4EE",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://terralume.hotel.com"),
  title: "Terralume Hotel & Resort — Nature's Beauty, Your Perfect Stay",
  description:
    "Terralume Hotel & Resort offers a serene escape where natural beauty meets thoughtful comfort. A place to slow down.",
  openGraph: {
    title: "Terralume Hotel & Resort",
    description: "Nature's Beauty, Your Perfect Stay. A place to slow down.",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Infinity pool terrace over the sea at sunset",
      },
    ],
  },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Terralume Hotel & Resort",
  description:
    "A serene luxury boutique escape where natural beauty meets thoughtful comfort.",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Ocean View" },
    { "@type": "LocationFeatureSpecification", name: "Infinity Pool" },
    { "@type": "LocationFeatureSpecification", name: "Wellness & Yoga" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body className="font-body bg-cream text-stone antialiased">
        {children}
      </body>
    </html>
  );
}
