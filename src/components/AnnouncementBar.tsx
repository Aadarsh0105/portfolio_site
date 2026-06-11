import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white px-4 py-2.5 text-sm font-medium relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          AI Automation, Software Development & Digital Transformation Solutions
          for Modern Businesses
        </span>
        <a
          href="/#contact"
          className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors text-xs sm:text-sm whitespace-nowrap">
          
          Book Free Consultation <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>);

}
