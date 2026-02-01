import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="relative section-premium bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 parallax-element"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=90&auto=format&fit=crop)',
        }}
      ></div>
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.8) 50%, rgba(59, 130, 246, 0.5) 100%)',
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-executive-xl font-bold mb-8 text-white reveal-on-scroll">
          Transform Your Home Today
        </h2>
        <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
          Don't wait - start your dream project with Ohio's trusted construction experts. Free consultations available now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 reveal-on-scroll" style={{ animationDelay: '0.4s' }}>
          <a
            href="tel:+12163269759"
            className="btn-cinematic text-white px-10 py-5 font-bold text-lg shadow-lg flex items-center"
          >
            <svg className="w-7 h-7 mr-3 icon-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call (216) 326-9759
          </a>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-10 py-5 font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg"
          >
            Get Free Quote
          </Link>
        </div>
        <p className="text-gray-400 text-base reveal-on-scroll" style={{ animationDelay: '0.6s' }}>
          Serving North Ridgeville, Cleveland, and all of Northeast Ohio • Licensed & Insured
        </p>
      </div>
    </section>
  );
}
