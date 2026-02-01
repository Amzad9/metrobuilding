import Image from 'next/image';
import Link from 'next/link';

export default function TeamCulture() {
  return (
    <section className="section-premium bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* LEFT COLUMN - Image */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden reveal-on-scroll image-cinematic layered-depth">
            <Image
              src="/team.png"
              alt="Metro Building Solutions team working on construction site"
              fill
              quality={90}
              className="object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* RIGHT COLUMN - Content */}
          <div className="bg-white p-8 md:p-12 lg:p-16 reveal-on-scroll">
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-wider mb-4">
                LIFE AT METRO BUILDING
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Dedicated Team, Quality Work
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                At Metro Building Solutions, you'll work with people who share your passion for solving challenging problems and making a difference. Our team brings expertise, dedication, and attention to detail to every remodeling project.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-gray-900 font-semibold hover:text-[#8BC34A] transition-colors group"
              >
                Explore Our Team
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
