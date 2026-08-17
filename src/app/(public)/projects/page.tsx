import ProjectsShowcase from "@/components/ProjectsShowcase";
import { SiteShell } from "@/components/SiteShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects & Case Studies",

  description:
    "Explore websites, mobile apps, eCommerce platforms, marketplaces, and custom software products built by Naxora Technology for businesses across different industries.",

  keywords: [
    "Naxora Technology Projects",
    "Naxora Technology Portfolio",
    "Web Development Projects",
    "Mobile App Development Projects",
    "eCommerce Projects",
    "Marketplace Development Projects",
    "Software Development Portfolio",
    "Website Development Portfolio",
    "Mobile App Portfolio",
    "React Projects",
    "Next.js Projects",
    "Flutter App Projects",
    "Custom Software Projects",
    "Naxora Case Studies",
  ],

  alternates: {
    canonical: "https://naxoratechnology.com/projects",
  },

  openGraph: {
    title: "Our Projects & Case Studies | Naxora Technology",
    description:
      "Explore real-world websites, mobile apps, marketplaces, eCommerce platforms, and custom software solutions built by Naxora Technology.",
    url: "https://naxoratechnology.com/projects",
    siteName: "Naxora Technology",
    type: "website",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Naxora Technology Projects & Case Studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Projects & Case Studies | Naxora Technology",
    description:
      "Explore websites, mobile apps, eCommerce platforms, marketplaces, and custom software built by Naxora Technology.",
    images: ["/logo1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main className="bg-white text-dark pt-12">
        <ProjectsShowcase />
      </main>
    </SiteShell>
  );
}