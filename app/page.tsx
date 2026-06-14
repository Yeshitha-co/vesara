import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'VESARA | Home - Premium Spices & Dry Fruits Wholesale',
  description: 'Welcome to VESARA. Discover premium spices, dry fruits, and food ingredients sourced from finest origins. Your trusted B2B wholesale partner.',
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="gradient-maroon-gold py-20 md:py-32 text-white relative overflow-hidden">
        <div className="container-custom flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 animate-fade-in">
            <div className="inline-block bg-gold/20 px-4 py-2 rounded-full mb-4">
              <p className="text-gold text-sm font-semibold">Premium Quality Guaranteed</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-6 leading-tight">
              VESARA
            </h1>
            <p className="text-xl md:text-2xl text-gold mb-4 font-serif italic">
              Crafted from the Finest Origins
            </p>
            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
              Premium wholesale supplier of spices, dry fruits, and food ingredients for hotels, restaurants, and distributors across South India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-primary inline-block text-center">
                Get Quote Today
              </a>
              <a href="/products" className="btn-outline inline-block text-center">
                Explore Products
              </a>
            </div>
          </div>

          {/* Right - Brand Display */}
          <div className="flex-1 flex items-center justify-center animate-slide-up">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-gold/30 max-w-md text-center">
              <div className="text-6xl font-serif font-bold text-gold mb-4">VS</div>
              <h2 className="text-3xl font-serif font-bold text-gold mb-2">VESARA</h2>
              <p className="text-gold text-lg mb-6">Crafted from the Finest Origins</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">100+</div>
                  <p className="text-sm text-white/80">Products</p>
                </div>
                <div className="border-l border-gold/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">500+</div>
                  <p className="text-sm text-white/80">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon text-center mb-4">
            Why Choose VESARA?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We are committed to providing consistent quality, competitive pricing, and reliable service to all our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: 'Consistent Quality',
                description: 'Premium sourcing with rigorous quality inspection and grading standards.',
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                description: 'Best market rates without compromising on quality or consistency.',
              },
              {
                icon: '🚚',
                title: 'Reliable Supply',
                description: 'Dependable sourcing network ensuring uninterrupted supply.',
              },
              {
                icon: '🌍',
                title: 'Global Standards',
                description: 'International quality standards with hygiene and safety compliance.',
              },
              {
                icon: '📦',
                title: 'Flexible Packaging',
                description: 'Customizable bulk packaging solutions tailored to your needs.',
              },
              {
                icon: '🤝',
                title: 'Long-term Partnership',
                description: 'Customer-centric approach focused on building lasting relationships.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="card card-hover p-8 text-center">
                <div className="text-5xl text-gold mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold text-maroon mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon text-center mb-12">
            Our Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Spices',
                items: 'Black Pepper, Cardamom, Cloves, Nutmeg, Cinnamon & More',
                color: 'from-maroon to-gold',
              },
              {
                name: 'Dry Fruits',
                items: 'Cashews, Almonds, Pistachios, Raisins, Dates & More',
                color: 'from-gold to-maroon',
              },
              {
                name: 'Value-Added',
                items: 'Spice Powders, Custom Packing, Bulk Solutions & More',
                color: 'from-maroon via-gold to-maroon',
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${category.color} rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow card-hover`}
              >
                <h3 className="text-2xl font-serif font-bold mb-4">{category.name}</h3>
                <p className="text-white/90 mb-6">{category.items}</p>
                <a href="/products" className="inline-block px-6 py-2 bg-white text-maroon font-semibold rounded-lg hover:bg-cream transition-colors">
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get premium quality spices and dry fruits at competitive prices. Contact us for quotations and samples today.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
