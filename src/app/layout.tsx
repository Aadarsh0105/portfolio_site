import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/seo";
import OrganizationSchema from "@/schema/OrganizationSchema";

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
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased light`}
    >
      <head>
        {/* Google Analytics + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SVDQE17NV9"
          strategy="afterInteractive"
        />

        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            // Google Analytics 4
            gtag('config', 'G-SVDQE17NV9', {
              page_path: window.location.pathname,
            });

            // Google Ads
            gtag('config', 'AW-18244106024');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col bg-white text-dark">
        {children}

        <OrganizationSchema />
      </body>
    </html>
  );
}