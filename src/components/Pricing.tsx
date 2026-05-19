"use client"

import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
const TIERS = [
{
  name: 'Starter',
  price: '5',
  description: 'Perfect for testing ideas and small personal projects.',
  features: [
  '1 Page Website',
  'Basic Responsive Design',
  'Standard Template',
  'Contact Form',
  '3 Days Delivery'],

  highlighted: false
},
{
  name: 'Professional',
  price: '49',
  description: 'Ideal for growing businesses and professional portfolios.',
  features: [
  'Up to 5 Pages',
  'Custom UI/UX Design',
  'SEO Optimization',
  'CMS Integration',
  'Analytics Setup',
  '1 Week Delivery'],

  highlighted: true
},
{
  name: 'Enterprise',
  price: '149',
  description: 'Full-scale solutions for established companies.',
  features: [
  'Unlimited Pages',
  'E-commerce Functionality',
  'Advanced Animations',
  'Custom Backend Integration',
  'Priority Support',
  '2 Weeks Delivery'],

  highlighted: false
}];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
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
            
            Simple, transparent <span className="text-gradient">pricing</span>
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
            className="text-lg text-text-secondary">
            
            No hidden fees. Choose the plan that best fits your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {TIERS.map((tier, index) =>
          <motion.div
            key={tier.name}
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
            className={`relative rounded-3xl p-8 ${tier.highlighted ? 'bg-surface border-2 border-accent-start shadow-xl shadow-accent-start/10 md:-translate-y-4' : 'bg-background border border-border'}`}>
            
              {tier.highlighted &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-accent text-white text-sm font-medium">
                  Most Popular
                </div>
            }

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-text-secondary text-sm h-10">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-text-secondary">/project</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) =>
              <li key={feature} className="flex items-start gap-3">
                    <CheckIcon
                  className={`w-5 h-5 shrink-0 ${tier.highlighted ? 'text-accent-start' : 'text-text-secondary'}`} />
                
                    <span className="text-sm">{feature}</span>
                  </li>
              )}
              </ul>

              <a
              href="#contact"
              className={`block w-full py-3 px-4 rounded-xl text-center font-medium transition-all ${tier.highlighted ? 'bg-text-primary text-background hover:opacity-90' : 'bg-surface border border-border text-text-primary hover:bg-border/50'}`}>
              
                Get Started
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}