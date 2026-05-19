"use client"

import { useEffect, useState } from 'react';
import { MenuIcon, XIcon, RocketIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
const NAV_LINKS = [
{
  name: 'Home',
  href: '#home'
},
{
  name: 'About',
  href: '#about'
},
{
  name: 'Services',
  href: '#services'
},
{
  name: 'Portfolio',
  href: '#portfolio'
},
{
  name: 'Pricing',
  href: '#pricing'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center text-white">
              <RocketIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">
              Launch<span className="text-gradient">Fast</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) =>
              <li key={link.name}>
                  <a
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                  
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
            <div className="flex items-center gap-4 border-l border-border pl-4">
              <ThemeToggle />
              <a
                href="#contact"
                className="px-4 py-2 rounded-full bg-text-primary text-background text-sm font-medium hover:opacity-90 transition-opacity">
                
                Get Started
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu">
              
              {isMobileMenuOpen ?
              <XIcon className="w-6 h-6" /> :

              <MenuIcon className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) =>
            <li key={link.name}>
                  <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-text-secondary hover:text-text-primary">
                
                    {link.name}
                  </a>
                </li>
            )}
            </ul>
            <div className="pt-4 border-t border-border">
              <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-accent text-white font-medium">
              
                Get Started
              </a>
            </div>
          </div>
        </div>
      }
    </header>);

}