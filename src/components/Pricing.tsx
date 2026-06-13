"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
const plans = [
{
  name: 'Starter',
  price: '₹19,999',
  period: '',
  description:
  'Perfect for small businesses starting their digital transformation journey.',
  features: [
  {
    name: 'Basic Web Development',
    included: true
  },
  {
    name: 'Standard UI/UX Design',
    included: true
  },
  {
    name: 'Email Support',
    included: true
  },
  {
    name: 'Basic SEO Setup',
    included: true
  },
  {
    name: 'Custom AI Solutions',
    included: false
  },
  {
    name: 'Dedicated Account Manager',
    included: false
  }],

  buttonText: 'Get Started',
  popular: false
},
{
  name: 'Professional',
  price: '₹39,000',
  period: '',
  description:
  'Ideal for growing companies needing advanced software and AI integrations.',
  features: [
  {
    name: 'Full-Stack Development',
    included: true
  },
  {
    name: 'Premium UI/UX Design',
    included: true
  },
  {
    name: '24/7 Priority Support',
    included: true
  },
  {
    name: 'Advanced SEO & Analytics',
    included: true
  },
  {
    name: 'Basic AI Chatbot Integration',
    included: true
  },
  {
    name: 'Dedicated Account Manager',
    included: false
  }],

  buttonText: 'Choose Professional',
  popular: true
},
{
  name: 'Enterprise',
  price: '₹59,999',
  period: '',
  description:
  'Tailored solutions for large organizations requiring scalable architecture.',
  features: [
  {
    name: 'Enterprise Architecture',
    included: true
  },
  {
    name: 'World-class UI/UX Design',
    included: true
  },
  {
    name: '24/7 Dedicated Support',
    included: true
  },
  {
    name: 'Comprehensive Security Audit',
    included: true
  },
  {
    name: 'Custom LLM & AI Agents',
    included: true
  },
  {
    name: 'Dedicated Account Manager',
    included: true
  }],

  buttonText: 'Contact Sales',
  popular: false
}];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Pricing
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Transparent Pricing for Every Stage
          </h3>
          <p className="text-light dark:text-gray-300 text-lg">
            Choose the perfect plan to accelerate your business growth with our
            expert technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) =>
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
            className={`glass-card rounded-3xl p-8 relative flex flex-col ${plan.popular ? 'border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10' : ''}`}>
            
              {plan.popular &&
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
            }

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <p className="text-sm text-light dark:text-gray-400 h-10">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-light dark:text-gray-400 font-medium">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, j) =>
              <li key={j} className="flex items-start gap-3 text-sm">
                    {feature.included ?
                <Check className="w-5 h-5 text-green-500 shrink-0" /> :

                <X className="w-5 h-5 text-red-500 shrink-0" />
                }
                    <span
                  className={
                  feature.included ?
                  'text-dark font-medium' :
                  'text-light'
                  }>
                  
                      {feature.name}
                    </span>
                  </li>
              )}
              </ul>

              <a
              href="#contact"
              className={`w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${plan.popular ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25' : 'bg-gray-100 dark:bg-white/10 text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-white/20'}`}>
              
                {plan.buttonText}
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
