'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl border-b-4 border-yellow-500/30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-red-700 rounded-full opacity-90 group-hover:opacity-100 transition-all shadow-lg"></div>
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center text-lg font-bold text-yellow-600">✓</div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-800 to-yellow-600 bg-clip-text text-transparent tracking-tight">VESARA</h1>
            <p className="text-xs md:text-sm text-yellow-700 font-bold tracking-widest">FINEST ORIGINS</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-gray-800 hover:text-yellow-600 font-bold text-sm transition-all duration-300 hover:bg-yellow-50 rounded-lg underline-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919606493393"
            className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-red-900 font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm"
          >
            📞 Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-800 text-2xl font-bold hover:text-yellow-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-yellow-50 to-red-50 py-4 px-4 border-t-4 border-yellow-500/30 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-gray-800 hover:text-yellow-600 font-bold text-base transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919606493393"
            className="block py-3 mt-3 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg"
          >
            📞 Call Now
          </a>
        </div>
      )}
    </header>
  );
}
