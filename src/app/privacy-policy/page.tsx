import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-light leading-7 mb-6">
          This page explains how we use cookies, analytics, and related tracking technologies.
        </p>
        <p className="text-light leading-7 mb-6">
          If you need the full policy text customized for your business, this page is now in place for SEO and navigation.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
