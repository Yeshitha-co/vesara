import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import { marketExpertise } from '../data/products';

export const metadata: Metadata = {
  title: 'About Us | Y S Creations — Premium Spices & Dry Fruits',
  description:
    'Learn about Y S Creations, Bengaluru — a trusted wholesale supplier of premium spices, dry fruits and food ingredients for HORECA and distributors.',
};

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            <span className="text-gold-gradient">Y S Creations</span>
          </h1>
          <p className="text-xl font-serif italic text-white/60">Crafted from the Finest Origins</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Great Taste Begins"
                highlight="at the Origin"
                centered={false}
              />
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Y S Creations, Bengaluru, is a wholesale supplier specializing in spices, dry fruits
                  and food ingredients. We cater to hotels, restaurants, caterers, traders, distributors
                  and food manufacturers with a focus on quality, consistency, competitive pricing and
                  dependable service.
                </p>
                <p>
                  We cater to Hotels, Restaurants, Caterers (HORECA), traders, distributors, food
                  manufacturers and institutional buyers across Karnataka and South India. Our objective
                  is to provide customers with consistent quality, reliable sourcing, competitive pricing
                  and dependable service.
                </p>
                <p>
                  By working closely with sourcing partners across India and international origins, we
                  strive to ensure uninterrupted supply and quality assurance for our customers.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gold/20">
              <Image
                src="/images/founders.png"
                alt="Founders of Y S Creations"
                width={600}
                height={750}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-kraft-texture">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '100+', label: 'Products' },
              { number: '500+', label: 'Clients' },
              { number: 'Pan-India', label: 'Reach' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="card-premium p-6">
                <p className="text-3xl font-serif font-bold text-gold-gradient">{stat.number}</p>
                <p className="text-gray-600 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Market Expertise"
            title="Specialist Knowledge in"
            highlight="Premium Spices"
            subtitle="Our deep understanding of origin markets sets us apart from typical commodity suppliers."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketExpertise.map((item) => (
              <article key={item.spice} className="card-premium p-6">
                <h3 className="text-lg font-serif font-bold text-charcoal mb-2">{item.spice}</h3>
                <p className="text-xs font-semibold tracking-wider uppercase text-gold-dark mb-3">{item.regions}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.expertise}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Core Values"
            title="What Drives"
            highlight="Everything We Do"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Quality', desc: 'Rigorous inspection and premium sourcing from reputed origins.' },
              { title: 'Reliability', desc: 'Consistent supply and dependable service you can count on.' },
              { title: 'Transparency', desc: 'Honest communication and clear business practices.' },
              { title: 'Excellence', desc: 'Continuous improvement in every aspect of our operations.' },
            ].map((value) => (
              <div key={value.title} className="p-6 rounded-xl border border-gold/20 bg-white/5">
                <h3 className="text-xl font-serif font-bold text-gold mb-3">{value.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-kraft-texture">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <SectionHeading eyebrow="Our Vision" title="Building Lasting" highlight="Partnerships" />
          <p className="text-lg text-gray-700 leading-relaxed">
            To become a preferred sourcing and supply partner for spices, dry fruits and food
            ingredients by delivering value, quality and trust to every customer.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading eyebrow="Industries" title="Who We" highlight="Serve" />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Hotels', 'Restaurants', 'Caterers & Cloud Kitchens', 'Spice Traders',
              'Distributors', 'Food Manufacturers', 'Bakery & Confectionery', 'Institutional Buyers',
            ].map((industry) => (
              <span key={industry} className="px-5 py-2.5 bg-cream rounded-full text-sm font-medium border border-gold/20">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
