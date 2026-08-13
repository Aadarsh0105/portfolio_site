"use client";

import { motion } from "framer-motion";
import {
  Smartphone, MonitorSmartphone, Gauge, SearchCheck, ShieldCheck, LayoutDashboard, ShoppingCart, CreditCard,
  BellRing, BarChart3, Cloud, Headphones
} from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description: "A premium experience that looks great across mobiles, tablets, laptops and large screens.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed around mobile users so your customers can browse and contact you effortlessly.",
  },
  {
    icon: Gauge,
    title: "Lightning Fast",
    description: "Performance-focused development for faster loading, smoother interactions and better user experience.",
  },
  {
    icon: SearchCheck,
    title: "SEO Ready",
    description: "Search-friendly structure with proper metadata, headings and technical foundations for Google.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Panel",
    description: "Manage your website content, products, enquiries or other business data without depending on a developer.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Ready",
    description: "Build product catalogs, shopping carts, checkout flows and complete online selling experiences.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Connect popular payment solutions and give your customers a smooth and secure checkout experience.",
  },
  {
    icon: BellRing,
    title: "Lead & Enquiry System",
    description: "Capture customer enquiries and connect your website with WhatsApp, email and other business channels.",
  },
  {
    icon: BarChart3,
    title: "Analytics Ready",
    description: "Set up your digital presence for tracking traffic, conversions and campaign performance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    description: "Built with modern development practices to provide a reliable and maintainable digital product.",
  },
  {
    icon: Cloud,
    title: "Deployment Support",
    description: "We help take your website or application from development to a live production environment.",
  },
  {
    icon: Headphones,
    title: "Post-Launch Support",
    description: "Get assistance after launch when you need updates, fixes or guidance for your digital product.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-16 text-white">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-250px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[150px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
          transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
            What's Included
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Everything you need to
            <span className="pb-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              grow online.
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            From design and development to SEO, integrations and launch
            support, we build your digital product with the essentials
            your business actually needs.
          </p>
        </motion.div>
        {/* Main Feature Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.04 }} whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06]">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/20 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                {/* Content */}
                <h3 className="relative mt-6 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
                {/* Accent */}
                <div className="mt-6 h-px w-10 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}