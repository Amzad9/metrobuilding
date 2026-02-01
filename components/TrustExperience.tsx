import Image from 'next/image';

export default function TrustExperience() {
  return (
    <section className="section-premium bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN - Text Content */}
          <div className="reveal-on-scroll">
            {/* Header */}
            <div className="mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-executive-lg font-bold text-gray-900 mb-4 md:mb-6">
                Trusted Remodeling Experts in North Ridgeville
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Six years of dedicated service delivering exceptional remodeling and multi-family construction projects
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="card-cinematic bg-white p-6 md:p-8 transition-all duration-400 group layered-depth">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-linear-to-br from-[#8BC34A]/20 to-[#7CB342]/10 p-3 md:p-4 group-hover:from-[#8BC34A]/30 group-hover:to-[#7CB342]/20 transition-all duration-500 mr-3 md:mr-4 icon-metallic shrink-0">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8BC34A]">6</div>
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Years in Business</div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Serving North Ridgeville and surrounding Ohio communities with quality remodeling and construction services
                </p>
              </div>

              <div className="card-cinematic bg-white p-6 md:p-8 transition-all duration-400 group layered-depth">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-linear-to-br from-[#8BC34A]/20 to-[#7CB342]/10 p-3 md:p-4 group-hover:from-[#8BC34A]/30 group-hover:to-[#7CB342]/20 transition-all duration-500 mr-3 md:mr-4 icon-metallic shrink-0">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8BC34A]">2</div>
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Expert Team Members</div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Our dedicated team brings hands-on expertise and personalized attention to every remodeling project
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card-cinematic bg-gray-50 p-6 hover:bg-white transition-all duration-400 group layered-depth">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] p-3 group-hover:scale-105 transition-transform duration-400 shrink-0 icon-metallic">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-gray-900">Licensed</h4>
                    <p className="text-sm text-gray-600">Fully Licensed</p>
                  </div>
                </div>
              </div>

              <div className="card-cinematic bg-gray-50 p-6 hover:bg-white transition-all duration-400 group layered-depth">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] p-3 group-hover:scale-105 transition-transform duration-400 shrink-0 icon-metallic">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-gray-900">Insured</h4>
                    <p className="text-sm text-gray-600">Fully Insured</p>
                  </div>
                </div>
              </div>

              <div className="card-cinematic bg-gray-50 p-6 hover:bg-white transition-all duration-400 group layered-depth">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] p-3 group-hover:scale-105 transition-transform duration-400 shrink-0 icon-metallic">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-gray-900">Quality Guaranteed</h4>
                    <p className="text-sm text-gray-600">100% Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Images */}
          <div className="relative order-first lg:order-last reveal-on-scroll">
            <div className="grid grid-cols-1 gap-6">
              {/* Main Construction Image */}
            
              
              {/* Single Person Image */}
              <div className="relative h-[300px] md:h-[350px] lg:h-[700px] overflow-hidden shadow-2xl border-2 border-gray-200 image-cinematic layered-depth">
                <Image
                  src="/trust.png"
                  alt="Professional construction expert and business owner"
                  fill
                  quality={90}
                  className="object-cover object-center transform hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/5 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-white/95 backdrop-blur-sm p-4 border-2 border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Expert Leadership</h3>
                    <p className="text-xs text-gray-600">James Greene, Managing Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
