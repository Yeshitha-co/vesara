'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', product: '', message: '' });
    }, 3000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/60">Enquiries · Quotations · Samples</p>
        </div>
      </section>

      <section className="section-padding bg-kraft-texture">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Address',
                content: '#001, Tower 14, Sattva Anugraha Apartments, Sajjepalya, Bengaluru — 560079',
              },
              { title: 'Phone', content: '+91 9606493393 / 9606937273' },
              { title: 'Email', content: 'yscreations36@gmail.com' },
            ].map((info) => (
              <div key={info.title} className="card-premium p-8 text-center">
                <h3 className="text-lg font-serif font-bold text-charcoal mb-3">{info.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{info.content}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Send a Message"
                title="We'd Love to"
                highlight="Hear From You"
                centered={false}
              />

              {submitted && (
                <div className="mb-6 p-4 bg-gold/10 border border-gold/30 text-charcoal rounded-xl text-sm">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                  />
                </div>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 bg-white px-4 py-3.5 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
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
                  className="w-full border border-gray-200 bg-white px-4 py-3.5 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all resize-none text-sm"
                />
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <SectionHeading
                eyebrow="How We Help"
                title="Partner With"
                highlight="Y S Creations"
                centered={false}
              />
              <div className="space-y-6">
                {[
                  { title: 'Request Quotations', desc: 'Competitive quotes for bulk orders with transparent pricing.' },
                  { title: 'Request Samples', desc: 'Try our premium products before placing bulk orders.' },
                  { title: 'Direct Contact', desc: 'Speak with our team for custom requirements and special orders.' },
                  { title: 'Partnership Opportunities', desc: 'Explore wholesale and distribution opportunities.' },
                  { title: 'Bulk Orders', desc: 'Special support and logistics for large volume orders.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1 bg-gold rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-serif font-bold text-charcoal mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl border border-gold/25 bg-white">
                <h4 className="font-serif font-bold text-charcoal mb-4">Quick Contact</h4>
                <div className="space-y-3">
                  <a
                    href="tel:+919606493393"
                    className="block text-center py-3 px-4 bg-charcoal text-gold font-semibold rounded-full hover:bg-charcoal/90 transition-colors text-sm"
                  >
                    Call +91 9606493393
                  </a>
                  <a
                    href="https://wa.me/919606493393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 px-4 border border-gold/40 text-gold-dark font-semibold rounded-full hover:bg-gold/5 transition-colors text-sm"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
