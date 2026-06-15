"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, CheckCircle } from 'lucide-react';
const highlights = [
  {
    title: "AI & Automation",
    description:
      "Custom AI agents, workflow automation, and business process optimization.",
  },
  {
    title: "Web & Mobile Development",
    description:
      "High-performance applications built with modern technologies and best practices.",
  },
  {
    title: "SEO & Growth",
    description:
      "Technical SEO, performance optimization, and scalable digital growth strategies.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We work as an extension of your team, focused on sustainable business growth.",
  },
];

export function About() {
  return (
    <section id="about" className="pt-10 pb-5 md:pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              About Us
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Building Digital Products &
              <span className="text-gradient"> AI Solutions That Scale</span>
            </h3>
            <p className="text-light dark:text-gray-400 mb-6 text-lg leading-relaxed">
              Naxora Technology helps startups and businesses transform ideas into
              scalable digital products. From AI automation and custom software
              development to SEO and cloud solutions, we build technology that drives
              measurable business growth.
            </p>

            <p className="text-light dark:text-gray-400 mb-8 leading-relaxed">
              We combine modern engineering, user-focused design, and strategic thinking
              to deliver reliable, high-performance solutions that help organizations
              innovate faster and stay competitive.
            </p>
            <a href="#contact" className="btn-primary">
              Let's Build Something Great
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-dark mb-2">
                  {item.title}
                </h4>

                <p className="text-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>);

}
