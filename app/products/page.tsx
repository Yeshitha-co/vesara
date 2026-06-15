import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import ProductMarquee from '../components/ProductMarquee';
import { spiceProducts, dryFruitProducts } from '../data/products';

export const metadata: Metadata = {
  title: 'Products | Y S Creations — Spices, Dry Fruits & Food Ingredients',
  description:
    'Explore our complete range of premium whole spices, dry fruits and value-added food ingredients sourced from the finest origins worldwide.',
};

export default function Products() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Our Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Premium <span className="text-gold-gradient">Products</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Finest origins · Consistent quality · Bulk supply — enquire for quotations and samples.
          </p>
        </div>
      </section>

      <ProductMarquee />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Whole Spices"
            title="Premium"
            highlight="Spice Range"
            subtitle="Sourced from reputed growing regions and trade hubs to ensure quality and continuity of supply."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {spiceProducts.map((item) => (
              <article key={item.name} className="card-premium p-6 group">
                <h3 className="text-lg font-serif font-bold text-charcoal mb-2 group-hover:text-gold-dark transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold tracking-wider uppercase text-gold-dark mb-3">Origins</p>
                <p className="text-sm text-gray-600 mb-5">{item.origins}</p>
                <a href="/contact" className="text-xs font-semibold tracking-wider uppercase text-gold hover:text-gold-dark transition-colors">
                  Enquire →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-kraft-texture">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Dry Fruits"
            title="Select"
            highlight="Dry Fruit Range"
            subtitle="Premium dry fruits carefully sourced with rigorous quality checks and grading."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dryFruitProducts.map((item) => (
              <article key={item.name} className="card-premium p-6 group">
                <h3 className="text-lg font-serif font-bold text-charcoal mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-5">{item.detail}</p>
                <a href="/contact" className="text-xs font-semibold tracking-wider uppercase text-gold hover:text-gold-dark transition-colors">
                  Enquire →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Value-Added"
            title="Custom"
            highlight="Solutions"
            subtitle="Tailored to your specific requirements and business needs."
            light
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Spice Powders', desc: 'Fresh ground spice powders prepared to your specifications.' },
              { title: 'Customized Packing', desc: 'Flexible packaging from bulk to retail quantities.' },
              { title: 'Bulk Packing Solutions', desc: 'Large-scale packaging for distributors and retailers.' },
              { title: 'Private Label Supply', desc: 'Custom branding solutions, subject to requirement.' },
            ].map((product) => (
              <div key={product.title} className="p-8 rounded-2xl border border-gold/20 bg-white/5 hover:border-gold/40 transition-all">
                <h3 className="text-xl font-serif font-bold text-gold mb-3">{product.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{product.desc}</p>
                <a href="/contact" className="text-xs font-semibold tracking-wider uppercase text-gold">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Sourcing Strength"
            title="Global Origins,"
            highlight="Local Expertise"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { product: 'Black Pepper', origin: 'Karnataka, Kerala, Vietnam' },
              { product: 'Green Cardamom', origin: 'Kerala, Tamil Nadu' },
              { product: 'Black Cardamom', origin: 'Nepal, Sikkim, Siliguri' },
              { product: 'Cloves', origin: 'Madagascar, Zanzibar' },
              { product: 'Nutmeg & Mace', origin: 'Kerala' },
              { product: 'Cinnamon', origin: 'Sri Lanka & Other Origins' },
            ].map((item) => (
              <div key={item.product} className="flex items-center gap-4 p-4 rounded-xl border border-gold/15">
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal text-sm">{item.product}</p>
                  <p className="text-xs text-gray-500">{item.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-kraft-texture">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us for bulk orders, custom specifications or sample requests.
          </p>
          <a href="/contact" className="btn-primary">Get a Quote</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
