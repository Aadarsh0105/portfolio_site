"use client";

import { motion } from "framer-motion";
import { Check, Crown, MessageCircle, Phone, Rocket, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    label: "For small businesses",
    price: "₹9,999",
    description:
      "A professional online presence for businesses that want to start generating customers online.",
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
      "A powerful business website designed for brands that need more features, better conversion and room to grow.",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Premium UI/UX design",
      "Advanced SEO setup",
      "Google Analytics setup",
      "Lead capture system",
      "Admin content management",
      "Advanced animations",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Custom Solution",
    label: "For growing businesses",
    price: "Let's Talk",
    description:
      "Custom websites, eCommerce platforms and applications built around your exact business requirements.",
    features: [
      "Custom UI/UX",
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

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#050816] py-16 text-white">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-300px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[160px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-250px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
          transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            Simple Pricing
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-5xl">
            Start your digital
            <span className="pb-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              journey today.
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Choose a starting package or tell us what you need. We'll
            recommend the right solution for your business.
          </p>
        </motion.div>
        {/* Pricing Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-[32px] border p-7 sm:p-8 ${plan.popular
                ? "border-blue-500/60 bg-gradient-to-b from-blue-600/15 to-white/[0.035] shadow-[0_25px_90px_rgba(37,99,235,0.18)]"
                : "border-white/10 bg-white/[0.035]"}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-lg shadow-blue-600/30">
                    <Crown className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}
              {/* Plan Header */}
              <div>
                <p className="text-sm font-semibold text-blue-300">
                  {plan.label}
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  {plan.name}
                </h3>
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>
              </div>
              {/* Price */}
              <div className="mt-7 border-y border-white/10 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Starting from
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-black tracking-tight text-white sm:text-4xl">
                    {plan.price}
                  </span>
                  {plan.price !== "Let's Talk" && (
                    <span className="mb-1 text-sm text-slate-500">
                      one-time
                    </span>
                  )}
                </div>
              </div>
              {/* Features */}
              <div className="mt-7 flex-1">
                <p className="text-sm font-bold text-white">
                  What's included
                </p>
                <ul className="mt-5 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
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
        {/* Bottom reassurance */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="mx-auto mt-12 max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              No hidden charges
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              Transparent process
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              Dedicated support
            </span>
          </div>
        </motion.div>
        {/* Contact CTA */}
        {/* <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{
          duration: 0.7,
          delay: 0.15
        }} className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.035] p-8 text-center sm:p-10">
          <h3 className="text-2xl font-black sm:text-3xl">
            Not sure which package is right for you?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Tell us about your business and we'll help you choose the
            right solution based on your goals and budget.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-blue-500">
              Get Free Consultation
              <Rocket className="ml-2 h-4 w-4" />
            </a>
            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE ?? ""}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition-all hover:bg-white/10">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </a>
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? ""}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 px-7 py-4 font-semibold text-green-300 transition-all hover:bg-green-600 hover:text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}