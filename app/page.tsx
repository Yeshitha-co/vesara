import type { Metadata } from 'next';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductMarquee from './components/ProductMarquee';
import SectionHeading from './components/SectionHeading';
import { marketExpertise } from './data/products';

export const metadata: Metadata = {
  title: 'Y S Creations | Premium Spices & Dry Fruits Wholesale | Bengaluru',
  description:
    'Y S Creations, Bengaluru — wholesale supplier of premium spices, dry fruits and food ingredients for HORECA, distributors and food manufacturers across South India.',
};

const whyChoose = [
  'Consistent Quality',
  'Competitive Pricing',
  'Reliable Sourcing Network',
  'Bulk Supply Capability',
  'Prompt Deliveries',
  'Customer-Centric Approach',
  'Flexible Packaging Options',
  'Long-Term Business Relationships',
];

const industries = [
  'Hotels',
  'Restaurants',
  'Caterers',
  'Cloud Kitchens',
  'Spice Traders',
  'Distributors',
  'Dry Fruit Wholesalers',
  'Food Manufacturers',
  'Bakery & Confectionery',
  'Institutional Buyers',
];

const qualityPoints = [
  'Product Grading',
  'Quality Inspection',
  'Clean & Hygienic Handling',
  'Reliable Packaging',
  'Timely Deliveries',
  'Continuous Customer Support',
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-kraft-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/5 via-transparent to-gold/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-kraft-dark/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pt-28 pb-16 md:pt-32 md:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up order-2 lg:order-1">
            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-gold-dark mb-4">
              Bengaluru · Wholesale · Export Quality
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-charcoal leading-[1.1] mb-4">
              <span className="text-gold-gradient">Y S Creations</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-charcoal/70 mb-6">
              Crafted from the Finest Origins
            </p>
            <div className="gold-divider !mx-0 !ml-0" style={{ marginLeft: 0 }} />
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mb-8">
              Your trusted partner for <strong>spices</strong>, <strong>dry fruits</strong> and{' '}
              <strong>food ingredients</strong>. We serve hotels, restaurants, caterers, traders,
              distributors and food manufacturers with quality, consistency and dependable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-primary">
                Request a Quote
              </a>
              <a href="/products" className="btn-outline border-charcoal/20 text-charcoal hover:border-gold">
                View Products
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gold/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gold/30">
                <Image
                  src="/images/brand-card.png"
                  alt="Y S Creations — Crafted from the Finest Origins"
                  width={500}
                  height={700}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scrolling products */}
      <ProductMarquee />

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="About Us"
            title="Your Trusted Partner for"
            highlight="Spices, Dry Fruits & Food Ingredients"
            subtitle="Y S Creations is a Bengaluru-based wholesale supplier specializing in premium spices, dry fruits and food ingredients."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                We cater to Hotels, Restaurants, Caterers (HORECA), traders, distributors, food
                manufacturers and institutional buyers across Karnataka and South India.
              </p>
              <p>
                Our objective is to provide customers with consistent quality, reliable sourcing,
                competitive pricing and dependable service. By working closely with sourcing partners
                across India and international origins, we strive to ensure uninterrupted supply and
                quality assurance for our customers.
              </p>
              <a href="/about" className="inline-flex items-center text-gold-dark font-semibold tracking-wide hover:text-gold transition-colors">
                Read Our Full Story →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: 'Products' },
                { value: '500+', label: 'Clients Served' },
                { value: 'Pan-India', label: 'Sourcing Network' },
                { value: '15+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="card-premium p-6 text-center">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-kraft-texture">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/30 rounded-2xl translate-x-3 translate-y-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founders.png"
                  alt="Founders of Y S Creations"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Meet the Founders"
                title="Built on Trust,"
                highlight="Quality & Heritage"
                centered={false}
              />
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">
                At Y S Creations, we believe that great taste begins at the origin. Our spices and
                dry fruits are carefully sourced from the finest farms across the world and crafted
                with purity, aroma and care.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
                Timeless tradition. Finest quality. A family-led business committed to serving
                Bengaluru and South India&apos;s food industry with integrity and excellence.
              </p>
              <a href="/contact" className="btn-primary">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Premium"
            highlight="Product Range"
            subtitle="Whole spices, select dry fruits and value-added solutions — sourced globally, supplied reliably."
            light
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Spices',
                items: 'Black Pepper · Green Cardamom · Cloves · Cinnamon · Star Anise & more',
              },
              {
                title: 'Dry Fruits',
                items: 'Cashew Nuts · Almonds · Pistachios · Raisins · Dates & more',
              },
              {
                title: 'Value-Added',
                items: 'Spice Powders · Customized Packing · Bulk Solutions · Private Label',
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="group p-8 rounded-2xl border border-gold/20 bg-white/5 hover:bg-white/10 hover:border-gold/40 transition-all duration-500"
              >
                <h3 className="text-2xl font-serif font-bold text-gold mb-4">{cat.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{cat.items}</p>
                <a
                  href="/products"
                  className="text-xs font-semibold tracking-wider uppercase text-gold group-hover:text-gold-light transition-colors"
                >
                  Explore Range →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Market Expertise"
            title="Deep Knowledge Across"
            highlight="Key Spice Origins"
            subtitle="Few spice traders offer this level of sourcing expertise. We know our products — and the markets they come from."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketExpertise.map((item) => (
              <article key={item.spice} className="card-premium p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-serif font-bold text-charcoal">{item.spice}</h3>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-dark bg-gold/10 px-2 py-1 rounded">
                    Expert
                  </span>
                </div>
                <p className="text-xs font-semibold tracking-wider uppercase text-gold-dark mb-3">
                  {item.regions}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.expertise}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-kraft-texture">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Trusted Across the"
            highlight="Food Industry"
          />
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-charcoal border border-gold/20 shadow-sm hover:border-gold/50 hover:shadow-md transition-all"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Y S Creations"
            title="The Partner"
            highlight="You Can Rely On"
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl border border-gold/15 bg-white/5"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm">
                  ✓
                </span>
                <p className="text-sm text-white/80 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Quality Commitment"
            title="Consistency You Can"
            highlight="Count On"
            subtitle="We understand that consistency is critical for our customers. Every lot is handled with care."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPoints.map((point) => (
              <div key={point} className="card-premium p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold-dark font-bold">◆</span>
                </div>
                <p className="font-medium text-charcoal">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision + CTA */}
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Our Vision</p>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white max-w-3xl mx-auto leading-relaxed mb-10">
            To become a preferred sourcing and supply partner for spices, dry fruits and food
            ingredients by delivering value, quality and trust to every customer.
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            For enquiries, quotations and samples — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a
              href="https://wa.me/919606493393"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-gold border-gold/40"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
