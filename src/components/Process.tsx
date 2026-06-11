// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Search,
//   Map,
//   PenTool,
//   Code,
//   CheckSquare,
//   Rocket,
//   Headphones
// } from
//   'lucide-react';
// const steps = [
//   {
//     icon: Search,
//     title: "Discovery",
//     desc: "Understanding your business goals, users, and requirements.",
//   },
//   {
//     icon: Map,
//     title: "Planning",
//     desc: "Creating a roadmap, architecture, and execution strategy.",
//   },
//   {
//     icon: PenTool,
//     title: "Design",
//     desc: "Crafting intuitive user experiences and modern interfaces.",
//   },
//   {
//     icon: Code,
//     title: "Development",
//     desc: "Building scalable, secure, and high-performance solutions.",
//   },
//   {
//     icon: Rocket,
//     title: "Launch",
//     desc: "Deployment, optimization, and production rollout.",
//   },
//   {
//     icon: Headphones,
//     title: "Growth & Support",
//     desc: "Continuous improvements, maintenance, and scaling.",
//   },
// ];

// export function Process() {
//   return (
//     <section className="py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
//             Our Process
//           </h2>
//           <h3 className="text-4xl md:text-5xl font-bold mb-6">
//             From Idea to
//             <span className="text-gradient"> Digital Success</span>
//           </h3>
//           <p className="text-light dark:text-gray-400 max-w-2xl mx-auto">
//             We follow a streamlined process that ensures every project is delivered
//             efficiently, transparently, and with measurable business impact.
//           </p>
//         </div>

//         <div className="relative">
//           {/* Connecting Line (Desktop) */}
//           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-white/10 -translate-y-1/2 z-0">
//             <motion.div
//               className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
//               initial={{
//                 width: '0%'
//               }}
//               whileInView={{
//                 width: '100%'
//               }}
//               viewport={{
//                 once: true
//               }}
//               transition={{
//                 duration: 1.5,
//                 ease: 'easeInOut'
//               }} />

//           </div>

//           <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
//             {steps.map((step, i) =>
//               <motion.div
//                 key={i}
//                 initial={{
//                   opacity: 0,
//                   y: 20
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0
//                 }}
//                 viewport={{
//                   once: true
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: i * 0.15
//                 }}
//                 className="flex md:flex-col items-center md:text-center gap-4 md:gap-0 group">

//                 <div className="w-12 h-12 md:mb-4 rounded-full bg-white dark:bg-navy border-2 border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:border-primary transition-colors relative z-10 shadow-lg">
//                   <step.icon className="w-5 h-5 text-light dark:text-gray-400 group-hover:text-primary transition-colors" />
//                 </div>
//                 <div>
//                   <div className="text-xs font-bold text-primary mb-1 md:hidden">
//                     Step {i + 1}
//                   </div>
//                   <h4 className="font-bold text-sm md:text-base mb-1">
//                     {step.title}
//                   </h4>
//                   <p className="text-xs text-light dark:text-gray-400">
//                     {step.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>);

// }
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Search,
//   Map,
//   PenTool,
//   Code,
//   Rocket,
//   Headphones,
// } from "lucide-react";

// const steps = [
//   {
//     icon: Search,
//     title: "Discovery",
//     desc: "Understanding your goals, target audience, and project requirements.",
//   },
//   {
//     icon: Map,
//     title: "Strategy",
//     desc: "Creating a roadmap, architecture, and growth plan tailored to your business.",
//   },
//   {
//     icon: PenTool,
//     title: "Design",
//     desc: "Designing intuitive user experiences and modern interfaces.",
//   },
//   {
//     icon: Code,
//     title: "Development",
//     desc: "Building scalable, secure, and high-performance digital solutions.",
//   },
//   {
//     icon: Rocket,
//     title: "Launch",
//     desc: "Deploying, optimizing, and ensuring a smooth go-live experience.",
//   },
//   {
//     icon: Headphones,
//     title: "Support",
//     desc: "Continuous monitoring, updates, and growth-focused improvements.",
//   },
// ];

// export function Process() {
//   return (
//     <section className="py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-sm font-bold text-primary uppercase tracking-[0.25em] mb-4">
//             Our Process
//           </h2>

//           ```
//           <h3 className="text-4xl md:text-5xl font-bold mb-6">
//             From Idea to
//             <span className="text-gradient"> Digital Success</span>
//           </h3>

//           <p className="text-light dark:text-gray-400 text-lg">
//             We follow a proven process that helps transform ideas into
//             scalable digital products while keeping communication transparent
//             and execution efficient.
//           </p>
//         </motion.div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//               }}
//               className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 backdrop-blur-sm p-8 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300"
//             >
//               <div className="absolute top-4 right-6 text-5xl font-black text-primary/10 select-none">
//                 {String(index + 1).padStart(2, "0")}
//               </div>

//               <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
//                 <step.icon className="w-7 h-7 text-primary" />
//               </div>

//               <h4 className="text-xl font-bold mb-3 text-dark dark:text-white">
//                 {step.title}
//               </h4>

//               <p className="text-light dark:text-gray-400 leading-relaxed">
//                 {step.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

// }

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Map,
  PenTool,
  Code,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "Understanding your goals, target audience, business challenges, and project requirements.",
  },
  {
    icon: Map,
    title: "Strategy",
    desc: "Creating a roadmap, architecture, and execution plan tailored to your business.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Crafting intuitive user experiences and visually compelling interfaces.",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Building scalable, secure, and high-performance digital solutions.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Deployment, optimization, and ensuring a seamless production rollout.",
  },
  {
    icon: Headphones,
    title: "Growth & Support",
    desc: "Continuous improvements, maintenance, monitoring, and long-term growth.",
  },
];

export function Process() {
  return (<section className="py-16 md:py-20 relative overflow-hidden"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12"
    > <h2 className="text-sm font-bold text-primary uppercase tracking-[0.25em] mb-4">
        Our Process </h2>
      <h3 className="text-4xl md:text-5xl font-bold mb-6">
        From Idea to
        <span className="text-gradient"> Digital Success</span>
      </h3>

      <p className="text-light dark:text-gray-400 text-lg">
        We follow a proven framework that transforms ideas into scalable
        digital products while keeping communication transparent and
        execution efficient.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative max-w-5xl mx-auto">
      {/* Center Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />

      <div className="space-y-1">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className={`
            relative flex
            ${index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"}
          `}
            >
              {/* Card */}
              <div
                className={`
              w-full md:w-[47%]
              pl-10 md:pl-0
              ${index % 2 === 0
                    ? "md:mr-10"
                    : "md:ml-10"}
            `}
              >
                <div className="group relative rounded-3xl border border-border bg-surface/80 backdrop-blur-md p-6 md:p-7 hover:border-primary/30 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute top-4 right-5 text-4xl md:text-5xl font-black text-primary/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold mb-3">
                    {step.title}
                  </h4>

                  <p className="text-light dark:text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Timeline Icon */}
              <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg scale-125" />

                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-background border-4 border-primary shadow-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
  </section>

  );
}
