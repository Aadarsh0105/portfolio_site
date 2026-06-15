"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Technology = {
  name: string;
  logo: string;
  size?: number;
};

type TechCategory = {
  description: string;
  technologies: Technology[];
};

const techData: Record<string, TechCategory> = {
  Frontend: {
    description:
      "Modern interfaces built for performance, responsiveness, and exceptional user experiences.",
    technologies: [
      { name: "Angular", logo: "/tech/angular.svg", size: 56 },
      { name: "React", logo: "/tech/react.svg", size: 56 },
      { name: "Next.js", logo: "/tech/nextjs.svg", size: 72 },
      { name: "Vue", logo: "/tech/vue.svg", size: 56 },
      { name: "TypeScript", logo: "/tech/typescript.svg", size: 56 },
      { name: "Tailwind CSS", logo: "/tech/tailwind.svg", size: 56 },
      { name: "Framer Motion", logo: "/tech/framer-motion.svg", size: 56 },
    ],
  },

  Backend: {
    description:
      "Robust APIs, scalable architectures, and secure backend systems.",
    technologies: [
      { name: "Node.js", logo: "/tech/nodejs.svg", size: 64 },
      { name: "Express.js", logo: "/tech/express.svg", size: 70 },
      { name: "NestJS", logo: "/tech/nestjs.svg", size: 60 },
      { name: "Laravel", logo: "/tech/php.svg", size: 56 },
      { name: "Python", logo: "/tech/python.svg", size: 56 },
      { name: ".NET", logo: "/tech/dotnet.svg", size: 60 },
    ],
  },

  Mobile: {
    description:
      "Cross-platform and native mobile applications optimized for every device.",
    technologies: [
      { name: "React Native", logo: "/tech/react-native.svg", size: 56 },
      { name: "Flutter", logo: "/tech/flutter.svg", size: 56 },
      { name: "Swift", logo: "/tech/swift.svg", size: 56 },
      { name: "Kotlin", logo: "/tech/kotlin.svg", size: 56 },
    ],
  },

  Cloud: {
    description:
      "Reliable cloud infrastructure built for scalability, security, and speed.",
    technologies: [
      { name: "AWS", logo: "/tech/aws.svg", size: 72 },
      { name: "Azure", logo: "/tech/azure.svg", size: 60 },
      { name: "GCP", logo: "/tech/gcp.svg", size: 60 },
      { name: "Docker", logo: "/tech/docker.svg", size: 64 },
      { name: "Kubernetes", logo: "/tech/kubernetes.svg", size: 60 },
      { name: "Vercel", logo: "/tech/vercel.svg", size: 72 },
    ],
  },

  AI: {
    description:
      "AI-powered solutions, intelligent automation, and advanced integrations.",
    technologies: [
      { name: "OpenAI", logo: "/tech/openai.svg", size: 64 },
      { name: "Claude", logo: "/tech/claude.svg", size: 64 },
      { name: "Gemini", logo: "/tech/gemini.svg", size: 64 },
      { name: "LangChain", logo: "/tech/langchain.svg", size: 60 },
    ],
  },

  Database: {
    description:
      "High-performance databases and data platforms designed for growth.",
    technologies: [
      { name: "PostgreSQL", logo: "/tech/postgresql.svg", size: 56 },
      { name: "MongoDB", logo: "/tech/mongodb.svg", size: 56 },
      { name: "MySQL", logo: "/tech/mysql.svg", size: 56 },
      { name: "Redis", logo: "/tech/redis.svg", size: 56 },
      { name: "Supabase", logo: "/tech/supabase.svg", size: 56 },
      { name: "Prisma", logo: "/tech/prisma.svg", size: 56 },
    ],
  },
  Platforms: {
    description:
      "Powerful third-party platforms, payment gateways, hosting providers, and communication services integrated into modern applications.",
    technologies: [
      { name: "Firebase", logo: "/tech/firebase.svg", size: 60 },
      { name: "Twilio", logo: "/tech/twilio.svg", size: 60 },
      { name: "Razorpay", logo: "/tech/razorpay.svg", size: 100 },
      { name: "Stripe", logo: "/tech/stripe.svg", size: 70 },
      { name: "Hostinger", logo: "/tech/hostinger.svg", size: 100 },
    ],
  },
};

const categories = Object.keys(techData);

export function TechStack() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof techData>("Frontend");

  return (
    <section
      id="tech-stack"
      className="pt-10 pb-5 md:pt-16 relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.25em] mb-4">
            Technology Stack
          </h2>

          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Modern Tools for
            <span className="text-gradient"> Modern Solutions</span>
          </h3>

          <p className="text-light dark:text-gray-400 text-lg">
            We leverage industry-leading technologies to build scalable,
            secure, and future-ready digital products.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveTab(category as keyof typeof techData)
              }
              className={`
                relative px-5 py-3 rounded-2xl text-sm font-semibold
                transition-all duration-300
                ${activeTab === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-xl"
                  : "bg-white dark:bg-white/5 border border-border hover:border-primary/30"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-5xl mx-auto"
          >
            {/* Description */}
            <p className="text-center text-light dark:text-gray-400 mb-10 text-lg">
              {techData[activeTab].description}
            </p>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {techData[activeTab].technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-6
                    min-h-[160px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    hover:border-primary/30
                    hover:-translate-y-1
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  </div>

                  <div className="relative h-16 w-16 mb-4 flex items-center justify-center">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={tech.size || 56}
                      height={tech.size || 56}
                      className="
                        object-contain
                        max-w-full
                        max-h-full
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <h4 className="relative font-semibold text-sm md:text-base">
                    {tech.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Text */}
        <div className="mt-14 text-center max-w-3xl mx-auto">
          <p className="text-light dark:text-gray-400">
            Every technology in our stack is selected based on performance,
            scalability, security, developer experience, and long-term
            maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}