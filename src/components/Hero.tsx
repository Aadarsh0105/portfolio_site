import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  LayoutDashboardIcon,
  BarChart3Icon,
  UsersIcon } from
'lucide-react';
const TRUST_LOGOS = [
'Acme Corp',
'GlobalTech',
'Nexus',
'Stark Ind.',
'Wayne Ent.',
'Cyberdyne'];

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-start/20 blur-[100px] animate-blob" />
        <div
          className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-accent-end/20 blur-[100px] animate-blob"
          style={{
            animationDelay: '2s'
          }} />
        
        <div
          className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-accent-start/10 blur-[120px] animate-blob"
          style={{
            animationDelay: '4s'
          }} />
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              duration: 0.6,
              staggerChildren: 0.1
            }}
            className="max-w-2xl">
            
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-sm font-medium text-text-secondary mb-6">
              
              <span className="w-2 h-2 rounded-full bg-accent-start animate-pulse" />
              New: AI-Powered Templates
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              
              Start Your Website at Just{' '}
              <span className="text-gradient">$5</span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
              
              Launch your business online with fast, affordable, and stunning
              websites built for growth. Premium design doesn't have to break
              the bank.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="flex flex-col sm:flex-row gap-4">
              
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-accent text-white font-medium hover:shadow-lg hover:shadow-accent-start/25 transition-all hover:-translate-y-0.5">
                
                Get Started
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-surface border border-border text-text-primary font-medium hover:bg-border/50 transition-colors">
                
                View Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Right Illustration (Dashboard Mockup) */}
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
            className="relative mx-auto w-full max-w-lg lg:max-w-none">
            
            <div className="relative rounded-2xl border border-border bg-surface/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="mx-auto px-4 py-1 rounded-md bg-background border border-border text-[10px] text-text-secondary flex-1 max-w-[200px] text-center truncate">
                  launchfast.io/dashboard
                </div>
              </div>

              {/* Mockup Body */}
              <div className="flex h-[320px] sm:h-[400px]">
                {/* Sidebar */}
                <div className="w-16 sm:w-48 border-r border-border bg-background/30 p-4 flex flex-col gap-4">
                  <div className="h-6 w-full rounded bg-border/50 mb-4 hidden sm:block" />
                  <div className="flex items-center gap-3 text-accent-start bg-accent-start/10 p-2 rounded-lg">
                    <LayoutDashboardIcon className="w-5 h-5 shrink-0" />
                    <div className="h-2 w-16 rounded bg-current opacity-80 hidden sm:block" />
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary p-2">
                    <BarChart3Icon className="w-5 h-5 shrink-0" />
                    <div className="h-2 w-20 rounded bg-current opacity-40 hidden sm:block" />
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary p-2">
                    <UsersIcon className="w-5 h-5 shrink-0" />
                    <div className="h-2 w-14 rounded bg-current opacity-40 hidden sm:block" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 sm:p-6 bg-background/20 flex flex-col gap-4 sm:gap-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="h-4 w-24 sm:w-32 rounded bg-text-primary/80" />
                      <div className="h-2 w-32 sm:w-48 rounded bg-text-secondary/50" />
                    </div>
                    <div className="h-8 w-8 sm:w-24 rounded-full sm:rounded-lg bg-accent-start/20" />
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 rounded-xl border border-border bg-background/50">
                      <div className="h-2 w-12 rounded bg-text-secondary/50 mb-2 sm:mb-3" />
                      <div className="h-5 sm:h-6 w-16 sm:w-20 rounded bg-text-primary/80" />
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl border border-border bg-background/50">
                      <div className="h-2 w-16 rounded bg-text-secondary/50 mb-2 sm:mb-3" />
                      <div className="h-5 sm:h-6 w-20 sm:w-24 rounded bg-text-primary/80" />
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 rounded-xl border border-border bg-background/50 p-4 flex items-end gap-2 sm:gap-4">
                    {[40, 70, 45, 90, 65, 85, 100].map((height, i) =>
                    <div
                      key={i}
                      className="flex-1 bg-gradient-accent rounded-t-sm sm:rounded-t-md opacity-80"
                      style={{
                        height: `${height}%`
                      }} />

                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements around mockup */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-end/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-start/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Trust Row */}
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
            duration: 0.6,
            delay: 0.4
          }}
          className="mt-24 pt-10 border-t border-border">
          
          <p className="text-center text-sm text-text-secondary mb-8 font-medium uppercase tracking-wider">
            Trusted by innovative startups
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {TRUST_LOGOS.map((logo) =>
            <div
              key={logo}
              className="text-xl font-heading font-bold text-text-primary flex items-center">
              
                {logo}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}