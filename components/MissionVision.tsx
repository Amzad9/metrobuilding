import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="section-premium bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN - Mission & Vision Content */}
          <div className="space-y-12 reveal-on-scroll">
            {/* Mission Block */}
            <div className="card-cinematic border-l-4 border-[#8BC34A] pl-8 py-4 layered-depth">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 icon-metallic">
                  <svg className="w-10 h-10 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-cinematic-glow">Our Mission</h3>
              </div>
              <div className="h-px bg-gray-200 mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                To deliver exceptional construction services that exceed client expectations while maintaining
                the highest standards of <span className="font-semibold text-gray-900">quality</span>,{' '}
                <span className="font-semibold text-gray-900">safety</span>, and{' '}
                <span className="font-semibold text-gray-900">environmental responsibility</span>.
              </p>
            </div>

            {/* Vision Block */}
            <div className="card-cinematic border-l-4 border-[#8BC34A] pl-8 py-4 layered-depth">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 icon-metallic">
                  <svg className="w-10 h-10 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-cinematic-glow">Our Vision</h3>
              </div>
              <div className="h-px bg-gray-200 mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                To be the most trusted and innovative construction company, recognized for{' '}
                <span className="font-semibold text-gray-900">excellence</span> in every project we undertake
                and for our positive impact on communities.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Premium Image */}
          <div className="relative order-first lg:order-last reveal-on-scroll">
            <div className="relative h-[500px] md:h-[700px] overflow-hidden border-2 border-gray-200 shadow-2xl image-cinematic layered-depth">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=900&fit=crop"
                alt="Professional construction team working together on building project"
                fill
                quality={90}
                className="object-cover transform hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Cinematic dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-transparent"></div>
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#8BC34A]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
