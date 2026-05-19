import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
const TESTIMONIALS = [
{
  name: 'Sarah Jenkins',
  role: 'Founder, EcoStyle',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  quote:
  "LaunchFast delivered our website in record time. The design is stunning and we've seen a 40% increase in conversions since launching."
},
{
  name: 'David Chen',
  role: 'CEO, TechFlow',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  quote:
  'I was skeptical about the $5 starting price, but the quality of work is exceptional. They truly understand modern web design.'
},
{
  name: 'Elena Rodriguez',
  role: 'Marketing Director',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  quote:
  'The team was incredibly responsive and the final product exceeded our expectations. Highly recommend for any startup.'
}];

export function Testimonials() {
  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
            className="text-3xl md:text-4xl font-bold mb-4">
            
            Loved by <span className="text-gradient">founders</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) =>
          <motion.div
            key={testimonial.name}
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
            className="p-8 rounded-2xl bg-background border border-border">
            
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) =>
              <StarIcon key={i} className="w-5 h-5 fill-current" />
              )}
              </div>
              <p className="text-text-secondary mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border border-border" />
              
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}