export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 md:py-20 border-t-4 border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full opacity-80"></div>
                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center text-sm font-bold text-yellow-600">✓</div>
              </div>
              <h3 className="text-2xl font-black text-white font-serif">VESARA</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Premium B2B wholesale supplier of spices, dry fruits & food ingredients serving HORECA & distributors.
            </p>
            <p className="text-xs text-yellow-400 font-bold tracking-widest">
              CRAFTED FROM FINEST ORIGINS
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="font-bold text-white mb-6 text-lg font-serif">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                  → Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                  → About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                  → Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="font-bold text-white mb-6 text-lg font-serif">Contact</h4>
            <div className="space-y-4 text-sm">
              <p className="text-gray-300">
                <span className="text-yellow-400 font-bold">📍</span> Sattva Anugraha Apartments, Sajjepalya, Bangalore - 560079
              </p>
              <p className="text-gray-300">
                <span className="text-yellow-400 font-bold">📞</span> +91 9606493393
              </p>
              <p className="text-gray-300">
                <span className="text-yellow-400 font-bold">📞</span> +91 9606937273
              </p>
              <p className="text-gray-300">
                <span className="text-yellow-400 font-bold">✉️</span> yscreations36@gmail.com
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="font-bold text-white mb-6 text-lg font-serif">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">✓ Premium Sourcing</li>
              <li className="text-gray-300">✓ Quality Grading</li>
              <li className="text-gray-300">✓ Custom Packaging</li>
              <li className="text-gray-300">✓ Bulk Supply</li>
              <li className="text-gray-300">✓ Fast Delivery</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} <span className="font-bold text-yellow-400">VESARA</span> - Y S Creations
              </p>
              <p className="text-xs text-gray-500 mt-1">
                All rights reserved
              </p>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">CERTIFIED PARTNER</p>
              <p className="text-sm text-yellow-400 font-bold">Quality • Reliability • Excellence</p>
            </div>

            {/* Social / Web */}
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-400 mb-2">PREMIUM B2B SUPPLIER</p>
              <p className="text-sm text-gray-300">Premium Spices | Dry Fruits | Food Ingredients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent */}
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
}
