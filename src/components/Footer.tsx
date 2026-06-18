import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, PhoneIcon } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

  return (
    <footer className="bg-[#0f172a] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo2.png"
                alt="Naxora Technology"
                width={210}
                height={64}
                priority
                quality={90}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-7 text-gray-400 max-w-sm">
              Premium technology consulting and development agency specializing
              in AI solutions and digital transformation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Useful Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Legal Pages
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/cookie-policy" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Social Media
            </h4>
            <div className="flex items-center gap-3 mb-5">
              {/* <a
                href="#"
                aria-label="X"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 flex items-center justify-center transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/naxoratechnology"
                aria-label="LinkedIn"
                target='blank'
                className="w-10 h-10 rounded-full border border-gray-200 bg-gray-300 hover:bg-gray-50 text-gray-800 flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              {/* <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-200 bg-gray-300 hover:bg-gray-50 text-gray-800 flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gray-200 bg-gray-300 hover:bg-gray-50 text-gray-800 flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a> */}
            </div>

            {phoneNumber ? (
              <a href={`tel:${phoneNumber}`} className="btn-primary py-2 px-5 text-sm">
                <PhoneIcon className="w-4 h-4 me-2" /> Call Now
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 mt-8 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            Copyright {new Date().getFullYear()} Naxora Technology. All rights reserved.
          </div>
        </div>
      </div>

      {/* <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 transition-colors shadow-lg hidden md:block"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button> */}
    </footer>
  );
}
