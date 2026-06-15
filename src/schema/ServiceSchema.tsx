import Script from "next/script";

export default function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Naxora Technology",
    url: "https://naxoratechnology.com",

    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology Services",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Custom websites, web applications, portals and e-commerce development.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Android, iOS and cross-platform mobile application development.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description:
              "User experience design, wireframing, prototyping and design systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Enterprise software, SaaS platforms, CRM and ERP solutions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description:
              "Technical SEO, on-page SEO, keyword research and ranking improvements.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Development Services",
            description:
              "AI chatbots, AI agents, generative AI and LLM integrations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Solutions",
            description:
              "Cloud migration, infrastructure setup and cloud consulting.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Process Automation",
            description:
              "Workflow automation, CRM automation and business process optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Transformation",
            description:
              "Technology consulting, modernization and digital transformation services.",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}