'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-gold/20 py-3'
          : 'bg-cream/80 backdrop-blur-sm py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-gold/40 group-hover:ring-gold transition-all">
            <Image
              src="/images/brand-card.png"
              alt="Y S Creations"
              fill
              className="object-cover object-top scale-[2.5] translate-y-1"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-xl md:text-2xl font-serif font-bold text-gold-gradient tracking-wide">
              Y S Creations
            </p>
            <p className={`text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium ${scrolled ? 'text-gold/70' : 'text-gold-dark/80'}`}>
              Crafted from the Finest Origins
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                scrolled ? 'text-white/80 hover:text-gold' : 'text-charcoal/70 hover:text-gold-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold tracking-wide bg-gold text-charcoal rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.4)]"
          >
            Get a Quote
          </a>

          <button
            type="button"
            className={`md:hidden text-2xl p-1 ${scrolled ? 'text-gold' : 'text-charcoal'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-md border-t py-4 px-4 animate-fade-in-down ${
          scrolled ? 'bg-charcoal/98 border-gold/20' : 'bg-cream/98 border-gold/20'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 font-medium border-b last:border-0 ${
                scrolled
                  ? 'text-white/90 hover:text-gold border-white/5'
                  : 'text-charcoal/80 hover:text-gold-dark border-charcoal/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/contact"
            className="block mt-4 py-3 text-center bg-gold text-charcoal font-semibold rounded-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
