"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Gauge, Headphones, Rocket, SearchCheck, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Premium UI & UX",
    description: "Modern, clean and conversion-focused designs built specifically around your business and customers.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Get your website or application launched quickly without compromising on quality, performance or design.",
  },
  {
    icon: SearchCheck,
    title: "SEO Ready",
    description: "Built with search-friendly structure, optimized pages and technical SEO foundations from day one.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description: "Lightning-fast experiences optimized for mobile, desktop and real-world users.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description: "Reliable technology architecture designed to support your business as it grows.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Get direct assistance from our team whenever you need help with your digital product.",
  },
];

const stats = [
  {
    value: "450+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "7 Days",
    label: "Fast Delivery",
  },
  {
    value: "30 Min",
    label: "Average Response",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-200px] top-[30%] h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            <BadgeCheck className="h-4 w-4" />
            Why Naxora
          </span>
          <h2 className="mt-6 text-4xl font-black text-slate-950 sm:text-5xl md:text-6xl">
            Built to make your
            <span className="pb-2 block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              business grow online.
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We don't just build websites and apps. We create digital
            experiences designed to attract customers, build trust and
            generate measurable business results.
          </p>
        </motion.div>
        {/* Feature Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.06 }} whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-slate-950">
                  {reason.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>
                {/* Bottom accent */}
                <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}