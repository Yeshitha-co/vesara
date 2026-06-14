'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gold text-maroon section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">Get in Touch | Request Quotes | Order Samples</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '📍',
                title: 'Address',
                content: '#001, Tower 14, Sattva Anugraha Apartments, Sajjepalya, Bangalore - 560079',
              },
              {
                icon: '📞',
                title: 'Phone',
                content: '+91 9606493393 / 9606937273',
              },
              {
                icon: '✉️',
                title: 'Email',
                content: 'yscreations36@gmail.com',
              },
            ].map((info, idx) => (
              <div key={idx} className="card p-8 text-center card-hover">
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-serif font-bold text-maroon mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-maroon mb-6">Send Us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-gold text-maroon rounded-lg">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select Product Category</option>
                  <option value="spices">Spices</option>
                  <option value="dry-fruits">Dry Fruits</option>
                  <option value="value-added">Value-Added Products</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message / Inquiry"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-maroon mb-6">Why Contact Us?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-maroon mb-2">📋 Request Quotations</h3>
                  <p className="text-gray-600">
                    Get competitive quotes for bulk orders with transparent pricing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-maroon mb-2">🎁 Request Samples</h3>
                  <p className="text-gray-600">
                    Try our premium products before placing bulk orders.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-maroon mb-2">📞 Direct Contact</h3>
                  <p className="text-gray-600">
                    Speak directly with our team for custom requirements and special orders.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-maroon mb-2">💼 Partnership Opportunities</h3>
                  <p className="text-gray-600">
                    Explore wholesale and distribution opportunities with VESARA.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-maroon mb-2">🚚 Bulk Orders</h3>
                  <p className="text-gray-600">
                    Special pricing and logistics support for large volume orders.
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-cream rounded-lg border-2 border-gold">
                <h4 className="font-serif font-bold text-maroon mb-3">Quick Contact</h4>
                <p className="text-sm text-gray-600 mb-3">
                  For urgent inquiries, call us directly:
                </p>
                <a
                  href="tel:+919606493393"
                  className="block text-center py-2 px-4 bg-gold text-maroon font-bold rounded-lg hover:bg-gold-light transition-colors mb-2"
                >
                  ☎ +91 9606493393
                </a>
                <a
                  href="https://wa.me/919606493393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 px-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
