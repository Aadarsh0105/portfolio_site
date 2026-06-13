import { SiteShell } from '@/components/SiteShell';
import { Contact } from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Naxora Technology for AI development, web development, mobile applications and custom software projects.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="bg-white text-dark">
        <Contact />
      </main>
    </SiteShell>
  );
}
