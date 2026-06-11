import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-navy border-t border-gray-200 dark:border-white/10 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Nexus<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-light dark:text-gray-400 text-sm mb-6 max-w-xs">
              Premium technology consulting and development agency specializing
              in AI solutions and digital transformation.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-light hover:text-primary transition-colors">
                {/* <Twitter className="w-5 h-5" /> */}
              </a>
              <a href="#" className="text-light hover:text-primary transition-colors">
                {/* <Linkedin className="w-5 h-5" /> */}
              </a>
              <a href="#" className="text-light hover:text-primary transition-colors">
                {/* <Github className="w-5 h-5" /> */}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-light dark:text-gray-400">
              <li>
                <a href="/#solutions" className="hover:text-primary transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-light dark:text-gray-400">
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/#careers" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/#blog" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-4">Subscribe to Newsletter</h4>
            <p className="text-sm text-light dark:text-gray-400 mb-4">
              Get the latest insights on AI and tech trends.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
              />
              <button
                type="submit"
                className="btn-primary py-2 px-4 text-sm rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-light dark:text-gray-400">
            Copyright {new Date().getFullYear()} NexusAI. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-light dark:text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-dark dark:text-white transition-colors shadow-lg hidden md:block"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
