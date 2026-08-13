"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

const industries = [
  {
    title: "Corporate",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Business",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hospital",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "School",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Construction",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Travel",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Industries() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <section className="bg-[#050816] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">
            Built For
          </span>
          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Websites For Every Business
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            From startups to enterprises, we create modern websites
            designed to generate more leads and grow your business.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
              <div className="relative h-48 md:h-72">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button type="button" onClick={() => setContactOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 px-6 py-3 text-lg font-bold text-white shadow-[0_20px_60px_rgba(37,99,235,.4)] transition-all hover:scale-105 active:scale-95">
            <Rocket className="mr-2 h-5 w-5" />
            Start your Project
          </button>
        </div>
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}