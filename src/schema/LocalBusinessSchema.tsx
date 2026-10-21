import Script from "next/script";
import { siteConfig } from "@/lib/seo";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Naxora Technology",

    url: "https://naxoratechnology.com",

    logo: "https://naxoratechnology.com/logo1.png",

    image: "https://naxoratechnology.com/logo1.png",

    telephone: siteConfig.phone,

    email: "contact@naxoratechnology.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Vrindavan Nagar, Ayodhya Bypass",
      addressLocality: "Bhopal",
      postalCode: "462022",
      addressCountry: "IN",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Bhopal",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],

    priceRange: "$$",

    sameAs: [
      "https://www.linkedin.com/company/naxoratechnology",
      "https://www.facebook.com/naxoratechnology/",
      "https://www.instagram.com/naxoratechnology/",
      "https://x.com/naxoratech",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      email: "contact@naxoratechnology.com",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
