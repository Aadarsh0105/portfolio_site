"use client";

import { motion } from 'framer-motion';
import {
  Bot,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Zap,
  PenTool,
  Rocket,
  Search
} from
  'lucide-react';
const services = [
  {
    icon: Globe,
    title: 'Web Development',
    features: ['Corporate Websites', 'Portals', 'E-commerce', 'Web Apps'],
    color: 'text-accent',
    bg: 'bg-accent/10'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Dev',
    features: ['Android', 'iOS', 'Cross-platform', 'PWA'],
    color: 'text-pink-500',
    bg: 'bg-pink-500/10'
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    icon: Code2,
    title: 'Custom Software',
    features: [
      'SaaS Platforms',
      'Enterprise Apps',
      'CRM Systems',
      'ERP Solutions'],

    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    features: [
      'Technical SEO',
      'On-Page SEO',
      'Keyword Research',
      'Google Rankings'
    ],
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    features: ['AI Chatbots', 'AI Agents', 'Generative AI', 'LLM Integrations'],
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    features: ['AWS', 'Azure', 'Google Cloud', 'Cloud Migration'],
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    icon: Zap,
    title: 'Automation',
    features: ['Workflow Automation', 'CRM Automation', 'BPA', 'RPA'],
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    features: [
      'Tech Consulting',
      'Legacy Modernization',
      'IT Strategy',
      'Data Analytics'],

    color: 'text-green-500',
    bg: 'bg-green-500/10'
  }
];

export function Services() {
  return (
    <section id="services" className="pt-10 pb-5 md:pt-16 bg-gray-50/50 dark:bg-white/[0.02]">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) =>
            <motion.div
              key={i}
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
                {service.features.map((feature, j) => (
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
                {service.features.map((feature, j) => (
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
          )}
        </div>
      </div>
    </section>);

}