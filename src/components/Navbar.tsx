'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems = [
  { name: 'Drinks', href: '#menu' },
  { name: 'Food', href: '#food' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="navbar" className="bg-emerald-950 text-slate-100 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-slate-100 hover:text-slate-300 transition-colors">
              <Image
                src={"/logo.gif"}
                alt={"Scéal eile logo"}
                width={50}
                height={50}
                className=""
                sizes=""
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-slate-100 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-700 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-slate-100 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-100 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 relative">
                <span
                  className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out translate-y-2 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out translate-y-4 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-48 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 shadow-lg">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className="text-slate-300 hover:text-slate-100 block px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
