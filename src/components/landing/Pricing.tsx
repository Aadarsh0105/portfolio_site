"use client";

import { motion } from "framer-motion";
import {
  Check,
  Crown,
  Sparkles,
  Smartphone,
} from "lucide-react";

type PricingProps = {
  type: "web" | "app";
};

const WEB_PLANS = [
  {
    name: "Starter Website",
    label: "For small businesses",
    price: "₹9,999",
    description:
      "A professional website for businesses that want to establish a strong online presence and start generating enquiries.",
    features: [
      "Modern responsive website",
      "Up to 5 pages",
      "Mobile & tablet optimized",
      "Contact / enquiry form",
      "WhatsApp integration",
      "Basic SEO setup",
      "Google Maps integration",
      "Social media integration",
      "Basic speed optimization",
      "Deployment assistance",
    ],
    popular: false,
  },
  {
    name: "Business Pro",
    label: "Most Popular",
    price: "₹19,999",
    description:
      "A conversion-focused business website for growing brands that need more features, better design and room to scale.",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Premium UI/UX design",
      "Advanced SEO setup",
      "Google Analytics setup",
      "Lead capture system",
      "CMS / content management",
      "Advanced animations",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Custom Website",
    label: "For growing businesses",
    price: "Let's Talk",
    description:
      "Custom websites and web applications built around your exact business requirements and workflows.",
    features: [
      "Custom UI/UX design",
      "Advanced web applications",
      "eCommerce functionality",
      "Payment gateway integration",
      "Custom admin panel",
      "API integrations",
      "Database integration",
      "Advanced authentication",
      "Cloud deployment",
      "Dedicated development support",
    ],
    popular: false,
  },
];

const APP_PLANS = [
  {
    name: "App Starter",
    label: "For simple business apps",
    price: "₹19,999",
    description:
      "A professionally designed mobile app for businesses that need a simple and reliable mobile presence.",
    features: [
      "Android application",
      "Modern mobile UI/UX",
      "Up to 8 screens",
      "User registration & login",
      "Contact / enquiry functionality",
      "Push notification setup",
      "API integration",
      "Basic backend integration",
      "App testing",
      "Play Store deployment assistance",
    ],
    popular: false,
  },
  {
    name: "Business App",
    label: "Most Popular",
    price: "₹34,999",
    description:
      "A complete business application with backend, user accounts, APIs and the features required to run your digital service.",
    features: [
      "Everything in App Starter",
      "Android + iOS application",
      "Custom UI/UX design",
      "User authentication",
      "REST API integration",
      "Database integration",
      "Admin dashboard",
      "Push notifications",
      "Payment gateway integration",
      "App Store & Play Store support",
    ],
    popular: true,
  },
  {
    name: "Custom App",
    label: "For advanced businesses",
    price: "Let's Talk",
    description:
      "Complex mobile applications and digital platforms built around your business workflow and scalability requirements.",
    features: [
      "Custom Android & iOS apps",
      "Advanced UI/UX",
      "Custom backend",
      "Admin panel",
      "Multiple user roles",
      "Payment gateway",
      "Real-time features",
      "Maps & location services",
      "Third-party API integrations",
      "Cloud deployment & maintenance",
    ],
    popular: false,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Pricing({ type }: PricingProps) {
  const isApp = type === "app";

  const plans = isApp ? APP_PLANS : WEB_PLANS;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-16"
    >
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[750px] -translate-x-1/2 rounded-full blur-[120px] ${isApp ? "bg-cyan-100/60" : "bg-blue-100/60"
          }`}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] ${isApp
                ? "border-cyan-200 bg-cyan-50 text-cyan-600"
                : "border-blue-200 bg-blue-50 text-blue-600"
              }`}
          >
            {isApp ? (
              <Smartphone className="h-3.5 w-3.5" />
            ) : (
              <Sparkles className="h-3.5 w-3.5" />
            )}

            {isApp ? "Mobile App Pricing" : "Website Pricing"}
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {isApp ? (
              <>
                Turn your idea into a
                <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 bg-clip-text pb-2 text-transparent">
                  powerful mobile app.
                </span>
              </>
            ) : (
              <>
                Get your business
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text pb-2 text-transparent">
                  online today.
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            {isApp
              ? "Build Android and iOS applications with modern design, powerful features and scalable technology."
              : "Professional websites designed to look great, generate enquiries and help your business grow online."}
          </p>
        </motion.div>

        {/* Pricing Cards */}

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`relative flex h-full flex-col rounded-[26px] border bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 sm:p-8 ${plan.popular
                  ? isApp
                    ? "border-cyan-400 shadow-[0_15px_50px_rgba(6,182,212,0.12)]"
                    : "border-blue-400 shadow-[0_15px_50px_rgba(37,99,235,0.12)]"
                  : "border-slate-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                }`}
            >

              {/* MOST POPULAR - CENTERED ON BORDER */}

              {plan.popular && (
                <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-wider text-white shadow-lg ${isApp
                        ? "bg-cyan-500 shadow-cyan-500/25"
                        : "bg-blue-600 shadow-blue-600/25"
                      }`}
                  >
                    <Crown className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* PLAN HEADER */}

              <div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  {plan.name}
                </h3>

                <p className="mt-1 min-h-[72px] text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>
              </div>

              {/* PRICE */}

              <div className="mt-3 border-y border-slate-100 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Starting from
                </p>

                <div className="">
                  <span className="text-4xl font-black tracking-tight text-slate-950">
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* FEATURES */}

              <div className="mt-3 flex-1">
                <p className="text-sm font-bold text-slate-900">
                  What's included
                </p>

                <ul className="mt-3 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isApp
                            ? "bg-cyan-50 text-cyan-500"
                            : "bg-blue-50 text-blue-600"
                          }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* REASSURANCE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              {isApp ? "Android & iOS options" : "Mobile responsive"}
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Transparent pricing
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Dedicated support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}