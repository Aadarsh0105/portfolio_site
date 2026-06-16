import { SiteShell } from '@/components/SiteShell';
import { Blog } from '@/components/Blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Naxora Technology",
  description:
    "Insights on AI, software development, SEO, automation, cloud solutions, and digital transformation from Naxora Technology.",

  alternates: {
    canonical: "https://naxoratechnology.com/blog",
  },
  openGraph: {
    title: "Blog | Naxora Technology",
    description:
      "Insights on AI, software development, SEO, automation and digital transformation.",
    url: "https://naxoratechnology.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function BlogPage() {
  return (
    <SiteShell>
      <main className="bg-white text-dark pt-12">
        <Blog />
      </main>
    </SiteShell>
  );
}
