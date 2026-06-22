"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, LockKeyhole, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      router.push("/nxr-admin-portal-9x7k/dashboard");
      router.refresh();
    } catch {
      setError("Unable to reach the login service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_40%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_35%),radial-gradient(circle_at_bottom_left,white,transparent_30%)]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/15">
              <Image
                src="/logo1.png"
                alt="Naxora Technology"
                width={233}
                height={64}
                className="h-10 w-auto"
                priority
              />
            </div>

            <h1 className="mt-10 text-4xl font-bold leading-tight max-w-md">
              Naxora Admin Portal
            </h1>
            <p className="mt-4 text-base leading-7 text-white/85 max-w-md">
              Secure access for managing blogs, content updates, and internal admin workflows.
            </p>
          </div>

          <div className="relative z-10 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center">
                <LockKeyhole size={16} />
              </div>
              Protected admin access
            </div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center">
                <Mail size={16} />
              </div>
              Login with your admin email
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="lg:hidden mb-8 text-center">
              <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <Image
                  src="/logo1.png"
                  alt="Naxora Technology"
                  width={233}
                  height={64}
                  className="h-10 w-auto"
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold text-slate-950">Naxora Admin Portal</h1>
              <p className="mt-2 text-sm text-slate-500">
                Secure access for managing blogs and content updates.
              </p>
            </div>

            <div className="mb-8 hidden lg:block">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                Welcome back
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                Sign in to continue
              </h2>
              <p className="mt-2 text-slate-500 leading-7">
                Enter your admin credentials to access the dashboard and blog management tools.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@naxora.com"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {error ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
                {loading ? "Signing in..." : "Login to Dashboard"}
                {!loading ? <ArrowRight size={18} /> : null}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
