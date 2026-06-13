import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  RefreshCw,
  HeadphonesIcon,
  Eye,
  BrainCircuit,
  Maximize,
  ShieldCheck,
  Clock
} from
  'lucide-react';
const features = [
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Senior developers and AI specialists.'
  },
  {
    icon: RefreshCw,
    title: 'Agile Development',
    desc: 'Iterative process for faster delivery.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: '24/7 maintenance and monitoring.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Strict adherence to project timelines.'
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    desc: 'Clear communication at every step.'
  },
  {
    icon: BrainCircuit,
    title: 'AI Expertise',
    desc: 'Cutting-edge machine learning solutions.'
  },
  {
    icon: Maximize,
    title: 'Scalable Solutions',
    desc: 'Built to grow with your business.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'Bank-grade data protection.'
  }];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            The Nexus Advantage
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) =>
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
              className="glass-card p-6 rounded-2xl group">

              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-5 h-5 text-dark text-primary transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-light dark:text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}