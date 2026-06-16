import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  Landmark,
  Home,
  GraduationCap,
  Truck,
  ShoppingBag,
  Factory,
  Plane,
  Cloud } from
'lucide-react';
const industries = [
{
  name: 'Healthcare',
  icon: HeartPulse
},
{
  name: 'Fintech',
  icon: Landmark
},
{
  name: 'Real Estate',
  icon: Home
},
{
  name: 'Education',
  icon: GraduationCap
},
{
  name: 'Logistics',
  icon: Truck
},
{
  name: 'Retail',
  icon: ShoppingBag
},
{
  name: 'Manufacturing',
  icon: Factory
},
{
  name: 'Travel',
  icon: Plane
},
{
  name: 'SaaS',
  icon: Cloud
}];

export function IndustryExpertise() {
  return (
    <section id="industries" className="pt-10 pb-5 md:pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              Industry Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Tailored Solutions For Every Sector
            </h3>
          </div>
          <p className="text-light dark:text-gray-400 max-w-md">
            We understand the unique challenges of different industries and
            build specialized solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: i * 0.05
            }}
            className="glass-card p-6 rounded-xl text-center group hover:bg-primary hover:border-primary transition-colors cursor-pointer">
            
              <industry.icon className="w-8 h-8 mx-auto mb-3 text-light dark:text-gray-400 group-hover:text-white transition-colors" />
              <div className="font-medium text-dark group-hover:text-white transition-colors">
                {industry.name}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
