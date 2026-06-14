import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'VESARA | Premium Spices & Dry Fruits Supplier | India',
  description: 'Y S Creations VESARA - Wholesale supplier of premium spices, dry fruits & food ingredients for HORECA, distributors & food manufacturers across South India.',
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO SECTION - STUNNING */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-yellow-600 min-h-screen flex items-center">
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-2 h-12 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full"></div>
              <span className="text-yellow-200 font-bold text-sm tracking-widest">PREMIUM B2B SUPPLIER</span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight font-serif">
                VESARA
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-200 font-light italic font-serif mb-6">
                Crafted from the Finest Origins
              </p>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Your trusted partner for <span className="font-bold text-yellow-300">premium spices</span>, <span className="font-bold text-yellow-300">dry fruits</span>, and <span className="font-bold text-yellow-300">food ingredients</span> serving HORECA, distributors, and food manufacturers across South India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-black rounded-full shadow-2xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 inline-block text-center text-lg">
                📞 Get Quote Now
              </a>
              <a href="/products" className="px-8 py-4 bg-white/20 backdrop-blur text-white font-bold rounded-full border-2 border-white hover:bg-white/30 transition-all duration-300 inline-block text-center text-lg">
                Explore Products →
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-black text-yellow-300">100+</div>
                <p className="text-yellow-100 text-sm font-semibold mt-1">Products</p>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-300">500+</div>
                <p className="text-yellow-100 text-sm font-semibold mt-1">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-300">15+</div>
                <p className="text-yellow-100 text-sm font-semibold mt-1">Years Exp</p>
              </div>
            </div>
          </div>

          {/* Right - Premium Brand Card */}
          <div className="animate-fade-in-down">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-3xl blur-2xl opacity-40"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border-2 border-white/30 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-red-500 rounded-full opacity-80 blur-lg"></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 via-yellow-200 to-red-400 rounded-full flex items-center justify-center">
                      <span className="text-5xl font-black text-red-900">✓</span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-4xl font-black text-white font-serif mb-2">VESARA</h2>
                    <p className="text-xl text-yellow-200 font-light italic">Finest Origins</p>
                  </div>

                  <div className="space-y-2 text-white/80 text-sm">
                    <p>🌾 Premium Spices</p>
                    <p>🥜 Exotic Dry Fruits</p>
                    <p>📦 Customized Solutions</p>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-yellow-200 font-bold">⭐ Trusted Partner</p>
                    <p className="text-white/60 text-xs mt-2">Quality • Reliability • Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VESARA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-serif">
              Why Choose <span className="bg-gradient-to-r from-red-700 to-yellow-600 bg-clip-text text-transparent">VESARA</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine premium quality with exceptional service and competitive pricing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⭐', title: 'Premium Quality', desc: 'Rigorous sourcing from finest origins with quality inspection & grading' },
              { icon: '💰', title: 'Best Pricing', desc: 'Competitive market rates without compromising quality or consistency' },
              { icon: '🚚', title: 'Reliable Supply', desc: 'Dependable network ensuring uninterrupted supply chain management' },
              { icon: '🌍', title: 'Global Standards', desc: 'International quality compliance with hygiene & safety certifications' },
              { icon: '📦', title: 'Flexible Packaging', desc: 'Customizable bulk to retail packing solutions for any requirement' },
              { icon: '🤝', title: 'Long-term Partnerships', desc: 'Customer-centric approach focused on building lasting relationships' },
            ].map((item, idx) => (
              <div key={idx} className="card card-hover p-8 text-center group hover:bg-gradient-to-b hover:from-yellow-50 hover:to-transparent">
                <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-serif">
              Our <span className="bg-gradient-to-r from-red-700 to-yellow-600 bg-clip-text text-transparent">Premium Categories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: '🌶️ SPICES', desc: 'Black Pepper, Cardamom, Cloves, Nutmeg, Cinnamon & Premium Selection', color: 'from-red-600 to-red-700' },
              { name: '🥜 DRY FRUITS', desc: 'Cashews, Almonds, Pistachios, Raisins, Dates & Exotic Collections', color: 'from-yellow-500 to-yellow-600' },
              { name: '📦 VALUE-ADDED', desc: 'Spice Powders, Custom Packing, Bulk Solutions & Private Label', color: 'from-orange-500 to-red-600' },
            ].map((cat, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${cat.color} rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group card-hover`}>
                <h3 className="text-3xl md:text-4xl font-black mb-4 font-serif group-hover:scale-110 transition-transform duration-300">{cat.name}</h3>
                <p className="text-lg text-white/90 leading-relaxed mb-6">{cat.desc}</p>
                <a href="/products" className="inline-block px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-yellow-100 transition-all duration-300 group-hover:scale-110">
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-red-800 via-red-700 to-yellow-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 font-serif">
            Ready to Partner with VESARA?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Get premium quality spices and dry fruits with competitive pricing. Request quotations and samples today.
          </p>
          <a href="/contact" className="inline-block px-10 py-5 bg-white text-red-900 font-black text-xl rounded-full shadow-2xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
            📞 Get Your Quote Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
