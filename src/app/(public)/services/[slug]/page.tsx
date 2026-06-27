import { notFound } from "next/navigation";
import { Metadata } from "next";

import { SiteShell } from "@/components/SiteShell";
import { services } from "@/data/services";
import { ServiceDetail } from "@/components/ServiceDetail";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: `${service.title} | Naxora Technology`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteShell>
      <main className="bg-slate-50 text-slate-900">
        <ServiceDetail slug={slug} />
      </main>
    </SiteShell>
  );
}
