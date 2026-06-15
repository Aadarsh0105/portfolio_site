import Script from "next/script";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Naxora Technology",

    url: "https://naxoratechnology.com",

    logo: "https://naxoratechnology.com/logo1.png",

    image: "https://naxoratechnology.com/logo1.png",

    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER,

    email: "contact@naxoratechnology.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Vrindavan Nagar, Ayodhya Bypass",
      addressLocality: "Bhopal",
      postalCode: "462022",
      addressCountry: "IN",
    },

    areaServed: "Worldwide",

    priceRange: "$$",

    sameAs: [],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
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