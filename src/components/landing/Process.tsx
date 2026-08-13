"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, TestTube2, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We understand your business and project requirements before writing a single line of code.",
    points: [
      "Understand business",
      "Project requirements",
      "Plan features & user flow",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    description: "We create a modern and intuitive interface focused on your brand, customers and conversion goals.",
    points: [
      "Modern visual design",
      "Mobile-first experience",
      "Conversion-focused layouts",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "Our developers turn the approved design into a fast, scalable and production-ready digital product.",
    points: [
      "Clean development",
      "API & integrations",
      "Responsive implementation",
    ],
  },
  {
    number: "04",
    icon: TestTube2,
    title: "Testing",
    description: "We test your website or application across devices and browsers to make sure everything works smoothly.",
    points: [
      "Responsive testing",
      "Performance checks",
      "Bug fixing & optimization",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description: "Once everything is approved, we deploy your project and help you take your digital presence live.",
    points: [
      "Production deployment",
      "Domain & hosting support",
      "Post-launch assistance",
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

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-100/60 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
          transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-600 shadow-sm">
            Our Process
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-5xl">
            From idea to <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              launch.
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            A simple and transparent process that keeps you involved from the
            first conversation to the final launch.
          </p>
        </motion.div>
        {/* Desktop Timeline */}
        <div className="relative mt-10 hidden lg:block">
          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-8 h-px bg-gradient-to-r from-blue-200 via-blue-500 to-cyan-200" />
          <div className="grid grid-cols-5 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.1 }} className="relative">
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  {/* Number */}
                  <div className="mt-5 text-center text-xs font-black tracking-[0.2em] text-blue-600">
                    STEP {step.number}
                  </div>
                  {/* Card */}
                  <div className="mt-4 min-h-[330px] rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
                    <h3 className="text-xl font-bold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                    <div className="mt-5 space-y-2.5">
                      {step.points.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-6 z-20 h-5 w-5 text-blue-400" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Mobile Timeline */}
        <div className="relative mt-16 lg:hidden">
          {/* Vertical line */}
          <div className="absolute bottom-10 left-8 top-8 w-px bg-gradient-to-b from-blue-300 via-blue-500 to-cyan-300" />
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.08 }} className="relative flex gap-5">
                  {/* Number / Icon */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
                    <div className="text-xs font-black tracking-[0.2em] text-blue-600">
                      STEP {step.number}
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                    <div className="mt-5 space-y-2.5">
                      {step.points.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}