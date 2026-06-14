export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon text-gold py-12">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-gold mb-4">VESARA</h3>
            <p className="text-sm text-gold/80 mb-4">
              Trusted B2B wholesale supplier of premium spices, dry fruits, and food ingredients.
            </p>
            <p className="text-sm text-gold/80">
              Crafted from the Finest Origins
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gold/80 hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gold/80 hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-gold/80 hover:text-gold transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gold/80 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-gold mb-4">Contact Us</h4>
            <p className="text-sm text-gold/80 mb-2">
              📍 Sattva Anugraha Apartments, Sajjepalya, Bangalore - 560079
            </p>
            <p className="text-sm text-gold/80 mb-2">
              📞 +91 9606493393 / 9606937273
            </p>
            <p className="text-sm text-gold/80">
              ✉️ yscreations36@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/30 pt-8">
          <div className="text-center text-sm text-gold/80">
            <p>
              &copy; {currentYear} VESARA - Y S Creations. All rights reserved.
            </p>
            <p className="mt-2">
              Premium Spices | Dry Fruits | Food Ingredients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
