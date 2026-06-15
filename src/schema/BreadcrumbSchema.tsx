import Script from "next/script";

type Props = {
  title: string;
  slug: string;
};

export default function BreadcrumbSchema({
  title,
  slug,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://naxoratechnology.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://naxoratechnology.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://naxoratechnology.com/blog/${slug}`,
      },
    ],
  };

  return (
    <Script
      id={`breadcrumb-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}