import { siteConfig } from "@/lib/seo";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Naxora Technology",
    alternateName: "Naxora",
    url: "https://naxoratechnology.com",
    logo: "https://naxoratechnology.com/logo1.png",
    email: "contact@naxoratechnology.com",
    telephone: siteConfig.phone,
    sameAs: [
      "https://www.linkedin.com/company/naxoratechnology",
      "https://www.facebook.com/naxoratechnology/",
      "https://www.instagram.com/naxoratechnology/",
      "https://x.com/naxoratech",
    ],
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
