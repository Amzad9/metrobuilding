'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-900 text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h1 className="text-executive-xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">Get in touch with us for your construction needs</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-premium bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="reveal-on-scroll">
                <h2 className="text-executive-lg font-bold text-gray-900 mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold text-gray-900 mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 bg-white focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] outline-none transition-all duration-300 text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold text-gray-900 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 bg-white focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] outline-none transition-all duration-300 text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-base font-semibold text-gray-900 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 bg-white focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] outline-none transition-all duration-300 text-lg"
                      placeholder="(216) 326-9759"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-base font-semibold text-gray-900 mb-3">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 bg-white focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] outline-none transition-all duration-300 text-lg"
                    >
                      <option value="">Select a subject</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="industrial">Industrial Projects</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-base font-semibold text-gray-900 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 bg-white focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] outline-none resize-none transition-all duration-300 text-lg"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-cinematic w-full text-white px-10 py-5 font-bold text-lg shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="reveal-on-scroll">
                <h2 className="text-executive-lg font-bold text-gray-900 mb-8">Get in Touch</h2>
                <div className="space-y-6 mb-10">
                  <div className="card-cinematic bg-white p-6 group layered-depth">
                    <div className="flex items-start">
                      <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] p-4 mr-5 icon-metallic">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Address</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          5911 Olive Ave<br />
                          North Ridgeville, OH 44039
                        </p>
                        <p className="text-gray-500 text-sm mt-2">Metro Building Solutions LLC</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-cinematic bg-white p-6 group layered-depth">
                    <div className="flex items-start">
                      <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] p-4 mr-5 icon-metallic">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                        <p className="text-gray-600 text-lg">
                          <a href="tel:+12163269759" className="hover:text-[#8BC34A] transition-colors">(216) 326-9759</a>
                        </p>
                        <p className="text-gray-500 text-sm mt-2">Contact: James Greene, Managing Member</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-cinematic bg-white p-6 group layered-depth">
                    <div className="flex items-start">
                      <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] p-4 mr-5 icon-metallic">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Website</h3>
                        <p className="text-gray-600 text-lg">
                          <a href="https://www.metrobuilding.biz" target="_blank" rel="noopener noreferrer" className="hover:text-[#8BC34A] transition-colors">www.metrobuilding.biz</a>
                        </p>
                        <p className="text-gray-500 text-sm mt-2">Metro Building Solutions LLC</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-cinematic bg-white p-6 group layered-depth">
                    <div className="flex items-start">
                      <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] p-4 mr-5 icon-metallic">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h3>
                        <p className="text-gray-600 text-lg">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 text-lg">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="text-gray-600 text-lg">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="mt-8 reveal-on-scroll">
                  <h3 className="font-bold text-gray-900 mb-6 text-xl">Find Us on Map</h3>
                  <div className="w-full h-96 overflow-hidden shadow-2xl border-2 border-gray-200 image-cinematic">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5!2d-82.0!3d41.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831a8b8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2s5911%20Olive%20Ave%2C%20North%20Ridgeville%2C%20OH%2044039!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Metro Building Solutions LLC - 5911 Olive Ave, North Ridgeville, OH 44039"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
