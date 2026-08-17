"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Store,
  Truck,
  Users,
  ShoppingCart,
  MapPin,
} from "lucide-react";

const projects = [
  {
    name: "Zinokart",
    category: "Multi-Vendor Marketplace",
    tagline: "One marketplace. Multiple everyday services.",
    description:
      "A complete multi-category marketplace platform connecting customers, stores and delivery partners across food delivery, grocery, shopping, pharmacy, parcel delivery and cab booking.",
    image: "/zinokart.png",
    website: "https://zinokart.com/",
    accent: "from-blue-600 to-cyan-500",

    platforms: [
      "Website",
      "Customer App",
      "Store App",
      "Delivery App",
    ],

    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
    ],

    features: [
      "Multi-category marketplace",
      "Customer shopping & ordering",
      "Store/vendor management",
      "Delivery partner management",
      "Real-time order tracking",
      "Multiple payment methods",
    ],

    stats: [
      {
        icon: Users,
        value: "3",
        label: "Mobile Apps",
      },
      {
        icon: Store,
        value: "Multi",
        label: "Vendor Platform",
      },
      {
        icon: Truck,
        value: "Live",
        label: "Delivery Tracking",
      },
    ],
  },

  {
    name: "Agri Hitech Kisan",
    category: "Agriculture Marketplace",
    tagline: "Connecting farmers, buyers & agriculture dealers.",
    description:
      "A digital agriculture marketplace designed for both B2B and B2C users, helping businesses buy and sell agricultural products while customers discover products and nearby dealers.",
    image: "/agrihitech.png",
    website: "https://agrihitech-kisan.vercel.app/",
    accent: "from-green-600 to-emerald-500",

    platforms: [
      "Website",
      "Mobile App",
      "B2B",
      "B2C",
    ],

    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
    ],

    features: [
      "B2B agriculture marketplace",
      "B2C product discovery",
      "Product buying & selling",
      "Nearest dealer discovery",
      "Agriculture product details",
      "Mobile & web experience",
    ],

    stats: [
      {
        icon: ShoppingCart,
        value: "B2B",
        label: "Marketplace",
      },
      {
        icon: Users,
        value: "B2C",
        label: "Customer Platform",
      },
      {
        icon: MapPin,
        value: "Nearby",
        label: "Dealer Discovery",
      },
    ],
  },

  {
    name: "SabziWalah",
    category: "Vegetable & Grocery eCommerce",
    tagline: "A complete online shopping experience for fresh products.",
    description:
      "A multi-store vegetable and grocery eCommerce platform with centralized administration, receptionist-based store operations, product management and inventory workflows.",
    image: "/sabziwalah.png",
    website: "https://sabziwalah.com/",
    accent: "from-orange-500 to-green-500",

    platforms: [
      "Website",
      "Admin Panel",
      "Receptionist Panel",
    ],

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Payment Gateway",
      "Admin Dashboard",
    ],

    features: [
      "Multi-store management",
      "Product & category management",
      "Store-wise inventory",
      "Receptionist operations",
      "Online ordering",
      "Order & payment management",
    ],

    stats: [
      {
        icon: Store,
        value: "Multi",
        label: "Store Support",
      },
      {
        icon: ShoppingCart,
        value: "Online",
        label: "Ordering",
      },
      {
        icon: Users,
        value: "Admin",
        label: "Management",
      },
    ],
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

export default function ProjectsShowcase() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            Our Projects
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Real products.
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Real business impact.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From multi-vendor marketplaces to agriculture platforms and
            eCommerce systems, we build digital products designed around
            real business requirements.
          </p>
        </motion.div>

        {/* =========================
            PROJECTS
        ========================= */}

        <div className="mt-16 space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              variants={fadeUp}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_15px_60px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_80px_rgba(37,99,235,0.12)]"
            >

              {/* ==================================================
                  TOP ROW
                  IMAGE + BASIC DETAILS
              ================================================== */}

              <div
                className={`grid items-stretch lg:grid-cols-2 ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >

                {/* ==================================================
                    PROJECT IMAGE
                ================================================== */}

                <div
                  className={`relative bg-slate-950 p-4 sm:p-6 lg:p-7 ${
                    index % 2 === 1
                      ? "lg:border-l"
                      : "lg:border-r"
                  } border-slate-800`}
                >
                  {/* Accent glow */}

                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`}
                  />

                  {/* 16:9 IMAGE AREA */}

                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">

                    {/* Browser Header */}

                    <div className="absolute left-0 right-0 top-0 z-10 flex h-8 items-center gap-1.5 border-b border-white/10 bg-slate-950 px-3 sm:h-9 sm:px-4">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                      <div className="ml-2 h-4 flex-1 rounded-full bg-white/5 sm:ml-3" />
                    </div>

                    {/* Screenshot */}

                    <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden bg-white sm:top-9">
                      <img
                        src={project.image}
                        alt={`${project.name} project showcase`}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                      />

                      {/* Bottom fade */}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    BASIC PROJECT DETAILS
                ================================================== */}

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                  {/* Category */}

                  <span
                    className={`bg-gradient-to-r ${project.accent} bg-clip-text text-sm font-black uppercase tracking-[0.15em] text-transparent`}
                  >
                    {project.category}
                  </span>

                  {/* Title */}

                  <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                    {project.name}
                  </h3>

                  {/* Tagline */}

                  <p className="mt-3 text-lg font-semibold text-slate-700">
                    {project.tagline}
                  </p>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {project.description}
                  </p>

                  {/* Platforms */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {platform.includes("App") ? (
                          <Smartphone className="h-3.5 w-3.5 text-blue-600" />
                        ) : platform.includes("Panel") ? (
                          <Store className="h-3.5 w-3.5 text-blue-600" />
                        ) : (
                          <Globe className="h-3.5 w-3.5 text-blue-600" />
                        )}

                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ==================================================
                  FULL WIDTH PROJECT INFORMATION
              ================================================== */}

              <div className="border-t border-slate-200 bg-white px-7 py-8 sm:px-10 sm:py-10 lg:px-12">

                <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">

                  {/* =========================
                      FEATURES
                  ========================= */}

                  <div>
                    <div className="mb-5 text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                      Key Features
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* =========================
                      STATS
                  ========================= */}

                  <div>
                    <div className="mb-5 text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                      Project Highlights
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {project.stats.map((stat, statIndex) => {
                        const Icon = stat.icon;

                        return (
                          <div
                            key={statIndex}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="h-5 w-5 text-blue-600" />

                              <span className="text-xl font-black text-slate-950">
                                {stat.value}
                              </span>
                            </div>

                            <div className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                              {stat.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    TECHNOLOGY + BUTTON
                ================================================== */}

                <div className="mt-8 flex flex-col gap-6 border-t border-slate-200 pt-7 lg:flex-row lg:items-end lg:justify-between">

                  {/* Technology */}

                  <div>
                    <div className="mb-3 text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                      Technology
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Project */}

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    Visit Live Project

                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="mt-14 text-center"
        >
          <p className="text-sm text-slate-500">
            Have a project in mind?
          </p>

          <a
            href="#get-quote"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
          >
            Let's build your next digital product

            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}