import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
const cases = [
{
  industry: 'Fintech',
  title: 'AI-Powered Fraud Detection System',
  challenge:
  'High false-positive rates in transaction monitoring causing customer friction.',
  solution:
  'Implemented a custom ML model using historical transaction data to identify genuine fraud patterns.',
  metrics: [
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Accuracy Increase'
  },
  {
    icon: DollarSign,
    value: '$2M+',
    label: 'Saved Annually'
  }]

},
{
  industry: 'Healthcare',
  title: 'Telemedicine Platform Modernization',
  challenge:
  'Legacy system could not handle the surge in remote patient consultations.',
  solution:
  'Rebuilt the platform using a scalable microservices architecture on AWS with WebRTC video.',
  metrics: [
  {
    icon: Users,
    value: '300%',
    label: 'User Growth'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Uptime'
  }]

},
{
  industry: 'E-commerce',
  title: 'Automated Inventory & Pricing Engine',
  challenge:
  'Manual pricing updates and stockouts were causing lost revenue opportunities.',
  solution:
  'Developed an AI agent that dynamically adjusts pricing based on competitor data and predicts stock needs.',
  metrics: [
  {
    icon: TrendingUp,
    value: '42%',
    label: 'Revenue Increase'
  },
  {
    icon: DollarSign,
    value: '15%',
    label: 'Cost Reduction'
  }]

}];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 bg-gray-50/50 dark:bg-white/[0.02]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              Case Studies
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Proven Business Impact
            </h3>
          </div>
          <a href="#" className="btn-secondary hidden md:inline-flex">
            View All Projects
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, i) =>
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
            className="glass-card rounded-2xl overflow-hidden flex flex-col">
            
              <div className="p-6 flex-grow">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                  {item.industry}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-semibold text-light dark:text-gray-400 mb-1">
                      Challenge
                    </div>
                    <p className="text-sm">{item.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-light dark:text-gray-400 mb-1">
                      Solution
                    </div>
                    <p className="text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-white/5 p-6 border-t border-gray-100 dark:border-white/5">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {item.metrics.map((metric, j) =>
                <div key={j}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <metric.icon className="w-4 h-4 text-primary" />
                        <span className="text-lg font-bold">
                          {metric.value}
                        </span>
                      </div>
                      <div className="text-xs text-light font-medium">
                        {metric.label}
                      </div>
                    </div>
                )}
                </div>
                <a
                href="#"
                className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1 group">
                
                  View Full Case Study{' '}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="btn-secondary w-full justify-center">
            View All Projects
          </a>
        </div>
      </div>
    </section>);

}