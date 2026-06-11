import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: 'How long does development take?',
  a: 'Project timelines vary based on complexity. A simple web application might take 4-6 weeks, while a complex enterprise AI solution could take 3-6 months. We provide detailed timelines during the discovery phase.'
},
{
  q: 'What industries do you serve?',
  a: 'We have deep expertise across Healthcare, Fintech, Real Estate, E-commerce, Logistics, and SaaS. However, our technology solutions are adaptable and we frequently partner with businesses in other sectors.'
},
{
  q: 'Do you provide support after launch?',
  a: 'Yes, we offer comprehensive maintenance and support packages. This includes 24/7 monitoring, security updates, bug fixes, and continuous performance optimization to ensure your product scales smoothly.'
},
{
  q: 'Can you build custom AI solutions?',
  a: 'Absolutely. We specialize in building custom AI agents, integrating LLMs (like OpenAI and Claude), developing predictive analytics models, and creating automated workflows tailored to your specific business needs.'
},
{
  q: 'What technologies do you use?',
  a: 'We use modern, scalable tech stacks including React, Next.js, Node.js, Python, AWS, and leading AI frameworks. We select the best tools for each specific project rather than forcing a one-size-fits-all approach.'
},
{
  q: 'What are your pricing models?',
  a: 'We offer flexible engagement models: Fixed-price contracts for well-defined projects, Time & Materials for agile development with evolving requirements, and Dedicated Team models for long-term partnerships.'
}];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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