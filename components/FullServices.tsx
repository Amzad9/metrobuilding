import Link from 'next/link';
import Image from 'next/image';

export default function FullServices() {
  const services = [
    {
      title: 'Bathroom Remodeling',
      description: 'Create a luxurious bathroom retreat with premium fixtures and elegant design.',
      icon: '🚿',
      image: '/services/bathroom.png',
      imageAlt: 'Luxury bathroom renovation with modern fixtures',
    },
    {
      title: 'Home Additions',
      description: 'Expand your living space with seamless additions that match your existing home perfectly.',
      icon: '🏗️',
      image: '/services/Home.png',
      imageAlt: 'Home addition construction project',
    },
    {
      title: 'Roofing Services',
      description: 'Protect your investment with durable, professional roofing solutions for all roof types.',
      icon: '🏠',
      image: '/services/roofing.png',
      imageAlt: 'Professional roofing installation',
    },
    {
      title: 'Waterproofing',
      description: 'Keep your basement and foundation dry with expert waterproofing solutions.',
      icon: '💧',
      image: '/services/waterproofing.png',
      imageAlt: 'Basement waterproofing services',
    },
    {
      title: 'Decks & Patios',
      description: 'Create beautiful outdoor living spaces with custom decks and patios for entertaining.',
      icon: '🌳',
      image: '/services/decks &patios.png',
      imageAlt: 'Custom deck and patio construction',
    },
    {
      title: 'Full Home Flips',
      description: 'Complete home transformations that maximize value and appeal for investors and homeowners.',
      icon: '🔄',
      image: '/services/Full Home Flips.png',
      imageAlt: 'Full home renovation and flip',
    },
    {
      title: 'Rainscreen Systems',
      description: 'Advanced exterior cladding systems that protect and beautify your home.',
      icon: '🌧️',
      image: '/services/Rainscreen Systems.png',
      imageAlt: 'Rainscreen system installation on exterior',
    },
    {
      title: 'Basement Finishing',
      description: 'Transform your unfinished basement into a functional living space with professional finishing services.',
      icon: '🏡',
      image: '/services/Basement Finishing.png',
      imageAlt: 'Finished basement with modern design',
    },
    {
      title: 'Siding & Exterior',
      description: 'Enhance your home\'s curb appeal and protection with professional siding installation and exterior work.',
      icon: '🏛️',
      image: '/services/Siding & Exterior.png',
      imageAlt: 'Professional siding installation',
    },
  ];

  return (
    <section className="section-premium bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-executive-lg font-bold text-gray-900 mb-6">Complete Remodeling Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From kitchen remodels to multi-family dwellings, we handle every aspect of your remodeling and construction project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-cinematic bg-white overflow-hidden group cursor-pointer layered-depth reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-96 overflow-hidden bg-gray-200 image-cinematic">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  quality={90}
                  className="object-cover transform group-hover:scale-125 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal-on-scroll">
          <Link
            href="/services"
            className="btn-cinematic inline-block text-white px-12 py-5 font-bold shadow-lg text-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
