"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Layers3,
  Palette,
  Globe,
  Server,
  GitBranch,
  ShieldCheck,
  Zap,
  Settings2,
} from "lucide-react";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: Code2,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    name: "Next.js",
    category: "Web Development",
    icon: Globe,
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: Layers3,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: Code2,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    name: "TypeScript",
    category: "Programming",
    icon: Code2,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: Server,
    color: "text-slate-700",
    bg: "bg-slate-100",
  },
  {
    name: "PHP",
    category: "Backend",
    icon: Code2,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    name: "WordPress",
    category: "CMS",
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: Database,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    name: "Firebase",
    category: "Backend & Cloud",
    icon: Cloud,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    name: "Flutter",
    category: "Mobile Apps",
    icon: Smartphone,
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    name: "React Native",
    category: "Mobile Apps",
    icon: Smartphone,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: Cloud,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    name: "Microsoft Azure",
    category: "Cloud",
    icon: Cloud,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: Server,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    name: "Tailwind CSS",
    category: "UI Development",
    icon: Palette,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    name: "Bootstrap",
    category: "UI Development",
    icon: Palette,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    name: "REST APIs",
    category: "Integration",
    icon: Settings2,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Modern Technology",
    description:
      "We use proven modern technologies to build fast, reliable and scalable digital products.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    description:
      "Your project is developed with security, maintainability and future growth in mind.",
  },
  {
    icon: Layers3,
    title: "Scalable Solutions",
    description:
      "Start with what your business needs today and scale your product as your business grows.",
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

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-250px] h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-blue-50 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-50 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
          transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            Our Technology
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Built with
            <span className="pb-2 block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              modern technology.
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We choose the right technology for your project based on
            performance, scalability, security and your long-term business
            goals.
          </p>
        </motion.div>
        {/* Technology Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;
            return (
              <motion.div key={technology.name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.04 }} whileHover={{ y: -6 }}
                className="group rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]">
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${technology.bg} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-7 w-7 ${technology.color}`} />
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-950">
                  {technology.name}
                </h3>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  {technology.category}
                </p>
              </motion.div>
            );
          })}
        </div>
        {/* Benefits */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={benefit.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}