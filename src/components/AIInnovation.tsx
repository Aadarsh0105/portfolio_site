import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Network, Database, LineChart, Cpu } from 'lucide-react';
const aiFeatures = [
{
  icon: Bot,
  title: 'AI Agents',
  desc: 'Autonomous task execution'
},
{
  icon: Sparkles,
  title: 'Generative AI',
  desc: 'Content & code generation'
},
{
  icon: Network,
  title: 'Automation',
  desc: 'Intelligent workflows'
},
{
  icon: LineChart,
  title: 'Predictive Analytics',
  desc: 'Data-driven forecasting'
},
{
  icon: Cpu,
  title: 'Recommendation Engines',
  desc: 'Personalized experiences'
},
{
  icon: Database,
  title: 'Data Intelligence',
  desc: 'Unstructured data processing'
}];

export function AIInnovation() {
  return (
    <section id="solutions" className="py-10 md:py-16 bg-navy text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
              AI & Innovation
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Building Intelligent Systems for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Modern Businesses
              </span>
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              We leverage the latest advancements in artificial intelligence and
              machine learning to build systems that automate complex tasks,
              uncover hidden insights, and drive unprecedented efficiency.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {aiFeatures.map((feature, i) =>
              <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Animated Workflow Diagram */}
          <div className="relative h-[400px] sm:h-[500px] glass-card bg-white/5 border-white/10 rounded-2xl p-8 flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full"
              style={{
                pointerEvents: 'none'
              }}>
              
              {/* Connecting Lines */}
              <motion.path
                d="M 100 250 Q 200 100 300 250 T 500 250"
                fill="transparent"
                stroke="rgba(6, 182, 212, 0.2)"
                strokeWidth="2"
                strokeDasharray="5,5" />
              
              <motion.path
                d="M 100 250 Q 200 100 300 250 T 500 250"
                fill="transparent"
                stroke="#06B6D4"
                strokeWidth="2"
                initial={{
                  pathLength: 0
                }}
                animate={{
                  pathLength: 1
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }} />
              
            </svg>

            {/* Nodes */}
            <div className="relative w-full h-full">
              {/* Input Node */}
              <motion.div
                animate={{
                  y: [-5, 5, -5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
                className="absolute left-[10%] top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md z-10">
                
                <Database className="w-8 h-8 text-gray-300" />
              </motion.div>

              {/* Processing Node */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] z-10">
                
                <Bot className="w-10 h-10 text-white" />
              </motion.div>

              {/* Output Nodes */}
              <motion.div
                animate={{
                  y: [5, -5, 5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="absolute right-[10%] top-[30%] w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md z-10">
                
                <LineChart className="w-8 h-8 text-accent" />
              </motion.div>

              <motion.div
                animate={{
                  y: [-5, 5, -5]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity
                }}
                className="absolute right-[10%] bottom-[30%] w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md z-10">
                
                <Network className="w-8 h-8 text-secondary" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
