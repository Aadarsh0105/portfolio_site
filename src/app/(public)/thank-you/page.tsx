"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Home,
  ArrowRight,
} from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-background px-6">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-secondary/10 blur-[120px]" />

      </div>

      <div className="glass-card rounded-[32px] border border-border p-8 md:p-10 text-center shadow-xl">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
        </motion.div>

        <h1 className="text-4xl font-bold mb-4">
          Thank You!
        </h1>

        <p className="max-w-md mx-auto text-light dark:text-gray-400 leading-7">
          Your message has been sent successfully.
          <br />
          Our team will review your inquiry and get back to you as soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link
            href="/"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/services"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            Explore Services
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </main>
  );
}