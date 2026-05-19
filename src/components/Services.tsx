"use client"

import { motion } from 'framer-motion';
import {
  CodeIcon,
  PaletteIcon,
  LayoutTemplateIcon,
  ShoppingBagIcon,
  SearchIcon } from
'lucide-react';
const SERVICES = [
{
  title: 'Website Development',
  description:
  'Custom, responsive websites built with modern frameworks for optimal performance and scale.',
  icon: CodeIcon
},
{
  title: 'UI/UX Design',
  description:
  'Intuitive and engaging user interfaces that provide seamless experiences across all devices.',
  icon: PaletteIcon
},
{
  title: 'Landing Pages',
  description:
  'High-converting landing pages designed specifically to turn your visitors into customers.',
  icon: LayoutTemplateIcon
},
{
  title: 'E-commerce Setup',
  description:
  'Complete online store solutions with secure payments and easy inventory management.',
  icon: ShoppingBagIcon
},
{
  title: 'SEO Optimization',
  description:
  'Technical and on-page SEO to improve your visibility and rank higher on search engines.',
  icon: SearchIcon
}];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2
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
            className="text-3xl md:text-4xl font-bold mb-4">
            
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
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
              delay: 0.1
            }}
            className="text-lg text-text-secondary max-w-2xl">
            
            Everything you need to launch and grow your digital presence, all in
            one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
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
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -5
                }}
                className="p-8 rounded-2xl bg-surface border border-border hover:border-accent-start/50 hover:shadow-lg hover:shadow-accent-start/5 transition-all group relative overflow-hidden">
                
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-start/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 text-text-primary group-hover:text-accent-start transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}