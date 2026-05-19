import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
export function CTA() {
  return (
    <section className="py-24 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
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
          className="relative rounded-3xl overflow-hidden bg-surface border border-border p-8 md:p-16 text-center">
          
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-start/10 to-accent-end/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-start/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-end/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to launch your website?
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              Join hundreds of startups that have accelerated their growth with
              our modern, high-converting websites.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-text-primary text-background font-medium hover:scale-105 transition-transform">
              
              Start Now
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}