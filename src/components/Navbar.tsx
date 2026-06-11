import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Menu, PhoneIcon, X } from 'lucide-react';
import Image from 'next/image';
const navLinks = [
  {
    name: 'Home',
    href: '/#home'
  },
  {
    name: 'About',
    href: '/#about'
  },
  {
    name: 'Services',
    href: '/#services'
  },
  // {
  //   name: 'Solutions',
  //   href: '/#solutions'
  // },
  // {
  //   name: 'Industries',
  //   href: '/#industries'
  // },
  {
    name: 'Pricing',
    href: '/#pricing'
  },
  // {
  //   name: 'Case Studies',
  //   href: '/#case-studies'
  // },
  {
    name: 'Blog',
    href: '/#blog'
  },
  // {
  //   name: 'Careers',
  //   href: '/#careers'
  // },
  {
    name: 'Contact',
    href: '/#contact'
  }];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0 glass-nav py-3 shadow-sm' : 'top-[40px] sm:top-[44px] bg-white/95 backdrop-blur-md py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo1.png"
              alt="Naxora Technology"
              width={233}
              height={64}
              priority
              quality={90}
              className="h-10 w-48 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) =>
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-light hover:text-primary transition-colors whitespace-nowrap">

                {link.name}
              </a>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="btn-primary py-2 px-5 text-sm"
            >
              <PhoneIcon className="w-4 h-4 me-2" /> Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-dark">

              {mobileMenuOpen ?
                <X className="w-6 h-6" /> :

                <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen &&
        <div className="absolute top-full left-0 right-0 glass-nav border-t border-gray-200/50 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) =>
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 text-sm font-medium transition-colors">

                {link.name}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            )}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                <PhoneIcon className="w-4 h-4 me-2" /> Call Now
              </a>
            </div>
          </div>
        </div>
      }
    </header>);

}
