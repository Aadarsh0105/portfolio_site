import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: "%s | Naxora Technology",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: "Naxora Technology",
    },
  ],

  creator: "Naxora Technology",

  publisher: "Naxora Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,

    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Naxora Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/logo1.png"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Naxora Technology",

    url: "https://naxoratechnology.com",

    logo: "https://naxoratechnology.com/logo1.png",

    email: "contact@naxoratechnology.com",

    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER,

    sameAs: [
      "https://linkedin.com/company/naxora-technology",
      "https://instagram.com/naxoratechnology",
      "https://facebook.com/naxoratechnology",
      "https://x.com/naxoratech",
    ],
  };
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark">
        {children}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
