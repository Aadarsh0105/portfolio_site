import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, BookOpen, Clock, TrendingUp, ArrowRight } from 'lucide-react';
const benefits = [
{
  icon: Laptop,
  title: 'Remote Work',
  desc: 'Work from anywhere in the world.'
},
{
  icon: BookOpen,
  title: 'Learning Budget',
  desc: '$2,000/yr for courses & conferences.'
},
{
  icon: Clock,
  title: 'Flexible Hours',
  desc: 'Focus on output, not hours logged.'
},
{
  icon: TrendingUp,
  title: 'Growth Opportunities',
  desc: 'Clear paths for career advancement.'
}];

export function Careers() {
  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              Careers
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Naxora Team
            </h3>
            <p className="text-light dark:text-gray-300 mb-8 text-lg leading-relaxed">
              We're always looking for talented engineers, designers, and
              strategists who are passionate about building the future. Join a
              culture that values innovation, continuous learning, and work-life
              balance.
            </p>

            <a href="#" className="btn-primary group">
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="grid sm:grid-cols-2 gap-4">
            
            {benefits.map((benefit, i) =>
            <div key={i} className="glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-light dark:text-gray-400">
                  {benefit.desc}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}
