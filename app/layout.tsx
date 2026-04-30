import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://summer.gyatanutrition.com";
const OG_IMAGE = "https://gyatanutrition.com/wp-content/uploads/2025/10/VAF03397-scaled.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  title: "Gyata Nutrition | Premium Supplements in Ottawa, Canada",
  description:
    "Fuel your momentum with Gyata Nutrition. Premium protein powder, creatine, collagen, and daily wellness supplements for everyday health in Ottawa and across Canada.",
  keywords: [
    "best supplements Ottawa",
    "protein powder Canada",
    "whey protein Ottawa",
    "creatine Canada",
    "collagen supplements Canada",
    "supplements near me Ottawa",
    "healthy lifestyle Canada",
    "daily wellness supplements",
    "fitness supplements Ottawa",
    "recovery supplements Canada",
    "magnesium supplement Canada",
  ],
  openGraph: {
    title: "Gyata Nutrition | Premium Supplements in Ottawa, Canada",
    description:
      "Fuel your momentum. Premium supplements designed for everyday health in Ottawa and across Canada.",
    type: "website",
    locale: "en_CA",
    siteName: "Gyata Nutrition",
    url: BASE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Gyata Nutrition – Premium Supplements Ottawa Canada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyata Nutrition | Premium Supplements in Ottawa",
    description:
      "Premium protein, creatine, collagen and wellness supplements for everyday Canadians.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Gyata Nutrition",
  description:
    "Premium protein powder, creatine, collagen, and daily wellness supplements for everyday health in Ottawa and across Canada.",
  url: BASE_URL,
  logo: "https://gyatanutrition.com/wp-content/uploads/2025/10/VAF03397-scaled.jpg",
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Ottawa" },
    { "@type": "AdministrativeArea", name: "Ontario" },
    { "@type": "Country", name: "Canada" },
  ],
  sameAs: ["https://gyatanutrition.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BGB76Z9B9D"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BGB76Z9B9D');
        `}
      </Script>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
