import Script from "next/script";

export default function AboutSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Naxora Technology",
    url: "https://naxoratechnology.com/about",
    description:
      "Learn about Naxora Technology, our mission, expertise, and technology consulting services.",
  };

  return (
    <Script
      id="about-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}