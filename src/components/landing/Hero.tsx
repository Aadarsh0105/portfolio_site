"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Rocket, Phone, MessageCircle, ShieldCheck, Clock3, Star, ChevronDown, CheckCircle2 } from "lucide-react";
import ContactModal from "./ContactModal";

interface HeroProps {
  type: "web" | "app";
}

const PHONE = process.env.NEXT_PUBLIC_PHONE;
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP;

const DATA = {
  web: {
    badge: "Professional Website Development",
    title: "Professional Business Website",
    subtitle: "Build a modern, SEO-friendly and lightning-fast business website that converts visitors into customers.",
    price: "₹9,999",
    heroImage: "/logo2.png",
  },
  app: {
    badge: "Android & iOS App Development",
    title: "Professional Mobile App",
    subtitle: "Launch your Android & iOS application with beautiful UI, secure backend and premium performance.",
    price: "₹14,999",
    heroImage: "/logo2.png",
  },
} as const;

const TRUST = [
  "SEO Ready",
  "Fast Delivery",
  "Admin Panel",
  "Premium UI",
  "Lifetime Support",
];

const STATS = [
  {
    value: 10,
    suffix: "+",
    title: "Projects",
  },
  {
    value: 7,
    suffix: " Days",
    title: "Delivery",
  },
  {
    value: 100,
    suffix: "%",
    title: "Satisfaction",
  },
  {
    value: 30,
    suffix: " Min",
    title: "Response",
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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, {
    once: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const duration = 1500;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero({
  type,
}: HeroProps) {
  const page = DATA[type];
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-[#050816] text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-[-280px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[170px]" />
          <div className="absolute -left-48 top-48 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[150px]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pt-10 text-center">
          {/* Logo */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Image src="/logo2.png" alt="Naxora Technology" width={180} height={60} priority />
          </motion.div>
          {/* Offer Badge */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .1 }} className="mt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-1.5 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-blue-200">
                {page.badge}
              </span>
            </div>
          </motion.div>
          {/* Heading */}
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .2 }}
            className="mt-8 max-w-5xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {page.title}
          </motion.h1>
          {/* Price */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .3 }} className="mt-8">
            <p className="text-sm uppercase tracking-[0.20em] text-blue-300">
              STARTING FROM
            </p>
            <h2 className="mt-3 bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-6xl font-black text-transparent drop-shadow-[0_0_60px_rgba(37,99,235,.55)] md:text-[120px]">
              {page.price}
            </h2>
          </motion.div>
          {/* Subtitle */}
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .4 }}
            className="mt-5 max-w-3xl text-md leading-6 text-slate-300 md:text-lg">
            {page.subtitle}
          </motion.p>
          {/* Trust */}
          <motion.div variants={container} initial="hidden" animate="visible" className="mt-10 flex flex-wrap justify-center gap-3">
            {TRUST.map((item) => (
              <motion.div key={item} variants={fadeUp}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl">
                <CheckCircle2 size={16} className="text-green-400" />
                <span className="text-sm text-slate-200">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
          {/* CTA */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .55 }} className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 px-6 py-3 text-lg font-bold text-white shadow-[0_20px_60px_rgba(37,99,235,.4)] transition-all hover:scale-105 active:scale-95">
              <Rocket className="mr-2 h-5 w-5" />
              Start your Project
            </button>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-green-500/40 bg-green-500/10 px-6 py-3 text-lg font-semibold text-green-300 transition-all hover:bg-green-600 hover:text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </a>
          </motion.div>
          {/* Trust Line */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .65 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-green-400" />
              Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-blue-400" />
              Response within 30 Minutes
            </div>
          </motion.div>

          <div className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-8 border-t border-white/10 pt-6 md:grid-cols-4">
            {STATS.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-4xl font-black text-transparent">
                  <Counter value={item.value} suffix={item.suffix} />
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =========================
        MOBILE STICKY CTA
    ========================= */}
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 1 }} className="fixed bottom-0 left-0 right-0 z-[999] md:hidden">
        <div className="grid grid-cols-2 overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          {/* Call */}
          <a href={`tel:${PHONE}`} className="flex h-16 items-center justify-center gap-2 bg-blue-600 text-base font-semibold text-white transition hover:bg-blue-700 active:scale-95">
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
            className="flex h-16 items-center justify-center gap-2 bg-green-600 text-base font-semibold text-white transition hover:bg-green-700 active:scale-95">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </motion.div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}