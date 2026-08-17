"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Globe, Smartphone } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        name: "Zinokart",
        category: "Multi-Vendor Marketplace",
        description: "A complete multi-service marketplace connecting customers, stores and delivery partners across food, grocery, shopping, pharmacy, parcel delivery and more.",
        image: "/zinokart.png",
        website: "https://zinokart.com/",
        platforms: ["User App", "Store App", "Delivery App"],
        technologies: ["React", "Next.js", "React Native", "Node.js"],
    },
    {
        name: "Agri Hitech Kisan",
        category: "Agriculture Marketplace",
        description: "A B2B and B2C agriculture marketplace that helps users discover, buy and sell agricultural products while finding nearby dealers.",
        image: "/agrihitech.png",
        website: "https://agrihitech-kisan.vercel.app/",
        platforms: ["Website", "Mobile App", "B2B", "B2C"],
        technologies: ["React", "Next.js", "React Native", "Node.js"],
    },
    {
        name: "SabziWalah",
        category: "Vegetable & Grocery eCommerce",
        description: "A multi-store eCommerce platform with centralized administration, store-wise inventory, receptionist operations and online ordering.",
        image: "/sabziwalah.png",
        website: "https://sabziwalah.com/",
        platforms: ["Website", "Admin Panel", "Receptionist Panel"],
        technologies: ["React", "Node.js", "MongoDB"],
    },
];

export default function ProjectsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };
    const prev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + projects.length) % projects.length
        );
    };
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="projects" className="relative overflow-hidden bg-slate-50 pt-10 pb-5 md:pt-16">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[130px]" />
            <div aria-hidden="true" className="pointer-events-none absolute bottom-[-200px] right-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-100/60 blur-[120px]" />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
                        Our Projects
                    </h2>
                    <h3 className="text-3xl md:text-5xl text-black font-bold mb-6">
                        Products we've
                        <span className="text-gradient">
                            {" "}built.
                        </span>
                    </h3>
                    <p className="text-light dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        From marketplaces and eCommerce platforms to industry-specific
                        digital products, we build solutions around real business needs.
                    </p>
                </div>
                <div className="relative">
                    <button type="button" onClick={prev} aria-label="Previous project" className="absolute -left-3 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center 
                    justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all hover:border-blue-300 hover:bg-blue-600 hover:text-white sm:flex lg:-left-6">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button type="button" onClick={next} aria-label="Next project" className="absolute -right-3 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center 
                    rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all hover:border-blue-300 hover:bg-blue-600 hover:text-white sm:flex lg:-right-6">
                        <ChevronRight className="h-5 w-5" />
                    </button>
                    <AnimatePresence mode="wait">
                        <motion.div key={currentIndex} initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -35 }}
                            transition={{ duration: 0.35, ease: "easeOut" }} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                projects[currentIndex],
                                projects[(currentIndex + 1) % projects.length],
                                projects[(currentIndex + 2) % projects.length],
                            ].map((project, index) => (
                                <motion.article key={`${project.name}-${currentIndex}-${index}`} whileHover={{ y: -6 }} transition={{ duration: 0.25 }}
                                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
                                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                                        {/* Browser top bar */}
                                        <div className="absolute left-0 right-0 top-0 z-10 flex h-7 items-center gap-1.5 bg-slate-950/90 px-3">
                                            <span className="h-2 w-2 rounded-full bg-red-400" />
                                            <span className="h-2 w-2 rounded-full bg-yellow-400" />
                                            <span className="h-2 w-2 rounded-full bg-green-400" />
                                            <div className="ml-2 h-3 flex-1 rounded-full bg-white/10" />
                                        </div>
                                        <img src={project.image} alt={`${project.name} project`} className="h-full w-full object-cover object-top pt-7 transition-transform duration-700 group-hover:scale-[1.04]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-black tracking-tight text-slate-950">
                                            {project.name}
                                        </h3>
                                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                            {project.description}
                                        </p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.platforms.map((platform) => (
                                                <span key={platform} className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1.5 text-[11px] font-semibold text-blue-700">
                                                    {platform.toLowerCase().includes("app") ? (
                                                        <Smartphone className="h-3 w-3" />
                                                    ) : (
                                                        <Globe className="h-3 w-3" />
                                                    )}
                                                    {platform}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {project.technologies.map((technology) => (
                                                <span key={technology} className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                        <a href={project.website} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700">
                                            View Project
                                            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="mt-7 flex items-center justify-between sm:justify-center sm:gap-6">
                    <button type="button" onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border 
                    border-slate-200 bg-white text-slate-700 shadow-sm sm:hidden" aria-label="Previous project">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-2">
                        {projects.map((_, index) => (
                            <button key={index} type="button" onClick={() => setCurrentIndex(index)} aria-label={`Go to project ${index + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-slate-300"}`} />
                        ))}
                    </div>
                    <button type="button" onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 
                    bg-white text-slate-700 shadow-sm sm:hidden" aria-label="Next project" >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
                <div className="mt-8 text-center md:hidden">
                    <a href="/projects" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-600">
                        View All Projects
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>

            {/* <div className="mt-10 flex justify-center">
                <Link href="/projects" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors">
                    View All Projects
                </Link>
            </div> */}
        </section>
    );
}