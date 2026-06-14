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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-gold font-serif text-2xl font-bold">
            VS
          </div>
          <div>
            <h1 className="text-maroon font-serif font-bold text-lg">VESARA</h1>
            <p className="text-xs text-gray-600">Crafted from Finest Origins</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-gold font-medium transition-colors underline-gold"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919606493393"
            className="btn-primary text-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-maroon text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream py-4 px-4 border-t border-gold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-gold font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919606493393"
            className="block py-3 mt-2 text-center bg-gold text-maroon font-semibold rounded-lg"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
