import Script from "next/script";

type BlogSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image?: string;
};

export default function BlogSchema({
  title,
  description,
  slug,
  datePublished,
  image = "https://naxoratechnology.com/logo1.png",
}: BlogSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: title,

    description,

    image,

    author: {
      "@type": "Organization",
      name: "Naxora Technology",
    },

    publisher: {
      "@type": "Organization",
      name: "Naxora Technology",

      logo: {
        "@type": "ImageObject",
        url: "https://naxoratechnology.com/logo1.png",
      },
    },

    datePublished,

    dateModified: datePublished,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://naxoratechnology.com/blog/${slug}`,
    },
  };

  return (
    <Script
      id={`blog-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}