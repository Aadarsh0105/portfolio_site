// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// const testimonials = [
// {
//   name: 'Sarah Jenkins',
//   role: 'CTO',
//   company: 'FinTech Innovators',
//   image:
//   'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=2563EB&color=fff',
//   quote:
//   "Naxora Technology completely transformed our fraud detection systems. Their AI implementation reduced false positives by 85% and saved us millions annually. The team's expertise is unmatched."
// },
// {
//   name: 'David Chen',
//   role: 'VP of Engineering',
//   company: 'HealthSync',
//   image:
//   'https://ui-avatars.com/api/?name=David+Chen&background=7C3AED&color=fff',
//   quote:
//   'We needed to modernize our legacy telemedicine platform quickly. They delivered a scalable, secure microservices architecture ahead of schedule. Truly a world-class engineering team.'
// },
// {
//   name: 'Elena Rodriguez',
//   role: 'Director of Operations',
//   company: 'Global Logistics Co.',
//   image:
//   'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=06B6D4&color=fff',
//   quote:
//   "The automated workflow system they built for us eliminated 40 hours of manual data entry per week. It's rare to find an agency that understands both deep tech and business operations."
// }];

// export function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   const prev = () =>
//   setCurrentIndex(
//     (prev) => (prev - 1 + testimonials.length) % testimonials.length
//   );
//   // Auto-advance
//   useEffect(() => {
//     const timer = setInterval(next, 8000);
//     return () => clearInterval(timer);
//   }, []);
//   return (
//     <section className="pt-10 pb-5 md:pt-16 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
//             Client Success
//           </h2>
//           <h3 className="text-3xl md:text-4xl font-bold mb-4">
//             What Our Partners Say
//           </h3>
//           <div className="flex items-center justify-center gap-2 text-yellow-500">
//             {[...Array(5)].map((_, i) =>
//             <Star key={i} className="w-5 h-5 fill-current" />
//             )}
//             <span className="text-dark dark:text-white font-bold ml-2">
//               4.9 Average Rating
//             </span>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto relative">
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full glass-card hover:text-primary transition-colors">

//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full glass-card hover:text-primary transition-colors">

//             <ChevronRight className="w-6 h-6" />
//           </button>

//           <div className="overflow-hidden px-4 py-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{
//                   opacity: 0,
//                   x: 50
//                 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0
//                 }}
//                 exit={{
//                   opacity: 0,
//                   x: -50
//                 }}
//                 transition={{
//                   duration: 0.3
//                 }}
//                 className="glass-card p-8 md:p-12 rounded-3xl text-center relative">

//                 <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10 rotate-180" />

//                 <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
//                   "{testimonials[currentIndex].quote}"
//                 </p>

//                 <div className="flex flex-col items-center">
//                   <img
//                     src={testimonials[currentIndex].image}
//                     alt={testimonials[currentIndex].name}
//                     className="w-16 h-16 rounded-full mb-4 border-2 border-primary/20" />

//                   <div className="font-bold text-lg">
//                     {testimonials[currentIndex].name}
//                   </div>
//                   <div className="text-sm text-light dark:text-gray-400">
//                     {testimonials[currentIndex].role},{' '}
//                     {testimonials[currentIndex].company}
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="flex justify-center gap-2 mt-6">
//             {testimonials.map((_, i) =>
//             <button
//               key={i}
//               onClick={() => setCurrentIndex(i)}
//               className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`} />

//             )}
//           </div>
//         </div>
//       </div>
//     </section>);

// }

"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Founder & CEO",
    company: "Vertex Retail Solutions",
    image:
      "https://ui-avatars.com/api/?name=Amit+Verma&background=2563EB&color=fff",
    quote:
      "Naxora built our business website exactly as we envisioned. The process was smooth, communication was excellent, and the final product has received great feedback from our customers."
  },
  {
    name: "Neha Kulkarni",
    role: "Director",
    company: "SkillBridge Learning",
    image:
      "https://ui-avatars.com/api/?name=Neha+Kulkarni&background=7C3AED&color=fff",
    quote:
      "The team delivered a fast, modern platform with an excellent user experience. Their professionalism and timely delivery made the entire project stress-free for our organization."
  },
  {
    name: "Rohan Desai",
    role: "Managing Partner",
    company: "UrbanEdge Properties",
    image:
      "https://ui-avatars.com/api/?name=Rohan+Desai&background=06B6D4&color=fff",
    quote:
      "Our new CRM and website have simplified daily operations. Naxora understood our requirements quickly and delivered a reliable solution with great post-launch support."
  },
  {
    name: "Faisal Al Harbi",
    role: "Operations Manager",
    company: "Gulf Vision Trading LLC",
    image:
      "https://ui-avatars.com/api/?name=Faisal+Al+Harbi&background=0EA5E9&color=fff",
    quote:
      "Working with Naxora was a great experience. They developed a secure business platform that improved our internal workflow while meeting every project milestone."
  },
  {
    name: "Daniel Carter",
    role: "Product Manager",
    company: "NorthBridge Digital",
    image:
      "https://ui-avatars.com/api/?name=Daniel+Carter&background=10B981&color=fff",
    quote:
      "The team delivered clean, scalable software and maintained clear communication throughout the project. We'd happily work with Naxora again on future initiatives."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-5 md:pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center mb-14">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Client Success
          </h2>

          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by
            <span className="text-gradient">
              {" "}
              Growing Businesses
            </span>
          </h3>

          <p className="text-light dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Businesses trust Naxora Technology to deliver scalable software,
            AI-powered solutions, and digital products that create measurable
            business impact.
          </p>
        </div>

        {/* Slider */}

        <div className="relative">
          <button
            onClick={prev}
            className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -60,
              }}
              transition={{
                duration: 0.15,
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={`${testimonial.name}-${currentIndex}`}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="glass-card rounded-3xl p-8 relative flex flex-col h-full"
                >
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10 rotate-180" />

                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-lg leading-8 text-center mb-8 flex-grow relative z-10">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex flex-col items-center mt-auto">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4 border-2 border-primary/20"
                    /> */}

                    <div className="font-bold text-lg">
                      {testimonial.name}
                    </div>

                    {/* <div className="text-sm text-light dark:text-gray-400 text-center">
                      {testimonial.role}
                    </div>

                    <div className="text-primary text-sm font-semibold">
                      {testimonial.company}
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full ${i === currentIndex
                ? "w-10 h-2 bg-primary"
                : "w-2 h-2 bg-gray-300 dark:bg-gray-600"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}