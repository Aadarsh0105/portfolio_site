import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Menu, PhoneIcon, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Services',
    href: '/services'
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
    href: '/pricing'
  },
  // {
  //   name: 'Case Studies',
  //   href: '/#case-studies'
  // },
  {
    name: 'Blog',
    href: '/blog'
  },
  // {
  //   name: 'Careers',
  //   href: '/#careers'
  // },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'FAQs',
    href: '/faq'
  }];

export function Navbar() {
  const pathname = usePathname();

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
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0 glass-nav py-3 shadow-sm' : 'bg-white/95 backdrop-blur-md py-4'}`}
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
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${pathname === link.href
                  ? 'text-primary'
                  : 'text-light hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
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
        <div className="absolute top-full left-0 right-0 bg-white backdrop-blur-md border-t border-gray-200/50 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) =>
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-gray-100 text-dark'
                  }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
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
