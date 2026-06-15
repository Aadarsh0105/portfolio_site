import { SiteShell } from '@/components/SiteShell';
import { Services } from '@/components/Services';
import { Metadata } from 'next';
import ServiceSchema from '@/schema/ServiceSchema';

export const metadata: Metadata = {
  title: "Services",

  description:
    "Explore Naxora Technology services including AI development, web development, mobile app development, SEO optimization, cloud solutions, automation, UI/UX design, and digital transformation.",

  keywords: [
    "AI Development Services",
    "Web Development Services",
    "Mobile App Development",
    "SEO Optimization Services",
    "Cloud Solutions",
    "Automation Services",
    "UI UX Design",
    "Custom Software Development",
    "Digital Transformation",
    "Naxora Technology",
  ],

  alternates: {
    canonical: "https://naxoratechnology.com/services",
  },

  openGraph: {
    title: "Services | Naxora Technology",
    description:
      "AI development, software development, SEO, cloud solutions, automation, and digital transformation services.",
    url: "https://naxoratechnology.com/services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | Naxora Technology",
    description:
      "Explore AI, software, SEO, cloud, automation, and digital transformation services.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />

      <SiteShell>
        <main className="bg-white text-dark">
          <Services />
        </main>
      </SiteShell>
    </>
  );
}