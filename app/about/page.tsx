import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-900 text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h1 className="text-executive-xl font-bold mb-6 text-white reveal-on-scroll">About Us</h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed reveal-on-scroll" style={{ animationDelay: '0.2s' }}>Quality remodeling and construction services in North Ridgeville</p>
          </div>
        </section>

        {/* About Content */}
        <section className="section-premium bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal-on-scroll">
                <h2 className="text-executive-lg font-bold text-gray-900 mb-8">
                  Your Trusted Remodeling Partner in North Ridgeville
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
                  <p>
                    Metro Building Solutions LLC has been serving North Ridgeville and surrounding Ohio communities 
                    for 6 years, specializing in residential remodeling and multi-family dwelling construction. 
                    As a general contractor, we bring expertise and dedication to every project.
                  </p>
                  <p>
                    Our experienced team combines quality craftsmanship with attention to detail, ensuring every 
                    remodeling project meets the highest standards. We understand the unique needs of homeowners 
                    and property investors, delivering results that enhance both functionality and value.
                  </p>
              
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="card-cinematic bg-gray-50 p-8 layered-depth">
                    <div className="text-6xl font-bold text-[#8BC34A] mb-4">6</div>
                    <div className="text-gray-700 font-bold text-lg">Years in Business</div>
                  </div>
                  <div className="card-cinematic bg-gray-50 p-8 layered-depth">
                    <div className="text-6xl font-bold text-[#8BC34A] mb-4">2</div>
                    <div className="text-gray-700 font-bold text-lg">Expert Team Members</div>
                  </div>
                  <div className="card-cinematic bg-gray-50 p-8 layered-depth">
                    <div className="text-6xl font-bold text-[#8BC34A] mb-4">100%</div>
                    <div className="text-gray-700 font-bold text-lg">Licensed & Insured</div>
                  </div>
                  <div className="card-cinematic bg-gray-50 p-8 layered-depth">
                    <div className="text-6xl font-bold text-[#8BC34A] mb-4">NR</div>
                    <div className="text-gray-700 font-bold text-lg">North Ridgeville Based</div>
                  </div>
                </div>
              </div>

              <div className="relative reveal-on-scroll">
                <div className="aspect-3/4 overflow-hidden shadow-2xl border-2 border-gray-200 image-cinematic layered-depth">
                  <div
                    className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-500 ease-out"
                    style={{
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&h=1000&fit=crop&q=90)',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-premium bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="relative order-last lg:order-first reveal-on-scroll">
                <div className="relative h-[500px] md:h-[700px] overflow-hidden border-2 border-gray-200 shadow-2xl image-cinematic layered-depth">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop&q=90"
                    alt="Professional construction and remodeling work"
                    fill
                    quality={90}
                    className="object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              {/* LEFT COLUMN - Mission & Vision Content */}
              <div className="space-y-12 reveal-on-scroll">
                {/* Mission Block */}
                <div className="card-cinematic border-l-4 border-[#8BC34A] pl-8 py-4 layered-depth">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="shrink-0 icon-metallic">
                      <svg className="w-10 h-10 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Mission</h3>
                  </div>
                  <div className="h-px bg-gray-200 mb-6"></div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    To deliver exceptional construction services that exceed client expectations while maintaining
                    the highest standards of <span className="font-bold text-gray-900">quality</span>,{' '}
                    <span className="font-bold text-gray-900">safety</span>, and{' '}
                    <span className="font-bold text-gray-900">environmental responsibility</span>.
                  </p>
                </div>

                {/* Vision Block */}
                <div className="card-cinematic border-l-4 border-[#8BC34A] pl-8 py-4 layered-depth">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="shrink-0 icon-metallic">
                      <svg className="w-10 h-10 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Vision</h3>
                  </div>
                  <div className="h-px bg-gray-200 mb-6"></div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    To be the most trusted and innovative construction company, recognized for{' '}
                    <span className="font-bold text-gray-900">excellence</span> in every project we undertake
                    and for our positive impact on communities.
                  </p>
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
