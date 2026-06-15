import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/30">
                <Image
                  src="/images/brand-card.png"
                  alt="Y S Creations"
                  fill
                  className="object-cover object-top scale-[2.5] translate-y-1"
                />
              </div>
              <div>
                <p className="text-xl font-serif font-bold text-gold-gradient">Y S Creations</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60">Bengaluru, India</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Your trusted wholesale partner for premium spices, dry fruits and food ingredients — serving HORECA, distributors and food manufacturers across South India.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-gold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-gold mb-5 text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>Sattva Anugraha Apartments, Sajjepalya, Bengaluru — 560079</p>
              <p>
                <a href="tel:+919606493393" className="hover:text-gold transition-colors">+91 9606493393</a>
              </p>
              <p>
                <a href="tel:+919606937273" className="hover:text-gold transition-colors">+91 9606937273</a>
              </p>
              <p>
                <a href="mailto:yscreations36@gmail.com" className="hover:text-gold transition-colors">
                  yscreations36@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-gold mb-5 text-lg">We Supply</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Premium Whole Spices</li>
              <li>Select Dry Fruits</li>
              <li>Spice Powders & Blends</li>
              <li>Bulk & Custom Packing</li>
              <li>Private Label Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {currentYear} Y S Creations. All rights reserved.</p>
          <p className="tracking-wider uppercase">Quality · Consistency · Trust</p>
        </div>
      </div>
    </footer>
  );
}
