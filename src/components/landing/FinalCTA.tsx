"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function FinalCTA() {
  const phone = process.env.NEXT_PUBLIC_PHONE;
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP;
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-16">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[36px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-8 text-center shadow-[0_25px_80px_rgba(37,99,235,0.10)]">
          {/* Decorative circles */}
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-200/40 blur-[70px]" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-200/40 blur-[70px]" />
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-600 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Let's Build Something Great
            </div>
            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-5xl">
              Ready to take your business <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                online?
              </span>
            </h2>
            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Get a modern website or app designed to attract customers,
              build trust and grow your business.
            </p>
            {/* Price */}
            <div className="mt-5">
              <span className="text-sm font-medium text-slate-500">
                Projects starting from
              </span>
              <div className="mt-1 text-4xl font-black text-slate-950 sm:text-4xl">
                ₹9,999
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a onClick={() => setContactOpen(true)} className="group inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto cursor-pointer">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full border border-green-200 bg-green-50 px-8 py-3 font-bold text-green-700 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
            {/* Trust */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                Free Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                Transparent Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                No Hidden Charges
              </span>
            </div>
            {/* Phone */}
            <div className="mt-7">
              <a href={`tel:${phone}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600">
                <Phone className="h-4 w-4" />
                Prefer a call? Talk to us directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

    </section>
  );
}