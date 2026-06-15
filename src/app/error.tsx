"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-4">
          Something went wrong
        </h1>

        <p className="text-light mb-8">
          An unexpected error occurred.
        </p>

        <button
          onClick={() => reset()}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}