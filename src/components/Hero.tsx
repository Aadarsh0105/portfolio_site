import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  BarChart3,
  Shield,
  Zap
} from
  'lucide-react';
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-0 md:pt-24 md:pb-0 overflow-hidden bg-white">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-2xl mx-auto lg:mx-0">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm font-medium mb-6 text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enterprise AI & Software Agency
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              Build AI-Powered <br />
              <span className="text-gradient">Digital Products</span> <br />
              That Scale
            </h1>

            <p className="text-lg sm:text-xl text-light mb-8 leading-relaxed max-w-xl">
              We help startups, enterprises, and growing businesses automate
              operations, develop custom software, build AI solutions, and
              accelerate growth through innovative technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn-primary group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              {/* <a href="#case-studies" className="btn-secondary group">
                <Play className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                View Portfolio
              </a> */}
            </div>

            {/* Trust Badges */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
              {[
              {
                label: 'Projects',
                value: '500+'
              },
              {
                label: 'Global Clients',
                value: '100+'
              },
              {
                label: 'Experience',
                value: '10+ Yrs'
              },
              {
                label: 'Client Rating',
                value: '4.9/5'
              }].
              map((stat, i) =>
              <div key={i}>
                  <div className="text-2xl font-bold text-dark">
                    {stat.value}
                  </div>
                  <div className="text-xs text-light font-medium uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              )}
            </div> */}
          </motion.div>

          {/* Right Visuals - Abstract Dashboard Mockup */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="hidden lg:flex relative lg:h-[600px] items-center justify-center">

            {/* Main Dashboard Card */}
            <div className="relative w-full max-w-lg glass-card rounded-2xl p-4 md:p-6 shadow-2xl border-t border-l border-white/40">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">AI Analytics Engine</div>
                    <div className="text-xs text-light">
                      Real-time processing
                    </div>
                  </div>
                </div>
                <div className="px-2 py-1 rounded bg-green-100 text-green-600 text-xs font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{' '}
                  Active
                </div>
              </div>

              {/* Mock Graph - Desktop Only */}
              <div className="w-full flex h-40 w-full items-end gap-2 mb-6">
                {[40, 70, 45, 90, 65, 85, 100].map((height, i) =>
                  <motion.div
                    key={i}
                    initial={{
                      height: 0
                    }}
                    animate={{
                      height: `${height}%`
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5 + i * 0.1
                    }}
                    className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm">
                  </motion.div>
                )}
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Shield,
                    text: 'Enterprise Security Active',
                    color: 'text-secondary'
                  },
                  {
                    icon: Zap,
                    text: 'Workflow Automation Running',
                    color: 'text-accent'
                  }].
                  map((item, i) =>
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">

                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-sm font-medium">{item.text}</span>
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                    </div>
                  )}
              </div>
            </div>

            {/* Floating Elements */}
            {/* <motion.div
              animate={{
                y: [-10, 10, -10]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut'
              }}
              className="absolute -right-8 top-20 glass-card p-4 rounded-xl shadow-xl hidden md:block">
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-light">Efficiency</div>
                  <div className="text-sm font-bold">+340%</div>
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div
              animate={{
                y: [10, -10, 10]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut'
              }}
              className="absolute -left-8 bottom-20 glass-card p-4 rounded-xl shadow-xl hidden md:block">
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-light">Threats Blocked</div>
                  <div className="text-sm font-bold">99.9%</div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>);

}
