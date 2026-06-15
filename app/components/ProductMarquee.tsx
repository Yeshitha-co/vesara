'use client';

import Image from 'next/image';
import { marqueeProducts } from '../data/products';

export default function ProductMarquee() {
  const items = [...marqueeProducts, ...marqueeProducts];

  return (
    <section className="py-16 md:py-20 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3 text-center">
          Our Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center">
          Premium <span className="text-gold-gradient">Spices & Dry Fruits</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-6 w-max hover:[animation-play-state:paused]">
          {items.map((product, idx) => (
            <article
              key={`${product.name}-${idx}`}
              className="group flex-shrink-0 w-64 md:w-72 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500"
            >
              <div className="relative h-48 md:h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-gold/90 text-charcoal rounded-full">
                  {product.category === 'spices' ? 'Spice' : 'Dry Fruit'}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-serif font-bold text-white mb-1">{product.name}</h3>
                {product.origin && (
                  <p className="text-sm text-white/60">{product.origin}</p>
                )}
                <a
                  href="/contact"
                  className="inline-block mt-4 text-xs font-semibold tracking-wider uppercase text-gold hover:text-gold-light transition-colors"
                >
                  Enquire Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
