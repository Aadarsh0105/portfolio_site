import { SiteShell } from '@/components/SiteShell';
import { Blog } from '@/components/Blog';

export default function BlogPage() {
  return (
    <SiteShell>
      <main className="bg-white text-dark">
        <Blog />
      </main>
    </SiteShell>
  );
}
