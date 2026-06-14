import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Products | VESARA - Spices & Dry Fruits',
  description: 'Explore our complete range of premium spices, dry fruits, and food ingredients sourced from finest origins worldwide.',
};

const products = {
  spices: [
    { name: 'Black Pepper', origins: 'Karnataka, Kerala, Vietnam' },
    { name: 'Green Cardamom', origins: 'Kerala, Tamil Nadu' },
    { name: 'Black Cardamom', origins: 'Nepal, Sikkim, Siliguri' },
    { name: 'Cloves', origins: 'Madagascar, Zanzibar' },
    { name: 'Nutmeg & Mace', origins: 'Kerala' },
    { name: 'Cinnamon', origins: 'Sri Lanka & Other Origins' },
    { name: 'Star Anise', origins: 'India & International' },
    { name: 'Bay Leaf', origins: 'India & International' },
  ],
  dryFruits: [
    { name: 'Cashew Nuts', grade: 'Premium Grade' },
    { name: 'Almonds', grade: 'California & Indian' },
    { name: 'Pistachios', grade: 'Iranian Premium' },
    { name: 'Raisins', grade: 'Golden & Black' },
    { name: 'Dates', grade: 'Various Varieties' },
    { name: 'Walnuts', grade: 'Premium Quality' },
  ],
};

export default function Products() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gold text-maroon section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Products</h1>
          <p className="text-xl md:text-2xl">Premium Quality | Finest Origins | Competitive Pricing</p>
        </div>
      </section>

      {/* Spices Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-maroon mb-4">Spices</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            We source premium whole spices from reputed growing regions and trade hubs to ensure quality and continuity of supply.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.spices.map((item, idx) => (
              <div key={idx} className="card p-6 card-hover">
                <h3 className="text-xl font-serif font-bold text-maroon mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Origins:</span> {item.origins}
                </p>
                <a href="/contact" className="text-gold font-semibold hover:text-maroon transition-colors">
                  Request Quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dry Fruits Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-maroon mb-4">Dry Fruits</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Premium dry fruits carefully sourced from the finest origins worldwide, with rigorous quality checks and grading.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.dryFruits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow card-hover">
                <h3 className="text-xl font-serif font-bold text-maroon mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Grade:</span> {item.grade}
                </p>
                <a href="/contact" className="text-gold font-semibold hover:text-maroon transition-colors">
                  Request Quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Products */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-maroon mb-4">Value-Added Products</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Customized solutions tailored to your specific requirements and business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Spice Powders',
                description: 'Fresh ground spice powders prepared to your specifications',
              },
              {
                title: 'Customized Packing',
                description: 'Flexible packaging options from bulk to retail quantities',
              },
              {
                title: 'Bulk Packing Solutions',
                description: 'Large-scale packaging for distributors and retailers',
              },
              {
                title: 'Private Label Supply',
                description: 'Custom branding solutions (subject to requirement)',
              },
            ].map((product, idx) => (
              <div key={idx} className="gradient-maroon-gold rounded-xl p-8 text-white card-hover">
                <h3 className="text-2xl font-serif font-bold text-gold mb-3">{product.title}</h3>
                <p className="text-white/90 mb-4">{product.description}</p>
                <a href="/contact" className="inline-block px-4 py-2 bg-white text-maroon font-semibold rounded-lg hover:bg-cream transition-colors">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-maroon text-gold section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Quality Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { icon: '📊', label: 'Product Grading' },
              { icon: '✅', label: 'Quality Inspection' },
              { icon: '🧼', label: 'Clean & Hygienic' },
              { icon: '📦', label: 'Reliable Packaging' },
              { icon: '⏱️', label: 'Timely Delivery' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <p className="font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold text-maroon mb-6">Need a Custom Quote?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for bulk orders, custom specifications, or sample requests.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Get a Quote Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
