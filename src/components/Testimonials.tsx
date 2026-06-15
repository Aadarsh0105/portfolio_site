import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
const testimonials = [
{
  name: 'Sarah Jenkins',
  role: 'CTO',
  company: 'FinTech Innovators',
  image:
  'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=2563EB&color=fff',
  quote:
  "Naxora Technology completely transformed our fraud detection systems. Their AI implementation reduced false positives by 85% and saved us millions annually. The team's expertise is unmatched."
},
{
  name: 'David Chen',
  role: 'VP of Engineering',
  company: 'HealthSync',
  image:
  'https://ui-avatars.com/api/?name=David+Chen&background=7C3AED&color=fff',
  quote:
  'We needed to modernize our legacy telemedicine platform quickly. They delivered a scalable, secure microservices architecture ahead of schedule. Truly a world-class engineering team.'
},
{
  name: 'Elena Rodriguez',
  role: 'Director of Operations',
  company: 'Global Logistics Co.',
  image:
  'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=06B6D4&color=fff',
  quote:
  "The automated workflow system they built for us eliminated 40 hours of manual data entry per week. It's rare to find an agency that understands both deep tech and business operations."
}];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
  setCurrentIndex(
    (prev) => (prev - 1 + testimonials.length) % testimonials.length
  );
  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Client Success
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Partners Say
          </h3>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) =>
            <Star key={i} className="w-5 h-5 fill-current" />
            )}
            <span className="text-dark dark:text-white font-bold ml-2">
              4.9 Average Rating
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full glass-card hover:text-primary transition-colors">
            
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full glass-card hover:text-primary transition-colors">
            
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 50
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -50
                }}
                transition={{
                  duration: 0.3
                }}
                className="glass-card p-8 md:p-12 rounded-3xl text-center relative">
                
                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10 rotate-180" />

                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full mb-4 border-2 border-primary/20" />
                  
                  <div className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-light dark:text-gray-400">
                    {testimonials[currentIndex].role},{' '}
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) =>
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

}