import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: {
    absolute: "Naxora Technology | Web, App & AI Development",
  },
  description:
    "Naxora Technology builds business websites, mobile apps, custom software and AI automation solutions. Based in Bhopal, India, we help businesses turn ideas into digital products.",
  keywords: [
    "software development company Bhopal",
    "web development company in Bhopal",
    "mobile app development company Bhopal",
    "custom software development company",
    "AI development company",
    "AI automation solutions",
    "Naxora Technology",
  ],
  alternates: {
    canonical: "https://naxoratechnology.com",
  },
  openGraph: {
    title: "Naxora Technology | Web, App & AI Development",
    description:
      "Business websites, mobile apps, custom software and AI automation solutions from Naxora Technology in Bhopal, India.",
    url: "https://naxoratechnology.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naxora Technology | Web, App & AI Development",
    description:
      "Business websites, mobile apps, custom software and AI automation solutions from Naxora Technology in Bhopal, India.",
  },
};

export default function Home() {
  return <HomePage />;
}
