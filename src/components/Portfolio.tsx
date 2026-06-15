"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
const CATEGORIES = ['All', 'Websites', 'UI', 'Branding'];
const PROJECTS = [
{
  id: 1,
  title: 'Fintech Dashboard',
  category: 'UI',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
},
{
  id: 2,
  title: 'Eco Store',
  category: 'Websites',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
},
{
  id: 3,
  title: 'Naxora Brand Identity',
  category: 'Branding',
  image:
  'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop'
},
{
  id: 4,
  title: 'Health App',
  category: 'UI',
  image:
  'https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop'
},
{
  id: 5,
  title: 'SaaS Landing Page',
  category: 'Websites',
  image:
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
},
{
  id: 6,
  title: 'Urban Coffee',
  category: 'Branding',
  image:
  'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop'
}];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = PROJECTS.filter(
    (project) =>
    activeCategory === 'All' || project.category === activeCategory
  );
  return (
    <section id="portfolio" className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="text-3xl md:text-4xl font-bold mb-4">
              
              Selected <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="text-lg text-text-secondary max-w-xl">
              
              Explore some of our recent projects and see how we've helped
              businesses grow.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="flex flex-wrap gap-2 p-1 bg-background border border-border rounded-xl">
            
            {CATEGORIES.map((category) =>
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeCategory === category ? 'text-white' : 'text-text-secondary hover:text-text-primary'}`}>
              
                {activeCategory === category &&
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-text-primary rounded-lg"
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.6
                }} />

              }
                <span className="relative z-10">{category}</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) =>
            <motion.div
              key={project.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}
              className="group relative rounded-2xl overflow-hidden bg-background border border-border">
              
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text-primary text-background font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    
                      View Project
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-medium text-accent-start mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

}