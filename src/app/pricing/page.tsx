import { SiteShell } from '@/components/SiteShell';
import { Pricing } from '@/components/Pricing';

export default function PricingPage() {
  return (
    <SiteShell>
      <main className="bg-white text-dark">
        <Pricing />
      </main>
    </SiteShell>
  );
}
