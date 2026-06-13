import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-light leading-7 mb-6">
          This page provides the baseline terms page for visitors and search engines.
        </p>
        <p className="text-light leading-7 mb-6">
          Replace this with your final legal copy when ready, and the footer links will already point here.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
