"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
  {
    q: "How much does a website or application cost?",
    a: "Project costs depend on scope, features, integrations, and complexity. Small business websites typically start from ₹15,000, while custom web applications, mobile apps, and enterprise platforms are quoted based on requirements. Contact us for a free project estimate."
  },

  {
    q: "How long does it take to complete a project?",
    a: "Timelines vary based on project scope. Business websites generally take 2–6 weeks, while custom web applications, mobile apps, and SaaS platforms can take 1–4 months or more. We provide a clear roadmap and delivery timeline before development begins."
  },

  {
    q: "Do you develop both web and mobile applications?",
    a: "Yes. We build modern websites, custom web applications, admin dashboards, SaaS platforms, Android apps, iOS apps, and cross-platform mobile applications tailored to your business goals."
  },

  {
    q: "Can you integrate AI into existing or new applications?",
    a: "Absolutely. We develop AI-powered solutions including chatbots, AI agents, workflow automation, document processing, customer support assistants, and integrations with platforms like OpenAI, Claude, and Gemini."
  },

  {
    q: "Do you provide maintenance and support after launch?",
    a: "Yes. We offer ongoing maintenance, bug fixes, performance optimization, security updates, feature enhancements, and technical support to ensure your product continues running smoothly."
  },

  {
    q: "Will I own the source code and project assets?",
    a: "Yes. Once the project is completed and final payment is made, you receive full ownership of the source code, design assets, documentation, and intellectual property unless otherwise agreed."
  },

  {
    q: "Can you work with startups as well as established businesses?",
    a: "Yes. We work with startups, small businesses, growing companies, and enterprises. Whether you need an MVP, a business website, or a large-scale platform, we tailor our approach to your stage and budget."
  },

  {
    q: "How do we get started?",
    a: "Simply contact us through our website and share your requirements. We'll schedule a consultation, understand your goals, recommend the best solution, and provide a project proposal with timelines and pricing."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="pt-10 pb-5 md:pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            FAQ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) =>
          <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
              
                <span className="font-bold text-lg pr-8">{faq.q}</span>
                <span
                className={`p-1 rounded-full border transition-colors ${openIndex === i ? 'bg-primary border-primary text-white' : 'border-gray-300 dark:border-gray-600 text-light'}`}>
                
                  {openIndex === i ?
                <Minus className="w-4 h-4" /> :

                <Plus className="w-4 h-4" />
                }
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                    <div className="px-6 pb-5 text-light dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>);

}