export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Naxora Technology",
    alternateName: "Naxora",
    url: "https://naxoratechnology.com",
    logo: "https://naxoratechnology.com/logo1.png",
    email: "contact@naxoratechnology.com",
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    sameAs: [
      "https://www.linkedin.com/company/naxoratechnology",
    //   "https://instagram.com/naxoratechnology",
    //   "https://facebook.com/naxoratechnology",
    //   "https://x.com/naxoratechnology"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}