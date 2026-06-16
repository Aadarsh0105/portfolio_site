import { SiteShell } from '@/components/SiteShell';
import { Pricing } from '@/components/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing",

  description:
    "Explore affordable pricing plans for AI development, web development, mobile apps, SEO optimization, cloud solutions, automation, and digital transformation services from Naxora Technology.",

  keywords: [
    "Naxora Technology Pricing",
    "AI Development Cost",
    "Web Development Pricing",
    "Mobile App Development Cost",
    "SEO Services Pricing",
    "Cloud Solutions Pricing",
    "Automation Services",
    "Software Development Packages",
  ],

  alternates: {
    canonical: "https://naxoratechnology.com/pricing",
  },

  openGraph: {
    title: "Pricing | Naxora Technology",
    description:
      "View pricing plans for AI, software development, SEO, cloud solutions, automation, and digital transformation services.",
    url: "https://naxoratechnology.com/pricing",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pricing | Naxora Technology",
    description:
      "Transparent pricing for AI, software development, SEO, cloud, and automation services.",
  },
};

export default function PricingPage() {
  return (
    <SiteShell>
      <main className="bg-white text-dark pt-12">
        <Pricing />
      </main>
    </SiteShell>
  );
}
