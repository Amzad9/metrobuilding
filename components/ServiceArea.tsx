import Image from 'next/image';

export default function ServiceArea() {
  const areas = [
    { name: 'North Ridgeville', featured: true },
    { name: 'Cleveland', featured: true },
    { name: 'Westlake', featured: false },
    { name: 'Avon', featured: false },
    { name: 'Elyria', featured: false },
    { name: 'Lorain', featured: false },
    { name: 'Sheffield', featured: false },
    { name: 'Amherst', featured: false },
    { name: 'Oberlin', featured: false },
    { name: 'Vermilion', featured: false },
  ];

  return (
    <section className="section-premium bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-executive-lg font-bold text-gray-900 mb-6">
            Serving Northeast Ohio
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MetroBuilding proudly serves homeowners and businesses throughout North Ridgeville, Cleveland, and surrounding Ohio communities. Our local expertise
            ensures we understand regional building codes, climate considerations, and the unique character of Ohio homes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN - Content */}
          <div className="space-y-8 reveal-on-scroll">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Local Construction Experts</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether you're in North Ridgeville, Cleveland, or any of the surrounding communities, we're your trusted
                local construction partner. Our team knows the area, works with local suppliers, and delivers results that
                enhance your property value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="card-cinematic bg-white p-6 layered-depth">
                  <div className="flex items-center mb-3">
                    <div className="bg-linear-to-br from-[#8BC34A]/20 to-[#7CB342]/10 p-3 mr-4 icon-metallic">
                      <svg className="w-6 h-6 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Local Knowledge</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Deep understanding of Ohio building codes and regional requirements
                  </p>
                </div>
                <div className="card-cinematic bg-white p-6 layered-depth">
                  <div className="flex items-center mb-3">
                    <div className="bg-linear-to-br from-[#8BC34A]/20 to-[#7CB342]/10 p-3 mr-4 icon-metallic">
                      <svg className="w-6 h-6 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Trusted Partners</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Established relationships with local suppliers and contractors
                  </p>
                </div>
              </div>
            </div>

           

            <div className="card-cinematic bg-linear-to-br from-[#8BC34A] to-[#7CB342] text-white p-8 layered-depth">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 mr-4 icon-metallic">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold mb-2 text-lg">Not sure if we serve your area?</p>
                  <p className="text-base mb-3">Call us at <a href="tel:+12163269759" className="font-bold underline hover:no-underline">(216) 326-9759</a> - we may be able to help!</p>
                  <p className="text-sm opacity-90">We're always expanding our service area to better serve Ohio homeowners.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Premium Image with Map Overlay */}
          <div className="relative reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-[600px] md:h-[700px] overflow-hidden shadow-2xl border-2 border-gray-200 image-cinematic layered-depth">
              <Image
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=800&fit=crop&q=90"
                alt="Cleveland, Ohio cityscape and surrounding areas"
                fill
                quality={90}
                className="object-cover transform hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Map Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="card-cinematic bg-white/95 backdrop-blur-sm p-6 layered-depth">
                  <div className="flex items-center mb-3">
                    <div className="bg-linear-to-br from-[#8BC34A] to-[#7CB342] p-2 mr-3 icon-metallic">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Northeast Ohio Service Area</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Serving communities across Cuyahoga, Lorain, and surrounding counties
                  </p>
                  <div className="w-full h-48 overflow-hidden border-2 border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.5!2d-82.0!3d41.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI0JzAwLjAiTiA4MsKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Service Area Map - North Ridgeville, Cleveland, Ohio"
                      className="w-full h-full"
                    ></iframe>
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
