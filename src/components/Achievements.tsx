import React from 'react';
import { motion } from 'framer-motion';
const stats = [
{
  value: '500+',
  label: 'Projects Delivered'
},
{
  value: '100+',
  label: 'Enterprise Clients'
},
{
  value: '15+',
  label: 'Countries Reached'
},
{
  value: '50+',
  label: 'Team Members'
},
{
  value: '95%',
  label: 'Client Retention'
}];

export function Achievements() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, i) =>
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
            className={i === 4 ? 'col-span-2 md:col-span-1' : ''}>
            
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white/80 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}