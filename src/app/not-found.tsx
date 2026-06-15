import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>

        <h2 className="text-3xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-light mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="btn-primary"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}