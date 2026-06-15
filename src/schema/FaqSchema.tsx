import Script from "next/script";

export default function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "How long does development take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines vary based on complexity. A simple web application might take 4-6 weeks, while a complex enterprise AI solution could take 3-6 months. We provide detailed timelines during the discovery phase.",
        },
      },
      {
        "@type": "Question",
        name: "What industries do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have deep expertise across Healthcare, Fintech, Real Estate, E-commerce, Logistics, and SaaS. However, our technology solutions are adaptable and we frequently partner with businesses in other sectors.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide support after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer comprehensive maintenance and support packages including monitoring, security updates, bug fixes, and continuous optimization.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build custom AI solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We specialize in AI agents, LLM integrations, predictive analytics, and business workflow automation.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use modern technologies including React, Next.js, Node.js, Python, AWS, and leading AI frameworks.",
        },
      },
      {
        "@type": "Question",
        name: "What are your pricing models?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer fixed-price, time and materials, and dedicated team engagement models depending on project requirements.",
        },
      },
    ],
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}