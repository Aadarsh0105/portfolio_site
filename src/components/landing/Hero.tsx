"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Check,
} from "lucide-react";

import ContactModal from "./ContactModal";

interface HeroProps {
  type: "web" | "app";
}

const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER;
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const DATA = {
  web: {
    badge: "Professional Website Development",
    eyebrow: "01 / WEBSITE SOLUTIONS",

    title: "Give Your Business",
    highlight: "A Better Website.",

    subtitle:
      "Get a modern, mobile-friendly website that showcases your business, builds customer trust and helps you get more enquiries.",

    price: "₹9,999",
    priceLabel: "WEBSITE DEVELOPMENT",

    priceDescription:
      "Everything you need to get your business online.",

    priceNote:
      "Let's create a website for your business.",

    primaryCTA: "Build My Website",
    secondaryCTA: "Talk to Our Team",

    benefits: [
      "Custom Website Design",
      "Mobile Friendly",
      "SEO Ready",
    ],

    background: "#EFF8FF",
    accentBg: "#FFFFFF",
    accentBorder: "#D8E9FF",
    decoration: "#D5EAFE",
    highlightColor: "#2563EB",
  },

  app: {
    badge: "Android & iOS App Development",
    eyebrow: "02 / MOBILE APP SOLUTIONS",

    title: "Turn Your Idea",
    highlight: "Into a Mobile App.",

    subtitle:
      "Build your own Android and iPhone app with an easy-to-use design, useful features and a connected backend.",

    price: "₹14,999",
    priceLabel: "MOBILE APP DEVELOPMENT",

    priceDescription:
      "Start turning your business idea into a mobile app.",

    priceNote:
      "Let's discuss the app you want to build.",

    primaryCTA: "Build My App",
    secondaryCTA: "Discuss Your Idea",

    benefits: [
      "Android & iOS",
      "Easy-to-Use Design",
      "Custom Backend",
    ],

    background: "#EAF3FF",
    accentBg: "#FFFFFF",
    accentBorder: "#C9DFFF",
    decoration: "#C8E1FF",
    highlightColor: "#1677D2",
  },
} as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero({ type }: HeroProps) {
  const page = DATA[type];

  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section
        className="relative flex min-h-[650px] flex-col overflow-hidden px-5"
        style={{
          backgroundColor: page.background,
        }}
      >
        {/* =================================
            BACKGROUND PATTERNS
        ================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* WEBSITE: Architectural Grid */}
          {type === "web" && (
            <>
              <div
                className="absolute inset-0 opacity-[0.20]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #93BDF2 1px, transparent 1px),
                    linear-gradient(to bottom, #93BDF2 1px, transparent 1px)
                  `,
                  backgroundSize: "58px 58px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 10%, transparent 85%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 10%, transparent 85%)",
                }}
              />

              {/* Soft blue background lighting */}
              <div
                className="absolute -left-48 -top-48 h-[480px] w-[480px] rounded-full opacity-50 blur-[110px]"
                style={{
                  backgroundColor: "#D5EAFE",
                }}
              />

              <div
                className="absolute -bottom-52 -right-48 h-[500px] w-[500px] rounded-full opacity-50 blur-[120px]"
                style={{
                  backgroundColor: "#C8E5FF",
                }}
              />

              {/* Architectural circular outlines */}
              <div
                className="absolute -left-64 top-1/2 h-[580px] w-[580px] -translate-y-1/2 rounded-full border opacity-40"
                style={{
                  borderColor: "#93BDF2",
                }}
              />

            </>
          )}

          {/* MOBILE APP: Dot Matrix */}
          {type === "app" && (
            <>
              <div
                className="absolute inset-0 opacity-[0.22]"
                style={{
                  backgroundImage:
                    "radial-gradient(#62A5E8 1.2px, transparent 1.2px)",
                  backgroundSize: "25px 25px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 10%, transparent 85%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 10%, transparent 85%)",
                }}
              />

              {/* Soft blue lighting */}
              <div
                className="absolute -left-48 -top-48 h-[480px] w-[480px] rounded-full opacity-50 blur-[110px]"
                style={{
                  backgroundColor: "#C8E1FF",
                }}
              />

              <div
                className="absolute -bottom-52 -right-48 h-[500px] w-[500px] rounded-full opacity-50 blur-[120px]"
                style={{
                  backgroundColor: "#BEDAFF",
                }}
              />

              {/* Orbital Pattern */}
              <svg
                className="absolute -right-36 -top-32 h-[560px] w-[560px] opacity-40"
                viewBox="0 0 550 550"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="275"
                  cy="275"
                  r="110"
                  stroke="#70A8E8"
                  strokeWidth="1"
                />

                <circle
                  cx="275"
                  cy="275"
                  r="175"
                  stroke="#70A8E8"
                  strokeWidth="1"
                />

                <circle
                  cx="275"
                  cy="275"
                  r="240"
                  stroke="#70A8E8"
                  strokeWidth="1"
                />

                <circle
                  cx="430"
                  cy="180"
                  r="5"
                  fill="#1677D2"
                />

                <circle
                  cx="125"
                  cy="360"
                  r="4"
                  fill="#1677D2"
                />
              </svg>
            </>
          )}

        </div>

        {/* =================================
            HEADER / LOGO
        ================================= */}

        <header className="relative z-20 mx-auto w-full max-w-6xl pt-5 md:pt-6">
          <div className="flex items-center justify-start">

            <Image
              src="/logo1.png"
              alt="Naxora Technology"
              width={180}
              height={60}
              priority
              className="h-auto w-[125px] object-contain sm:w-[145px]"
            />

          </div>
        </header>

        {/* =================================
            MAIN HERO CONTENT
        ================================= */}

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-8 md:py-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_0.8fr] lg:gap-16">

            {/* LEFT CONTENT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="text-center lg:text-left"
            >

              {/* Service Badge */}
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-2.5 py-1 shadow-sm">

                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: page.highlightColor,
                    }}
                  />

                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                    {page.badge}
                  </span>

                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeUp}
                className="mt-4 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#14264B] sm:text-5xl md:text-6xl lg:text-[62px]"
              >
                {page.title}

                <span
                  className="mt-1 block"
                  style={{
                    color: page.highlightColor,
                  }}
                >
                  {page.highlight}
                </span>
              </motion.h1>

              {/* Mobile Price - Below Heading */}
              <div className="mt-5 lg:hidden">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Starting from
                </p>

                <p className="mt-1 text-3xl font-extrabold tracking-tight text-[#14264B]">
                  {page.price}
                </p>
              </div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 lg:mx-0 md:text-lg"
              >
                {page.subtitle}
              </motion.p>

              {/* Service Benefits */}
              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start"
              >
                {page.benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      style={{
                        color: page.highlightColor,
                      }}
                    />

                    {item}
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
              >

                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 active:scale-95"
                >
                  <Rocket size={17} />

                  {page.primaryCTA}

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/90 px-7 py-3 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-1 hover:border-blue-400 hover:bg-white"
                >
                  <MessageCircle
                    size={17}
                    className="text-green-600"
                  />

                  {page.secondaryCTA}
                </a>

              </motion.div>

              {/* Supporting Text */}
              <motion.p
                variants={fadeUp}
                className="mt-5 text-xs text-slate-500"
              >
                Free initial consultation · No obligation to get started
              </motion.p>

            </motion.div>

            {/* =================================
                RIGHT PRICING PANEL
            ================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="relative mx-auto hidden w-full max-w-[390px] lg:mx-0 lg:ml-auto lg:block"
            >

              <div
                className="relative overflow-hidden rounded-3xl border p-7 shadow-[0_20px_70px_rgba(37,99,235,0.09)] sm:p-9"
                style={{
                  backgroundColor: page.accentBg,
                  borderColor: page.accentBorder,
                }}
              >

                {/* Top Accent */}
                <div
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{
                    backgroundColor: page.highlightColor,
                  }}
                />

                {/* Pricing Category */}
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: page.highlightColor,
                  }}
                >
                  {page.priceLabel}
                </p>

                {/* Price Label */}
                <p className="mt-8 text-sm font-medium text-slate-500">
                  Starting from
                </p>

                {/* Price */}
                <h2 className="mt-2 whitespace-nowrap text-5xl font-extrabold tracking-tight text-[#14264B] sm:text-6xl">
                  {page.price}
                </h2>

                {/* Pricing Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {page.priceDescription}
                </p>

                <div className="my-7 h-px bg-slate-200" />

                {/* Supporting Content */}
                <div className="flex items-start gap-3">

                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: page.background,
                      color: page.highlightColor,
                    }}
                  >
                    <Rocket size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#14264B]">
                      Ready to get started?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {page.priceNote}
                    </p>
                  </div>

                </div>

                {/* Pricing CTA */}
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                >
                  Get Started

                  <ArrowUpRight size={17} />
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Contact us for a detailed project quote
                </p>

              </div>

            </motion.div>

          </div>

          {/* =================================
              BOTTOM BRAND LINE
          ================================= */}

          <div className="mt-12 border-t border-slate-300/60 pt-5">

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-slate-500">

              <span>NAXORA TECHNOLOGY</span>

              <span>
                Ideas into digital experiences.
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* =================================
          MOBILE STICKY CTA
      ================================= */}

      <div className="fixed bottom-0 left-0 right-0 z-[999] grid grid-cols-2 border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl md:hidden">

        {/* Call Button */}
        <a
          href={`tel:${PHONE}`}
          className="flex h-14 items-center justify-center gap-2 bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Phone size={17} />

          Call Now
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 items-center justify-center gap-2 bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          <MessageCircle size={17} />

          WhatsApp
        </a>

      </div>

      {/* CONTACT MODAL */}
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
