import { SiteShell } from '@/components/SiteShell';
import { About } from '@/components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Naxora Technology, our mission and expertise in AI, software development and digital transformation.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="bg-white text-dark">
        <About />
      </main>
    </SiteShell>
  );
}
