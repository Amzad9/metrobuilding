import Link from 'next/link';

export default function LeadCapture() {
  return (
    <section className="section-premium bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#8BC34A]/5 via-transparent to-[#3B82F6]/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-executive-lg font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              Get a free consultation and quote today. Our team is ready to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] w-20 h-20 flex items-center justify-center mx-auto mb-6 icon-metallic">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ display: 'block', margin: '0 auto' }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cinematic-glow">Call Us Now</h3>
              <a
                href="tel:+12163269759"
                className="text-3xl font-bold text-[#8BC34A] hover:text-[#7CB342] transition-colors block mb-3"
              >
                (216) 326-9759
              </a>
              <p className="text-gray-400 text-base">Mon-Fri: 8AM-6PM</p>
            </div>

            <div className="text-center reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] w-20 h-20 flex items-center justify-center mx-auto mb-6 icon-metallic">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ display: 'block', margin: '0 auto' }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cinematic-glow">Get Free Quote</h3>
              <Link
                href="/contact"
                className="btn-cinematic inline-block text-white px-8 py-4 font-bold"
              >
                Request Quote
              </Link>
            </div>

            <div className="text-center reveal-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] w-20 h-20 flex items-center justify-center mx-auto mb-6 icon-metallic">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ display: 'block', margin: '0 auto' }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cinematic-glow">Email Us</h3>
              <a
                href="https://www.metrobuilding.biz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#8BC34A] hover:text-[#7CB342] transition-colors"
              >
                www.metrobuilding.biz
              </a>
            </div>
          </div>

          <div className="card-cinematic bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md p-10 border-2 border-white/20 layered-depth reveal-on-scroll">
            <h3 className="text-3xl font-bold mb-6 text-center text-cinematic-glow">Quick Contact Form</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-6 py-4 bg-white/10 border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-6 py-4 bg-white/10 border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-6 py-4 bg-white/10 border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg"
              />
              <select className="px-6 py-4 bg-white/10 border-2 border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg">
                <option value="" className="bg-gray-800">Project Type</option>
                <option value="kitchen" className="bg-gray-800">Kitchen Remodel</option>
                <option value="bathroom" className="bg-gray-800">Bathroom Remodel</option>
                <option value="addition" className="bg-gray-800">Home Addition</option>
                <option value="other" className="bg-gray-800">Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="px-6 py-4 bg-white/10 border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] md:col-span-2 resize-none transition-all duration-300 text-lg"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 btn-cinematic text-white px-10 py-5 font-bold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
