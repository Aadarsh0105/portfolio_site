import { SiteShell } from '@/components/SiteShell';
import { Contact } from '@/components/Contact';
import { Metadata } from 'next';
import LocalBusinessSchema from '@/schema/LocalBusinessSchema';

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Get in touch with Naxora Technology for AI development, web development, mobile app development, SEO optimization, cloud solutions, automation, and digital transformation services.",

  alternates: {
    canonical: "https://naxoratechnology.com/contact",
  },

  openGraph: {
    title: "Contact | Naxora Technology",
    description:
      "Contact Naxora Technology to discuss your next AI, software, mobile app, SEO, cloud, or automation project.",
    url: "https://naxoratechnology.com/contact",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | Naxora Technology",
    description:
      "Let's discuss your next software, AI, SEO, or digital transformation project.",
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <SiteShell>
        <main className="bg-white text-dark">
          <Contact />
        </main>
      </SiteShell>
    </>
  );
}
