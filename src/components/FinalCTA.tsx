import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-navy z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.2),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.2),transparent_40%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Transform Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              AI & Technology?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that trust Nexus to
            build their digital future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary w-full sm:w-auto group text-lg px-8 py-4">
              
              Book Discovery Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 w-full sm:w-auto text-lg border border-white/10">
              
              <FileText className="w-5 h-5 mr-2" />
              Get Proposal
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}