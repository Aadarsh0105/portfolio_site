import { SiteShell } from '@/components/SiteShell';
import { Metadata } from 'next';
import { FAQ } from '@/components/FAQ';
import FaqSchema from '@/schema/FaqSchema';

export const metadata: Metadata = {
    title: "FAQ",

    description:
        "Find answers to common questions about AI development, software development, web applications, mobile apps, SEO services, cloud solutions, automation, pricing, and support from Naxora Technology.",

    alternates: {
        canonical: "https://naxoratechnology.com/faq",
    },

    openGraph: {
        title: "FAQ | Naxora Technology",
        description:
            "Frequently asked questions about our AI, software development, SEO, cloud, and digital transformation services.",
        url: "https://naxoratechnology.com/faq",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "FAQ | Naxora Technology",
        description:
            "Answers to common questions about Naxora Technology services and solutions.",
    },
};

export default function FaqPage() {
    return (
        <>
            <FaqSchema />
            <SiteShell>
                <main className="bg-white text-dark">
                    <FAQ />
                </main>
            </SiteShell>
        </>
    );
}
