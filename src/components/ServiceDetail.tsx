"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Minus, Plus, Sparkles } from "lucide-react";

import { services } from "@/data/services";

export function ServiceDetail({
  slug,
}: {
  slug: string;
}) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const Icon = service.icon;
  const gradient = service.gradient ?? "from-blue-500 to-cyan-400";

  return (
    <main className="py-10">
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-12 translate-x-1/3 opacity-40">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} blur-[120px]`} />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 opacity-20">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${gradient} blur-[100px]`} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <Link href="/services" className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 sm:mb-12">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-2xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.bg} border border-white/50 shadow-sm`}>
                  <Icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <span className={`rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wide ${service.bg} ${service.color}`}>
                  {service.title}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.1] sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
                {service.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-base transition-all shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)]">
                  Start your project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3 rounded-full font-semibold text-base transition-all shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
                  View all services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className={`h-4 w-4 ${service.color}`} />
                  Free consultation
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className={`h-4 w-4 ${service.color}`} />
                  Dedicated team
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className={`h-4 w-4 ${service.color}`} />
                  On-time delivery
                </span>
              </div>
            </div>

            <div className="relative w-full max-w-lg lg:ml-auto">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200/50 group">
                <div className="absolute inset-0 z-10 bg-slate-900/10 transition-colors duration-500 group-hover:bg-transparent" />
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:-bottom-8 sm:-left-8 sm:block">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${service.bg}`}>
                    <Sparkles className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Excellence in</p>
                    <p className="text-lg font-bold text-slate-900">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.stats ? (
        <section className="border-y border-slate-100 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 divide-x divide-slate-100 md:grid-cols-3">
              {service.stats.map((stat, idx) => (
                <div key={idx} className={`px-4 ${idx === 0 ? "pl-0" : ""} ${idx === 2 ? "hidden md:block" : ""}`}>
                  <p className={`bg-clip-text text-3xl font-bold text-transparent bg-gradient-to-br sm:text-4xl ${gradient}`}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-14">
            <div className="space-y-16">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-slate-900">Overview</h2>
                <p className="text-lg leading-relaxed text-slate-600">{service.overview}</p>
              </div>

              <div>
                <h2 className="mb-8 text-3xl font-bold text-slate-900">Key Features</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                      <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${service.bg}`}>
                        <CheckCircle2 className={`h-4 w-4 ${service.color}`} />
                      </div>
                      <span className="font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {service.process ? (
                <div>
                  <h2 className="mb-8 text-3xl font-bold text-slate-900">Our Process</h2>
                  <div className="relative">
                    <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 lg:block" />

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                      {service.process.map((step, idx) => (
                        <div
                          key={idx}
                          className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-slate-200/70
    bg-white
    p-6
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
    hover:border-primary/30
"
                        >
                          {/* Gradient Glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                          </div>

                          {/* Step Badge */}
                          <div className="relative flex items-center justify-between mb-8">
                            <div
                              className={`
        w-14 h-14
        rounded-2xl
        ${service.bg}
        flex
        items-center
        justify-center
        shadow-sm
      `}
                            >
                              <span className={`text-lg font-bold ${service.color}`}>
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                            </div>

                            <div className="h-px flex-1 mx-4 bg-gradient-to-r from-slate-200 to-transparent" />

                            <span className="text-xs uppercase tracking-[0.35em] text-slate-400 font-semibold">
                              Step
                            </span>
                          </div>

                          {/* Content */}

                          <h3 className="relative text-xl font-bold text-slate-900">
                            {step}
                          </h3>

                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl bg-slate-900 p-8 text-white">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <div className="h-5 w-5 text-blue-400" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="cursor-default rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {service.industries ? (
                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-6 text-xl font-bold text-slate-900">Industries We Serve</h3>
                  <ul className="space-y-3">
                    {service.industries.map((industry) => (
                      <li key={industry} className="flex items-center gap-3 font-medium text-slate-600">
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className={`rounded-3xl bg-gradient-to-br p-8 text-white lg:mt-[4.75rem] ${gradient}`}>
                <h3 className="mb-3 text-xl font-bold">Ready to start?</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/80">
                  Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
                </p>
                <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 font-bold text-slate-900 shadow-sm transition-colors hover:bg-slate-50">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.benefits ? (
        <section className="border-t border-slate-100 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <span className={`inline-block bg-clip-text text-sm font-bold uppercase tracking-wider text-transparent bg-gradient-to-r ${gradient}`}>
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why businesses trust our team
              </h2>
              <p className="mt-4 text-slate-600">
                We combine strategy, design, and execution to deliver services that feel tailored, polished, and reliable.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.bg}`}>
                    <CheckCircle2 className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.faqs && service.faqs.length > 0 ? (
        <section className="border-t border-slate-100 bg-slate-50 py-10 md:py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className={`inline-block bg-clip-text text-sm font-bold uppercase tracking-wider text-transparent bg-gradient-to-r ${gradient}`}>
                FAQ
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-slate-600">
                Everything you need to know about our {service.title.toLowerCase()} services.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="glass-card overflow-hidden rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                    >
                      <span className="pr-8 text-lg font-bold text-slate-900">
                        {faq.question}
                      </span>
                      <span
                        className={`rounded-full border p-1 transition-colors ${
                          isOpen
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 text-light dark:border-gray-600"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-5 leading-relaxed text-light dark:text-gray-400">
                            {faq.answer}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
