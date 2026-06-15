import { SiteShell } from '@/components/SiteShell';
import { About } from '@/components/About';
import { Metadata } from 'next';
import AboutSchema from '@/schema/AboutSchema';

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about Naxora Technology, a technology consulting and software development company specializing in AI solutions, web development, mobile apps, cloud solutions, automation, SEO, and digital transformation.",

  keywords: [
    "About Naxora Technology",
    "AI Development Company",
    "Software Development Company",
    "Web Development Services",
    "Mobile App Development",
    "Cloud Solutions",
    "SEO Services",
    "Digital Transformation",
  ],

  alternates: {
    canonical: "https://naxoratechnology.com/about",
  },

  openGraph: {
    title: "About Us | Naxora Technology",
    description:
      "Discover Naxora Technology's mission, expertise, and commitment to delivering AI, software, cloud, automation, and digital transformation solutions.",
    url: "https://naxoratechnology.com/about",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Naxora Technology",
    description:
      "Learn about Naxora Technology and our expertise in AI, software development, cloud solutions, SEO, and digital transformation.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSchema />

      <SiteShell>
        <main className="bg-white text-dark">
          <About />
        </main>
      </SiteShell>
    </>
  );
}
