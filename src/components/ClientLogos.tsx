import React from 'react';
const logos = [
'Acme Corp',
'GlobalTech',
'Nexus Industries',
'Quantum AI',
'Stellar Systems',
'Apex Solutions',
'Vertex Data',
'Horizon Cloud'];

export function ClientLogos() {
  return (
    <section className="py-10 border-y border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-sm font-medium text-light uppercase tracking-widest">
          Trusted by businesses worldwide
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...logos, ...logos, ...logos].map((logo, i) =>
          <span
            key={i}
            className="mx-8 text-xl md:text-2xl font-heading font-bold text-gray-400 dark:text-gray-600 opacity-50 hover:opacity-100 transition-opacity cursor-default">
            
              {logo}
            </span>
          )}
        </div>
      </div>
    </section>);

}