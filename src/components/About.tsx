"use client"

import { motion } from 'framer-motion';
import { ZapIcon, DollarSignIcon, SparklesIcon } from 'lucide-react';
const HIGHLIGHTS = [
{
  title: 'Fast Delivery',
  description:
  'Get your website up and running in days, not months. We use modern tools to accelerate development.',
  icon: ZapIcon,
  color: 'text-amber-500',
  bg: 'bg-amber-500/10'
},
{
  title: 'Affordable Pricing',
  description:
  'Premium quality without the premium price tag. Transparent pricing starting at just $5.',
  icon: DollarSignIcon,
  color: 'text-emerald-500',
  bg: 'bg-emerald-500/10'
},
{
  title: 'Modern Design',
  description:
  'Clean, futuristic, and conversion-optimized designs that make your brand stand out.',
  icon: SparklesIcon,
  color: 'text-accent-start',
  bg: 'bg-accent-start/10'
}];

export function About() {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-3xl md:text-4xl font-bold mb-6">
            
            We build the web for{' '}
            <span className="text-gradient">innovators</span>
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
            className="text-lg text-text-secondary leading-relaxed">
            
            LaunchFast is a digital services agency dedicated to helping
            startups and small businesses establish a powerful online presence.
            We believe that high-quality web design should be accessible to
            everyone, which is why we combine speed, affordability, and
            cutting-edge aesthetics.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
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
                className="p-8 rounded-2xl bg-background border border-border hover:border-accent-start/50 transition-colors group">
                
                <div
                  className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}