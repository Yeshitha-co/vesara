import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'About VESARA | Premium Spices Supplier',
  description: 'Learn about Y S Creations - VESARA. Trusted B2B wholesale supplier of premium spices and dry fruits based in Bengaluru, India.',
};

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-maroon text-gold section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About VESARA</h1>
          <p className="text-xl md:text-2xl font-serif italic">Crafted from the Finest Origins</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-maroon mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Y S Creations is a Bengaluru-based wholesale supplier specializing in premium spices, dry fruits, and food ingredients. We cater to hotels, restaurants, caterers (HORECA), traders, distributors, food manufacturers, and institutional buyers across Karnataka and South India.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is to provide customers with consistent quality, reliable sourcing, competitive pricing, and dependable service. By working closely with sourcing partners across India and international origins, we ensure uninterrupted supply and quality assurance for all our clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that great taste begins at the origin. Our spices and dry fruits are carefully sourced from the finest farms across the world and crafted with purity, aroma, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: 'Products' },
              { number: '500+', label: 'Clients' },
              { number: 'Pan-India', label: 'Reach' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <div className="text-4xl font-serif font-bold text-gold mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-maroon text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality', icon: '✓', desc: 'Rigorous quality inspection and premium sourcing' },
              { title: 'Reliability', icon: '🤝', desc: 'Consistent supply and dependable service' },
              { title: 'Transparency', icon: '💡', desc: 'Clear pricing and honest communication' },
              { title: 'Excellence', icon: '⭐', desc: 'Continuous improvement and best practices' },
            ].map((value, idx) => (
              <div key={idx} className="card p-6 text-center card-hover">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-maroon mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="gradient-maroon-gold text-white section-padding">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-4xl font-serif font-bold text-gold mb-6">Our Vision</h2>
          <p className="text-xl leading-relaxed">
            To become a preferred sourcing and supply partner for spices, dry fruits, and food ingredients by delivering value, quality, and trust to every customer.
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-maroon text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '🏨 Hotels',
              '🍽️ Restaurants',
              '👨‍🍳 Caterers & Cloud Kitchens',
              '🛒 Spice Traders',
              '📦 Distributors',
              '🌾 Food Manufacturers',
              '🎂 Bakery & Confectionery Units',
              '🏛️ Institutional Buyers',
              '🏪 Retail Partners',
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg font-medium text-gray-700">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
