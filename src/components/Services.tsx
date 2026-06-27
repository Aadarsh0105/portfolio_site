"use client";

import { motion } from 'framer-motion';
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="pt-10 pb-8 md:pt-16 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Technology Solutions
          </h3>
          <p className="text-light dark:text-gray-400 text-lg">
            We provide end-to-end development and consulting services to help
            you build, scale, and optimize your digital products.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) =>
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1
                }}
                className="glass-card p-4 md:p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">

                <div
                  className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>

                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <ul className="hidden sm:block space-y-2">
                  {service.features.slice(0, 4).map((feature, j) => (
                    <li
                      key={j}
                      className="text-sm text-light dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="sm:hidden grid grid-cols-2 gap-x-3 gap-y-2">
                  {service.features.slice(0, 4).map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-[11px] text-light dark:text-gray-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Link>
          )}
        </div> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(idx * 0.05, 0.3),
                  ease: 'easeOut'
                }}>

                <Link href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col rounded-3xl bg-white border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${service.bg} mb-5`}>

                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 flex-1">
                    {service.shortDescription}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${service.color}`}>

                    Explore service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}