import Image from 'next/image';
import Link from 'next/link';

export default function CommunityImpact() {
  return (
    <section className="section-premium bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* LEFT COLUMN - Content */}
          <div className="bg-gray-50 p-8 md:p-12 lg:p-16 order-2 lg:order-1 reveal-on-scroll">
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-wider mb-4">
                NORTH RIDGEVILLE, OHIO
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our Work In Your Local Community
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Together we can grow communities, strengthen economies, and improve lives. Metro Building Solutions is committed to enhancing North Ridgeville and surrounding Ohio communities through quality remodeling and construction services.
              </p>
              <Link
                href="/contact"
                className="btn-cinematic inline-flex items-center text-white px-8 py-4 font-bold"
              >
                Get Started
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Image */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[600px] overflow-hidden order-1 lg:order-2 reveal-on-scroll image-cinematic layered-depth">
            <Image
              src="/community.png"
              alt="Community construction and remodeling projects in North Ridgeville, Ohio"
              fill
              quality={90}
              className="object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
