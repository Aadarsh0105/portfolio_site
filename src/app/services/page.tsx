import { SiteShell } from '@/components/SiteShell';
import { Services } from '@/components/Services';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: "Services",
  description:
    "AI Development, Web Development, Mobile App Development, Cloud Solutions and Automation Services.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <main className="bg-white text-dark">
        <Services />
      </main>
    </SiteShell>
  );
}
